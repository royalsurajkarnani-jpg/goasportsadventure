"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Using lucide-react for the icons

export default function ServiceSection({
  title,
  subtitle,
  description,
  features, // Expected format: [{ title: string, description: string }]
  ctaText,
  ctaLink,
}) {
  return (
    <section className="w-full bg-white py-4 px-6 md:px-16 flex flex-col items-center text-center">
      {/* Background soft gradient to mimic the image */}

      <div className="relative z-10 max-w-6xl w-full">
        {/* Top Header */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-widest text-sm text-gray-500 font-semibold mb-4 block"
        >
          {title}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-[#1a2b49] mb-4"
        >
          {subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg mb-12"
        >
          {description}
        </motion.p>

        {/* Features Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features?.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#3a96a9] mt-1 flex-shrink-0" size={28} />
                <h3 className="text-xl font-bold text-[#1a2b49] leading-tight">
                  {item.title}
                </h3>
              </div>
              <div className="pl-10">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <a
            href={ctaLink}
            className="inline-flex items-center gap-3 bg-[#2085b5] active:scale-110 text-white px-8 py-4 rounded-full text-sm md:text-xl font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {/* WhatsApp Icon Placeholder */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.12l-.794 2.895 2.973-.78c.816.521 1.648.809 2.563.81h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766z" />
            </svg>
            {ctaText}
            <span className="ml-2 text-sm opacity-80">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}