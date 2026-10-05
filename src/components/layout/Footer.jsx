import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personalInfo';

const currentYear = new Date().getFullYear();

export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-dark-bg/60 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200/70 dark:border-white/10">
          {/* Column 1: Monogram & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo via-brand-violet to-brand-pink p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white dark:bg-dark-bg rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-black text-sm text-gradient">TT</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {personalInfo.institution}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Software Engineering undergraduate passionate about crafting thoughtful web applications, exploring machine learning models, and building clean, accessible digital experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Software Engineering Internships & Opportunities
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-brand-violet dark:hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-violet dark:hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-violet dark:hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-violet dark:hover:text-white transition-colors">
                  Education & Journey
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-violet dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white tracking-wider uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-violet dark:hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-brand-violet/10 group-hover:text-brand-violet transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-violet dark:hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-brand-violet/10 group-hover:text-brand-violet transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span>LinkedIn Network</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-violet dark:hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-brand-violet/10 group-hover:text-brand-violet transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Tanha Tasri. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-brand-violet dark:hover:text-white transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
