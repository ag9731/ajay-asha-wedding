import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { submitRSVP } from '../firebase/firebaseConfig';
import { OrnamentalDivider } from './DecorativeSVGs';
import { Heart, Send, CheckCircle2, User, Phone, Users, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { fadeInUp } from '../animations/motionVariants';

const rsvpSchema = z.object({
  guestName: z.string().min(2, { message: 'Please enter your full name' }).max(60),
  mobileNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9+\s-]{10,15}$/.test(val), {
      message: 'Please enter a valid 10-digit mobile number',
    }),
  numberOfGuests: z.coerce.number().min(1, { message: 'At least 1 guest' }).max(15),
  attending: z.enum(['accept', 'decline'], {
    required_error: 'Please let us know if you can attend',
  }),
  message: z.string().max(400, { message: 'Message is too long (max 400 characters)' }).optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export const RSVPForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<RSVPFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      numberOfGuests: 1,
      attending: 'accept',
      guestName: '',
      mobileNumber: '',
      message: '',
    },
  });

  const selectedAttending = watch('attending');

  const triggerCelebrationConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFDF73', '#A11635', '#FAD2E1', '#FAF6F0'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#D4AF37', '#FFA500', '#FF4500'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#D4AF37', '#FFA500', '#FF4500'],
        });
      }, 350);
    } catch (e) {
      console.warn('Confetti effect trigger:', e);
    }
  };

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitRSVP({
        guestName: data.guestName,
        mobileNumber: data.mobileNumber || '',
        numberOfGuests: Number(data.numberOfGuests),
        attending: data.attending,
        message: data.message || '',
      });

      setSubmittedData(data);
      setIsSuccess(true);

      if (data.attending === 'accept') {
        triggerCelebrationConfetti();
      }
    } catch (err: unknown) {
      console.error('RSVP submission error:', err);
      setErrorMessage('Unable to record your RSVP right now. Please try again or message us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    reset();
  };

  return (
    <section id="rsvp-section" className="relative py-20 px-4 bg-burgundy-950 text-center overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(161,22,53,0.2)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          Wedding Attendance
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
        </span>
        <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-ivory-100 mt-2 mb-1">
          RSVP to Celebrate
        </h2>
        <OrnamentalDivider className="w-48 my-3" />
        <p className="font-poppins text-xs sm:text-sm text-champagne/85 max-w-lg mx-auto mb-8">
          Kindly confirm your presence by filling out this form so both the Goravanakoll & Ratimani families can extend a warm welcome to you.
        </p>

        {/* RSVP Card Frame */}
        <div className="w-full p-6 sm:p-10 rounded-3xl border border-gold/40 bg-gradient-to-b from-burgundy-900/80 to-burgundy-950/95 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-md relative text-left">
          {/* Corner Ornaments */}
          <span className="corner-ornament-tl" />
          <span className="corner-ornament-tr" />
          <span className="corner-ornament-bl" />
          <span className="corner-ornament-br" />

          <AnimatePresence mode="wait">
            {isSuccess && submittedData ? (
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
                  {submittedData.attending === 'accept'
                    ? 'Thank You for Confirming!'
                    : 'Response Received with Gratitude'}
                </h3>

                <p className="font-poppins text-sm text-champagne-light max-w-md mx-auto mb-4">
                  {submittedData.attending === 'accept'
                    ? `Dear ${submittedData.guestName}, we are overjoyed that you and your party (${submittedData.numberOfGuests} guest${submittedData.numberOfGuests > 1 ? 's' : ''}) will grace Ajay & Asha's wedding ceremony!`
                    : `Dear ${submittedData.guestName}, thank you for letting us know. We will deeply miss your presence, but cherish your warm blessings and good wishes.`}
                </p>

                <div className="my-4 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/10 text-xs font-cinzel text-gold-light tracking-widest uppercase">
                  Goravanakoll Family & Ratimani Family
                </div>

                <button
                  onClick={handleResetForm}
                  className="mt-4 text-xs font-cinzel text-gold/80 hover:text-gold underline tracking-wider"
                >
                  Edit or submit another response
                </button>
              </motion.div>
            ) : (
              <form key="rsvp-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl border border-rose-500/50 bg-rose-950/50 text-rose-200 text-xs font-poppins">
                    {errorMessage}
                  </div>
                )}

                {/* Guest Name */}
                <div>
                  <label className="block font-cinzel text-xs font-semibold text-gold-light tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold" />
                    Guest Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('guestName')}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-burgundy-950/70 border border-gold/30 text-ivory-100 placeholder-champagne-dark/40 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                  {errors.guestName && (
                    <p className="text-rose-400 text-xs mt-1 font-poppins">{errors.guestName.message}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block font-cinzel text-xs font-semibold text-gold-light tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    Mobile Number <span className="text-gold/60 text-[10px] lowercase">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    {...register('mobileNumber')}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-burgundy-950/70 border border-gold/30 text-ivory-100 placeholder-champagne-dark/40 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                  {errors.mobileNumber && (
                    <p className="text-rose-400 text-xs mt-1 font-poppins">{errors.mobileNumber.message}</p>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block font-cinzel text-xs font-semibold text-gold-light tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold" />
                    Number of Guests Attending
                  </label>
                  <select
                    {...register('numberOfGuests')}
                    className="w-full px-4 py-3 rounded-xl bg-burgundy-950/90 border border-gold/30 text-ivory-100 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-burgundy-950 text-ivory-100">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  {errors.numberOfGuests && (
                    <p className="text-rose-400 text-xs mt-1 font-poppins">{errors.numberOfGuests.message}</p>
                  )}
                </div>

                {/* Attendance Radio Cards */}
                <div>
                  <label className="block font-cinzel text-xs font-semibold text-gold-light tracking-wider uppercase mb-2">
                    Will You Attend? <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`relative flex items-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedAttending === 'accept'
                          ? 'border-gold bg-gold/15 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'border-gold/30 bg-burgundy-950/50 hover:border-gold/60'
                      }`}
                    >
                      <input
                        type="radio"
                        value="accept"
                        {...register('attending')}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedAttending === 'accept' ? 'border-gold bg-gold' : 'border-gold/50'
                          }`}
                        >
                          {selectedAttending === 'accept' && <div className="w-1.5 h-1.5 rounded-full bg-burgundy-950" />}
                        </div>
                        <span className="font-cinzel text-xs font-bold text-ivory-100 tracking-wider">
                          Joyfully Accept
                        </span>
                      </div>
                    </label>

                    <label
                      className={`relative flex items-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedAttending === 'decline'
                          ? 'border-rose-400/80 bg-rose-950/30 shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                          : 'border-gold/30 bg-burgundy-950/50 hover:border-gold/60'
                      }`}
                    >
                      <input
                        type="radio"
                        value="decline"
                        {...register('attending')}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedAttending === 'decline' ? 'border-rose-400 bg-rose-400' : 'border-gold/50'
                          }`}
                        >
                          {selectedAttending === 'decline' && <div className="w-1.5 h-1.5 rounded-full bg-burgundy-950" />}
                        </div>
                        <span className="font-cinzel text-xs font-bold text-ivory-100 tracking-wider">
                          Regretfully Decline
                        </span>
                      </div>
                    </label>
                  </div>
                  {errors.attending && (
                    <p className="text-rose-400 text-xs mt-1 font-poppins">{errors.attending.message}</p>
                  )}
                </div>

                {/* Personal Message */}
                <div>
                  <label className="block font-cinzel text-xs font-semibold text-gold-light tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    Personal Message / Blessings <span className="text-gold/60 text-[10px] lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    {...register('message')}
                    placeholder="Write your wishes or blessings for Ajay & Asha..."
                    className="w-full px-4 py-3 rounded-xl bg-burgundy-950/70 border border-gold/30 text-ivory-100 placeholder-champagne-dark/40 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1 font-poppins">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-burgundy-950 uppercase transition-all duration-300 shadow-xl bg-gradient-to-r from-gold-light via-gold to-gold-antique hover:from-white hover:to-gold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-burgundy-950" />
                        <span>RECORDING ATTENDANCE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-burgundy-950 group-hover:translate-x-0.5 transition-transform" />
                        <span>CONFIRM ATTENDANCE</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

