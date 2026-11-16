import React, { useState } from 'react';
import eyesImg from '../assets/img1.jpg';
import hairImg from '../assets/img2.jpg';
import lipsImg from '../assets/img3.jpg';
import neckImg from '../assets/img4.jpg';
import loveVideo from '../video/mmm.mp4';

const photoItems = [
  {
    id: 1,
    title: "Mehribon nigoh ✨",
    subtitle: "Chuqurlik, osoyishtalik va sokin donolik",
    description: "Nigohingizda noyob tinchlik va o‘ylanganlik bor. U sokin, vazmin ruhni aks ettirib, atrofingizdagilarga xotirjamlik va tinchlik baxsh etadi.",
    img: eyesImg,
    badge: "Osoyishta xotirjamlik",
  },
  {
    id: 2,
    title: "Tabiiy nafislik 🌸",
    subtitle: "Zo‘rma-zo‘raki vazminlik va mayin jozibasi",
    description: "Bahorning mayin shabadasidek, siz beg‘ubor, sokin va o‘ziga xos abadiy nafislikka egasiz.",
    img: hairImg,
    badge: "Abadiy vazminlik",
  },
  {
    id: 3,
    title: "Yorqin tabassum 🕊️",
    subtitle: "Kunni yoritadigan mayin nur",
    description: "Tabassumingiz iliq, samimiy va tabiiy taskin beradi. U chin samimiyat bilan muhitni ko‘tarish noyob in’omiga ega.",
    img: lipsImg,
    badge: "Iliqlik va nur",
  },
  {
    id: 4,
    title: "Sokin viqor 🌷",
    subtitle: "Mehribonlikka asoslangan haqiqiy nafislik",
    description: "Tashqi go‘zallikdan tashqarida mehribon va olijanob yurak bor. Aynan shu ichki ezgulik va viqorli ruh sizni haqiqatan ham noyob qiladi.",
    img: neckImg,
    badge: "Viqorli ruh",
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="photo-gallery-section">
      <div className="gallery-header">
        <div className="heart-divider">
          <span>🌸</span>
          <span>✨</span>
          <span>🕊️</span>
        </div>
        <h3 className="gallery-title">Nafislik va go‘zallik lahzalari, Soliha</h3>
        <p className="gallery-subtitle">
          Atrofingizga olib kirayotgan mehribonlik, go‘zallik va sokin nurga xotirjam ehtirom
        </p>
      </div>

      <div className="gallery-grid">
        {photoItems.map((item) => (
          <div
            key={item.id}
            className="polaroid-card"
            onClick={() => setSelectedPhoto(item)}
          >
            <div className="polaroid-tape"></div>
            <div className="polaroid-img-wrapper">
              <img src={item.img} alt={item.title} className="polaroid-img" loading="lazy" />
              <span className="polaroid-badge">{item.badge}</span>
            </div>
            <div className="polaroid-caption">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
            <div className="card-shine"></div>
          </div>
        ))}
      </div>

      {/* Video section toggle button */}
      <div className="video-toggle-container">
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="romantic-video-btn"
        >
          {showVideo ? '🎥 Videoni yashirish' : '🎬 Mayin lahzani ko‘rish'}
        </button>

        {showVideo && (
          <div className="video-wrapper">
            <video
              ref={(el) => {
                if (el) el.muted = true;
              }}
              src={loveVideo}
              controls
              autoPlay
              playsInline
              muted
              preload="metadata"
              className="romantic-video"
            />
            <p className="video-caption">✨ Tinchlik va aziz lahzalar... 🌸</p>
          </div>
        )}
      </div>

      {/* Lightbox modal for photos */}
      {selectedPhoto && (
        <div className="modal-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Yopish"
            >
              ✕
            </button>
            <div className="modal-image-container">
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="modal-full-img"
              />
            </div>
            <div className="modal-text">
              <h3>{selectedPhoto.title}</h3>
              <p className="modal-subtitle">{selectedPhoto.subtitle}</p>
              <p className="modal-desc">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
