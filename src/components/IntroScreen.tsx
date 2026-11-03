import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaneshaSVG, HangingBellSVG, MandalaSVG, OrnamentalDivider } from './DecorativeSVGs';
import { audioManager } from '../utils/audioManager';
import { Sparkles } from 'lucide-react';

interface IntroScreenProps {
  onOpen: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Attempt automatic playback as soon as intro screen mounts
    audioManager.playMusic();

    const handleFirstTouch = () => {
      audioManager.playMusic();
    };

    window.addEventListener('click', handleFirstTouch, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstTouch, { once: true, passive: true });
    window.addEventListener('pointerdown', handleFirstTouch, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', handleFirstTouch);
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('pointerdown', handleFirstTouch);
    };
  }, []);

  const handleOpenInvitation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpening(true);
    audioManager.playMusic();

    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
          onClick={() => audioManager.playMusic()}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1A0308] via-[#2F0813] to-[#120206] px-4 overflow-hidden cursor-pointer"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.18)_0%,transparent_65%)] pointer-events-none" />

          {/* Gentle rotating background mandala watermark */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-24 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none opacity-15 w-[500px] h-[500px] md:w-[750px] md:h-[750px]"
          >
            <MandalaSVG className="w-full h-full text-gold" />
          </motion.div>

          {/* Hanging Traditional Bells from Top Corners */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute top-0 left-6 md:left-16 origin-top pointer-events-none"
          >
            <motion.div
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HangingBellSVG className="w-8 md:w-11 h-28 md:h-36 drop-shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="absolute top-0 right-6 md:right-16 origin-top pointer-events-none"
          >
            <motion.div
              animate={{ rotate: [4, -4, 4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HangingBellSVG className="w-8 md:w-11 h-28 md:h-36 drop-shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Royal Golden Ornamental Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            onClick={() => audioManager.playMusic()}
            className="relative w-full max-w-xl p-6 sm:p-10 md:p-12 text-center rounded-2xl border border-gold/40 bg-burgundy-950/85 backdrop-blur-md shadow-[0_0_60px_rgba(212,175,55,0.22)]"
          >
            {/* Ornamental Corners */}
            <span className="corner-ornament-tl pointer-events-none" />
            <span className="corner-ornament-tr pointer-events-none" />
            <span className="corner-ornament-bl pointer-events-none" />
            <span className="corner-ornament-br pointer-events-none" />

            {/* Inner Gold Inset Border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold/20 rounded-xl pointer-events-none" />

            {/* Content Sequence */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Auspicious Ganesha SVG */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.4 }}
                className="relative mb-4"
              >
                <div className="absolute inset-0 bg-gold/25 blur-xl rounded-full" />
                <GaneshaSVG className="relative w-28 h-28 sm:w-32 sm:h-32 drop-shadow-[0_4px_16px_rgba(212,175,55,0.5)]" />
              </motion.div>

              {/* Shloka or auspicious intro */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="mb-2"
              >
                <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-gold-light uppercase font-semibold">
                  ॥ श्री गणेशाय नमः ॥
                </span>
                <p className="font-cinzel text-sm sm:text-base tracking-[0.18em] text-champagne-light uppercase mt-1">
                  With the blessings of Lord Ganesha
                </p>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="my-3"
              >
                <OrnamentalDivider className="w-36 sm:w-48" />
              </motion.div>

              {/* Families Section */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.1 }}
                className="space-y-1.5 my-2"
              >
                <h3 className="font-cinzel font-bold text-base sm:text-lg md:text-xl text-gold-gradient tracking-[0.2em]">
                  GORAVANAKOLL FAMILY
                </h3>
                <div className="text-gold-light font-great-vibes text-2xl sm:text-3xl">&</div>
                <h3 className="font-cinzel font-bold text-base sm:text-lg md:text-xl text-gold-gradient tracking-[0.2em]">
                  RATIMANI FAMILY
                </h3>
              </motion.div>

              {/* Couple Mention */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-xs sm:text-sm text-champagne/90 font-poppins tracking-wider mt-2 mb-6"
              >
                cordially invite you to celebrate the wedding of
                <br />
                <span className="font-playfair italic font-bold text-lg sm:text-xl text-gold-light">
                  Ajay & Asha
                </span>
              </motion.p>

              {/* Open Wedding Invitation Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.5 }}
                className="w-full sm:w-auto"
              >
                <button
                  onClick={handleOpenInvitation}
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 overflow-hidden rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-burgundy-950 uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_8px_35px_rgba(255,223,115,0.6)] active:scale-95 bg-gradient-to-r from-[#FFF3C4] via-[#E8C15A] to-[#B38B3F] hover:from-[#FFF9E6] hover:to-[#D4AF37]"
                >
                  <span className="absolute top-0 left-0 w-1/2 h-full bg-white/35 skew-x-12 animate-shimmer-btn pointer-events-none" />
                  
                  <Sparkles className="w-4 h-4 mr-2 text-burgundy-900 group-hover:rotate-12 transition-transform duration-300" />
                  <span>OPEN WEDDING INVITATION</span>
                  <Sparkles className="w-4 h-4 ml-2 text-burgundy-900 group-hover:-rotate-12 transition-transform duration-300" />
                </button>

                <p className="text-[11px] text-gold/75 mt-3 font-poppins tracking-wider">
                  Tap to unveil the wedding celebration
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
