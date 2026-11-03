// Auspicious Wedding Background Music (User BGM)
const WEDDING_MUSIC_URL = '/audio/bgm.mp3';

class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private listeners: Set<(isPlaying: boolean, isMuted: boolean) => void> = new Set();
  private gestureListenersAttached: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    try {
      this.audio = new Audio(WEDDING_MUSIC_URL);
      this.audio.loop = true;
      this.audio.volume = 0.65;
      this.audio.preload = 'auto';

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      // Attempt immediate autoplay on load
      this.playMusic();
      this.attachGestureListeners();
    } catch (e) {
      console.warn('Audio initialization deferred:', e);
    }
  }

  private attachGestureListeners() {
    if (typeof window === 'undefined' || this.gestureListenersAttached) return;
    this.gestureListenersAttached = true;

    const startOnInteraction = () => {
      this.playMusic();
    };

    ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'].forEach((eventName) => {
      window.addEventListener(eventName, startOnInteraction, { once: true, passive: true });
    });
  }

  public playMusic(): Promise<void> {
    if (!this.audio) {
      if (typeof window !== 'undefined') {
        this.initAudio();
      }
      if (!this.audio) return Promise.resolve();
    }

    if (this.isPlaying) return Promise.resolve();

    return this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
        this.notify();
      })
      .catch(() => {
        // Autoplay without user interaction blocked by browser security policy
        this.isPlaying = false;
        this.notify();
      });
  }

  public pauseMusic() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
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
    if (this.audio) {
      this.audio.muted = this.isMuted;
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
