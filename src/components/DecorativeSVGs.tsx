import React from 'react';

// Highly detailed Auspicious Lord Ganesha SVG
export const GaneshaSVG: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Lord Ganesha"
  >
    <defs>
      <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF3C4" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#9A7B1C" />
      </linearGradient>
      <filter id="ganeshaGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Crown / Mukut */}
    <path
      d="M100 20 L115 52 L85 52 Z"
      fill="url(#ganeshaGold)"
      stroke="#FFDF73"
      strokeWidth="1.5"
    />
    <path
      d="M100 12 L108 30 L92 30 Z"
      fill="#FFDF73"
    />
    <circle cx="100" cy="10" r="3" fill="#FFF3C4" />
    <path
      d="M80 50 Q100 42 120 50 Q125 58 120 62 Q100 56 80 62 Q75 58 80 50 Z"
      fill="url(#ganeshaGold)"
    />

    {/* Tilak / Trinetra */}
    <path
      d="M96 66 Q100 62 104 66 L104 78 Q100 82 96 78 Z"
      fill="#E53E3E"
    />
    <circle cx="100" cy="71" r="2.5" fill="#FFDF73" />
    <line x1="91" y1="68" x2="109" y2="68" stroke="#FFDF73" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="93" y1="72" x2="107" y2="72" stroke="#FFDF73" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="95" y1="76" x2="105" y2="76" stroke="#FFDF73" strokeWidth="1.5" strokeLinecap="round" />

    {/* Ears */}
    {/* Left Ear */}
    <path
      d="M82 60 C60 55 45 75 52 95 C58 110 72 110 78 105 C75 92 78 75 82 60 Z"
      fill="url(#ganeshaGold)"
      stroke="#F5E6BE"
      strokeWidth="1.5"
      opacity="0.95"
    />
    {/* Left Ear Inner details */}
    <path
      d="M74 72 C62 70 56 80 60 92 C65 100 70 98 72 92"
      stroke="#9A7B1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right Ear */}
    <path
      d="M118 60 C140 55 155 75 148 95 C142 110 128 110 122 105 C125 92 122 75 118 60 Z"
      fill="url(#ganeshaGold)"
      stroke="#F5E6BE"
      strokeWidth="1.5"
      opacity="0.95"
    />
    {/* Right Ear Inner details */}
    <path
      d="M126 72 C138 70 144 80 140 92 C135 100 130 98 128 92"
      stroke="#9A7B1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Face & Trunk */}
    <path
      d="M82 60 Q100 56 118 60 C116 80 114 98 110 115 C106 132 118 145 125 140 C130 136 128 126 122 124 C116 122 114 112 116 100"
      stroke="url(#ganeshaGold)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Left Tusk (Whole) */}
    <path
      d="M88 95 L78 100 L88 102 Z"
      fill="#FFFDF5"
      stroke="#D4AF37"
      strokeWidth="1"
    />
    {/* Right Tusk (Broken) */}
    <path
      d="M112 95 L118 98 L113 101 Z"
      fill="#FFFDF5"
      stroke="#D4AF37"
      strokeWidth="1"
    />

    {/* Modak in Trunk tip */}
    <circle cx="128" cy="132" r="5" fill="#FFDF73" stroke="#9A7B1C" strokeWidth="1" />

    {/* Eyes */}
    <path d="M86 78 Q91 75 95 78" stroke="#1F050B" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="91" cy="80" r="1.5" fill="#1F050B" />
    <path d="M105 78 Q109 75 114 78" stroke="#1F050B" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="109" cy="80" r="1.5" fill="#1F050B" />

    {/* Auspicious Aura / Halo */}
    <circle cx="100" cy="85" r="75" stroke="url(#ganeshaGold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="100" cy="85" r="82" stroke="url(#ganeshaGold)" strokeWidth="0.75" opacity="0.25" />
  </svg>
);

// Traditional Hanging Bell
export const HangingBellSVG: React.FC<{ className?: string }> = ({ className = "w-8 h-20" }) => (
  <svg
    viewBox="0 0 60 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Hanging Bell"
  >
    <defs>
      <linearGradient id="bellGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF3C4" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6510" />
      </linearGradient>
    </defs>
    {/* Chain */}
    <line x1="30" y1="0" x2="30" y2="45" stroke="url(#bellGold)" strokeWidth="2" strokeDasharray="3 2" />
    <circle cx="30" cy="45" r="3" fill="#FFF3C4" />
    {/* Bell Cap */}
    <path d="M22 50 Q30 46 38 50 L40 55 L20 55 Z" fill="url(#bellGold)" />
    {/* Bell Body */}
    <path
      d="M20 55 C20 75 10 95 10 102 C10 106 18 108 30 108 C42 108 50 106 50 102 C50 95 40 75 40 55 Z"
      fill="url(#bellGold)"
      stroke="#FFDF73"
      strokeWidth="1"
    />
    {/* Bell Rim */}
    <ellipse cx="30" cy="103" rx="20" ry="5" fill="#9A7B1C" opacity="0.6" />
    <ellipse cx="30" cy="102" rx="20" ry="4" fill="url(#bellGold)" stroke="#FFF3C4" strokeWidth="1" />
    {/* Clapper / Tong */}
    <circle cx="30" cy="116" r="4.5" fill="#FFF3C4" stroke="#9A7B1C" strokeWidth="1" />
    <line x1="30" y1="102" x2="30" y2="114" stroke="#D4AF37" strokeWidth="2" />
    {/* Decorative lower bead */}
    <circle cx="30" cy="123" r="2" fill="#E8C15A" />
  </svg>
);

