'use client';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const HorizontalScrollTarget = ({ targets, header }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 px-6 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b49] max-w-2xl">
            {header}
          </h2>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} className="text-slate-600" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-[#1a2b49] text-white hover:opacity-90 transition-opacity shadow-lg"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
         className="flex flex-col md:flex-row items-stretch md:overflow-x-auto pb-10 gap-8 md:snap-x md:snap-mandatory scrollbar-hide"
        >
          {targets.map((item, index) => (
            <div 
              key={index}
            className="w-full md:min-w-[60%] lg:min-w-[45%] md:snap-center bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-blue-900/5 flex flex-col h-full"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-[#3182ce] shrink-0">
                  {item.icon || <Users size={48} strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b49] leading-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* "Perfect for" Section */}
              <div className="mt-auto">
                <h4 className="font-bold text-[#1a2b49] mb-4 text-xl">Perfect for:</h4>
                <ul className="space-y-4">
                  {(item.highlights || []).map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 text-lg">
                      {/* The circular blue bullet from the image */}
                      <div className="w-3 h-3 rounded-full bg-[#5da9e9] shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HorizontalScrollTarget;