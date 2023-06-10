import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClickRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handleClickLeft}>Left</button>
      <img
        className="carousel"
        src={images[currentImageIndex]}
        alt="carousel"
      />
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
};

export default Carousel;
