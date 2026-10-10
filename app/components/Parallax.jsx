"use client";
import Link from "next/link";
import React from "react";

export default function ParallaxService() {
  return (
    <section className="relative w-full overflow-hidden">

      <div
        className="
        relative h-[500px] md:h-[650px] w-full
        bg-[url('/mobile-parallax.png')]
        md:bg-[url('/desktop-parallax.png')]
        bg-center bg-cover bg-no-repeat
        md:bg-fixed
        flex items-center text-center
        "
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">

            <p className="font-courgette text-white text-lg md:text-xl mb-4 opacity-90">
              Make Meet Happiness.
            </p>

            <h2 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8">
              The world is a book, and those who do not travel read only one page.
            </h2>

            <div className="mb-10">
              <p className="font-roboto text-white font-bold text-lg md:text-xl">
                Saint Augustine
              </p>
              <p className="font-roboto text-white/80 text-sm md:text-base">
                Philosopher
              </p>
            </div>
<Link href="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Gold + Premium Grand Island Package?" className="inline-block">
            <button className="font-roboto bg-[#2085b5] hover:bg-black cursor-pointer text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all flex items-center gap-2 group mx-auto">
              Grab the Deal Now
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}