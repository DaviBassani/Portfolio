import ParallaxHero from '@/components/ParallaxHero';
import EasterEgg from '@/components/EasterEgg';
import ContactForm from '@/components/ContactForm';
import ScrollIndicator from '@/components/ScrollIndicator';
import CookieConsent from '@/components/CookieConsent';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <ParallaxHero />
        <div className="absolute inset-0 pointer-events-none">
          <ScrollIndicator />
        </div>
      </div>
      <div id="contact-section" className="max-w-4xl mx-auto px-4 py-20">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
          <ContactForm />
        </section>
      </div>
      <EasterEgg />
      <CookieConsent />
    </PageTransition>
  );
} 
