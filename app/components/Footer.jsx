"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; 
import { IoMailOutline } from "react-icons/io5";

const footerLinks = {
  topDestinations: ["Grand-Island", "Dudhsagar", "Dinner-Cruise-Party", "Adventure-Water-Sports"],
popularSearch: [
  "Scuba Diving in Goa",
  "Grand Island Trip",
  "Goa Water Sports Packages",
  "Dinner Cruise in Goa",
  "Dudhsagar Waterfall Trip",
  "Parasailing in Goa",
  "Jet Ski Ride Goa",
  "Dolphin Sightseeing Goa"
],
  resources: [
    { label: "About Us", href: "/About" },
    { label: "Privacy Policy", href: "/Privacy" },
    { label: "Contact Us", href: "/Contact" },
    { label: "Terms & Conditions", href: "/Terms" },
    { label: "Refund Policy", href: "/Refund" }
  ]
};
 
export default function Footer() {
  return (
    <footer className="bg-[rgb(17,15,15)] text-white font-roboto">
      {/* 1. Inquiry Bar: Horizontal on Laptop, Vertical on Mobile */}
      <div className="max-w-7xl mx-auto px-4 py-10 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 text-2xl">
              💬
            </div>
            <div>
              <h4 className="font-poppins font-bold text-lg">To More Inquiry</h4>
              <p className="text-gray-400 text-sm">Don't hesitate Call to GoFly.</p>
            </div>
          </div>
          
     <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-2xl">
          <FaWhatsapp />
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold">WhatsApp</p>
          <p className="text-white font-bold">+91 76784 64517</p>
        </div>
      </div>
<div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl">
          <IoMailOutline />
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold">Mail Us</p>
          <p className="text-white font-bold">info@goasportsadventure.in</p>
        </div>
      </div>

<div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-xl">
          <FaPhoneAlt />
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold">Call Us</p>
          <p className="text-white font-bold">+91 76784 64517</p>
        </div>
      </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
     <div className="flex-shrink-0 flex items-center gap-2 justify-center w-64">
      <Image
        src="/logo.png"     // Path to your image in the /public folder
        alt="GoFly Logo"
        width={80}          // Equivalent to w-10 (10 * 4px)
        height={80}         // Equivalent to h-10
        className="rounded-lg" 
        priority            // Ensures the logo loads immediately (good for headers)
      />
      <span className="font-poppins text-2xl font-bold text-white">Goa Sports Adventure</span>
    </div>
    
            <p className="text-gray-400 leading-relaxed">
Goa Sports Adventure Calangute Circle, Goa, 403516
Port Blair, Andaman Island, 744105
            </p>
        <div className="flex gap-4">
  <a
    href="https://www.facebook.com/share/1Ch7BhziTH/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
  >
    <FaFacebookF size={16} />
  </a>

  <a
    href="https://www.instagram.com/goasportsadventure.in?igsh=MTI1cTN5eHlrcjdx"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all"
  >
    <FaInstagram size={16} />
  </a>
</div>
           
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-poppins font-bold text-xl mb-8">Top Package</h4>
            <ul className="space-y-4 text-gray-400">
              {footerLinks.topDestinations.map(link => <li key={link} className="hover:text-blue-500 cursor-pointer"><a href={link}>{link}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-xl mb-8">Popular Search</h4>
            <ul className="space-y-4 text-gray-400">
              {footerLinks.popularSearch.map(link => <li key={link} className="hover:text-blue-500 cursor-pointer">{link}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-xl mb-8">Resources</h4>
            <ul className="space-y-4 text-gray-400">
            {footerLinks.resources.map((link) => (
  <li key={link.href} className="hover:text-blue-500 cursor-pointer">
    <a href={link.href}>{link.label}</a>
  </li>
))}
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Goa Sports Adventures All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Terms & Condition</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}