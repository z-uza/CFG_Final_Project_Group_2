import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

// Import images from assets folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../../assets/main carousel images', false, /\.(png|jpe?g|svg)$/));

// Need to re-size images to ensure consistency in carousel sizing

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);


  return (
    <div id="carousel" className="custom-carousel">
      <div className="carousel-inner">
        <button onClick={goToPrevious} className="carousel-button left">
          &#10094;
        </button>
        <div className="carousel-item">
          <img src={images[currentIndex]} alt="carousel" />
        </div>
        <button onClick={goToNext} className="carousel-button right">
          &#10095;
        </button>
      </div>
    </div>


  );
};

export default Carousel;
