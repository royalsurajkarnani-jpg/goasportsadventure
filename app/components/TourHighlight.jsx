"use client";
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function TourHighlights({ 
  highlights, 
  sectionTitle = "Tour Highlights" 
}) {
  
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1 
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins px-2">
        {sectionTitle}
      </h2>

      {/* Carousel Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4">
          {highlights.map((item) => (
            <div 
              key={item.id} 
              className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_20%] pl-4"
            >
              <div className="group">
                {/* Image Wrapper with specific rounded corners from screenshot */}
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-4 shadow-sm">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Centered Title */}
                <h3 className="text-center font-bold text-gray-800 font-poppins text-lg group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}