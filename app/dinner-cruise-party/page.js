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
import HowWeServeYou from '../components/Serve';
import TargetAudience from '../components/Masterclass';
import FAQSection from '../components/FAQ';
import { Briefcase, UserRound, GraduationCap,ContactRound, Heart, PartyPopper, Users, Building2, DollarSign, AlertCircle, Ship } from 'lucide-react';
import ServiceSection from '../components/Bestservice';
import HorizontalScrollTarget from '../components/Masterclass';
import TourPackage from '../components/PackageCard';
import Testimonials from '../components/Testemonial';
import FloatingContact from '../components/FloatingContact';


const adventureCards = [
  { 
    title: "Double Decker Luxury Cruise", 
    subtitle: "4-Hour Evening on Mandovi River", 
    image: "/dinner/luxury-cruise.avif" 
  },
  { 
    title: "Live DJ & Dance Floor", 
    subtitle: "Bollywood Music + Party Vibes", 
    image: "/dinner/disco.jpeg" 
  },
  { 
    title: "Unlimited Buffet Dinner", 
    subtitle: "Veg, Non-Veg & Jain Options", 
    image: "/dinner/middle.jpg" 
  },
  { 
    title: "Casino Sightseeing", 
    subtitle: "Big Daddy, Pride & Deltin Views", 
    image: "/dinner/open.jpeg" 
  },
  { 
    title: "Cultural Dance Shows", 
    subtitle: "Goan & Portuguese Performances", 
    image: "/dinner/traditonal-dance.jpg" 
  },
  { 
    title: "Celebrations & Laser Show", 
    subtitle: "Birthday, Anniversary & Special Moments", 
    image: "/dinner/sunset-dinner.jpg" 
  },
];

const myData = [
  {
    id: 1,
    tag:"The Evening Begins",
    title: " Welcome & Boarding Experience",
    videos: 5,
    time: "30 mins",
    points: [
      "Hotel pickup & smooth transfer",
      "Welcome drinks at boarding",
      "Warm hospitality on arrival",
      "Comfortable seating arrangement"
    ]
  },
  {
    id: 2,
    tag:"The Luxury Cruise Ride",
    title: " 4-Hour Double Decker Experience",
    videos: 8,
    time: "4 hours",
    points: [
      "Scenic cruise on Mandovi River",
      "Open-air upper deck views",
      "Casino sightseeing during ride",
      "Beautiful night skyline of Goa"
    ]
  },
  {
    id: 3,
    tag:"The Grand Dinner Experience",
    title: "Unlimited Buffet & Drinks",
    videos: 6,
    time: "1.5 hour",
    points: [
      "Unlimited veg & non-veg buffet",
      "Jain food available",
      "2 complimentary drinks",
      "Bar service with premium options"
    ]
  },
  {
    id: 4,
    tag:"The Entertainment Night",
    title: "DJ, Dance & Cultural Shows",
    videos: 10,
    time: "2 hours",
    points: [
      "Live Bollywood DJ",
      "6–7 dance performances",
      "Goan & Portuguese cultural acts",
      "Fun games with spot prizes",
      "Laser light show finale"
    ]
  },
  {
    id: 5,
    tag:"The Celebration & Smooth Drop",
    title: "Hassle-Free Experience",
    videos: 4,
    time: "30 mins",
    points: [
      "Birthday & anniversary setups",
      "Group celebration arrangements",
      "Safe return drop at hotel",
      "Well-managed event coordination",
      "No hidden charges"
    ]
  }
];

const targets = [
  {
    title: "Couples & Date Nights",
    icon: <Heart className="text-cyan-600" size={24} />,
    description:
      "For couples looking to enjoy a romantic evening with live music, candle-lit vibes, scenic river views, and unforgettable moments."
  },
  {
    title: "Birthday & Anniversary Celebrations",
    icon: <PartyPopper className="text-cyan-600" size={24} />,
    description:
      "Perfect for celebrating special occasions with custom setups, dance performances, DJ music, and a grand laser show finale."
  },
  {
    title: "Friends & Party Groups",
    icon: <Users className="text-cyan-600" size={24} />,
    description:
      "For groups who want a lively night with unlimited buffet, drinks, dance floor, games, and full-on party vibes."
  },
  {
    title: "Corporate & Private Events",
    icon: <Building2 className="text-cyan-600" size={24} />,
    description:
      "Ideal for team outings, corporate gatherings, and private cruise celebrations with organized hospitality and premium service."
  }
];
const features = [
  { 
    id: 1, 
    text: "Last-Minute Booking & Sold-Out Cruise Seats",
    icon: <Ship className="text-red-500" />,
    mobileOrder: "order-1", // Top center on mobile
    position: "lg:col-start-2 lg:row-start-1" // Apex of triangle on desktop
  },
  { 
    id: 2, 
    text: "Hidden Charges for Drinks, Dinner & Seating",
    icon: <DollarSign className="text-red-500" />,
    mobileOrder: "order-2", // Bottom left
    position: "lg:col-start-1 lg:row-start-2"
  },
  { 
    id: 3, 
    text: "Low-Quality Boats, Poor Entertainment & No Coordination",
    icon: <AlertCircle className="text-red-500" />,
    mobileOrder: "order-3", // Bottom right
    position: "lg:col-start-3 lg:row-start-2"
  },
];

