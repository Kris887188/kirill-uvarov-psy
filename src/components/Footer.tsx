import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-marble-dark text-ivory py-32 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-5 space-y-10">
            <h3 className="text-3xl font-serif tracking-[0.2em] uppercase">Kirill Uvarov</h3>
            <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-bold">{t('footer.legal')}</p>
            <p className="text-ivory/40 text-lg leading-relaxed font-light max-w-sm text-balance">
              {t('footer.disclaimer')}
            </p>
          </div>
          
          <div className="md:col-span-3 space-y-10">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gold/40">{t('nav.contact')}</h4>
            <div className="space-y-4 text-ivory/60 text-lg font-light">
              <p>contact@uvarov.psy</p>
              <p>Amsterdam / Online</p>
              <p className="text-gold italic font-serif">{t('footer.note')}</p>
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-10">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gold/40">Legal</h4>
            <div className="flex flex-col space-y-4 text-ivory/60 text-lg font-light">
              <Link to="/privacy" className="hover:text-gold transition-colors duration-500">{t('legal.privacy_title')}</Link>
              <Link to="/terms" className="hover:text-gold transition-colors duration-500">{t('legal.terms_title')}</Link>
              <Link to="/disclaimer" className="hover:text-gold transition-colors duration-500">{t('legal.disclaimer_title')}</Link>
              <p className="pt-4 text-[10px] tracking-[0.2em] opacity-40">KvK: 12345678 (placeholder)</p>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center text-ivory/20 text-[9px] uppercase tracking-[0.4em] font-bold">
          <p>© {new Date().getFullYear()} Kirill Uvarov. All rights reserved.</p>
          <p>A space for reflection and clarity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
