import express from "express";
import { createServer as createViteServer } from "vite";
import db from "./db.ts";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-dev";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---

  // Auth
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
  });

  app.post("/api/auth/register", (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const result = db.prepare('INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)').run(email, hashedPassword, name, 'client');
      const token = jwt.sign({ id: result.lastInsertRowid, role: 'client' }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: result.lastInsertRowid, email, name, role: 'client' } });
    } catch (e) {
      res.status(400).json({ error: "User already exists" });
    }
  });

  // Pricing
  app.get("/api/pricing", (req, res) => {
    const pricing = db.prepare('SELECT * FROM pricing').all();
    res.json(pricing);
  });

  // Availability
  app.get("/api/availability", (req, res) => {
    const availability = db.prepare('SELECT * FROM availability WHERE is_active = 1').all();
    res.json(availability);
  });

  // Bookings
  app.get("/api/bookings", (req, res) => {
    // In a real app, verify JWT and filter by user
    const bookings = db.prepare(`
      SELECT b.*, u.name as client_name 
      FROM bookings b 
      JOIN users u ON b.client_id = u.id
    `).all();
    res.json(bookings);
  });

  app.post("/api/bookings", (req, res) => {
    const { client_id, start_time, end_time, notes } = req.body;
    const result = db.prepare('INSERT INTO bookings (client_id, start_time, end_time, notes) VALUES (?, ?, ?, ?)').run(client_id, start_time, end_time, notes);
    res.json({ id: result.lastInsertRowid });
  });

  // Assignments
  app.get("/api/assignments/:clientId", (req, res) => {
    const assignments = db.prepare('SELECT * FROM assignments WHERE client_id = ?').all(req.params.clientId);
    res.json(assignments);
  });

  // --- Vite middleware for development ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile(express.static("dist/index.html") as any);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
