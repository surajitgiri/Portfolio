import { projectsData } from '@/data/projects';
import TechBadge from '@/components/TechBadge';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 reveal">
        <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-[#22C55E] mb-2">Featured Work</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight">
          Recent Projects
        </h3>
        <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
          A selection of full stack applications built with modern tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-gray-200 dark:border-[#374151] bg-gray-50 dark:bg-[#1F2937] overflow-hidden hover-lift flex flex-col justify-between"
          >
            <div>
              {/* Project Image Header */}
              <div className="h-48 sm:h-52 w-full overflow-hidden relative bg-gray-200 dark:bg-[#111827]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-[#F9FAFB] mb-2">{project.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <TechBadge
                      key={idx}
                      name={tag.name}
                      color={tag.color}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 pt-0 flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl border border-gray-300 dark:border-[#374151] text-center font-semibold text-sm text-gray-800 dark:text-[#F9FAFB] hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-gray-800 dark:text-[#F9FAFB] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Source Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 dark:bg-[#22C55E] hover:bg-blue-700 dark:hover:bg-emerald-600 text-center font-semibold text-sm text-white transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 dark:shadow-emerald-500/20"
                >
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
