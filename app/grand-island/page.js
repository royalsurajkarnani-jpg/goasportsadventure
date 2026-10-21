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
import { Briefcase, UserRound, GraduationCap,ContactRound, Users } from 'lucide-react';
import ServiceSection from '../components/Bestservice';
import HorizontalScrollTarget from '../components/Masterclass';
import TourPackage from '../components/PackageCard';
import Testimonials from '../components/Testemonial';
import FloatingContact from '../components/FloatingContact';
import ContactForm from '../components/Form';


const adventureCards = [
  { 
    title: "Scuba Diving Experience", 
    subtitle: "Dive 7–15m with Certified Instructors", 
    image: "/grand/scuba.jpg" 
  },
  { 
    title: "Dolphin Show & Sightseeing", 
    subtitle: "Watch Dolphins in the Wild", 
    image: "/grand/dolphin.jpg" 
  },
  { 
    title: "High-Speed Boat Journey", 
    subtitle: "65+ KM Thrilling Sea Ride", 
    image: "/grand/boat.jpg" 
  },
  { 
    title: "6+ Watersports Combo", 
    subtitle: "Parasailing, Jet Ski, Banana & More", 
    image: "/grand/sports.webp" 
  },
  { 
    title: "Buffet Meals Included", 
    subtitle: "Breakfast + Lunch + Beverages", 
    image: "/grand/food.avif" 
  },
  { 
    title: "GoPro HD Photos & Videos", 
    subtitle: "Capture Every Underwater Moment", 
    image: "/grand/gopro.jpg" 
  },
];

const myData = [
  {
    id: 1,
    tag:"The Ocean Journey Begins ",
    title: "Scenic Speed Boat Journey to Grand Island",
    videos: 7,
    time: "32 mins",
    stats:[{icon:"🚤",label:"65+ KM Sea Ride"},{icon:"⏰",label:" 8:30 AM Departure"}],
    points: ["65+ km speed boat sea trip", "Breathtaking ocean views", "Dolphin spotting on the way"," Island sightseeing experience"]
  },
  {
    id: 2,
     tag:"The Underwater Adventure",
    title: "Scuba Diving Experience (Up to 15 Meters)",
    videos: 9,
    time: "3.5 hour",
 stats:[{icon:"🤿",label:"Depth: 7–15 Meters"},{icon:"📸",label:"GoPro HD Photos & Videos"}],
    points: ["Certified scuba instructors", " Safety briefing & basic training", "Underwater dive up to 15 meters"," GoPro 10 HD underwater shoot included","Unlimited dive duration within slot"]
  },
  {
    id: 3,
       tag:"The Thrill Continues",
    title: "6+ Thrilling Water Sports Activities",
    videos: 17,
    time: "2 hour",
     stats:[{icon:"🌊 ",label:"6+ Activities"},{icon:"🎯",label:"High-Adrenaline Fun"}],
    points: ["Parasailing with dip", "Jet Ski Ride", " Banana Ride"," Bumper Ride","Speed Boat Ride"]
  },
  {
    id: 4,
           tag:"The Comfort & Refresh ",
    title: "Meals & Refreshments Included",
    videos: 12,
    time: "1.5 hour",
     stats:[{icon:"🍽",label:"Breakfast + Buffet Lunch"},{icon:"🍺",label:"Beers & Soft Drinks"}],
    points: ["Welcome drinks", "Breakfast: Fruits, Samosa, Burger, Juices", "Veg & Non-Veg Buffet Lunch"," Beers & Soft Drinks Included"]
  },
  {
    id: 5,
     tag:" The Comfort & Refresh ",
    title: "Fully Organized & Hassle-Free Planning",
    videos: 12,
    time: "1.5 hour",
     stats:[{icon:"🚐 ",label:"Free Hotel Pickup & Drop"},{icon:"🛟",label:"Certified Team-"}],
    points: ["Pre-reserved activity slots", " Free pickup & drop (Pre-booking required)", "Professional team coordination","  Smooth schedule from 8:30 AM to 5:30 PM","No hidden charges"]
  }
];

const targets = [
{
    title: "Families Visiting Goa",
    icon: <Users size={48} />, // or an Image component
    description: "For families who want a safe, organized, and all-inclusive Grand Island experience without hidden charges.",
    highlights: [
      "Family vacations",
      "Parents traveling with adults",
      "First-time Goa visitors"
    ]
  },
  {
    title: "Couples & Honeymooners",
    icon: <UserRound className="text-blue-600" size={48} />,
    description: "For couples who want romantic ocean views, dolphin spotting and underwater photos",
       highlights: [
      "Honeymoon trips",
      "Anniversary celebrations",
      "Pre-wedding photos & fun experiences"
    ]
  },
  {
    title: "Friends & Group Travelers",
    icon: <GraduationCap className="text-blue-600" size={48} />,
    description: "For groups who want a full day of fun, water sports, buffet lunch, and zero planning stress.",
      highlights: [
      "Bachelor trips",
      "College friend reunions",
      "Birthday celebrations"
    ]
  },
  {
    title: " Families Visiting Goa",
    icon: <ContactRound className="text-blue-600" size={48} />,
    description: "For groups who want a full day of fun, water sports, buffet lunch, and zero planning stress.",
          highlights: [
      "Family vacations",
      "Parents traveling with adults",
      "First-time Goa visitors"
    ]
  }
];
const features = [
  { 
    id: 1, 
    text: "Booking on Spot & Missing Limited Scuba Slots",
    mobileOrder: "order-1" // Top of the triangle
  },
  { 
    id: 2, 
    text: "Paying Extra for Photos, Pickup & Water Sports",
    mobileOrder: "order-2" // Bottom left
  },
  { 
    id: 3, 
    text: " Poor Planning, Long Waiting & Unorganized Tours",
    mobileOrder: "order-3" // Bottom right
  },
];

