import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { serviceData } from '../data/services';

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const cats = Object.values(serviceData).map(s => s.title.split(' in ')[0] || s.title);
    return ['all', ...Array.from(new Set(cats))];
  }, []);

  // Generate projects from service galleries
  const allProjects = useMemo(() => {
    return Object.entries(serviceData).flatMap(([id, service]) => {
      const category = service.title.split(' in ')[0] || service.title;
      return (service.gallery || []).map((image, idx) => ({
        id: `${id}-${idx}`,
        title: `${category} Project`,
        location: 'Central Florida',
        image,
        type: category
      }));
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    return allProjects.filter(p => p.type === activeFilter);
  }, [activeFilter, allProjects]);

  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-light rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-light rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t('portfolio_hero_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('portfolio_hero_subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-brand-light text-brand-dark shadow-lg shadow-brand-light/20 scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? (t('nav_portfolio') === 'Portfolio' ? 'All Projects' : 'Todos los Proyectos') : cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3] bg-white"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                    <span className="text-brand-light font-bold text-xs uppercase tracking-[0.2em] mb-3 block">{project.type}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="flex items-center text-slate-300 text-sm">
                      <svg className="w-4 h-4 mr-2 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg italic">No projects found in this category.</p>
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 bg-brand-dark p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t('portfolio_cta_title')}</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">{t('portfolio_cta_subtitle')}</p>
              <div className="pt-4">
                <a href="/contact" className="btn-primary inline-flex items-center px-10 py-4 text-lg">
                  {t('cta_schedule')}
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
