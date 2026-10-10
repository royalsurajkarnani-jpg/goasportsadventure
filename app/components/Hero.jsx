'use client'
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Replace with your video URL */}
          <source src="/travel-bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dark/Blue Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-blue-900/20 to-black/40" />
      </div>

      {/* Content */}
   <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-4 items-center lg:items-start text-center lg:text-left px-6 lg:px-20">
        <h1 className="text-[38px] md:text-[50px] font-poppins font-extrabold text-white ">
        Experience Goa’s Most Exciting Water Adventures
        </h1>
   <p className="text-[18px] text-white/90 font-roboto font-semibold max-w-3xl lg:mx-0">
         Goa’s No.1 destination for Premium Grand Island Scuba Diving & Water Sports Experiences
        </p>
        
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-[300px] mx-auto lg:mx-0">
          <button  onClick={() => {
    document
      .getElementById("popular-packages")
      ?.scrollIntoView({ behavior: "smooth" });
  }} className="bg-[#2085b5] text-white px-8 py-4 rounded-full font-bold text-lg cursor-pointer transition-all shadow-lg hover:shadow-blue-500/30">
      View Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;