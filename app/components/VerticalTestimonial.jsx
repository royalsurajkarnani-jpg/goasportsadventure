"use client";

import Image from "next/image";

export default function TestimonialsSection() {
const testimonials = [
  {
    name: "Gourav Mahore",
    role: "Solo Backpacker",
    avatar: "/avatar1.jpeg",
    text:
      "This travel agency is a 'never to lose' opportunity if you want authentic experiences. I've been backpacking for years, but their local guidance upgraded my trips from standard tourist trails to hidden gems I never would have found alone.",
    likes: 5,
  },
  {
    name: "Sakshi Bhoyar",
    role: "Family Traveler",
    avatar: "/avatar2.jpeg",
    text:
      "I suggest everyone try their custom tour packages. The true success of a trip is having the confidence to explore a new country safely while seeing the outcomes—like stress-free logistics and amazing local food—that actually matter.",
    likes: 18,
  },
  {
    name: "Rahul Verma",
    role: "Luxury Explorer",
    avatar: "/avatar3.jpeg",
    text:
      "Their 'Saves Money' promise is real. I usually book high-end, but their secret discounts on boutique hotels and flights allowed me to extend my European vacation by a full week without breaking my original budget.",
    likes: 11,
  },
  {
    name: "Priya Deshmukh",
    role: "First-time International Traveler",
    avatar: "/avatar1.jpeg",
    text:
      "Before booking here, I was terrified of navigating foreign transit and language barriers. Their local guides provided such clear instructions and support that I explored Tokyo like a local without any fear.",
    likes: 9,
  },
  {
    name: "Amit Tiwari",
    role: "Adventure Enthusiast",
    avatar: "/avatar2.jpeg",
    text:
      "The local frameworks and itineraries provided here helped me navigate the toughest treks in Himachal. Their expertise in avoiding tourist traps and finding reliable transport saved me so much time and frustration.",
    likes: 22,
  },
  {
    name: "Neha Kulkarni",
    role: "Digital Nomad",
    avatar: "/avatar3.jpeg",
    text:
      "I noticed a visible improvement in how I plan my long-term stays. Their 'Deals & Discounts' section is a lifesaver for finding high-quality accommodation at local prices. Highly recommended for slow travelers!",
    likes: 15,
  },
];

  return (
    <section className="w-full bg-gray-100 py-4 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-red-100 font-satoshi px-6 py-2 rounded-full text-sm font-semibold tracking-widest text-gray-800">
            TESTIMONIALS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold leading-snug max-w-3xl mx-auto font-satoshi">
          <span className="text-[#2085b5]">2000+ Tourists </span> Turned Their Goa Trip Into Unforgettable Ocean Memories
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-2xl p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold font-roboto">{item.name}</h4>
                    <p className="text-sm font-roboto text-gray-400">{item.role}</p>
                  </div>
                </div>


              </div>

              {/* Text */}
              <p className="text-[16px] font-roboto text-gray-300 leading-relaxed">
                {item.text}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-6 mt-6 text-gray-400 text-sm">
                <span>👍 {item.likes}</span>
                <span>Reply</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}