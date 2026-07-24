import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL("https://surajitgiri.site"),
  title: 'Surajit Giri | Full Stack Developer',
  description: 'Portfolio of Surajit Giri, a Full Stack Developer specializing in React, Next.js, Node.js, JavaScript, PostgreSQL and AWS.',
  alternates: {
    canonical: "/",
  },
  authors: [{ name: 'Surajit Giri' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: '-9tWwv8QdhulrE0mYrSOV6QavjKLjoKLowbr5bV4ISE',
  },
  openGraph: {
    title: "Surajit Giri",
    description: "Full Stack Developer",
    url: "https://surajitgiri.site",
    siteName: "Surajit Giri",
    images: [
      {
        url: "/photo/opengraph-image.png",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Surajit Giri",
    description: "Full Stack Developer",
    images: ["/photo/opengraph-image.png"]
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Surajit Giri",
  url: "https://surajitgiri.site",
  image: "https://surajitgiri.site/photo/pp.jpeg",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, PostgreSQL and AWS.",
  sameAs: [
    "https://github.com/surajitgiri",
    "https://www.linkedin.com/in/surajit-giri-592843322/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
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
      <body className="bg-white text-gray-900 dark:bg-[#111827] dark:text-[#F9FAFB] min-h-screen antialiased selection:bg-[#22C55E] selection:text-white transition-colors duration-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
