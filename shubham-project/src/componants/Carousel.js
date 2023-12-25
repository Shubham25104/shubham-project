// Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './images/india gate.jpg';
import image2 from './images/taj mahal.jpg';
import image3 from './images/world cup.jpg';
import image4 from './images/modi ji.jpg';
import image5 from './images/india on the moon.jpg';

const images = [image1, image2, image3, image4, image5];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Transition between slides every 5 seconds
    centerMode: true,
    centerPadding: '0',
    // fade: true, // Enable fade effect
  };
  
  
  function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, settings.autoplaySpeed);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <Slider {...settings} initialSlide={currentIndex} className="carousel-container">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Place ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    );
  }
  
  export default Carousel;