"use client";

import { motion } from "framer-motion";

export default function AutoScrollVideos({
  videos = [],
  speed = 80,
  direction = "left",
  pauseOnHover = true,
}) {
  const duplicatedVideos = [...videos, ...videos];

  const scrollAnimation =
    direction === "left"
      ? { x: ["0%", "-50%"] }
      : { x: ["-50%", "0%"] };

  return (
    <section className="w-full overflow-hidden py-12 bg-black">
      <div className="relative overflow-hidden">
        <div className="mb-6 w-[88vw] md:w-[60vw] mx-auto">
          <h1 className="text-white text-center text-[40px] md:text-[70px] font-bold tracking-tight">Masterclass

to help you speak with confidence and clarity</h1>
        </div>
        <motion.div
          className="flex gap-5 w-max"
          animate={scrollAnimation}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
          whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
        >
          {duplicatedVideos.map((video, index) => (
            <div
              key={index}
              className="
                w-[88vw]          /* Mobile: full width */
                md:w-[25vw]       /* Desktop: 1/4 screen */
                flex-shrink-0
              "
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}