"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const categories = ["Africa", "Asia", "Europe", "Middle East", "North America", "Oceneia"];

const destinations = [
  { id: 1, name: "Grand Island Adventure", category: "Africa", img: "/grand/hero.jpeg",subtext:"Scuba Diving & Water Sports Combo" },
  { id: 2, name: "Dudhsagar Waterfall Safari", category: "Africa", img: "/dudhsagar.jpg",subtext:"Jeep Safari & Jungle Experience" },
  { id: 3, name: "Luxury Dinner Cruise Party", category: "Africa", img: "/dinner/luxury-special.png",subtext:"Sunset Cruise, Buffet & Live Shows" },
  { id: 4, name: "Scuba Diving at Andaman", category: "Africa", img: "/grand/scuba.jpg",subtext:"Perfect for Beginners & Non-Swimmers" },
  { id: 5, name: "Rock Island Scuba Combo", category: "Asia", img: "/grand/heavy.jpg",subtext:"Gold Package with Watersports" },
  { id: 6, name: "Adventure Water Sports", category: "Asia", img: "/grand/sports.webp" ,subtext:"Parasailing, Jet Ski & More"},
];

export default function FeaturedDestinations() {
const [activeTab, setActiveTab] = useState("All");

// 2. Update Filter Logic
const filteredDestinations = activeTab === "All" 
  ? destinations 
  : destinations.filter(d => d.category === activeTab);

  return (
    <section className="py-6 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        {/* Poppins Heading (40px) */}
        <h2 className="font-poppins text-3xl md:text-[40px] font-bold text-[rgb(17,15,15)] mb-6">
          Featured Destinations
        </h2>

        {/* Roboto Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 md:gap-4 font-roboto mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                activeTab === cat
                  ? "bg-[rgb(59,130,246)] border-[rgb(59,130,246)] text-white"
                  : "bg-white border-gray-200 text-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        // Force 1 card on mobile to take full width
        slidesPerView={1} 
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          el: '.dest-pagination' 
        }}
        breakpoints={{
          // Tablet: 2 cards
          640: { slidesPerView: 2 },
          // Laptop: 4 cards
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="dest-swiper"
      >
        {filteredDestinations.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group cursor-pointer ">
              {/* Aspect Ratio 700/550 from your source image */}
              <div className="relative aspect-[700/550] overflow-hidden rounded-[2rem] mb-5 shadow-sm bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex items-center justify-center gap-2 font-poppins font-semibold text-[rgb(17,15,15)] text-[20px]">
                <span className="text-blue-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                {item.name}
              </div>
              <p className="mt-1 text-center text-gray-500 font-roboto text-sm md:text-base">
         {item.subtext}
      </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External Pagination to prevent overlap */}
      <div className="dest-pagination flex justify-center gap-2 mt-12 h-6"></div>

      <style jsx global>{`
        .dest-pagination .swiper-pagination-bullet {
          background: #e5e7eb;
          opacity: 1;
          margin: 0 6px !important;
          width: 10px;
          height: 10px;
        }
        .dest-pagination .swiper-pagination-bullet-active {
          background: rgb(59, 130, 246) !important; 
          width: 32px !important;
          border-radius: 99px !important;
        }
      `}</style>
    </section>
  );
}