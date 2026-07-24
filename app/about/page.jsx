import Link from 'next/link';
import { educationData } from '@/data/education';
import { certificatesData } from '@/data/certificates';
import { achievementsData } from '@/data/achievements';
import TechBadge from '@/components/TechBadge';

export const metadata = {
  title: 'About Me | Surajit Giri',
  description: 'Explore Surajit Giri\'s background, university education, certifications, and achievements as a Full Stack Developer.',
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-16 min-h-screen space-y-16">

      {/* SECTION 1: HERO / BIO */}
      <section id="about-intro" className="py-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:bg-[#22C55E]/10 dark:text-[#22C55E] border border-blue-500/20 dark:border-[#22C55E]/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-[#22C55E] animate-pulse"></span>
            Full Stack Developer • Problem Solver
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight mb-4 leading-tight">
            Crafting Scalable Applications &amp; Intuitive Web Experiences
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Dedicated software engineer specializing in modern React, Next.js, Node.js, and cloud ecosystems.
            Passionate about high-performance code and elegant user interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">

          {/* Bio Text Card */}
          <div className="md:col-span-7 p-8 rounded-3xl border border-gray-200 dark:border-[#374151] bg-white/70 dark:bg-[#1F2937]/70 backdrop-blur-md shadow-sm space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#F9FAFB] flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Engineering Journey</span>
              </h2>
              <p>
                I am a Full Stack Developer with hands-on experience designing, engineering, and maintaining
                end-to-end web applications. My passion lies in solving complex problems by bridging front-end interactivity
                with robust backend microservices and databases.
              </p>
              <p>
                On the frontend, I craft pixel-perfect, accessible user interfaces using <strong className="text-gray-900 dark:text-[#F9FAFB]">React 19, Next.js 16 (App Router), and Tailwind CSS</strong>.
                On the backend, I leverage <strong className="text-gray-900 dark:text-[#F9FAFB]">Node.js, Express, PostgreSQL, and AWS</strong> to architect high-speed APIs and resilient data models.
              </p>
              <p>
                Having completed a 6-month software development internship at <strong className="text-gray-900 dark:text-[#F9FAFB]">Venture Allocators</strong> and built over 10 full-stack web applications,
                I thrive in collaborative, fast-paced engineering environments focused on code quality and continuous deployment.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center border-t border-gray-100 dark:border-gray-800">
              <a
                href="https://drive.google.com/file/d/1rLYL24InmuDzmQeFFPi_yJIzpYKmAczi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-[#22C55E] hover:bg-blue-700 dark:hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 dark:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-[#374151] hover:bg-gray-100 dark:hover:bg-[#374151] text-gray-900 dark:text-[#F9FAFB] font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="md:col-span-5 grid sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="p-6 rounded-3xl border border-gray-200 dark:border-[#374151] bg-gradient-to-br from-blue-50/50 to-indigo-50/20 dark:from-[#1F2937] dark:to-[#111827] hover:-translate-y-1 transition-transform shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-black text-blue-600 dark:text-[#22C55E]">2+</span>
                <span className="p-2 rounded-xl bg-blue-500/10 dark:bg-[#22C55E]/10 text-blue-600 dark:text-[#22C55E]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-[#F9FAFB] uppercase tracking-wider mb-1">Years Experience</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Hands-on experience developing web applications, APIs, and modern UI systems.</p>
            </div>

            <div className="p-6 rounded-3xl border border-gray-200 dark:border-[#374151] bg-gradient-to-br from-emerald-50/50 to-teal-50/20 dark:from-[#1F2937] dark:to-[#111827] hover:-translate-y-1 transition-transform shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-black text-emerald-600 dark:text-[#22C55E]">10+</span>
                <span className="p-2 rounded-xl bg-emerald-500/10 dark:bg-[#22C55E]/10 text-emerald-600 dark:text-[#22C55E]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-[#F9FAFB] uppercase tracking-wider mb-1">Projects Completed</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Full stack web apps, REST APIs, real-time dashboards, and tools.</p>
            </div>

            <div className="p-6 rounded-3xl border border-gray-200 dark:border-[#374151] bg-gradient-to-br from-purple-50/50 to-pink-50/20 dark:from-[#1F2937] dark:to-[#111827] hover:-translate-y-1 transition-transform shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-black text-purple-600 dark:text-[#22C55E]">4+</span>
                <span className="p-2 rounded-xl bg-purple-500/10 dark:bg-[#22C55E]/10 text-purple-600 dark:text-[#22C55E]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-[#F9FAFB] uppercase tracking-wider mb-1">Certifications Earned</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Industry certifications across React, PostgreSQL, Full Stack &amp; AWS.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: UNIVERSITY & ACADEMIC EDUCATION */}
      {/* {educationData && educationData.length > 0 && (
        <section id="education" className="py-6 border-t border-gray-200 dark:border-[#374151] pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#22C55E]">Academic Background</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight flex items-center gap-3 mt-1">
                <svg className="w-8 h-8 text-blue-600 dark:text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span>University &amp; Education</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Formal computer science degree and foundational academics supporting practical software development skills.
            </p>
          </div>

          <div className="space-y-6">
            {educationData.map((edu) => (
              <div 
                key={edu.id}
                className="p-8 rounded-3xl border border-gray-200 dark:border-[#374151] bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-[#F9FAFB]">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 dark:bg-[#22C55E]/10 text-blue-600 dark:text-[#22C55E] border border-blue-500/20 dark:border-[#22C55E]/20">
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-1.5 text-blue-600 dark:text-[#22C55E] font-bold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-4 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-xl bg-gray-100 dark:bg-[#111827] text-xs font-bold text-gray-800 dark:text-[#F9FAFB] border border-gray-200 dark:border-[#374151]">
                      📅 {edu.duration}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-[#22C55E] border border-emerald-500/20 text-xs font-bold">
                      🏆 {edu.grade}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Key Highlights</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
                      {edu.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-blue-500 dark:text-[#22C55E] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* SECTION 3: CERTIFICATIONS */}
      {certificatesData && certificatesData.length > 0 && (
        <section id="certificates" className="py-6 border-t border-gray-200 dark:border-[#374151] pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-[#22C55E]">Verified Skills</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight flex items-center gap-3 mt-1">
                <svg className="w-8 h-8 text-purple-600 dark:text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Certifications &amp; Professional Credentials</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Industry recognized certifications validating expertise across frontend frameworks, backend architecture, and databases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl border border-gray-200 dark:border-[#374151] bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-xl text-xs font-bold border bg-gradient-to-r ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-[#F9FAFB] mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill, sIdx) => (
                      <TechBadge
                        key={sIdx}
                        name={skill}
                        color="bg-gray-100 dark:bg-[#111827] text-gray-700 dark:text-[#F9FAFB] border border-gray-200 dark:border-[#374151]"
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-[#22C55E] hover:underline"
                  >
                    <span>Verify</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: ACHIEVEMENTS & HONORS */}
      {/* {achievementsData && achievementsData.length > 0 && (
        <section id="achievements" className="py-6 border-t border-gray-200 dark:border-[#374151] pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-[#22C55E]">Key Milestones</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight flex items-center gap-3 mt-1">
                <svg className="w-8 h-8 text-emerald-600 dark:text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Achievements &amp; Honors</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Key recognitions, internship milestones, and engineering achievements across my developer career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl border border-gray-200 dark:border-[#374151] bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-[#F9FAFB] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-[#22C55E] mb-3">
                    <span>{item.organization}</span>
                    <span>•</span>
                    <span className="text-gray-400 font-normal">{item.date}</span>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* SECTION 5: CTA BANNER */}
      {/* <section className="py-10 px-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-[#22C55E] dark:to-emerald-700 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/10 dark:shadow-emerald-500/20">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight">Let's build something remarkable together!</h2>
          <p className="text-sm text-blue-100 dark:text-emerald-100 max-w-xl">
            Looking for a dedicated Full Stack Developer for your team or project? I'm always open to discussing new opportunities.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 px-6 py-3 rounded-xl bg-white text-blue-600 dark:text-[#111827] hover:bg-blue-50 font-bold text-sm transition-all shadow-md hover:-translate-y-0.5"
        >
          Contact Surajit
        </Link>
      </section> */}

    </main>
  );
}
