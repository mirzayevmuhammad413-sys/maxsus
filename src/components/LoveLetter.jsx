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
            <span className="sparkle-tag">✨ Soliha uchun mehribon xat ✨</span>
            <h1 className="envelope-main-title">Maxsus xat</h1>
            <p className="envelope-sub-text">
              Samimiy minnatdorchilik va sokin hurmat bilan bir necha so‘z...
            </p>
          </div>

          <div
            className="envelope-container"
            onClick={handleOpen}
            role="button"
            tabIndex={0}
            aria-label="Xatni ochish"
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
                <small>NOZIK</small>
              </div>

              {/* Front Label */}
              <div className="envelope-label">
                <p className="label-to">Kimga: <span>Soliha 🌸</span></p>
                <p className="label-from">Kimdan: <span>Sizni chindan sevadigan biri 🕊️</span></p>
              </div>
            </div>

            {/* Glowing button below envelope */}
            <button className="open-letter-btn">
              <span className="btn-icon">💌</span>
              <span>Xatni o‘qish</span>
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
                <h2 className="letter-salutation">Hurmatli Soliha,</h2>
                <div className="letter-date">
                  <span>Iliq salom va samimiy hurmat bilan</span>
                </div>
                <div className="letter-gold-divider"></div>
              </div>

              {/* Letter Body */}
              <div className="letter-body">
                <p className="letter-paragraph highlight-lead">
                  Bu sokin lahzada sizga o‘ylarimni ulashmoqchi edim. Dunyoda shunday noyob insonlar borki,
                  ularning sokin mehribonligi, nozik xulq-atvori va borliqlari atrofdagilarga osoyishtalik va
                  yorug‘lik bag‘ishlaydi — siz ham ulardan birisiz.
                </p>

                <p className="letter-paragraph">
                  Sizning chin tabassumingizni ko‘rganimda yoki tashqi ko‘rinishingizdagi zo‘rma-zo‘raki vazminlikni
                  sezganimda, kunimga tinch bir yorug‘lik ulashiladi. Sizning o‘ylanganligingiz, mayin muomalangiz va
                  ko‘zlaringizdagi samimiyat eng chuqur tahsin va eng oliy hurmatga loyiq fazilatlardir.
                </p>

                <div className="letter-quote-box">
                  <span className="quote-heart">❝</span>
                  <p className="quote-text">
                    "Ba’zi insonlar dunyoni e’tibor talab qilish bilan emas, balki sokin mehribonligi, nafisligi
                    va ichki nuri bilan yoritadi."
                  </p>
                  <span className="quote-heart right">❞</span>
                </div>

                <p className="letter-paragraph">
                  Men hech qanday umid bog‘lamayman va yuragingizga biror yuk qo‘ymoqchi emasman. Bu xatni yozishdan
                  maqsadim faqat siz kabi ajoyib insonni hurmat qilishdir. Sizni baxtli, tinch va gullab-yashnagan
                  holda ko‘rish men uchun chin quvonchdir.
                </p>

                <p className="letter-paragraph">
                  Yo‘lingiz doimo aniqlik, iliqlik va tinchlik bilan o‘ralgan bo‘lsin. Mayin tabassumingizni dunyo bilan
                  ulashishda davom eting, chunki sizning borligingiz ko‘plab hayotlarga shunday ne’mat bag‘ishlaydiki,
                  balki buni o‘zingiz ham hech qachon to‘liq bilmassiz.
                </p>

                <p className="letter-paragraph signature-closing">
                  Sizga tinchlik, quvonch va baxt tilayman, Soliha. 🌸
                </p>
              </div>

              {/* Signature section */}
              <div className="letter-footer">
                <div className="stamp-seal-circle">
                  <span>🕊️</span>
                  <small>SAMIMIY HURMAT</small>
                </div>
                <div className="signature-area">
                  <p className="sig-words">Iliq fikrlar va chin hurmat bilan,</p>
                  <p className="sig-name">Sizni chuqur sevadigan biridan ✍️🌸</p>
                </div>
              </div>

              {/* Interactive Action Bar */}
              <div className="letter-action-bar">
                <button
                  className={`action-btn gallery-btn ${showGallery ? 'active' : ''}`}
                  onClick={() => setShowGallery(!showGallery)}
                >
                  <span className="btn-emoji">📸</span>
                  <span>{showGallery ? "Lahzalarni yashirish" : "Nafislik va go‘zallik lahzalari"}</span>
                </button>

                <button
                  className="action-btn close-letter-btn"
                  onClick={handleClose}
                >
                  <span className="btn-emoji">✉️</span>
                  <span>Xatni yopish</span>
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
