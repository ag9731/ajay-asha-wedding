import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { useCountdown } from '../hooks/useCountdown';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Sparkles, Heart } from 'lucide-react';
import { fadeInUp } from '../animations/motionVariants';

interface TimeUnitProps {
  label: string;
  value: number;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ label, value }) => {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative group w-full max-w-[76px] sm:max-w-[105px] md:max-w-[120px] aspect-square flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-burgundy-900/90 to-burgundy-950/95 border border-gold/40 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)]">
        {/* Subtle top gold accent line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

        {/* Corner accents */}
        <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-gold/60" />
        <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-gold/60" />
        <span className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-gold/60" />
        <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-r border-gold/60" />

        {/* Animated Number with Keyframe Transition */}
        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="font-playfair font-bold text-2xl sm:text-4xl md:text-5xl text-gold-gradient tracking-tight"
        >
          {formattedValue}
        </motion.span>
      </div>

      <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.12em] sm:tracking-[0.2em] text-champagne/90 uppercase font-semibold mt-2 text-center">
        {label}
      </span>
    </div>
  );
};

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(WEDDING_DATA.targetDateISO);

  return (
    <section id="countdown-section" className="relative py-16 sm:py-20 px-4 bg-burgundy-950/90 text-center">
      {/* Background soft ambient radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          The Auspicious Countdown
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
        </span>

        <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-ivory-100 mt-2 mb-1">
          Counting Down to the Sacred Union
        </h2>

        <p className="font-poppins text-xs sm:text-sm text-champagne-dark/90 tracking-wide mb-4">
          {WEDDING_DATA.auspiciousDate} • Muhurtham at {WEDDING_DATA.muhurthamTime}
        </p>

        <OrnamentalDivider className="w-44 mb-8" />

        {isComplete ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-2xl border-2 border-gold bg-gradient-to-b from-burgundy-900 to-burgundy-950 shadow-[0_0_50px_rgba(212,175,55,0.4)] max-w-lg mx-auto"
          >
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-3 animate-pulse" />
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold-gradient tracking-wider">
              Today is the Auspicious Day!
            </h3>
            <p className="font-poppins text-sm text-champagne mt-2">
              Ajay & Asha are united in eternal love with the sacred blessings of both families and Almighty.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 max-w-xl w-full justify-items-center px-1">
            <TimeUnit label="Days" value={days} />
            <TimeUnit label="Hours" value={hours} />
            <TimeUnit label="Minutes" value={minutes} />
            <TimeUnit label="Seconds" value={seconds} />
          </div>
        )}

        {/* Auspicious note */}
        <p className="font-poppins text-xs text-gold/75 tracking-wider mt-8 italic max-w-md">
          “May each passing moment bring us closer to this joyous celebration of two souls and two blessed families.”
        </p>
      </motion.div>
    </section>
  );
};

