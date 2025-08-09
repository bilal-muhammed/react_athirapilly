import React, { useEffect, useRef } from "react";
// import bgVideo from "../assets/athirapilly_mainimg.jpg";
import bgMusic from "../assets/waterfalls.mp3";
import BookingTabs from "./BookingTab";
import bgVideo from "../assets/waterfalls2.mp4";

const Hero = () => {
  const audioRef = useRef();
  useEffect(() => {
    const audio = audioRef.current;
  
    if (!audio) return;
  
    audio.volume = 0;         // Start at 0 volume
    audio.muted = true;
    audio.load();
  
    const fadeInAudio = () => {
      let targetVolume = 0.7;
      let step = 0.05;
      let interval = 200; // 200ms between volume steps
  
      const fadeInterval = setInterval(() => {
        if (audio.volume < targetVolume) {
          audio.volume = Math.min(audio.volume + step, targetVolume);
        } else {
          clearInterval(fadeInterval);
        }
      }, interval);
    };
  
    const enableAudio = () => {
      audio.muted = false;
  
      audio.play()
        .then(() => {
          console.log('✅ Audio started with fade-in!');
          fadeInAudio();
        })
        .catch((err) => {
          console.warn('❌ Still blocked:', err);
        });
  
      // Remove gesture listeners
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
      document.removeEventListener('mousedown', enableAudio);
      document.removeEventListener('keydown', enableAudio);
      document.removeEventListener('scroll', enableAudio);
    };
  
    // Add gesture listeners
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
    document.addEventListener('mousedown', enableAudio);
    document.addEventListener('keydown', enableAudio);
    document.addEventListener('scroll', enableAudio);
  
    // Cleanup
    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
      document.removeEventListener('mousedown', enableAudio);
      document.removeEventListener('keydown', enableAudio);
      document.removeEventListener('scroll', enableAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  
  return (
    <header className="w-screen h-screen relative">
      {/* <audio ref={audioRef} src={bgMusic} loop preload="auto" /> */}
      <video
        src={bgVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
        {/* <h1 className="text-white mb-2">Explore Athirappilly Waterfalls</h1> */}
        <h2 className="text-white mb-4 mt-10">
          Book Your Unforgettable Tour to Kerala’s "Niagara"
        </h2>
        {/* <form
          action=""
          className="flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto"
        >
          <input
            type="text"
            placeholder="Search Destinations"
            className="grow bg-transparent outline-none"
          />
          <button className="w-11 btn--form">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form> */}
        <BookingTabs/>
      </div>
    </header>
  );
};

export default Hero;
