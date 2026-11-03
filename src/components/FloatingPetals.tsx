import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
  type: 'marigold' | 'rose' | 'jasmine';
  opacity: number;
}

export const FloatingPetals: React.FC = () => {
  // Generate stable random petals
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 96 + 2, // 2% to 98%
      animationDuration: 9 + Math.random() * 9, // 9 to 18 seconds
      delay: Math.random() * 8, // 0 to 8s
      size: 14 + Math.random() * 14, // 14 to 28px
      type: i % 3 === 0 ? 'marigold' : i % 3 === 1 ? 'rose' : 'jasmine',
      opacity: 0.6 + Math.random() * 0.35,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => {
        let petalStyle = {};
        if (petal.type === 'marigold') {
          petalStyle = {
            background: 'radial-gradient(ellipse at 30% 30%, #FFA500 0%, #FF8C00 60%, #E65100 100%)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            boxShadow: '0 2px 4px rgba(230, 81, 0, 0.25)',
          };
        } else if (petal.type === 'rose') {
          petalStyle = {
            background: 'radial-gradient(ellipse at 30% 30%, #FF6B81 0%, #D81B60 70%, #880E4F 100%)',
            borderRadius: '50% 50% 60% 40% / 60% 40% 60% 40%',
            boxShadow: '0 2px 4px rgba(136, 14, 79, 0.25)',
          };
        } else {
          // Jasmine
          petalStyle = {
            background: 'radial-gradient(ellipse at 30% 30%, #FFFFFF 0%, #FFF8E1 70%, #FFE082 100%)',
            borderRadius: '70% 30% 60% 40% / 40% 60% 40% 60%',
            boxShadow: '0 2px 4px rgba(255, 224, 130, 0.3)',
          };
        }

        return (
          <div
            key={petal.id}
            className="absolute -top-12 animate-petal-fall"
            style={{
              left: `${petal.left}%`,
              animationDuration: `${petal.animationDuration}s`,
              animationDelay: `${petal.delay}s`,
              width: `${petal.size}px`,
              height: `${petal.size * 0.85}px`,
              opacity: petal.opacity,
              ...petalStyle,
            }}
          />
        );
      })}
    </div>
  );
};

