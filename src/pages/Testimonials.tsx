import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'John Smith',
      location: 'Orlando, FL',
      text: 'Waterland Pools transformed our backyard. Their attention to detail during the renovation was incredible. Highly recommend Miguel and his team!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      location: 'Windermere, FL',
      text: 'We had a mysterious leak that two other companies couldn’t find. Waterland found it in an hour and fixed it the same day. Lifesavers!',
      rating: 5
    },
    {
      name: 'Michael Davis',
      location: 'Winter Park, FL',
      text: 'The weekly maintenance service is top-notch. I never have to worry about my pool being ready for the weekend. Reliable and professional.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      location: 'Lake Nona, FL',
      text: 'Excellent customer service. They took the time to explain everything during the estimate. Very transparent and fair pricing.',
      rating: 5
    }
  ];

  return (
    <>
      <section className="relative bg-brand-dark py-32 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
            alt="Pool Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('testimonials_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium">
            {t('testimonials_hero_subtitle')}
          </p>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[60px] fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,115.6,115.59,173.45,108a95.43,95.43,0,0,0,44.72-15.72c35.34-23.6,77.35-31.18,103.22-35.84Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl relative"
              >
                <Quote className="absolute top-6 right-8 text-brand-light/20" size={48} />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-dark">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background and Wave */}
      <section className="relative py-32 overflow-hidden">
        {/* Top Wave Effect */}
        <div className="absolute top-0 left-0 w-full leading-[0] z-10 rotate-180">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[60px] fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,115.6,115.59,173.45,108a95.43,95.43,0,0,0,44.72-15.72c35.34-23.6,77.35-31.18,103.22-35.84Z"></path>
          </svg>
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=2000" 
            alt="Crystal clear pool" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">{t('home_ready_title')}</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              {t('home_ready_subtitle')}
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-brand-light text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-brand-light/90 transition-all active:scale-95"
            >
              {t('cta_schedule')}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
