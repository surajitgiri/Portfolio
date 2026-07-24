'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-[#0F172A]/80 glass-nav border-b border-gray-200 dark:border-[#334155] py-4">
      <div class="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">
          <img src="./apple-touch-icon.png" alt="logo" className="w-8 h-8" />
          <span className="tracking-tight">Surajit<span className="text-blue-600 dark:text-blue-500">.dev</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link
            href="/"
            className={`nav-link hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''
              }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-link hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Controls: Theme Toggle & Mobile Menu Btn */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle-btn p-2.5 rounded-xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-pointer"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="md:hidden p-2.5 rounded-xl border border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] text-gray-600 dark:text-gray-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] px-6 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-medium ${isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-700 dark:text-gray-200'
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-medium ${isActive('/about') ? 'text-blue-600 font-bold' : 'text-gray-700 dark:text-gray-200'
              }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-medium ${isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-700 dark:text-gray-200'
              }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
