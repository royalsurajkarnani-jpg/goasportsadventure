"use client";
import React from 'react';
import { MapPin, Tag, PhoneCall } from 'lucide-react'; // Install lucide-react

const features = [
  {
    title: "Local Expertise",
    description: "From secret spots in Montmartre to skip-the-line Eiffel Tower access — we curate every journey with insider knowledge.",
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Transparent Pricing",
    description: "From secret spots in Montmartre to skip-the-line Eiffel Tower access — we curate every journey with insider knowledge.",
    icon: <Tag className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "24/7 Support",
    description: "From secret spots in Montmartre to skip-the-line Eiffel Tower access — we curate every journey with insider knowledge.",
    icon: <PhoneCall className="w-8 h-8 text-blue-500" />,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-[#f8faff] relative overflow-hidden">
      {/* Background Map Overlay (Optional) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/map-pattern.png')] bg-center bg-cover"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Why Choose Only Us?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-roboto">
            Because we don't just plan your trip — we craft unforgettable experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center border border-gray-50"
            >
              <div className="mb-6 p-4 rounded-full bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-roboto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-8 py-3 bg-white rounded-full border border-gray-100 text-gray-800 font-bold text-sm shadow-sm">
            Personalized Itineraries
          </span>
          <span className="px-8 py-3 bg-white rounded-full border border-gray-100 text-gray-800 font-bold text-sm shadow-sm">
            Trusted Guides & Partners
          </span>
          <span className="px-8 py-3 bg-white rounded-full border border-gray-100 text-gray-800 font-bold text-sm shadow-sm">
            Curated Experiences
          </span>
        </div>
      </div>
    </section>
  );
}