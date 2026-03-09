import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-ivory min-h-screen pt-40 pb-24">
      <SEO page={t('nav.contact')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-serif text-marble-dark">{t('nav.contact')}</h1>
              <p className="text-deep-brown/60 text-xl font-light leading-relaxed max-w-lg">
                {t('home.invite_p')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-gold transition-colors duration-500">
                  <Mail className="text-gold group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-1">Email</p>
                  <p className="text-xl font-serif text-marble-dark">contact@uvarov.psy</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-gold transition-colors duration-500">
                  <MapPin className="text-gold group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-1">Location</p>
                  <p className="text-xl font-serif text-marble-dark">Amsterdam / Online</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-gold transition-colors duration-500">
                  <MessageSquare className="text-gold group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-1">Language</p>
                  <p className="text-xl font-serif text-marble-dark italic">{t('footer.note')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-beige/20 rounded-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60">Name</label>
                  <input type="text" className="w-full bg-ivory/30 border-b border-beige/30 py-3 px-4 focus:outline-none focus:border-gold transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60">Email</label>
                  <input type="email" className="w-full bg-ivory/30 border-b border-beige/30 py-3 px-4 focus:outline-none focus:border-gold transition-colors font-light" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60">Message</label>
                <textarea rows={6} className="w-full bg-ivory/30 border-b border-beige/30 py-3 px-4 focus:outline-none focus:border-gold transition-colors font-light resize-none"></textarea>
              </div>
              <button type="button" className="w-full btn-primary py-5 text-lg tracking-[0.2em]">
                {t('common.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
