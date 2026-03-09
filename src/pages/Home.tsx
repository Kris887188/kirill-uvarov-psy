import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Shield, MessageSquare, ChevronDown, Plus, Minus, BookOpen } from 'lucide-react';
import { FOCUS_AREAS, EDUCATION, PRICING_DATA, ARTICLE_PREVIEWS } from '../constants';
import { SEO } from '../components/SEO';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-ivory">
      <SEO />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-marble-dark/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Reflective space" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-gold text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-4">
              {t('hero.specialty')}
            </h2>
            <h1 className="text-6xl md:text-9xl font-serif text-ivory leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-ivory/80 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed font-serif italic">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/consultations" className="btn-primary px-12 py-5 text-lg tracking-[0.2em]">
              {t('hero.cta')}
            </Link>
            <Link to="/approach" className="text-ivory hover:text-gold transition-colors duration-500 flex items-center gap-3 group tracking-widest uppercase text-sm font-bold">
              {t('hero.secondary_cta')}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-ivory/30"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-marble-dark leading-tight">
                {t('home.intro_title')}
              </h2>
              <div className="w-24 h-px bg-gold/30"></div>
              <div className="space-y-6 text-deep-brown/70 text-xl font-light leading-relaxed">
                <p>{t('home.intro_p1')}</p>
                <p>{t('home.intro_p2')}</p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-ivory overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=1000" 
                  alt="Minimalist art" 
                  className="w-full h-full object-cover grayscale brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border-b border-r border-gold/20 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-ivory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-marble-dark">{t('home.areas_title')}</h2>
            <p className="text-deep-brown/50 text-xl font-light">{t('home.areas_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 border border-beige/20 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="w-12 h-px bg-gold/30 mb-8 group-hover:w-full transition-all duration-700"></div>
                <h3 className="text-2xl font-serif text-marble-dark mb-4">
                  {area[language as keyof typeof area]}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-marble-dark text-ivory overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-serif">{t('home.how_it_works_title')}</h2>
              <p className="text-ivory/60 text-xl font-light leading-relaxed max-w-xl">
                {t('home.how_it_works_p')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <Calendar className="text-gold" size={32} strokeWidth={1} />
                  <h4 className="text-xl font-serif">Online & Offline</h4>
                  <p className="text-ivory/40 text-sm font-light">Zoom, Google Meet or Amsterdam Studio</p>
                </div>
                <div className="space-y-4">
                  <Shield className="text-gold" size={32} strokeWidth={1} />
                  <h4 className="text-xl font-serif">Confidential</h4>
                  <p className="text-ivory/40 text-sm font-light">Strict adherence to professional ethics</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] bg-white/5 rounded-sm"></div>
                <div className="aspect-square bg-white/5 rounded-sm"></div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-white/5 rounded-sm"></div>
                <div className="aspect-[3/4] bg-white/5 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] bg-ivory overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Kirill Uvarov" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-multiply"></div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif text-marble-dark">{t('home.about_preview_title')}</h2>
              <p className="text-deep-brown/70 text-xl font-light leading-relaxed">
                {t('home.about_preview_p')}
              </p>
              <Link to="/about" className="btn-outline inline-block px-12 py-4">
                {t('hero.secondary_cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif text-marble-dark">{t('home.articles_title')}</h2>
              <p className="text-deep-brown/50 text-xl font-light">{t('home.articles_subtitle')}</p>
            </div>
            <Link to="/articles" className="text-gold flex items-center gap-3 uppercase tracking-widest text-sm font-bold group">
              {t('common.more')}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {ARTICLE_PREVIEWS.slice(0, 3).map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-8 group cursor-pointer"
              >
                <div className="aspect-[16/9] bg-ivory overflow-hidden relative">
                  <div className="absolute inset-0 bg-marble-dark/5 group-hover:bg-marble-dark/0 transition-colors duration-700"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + article.id}?auto=format&fit=crop&q=80&w=800`} 
                    alt={article.title[language as keyof typeof article.title]} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-marble-dark group-hover:text-gold transition-colors duration-300">
                    {article.title[language as keyof typeof article.title]}
                  </h3>
                  <p className="text-deep-brown/50 font-light leading-relaxed line-clamp-2">
                    {article.desc[language as keyof typeof article.desc]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-ivory/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif text-marble-dark mb-8">{t('home.faq_title')}</h2>
            <div className="w-24 h-px bg-gold/30 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {t('faq').map((item: any, idx: number) => (
              <div key={idx} className="border-b border-beige/20">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-10 flex justify-between items-center text-left group"
                >
                  <span className="text-xl md:text-2xl font-serif text-marble-dark group-hover:text-gold transition-colors duration-300">
                    {item.q}
                  </span>
                  {openFaq === idx ? <Minus size={20} className="text-gold" /> : <Plus size={20} className="text-gold/40" />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-10 text-deep-brown/60 text-lg leading-relaxed font-light">
                    {item.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MessageSquare className="text-gold mx-auto" size={48} strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-serif text-marble-dark">{t('home.invite_title')}</h2>
          <p className="text-deep-brown/60 text-xl font-light leading-relaxed">
            {t('home.invite_p')}
          </p>
          <div className="pt-8">
            <Link to="/consultations" className="btn-primary px-16 py-6 text-xl tracking-[0.2em]">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
