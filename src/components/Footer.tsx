import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 bg-[#100104] border-t border-gold/20 text-center text-champagne/70 text-xs font-poppins">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-burgundy-950 text-gold-light hover:border-gold hover:text-white transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-gold group-hover:-translate-y-0.5 transition-transform" />
          <span className="font-cinzel text-[11px] tracking-wider uppercase">Back to Top</span>
        </button>

        <div className="space-y-1">
          <p className="font-cinzel text-xs text-gold-light font-bold tracking-widest uppercase">
            {WEDDING_DATA.groom.family} & {WEDDING_DATA.bride.family}
          </p>
          <p className="text-[11px] text-champagne/60 tracking-wider">
            Celebrating the sacred wedding of {WEDDING_DATA.couplesNames}
          </p>
          <p className="text-[10px] text-gold/50 tracking-wider">
            Sunday, 29 November 2026 • Vidyadhiraj Bhavan, Hubballi
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-champagne/50 pt-2">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>for Ajay & Asha</span>
        </div>
      </div>
    </footer>
  );
};

