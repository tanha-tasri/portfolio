import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  CheckCircle2, 
  FolderGit2, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/projects';
import { personalInfo } from '../../data/personalInfo';

export const Projects = () => {

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Portfolio Highlights"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world applications built with modern engineering principles, clean architectures, and responsive user interfaces."
        />

        {/* Projects Grid */}
        <div className="space-y-12">
          
          {/* Main Featured Project: MentraLink (Large Hero Card) */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-3xl border border-brand-violet/30 overflow-hidden shadow-2xl shadow-brand-violet/5 hover:border-brand-violet/60 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left Column: Visual Mockup / Interface Preview (5 cols) */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#121428] to-[#1c1836] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-700/50 relative overflow-hidden group">
                    
                    {/* Background glow blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/20 blur-3xl pointer-events-none" />

                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        mentra-link.vercel.app
                      </div>
                    </div>

                    {/* Interactive UI Mockup Graphic for MentraLink */}
                    <div className="my-6 relative z-10 space-y-4">
                      {/* App Header Mockup */}
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-indigo to-brand-pink flex items-center justify-center text-white font-bold text-xs">
                              M
                            </div>
                            <span className="font-heading font-bold text-white text-sm">
                              MentraLink System
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Active System
                          </span>
                        </div>

                        {/* Metric Tiles Mockup */}
                        <div className="grid grid-cols-2 gap-2 text-left pt-2">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-[10px] text-slate-400 block">Mentor Match</span>
                            <span className="text-sm font-bold text-white">Direct Connect</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-[10px] text-slate-400 block">Workflow</span>
                            <span className="text-sm font-bold text-brand-pink">Session Sched.</span>
                          </div>
                        </div>
                      </div>

                      {/* Architecture Callout */}
                      <div className="p-3 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-between text-xs text-brand-300">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-brand-violet" />
                          <span>MERN Full-Stack Engine</span>
                        </div>
                        <span className="text-[10px] bg-brand-violet/20 px-2 py-0.5 rounded text-white font-mono">
                          React • Express • Mongo
                        </span>
                      </div>
                    </div>

                    {/* Bottom Status Row */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live on Vercel
                      </span>
                      <span className="text-[11px] font-mono text-slate-500"></span>
                    </div>
                  </div>

                  {/* Right Column: Project Details & Actions (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Badge & Subtitle */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-violet/15 text-brand-violet dark:text-brand-300 border border-brand-violet/20">
                          {project.badge}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights / Features List */}
                      <div className="mt-5 space-y-2.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Key Capabilities &amp; Architecture:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-white/10">
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTAs: Live Demo & GitHub */}
                    <div className="pt-6 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-200/70 dark:border-white/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-pink shadow-md shadow-brand-violet/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm glass-card text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 hover:border-brand-violet/40 hover:bg-brand-violet/5 dark:hover:bg-brand-violet/15 transition-all"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}

          {/* Additional / Placeholder Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-dashed border-slate-300 dark:border-white/15 hover:border-brand-violet/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                        {project.badge}
                      </span>
                      <span className="text-xs text-slate-400 italic">
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-violet transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 italic"></span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-violet dark:text-brand-300 hover:underline flex items-center gap-1"
                    >
                      <span>Check GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Clean Guidance Callout for Adding More Projects */}
          <div className="p-4 sm:p-5 rounded-2xl glass-card border border-brand-violet/20 bg-brand-violet/5 dark:bg-brand-violet/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-violet/10 text-brand-violet">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white block font-semibold">
                  Want to showcase your next software project?
                </strong>
                
              </div>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl glass-card border border-brand-violet/30 text-brand-violet dark:text-brand-300 font-semibold hover:bg-brand-violet/10 transition-colors shrink-0"
            >
              Visit Tanha's GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
