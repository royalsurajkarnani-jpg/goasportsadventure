"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function TourPackage({ data }) {
  const [expanded, setExpanded] = useState(false);

  const sectionsToShow = expanded ? data.sections : data.sections.slice(0, 2);

  return (
<div className="max-w-6xl mx-4 md:mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-300 mt-10">

      {/* Title */}
      <h2 className="text-3xl font-poppins text-center">{data.title}</h2>

      {/* Price */}
      <div className="text-center mt-4">
        <span className="text-5xl font-bold text-[#2085b5]">
          ₹{data.price}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center mt-4">
        {data.description}
      </p>

      {/* Sections */}
     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {sectionsToShow.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold text-lg mb-3">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="flex gap-2 text-gray-700">
                  <Check size={16} className="text-[#2085b5] mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center mt-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#2085b5] font-semibold hover:underline cursor-pointer"
        >
          {expanded ? "View Less" : "View Full Package Details"}
        </button>
      </div>
    </div>
  );
}