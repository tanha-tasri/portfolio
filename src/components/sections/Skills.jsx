import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  Terminal
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { skills, skillCategories } from '../../data/skills';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'languages':
        return <Code2 className="w-4 h-4" />;
      case 'web':
        return <Layers className="w-4 h-4" />;
      case 'databases':
        return <Database className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Technical Expertise"
          title="Skills &amp;"
          highlight="Technologies"
          subtitle="Core programming foundations, modern web development stacks, database systems, and workflow utilities."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-pink shadow-md shadow-brand-violet/20'
                    : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-brand-violet/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-white/10 hover:border-brand-violet/40 hover:shadow-xl hover:shadow-brand-violet/5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon Badge & Level Chip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} p-[1.5px] shadow-sm`}>
                      <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
                        <span className="font-heading font-black text-xs sm:text-sm">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-violet transition-colors">
                    {skill.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Row: Category & Level status */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/70 dark:border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 capitalize">
                    {getCategoryIcon(skill.category)}
                    <span>{skill.category}</span>
                  </div>
                  <span className="font-medium text-brand-violet dark:text-brand-300">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stack Overview Summary Bar */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-brand-violet/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-gradient">4</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Core Languages</p>
          </div>
          <div>
            <div className="text-2xl font-black text-gradient">React + Node</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Full-Stack Frameworks</p>
          </div>
          <div>
            <div className="text-2xl font-black text-gradient">SQL &amp; NoSQL</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-0.5">MySQL &amp; MongoDB</p>
          </div>
          <div>
            <div className="text-2xl font-black text-gradient">Git &amp; GitHub</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Version Control</p>
          </div>
        </div>

      </div>
    </section>
  );
};
