import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IntroScreen } from './components/IntroScreen';
import { HeroSection } from './components/HeroSection';
import { Countdown } from './components/Countdown';
import { CoupleSection } from './components/CoupleSection';
import { WeddingDetails } from './components/WeddingDetails';
import { VenueSection } from './components/VenueSection';
import { WhatsAppShare } from './components/WhatsAppShare';
import { CalendarButton } from './components/CalendarButton';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';
import { initSmoothScroll } from './animations/gsapAnimations';
import { WEDDING_DATA } from './data/weddingData';

export const App: React.FC = () => {
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Lenis + GSAP scroll integration once the main page is revealed
    if (hasOpenedInvitation) {
      const cleanupScroll = initSmoothScroll();
      return cleanupScroll;
    }
  }, [hasOpenedInvitation]);

  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-burgundy-950 text-ivory-100 font-poppins selection:bg-gold selection:text-burgundy-950">
        {/* SEO and WhatsApp Link Preview Metadata */}
        <Helmet>
          <title>Wedding Invitation – Ajay & Asha</title>
          <meta
            name="description"
            content="Ratimani Family & Goravanakoll Family warmly invite you to celebrate the wedding of Ajay & Asha. Sunday, 29 November 2026, 12:31 PM at Vidyadhiraj Bhavan, Hubballi."
          />
          {/* Open Graph / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Wedding Invitation – Ajay & Asha" />
          <meta
            property="og:description"
            content="Ratimani Family & Goravanakoll Family warmly invite you to celebrate the wedding of Ajay & Asha. Sunday, 29 November 2026, 12:31 PM at Vidyadhiraj Bhavan, Hubballi."
          />
          <meta property="og:image" content="/og-wedding-invitation.jpg" />
          <meta property="og:site_name" content="Ajay & Asha Wedding Invitation" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Wedding Invitation – Ajay & Asha" />
          <meta
            name="twitter:description"
            content="Ratimani Family & Goravanakoll Family warmly invite you to celebrate the wedding of Ajay & Asha."
          />
          <meta name="twitter:image" content="/og-wedding-invitation.jpg" />
        </Helmet>

        {/* Persistent Floating Music Controller - Active from the start */}
        <MusicPlayer />

        {/* Cinematic Intro Screen */}
        {!hasOpenedInvitation ? (
          <IntroScreen onOpen={() => setHasOpenedInvitation(true)} />
        ) : (
          <main className="relative animate-in fade-in duration-1000">
            {/* Falling Floral Petals Effect */}
            <FloatingPetals />

            {/* Main Wedding Invitation Sections */}
            <HeroSection />
            <Countdown />
            <CoupleSection />
            <WeddingDetails />
            <VenueSection />
            <WhatsAppShare />
            <CalendarButton />
            <FinalSection />
            <Footer />
          </main>
        )}

        {/* Global Notifications */}
        <ToastContainer
          position="bottom-left"
          theme="dark"
          toastClassName="!bg-burgundy-900 !border !border-gold/40 !text-gold-light font-poppins"
        />
      </div>
    </HelmetProvider>
  );
};

export default App;

