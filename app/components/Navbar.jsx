'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adventureOpen, setAdventureOpen] = useState(false);

  const adventures = [
    { name: "Grand Island", href: "/Grand-Island" },
    { name: "Dudhsagar Waterfall", href: "/Dudhsagar" },
    { name: "Dinner Cruise Party", href: "/Dinner-Cruise-Party" },
    { name: "Adventure Water Sports", href: "/Adventure-Water-Sports" },
  ];

  return (
    <div className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-white/30">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <Image
              src="/logo.png"
              alt="Goa Sports Adventure"
                width={60}
  height={30}
              priority
              className="mix-blend-multiply"
            />

            <span className="font-bold text-gray-800 text-lg">
              Goa Sports Adventure
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link href="/" className="font-medium text-gray-700 hover:text-[#2085b5]">
              Home
            </Link>

            {/* Adventures Dropdown */}
            <div
              className="relative"
 onClick={() => setAdventureOpen(!adventureOpen)}
            >
              <button className="font-medium text-gray-700 hover:text-[#2085b5] flex items-center gap-1 cursor-pointer">
                Adventures
                <span>▼</span>
              </button>

              {adventureOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-56 border">

                  {adventures.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-3 hover:bg-gray-50 text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
              )}
            </div>

            <Link href="/About" className="font-medium text-gray-700 hover:text-[#2085b5]">
              About
            </Link>

            <Link href="/Contact" className="font-medium text-gray-700 hover:text-[#2085b5]">
              Contact
            </Link>
            <Link href="/Privacy" className="font-medium text-gray-700 hover:text-[#2085b5]">
              Privacy Policy
            </Link>
            <Link href="/Refund" className="font-medium text-gray-700 hover:text-[#2085b5]">
              Refund Policy
            </Link>
            <Link href="/Terms" className="font-medium text-gray-700 hover:text-[#2085b5]">
              Terms & Conditions
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

        </div>
      </div>

  
{/* Mobile Menu */}
{/* Mobile Menu */}
{mobileOpen && (
  <div
    className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] z-[60] md:hidden"
    onClick={() => setMobileOpen(false)}
  >
    {/* Menu Content */}
    <div
      className="bg-white px-6 py-6 space-y-4 h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <Link href="/" className="block font-medium"
        onClick={()=>setMobileOpen(false)}>
        Home
      </Link>

      <div>
        <p className="font-semibold">Adventures</p>

        <div className="ml-3 mt-2 space-y-2">
          {adventures.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700"
              onClick={()=>setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <Link href="/About" className="block font-medium"
        onClick={()=>setMobileOpen(false)}>
        About
      </Link>

      <Link href="/Contact" className="block font-medium"
        onClick={()=>setMobileOpen(false)}>
        Contact
      </Link>

      <Link href="/Privacy" className="block font-medium"
        onClick={()=>setMobileOpen(false)}>
        Privacy Policy
      </Link>

      <Link href="/Refund" className="block font-medium"
        onClick={()=>setMobileOpen(false)}>
        Refund Policy
      </Link>

      <Link href="/Terms" className="block font-medium"
        onClick={()=>setMobileOpen(false)}>
        Terms & Conditions
      </Link>
    </div>
  </div>
)}
    </div>
  );
}