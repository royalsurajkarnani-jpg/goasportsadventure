"use client";
import Link from 'next/link';
import React from 'react';

const services = [
  {
    id: 1,
    title: "Local Experts & Experienced Guides",
    description: "Our trained instructors and local guides ensure a safe and unforgettable adventure across Goa’s best locations.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    bgColor: "bg-[#2085b5]",
  },
  {
    id: 2,
    title: "Best Deals on Adventure Packages",
    description: "Enjoy premium experiences like Grand Island scuba diving, water sports, and cruise dinners at the best prices.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    bgColor: "bg-[#2085b5]",
  },
  {
    id: 3,
    title: "Safe & Hassle-Free Experience",
    description: "From hotel pickup to guided activities, everything is professionally organized for a smooth and safe adventure.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    ),
    bgColor: "bg-[#2085b5]",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-4 px-4 max-w-7xl mx-auto">
      <div className="bg-[rgb(248,250,252)] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        
        {/* Section Title (Poppins) */}
        <div className="text-center mb-6">
          <h2 className="font-poppins text-3xl md:text-[40px] font-semibold text-[rgb(17,15,15)] leading-tight">
    Why Choose Goa Sports Adventure 
          </h2>
          {/* Decorative Divider Line */}
          <div className="w-full h-1 bg-gray-200 mx-auto mt-4 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Icon Circle */}
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              {/* Feature Title (Poppins) */}
              <h3 className="font-poppins text-2xl font-semibold text-[rgb(17,15,15)] mb-3">
                {service.title}
              </h3>
              
              {/* Feature Description (Roboto) */}
              <p className="font-roboto font-medium text-[rgb(82,82,82)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button (Roboto) */}
        <div className="mt-16 text-center">
          <Link href='https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more about your packages.'>
          <button className="font-roboto bg-[#2085b5] cursor-pointer text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-blue-200 transition-all flex items-center gap-2 mx-auto">
           Explore Adventure Packages
            <span className="text-sm">Check Offer ↗</span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}