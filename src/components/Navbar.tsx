import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Globe, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../constants';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated, user } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.approach'), path: '/approach' },
    { name: t('nav.consultations'), path: '/consultations' },
    { name: t('nav.articles'), path: '/articles' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-ivory/80 backdrop-blur-md border-b border-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-serif tracking-[0.15em] uppercase text-marble-dark group-hover:text-gold transition-colors duration-500">Kirill Uvarov</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60 -mt-1 font-bold">{t('footer.legal')}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] tracking-[0.25em] uppercase transition-all duration-500 hover:text-gold ${
                  location.pathname === item.path ? 'text-gold font-bold' : 'text-marble-dark/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-8 border-l border-beige/20 pl-10">
              <div className="flex space-x-4">
                {(['ru', 'en', 'nl'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-[10px] uppercase font-bold transition-colors duration-500 ${
                      language === lang ? 'text-gold' : 'text-marble-dark/30 hover:text-gold'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              
              <Link
                to={isAuthenticated ? (user?.role === 'admin' ? '/admin' : '/portal') : '/login'}
                className="flex items-center space-x-3 text-marble-dark/70 hover:text-gold transition-all duration-500 group"
              >
                <UserIcon size={14} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  {isAuthenticated ? t('nav.portal') : t('common.login')}
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-marble-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory border-b border-beige/30 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif text-marble-dark hover:text-gold"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-beige/30 flex justify-between items-center">
                <div className="flex space-x-4">
                  {(['ru', 'en', 'nl'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`text-xs uppercase font-bold ${
                        language === lang ? 'text-gold' : 'text-marble-dark/50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <Link
                  to={isAuthenticated ? (user?.role === 'admin' ? '/admin' : '/portal') : '/login'}
                  onClick={() => setIsOpen(false)}
                  className="text-deep-brown font-serif"
                >
                  {isAuthenticated ? t('nav.portal') : t('common.login')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
