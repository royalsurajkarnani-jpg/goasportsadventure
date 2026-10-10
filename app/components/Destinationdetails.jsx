"use client";
import React from 'react';

 export default function DestinationHero({ 
  name, 
  capital, 
  currency, 
  language, 
  description,
  linkText = "Best Time to Visit",
  linkUrl = "#"
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      {/* Dynamic Title with Blue Dot */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="w-3 h-3 bg-[#3b82f6] rounded-full mt-2 flex-shrink-0"></span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          {name}
        </h1>
      </div>

      {/* Reusable Info Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <Badge label="Capital" value={capital} />
        <Badge label="Currency" value={currency} />
        <Badge label="Language" value={language} />
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-gray-600 text-lg leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Action Link */}
      <div className="flex justify-center">
        <a 
          href={linkUrl} 
          className="text-[#3b82f6] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all underline-offset-4 hover:underline"
        >
          {linkText} <span className="text-xl">↗</span>
        </a>
      </div>
    </div>
  );
}

// Sub-component for the badges to keep the main code clean
function Badge({ label, value }) {
  return (
    <div className="px-6 py-2 border border-gray-200 rounded-full bg-white text-gray-600 font-medium text-sm shadow-sm">
      {label} - <span className="text-gray-900">{value}</span>
    </div>
  );
}