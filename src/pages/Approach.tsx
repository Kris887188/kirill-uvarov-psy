import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Compass, Heart, BookOpen, Sparkles, Quote } from 'lucide-react';
import { SEO } from '../components/SEO';

const Approach: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Compass className="text-gold/60" size={40} strokeWidth={1} />,
    <Heart className="text-gold/60" size={40} strokeWidth={1} />,
    <BookOpen className="text-gold/60" size={40} strokeWidth={1} />,
    <Sparkles className="text-gold/60" size={40} strokeWidth={1} />
  ];

  const principles = t('approach.principles').map((p: any, idx: number) => ({
    ...p,
    icon: icons[idx]
  }));

  return (
    <div className="bg-ivory min-h-screen">
      <SEO page={t('approach.title')} />
      <div className="section-padding pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl font-serif text-marble-dark">{t('approach.title')}</h1>
              <p className="text-deep-brown/60 text-2xl md:text-3xl leading-relaxed font-light text-balance">
                {t('approach.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-beige/10 border border-beige/10 mb-32">
            {principles.map((p: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white p-12 md:p-16 flex flex-col gap-8 group"
              >
                <div className="group-hover:scale-110 transition-transform duration-700">{p.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-marble-dark group-hover:text-gold transition-colors duration-500">{p.title}</h3>
                  <p className="text-deep-brown/50 leading-relaxed font-light text-lg">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative py-32 px-12 md:px-24 marble-bg text-ivory overflow-hidden rounded-sm"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-ivory rounded-full"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
              <Quote className="text-gold/40 mx-auto" size={60} strokeWidth={1} />
              <h2 className="text-4xl md:text-5xl font-serif italic font-light leading-tight">
                {t('approach.quote')}
              </h2>
              <div className="w-24 h-px bg-gold/30 mx-auto"></div>
              <p className="text-beige/60 text-xl leading-relaxed font-light max-w-2xl mx-auto">
                {t('approach.footer_p')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
