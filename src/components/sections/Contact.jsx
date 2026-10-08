import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/personalInfo';

export const Contact = () => {
  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Inline error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('success'); // 'success' | 'activation_pending'
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validate form fields
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address.';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearing when user fixes error
    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run full validation across fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      // Connect to FormSubmit service to route email directly to personalInfo.email
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`;
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        _subject: formData.subject?.trim()
          ? `[Portfolio Contact] ${formData.subject.trim()}`
          : `[Portfolio Contact] New message from ${formData.name.trim()}`,
        message: formData.message.trim(),
        _template: 'table',
        _captcha: 'false',
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== 'false') {
        setSubmitStatus('success');
        setSubmittedEmail(formData.email.trim());
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else if (result?.message && result.message.toLowerCase().includes('activation')) {
        // FormSubmit sends a 1-time activation email to personalInfo.email on the first ever submit
        setSubmitStatus('activation_pending');
        setSubmittedEmail(formData.email.trim());
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error(result?.message || 'Could not send message via form endpoint.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrors({
        form: 'Unable to send message automatically at this time. You can reach out directly via email or use the mail app button below.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badge="Let's Connect"
          title="Get in"
          highlight="Touch"
          subtitle="Have a question, an opportunity, or want to discuss a software project? Feel free to send a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact Details & Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Introductory Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 space-y-4">
              <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am actively seeking software engineering internships, collaborative development opportunities, and mentorship. Reach out via email or connect on professional channels.
              </p>
            </div>

            {/* Email Card with Copy-to-Clipboard */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-11 h-11 rounded-xl bg-brand-violet/10 text-brand-violet dark:text-brand-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-violet truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyToClipboard}
                title="Copy email address"
                aria-label="Copy email address to clipboard"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-brand-violet border border-slate-200 dark:border-white/10 hover:border-brand-violet/40 transition-colors shrink-0"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 hover:border-sky-500/40 flex items-center justify-between gap-4 transition-all duration-200 group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    LinkedIn Network
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    linkedin.com/in/tanha-tasri
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 hover:border-brand-violet/40 flex items-center justify-between gap-4 transition-all duration-200 group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    GitHub Repositories
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">
                    github.com/tanha-tasri
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* University Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  Purbachal 21 number sector • Dhaka, Bangladesh
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Validated Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-violet/25 shadow-xl relative overflow-hidden">

              {/* Form Title */}
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below. Real-time validation is active.
                </p>
              </div>

              {/* Success / Activation Notification Banner */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-6 p-4 rounded-2xl border flex items-start gap-3 ${submitStatus === 'activation_pending'
                        ? 'bg-amber-500/10 border-amber-500/30'
                        : 'bg-emerald-500/10 border-emerald-500/30'
                      }`}
                  >
                    {submitStatus === 'activation_pending' ? (
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    )}
                    <div className="text-xs sm:text-sm">
                      {submitStatus === 'activation_pending' ? (
                        <div className="text-amber-800 dark:text-amber-200 space-y-1">
                          <p className="font-bold">Message Initiated — Form Activation Link Sent</p>
                          <p className="text-xs leading-relaxed">
                            FormSubmit has sent a one-time activation email to <span className="font-semibold underline">{personalInfo.email}</span>.
                            Please open your Gmail and click <strong>"Activate Form"</strong> once. Afterward, all visitor messages will arrive directly into your inbox!
                          </p>
                        </div>
                      ) : (
                        <div className="text-emerald-800 dark:text-emerald-200 space-y-1">
                          <p className="font-bold">Message Sent Successfully!</p>
                          <p className="text-xs leading-relaxed">
                            Your message has been delivered directly to <span className="font-semibold underline">{personalInfo.email}</span>. Tanha will reply to {submittedEmail ? <span className="font-medium">{submittedEmail}</span> : 'your email address'} soon.
                          </p>
                        </div>
                      )}
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className={`mt-2 text-xs font-semibold underline hover:no-underline cursor-pointer block ${submitStatus === 'activation_pending'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-emerald-600 dark:text-emerald-400'
                          }`}
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* General Form Error Notice with Direct Email Client Fallback */}
              {errors.form && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
                      `Hi Tanha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-xs font-semibold text-red-700 dark:text-red-200 transition-colors shrink-0"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Mail App</span>
                  </a>
                </div>
              )}

              {/* Form Elements */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="e.g. Alex Rahman"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white/60 dark:bg-white/5 border transition-all focus:outline-none focus:ring-2 ${errors.name
                          ? 'border-red-500/80 focus:ring-red-500/30 bg-red-500/5'
                          : 'border-slate-300 dark:border-white/10 focus:border-brand-violet focus:ring-brand-violet/20'
                        } text-slate-900 dark:text-white placeholder:text-slate-400`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white/60 dark:bg-white/5 border transition-all focus:outline-none focus:ring-2 ${errors.email
                          ? 'border-red-500/80 focus:ring-red-500/30 bg-red-500/5'
                          : 'border-slate-300 dark:border-white/10 focus:border-brand-violet focus:ring-brand-violet/20'
                        } text-slate-900 dark:text-white placeholder:text-slate-400`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Mentorship"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-brand-pink">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Write your message here... (minimum 10 characters)"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white/60 dark:bg-white/5 border transition-all focus:outline-none focus:ring-2 resize-none ${errors.message
                        ? 'border-red-500/80 focus:ring-red-500/30 bg-red-500/5'
                        : 'border-slate-300 dark:border-white/10 focus:border-brand-violet focus:ring-brand-violet/20'
                      } text-slate-900 dark:text-white placeholder:text-slate-400`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-pink shadow-lg shadow-brand-violet/25 hover:opacity-95 hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Trust and direct delivery note */}
                <div className="pt-2 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Messages deliver directly to {personalInfo.email}.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
