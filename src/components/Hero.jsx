import React, { useEffect, useRef } from "react";
import bgimg from "../assets/atirapillyhomeimg.jpg";
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
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />
      {/* <video
        src={bgVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      /> */}

            <img
        src={bgimg}
        className="w-full h-full object-cover"
        alt="Athirappilly Waterfalls"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
        {/* <h1 className="text-white mb-2">Explore Athirappilly Waterfalls</h1> */}
        <h2 className="text-white mb-4 mt-10">
          Book Your Unforgettable Tour to Kerala’s "Niagara"
        </h2>

        <BookingTabs/>
      </div>
    </header>
  );
};

export default Hero;
