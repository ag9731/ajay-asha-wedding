import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarGenerator';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Calendar, Download, Sparkles } from 'lucide-react';
import { fadeInUp } from '../animations/motionVariants';

export const CalendarButton: React.FC = () => {
  return (
    <section className="relative py-14 px-4 bg-burgundy-950 text-center overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center"
      >
        <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-gold" />
          Mark Your Calendar
          <Calendar className="w-3.5 h-3.5 text-gold" />
        </span>
        <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-ivory-100 mt-1 mb-2">
          Save the Auspicious Date
        </h3>
        <p className="font-poppins text-xs sm:text-sm text-champagne/80 mb-6">
          {WEDDING_DATA.auspiciousDate} • 12:31 PM IST
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          {/* Add to Google Calendar */}
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-burgundy-950 bg-gradient-to-r from-gold-light via-gold to-gold-antique hover:from-white hover:to-gold shadow-md hover:shadow-gold/30 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-burgundy-950" />
            <span>GOOGLE CALENDAR</span>
          </a>

          {/* Download Apple / Outlook .ics File */}
          <button
            onClick={downloadIcsFile}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cinzel text-xs font-semibold tracking-wider text-gold-light border border-gold/40 bg-burgundy-900/60 hover:bg-gold/15 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-gold" />
            <span>APPLE / ICS CALENDAR</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