// Traditional Mandap Illustration SVG
export const MandapSVG: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => (
  <svg
    viewBox="0 0 600 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="South Indian Wedding Mandap"
  >
    <defs>
      <linearGradient id="mandapGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4D0" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6510" />
      </linearGradient>
      <linearGradient id="redPillar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6B1426" />
        <stop offset="50%" stopColor="#8C1D38" />
        <stop offset="100%" stopColor="#4A0E17" />
      </linearGradient>
    </defs>

    {/* Platform / Peetha */}
    <path d="M60 290 L540 290 L560 310 L40 310 Z" fill="url(#mandapGold)" />
    <rect x="80" y="278" width="440" height="12" fill="#6B1426" rx="2" stroke="#D4AF37" strokeWidth="1" />

    {/* Left Pillar 1 */}
    <rect x="110" y="90" width="16" height="188" fill="url(#redPillar)" rx="2" stroke="#D4AF37" strokeWidth="1" />
    <rect x="106" y="85" width="24" height="8" fill="url(#mandapGold)" rx="1" />
    <rect x="106" y="270" width="24" height="8" fill="url(#mandapGold)" rx="1" />
    {/* Floral wraps around Left Pillar */}
    <path d="M108 120 Q118 128 128 120" stroke="#FF9933" strokeWidth="3" fill="none" />
    <path d="M108 160 Q118 168 128 160" stroke="#FF9933" strokeWidth="3" fill="none" />
    <path d="M108 200 Q118 208 128 200" stroke="#FF9933" strokeWidth="3" fill="none" />
    <path d="M108 240 Q118 248 128 240" stroke="#FF9933" strokeWidth="3" fill="none" />

    {/* Left Pillar 2 (Inner) */}
    <rect x="150" y="90" width="14" height="188" fill="url(#redPillar)" rx="2" stroke="#D4AF37" strokeWidth="1" />
    <rect x="147" y="85" width="20" height="8" fill="url(#mandapGold)" rx="1" />
    <rect x="147" y="270" width="20" height="8" fill="url(#mandapGold)" rx="1" />

    {/* Right Pillar 2 (Inner) */}
    <rect x="436" y="90" width="14" height="188" fill="url(#redPillar)" rx="2" stroke="#D4AF37" strokeWidth="1" />
    <rect x="433" y="85" width="20" height="8" fill="url(#mandapGold)" rx="1" />
    <rect x="433" y="270" width="20" height="8" fill="url(#mandapGold)" rx="1" />

    {/* Right Pillar 1 */}
    <rect x="474" y="90" width="16" height="188" fill="url(#redPillar)" rx="2" stroke="#D4AF37" strokeWidth="1" />
    <rect x="470" y="85" width="24" height="8" fill="url(#mandapGold)" rx="1" />
    <rect x="470" y="270" width="24" height="8" fill="url(#mandapGold)" rx="1" />
    {/* Floral wraps around Right Pillar */}
    <path d="M472 120 Q482 128 492 120" stroke="#FF9933" strokeWidth="3" fill="none" />
    <path d="M472 160 Q482 168 492 160" stroke="#FF9933" strokeWidth="3" fill="none" />
    <path d="M472 200 Q482 208 492 200" stroke="#FF9933" strokeWidth="3" fill="none" />
    <path d="M472 240 Q482 248 492 240" stroke="#FF9933" strokeWidth="3" fill="none" />

    {/* Grand Arch Beam */}
    <path
      d="M90 85 Q300 40 510 85 L500 95 Q300 55 100 95 Z"
      fill="url(#mandapGold)"
      stroke="#FFF3C4"
      strokeWidth="1"
    />
    
    {/* Inner Floral Arch Swag */}
    <path
      d="M110 95 Q300 135 490 95"
      stroke="#FFD700"
      strokeWidth="6"
      strokeDasharray="4 2"
      fill="none"
    />
    <path
      d="M120 102 Q300 148 480 102"
      stroke="#FF4500"
      strokeWidth="4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M140 110 Q300 160 460 110"
      stroke="#FAF0E6"
      strokeWidth="3"
      strokeDasharray="3 2"
      fill="none"
    />

    {/* Central Crown Kalash / Gopuram Motif */}
    <path
      d="M300 20 L308 45 L292 45 Z"
      fill="#FFDF73"
      stroke="#9A7B1C"
      strokeWidth="1"
    />
    {/* Kalasha pot */}
    <ellipse cx="300" cy="52" rx="14" ry="10" fill="url(#mandapGold)" />
    {/* Coconut on Kalash */}
    <path d="M293 45 Q300 36 307 45 Z" fill="#8B4513" />
    {/* Mango leaves */}
    <path d="M288 47 Q294 38 300 45" stroke="#2E8B57" strokeWidth="2.5" fill="none" />
    <path d="M312 47 Q306 38 300 45" stroke="#2E8B57" strokeWidth="2.5" fill="none" />

    {/* Hanging Bells from Arch */}
    <g transform="translate(180, 115) scale(0.35)">
      <circle cx="30" cy="10" r="4" fill="#D4AF37" />
      <path d="M15 25 C15 45 5 60 5 65 C5 68 15 70 30 70 C45 70 55 68 55 65 C55 60 45 45 45 25 Z" fill="#D4AF37" />
    </g>
    <g transform="translate(290, 135) scale(0.35)">
      <circle cx="30" cy="10" r="4" fill="#D4AF37" />
      <path d="M15 25 C15 45 5 60 5 65 C5 68 15 70 30 70 C45 70 55 68 55 65 C55 60 45 45 45 25 Z" fill="#D4AF37" />
    </g>
    <g transform="translate(400, 115) scale(0.35)">
      <circle cx="30" cy="10" r="4" fill="#D4AF37" />
      <path d="M15 25 C15 45 5 60 5 65 C5 68 15 70 30 70 C45 70 55 68 55 65 C55 60 45 45 45 25 Z" fill="#D4AF37" />
    </g>

    {/* Sacred Havan Kund Fire in Center */}
    <polygon points="265,278 335,278 325,255 275,255" fill="url(#mandapGold)" stroke="#6B1426" strokeWidth="1" />
    {/* Fire flames */}
    <path
      d="M288 255 Q294 235 300 220 Q306 235 312 255 Q305 248 300 252 Q295 248 288 255 Z"
      fill="#FF4500"
    />
    <path
      d="M293 255 Q298 240 300 230 Q303 240 307 255 Z"
      fill="#FFD700"
    />
  </svg>
);

