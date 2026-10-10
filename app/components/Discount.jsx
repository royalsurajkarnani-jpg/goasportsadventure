"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const offerBanners = [
  { id: 1, src: "/discount1.png", alt: "Himachal Pradesh Offer",slug:"/Grand-Island" },
  { id: 2, src: "/discount2.png", alt: "Maldives Offer",slug:"/Adventure-Water-Sports" },
  { id: 3, src: "/discount3.png", alt: "Bali Offer",slug:"/Dudhsagar" },
  { id: 4, src: "/discount4.png", alt: "Maldives Offer",slug:"/Dinner-Cruise-Party" },
];

export default function DiscountSection() {
  return (
    <section className="py-16 px-2 max-w-7xl mx-auto">
      {/* Header Area */}
      <div className="text-center mb-10">
        <h2 className="font-poppins text-[28px] md:text-[40px] font-semibold text-[rgb(17,15,15)] mb-3">
          Discounts & Offers
        </h2>
        <p className="font-roboto text-[rgb(82,82,82)] max-w-lg mx-auto text-[18px] font-normal">
          A curated list of the most popular travel packages based on different destinations.
        </p>
      </div>

      {/* Image-only Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
        }}
        breakpoints={{
          // Mobile: 1 image
          640: { slidesPerView: 1 },
          // Tablet: 2 images
          768: { slidesPerView: 2 },
          // Laptop/Desktop: 3 images
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {offerBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
           <Link href={banner.slug}>
            <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-md transition-all duration-300 hover:shadow-xl aspect-video">
              {/* Next.js Image Component */}
              <Image 
                src={banner.src} 
                alt={banner.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={banner.id === 1} // Prioritize the first image
              />
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global CSS for the Swiper Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important; 
          width: 30px !important;
          border-radius: 12px !important;
        }
        .swiper-horizontal > .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}