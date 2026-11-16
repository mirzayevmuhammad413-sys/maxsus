import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import LoveLetter from './components/LoveLetter';
import './App.css';

function App() {
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const handleOpenLetter = () => {
    setShouldPlayMusic(true);
    setBurstCount((prev) => prev + 1);
  };

  const handleTriggerBurst = () => {
    setBurstCount((prev) => prev + 1);
  };

  return (
    <div className="romantic-app-root">
      {/* Dynamic Animated Floating Hearts Canvas */}
      <FloatingHearts triggerBurst={burstCount} />

      {/* Floating Music Controller */}
      <MusicPlayer shouldPlay={shouldPlayMusic} />

      {/* Ambient Romantic Background Glow Layers */}
      <div className="ambient-radial-glow"></div>
      <div className="ambient-vignette"></div>

      {/* Main Content Area */}
      <main className="romantic-main-content">
        <LoveLetter
          onOpenLetter={handleOpenLetter}
          triggerHeartBurst={handleTriggerBurst}
        />
      </main>

      {/* Floating interactive watermark / footer */}
      <footer className="romantic-footer">
        <p>
          Chin ko‘ngildan va hurmat bilan yaratildi <span>🌸</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
