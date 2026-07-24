import { experiencesData } from '@/data/experience';
import TechBadge from '@/components/TechBadge';

export default function ExperienceSection() {
  return (
    <section id="internship" className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 reveal">
        <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-[#22C55E] mb-2">Experience</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight">
          Software Internship
        </h3>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 dark:border-[#22C55E]/40 pl-6 sm:pl-8 space-y-8 reveal">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-[#22C55E] ring-4 ring-white dark:ring-[#111827]"></div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-[#374151] bg-gray-50 dark:bg-[#1F2937] shadow-sm hover-lift">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">

                  {/* Left Side: Company Logo & Title/Company Info */}
                  <div className="flex items-center gap-3.5">
                    {/* Company Logo Container */}
                    <div className="w-14 h-14 rounded-xl bg-blue-600/10 dark:bg-[#22C55E]/10 border border-blue-500/30 dark:border-[#22C55E]/30 flex items-center justify-center text-blue-600 dark:text-[#22C55E] flex-shrink-0 font-bold text-lg overflow-hidden shadow-sm">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextElementSibling) {
                              e.target.nextElementSibling.style.display = 'block';
                            }
                          }}
                        />
                      ) : null}
                      <svg
                        className="w-6 h-6"
                        style={{ display: exp.logo ? 'none' : 'block' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V7m0 0h4m-4 0H9" />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-[#F9FAFB]">{exp.role}</h4>
                      <span className="text-base font-semibold text-blue-600 dark:text-[#22C55E]">{exp.company}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300">
                    {exp.duration}
                  </span>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <TechBadge
                        key={idx}
                        name={tech.name}
                        color={tech.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
