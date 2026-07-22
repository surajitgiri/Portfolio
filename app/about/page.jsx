export const metadata = {
  title: 'About Me | Surajit Giri',
  description: 'Learn more about Surajit Giri, a Junior Full Stack Developer with 2 years of practical experience building web applications.',
};

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-16 min-h-screen">
      
      {/* SECTION: ABOUT ME */}
      <section id="about" className="py-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Driven by Curiosity &amp; Problem Solving
          </h3>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">

          {/* Left: Detailed Bio */}
          <div className="md:col-span-7 space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed reveal">
            <p>
              I am a Junior Full Stack Developer with around 2 years of practical experience designing and maintaining
              modern web applications. My journey started with a fascination for how the web works, which quickly evolved
              into a deep commitment to writing clean, maintainable code across both frontend and backend stacks.
            </p>
            <p>
              On the frontend, I specialize in building responsive, intuitive user interfaces using React, Next.js, and
              Tailwind CSS. On the backend, I leverage Node.js, Express, and PostgreSQL/MongoDB to construct efficient,
              secure REST APIs and database schemas that scale.
            </p>
            <p>
              Having completed a 6-month software development internship and built numerous full-stack projects, I am adept
              at agile teamwork, code reviews, writing unit tests, and delivering feature-ready code. I am constantly learning
              new technologies and best practices to refine my craft.
            </p>
          </div>

          {/* Right: Key Stats / Quick Highlights */}
          <div className="md:col-span-5 space-y-4 reveal">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] hover-lift">
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">2+</div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Years Experience</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Hands-on experience in full-stack web development and API design.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] hover-lift">
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">10+</div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Projects Built</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">From RESTful microservices to full-stack web apps and interactive dashboards.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] hover-lift">
              <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">1</div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Internship Completed</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">6 months of software development internship experience in an Agile engineering team.</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
