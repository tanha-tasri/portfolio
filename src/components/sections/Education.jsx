import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Award, 
  School
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { educationTimeline } from '../../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Academic Background"
          title="Education &amp;"
          highlight="Timeline"
          subtitle="University coursework, software engineering specialization, and verified academic milestones."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-brand-violet/30 dark:border-brand-violet/20 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Node Dot */}
              <div 
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center ${
                  item.isCurrent
                    ? 'bg-brand-violet text-white ring-4 ring-brand-violet/20 shadow-lg shadow-brand-violet/30'
                    : 'bg-slate-300 dark:bg-white/10 text-slate-600 dark:text-slate-400 ring-4 ring-slate-200 dark:ring-white/5'
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${item.isCurrent ? 'bg-white animate-ping' : 'bg-slate-500'}`} />
              </div>

              {/* Education Card */}
              <div 
                className={`glass-card rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                  item.isCurrent 
                    ? 'border-brand-violet/30 shadow-xl shadow-brand-violet/5 hover:border-brand-violet/50' 
                    : 'border-slate-200/80 dark:border-white/10 border-dashed'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.isCurrent 
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5'
                  }`}>
                    {item.status}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-semibold text-brand-violet dark:text-brand-300">
                  <School className="w-4 h-4" />
                  <span>{item.institution}</span>
                </div>

                {/* CGPA / Result Card Highlight */}
                {item.cgpa && (
                  <div className="mt-4 p-3.5 rounded-2xl bg-brand-violet/10 dark:bg-brand-violet/15 border border-brand-violet/20 inline-flex items-center gap-3">
                    <Award className="w-5 h-5 text-brand-violet dark:text-brand-300 shrink-0" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Academic Performance
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                        CGPA: {item.cgpa}
                      </span>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Focus Areas */}
                {item.focusAreas && (
                  <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-white/10">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5 uppercase tracking-wider">
                      Curriculum Competencies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.focusAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
