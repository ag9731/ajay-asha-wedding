import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Pause, Play } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((playing, muted) => {
      setIsPlaying(playing);
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Expanded Controls Pill */}
      {isExpanded && (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-burgundy-900/90 border border-gold/40 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          <span className="text-xs font-cinzel text-gold-light tracking-wider whitespace-nowrap pl-1">
            Wedding Melodies
          </span>
          <button
            onClick={() => audioManager.toggleMute()}
            className="p-1.5 rounded-full text-gold-light hover:text-white hover:bg-gold/20 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-300" /> : <Volume2 className="w-4 h-4 text-gold" />}
          </button>
        </div>
      )}

      {/* Main Floating Music Pill / Equalizer */}
      <button
        onClick={() => {
          if (!isPlaying) {
            audioManager.playMusic();
          } else {
            setIsExpanded(!isExpanded);
          }
        }}
        className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 shadow-2xl backdrop-blur-md ${
          isPlaying
            ? 'bg-burgundy-800/95 border-2 border-gold text-gold shadow-gold/20 scale-105'
            : 'bg-burgundy-900/80 border border-gold/40 text-gold-light hover:border-gold hover:scale-105'
        }`}
        title={isPlaying ? "Music Playing (Tap for controls)" : "Play Auspicious Music"}
        aria-label="Toggle Wedding Music"
      >
        {isPlaying ? (
          <div className="flex items-end justify-center gap-0.5 w-6 h-6 px-1">
            <span className="w-1 bg-gold rounded-full h-3 animate-[pulse_0.6s_ease-in-out_infinite]" />
            <span className="w-1 bg-gold-light rounded-full h-5 animate-[pulse_0.9s_ease-in-out_infinite]" />
            <span className="w-1 bg-gold rounded-full h-2 animate-[pulse_0.7s_ease-in-out_infinite]" />
            <span className="w-1 bg-gold-shimmer rounded-full h-4 animate-[pulse_0.8s_ease-in-out_infinite]" />
          </div>
        ) : (
          <div className="relative flex items-center justify-center w-6 h-6">
            <Music className="w-5 h-5 text-gold-light group-hover:text-gold transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold animate-ping" />
          </div>
        )}

        {/* Pulse glow ring when music is off to invite user to play */}
        {!isPlaying && (
          <span className="absolute inset-0 rounded-full border border-gold/50 animate-ping opacity-30 pointer-events-none" />
        )}
      </button>

      {/* Quick Pause button if playing */}
      {isPlaying && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            audioManager.pauseMusic();
          }}
          className="p-2.5 rounded-full bg-burgundy-900/90 border border-gold/40 text-gold-light hover:text-white hover:border-gold shadow-lg backdrop-blur-md transition-all"
          title="Pause Music"
          aria-label="Pause Music"
        >
          <Pause className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