const serviceFeatures = [
  {
    title: "Guaranteed Table Seating",
    description: "No standing around or fighting for chairs.\n\nYour dinner table is reserved and confirmed the moment you book, ensuring a relaxed evening on the Mandovi."
  },
  {
    title: "Pre-Paid Multi-Cuisine Buffet",
    description: "No hidden charges for dinner or starters.\n\nEnjoy a full spread of Veg and Non-Veg delicacies along with complimentary drinks—all included in your ticket price."
  },
  {
    title: "Professional On-Board Coordination",
    description: "Dedicated cruise hosts.\n\nFrom the boarding gate to the live DJ performances and folk dances, our team ensures a seamless, high-energy entertainment flow."
  }
];

const luxuryCruiseDinnerPackage = {
  title: "Luxury Cruise Dinner Party",
  price: 2500,
  rating: 4.8,
  reviews: 520,
  description:
    "Enjoy a magical evening on the Mandovi River with a luxury dinner cruise featuring buffet dining, live entertainment, cultural performances and scenic casino ship views.",

  sections: [
    {
      title: "Cruise Experience",
      items: [
        "4-hour Mandovi River cruise",
        "Double-decker luxury cruise boat",
        "Open deck for scenic river views",
        "Casino ship sightseeing during cruise",
      ],
    },
    {
      title: "Dining Experience",
      items: [
        "Unlimited veg & non-veg buffet dinner",
        "Jain food available on request",
        "2 complimentary drinks included",
        "Additional drinks available at bar counter",
      ],
    },
    {
      title: "Entertainment Schedule",
      items: [
        "Live Bollywood DJ music",
        "6–7 professional dance performances",
        "Goan & Portuguese cultural shows",
        "Fun games with spot prizes",
        "Laser light show finale",
      ],
    },
    {
      title: "Guest Experience & Facilities",
      items: [
        "Comfortable seating arrangement",
        "Welcome drinks on boarding",
        "Professional event hosting team",
        "Clean washroom facilities onboard",
        "Family-friendly environment",
      ],
    },
    {
      title: "Policies",
      items: [
        "Reporting time required before boarding",
        "Cancellation policy applicable",
        "Evening dress code recommended",
        "Birthday & anniversary arrangements available",
        "Outside food not allowed",
      ],
    },
  ],
};

const Faqs = [
  {
    id: 1,
    question: "What is included in the Luxury Cruise Dinner Party?",
    answer:
      "The package includes a 4-hour double-decker cruise on the Mandovi River, buffet dinner, live DJ music, dance performances, cultural shows, and two complimentary drinks.",
  },
  {
    id: 2,
    question: "Is the cruise suitable for couples and families?",
    answer:
      "Yes. The cruise is popular among couples, families, and groups looking for a fun evening experience in Goa.",
  },
  {
    id: 3,
    question: "What kind of food is served on the cruise?",
    answer:
      "An unlimited veg and non-veg buffet dinner is served. Jain food is also available on request.",
  },
  {
    id: 4,
    question: "What entertainment can I expect on the cruise?",
    answer:
      "Guests can enjoy live DJ music, dance performances, cultural shows, fun games, and a laser light show.",
  },
  {
    id: 5,
    question: "What is the reporting time for the cruise?",
    answer:
      "Guests are required to report at the boarding point before the cruise departure time shared during booking confirmation.",
  },
];

const page = () => {

  const customText = `Hello, it’s great to know about goasportsadventure.in. Could you please guide me through the next steps to book the Dinner Cruise Party?`;
   const WHATSAPP_NUMBER = "917678464517";
          const encodedText = encodeURIComponent(customText);
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  return (
    <div className=''>
<HeroBanner 
  desktopSrc="/dinner/desktop-hero.png"
  mobileSrc="/dinner/mobile.png"
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
       <TourPackage data={luxuryCruiseDinnerPackage} />
      <CommunicationMasterclass features={features} para="Do You Want to Avoid These" head="Common Dinner Cruise Party Mistakes?"/>
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
         subtitle="That’s Why We Designed the Most Complete Dinner Cruise Party Combo"
         description="To give you a stress-free, fully organized and truly unforgettable experience."
         features={serviceFeatures}
         ctaText="Get Instant Confirmation on WhatsApp"
         ctaLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Luxury Cruise Dinner Party Package?" // Replace with your actual link
       />
     <Testimonials/>
    <StatsSection/>
    <StackedModules
        title="What’s Included in Your"
        highlightText="Dinner Cruise Party?"
        items={myData}
        xAxisLabel="Expertise"
        yAxisLabel="Effort"
        src="/dinner/luxury-special.png"
      />
    <HorizontalScrollTarget targets={targets} header="Who Should Book This Dinner Cruise Party?"/>
    <FAQSection
    title="General Questions"
    description="Everything you need to know before booking your Goa adventure."
    faqs={Faqs}
  />
    <FloatingContact />
   <Sticky
  title="Full Fun Dinner Cruise Party"
  oldPrice="₹2,700"
  newPrice="₹2,500"
  image="/dinner/poster.png"
  whatsappLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Luxury Cruise Dinner Party Package?"
  accentColor="emerald"
    bannerText="Limited Time Offer - 16% Exclusive Discount"
/>
    </div>
  )
}

export default page