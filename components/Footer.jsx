'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#0F172A] py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2026 Surajit Giri. Built with Next.js, Tailwind CSS & React.
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span>Made with ❤️</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl border border-gray-200 dark:border-[#334155] bg-white dark:bg-[#1E293B] text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
