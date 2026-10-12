"use client";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";



export default function FloatingContact({ isHome = false }) {
  // Define the bottom position based on the prop
  const bottomClass = isHome ? "bottom-6" : "bottom-24";

  return (
    <>
      {/* Call Button (Left) */}
      <a
        href="tel:+917678464517"
        className={`fixed ${bottomClass} left-1 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#2085b5] text-white shadow-lg hover:scale-110 transition-transform duration-200`}
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp Button (Right) */}
      <a
        href="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more about your packages."
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed ${bottomClass} right-1 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform duration-200`}
      >
        <FaWhatsapp size={26} />
      </a>
    </>
  );
}