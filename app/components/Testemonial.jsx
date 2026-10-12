"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    username: "rohan.mehta27",
    text: "Great service by Imperium Voyages (goasportsadventure.in). We booked the Grand Island Gold package and everything was perfectly organized. Scuba diving and water sports were amazing, and the team handled the entire trip smoothly from pickup to drop."
  },
  {
    id: 2,
    name: "Neha Kapoor",
    username: "nehakapoor_12",
    text: "Scuba diving at Grand Island was such a great experience. The instructors were very supportive and made the whole dive comfortable even for beginners. Really enjoyed the day and the overall arrangements were excellent."
  },
  {
    id: 3,
    name: "Kunal Verma",
    username: "kunalverma_19",
    text: "The Grand Island Sea Trip was full of adventure. Jet ski, banana ride, and the speed boat ride were super fun. Everything was well managed and the staff ensured safety while keeping the experience exciting."
  },
  {
    id: 4,
    name: "Aditya Nair",
    username: "aditya.nair08",
    text: "Great service by Imperium Voyages (goasportsadventure.in) during our Dudhsagar Waterfall tour. The jeep safari ride through the forest was thrilling and the waterfall view was absolutely stunning. The whole trip was well coordinated."
  },
  {
    id: 5,
    name: "Sneha Malhotra",
    username: "snehamalhotra_21",
    text: "We booked the Luxury Cruise Dinner Party and had a wonderful evening. The Mandovi River cruise, live DJ, dance performances, and buffet dinner created an amazing vibe. Watching the Goa skyline at night was beautiful."
  },
  {
    id: 6,
    name: "Arjun Patel",
    username: "arjun.patel07",
    text: "Water sports at Grand Island were fantastic. The dolphin spotting and scuba diving were the highlights of our day. The team ensured everything was safe and well organized."
  },
  {
    id: 7,
    name: "Kavya Sharma",
    username: "kavya.sharma14",
    text: "Great service by Imperium Voyages (goasportsadventure.in). Our Grand Island trip was very well arranged with hotel pickup, water sports, and lunch included. Everything went smoothly and we had a great time."
  },
  {
    id: 8,
    name: "Rahul Bansal",
    username: "rahul.bansal18",
    text: "The Dudhsagar Waterfall trip was a great experience. The jeep safari ride and the spice plantation visit made the day even more enjoyable. Everything was well planned and the guides were helpful."
  }
];

export default function Testimonials() {
  return (
    <section className="py-14 px-4 max-w-7xl mx-auto bg-white">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-poppins text-3xl md:text-[40px] font-bold text-[rgb(17,15,15)] mb-4">
          Hear It from Travelers
        </h2>

        <p className="font-roboto text-[rgb(82,82,82)] max-w-xl mx-auto text-lg leading-relaxed">
          We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, el: ".testi-pagination" }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-20"
      >
        {testimonials.map((item) => (
<SwiperSlide key={item.id}>
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 h-full flex flex-col">

    {/* Stars */}
    <div className="flex gap-1 text-yellow-500 text-lg mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>

    {/* Name */}
    <h4 className="text-xl font-semibold text-gray-900">
      {item.name}
    </h4>

    {/* Username */}
    <p className="text-gray-500 mb-4">
      @{item.name.replace(/\s/g, "")}
    </p>

    {/* Review */}
    <p className="text-gray-600 leading-relaxed">
      {item.text}
    </p>

  </div>
</SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="testi-pagination flex justify-center gap-2"></div>

      {/* Pagination styling */}
      <style jsx global>{`
        .testi-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }

        .testi-pagination .swiper-pagination-bullet-active {
          background: rgb(59, 130, 246) !important;
          width: 28px !important;
          border-radius: 999px !important;
        }
      `}</style>
    </section>
  );
}