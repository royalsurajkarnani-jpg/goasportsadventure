"use client";

import { motion } from "framer-motion";
import { MapPin, PhoneCall, MessageCircle, Clock } from "lucide-react";

const contactItems = [
  {
    title: "ADDRESS",
    subtitle: "FOR VISIT OUR OFFICE",
    content: (
      <>
        Scuba Adventure Calangute Circle, Goa, 403516
        <br />
        Port Blair, Andaman Island, 744105
      </>
    ),
    action: "LOCATION",
    icon: <MapPin className="h-10 w-10 text-yellow-600" />,
  },
  {
    title: "PHONE",
    subtitle: "FOR MOBILE FANS",
    content: <>Call Us On: 7678464517</>,
    action: "CALL US",
    icon: <PhoneCall className="h-10 w-10 text-yellow-600" />,
  },
  {
    title: "WHATSAPP",
    subtitle: "FOR ASK ANYTHING",
    content: <>Live Chat with our Tour Planner</>,
    action: "LIVE CHAT",
    icon: <MessageCircle className="h-10 w-10 text-yellow-600" />,
  },
  {
    title: "CUSTOMER SUPPORT",
    subtitle: "FOR HASSLE-FREE TRIP",
    content: (
      <>
        7:00 AM to 10:00 PM
        <br />
        24*7
      </>
    ),
    action: "TRIP MANAGER",
    icon: <Clock className="h-10 w-10 text-yellow-600" />,
  },
];

export default function ContactInfoSection() {
  return (
    <section className="w-full py-20 bg-[#f9fbff] px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4 text-black">{item.icon}</div>
            <h3 className="text-sm text-gray-500 tracking-wide">{item.subtitle}</h3>
            <h2 className="text-lg font-semibold text-gray-800 mt-1">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">{item.content}</p>
            <a className="mt-6 text-black font-semibold tracking-wide text-sm uppercase cursor-pointer">
              {item.action}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
