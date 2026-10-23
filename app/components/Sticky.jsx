'use client'

import React from 'react'
import Image from 'next/image'

const Sticky = ({
  title,
  oldPrice,
  newPrice,
  image,
  whatsappLink,
  accentColor = "emerald", // default theme
  bannerText 
}) => {
  return (
    <div className="fixed bottom-0 md:bottom-6 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto md:min-w-[700px] z-50 px-0 md:px-4">
      
      <div className="bg-white md:rounded-full shadow-2xl overflow-hidden border-t md:border border-slate-800">
        
        <div className="flex items-center justify-between p-3 md:p-2">
          
          {/* Left Side */}
          <div className="flex items-center gap-4 pl-2">
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 hidden sm:block">
              <Image
                src={image}
                alt={title}
                fill
                className={`rounded-full object-cover border-2 border-${accentColor}-600`}
              />
            </div>
            
            <div className="flex flex-col">
              <span className="hidden md:block text-[10px] text-black font-bold uppercase tracking-widest">
                {title}
              </span>
              <div className="flex gap-2 items-center">
                <span className="text-black line-through text-xs font-bold">
                  {oldPrice}
                </span>
                <span className="text-black text-xl md:text-xl font-black tracking-tight">
                  {newPrice}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#form"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#2085b5] hover:bg-${accentColor}-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg border-2 border-${accentColor}-700`}
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className={`bg-[#2085b5] text-white text-[10px] py-1 font-bold text-center tracking-wider uppercase`}>
          {bannerText}
        </div>
      </div>
    </div>
  )
}

export default Sticky