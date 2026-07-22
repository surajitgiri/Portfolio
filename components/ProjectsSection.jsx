import { projectsData } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 reveal">
        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Featured Work</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Recent Projects
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          A selection of full stack applications built with modern tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] overflow-hidden hover-lift flex flex-col justify-between"
          >
            <div>
              {/* Project UI Illustration Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>{project.version}</span>
                </div>
                <div className="text-white">
                  <div className={`text-xs font-mono ${project.terminalColor} mb-1`}>
                    {project.terminalText}
                  </div>
                  <div className="font-bold text-lg tracking-tight">{project.subtitle}</div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${tag.color}`}>
                      {tag.name}
                    </span>
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
                className="flex-1 py-2.5 rounded-xl border border-gray-300 dark:border-[#334155] text-center font-semibold text-xs text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              >
                GitHub Repo
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold text-xs transition-colors shadow-sm"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
