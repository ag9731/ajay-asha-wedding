import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Calendar, Clock, MapPin, Sparkles, Flame, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export const WeddingDetails: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-burgundy-950 text-center overflow-hidden">
      {/* Ambient background rays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(161,22,53,0.18)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            Sacred Celebrations
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-ivory-100 mt-2 mb-1">
            Wedding Itinerary & Auspicious Timings
          </h2>
          <OrnamentalDivider className="w-48 my-3" />
          <p className="font-poppins text-xs sm:text-sm text-champagne/85 max-w-xl mx-auto">
            Please join us to share in the joy and bestow your heartfelt blessings on Ajay & Asha.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {WEDDING_DATA.events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 sm:p-8 rounded-2xl border border-gold/40 bg-gradient-to-b from-burgundy-900/70 to-burgundy-950/90 shadow-[0_12px_30px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden group"
            >
              {/* Corner Ornaments */}
              <span className="corner-ornament-tl" />
              <span className="corner-ornament-tr" />
              <span className="corner-ornament-bl" />
              <span className="corner-ornament-br" />

              {/* Event Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-gold/15 border border-gold/40 text-gold shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {event.id === 'muhurtham' ? (
                    <Flame className="w-6 h-6 text-orange-400" />
                  ) : (
                    <Sparkles className="w-6 h-6 text-gold" />
                  )}
                </div>

                {event.muhurthamTime && (
                  <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/60 text-[11px] font-cinzel text-gold-light font-bold tracking-wider uppercase animate-pulse">
                    Sacred Muhurtham
                  </span>
                )}
              </div>

              {/* Event Name */}
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient tracking-wide mb-1">
                {event.name}
              </h3>
              <p className="font-cinzel text-xs text-gold-light/90 tracking-widest uppercase mb-4">
                {event.title}
              </p>

              {/* Date & Time Details */}
              <div className="space-y-2.5 py-4 my-2 border-y border-gold/20 text-xs sm:text-sm font-poppins text-champagne-light">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-medium">{event.date}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-medium font-semibold text-gold-light">
                    {event.muhurthamTime || event.time}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    <strong>{event.venueName}</strong>, {event.venueAddress}
                  </span>
                </div>

                {event.customNote && (
                  <div className="flex items-center gap-2.5 pt-1 text-gold/90">
                    <Heart className="w-4 h-4 text-gold shrink-0 fill-gold/20" />
                    <span className="text-xs font-medium tracking-wide text-gold-light italic">
                      {event.customNote}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-poppins text-xs sm:text-sm text-champagne/80 leading-relaxed mt-4">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

