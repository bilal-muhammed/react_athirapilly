import React, { useState, useEffect } from 'react';
import image1 from '../assets/athirapillyimages/carousal.jpg';
import image2 from '../assets/athirapillyimages/2.jpg';
import image3 from '../assets/athirapillyimages/3.jpg';
import image4 from '../assets/athirapillyimages/4.jpg';

const CAROUSEL_DATA = [
  { 
    url: image1,
    title: "Athirappilly Waterfalls",
    subtitle: "The Niagara of India"
  },
  { 
    url: image2,
    title: "Lush Green Forests",
    subtitle: "Explore Nature's Paradise"
  },
  { 
    url: image3,
    title: "Wildlife Safari",
    subtitle: "Discover Exotic Species"
  },
  { 
    url: image4,
    title: "Luxury Resorts",
    subtitle: "Unwind in Nature's Lap"
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === CAROUSEL_DATA.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((currentIndex) => 
      currentIndex === CAROUSEL_DATA.length - 1 ? 0 : currentIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((currentIndex) => 
      currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[80vh] max-h-[800px] overflow-hidden">
      {/* Carousel container */}
      <div className="relative w-full h-full">
        {CAROUSEL_DATA.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={item.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end pb-16 md:pb-24 px-8 md:px-16">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-6">
                  {item.subtitle}
                </p>
                <button className="px-8 py-3 bg-[#44b50c] hover:bg-[#3a9a0a] text-white font-medium rounded-full transition-all shadow-lg hover:shadow-md">
                  Explore Packages
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {CAROUSEL_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#44b50c] w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  );
};

export default Carousel;