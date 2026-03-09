import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ARTICLE_PREVIEWS } from '../constants';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Articles: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-ivory min-h-screen pt-40 pb-24">
      <SEO page={t('nav.articles')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24 space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif text-marble-dark">{t('nav.articles')}</h1>
          <p className="text-deep-brown/60 text-xl font-light leading-relaxed">
            {t('home.articles_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ARTICLE_PREVIEWS.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 border border-beige/20 hover:border-gold/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-px bg-gold/30 group-hover:w-full transition-all duration-700"></div>
                <h3 className="text-2xl font-serif text-marble-dark group-hover:text-gold transition-colors duration-300">
                  {article.title[language as keyof typeof article.title]}
                </h3>
                <p className="text-deep-brown/50 font-light leading-relaxed">
                  {article.desc[language as keyof typeof article.desc]}
                </p>
              </div>
              <div className="mt-12">
                <Link to={`/articles/${article.slug}`} className="text-gold flex items-center gap-2 uppercase tracking-widest text-xs font-bold group-hover:gap-4 transition-all duration-300">
                  {t('common.more')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
