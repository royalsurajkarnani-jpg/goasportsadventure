'use client';
import React, { useEffect, useState } from 'react';
import { PlayCircle, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';



const ModuleCard = ({ module, index, stickyOffset }) => (
  <div 
    className="sticky bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-transform duration-500"
    style={{ 
      // The magic happens here: each card stops 48px lower than the previous one
      top: `${stickyOffset}px`, 
      marginTop: index === 0 ? '0' : '40px',
      // Ensures the current card always sits visually above the previous one
      zIndex: index + 10 
    }}
  >
    <div className="flex flex-col h-full">
      {/* 1. Module Tag - Stays visible because of the offset */}
      <span className="text-xs font-bold text-[#2085b5] uppercase tracking-widest mb-2">
        {`0${index + 1} ${module.tag}`}
      </span>

      {/* 2. Title */}
      <h3 className="text-3xl font-bold text-slate-900 mb-4">
        {module.title}
      </h3>

      {/* 3. Badges */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Array.isArray(module.stats) && module.stats.map((stat, i) => (
          <div 
            key={i} 
            className="bg-[#dbeafe] text-[#1e40af] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <span>{stat.icon}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* 4. Points */}
      <ul className="space-y-5">
        {module.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-4 text-slate-600 text-lg">
            <CheckCircle2 className="text-black shrink-0 mt-1" size={20} />
            <span className="leading-snug">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CurriculumSection = ({ 
  title = "What will you learn?", 
  highlightText = "you learn?",
  items = [], 
  src = "/dudhsagar.jpg" // Ensure this path is correct in your public folder
}) => {
  // CONFIGURATION: 
  // baseTop: How far from the top the first card starts (px)
  // spread: The height of the "tag" area you want to keep visible (px)

  const [spread, setSpread] = useState(48);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setSpread(72); // desktop
    } else {
      setSpread(48); // mobile
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  const baseTop = 100;

  return (
    <div className="max-w-7xl mx-auto px-6 py-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE: Fixed Header & Visual */}
        <div className="lg:sticky lg:top-24 self-start">
          <h2 className="text-[42px] font-extrabold mb-8 leading-tight">
            {title.split(highlightText)[0]}
            <span className="text-[#2085b5] italic">{highlightText}</span>
          </h2>
          
<div className="relative w-full max-w-sm lg:max-w-md aspect-square rounded-xl lg:rounded-2xl border-l-2 border-b-2 border-slate-100 p-8 lg:p-10 overflow-hidden">
  <Image
    src={src}
    alt="Curriculum Visual"
    fill
    className="object-contain"
  />
</div>
        </div>

        {/* RIGHT SIDE: Stacking Content */}
        <div className="space-y-12 pb-12"> 
          {/* Added extra bottom padding (pb-64) so the last card has room to scroll */}
          {items.map((item, index) => (
            <ModuleCard 
              key={item.id || index} 
              module={item} 
              index={index} 
              // Calculation: First card @ 100px, Second @ 148px, Third @ 196px...
              stickyOffset={baseTop + (index * spread)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;