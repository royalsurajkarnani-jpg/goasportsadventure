'use client';
import React from 'react';

const services = [
  {
    id: 1,
    title: "Personalized Strategy",
    description: "We dive deep into your brand DNA to build a custom roadmap.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Creative Execution",
    description: "Our designers and writers bring your vision to life with precision.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Scale & Growth",
    description: "We optimize and scale your campaigns for maximum global reach.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const HowWeServeYou = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-900">
          How we <span className="text-red-600 italic">serve you</span>
        </h2>

        {/* - scroll-pl-6: Snaps the scroll to the padding 
          - overflow-x-auto: Enables horizontal scroll
          - md:grid: Switches to a grid (non-scrollable) on desktop
        */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="min-w-[85%] md:min-w-full snap-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                <button className="mt-6 text-sm font-bold text-red-600 flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Component logic for hiding scrollbars if preferred */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HowWeServeYou;