const serviceFeatures = [
    {
      title: "Pre-Reserved Slots for Scuba & Water Sports",
      description: "No waiting. No last-minute price hikes.\n\nYour adventure is pre-booked and scheduled before you arrive."
    },
    {
      title: "All-Inclusive Transparent Pricing",
      description: "What you see is what you pay.\nScuba, water sports, meals, pickup, photos —\nNo hidden charges. No surprises."
    },
    {
      title: "Certified Instructors & Organized Planning",
      description: "Professional team.\nProper safety briefing.\nSmooth activity flow from morning to evening."
    }
  ];

const grandIslandGoldPackage = {
  title: "Grand Island Gold + Premium Package",
  price: 2700,
  rating: 4.9,
  reviews: 740,
  description:
    "Premium Grand Island adventure including scuba diving, parasailing, thrilling water sports, buffet meals and dolphin spotting during a scenic Arabian Sea trip.",

  sections: [
    {
      title: "Adventure Activities Included",
      items: [
        "Scuba Diving up to 15 meters with certified instructor",
        "Parasailing with water dip experience",
        "Jet Ski ride on open sea",
        "Banana ride with group thrill",
        "Bumper ride adventure",
        "Speed boat ride across the Arabian Sea",
      ],
    },
    {
      title: "Meals & Refreshments",
      items: [
        "Welcome drink on arrival",
        "Morning breakfast snacks (Fruits, Samosa, Burger, Cold Coffee, Juices)",
        "Unlimited veg & non-veg buffet lunch",
        "Beer & soft drinks included (selected slots)",
      ],
    },
    {
      title: "Trip Timeline",
      items: [
        "8:30 AM hotel pickup",
        "Speed boat ride to Grand Island",
        "Dolphin spotting experience",
        "Island sightseeing & relaxation time",
        "Scuba diving training & activity slot",
        "Water sports activities session",
        "Lunch break at island",
        "Return boat ride",
        "Approx. 5:30 PM hotel drop",
      ],
    },
    {
      title: "Safety & Operations",
      items: [
        "Certified scuba diving instructors",
        "Basic scuba training before dive",
        "Life jackets provided for all activities",
        "Safety equipment & trained staff",
        "Weather-dependent operations for sea activities",
      ],
    },
    {
      title: "Policies & Guidelines",
      items: [
        "Advance booking recommended due to limited slots",
        "Rescheduling possible subject to availability",
        "Carry swimwear, sunscreen & towel",
        "Age and medical restrictions apply for scuba diving",
        "Follow instructor guidelines during activities",
      ],
    },
  ],
};

 const Faqs = [
  {
    id: 1,
    question: "What activities are included in the Grand Island Gold package?",
    answer:
      "The package includes scuba diving up to 15 meters with instructor, parasailing, jet ski, banana ride, bumper ride, speed boat trip, dolphin spotting, and island sightseeing.",
  },
  {
    id: 2,
    question: "Do beginners or non-swimmers participate in scuba diving?",
    answer:
      "Yes. Beginners and non-swimmers can try scuba diving because instructors provide training and accompany you during the dive.",
  },
  {
    id: 3,
    question: "Are meals included in this package?",
    answer:
      "Yes. The package includes welcome drinks, breakfast snacks, and an unlimited veg & non-veg buffet lunch along with beer and soft drinks.",
  },
  {
    id: 4,
    question: "What is the duration of the Grand Island trip?",
    answer:
      "The trip usually starts around 8:30 AM with hotel pickup and ends around 5:30 PM after returning from the island.",
  },
  {
    id: 5,
    question: "Is scuba diving safe for first-time divers?",
    answer:
      "Yes. The dive is conducted under the supervision of certified instructors and safety gear such as wetsuits and life jackets are provided.",
  },
];

const page = () => {

  const customText = `Hello, it’s great to know about goasportsadventure.in. Could you please guide me through the next steps to book the Gold + Premium Grand Island Package?`;
   const WHATSAPP_NUMBER = "917678464517";
          const encodedText = encodeURIComponent(customText);
          const whatsappUrl = `#form`;

  return (
    <div className=''>
<HeroBanner 
  desktopSrc="/grand/desktop-hero.png"
  mobileSrc="/grand/mobile-hero.png"
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

    <TourPackage data={grandIslandGoldPackage} />


      <CommunicationMasterclass features={features} para="Do You Want to Avoid These" head="Common Grand Island Mistakes?"/>
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
         subtitle="That’s Why We Designed the Most Complete Grand Island Combo"
         description="To give you a stress-free, fully organized and truly unforgettable ocean experience."
         features={serviceFeatures}
         ctaText="Get Instant Confirmation on WhatsApp"
         ctaLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Gold + Premium Grand Island Package?" // Replace with your actual link
       />
   <Testimonials/>
    <StatsSection/>
    <StackedModules
        title="What’s Included in Your"
        highlightText="Grand Island Adventure?"
        items={myData}
        xAxisLabel="Expertise"
        yAxisLabel="Effort"
        src="/grand.png"
      />
    <HorizontalScrollTarget targets={targets} header="Who Should Book This Grand Island Combo?"/>
   <FAQSection
    title="General Questions"
    description="Everything you need to know before booking your Goa adventure."
    faqs={Faqs}
  />
  <section id="form">
  <ContactForm />


  </section>



    <FloatingContact />
   <Sticky
  title="Full Fun Grand Island Combo"
  oldPrice="₹3,500"
  newPrice="₹2,700"
  image="/grand/poster.jpg"
  whatsappLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Gold + Premium Grand Island Package?"
  accentColor="emerald"
    bannerText="Limited Time Offer - 30% Exclusive Discount"
/>
    </div>
  )
}

export default page