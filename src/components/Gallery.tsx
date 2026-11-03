import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING_DATA, GalleryItem } from '../data/weddingData';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % WEDDING_DATA.gallery.length;
    setSelectedIndex(nextIndex);
    setSelectedItem(WEDDING_DATA.gallery[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + WEDDING_DATA.gallery.length) % WEDDING_DATA.gallery.length;
    setSelectedIndex(prevIndex);
    setSelectedItem(WEDDING_DATA.gallery[prevIndex]);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-burgundy-950 via-[#20050C] to-burgundy-950 text-center overflow-hidden">
      {/* Background soft ambient radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            Celebration Moments
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-ivory-100 mt-2 mb-1">
            Wedding Glimpses & Traditions
          </h2>
          <OrnamentalDivider className="w-48 my-3" />
          <p className="font-poppins text-xs sm:text-sm text-champagne/85 max-w-lg mx-auto mb-10">
            A celebration of auspicious traditions, sacred rituals, vibrant florals, and joyous moments.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {WEDDING_DATA.gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              onClick={() => openLightbox(item, idx)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-gold/30 bg-burgundy-900/40 shadow-xl cursor-pointer"
            >
              {/* Photo with zoom on hover */}
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Shimmer gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Gold border on hover */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/50 rounded-xl transition-all duration-300 pointer-events-none" />

              {/* Title & category badge overlay */}
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between z-10">
                <div className="text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/20 border border-gold/40 text-[10px] font-cinzel text-gold-light tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-playfair text-lg font-bold text-ivory-100 group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="p-2 rounded-full bg-burgundy-900/80 border border-gold/40 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-burgundy-950/95 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-3 rounded-full bg-burgundy-900/80 border border-gold/40 text-gold-light hover:text-white hover:border-gold transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-burgundy-900/80 border border-gold/40 text-gold-light hover:text-white hover:border-gold transition-colors z-50 hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-burgundy-900/80 border border-gold/40 text-gold-light hover:text-white hover:border-gold transition-colors z-50 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-gold/50 bg-burgundy-900 shadow-2xl flex flex-col items-center"
            >
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-w-full max-h-[72vh] object-contain"
              />
              <div className="w-full p-4 bg-burgundy-950/90 border-t border-gold/30 text-center">
                <span className="text-[10px] font-cinzel text-gold-light tracking-widest uppercase">
                  {selectedItem.category}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-gold-gradient">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

