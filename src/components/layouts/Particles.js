import React, { useState } from 'react';

const imageUrls = [
  'https://i.imgur.com/FRQCRvC.png',
  'https://i.imgur.com/aI01Yo4.png',
  'https://i.imgur.com/fFFhbzn.png',
  'https://i.imgur.com/dopMHAn.png',
  'https://i.imgur.com/xYd8QuO.png',
  'https://i.imgur.com/VG8ZlrH.png',
  'https://i.imgur.com/jKA4Jiz.png',
  'https://i.imgur.com/IHO2QO2.png',
  'https://i.imgur.com/DBHONQC.png',
  'https://i.imgur.com/9NWnVvH.png',
  'https://i.imgur.com/JeZ1rj8.png',
  'https://i.imgur.com/FukkUQj.png',
];

const ParticlesBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="particle">
      <div className="image-container" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <img
          src={imageUrls[currentImageIndex]}
          alt={`background-${currentImageIndex}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="arrow-buttons">
        <button onClick={handlePrevImage}>{'<'}</button>
        <button onClick={handleNextImage}>{'>'}</button>
      </div>
    </div>
  );
};

export default ParticlesBackground;
