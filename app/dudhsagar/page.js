import React from 'react'
import Image from 'next/image'
import HeroBanner from '../components/Banner'
import AutoScrollCarousel from '../components/Horizontal'
import CommunicationMasterclass from '../components/Communication';
import Sticky from '../components/Sticky';
import AutoScrollVideos from '../components/Video';
import TestimonialsSection from '../components/VerticalTestimonial';
import StatsSection from '../components/Stats';
import StackedModules from '../components/Stacked';

import FAQSection from '../components/FAQ';
import { Briefcase, UserRound, GraduationCap,ContactRound, Bus, Church, Users, Trees } from 'lucide-react';
import ServiceSection from '../components/Bestservice';
import HorizontalScrollTarget from '../components/Masterclass';
import TourPackage from '../components/PackageCard';
import Testimonials from '../components/Testemonial';
import FloatingContact from '../components/FloatingContact';


const adventureCards = [
  { 
    title: "Jungle Jeep Safari", 
    subtitle: "Thrilling Off-Road Forest Adventure", 
    image: "/safari.webp" 
  },
  { 
    title: "Dudhsagar Waterfall", 
    subtitle: "Majestic 4-Tier Natural Wonder", 
    image: "/dudhsagar.jpg" 
  },
  { 
    title: "Spice Plantation Tour", 
    subtitle: "Explore Goa’s Aromatic Heritage", 
    image: "/spice.webp" 
  },
  { 
    title: "Old Goa Churches", 
    subtitle: "Historic UNESCO Heritage Sites", 
    image: "/churches.jpg" 
  },
  { 
    title: "Buffet Lunch Experience", 
    subtitle: "Unlimited Veg & Non-Veg Meal", 
    image: "/lunch.jpg" 
  },
    { 
    title: "AC Volvo Journey", 
    subtitle: "Comfortable Multi-Axle Travel Experience", 
    image: "/volvo.webp" 
  },
];

const myData = [
  {
    id: 1,
    tag:"The Scenic Journey Begins",
    title: " AC Multi-Axle Volvo Bus Ride to Dudhsagar",
    videos: 6,
    time: "3 hour",
    points: [
      "AC multi-axle Volvo bus journey",
      "Comfortable reclining seats",
      "Scenic countryside & forest views",
      "Organized morning departure"
    ]
  },
  {
    id: 2,
    tag:"The Jungle Adventure",
    title: " Thrilling Jeep Safari Experience",
    videos: 8,
    time: "1.5 hour",
    points: [
      "Guided off-road jeep safari",
      "Forest entry permits included",
      "Adventure ride through rocky terrain",
      "Safe access to waterfall viewpoint"
    ]
  },
  {
    id: 3,
    tag:"The Majestic Waterfall",
    title: " Experience Dudhsagar Falls Visit",
    videos: 10,
    time: "1 hour",
    points: [
      "Visit to the 4-tier Dudhsagar Waterfall",
      "Relax & explore scenic surroundings",
      "Photography opportunities",
      "Time near the waterfall viewpoint"
    ]
  },
  {
    id: 4,
    tag:"The Cultural & Culinary Experience",
    title: "Spice Plantation & Buffet Lunch",
    videos: 7,
    time: "1.5 hour",
    points: [
      "Guided spice plantation tour",
      "Learn about Goa’s spice heritage",
      "Unlimited veg & non-veg buffet lunch",
      "Soft drinks included"
    ]
  },
  {
    id: 5,
    tag:"The Heritage Exploration",
    title: "Old Goa Churches Visit & Return",
    videos: 5,
    time: "1.5 hour",
    points: [
      "Visit Basilica of Bom Jesus",
      "Visit Se Cathedral",
      "Cultural & historical insights",
      "Comfortable drop back"
    ]
  }
];

const targets = [
  {
    title: "Nature Escape Seekers",
    icon: <Trees className="text-lime-600" size={24} />,
    description:
      "For travelers who want to experience Goa’s breathtaking waterfalls, lush forests, and peaceful scenic landscapes away from crowded beaches."
  },
  {
    title: "Comfort-Loving Travelers",
    icon: <Bus className="text-lime-600" size={24} />,
    description:
      "For those who prefer a fully organized day with AC travel, jeep safari, buffet lunch, and smooth coordination — without planning stress."
  },
  {
    title: "Culture & Heritage Explorers",
    icon: <Church className="text-lime-600" size={24} />,
    description:
      "For visitors who want to explore Old Goa churches, spice plantations, and discover the cultural side of Goa beyond beaches."
  },
  {
    title: "Families & Relaxed Travelers",
    icon: <Users className="text-lime-600" size={24} />,
    description:
      "For families and couples looking for a safe, well-managed Dudhsagar experience suitable for all age groups."
  }
];

const features = [
  { 
    id: 1, 
    text: "Last-Minute Booking & Missing Jeep Safari Slots",
    mobileOrder: "order-1" // Top of the triangle
  },
  { 
    id: 2, 
    text: "Hidden Charges for Forest Entry, Safari & Lunch",
    mobileOrder: "order-2" // Bottom left
  },
  { 
    id: 3, 
    text: "Unorganized Tours, Delays & Poor Time Management",
    mobileOrder: "order-3" // Bottom right
  },
];

const serviceFeatures = [
  {
    title: "Confirmed Jeep Safari Slots",
    description: "Avoid the 3-hour long queues at the Kulem gate.\n\nWe pre-book your Jeep safari and forest entry so you spend time at the falls, not in a line."
  },
  {
    title: "Authorized Forest Permits Included",
    description: "No confusion with gate fees or life jacket rentals.\n\nAll forest department permits, sanctuary entry fees, and life jacket costs are covered in your package."
  },
  {
    title: "Guided Jungle & Spice Plantation Tour",
    description: "Expert local drivers and guides.\n\nLearn about the wildlife of Bhagwan Mahavir Sanctuary and enjoy a curated spice farm visit with a traditional lunch."
  }
];

