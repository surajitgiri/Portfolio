'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(new Date().toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-16">

      {/* SECTION 1: HERO */}
      <section id="hero" className="flex flex-col justify-center items-center text-center pt-4 pb-6">

        {/* Profile Details Container */}
        <div className="w-full max-w-3xl mx-auto text-center sm:text-left font-mono mb-10 reveal flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">

          {/* Top Row on Mobile: Centered Photo, Name & Role */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 w-full sm:w-auto flex-shrink-0">

            {/* Profile Photo Container */}
            <div className="relative group flex-shrink-0">
              <div className="w-28 h-28 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-200 dark:border-[#374151] bg-gray-100 dark:bg-[#1F2937] shadow-lg group-hover:scale-105 transition-all duration-300">
                <img
                  src="/photo/pp.jpeg"
                  alt="Surajit Giri"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Mobile Only: Centered Name, Role & Available for Work Badge */}
            <div className="flex sm:hidden flex-col items-center justify-center text-center w-full mt-2">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight font-mono mb-1">
                Surajit Giri
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 font-mono mb-3">
                Full Stack Developer
              </p>
              {/* Available for Work Badge */}
              <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shadow-sm backdrop-blur-sm animate-glimpse">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="whitespace-nowrap font-mono">Available for work</span>
              </div>
            </div>

          </div>

          {/* Desktop Name & Details Container / Info Grid */}
          <div className="flex-1 w-full flex flex-col items-center sm:items-start text-center sm:text-left">

            {/* Desktop Header Status Row */}
            <div className="hidden sm:block mb-4">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight font-mono">
                  Surajit Giri
                </h1>
                {/* Desktop View Badge */}
                <div className="inline-flex relative overflow-hidden items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 text-xs text-emerald-700 dark:text-emerald-300 font-mono animate-glimpse">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>Available for work</span>
                </div>
              </div>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-mono">
                Full Stack Developer
              </p>
            </div>

            {/* 2-Column Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-8 md:gap-x-10 font-mono mt-3 sm:mt-0 w-full">

              {/* Column 1: Location & Email */}
              <div className="space-y-3.5 flex flex-col items-center sm:items-start">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-[#374151] flex items-center justify-center text-gray-700 dark:text-gray-300 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-base whitespace-normal lg:whitespace-nowrap">Kolkata, West Bengal, India</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-[#374151] flex items-center justify-center text-gray-700 dark:text-gray-300 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:surajitgiri978@gmail.com" className="text-amber-600 dark:text-amber-500 font-medium text-base hover:underline whitespace-normal lg:whitespace-nowrap break-all lg:break-normal">surajitgiri978@gmail.com</a>
                </div>
              </div>

              {/* Column 2: Time & Pronouns */}
              <div className="space-y-3.5 hidden sm:flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-[#374151] flex items-center justify-center text-gray-700 dark:text-gray-300 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-base font-medium truncate">
                    <span className="text-gray-900 dark:text-[#F9FAFB] font-semibold">{timeString || '12:00:00 PM IST'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-[#374151] flex items-center justify-center text-gray-700 dark:text-gray-300 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-base">he/him</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed mb-10 reveal text-center">
          Hi, I'm <strong className="text-gray-900 dark:text-[#F9FAFB] font-bold">Surajit Giri</strong>. I have <span className="font-semibold text-emerald-600 dark:text-emerald-400">~2 years of hands-on experience</span> building full-stack web applications using <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>, <span className="font-semibold text-emerald-600 dark:text-emerald-400">Node.js</span>, and <span className="font-semibold text-amber-600 dark:text-amber-500">PostgreSQL/MongoDB</span>. Specializing in responsive frontends, scalable <span className="font-semibold text-teal-600 dark:text-teal-400">REST APIs</span>, and clean code architecture.
          <Link href="/about" className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-all ml-2 group whitespace-nowrap">
            <span>Know more</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </p>

        {/* Action & Social Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono mb-6 reveal">

          {/* View Projects Button */}
          <a href="#projects" className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5 flex items-center gap-2">
            <span>View Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          {/* Resume Pill Button */}
          <a
            href="https://drive.google.com/file/d/1rLYL24InmuDzmQeFFPi_yJIzpYKmAczi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-[#1F2937] hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-900 dark:text-[#F9FAFB] font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 border border-gray-300 dark:border-[#374151]"
          >
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-blue-600 dark:text-blue-400 font-bold">Resume</span>
          </a>

          {/* Contact Pill Button */}
          <Link href="/contact" className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-[#374151] text-gray-900 dark:text-[#F9FAFB] font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 hover:border-blue-500/50">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-blue-600 dark:text-blue-400 font-bold">Contact</span>
          </Link>

          {/* Vertical Separator */}
          <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-[#374151] mx-1"></div>

          {/* Circular White Social Badges */}
          <div className="flex items-center gap-2.5">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/surajit-giri-592843322/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="LinkedIn">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.69c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/surajitgiri" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="GitHub">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://x.com/giri_suraj66483" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="Twitter X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LeetCode */}
            <a href="https://leetcode.com/u/technocraft123/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="LeetCode">
              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.016 1.921 1.378 1.378 0 0 0 1.936.008l5.413-5.794c.26-.26.621-.4.99-.4h6.059a1.376 1.376 0 1 0 0-2.752h-8.015zM2.87 9.873a1.374 1.374 0 0 0-.97.438l-1.46 1.56a1.374 1.374 0 0 0 0 1.928l9.789 10.457c.531.567 1.435.567 1.966 0l5.518-5.9a1.374 1.374 0 0 0 0-1.928l-1.46-1.56a1.374 1.374 0 0 0-1.966 0l-4.544 4.858-8.815-9.415a1.374 1.374 0 0 0-.058-.438z" />
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:surajitgiri978@gmail.com" className="w-9 h-9 rounded-full bg-white text-gray-900 shadow-sm border border-gray-200 dark:border-transparent flex items-center justify-center hover:scale-110 transition-all" aria-label="Direct Email">
              <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

          </div>

        </div>

      </section>

      {/* SECTION 2: INTERNSHIP / EXPERIENCE */}
      <ExperienceSection />

      {/* SECTION 3: PROJECTS */}
      <ProjectsSection />

      {/* SECTION 4: TECHNICAL SKILLS */}
      <SkillsSection />

      {/* SECTION 5: CONTACT */}
      <ContactSection />

    </main>
  );
}
