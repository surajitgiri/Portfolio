import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Surajit Giri | Full Stack Developer',
  description: 'Portfolio of Surajit Giri, a Full Stack Developer with 2 years of experience building modern web apps with Node.js, JavaScript, PostgreSQL, React, and Next.js.',
  authors: [{ name: 'Surajit Giri' }],
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-[#0F172A] dark:text-[#F8FAFC] min-h-screen antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
