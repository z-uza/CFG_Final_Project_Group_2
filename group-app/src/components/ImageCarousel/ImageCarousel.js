import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

import CH_Img2 from '../../assets/main carousel images/CH_Img2.jpg' 
import CH_Img3 from '../../assets/main carousel images/CH_Img3.jpg'
import CH_Img4 from '../../assets/main carousel images/CH_Img4.webp'
import LEGO_Img1 from '../../assets/main carousel images/LEGO_Img1.jpg'
import LEGO_Img4 from '../../assets/main carousel images/LEGO_Img4.jpg'
import THORPE_Img2 from '../../assets/main carousel images/THORPE_Img2.jpg'
import THORPE_Img3 from '../../assets/main carousel images/THORPE_Img3.jpg'

export const images = [CH_Img2,CH_Img3,CH_Img4,LEGO_Img1,LEGO_Img4,THORPE_Img2,THORPE_Img3]

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
        <div className="carousel-item overlay"> 
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