const dudhsagarWaterfallPackage = {
  title: "High Value Dudhsagar Waterfall Trip",
  price: 2700,
  rating: 4.8,
  reviews: 410,
  description:
    "Explore the majestic Dudhsagar Waterfall with a scenic Volvo bus journey, thrilling forest jeep safari, spice plantation tour and buffet lunch included.",

  sections: [
    {
      title: "Travel & Transport",
      items: [
        "AC multi-axle Volvo bus journey",
        "Comfortable reclining seats",
        "Organized morning departure",
        "Scenic countryside drive",
      ],
    },
    {
      title: "Jeep Safari Experience",
      items: [
        "Forest jeep safari ride",
        "Authorized safari vehicles",
        "Entry permits included",
        "Ride through rocky forest terrain",
      ],
    },
    {
      title: "Dudhsagar Waterfall Visit",
      items: [
        "Visit the majestic 4-tier Dudhsagar Falls",
        "Time to explore the waterfall viewpoint",
        "Photography opportunities",
        "Relaxation time near the falls",
      ],
    },
    {
      title: "Plantation Tour & Lunch",
      items: [
        "Guided spice plantation tour",
        "Learn about Goa’s spice cultivation",
        "Unlimited veg & non-veg buffet lunch",
        "Soft drinks included",
      ],
    },
    {
      title: "Policies",
      items: [
        "Carry comfortable shoes & clothing",
        "Waterfall access depends on weather conditions",
        "Age & health restrictions for jeep safari",
        "Cancellation & rescheduling policy applicable",
        "Follow guide instructions for safety",
      ],
    },
  ],
};

const Faqs = [
  {
    id: 1,
    question: "What is included in the Dudhsagar Waterfall package?",
    answer:
      "The package includes an AC Volvo bus journey, jungle jeep safari, Dudhsagar waterfall visit, spice plantation tour, and buffet lunch.",
  },
  {
    id: 2,
    question: "How long does the Dudhsagar trip take?",
    answer:
      "It is a full-day tour starting in the morning and returning by evening.",
  },
  {
    id: 3,
    question: "Is the jeep safari safe?",
    answer:
      "Yes. The safari is conducted using authorized vehicles and experienced drivers through designated forest routes.",
  },
  {
    id: 4,
    question: "Can I take photos at Dudhsagar Waterfall?",
    answer:
      "Yes. Visitors get time at the waterfall viewpoint to relax and take photographs.",
  },
  {
    id: 5,
    question: "Is lunch included in the Dudhsagar tour?",
    answer:
      "Yes. Guests are served an unlimited veg & non-veg buffet lunch at the spice plantation.",
  },
];

const page = () => {

  const customText = `Hello, it’s great to know about goasportsadventure.in. Could you please guide me through the next steps to book the Dudhsagar Waterfall Tour Package?`;
   const WHATSAPP_NUMBER = "917678464517";
          const encodedText = encodeURIComponent(customText);
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  return (
    <div className=''>
<HeroBanner 
  desktopSrc="/dudhsagar/desktop-hero.png"
  mobileSrc="/dudhsagar/mobile-hero.png"
  altText="Communication Masterclass Presentation"
  link={whatsappUrl}
/>
<AutoScrollCarousel
        items={adventureCards}
        speed={35}          // control speed
        direction="left"    // "left" or "right"
        pauseOnHover={true} // pause animation
        cardWidth={320}     // dynamic width
      />
         <TourPackage data={dudhsagarWaterfallPackage} />
<CommunicationMasterclass features={features} para="Do You Want to Avoid These" head="Common Dudhsagar Mistakes?"/>
      {/* <AutoScrollVideos
      videos={[
        "/travel-bg-video.mp4",
        "/travel-bg-video.mp4",
        "/travel-bg-video.mp4",
        "/travel-bg-video.mp4",
      ]}
      speed={80}        // lower = faster
      direction="left"  // left or right
      pauseOnHover={true}
    /> */}
    <ServiceSection 
          title="WHY TOURISTS TRUST GOA SPORTS ADVENTURE"
          subtitle="That’s Why We Designed the Most Complete Dudhsagar Combo"
          description="To give you a stress-free, fully organized and truly unforgettable experience."
          features={serviceFeatures}
          ctaText="Get Instant Confirmation on WhatsApp"
          ctaLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Dudhsagar Waterfall Tour Package?" // Replace with your actual link
        />
   <Testimonials/>
    <StatsSection/>
    <StackedModules
        title="What’s Included in Your"
        highlightText="Dudhsagar Adventure?"
        items={myData}
        xAxisLabel="Expertise"
        yAxisLabel="Effort"
        src="/dudhsagar.jpg"
      />
    <HorizontalScrollTarget targets={targets} header="Who Should Book This Dudhsagar Adventure?"/>
    <FAQSection
    title="General Questions"
    description="Everything you need to know before booking your Goa adventure."
    faqs={Faqs}
  />
  <FloatingContact/>
<Sticky
  title="Dudhsagar Waterfall Jungle Safari"
  oldPrice="₹3,000"
  newPrice="₹2,700"
  image="/dudhsagar.jpg"
  whatsappLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Dudhsagar Waterfall Tour Package?"
  theme="lime"
  bannerText="Limited Time Offer - 25% Exclusive Discount"
/>
    </div>
  )
}

export default page