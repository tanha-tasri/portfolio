import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { certificationsPlaceholder } from '../../data/education';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Milestones"
          title="Achievements &amp;"
          highlight="Certifications"
          subtitle="A dedicated space to showcase verified credentials, competitions, and extracurricular recognitions."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsPlaceholder.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 border border-dashed border-slate-300 dark:border-white/15 hover:border-brand-violet/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet/10 text-brand-violet dark:text-brand-300 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-violet transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  {cert.issuer} • {cert.year}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="italic">Editable in src/data/education.js</span>
                <span className="text-brand-violet font-semibold">[Add Credential Link]</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
