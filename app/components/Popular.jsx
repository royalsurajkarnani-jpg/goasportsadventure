'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

const packages = [
  {
    id: "scuba-1",
    title: "SCUBA DIVING AT GRAND ISLAND",
    location: "Grand Island, Goa",
    slug: "/grand-island",
    duration: "Most Popular",
    price: "3,000",
    oldPrice: "5,000",
    tag: "Adventure Combo",
    img: "/package3.jpg",
    experienceInfo: "65+km Speed Boat trip, Dolphin sightseeing, and HD GoPro 10 Videoshoot.",
    inclusionInfo: "Parasailing with Sea Dip (Worth ₹2,500), Snorkeling, and Full Wet Suit."
  },
    {

    id: "scuba-2",

    title: "ONLY SCUBA AT GRAND ISLAND",
 slug: "/grand-island",
    location: "Grand Island",

    duration: "Premium Meal Trip",

    price: "1,800",

    oldPrice: "3,000",

    tag: "Island Sea Trip",

    img: "/package4.jpeg",

    experienceInfo: "Focused Scuba experience with PADI training and HD Live Videoshoot.",

    inclusionInfo: "Premium Lunch, Beers, Snorkeling, and Island Boat Trip."

  },
  {
    id: "dudhsagar-1",
    title: "DUDHSAGAR FALLS & SPICE PLANTATION",
    location: "Kulem, Goa",
     slug: "/dudhsagar",
    duration: "Full Day Trip",
    price: "2,700",
    oldPrice: "3,000",
    tag: "Nature & Wildlife",
    img: "/dudhsagar.jpg", 
    experienceInfo: "Off-road Jeep Safari through Bhagwan Mahavir Wildlife Sanctuary to the majestic 4-tier Dudhsagar waterfall.",
    inclusionInfo: "Jeep Safari, Forest Entry Fees, Life Jackets, Guided Spice Plantation Tour, and Authentic Goan Buffet Lunch."
  },
  {
    id: "cruise-1",
    title: "LUXURY DINNER CRUISE ADVENTURE",
    location: "Mandovi River, Panjim",
    duration: "3 Hours (Night)",
      slug: "/dinner-cruise-party",
    price: "2,200",
    oldPrice: "2,700",
    tag: "Couple Friendly",
    img: "/dinner/poster.png",
    experienceInfo: "Scenic night cruising with live DJ, Folk dances, and a panoramic view of the Panjim skyline.",
    inclusionInfo: "Welcome Drinks, Multi-cuisine Buffet Dinner, 2 Complementary Beers/Drinks, and Live Entertainment."
  },
  {
    id: "water-sports-1",
    title: "ADVENTURE WATER SPORTS",
    slug:"adventure-water-sports",
    location: "Calangute / Baga",
    duration: "Half Day",
    price: "2,200",
    oldPrice: "2,500",
    tag: "Top Seller",
    img: "/adventure/adven-bg.png",
    experienceInfo: "The ultimate adrenaline rush featuring high-speed Parasailing and Jet Skiing in the Arabian Sea.",
    inclusionInfo: "Parasailing, Jet Ski, Banana Ride, Bumper Ride, Speed Boat Ride, and Pick up/Drop from main beach."
  },
    {

    id: "goa-1",

    title: "SCUBA DIVING AT ANDAMAN ISLAND",
slug:"/",
    location: "North Bay Island, Andaman",

    duration: "Full Day",

    price: "5,500",

    oldPrice: "6,000",

    tag: "Non-Swimmer Friendly",

    img: "/package1.png", // Ensure this exists in /public

    experienceInfo: "Scuba diving Training by PADI dive master with GoPro 10 underwater videos included.",

    inclusionInfo: "Boat Ride, Certified Trainer, Free Pick up/drop, and Sightseeing."

  },

  {

    id: "goa-2",

    title: "SCUBA DIVING AT ROCK ISLAND",
slug:"/",
    location: "Rock Island",

    duration: "Gold Package",

    price: "2,700",

    oldPrice: "3,500",

    tag: "Full Combo",

    img: "/package2.png",

    experienceInfo: "Includes Parasailing, Jet Ski, Banana Ride, and Bumper Ride with underwater Scuba.",

    inclusionInfo: "Breakfast, Lunch (Veg/Non-Veg), Beers, Mineral Water, and Equipment."

  },
];

