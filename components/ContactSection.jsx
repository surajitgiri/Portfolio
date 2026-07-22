'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', user_message: '' });
  const [status, setStatus] = useState({ show: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Credentials (uses environment variables or fallback values)
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_portfolio';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_portfolio';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ show: false, success: false, message: '' });

    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.user_message,
      user_message: formData.user_message,
      to_name: 'Surajit Giri',
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          setIsSubmitting(false);
          setStatus({
            show: true,
            success: true,
            message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
          });
          setFormData({ user_name: '', user_email: '', user_message: '' });
        },
        (error) => {
          setIsSubmitting(false);
          setStatus({
            show: true,
            success: false,
            message: 'Message send failed. Please verify your EmailJS Service ID, Template ID, & Public Key in .env.local, or email directly to surajitgiri978@gmail.com.',
          });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 reveal">
        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Get In Touch</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Contact Me</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Have a question or want to work together? Send me a message!</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact Details */}
        <div className="md:col-span-5 space-y-6 reveal">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Let's build something great together.</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              I am currently seeking junior full-stack developer roles and open for exciting projects. Feel free to reach out via email or send a message on the form.
            </p>
          </div>

          <div className="space-y-4 pt-2">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Email</h5>
                <a href="mailto:surajitgiri978@gmail.com" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">surajitgiri978@gmail.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Location</h5>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Kolkata, West Bengal, India</p>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h5 className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase mb-1.5">Social Profiles</h5>
                <div className="flex items-center gap-3">
                  
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/surajit-giri-592843322/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/surajitgiri" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="GitHub">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a href="https://x.com/giri_suraj66483" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="Twitter X">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7 reveal">
          <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] space-y-5">
            
            {status.show && (
              <div className={`p-4 rounded-xl text-sm font-medium transition-all ${status.success ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="user_name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-[#334155] bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-[#334155] bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="user_message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Your Message *</label>
              <textarea
                id="user_message"
                name="user_message"
                rows="5"
                value={formData.user_message}
                onChange={(e) => setFormData({ ...formData, user_message: e.target.value })}
                required
                placeholder="Hi Surajit, I would like to discuss a project..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-[#334155] bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && (
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
