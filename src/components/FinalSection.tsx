import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { OrnamentalDivider, GaneshaSVG, ToranaGarlandSVG } from './DecorativeSVGs';
import { Heart, Share2, Navigation, Calendar, Sparkles } from 'lucide-react';
import { getGoogleCalendarUrl } from '../utils/calendarGenerator';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export const FinalSection: React.FC = () => {
  const handleWhatsAppShare = () => {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
    const fullText = `${WEDDING_DATA.whatsappShare.rawMessage}${siteUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`, '_blank');
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-burgundy-950 via-[#1C040A] to-[#120206] text-center overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.14)_0%,transparent_70%)] pointer-events-none" />

      {/* Garland divider */}
      <div className="absolute top-0 inset-x-0 opacity-80">
        <ToranaGarlandSVG className="w-full h-8" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Lord Ganesha blessing icon */}
        <motion.div variants={fadeInUp} className="mb-4">
          <div className="p-3 rounded-full border border-gold/40 bg-burgundy-900/60 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
            <GaneshaSVG className="w-16 h-16 text-gold" />
          </div>
        </motion.div>

        {/* Romantic Sanskrit / Love Quote */}
        <motion.div variants={fadeInUp} className="my-3">
          <p className="font-great-vibes text-3xl sm:text-5xl text-gold-light leading-snug">
            “Two hearts, One dream,
            <br />
            Two souls, One life.”
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="my-4">
          <OrnamentalDivider className="w-56" />
        </motion.div>

        {/* Closing Warm Message */}
        <motion.p
          variants={fadeInUp}
          className="font-poppins text-xs sm:text-base text-champagne/90 leading-relaxed max-w-xl px-2"
        >
          {WEDDING_DATA.closingMessage}
        </motion.p>

        {/* Auspicious signatures */}
        <motion.div
          variants={fadeInUp}
          className="my-8 p-6 sm:p-10 rounded-3xl border border-gold/30 bg-burgundy-900/40 backdrop-blur-md shadow-2xl relative max-w-xl w-full"
        >
          <span className="corner-ornament-tl" />
          <span className="corner-ornament-tr" />
          <span className="corner-ornament-bl" />
          <span className="corner-ornament-br" />

          <p className="font-cinzel text-xs sm:text-sm text-gold tracking-[0.25em] uppercase font-semibold mb-3">
            {WEDDING_DATA.signatures.salutation}
          </p>

          <h3 className="font-cinzel text-base sm:text-xl font-bold text-gold-gradient tracking-[0.2em] uppercase my-1">
            {WEDDING_DATA.bride.family}
          </h3>
          <div className="font-great-vibes text-gold-light text-2xl my-0.5">&</div>
          <h3 className="font-cinzel text-base sm:text-xl font-bold text-gold-gradient tracking-[0.2em] uppercase my-1">
            {WEDDING_DATA.groom.family}
          </h3>

          <div className="my-4 flex items-center justify-center gap-2">
            <span className="h-[1px] w-12 bg-gold/40" />
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="h-[1px] w-12 bg-gold/40" />
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gold-gradient tracking-wider">
            {WEDDING_DATA.signatures.couple}
          </h2>

          <p className="font-poppins text-xs text-champagne-light/80 italic mt-3">
            “Your presence will make our celebration even more special.”
          </p>
        </motion.div>

        {/* Final Quick Action Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 w-full max-w-lg"
        >
          <button
            onClick={handleWhatsAppShare}
            className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-5 py-3 rounded-full font-cinzel text-xs font-bold tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition-all duration-300"
          >
            <Share2 className="w-4 h-4" />
            <span>SHARE INVITATION</span>
          </button>

          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-5 py-3 rounded-full font-cinzel text-xs font-bold tracking-wider text-burgundy-950 bg-gradient-to-r from-gold-light via-gold to-gold-antique hover:from-white hover:to-gold shadow-lg transition-all duration-300"
          >
            <Navigation className="w-4 h-4 text-burgundy-950" />
            <span>GET DIRECTIONS</span>
          </a>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-5 py-3 rounded-full font-cinzel text-xs font-semibold tracking-wider text-gold-light border border-gold/40 bg-burgundy-900/60 hover:bg-gold/15 transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span>ADD TO CALENDAR</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

