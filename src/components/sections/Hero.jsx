import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  GraduationCap, 
  Code, 
  FolderGit2,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personalInfo';

export const Hero = () => {
  // Dynamic typing animation state
  const roles = personalInfo.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length + 1 === currentFullRole.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const handleResumeClick = (e) => {
    if (personalInfo.resumeUrl === '#' || !personalInfo.resumeUrl) {
      e.preventDefault();
      setShowResumeNotice(true);
      setTimeout(() => setShowResumeNotice(false), 5000);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-card border border-brand-violet/25 text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
              </span>
              <span>Software Engineering Student • CGPA 3.63/4.00</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="text-gradient drop-shadow-sm">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Dynamic Typing Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
                I build as a
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gradient-cyan border-b-2 border-brand-cyan/40 min-w-[20px]">
                {displayedText}
                <span className="animate-pulse ml-0.5 text-brand-pink font-light">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            {/* Resume Placeholder Notice */}
            {showResumeNotice && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex items-center gap-2 justify-center lg:justify-start"
              >
                <Info className="w-4 h-4 shrink-0 text-amber-500" />
                <span>[Resume PDF Link Placeholder] Upload your resume to <code>/public/resume.pdf</code> and update <code>resumeUrl</code> in <code>src/data/personalInfo.js</code>.</span>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-pink shadow-lg shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={personalInfo.resumeUrl}
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm glass-card text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-white/10 hover:border-brand-violet/50 hover:bg-brand-violet/5 dark:hover:bg-brand-violet/15 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-brand-violet dark:text-brand-300" />
                <span>Download Resume</span>
              </a>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-600 dark:text-slate-300 hover:text-brand-violet dark:hover:text-white border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">
                Find me on:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-brand-violet dark:hover:text-white hover:border-brand-violet/40 hover:scale-110 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-[#0077b5] dark:hover:text-[#38bdf8] hover:border-sky-500/40 hover:scale-110 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email to Tanha Tasri"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-brand-pink hover:border-brand-pink/40 hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Avatar with Gradient Ring & Badges (5 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Rotating Glowing Gradient Ring */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-indigo via-brand-pink to-brand-cyan opacity-80 blur-lg animate-spin-slow"
                style={{ animationDuration: '20s' }}
              />

              {/* Middle Border Ring */}
              <div className="absolute inset-2 rounded-full p-[2px] bg-gradient-to-tr from-brand-indigo via-brand-violet to-brand-pink">
                <div className="w-full h-full rounded-full bg-slate-50 dark:bg-dark-bg" />
              </div>

              {/* Inner Avatar Container */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden glass-card flex flex-col items-center justify-center p-6 text-center shadow-2xl border border-white/20">
                {personalInfo.profilePhoto ? (
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-2 select-none">
                    {/* Monogram Badge */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-pink p-[2px] shadow-lg shadow-brand-violet/30 animate-pulse-slow">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                        <span className="font-heading font-black text-2xl text-gradient">TT</span>
                      </div>
                    </div>
                    
                    <span className="font-heading font-bold text-lg text-slate-900 dark:text-white mt-1">
                      Tanha Tasri
                    </span>

                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-violet/10 text-brand-violet dark:text-brand-300 font-medium">
                      BSc Software Engineering
                    </span>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      [Profile Photo Placeholder]
                    </p>
                  </div>
                )}
              </div>

              {/* Floating Interactive Badge 1: CGPA Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 right-2 sm:right-4 z-20 px-3.5 py-2 rounded-2xl glass-card border border-brand-violet/30 shadow-xl flex items-center gap-2.5 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-violet text-white">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 leading-none">
                    Academic CGPA
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {personalInfo.cgpa}
                  </p>
                </div>
              </motion.div>

              {/* Floating Interactive Badge 2: Featured Project MentraLink Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 left-0 sm:left-2 z-20 px-3.5 py-2 rounded-2xl glass-card border border-brand-pink/30 shadow-xl flex items-center gap-2.5 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-xl bg-gradient-to-tr from-brand-pink to-brand-violet text-white">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 leading-none">
                    Featured Project
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-1">
                    MentraLink <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </p>
                </div>
              </motion.div>

              {/* Floating Interactive Badge 3: Tech Stack Bottom Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-6 -right-4 sm:right-0 z-20 px-3 py-1.5 rounded-xl glass-card border border-brand-cyan/30 shadow-lg hidden sm:flex items-center gap-2"
              >
                <Code className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  React • Node • C++
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
