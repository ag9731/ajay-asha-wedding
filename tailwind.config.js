/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF6F0',
          200: '#F3EAD9',
          DEFAULT: '#FAF6F0',
        },
        burgundy: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          500: '#A11635',
          700: '#6B1426',
          800: '#4A0E17',
          900: '#2A0812',
          950: '#18040A',
          DEFAULT: '#4A0E17',
        },
        gold: {
          light: '#F8E9C0',
          DEFAULT: '#D4AF37',
          dark: '#9A7B1C',
          antique: '#B38B3F',
          shimmer: '#FFDF73',
          metallic: '#C5A059',
        },
        champagne: {
          light: '#FDF9F2',
          DEFAULT: '#F7E7CE',
          dark: '#E8D0A9',
        },
        blush: {
          light: '#FFF0F2',
          DEFAULT: '#FAD2E1',
          dark: '#E8A598',
        },
        forest: {
          light: '#2C5E4F',
          DEFAULT: '#1B4D3E',
          dark: '#0F3026',
        },
        peach: {
          DEFAULT: '#FDE2D1',
          light: '#FFF3EB',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'radial-gradient(ellipse at center, #5A111F 0%, #2A0812 70%, #150307 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #ECC872 0%, #D4AF37 50%, #9A7B1C 100%)',
        'gold-text': 'linear-gradient(135deg, #FFF3C4 0%, #E8C15A 35%, #B38B3F 70%, #F5DF88 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'petal-fall': 'petalFall 12s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        petalFall: {
          '0%': { transform: 'translate(0, -10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translate(80px, 105vh) rotate(360deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

