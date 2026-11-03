import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { OrnamentalDivider } from './DecorativeSVGs';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { fadeInUp } from '../animations/motionVariants';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue-section" className="relative py-20 px-4 bg-gradient-to-b from-burgundy-950 via-[#22050D] to-burgundy-950 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          The Auspicious Destination
          <MapPin className="w-3.5 h-3.5 text-gold" />
        </span>
        <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-ivory-100 mt-2 mb-1">
          Wedding Venue & Location
        </h2>
        <OrnamentalDivider className="w-48 my-3" />

        {/* Venue Card */}
        <div className="w-full mt-8 rounded-3xl border border-gold/40 bg-gradient-to-b from-burgundy-900/70 to-burgundy-950/90 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden text-left">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-[11px] font-cinzel text-gold-light tracking-widest uppercase mb-3 font-semibold">
                  {WEDDING_DATA.venue.city}, Karnataka
                </span>
                <h3 className="font-playfair text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wide mb-2">
                  {WEDDING_DATA.venue.name}
                </h3>
                <p className="font-poppins text-sm sm:text-base text-champagne-light/95 leading-relaxed max-w-xl">
                  {WEDDING_DATA.venue.landmark}, {WEDDING_DATA.venue.area},
                  <br />
                  {WEDDING_DATA.venue.city} – {WEDDING_DATA.venue.pincode}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:self-center">
                <a
                  href={WEDDING_DATA.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-burgundy-950 bg-gradient-to-r from-gold-light via-gold to-gold-antique hover:from-white hover:to-gold shadow-lg hover:shadow-gold/30 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-cinzel text-xs font-semibold tracking-wider text-gold-light border border-gold/40 bg-burgundy-900/50 hover:bg-gold/15 transition-all duration-200"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="mt-8 relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-inner group">
              <iframe
                title="Google Maps - Vidyadhiraj Bhavan, Hubballi"
                src={WEDDING_DATA.venue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Overlay button on mobile for opening Google Maps directly */}
              <div className="absolute bottom-3 right-3 sm:hidden">
                <a
                  href={WEDDING_DATA.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-950/90 border border-gold text-[11px] font-cinzel text-gold font-bold shadow-lg"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

