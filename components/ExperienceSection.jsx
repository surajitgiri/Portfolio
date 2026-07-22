import { experiencesData } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="internship" className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 reveal">
        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Experience</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Software Internship
        </h3>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 dark:border-blue-500/40 pl-6 sm:pl-8 space-y-8 reveal">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-[#0F172A]"></div>

              {/* Timeline Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] shadow-sm hover-lift">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300">
                    {exp.duration}
                  </span>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed list-disc list-inside">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-lg text-xs font-medium ${tech.color}`}>
                        {tech.name}
                      </span>
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
