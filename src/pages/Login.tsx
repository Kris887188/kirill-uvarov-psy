import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const body = isLogin ? { email, password } : { email, password, name };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      
      if (res.ok) {
        login(data.token, data.user);
        const redirect = searchParams.get('redirect') || (data.user.role === 'admin' ? '/admin' : '/portal');
        navigate(redirect);
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="pt-40 pb-24 bg-ivory min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-10 border border-beige/30 shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-marble-dark mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-deep-brown/50 text-sm uppercase tracking-widest">
            {isLogin ? 'Client Portal Access' : 'Join the Practice'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-deep-brown/60 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-beige/30 focus:border-gold outline-none transition-colors font-serif text-lg"
              />
            </div>
          )}
          <div>
            <label className="block text-xs uppercase tracking-widest text-deep-brown/60 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-beige/30 focus:border-gold outline-none transition-colors font-serif text-lg"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-deep-brown/60 mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-beige/30 focus:border-gold outline-none transition-colors font-serif text-lg"
            />
          </div>

          <button type="submit" className="w-full btn-primary mt-4">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-beige/20 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-gold hover:text-deep-brown transition-colors font-serif"
          >
            {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
