import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll(): () => void {
  // Check prefers-reduced-motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  let lenis: Lenis | null = null;
  let rafId: number | null = null;

  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis?.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis?.destroy();
    };
  } catch (error) {
    console.warn('Lenis smooth scroll initialization skipped:', error);
    return () => {};
  }
}

