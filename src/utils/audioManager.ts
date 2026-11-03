import { Howl } from 'howler';

// Auspicious Wedding Background Music (User BGM)
const WEDDING_MUSIC_URL = '/audio/bgm.mp3';

class WeddingAudioManager {
  private musicHowl: Howl | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private listeners: Set<(isPlaying: boolean, isMuted: boolean) => void> = new Set();
  private gestureListenersAttached: boolean = false;

  constructor() {
    this.initAudio();
  }

  private initAudio() {
    if (typeof window === 'undefined') return;

    try {
      // Create native HTML5 audio for maximum mobile browser compatibility
      this.audioElement = new Audio(WEDDING_MUSIC_URL);
      this.audioElement.loop = true;
      this.audioElement.volume = 0.65;
      this.audioElement.preload = 'auto';

      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    } catch (e) {
      console.warn('Native Audio fallback initialized:', e);
    }

    try {
      // Also initialize Howler
      this.musicHowl = new Howl({
        src: [WEDDING_MUSIC_URL],
        html5: true,
        loop: true,
        volume: 0.65,
        autoplay: true,
        onplay: () => {
          this.isPlaying = true;
          this.notify();
        },
        onpause: () => {
          this.isPlaying = false;
          this.notify();
        },
        onstop: () => {
          this.isPlaying = false;
          this.notify();
        },
      });
    } catch (e) {
      console.warn('Howler init:', e);
    }

    this.attachAutoStartListeners();
  }

  private attachAutoStartListeners() {
    if (typeof window === 'undefined' || this.gestureListenersAttached) return;
    this.gestureListenersAttached = true;

    // 1. Try immediate playback on load
    this.playMusic();

    // 2. Attach one-time user interaction listeners to bypass any browser autoplay restrictions
    const startAudioOnInteraction = () => {
      this.playMusic();
      window.removeEventListener('click', startAudioOnInteraction);
      window.removeEventListener('touchstart', startAudioOnInteraction);
      window.removeEventListener('pointerdown', startAudioOnInteraction);
      window.removeEventListener('scroll', startAudioOnInteraction);
      window.removeEventListener('keydown', startAudioOnInteraction);
    };

    window.addEventListener('click', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('pointerdown', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('scroll', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('keydown', startAudioOnInteraction, { once: true, passive: true });

    // Also retry after 300ms and 800ms in case the DOM is still loading
    setTimeout(() => this.playMusic(), 300);
    setTimeout(() => this.playMusic(), 800);
  }

  // Bell / chime completely disabled as per user instruction
  public playOpeningChime() {
    // No-op: Bell sound removed completely
  }

  public playMusic() {
    if (this.isPlaying) return;

    // Try playing through native Audio element first (most reliable on iOS Safari & Chrome)
    if (this.audioElement) {
      this.audioElement.play().then(() => {
        this.isPlaying = true;
        this.notify();
      }).catch(() => {
        // Autoplay blocked by browser policy until user gesture
      });
    }

    // Also trigger Howler
    if (this.musicHowl && !this.musicHowl.playing()) {
      try {
        this.musicHowl.play();
        this.isPlaying = true;
        this.notify();
      } catch {
        // Waiting for user gesture
      }
    }
  }

  public pauseMusic() {
    try {
      if (this.audioElement) {
        this.audioElement.pause();
      }
      if (this.musicHowl && this.musicHowl.playing()) {
        this.musicHowl.pause();
      }
      this.isPlaying = false;
      this.notify();
    } catch (e) {
      console.warn('Could not pause music:', e);
    }
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    if (this.musicHowl) {
      this.musicHowl.mute(this.isMuted);
    }
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public subscribe(callback: (isPlaying: boolean, isMuted: boolean) => void) {
    this.listeners.add(callback);
    callback(this.isPlaying, this.isMuted);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.isPlaying, this.isMuted));
  }
}

export const audioManager = new WeddingAudioManager();
