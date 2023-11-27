import React, { useState, useEffect } from 'react';

const imageValueMap = {
  'http://i.imgur.com/qexylYA.png': 0,
  'http://i.imgur.com/cRvIYLJ.png': 1,
  'http://i.imgur.com/UusvZC8.png': 2,
  'http://i.imgur.com/URjIjZS.png': 3,
  'http://i.imgur.com/Fy7kANa.png': 4,
  'http://i.imgur.com/e2lvJ8q.png': 5,
  'http://i.imgur.com/JEslGSe.png': 6,
  'http://i.imgur.com/v2h0qzb.png': 7,
  'http://i.imgur.com/xyfqUsX.png': 8,
  'http://i.imgur.com/XbIlhvL.png': 9,
  'http://i.imgur.com/xDAIc6P.png': 10,
  'http://i.imgur.com/kaCxCBi.png': 11,
};

const imageUrls = Object.keys(imageValueMap);

const ParticlesBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Update background image based on current time
    const updateBackground = () => {
      const d = new Date();
      const hour = d.getHours();
      const cssClass = getPicture(hour);
      setCurrentImageIndex(cssClass);
    };

    // Set initial background image
    updateBackground();

    // Update background image every minute
    const interval = setInterval(updateBackground, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className={`particle bg-${currentImageIndex}`}>
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

// Function to determine the picture index based on the hour
function getPicture(hour) {
  if (hour >= 23 || hour <= 2) return imageValueMap[imageUrls[11]];
  else if (hour >= 22) return imageValueMap[imageUrls[10]];
  else if (hour >= 21) return imageValueMap[imageUrls[9]];
  else if (hour >= 19) return imageValueMap[imageUrls[8]];
  else if (hour >= 16) return imageValueMap[imageUrls[7]];
  else if (hour >= 15) return imageValueMap[imageUrls[6]];
  else if (hour >= 13) return imageValueMap[imageUrls[5]];
  else if (hour >= 12) return imageValueMap[imageUrls[4]];
  else if (hour >= 10) return imageValueMap[imageUrls[3]];
  else if (hour >= 7) return imageValueMap[imageUrls[2]];
  else if (hour >= 5) return imageValueMap[imageUrls[1]];
  else return imageValueMap[imageUrls[0]];
}

export default ParticlesBackground;
