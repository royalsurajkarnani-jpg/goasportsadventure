"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AutoScrollCarousel({
  items = [],
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  cardWidth = 320,
}) {
  const duplicatedItems = [...items, ...items];

  const scrollAnimation =
    direction === "left"
      ? { x: ["0%", "-50%"] }
      : { x: ["-50%", "0%"] };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={scrollAnimation}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
           className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            style={{ minWidth: `${cardWidth}px` }}
          >
            <div className="relative h-40 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes={`${cardWidth}px`}
                priority={index === 0}
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}