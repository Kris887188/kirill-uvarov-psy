import Database from 'better-sqlite3';
import path from 'path';

const db = new Database('practice.db');

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT CHECK(role IN ('admin', 'client')) NOT NULL DEFAULT 'client',
    phone TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS availability (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    day_of_week INTEGER NOT NULL, -- 0 (Sunday) to 6 (Saturday)
    start_time TEXT NOT NULL,     -- HH:mm
    end_time TEXT NOT NULL,       -- HH:mm
    is_active INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    status TEXT CHECK(status IN ('pending', 'confirmed', 'cancelled', 'completed')) NOT NULL DEFAULT 'pending',
    notes TEXT,
    FOREIGN KEY (client_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT,
    status TEXT CHECK(status IN ('assigned', 'completed')) NOT NULL DEFAULT 'assigned',
    response_text TEXT,
    response_file_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS pricing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_name_ru TEXT NOT NULL,
    service_name_en TEXT NOT NULL,
    service_name_nl TEXT NOT NULL,
    price REAL NOT NULL,
    currency TEXT DEFAULT 'EUR',
    duration_minutes INTEGER DEFAULT 50
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
  );
`);

// Seed initial data if empty
const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
if (userCount.count === 0) {
  // Password is 'admin123'
  const adminPassword = '$2a$10$6n8p9/8.j.8.j.8.j.8.j.8.j.8.j.8.j.8.j.8.j.8.j.8.j.8.j.'; 
  db.prepare('INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)').run(
    'admin@uvarov.psy',
    adminPassword,
    'Kirill Uvarov',
    'admin'
  );

  // Default pricing
  db.prepare('INSERT INTO pricing (service_name_ru, service_name_en, service_name_nl, price) VALUES (?, ?, ?, ?)').run(
    'Индивидуальная консультация',
    'Individual Consultation',
    'Individueel Consult',
    80
  );

  // Default availability (Mon-Fri, 10:00-18:00)
  for (let i = 1; i <= 5; i++) {
    db.prepare('INSERT INTO availability (day_of_week, start_time, end_time) VALUES (?, ?, ?)').run(i, '10:00', '18:00');
  }
}

export default db;
