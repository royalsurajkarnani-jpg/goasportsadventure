"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  return (
  <section className="w-full bg-white py-6 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-14">
          Numbers that speak for themselves
        </h2>

        {/* Stats Grid */}
        <div className="flex flex-row justify-center items-center gap-12">

          {/* Stat 1 */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-black"
            >
              6K+
            </motion.h3>
            <p className="mt-3 text-gray-600 text-sm md:text-lg">
              Happy Adventurers Served
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-black"
            >
              9.8+
            </motion.h3>
            <p className="mt-3 text-gray-600 text-sm md:text-lg">
              Average Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}