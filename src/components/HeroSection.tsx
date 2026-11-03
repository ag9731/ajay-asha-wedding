import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { MandapSVG, HangingBellSVG, ToranaGarlandSVG, OrnamentalDivider, GaneshaSVG } from './DecorativeSVGs';
import { Heart, ChevronDown, Calendar, Clock, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const countdownEl = document.getElementById('countdown-section');
    if (countdownEl) {
      countdownEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-6 pb-12 px-4 overflow-hidden bg-radial-gradient text-center">
      {/* Top Auspicious Floral Torana Garland */}
      <div className="absolute top-0 left-0 right-0 z-10 opacity-90">
        <ToranaGarlandSVG className="w-full h-8 sm:h-10" />
      </div>

      {/* Hanging Golden Temple Bells */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-3 sm:left-10 z-20 pointer-events-none origin-top"
      >
        <HangingBellSVG className="w-7 sm:w-10 h-24 sm:h-32 opacity-85 drop-shadow-md" />
      </motion.div>

      <motion.div
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-3 sm:right-10 z-20 pointer-events-none origin-top"
      >
        <HangingBellSVG className="w-7 sm:w-10 h-24 sm:h-32 opacity-85 drop-shadow-md" />
      </motion.div>

      {/* Ambient background glow & radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(161,22,53,0.3)_0%,rgba(42,8,18,0.8)_60%,#150307_100%)] pointer-events-none" />

      {/* Hero Header Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center mt-10 sm:mt-12"
      >
        {/* Sacred Ganesha Badge */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center mb-3">
          <div className="p-2 rounded-full border border-gold/40 bg-burgundy-900/60 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <GaneshaSVG className="w-12 h-12 text-gold" />
          </div>
          <span className="font-cinzel text-[11px] sm:text-xs text-gold tracking-[0.25em] uppercase mt-2">
            ॥ श्री गणेशाय नमः ॥
          </span>
        </motion.div>

        {/* Both Families Prominently Represented */}
        <motion.div variants={fadeInUp} className="my-2 space-y-1">
          <h2 className="font-cinzel text-base sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-gold-gradient uppercase">
            {WEDDING_DATA.groom.family}
          </h2>
          <div className="font-great-vibes text-gold-light text-2xl sm:text-3xl">&</div>
          <h2 className="font-cinzel text-base sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-gold-gradient uppercase">
            {WEDDING_DATA.bride.family}
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="my-2">
          <OrnamentalDivider className="w-40 sm:w-56" />
        </motion.div>

        {/* Invitation lead text */}
        <motion.p
          variants={fadeInUp}
          className="font-poppins text-xs sm:text-sm md:text-base text-champagne/90 tracking-wide max-w-xl px-2"
        >
          Together with the blessings of Almighty and our beloved elders,
          <br className="hidden sm:inline" />
          joyfully invite you to celebrate the wedding of
        </motion.p>

        {/* Majestic Couple Names */}
        <motion.div
          variants={fadeInUp}
          className="my-5 sm:my-7 relative flex flex-col items-center"
        >
          {/* Subtle gold glow behind names */}
          <div className="absolute inset-0 bg-gold/15 blur-2xl rounded-full -z-10" />

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="font-playfair font-black text-4xl sm:text-6xl md:text-7xl text-gold-gradient tracking-wide">
              {WEDDING_DATA.groom.firstName}
            </span>

            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex text-rose-500 mx-1 sm:mx-2"
            >
              <Heart className="w-7 h-7 sm:w-10 sm:h-10 fill-rose-600 text-gold-light" />
            </motion.div>

            <span className="font-playfair font-black text-4xl sm:text-6xl md:text-7xl text-gold-gradient tracking-wide">
              {WEDDING_DATA.bride.firstName}
            </span>
          </div>

          {/* Wedding Tagline */}
          <motion.div
            variants={fadeInUp}
            className="mt-3 px-5 py-1.5 rounded-full border border-gold/40 bg-burgundy-900/50 backdrop-blur-sm"
          >
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-gold-light uppercase font-semibold">
              {WEDDING_DATA.tagline}
            </p>
          </motion.div>
        </motion.div>

        {/* Event Quick Info Banner */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-champagne-light/95 font-poppins mt-2 mb-4 px-4 py-2 rounded-xl bg-burgundy-900/40 border border-gold/25"
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="font-medium">{WEDDING_DATA.auspiciousDate}</span>
          </div>
          <span className="hidden sm:inline text-gold">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold" />
            <span className="font-medium">Muhurtham {WEDDING_DATA.muhurthamTime}</span>
          </div>
          <span className="hidden sm:inline text-gold">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{WEDDING_DATA.venue.city}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Mandap Illustration Reveal with Parallax / Motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        className="relative z-10 w-full max-w-2xl px-2 mt-4 sm:mt-6"
      >
        <div className="relative group">
          <MandapSVG className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-105" />
          
          {/* Subtle light rays radiating from Havan Kund */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-orange-500/20 to-transparent blur-xl pointer-events-none" />
        </div>
      </motion.div>

      {/* Down Scroll Prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 mt-6 cursor-pointer"
        onClick={scrollToNext}
      >
        <span className="font-cinzel text-[10px] tracking-[0.25em] text-gold/80 uppercase block mb-1">
          Explore Invitation
        </span>
        <ChevronDown className="w-5 h-5 mx-auto text-gold animate-bounce" />
      </motion.div>
    </section>
  );
};

