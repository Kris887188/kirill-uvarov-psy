import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { EDUCATION } from '../constants';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-ivory min-h-screen">
      <SEO page={t('about.title')} />
      {/* Hero Section */}
      <div className="section-padding pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-serif text-marble-dark">{t('about.title')}</h1>
                <p className="text-gold text-2xl md:text-3xl font-serif italic tracking-wide">{t('about.subtitle')}</p>
              </div>
              
              <div className="space-y-8 text-deep-brown/70 text-xl leading-relaxed font-light max-w-2xl">
                <p>{t('about.bio_p1')}</p>
                <p>{t('about.bio_p2')}</p>
                <p>{t('about.bio_p3')}</p>
                <p>{t('about.bio_p4')}</p>
              </div>

              <div className="pt-16 border-t border-beige/30">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-10">
                  {t('about.competencies_title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-deep-brown/60">
                  {t('about.competencies').map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-500"></div>
                      <span className="font-light tracking-wide text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="aspect-[3/4] bg-white p-4 shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Kirill Uvarov" 
                  className="w-full h-full object-cover grayscale brightness-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 border-t border-r border-gold/10 -z-0"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 border-b border-l border-gold/10 -z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="section-padding bg-white/50 border-y border-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif text-marble-dark mb-16">
              {t('home.education_title')}
            </h2>
            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 border-l border-gold/20 pb-4"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-gold"></div>
                  <div className="space-y-2">
                    <span className="text-gold font-serif italic text-lg">{edu.year}</span>
                    <h3 className="text-2xl font-serif text-marble-dark">
                      {edu.title[language as keyof typeof edu.title]}
                    </h3>
                    <p className="text-deep-brown/60 text-lg font-light">
                      {edu.institution[language as keyof typeof edu.institution]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Quote */}
      <div className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="w-px h-24 bg-gold/30 mx-auto mb-12"></div>
            <p className="text-3xl md:text-4xl font-serif italic text-marble-dark leading-relaxed">
              "Psychology is not just a science of the mind, but an art of understanding the human soul in its most vulnerable and creative moments."
            </p>
            <div className="w-px h-24 bg-gold/30 mx-auto mt-12"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