// Traditional Torana / Garland border
export const ToranaGarlandSVG: React.FC<{ className?: string }> = ({ className = "w-full h-8" }) => (
  <svg
    viewBox="0 0 1200 40"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <pattern id="marigoldPattern" width="60" height="40" patternUnits="userSpaceOnUse">
        {/* Mango Leaf */}
        <path d="M30 0 C25 15 15 25 30 38 C45 25 35 15 30 0" fill="#1B4D3E" opacity="0.9" />
        <line x1="30" y1="0" x2="30" y2="35" stroke="#2C5E4F" strokeWidth="1" />
        {/* Marigold flower */}
        <circle cx="30" cy="12" r="7" fill="#FF9933" />
        <circle cx="30" cy="12" r="5" fill="#FFCC00" />
        <circle cx="30" cy="12" r="2.5" fill="#FF3300" />
        {/* Jasmine buds string */}
        <circle cx="10" cy="5" r="3" fill="#FFFDF5" />
        <circle cx="50" cy="5" r="3" fill="#FFFDF5" />
        <path d="M0 4 Q30 16 60 4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      </pattern>
    </defs>
    <rect width="1200" height="40" fill="url(#marigoldPattern)" />
  </svg>
);

// Traditional Mandala Art SVG for background / accent
export const MandalaSVG: React.FC<{ className?: string }> = ({ className = "w-64 h-64" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="95" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="100" cy="100" r="85" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
    <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
    <circle cx="100" cy="100" r="50" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
    <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="2" opacity="0.8" />
    <circle cx="100" cy="100" r="10" fill="#D4AF37" opacity="0.9" />

    {/* 8 Petal Star */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <path
          d="M100 30 Q108 50 100 70 Q92 50 100 30 Z"
          fill="#D4AF37"
          opacity="0.35"
          stroke="#FFDF73"
          strokeWidth="0.8"
        />
        <circle cx="100" cy="25" r="2.5" fill="#FFDF73" />
        <path
          d="M100 70 Q106 85 100 100 Q94 85 100 70 Z"
          fill="#B38B3F"
          opacity="0.4"
        />
      </g>
    ))}
    {/* 16 Secondary Accents */}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <circle cx="100" cy="40" r="2" fill="#FFF3C4" opacity="0.8" />
        <line x1="100" y1="45" x2="100" y2="65" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      </g>
    ))}
  </svg>
);

// Ornamental Divider SVG
export const OrnamentalDivider: React.FC<{ className?: string }> = ({ className = "w-48 h-6" }) => (
  <div className={`flex items-center justify-center space-x-3 ${className}`}>
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold to-gold-light" />
    <div className="flex items-center space-x-1">
      <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
      <span className="w-2.5 h-2.5 rotate-45 bg-gold-shimmer border border-gold shadow-sm" />
      <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
    </div>
    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-gold to-gold-light" />
  </div>
);

