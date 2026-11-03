import React, { useState } from 'react';
import eyesImg from '../assets/eyes.jpg';
import hairImg from '../assets/hair.jpg';
import lipsImg from '../assets/lips.jpg';
import neckImg from '../assets/neck.jpg';
import loveVideo from '../video/love-video.mp4';

const photoItems = [
  {
    id: 1,
    title: "A Gentle Gaze ✨",
    subtitle: "Depth, serenity, and quiet wisdom",
    description: "Your gaze carries a rare tranquility and thoughtfulness. It reflects a calm, dignified spirit that brings peace and comfort to those around you.",
    img: eyesImg,
    badge: "Serene Calm",
  },
  {
    id: 2,
    title: "Natural Elegance 🌸",
    subtitle: "Effortless poise and gentle charm",
    description: "Like a gentle spring breeze, you carry an effortless and timeless elegance that is quiet, graceful, and completely your own.",
    img: hairImg,
    badge: "Timeless Poise",
  },
  {
    id: 3,
    title: "A Radiant Smile 🕊️",
    subtitle: "A gentle light that brightens the day",
    description: "Your smile is warm, authentic, and naturally comforting. It has a rare gift of uplifting the atmosphere with genuine sincerity.",
    img: lipsImg,
    badge: "Warmth & Light",
  },
  {
    id: 4,
    title: "Quiet Dignity 🌷",
    subtitle: "True grace rooted in kindness",
    description: "Beyond outward elegance lies a kind and noble heart. That inner goodness and dignified spirit are what make you truly special.",
    img: neckImg,
    badge: "Dignified Spirit",
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
        <h3 className="gallery-title">Moments of Grace & Elegance, Musharaf</h3>
        <p className="gallery-subtitle">
          A quiet tribute to the kindness, beauty, and serene light you bring into the world
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
          {showVideo ? '🎥 Hide Video' : '🎬 View A Gentle Moment'}
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
              className="romantic-video"
            />
            <p className="video-caption">✨ A quiet and cherished moment of peace... 🌸</p>
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
              aria-label="Close"
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
