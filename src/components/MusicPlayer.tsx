import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={togglePlay}
        className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full flex items-center gap-2 font-mono text-sm transition-all duration-300 shadow-lg hover:shadow-yellow-500/20"
      >
        {isPlaying ? (
          <>
            <Pause size={16} /> Pause Music
          </>
        ) : (
          <>
            <Play size={16} /> Play Music
          </>
        )}
      </button>
      <audio
        ref={audioRef}
        src="/path-to-your-music.mp3"
        loop
        className="hidden"
      />
    </div>
  );
};

export default MusicPlayer;