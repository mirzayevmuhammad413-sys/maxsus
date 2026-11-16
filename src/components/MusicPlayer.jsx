import React, { useEffect, useRef, useState } from 'react';
import musicFile from '../audio/kel-yashaylik.mp3';

const MusicPlayer = ({ shouldPlay, onToggle }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (shouldPlay && !isPlaying && !hasInteracted) {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log('Audio autoplay prevented:', err);
        });
      }
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (onToggle) onToggle(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        if (onToggle) onToggle(true);
      }).catch((err) => {
        console.log('Audio play error:', err);
      });
    }
  };

  return (
    <div className="music-player-container">
      <audio
        ref={audioRef}
        src={musicFile}
        loop
        preload="none"
      />
      <button
        onClick={togglePlay}
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
        title={isPlaying ? 'Pauza' : 'Musiqani ijro etish'}
        aria-label="Musiqa boshqaruvi"
      >
        <span className="music-icon">
          {isPlaying ? (
            <div className="equalizer-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
              <span className="bar bar-4"></span>
            </div>
          ) : (
            <span className="play-icon">▶</span>
          )}
        </span>
        <span className="music-text">
          {isPlaying ? 'Kel yashaylik 🎶' : 'Musiqani yoqish 🎵'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;
