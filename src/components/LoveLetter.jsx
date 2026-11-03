import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';

const LoveLetter = ({ onOpenLetter, triggerHeartBurst }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (onOpenLetter) onOpenLetter();
      if (triggerHeartBurst) triggerHeartBurst();
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    setShowGallery(false);
  };

  return (
    <div className="letter-wrapper">
      {/* Closed Envelope View */}
      {!isOpen && (
        <div className="closed-envelope-section">
          <div className="envelope-invitation">
            <span className="sparkle-tag">✨ A Gentle Note For Musharaf ✨</span>
            <h1 className="envelope-main-title">A Special Letter</h1>
            <p className="envelope-sub-text">
              A few sincere words of heartfelt appreciation and quiet respect...
            </p>
          </div>

          <div
            className="envelope-container"
            onClick={handleOpen}
            role="button"
            tabIndex={0}
            aria-label="Open letter"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleOpen();
            }}
          >
            {/* The Envelope */}
            <div className="envelope">
              {/* Envelope back */}
              <div className="envelope-back"></div>

              {/* Envelope letter sneak peek */}
              <div className="envelope-letter-preview">
                <div className="preview-line"></div>
                <div className="preview-line short"></div>
                <div className="preview-heart">🌸</div>
              </div>

              {/* Envelope Flap */}
              <div className="envelope-flap"></div>

              {/* Envelope Left & Right folds */}
              <div className="envelope-pocket"></div>

              {/* Wax Seal */}
              <div className="wax-seal">
                <div className="wax-seal-inner">
                  <span className="seal-heart">🌸</span>
                </div>
                <div className="wax-seal-pulse"></div>
              </div>

              {/* Stamp on corner */}
              <div className="envelope-stamp">
                <span>🕊️</span>
                <small>GRACE</small>
              </div>

              {/* Front Label */}
              <div className="envelope-label">
                <p className="label-to">To: <span>Musharaf 🌸</span></p>
                <p className="label-from">From: <span>Someone Who Truly Loves You 🕊️</span></p>
              </div>
            </div>

            {/* Glowing button below envelope */}
            <button className="open-letter-btn">
              <span className="btn-icon">💌</span>
              <span>Read Letter</span>
              <span className="btn-icon">🌸</span>
            </button>
          </div>
        </div>
      )}

      {/* Opened Letter View */}
      {isOpen && (
        <div className="opened-letter-section">
          <div className="letter-paper-wrapper">
            {/* Parchment Letter Paper */}
            <div className="parchment-letter">
              {/* Decorative Corner Ornaments */}
              <div className="corner-ornament top-left">❧</div>
              <div className="corner-ornament top-right">❧</div>
              <div className="corner-ornament bottom-left">❧</div>
              <div className="corner-ornament bottom-right">❧</div>

              {/* Letter Top Header */}
              <div className="letter-header">
                <div className="letter-heart-crown">
                  <span>🌸</span>
                  <span className="crown-heart">✨</span>
                  <span>🌸</span>
                </div>
                <h2 className="letter-salutation">Dear Musharaf,</h2>
                <div className="letter-date">
                  <span>With Warmth & Sincere Respect</span>
                </div>
                <div className="letter-gold-divider"></div>
              </div>

              {/* Letter Body - Elegant, Gentle, Respectful Words */}
              <div className="letter-body">
                <p className="letter-paragraph highlight-lead">
                  I wanted to take a quiet moment to share these thoughts with you. There are rare people
                  in this world whose quiet grace, gentle kindness, and presence effortlessly bring a sense of
                  calm and light to everyone around them — and you are truly one of them.
                </p>

                <p className="letter-paragraph">
                  Whenever I see your genuine smile or notice the effortless poise you carry, it brings
                  a peaceful brightness to the day. Your thoughtful spirit, your gentle manner, and the
                  sincerity in your eyes are qualities that inspire the deepest appreciation and utmost respect.
                </p>

                <div className="letter-quote-box">
                  <span className="quote-heart">❝</span>
                  <p className="quote-text">
                    "Some souls illuminate the world not by demanding attention, but simply through their quiet kindness, grace, and inner light."
                  </p>
                  <span className="quote-heart right">❞</span>
                </div>

                <p className="letter-paragraph">
                  I hold no expectations, nor do I wish to place any burden upon your heart. My only
                  wish in writing this is simply to honor the wonderful person that you are. Seeing you
                  happy, peaceful, and flourishing in life is a genuine joy.
                </p>

                <p className="letter-paragraph">
                  May your path always be surrounded by clarity, warmth, and peace. Keep sharing your gentle
                  smile with the world, because your presence is a blessing that touches more lives than you
                  may ever know.
                </p>

                <p className="letter-paragraph signature-closing">
                  Wishing you endless peace, joy, and happiness in everything you do, Musharaf. 🌸
                </p>
              </div>

              {/* Signature section */}
              <div className="letter-footer">
                <div className="stamp-seal-circle">
                  <span>🕊️</span>
                  <small>SINCERE REGARDS</small>
                </div>
                <div className="signature-area">
                  <p className="sig-words">With warm thoughts and genuine respect,</p>
                  <p className="sig-name">From Someone Who Deeply Loves You ✍️🌸</p>
                </div>
              </div>

              {/* Interactive Action Bar */}
              <div className="letter-action-bar">
                <button
                  className={`action-btn gallery-btn ${showGallery ? 'active' : ''}`}
                  onClick={() => setShowGallery(!showGallery)}
                >
                  <span className="btn-emoji">📸</span>
                  <span>{showGallery ? "Hide Moments" : "Moments of Grace & Elegance"}</span>
                </button>

                <button
                  className="action-btn close-letter-btn"
                  onClick={handleClose}
                >
                  <span className="btn-emoji">✉️</span>
                  <span>Close Letter</span>
                </button>
              </div>
            </div>

            {/* Optional Photo Gallery view */}
            {showGallery && (
              <div className="gallery-slide-container">
                <PhotoGallery />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;

