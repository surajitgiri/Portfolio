import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact Me | Surajit Giri',
  description: 'Contact Surajit Giri for internships, freelance projects and full-time opportunities.',
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-16 min-h-screen">
      <ContactSection />
    </main>
  );
}
