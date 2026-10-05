import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Globe, 
  Cpu, 
  LineChart, 
  CheckCircle2, 
  Sparkles, 
  Code2
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/personalInfo';

export const About = () => {
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-brand-indigo" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-violet" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-brand-pink" />;
      default:
        return <Code2 className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Get to know me"
          title="About"
          highlight="Tanha Tasri"
          subtitle="A dedicated Software Engineering student focused on building purposeful software solutions with strong problem-solving discipline."
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Bio Narrative + Quick Key Attributes (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-white/10"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-violet dark:text-brand-300">
                <Sparkles className="w-4 h-4" />
                <span>My Journey &amp; Passion</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                Building scalable web solutions while expanding into intelligent systems.
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am an undergraduate student in <strong className="text-slate-900 dark:text-white font-semibold">Software Engineering</strong> at{' '}
                  <span className="text-brand-violet dark:text-brand-300 font-semibold">{personalInfo.institution}</span>, maintaining an academic standing of <strong className="text-slate-900 dark:text-white font-semibold">CGPA {personalInfo.cgpa}</strong>.
                </p>
                <p>
                  My engineering journey combines structured problem-solving in languages like <span className="font-medium text-slate-800 dark:text-slate-200">C++, Java, and Python</span> with modern full-stack development using <span className="font-medium text-slate-800 dark:text-slate-200">React.js, Node.js, Express, and MongoDB</span>.
                </p>
                <p>
                  Whether architecting student mentorship systems like <strong className="text-brand-pink font-semibold">MentraLink</strong> or diving into machine learning algorithms and exploratory data science, I thrive on translating abstract ideas into intuitive, accessible user experiences.
                </p>
              </div>
            </div>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-8 mt-8 border-t border-slate-200/70 dark:border-white/10">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Clean Code &amp; Modular Structure</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strong Academic Foundation</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Continuous Learning Mindset</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Collaborative Version Control (Git)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Snapshot Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between glass-card rounded-3xl p-6 sm:p-8 border border-brand-violet/25 relative overflow-hidden"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-violet p-0.5 shadow-md shadow-brand-violet/20">
                  <div className="w-full h-full bg-white dark:bg-dark-card rounded-[14px] flex items-center justify-center text-brand-violet dark:text-brand-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Enrolled
                </span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                  Undergraduate Degree
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  BSc in Software Engineering
                </h4>
                <p className="text-sm font-medium text-brand-violet dark:text-brand-300 mt-0.5">
                  Green University of Bangladesh
                </p>
              </div>

              {/* CGPA Card Highlight */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-violet/10 to-brand-pink/10 border border-brand-violet/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Cumulative GPA
                  </p>
                  <p className="text-2xl font-black text-gradient">
                    {personalInfo.cgpa}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                  <span className="block font-semibold text-slate-700 dark:text-slate-300">Scale of 4.00</span>
                  <span>Excellent Standing</span>
                </div>
              </div>

              {/* Core Learning Topics */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Core Engineering Fields:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Algorithms & Data Structures', 'OOP (Java/C++)', 'Web Engineering', 'DBMS (SQL/NoSQL)'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Department of CSE</span>
              <a
                href="#education"
                className="text-brand-violet hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>View Timeline</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Interests Section */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Core Technical Interests
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              The primary domains where I invest my curiosity and project time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalInfo.interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 hover:border-brand-violet/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {getInterestIcon(interest.icon)}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-violet transition-colors">
                    {interest.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center text-xs font-semibold text-brand-violet dark:text-brand-300">
                  <span>Explore domain projects</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
