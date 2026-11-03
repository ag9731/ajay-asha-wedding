import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';
import { fadeInUp } from '../animations/motionVariants';

export const WhatsAppShare: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const getWebsiteUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
    return 'https://ajayashawedding.vercel.app';
  };

  const handleWhatsAppShare = () => {
    const fullText = `${WEDDING_DATA.whatsappShare.rawMessage}${getWebsiteUrl()}`;
    const encodedText = encodeURIComponent(fullText);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    const url = getWebsiteUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-burgundy-950 via-[#270710] to-burgundy-950 text-center overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          Share the Blessing
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
        </span>
        <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-ivory-100 mt-2 mb-1">
          Invite Friends & Family
        </h2>
        <OrnamentalDivider className="w-44 my-3" />
        <p className="font-poppins text-xs sm:text-sm text-champagne/85 max-w-md mx-auto mb-6">
          Share this digital wedding invitation with loved ones, relatives, and well-wishers via WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
          {/* WhatsApp Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_4px_20px_rgba(16,185,129,0.35)] transition-all duration-300 active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span>SHARE ON WHATSAPP</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-gold-light border border-gold/40 bg-burgundy-900/60 hover:bg-gold/15 transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">LINK COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold" />
                <span>COPY INVITATION LINK</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