export default function PopularPackages() {
  const WHATSAPP_NUMBER = "917678464517";
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto" id="popular-packages">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-poppins text-3xl md:text-[40px] font-bold text-[rgb(17,15,15)] mb-4">
          Popular Travel Packages
        </h2>
        <p className="font-roboto text-[rgb(82,82,82)] max-w-lg mx-auto text-lg leading-relaxed">
          Experience the best of Goa from majestic waterfalls to thrilling underwater adventures.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) =>{ 
          const customText = `Hello, it’s great to know about goasportsadventure.in. Could you please guide me through the next steps to book the *${pkg.title.toLowerCase()}*?`;
          const encodedText = encodeURIComponent(customText);
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
         return (
          
          <div 
            key={pkg.id} 
            className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image Container */}
            <div className="relative aspect-[351/240] overflow-hidden">
              <Image
                src={pkg.img}
                alt={pkg.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-[rgb(17,15,15)] px-4 py-1 rounded-full text-xs font-bold font-roboto">
                {pkg.tag}
              </div>
            </div>

            {/* Package Details */}
            <div className="p-8">
              <h3 className="font-poppins text-xl font-semibold text-[rgb(17,15,15)] mb-3 group-hover:text-[#2085b5] transition-colors line-clamp-1">
                {pkg.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-[rgb(82,82,82)] font-poppins font-semibold mb-2">
                <span className="flex items-center gap-1">📍 {pkg.location}</span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1">⏱️ {pkg.duration}</span>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <a href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer" className="bg-[#2085b5] hover:bg-white hover:text-[#2085b5] hover:border-2 hover:border-[#2085b5] font-poppins text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 cursor-pointer transition-all">
                  WhatsAPP Now <span ><FaWhatsapp className="text-white group-hover:text-[#2085b5] text-xl transition-colors" /></span>
                </a>

                <div className="text-right">
                  <div className="flex flex-col items-end gap-0 justify-end">
                    {pkg.oldPrice && (
                      <span className="text-gray-400 line-through text-lg font-poppins">₹{pkg.oldPrice}</span>
                    )}
                    <p className="text-[10px] font-semibold text-[rgb(82,82,82)] font-roboto uppercase">per person</p>
                    <p className="text-2xl font-bold font-poppins text-[rgb(17,15,15)]">₹{pkg.price}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Tooltips */}
            <div className="px-8 py-4 bg-gray-50/50 flex justify-between text-[10px] font-roboto font-bold text-gray-500 uppercase tracking-tighter relative border-t border-gray-100">
              <div className="relative group/tooltip flex items-center gap-1 cursor-help">
                🏆 Experience ⓘ
                <div className="absolute bottom-full left-0 mb-3 w-64 p-4 bg-[rgb(26,26,26)] text-white text-[12px] font-normal normal-case leading-relaxed rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50 shadow-2xl">
                  {pkg.experienceInfo}
                  <div className="absolute top-full left-6 border-8 border-transparent border-t-[rgb(26,26,26)]"></div>
                </div>
              </div>
<div>
                <Link href={pkg.slug}>
      <span className="text-sm font-bold text-gray-600 hover:text-[#2085b5] flex items-center gap-1 cursor-pointer transition-colors">
        View More <ChevronRight size={16} />
      </span>
    </Link>
</div>
              <div className="relative group/tooltip flex items-center gap-1 cursor-help">
                ➕ Inclusion ⓘ
                <div className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-[rgb(26,26,26)] text-white text-[12px] font-normal normal-case leading-relaxed rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50 shadow-2xl">
                  {pkg.inclusionInfo}
                  <div className="absolute top-full right-6 border-8 border-transparent border-t-[rgb(26,26,26)]"></div>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}