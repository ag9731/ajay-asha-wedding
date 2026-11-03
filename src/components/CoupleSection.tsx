import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Sparkles, Heart, Crown, Sun } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export const CoupleSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-burgundy-950 via-[#24060E] to-burgundy-950 overflow-hidden text-center">
      {/* Background Mandala & Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gradient opacity-15 pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold">
            The Blessed Union
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-ivory-100 mt-2 mb-1">
            Meet the Bride & Groom
          </h2>
          <OrnamentalDivider className="w-48 my-3" />
        </motion.div>

        {/* Central Connecting Tagline Banner */}
        <motion.div
          variants={fadeInUp}
          className="my-8 max-w-lg mx-auto"
        >
          <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-gold/50 bg-burgundy-900/80 shadow-[0_4px_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-4 h-4 text-gold-light" />
            <span className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-gold-gradient uppercase">
              {WEDDING_DATA.tagline}
            </span>
            <Sparkles className="w-4 h-4 text-gold-light" />
          </div>
        </motion.div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch mt-6">
          {/* Groom Card: AJAY */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center p-6 sm:p-8 rounded-3xl border border-gold/35 bg-gradient-to-b from-burgundy-900/60 to-burgundy-950/90 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden text-center group"
          >
            {/* Corner Ornaments */}
            <span className="corner-ornament-tl" />
            <span className="corner-ornament-tr" />
            <span className="corner-ornament-bl" />
            <span className="corner-ornament-br" />

            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-[11px] font-cinzel text-gold-light tracking-widest uppercase mb-6">
              <Crown className="w-3.5 h-3.5 text-gold" />
              <span>The Groom</span>
            </div>

            {/* Groom Image Frame */}
            <div className="relative mb-6">
              {/* Outer Decorative Ring */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 border-2 border-dashed border-gold/60 group-hover:border-gold transition-colors duration-500 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold shadow-2xl relative">
                  <img
                    src={WEDDING_DATA.groom.image}
                    alt="Ajay - Groom"
                    className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Name */}
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-gold-gradient tracking-wide mb-1">
              {WEDDING_DATA.groom.firstName}
            </h3>
          </motion.div>

          {/* Bride Card: ASHA */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center p-6 sm:p-8 rounded-3xl border border-gold/35 bg-gradient-to-b from-burgundy-900/60 to-burgundy-950/90 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden text-center group"
          >
            {/* Corner Ornaments */}
            <span className="corner-ornament-tl" />
            <span className="corner-ornament-tr" />
            <span className="corner-ornament-bl" />
            <span className="corner-ornament-br" />

            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-[11px] font-cinzel text-gold-light tracking-widest uppercase mb-6">
              <Sun className="w-3.5 h-3.5 text-gold" />
              <span>The Bride</span>
            </div>

            {/* Bride Image Frame */}
            <div className="relative mb-6">
              {/* Outer Decorative Ring */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 border-2 border-dashed border-gold/60 group-hover:border-gold transition-colors duration-500 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold shadow-2xl relative">
                  <img
                    src={WEDDING_DATA.bride.image}
                    alt="Asha - Bride"
                    className="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Name */}
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-gold-gradient tracking-wide mb-1">
              {WEDDING_DATA.bride.firstName}
            </h3>
          </motion.div>
        </div>

        {/* Connecting Heart / Sacred Knot Banner */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col items-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-16 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-gold-light" />
            <div className="flex items-center gap-1.5 p-2 rounded-full border border-gold/40 bg-burgundy-900/60 shadow-md">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
            <div className="w-16 sm:w-32 h-[1px] bg-gradient-to-l from-transparent via-gold to-gold-light" />
          </div>

          <p className="font-great-vibes text-2xl sm:text-3xl text-gold-light mt-3">
            Two souls united in sacred love & eternal harmony
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

