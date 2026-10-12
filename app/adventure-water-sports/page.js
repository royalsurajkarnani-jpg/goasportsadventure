import React from 'react'
import HeroBanner from '../components/Banner'
import AutoScrollCarousel from '../components/Horizontal'
import CommunicationMasterclass from '../components/Communication';
import Sticky from '../components/Sticky';
import TestimonialsSection from '../components/VerticalTestimonial';
import StatsSection from '../components/Stats';
import StackedModules from '../components/Stacked';
import FAQSection from '../components/FAQ';
import { Briefcase, UserRound, GraduationCap,ContactRound, Heart, PartyPopper, Users, Building2, CameraOff, Waves, LifeBuoy } from 'lucide-react';
import ServiceSection from '../components/Bestservice';
import HorizontalScrollTarget from '../components/Masterclass';
import TourPackage from '../components/PackageCard';
import Testimonials from '../components/Testemonial';
import FloatingContact from '../components/FloatingContact';


const adventureCards = [
  { 
    title: "40+ KM Speed Boat Ride", 
    subtitle: "Thrilling Arabian Sea Experience", 
    image: "/adventure/adven-bg.png" 
  },
  { 
    title: "Dolphin Watching", 
    subtitle: "Spot Dolphins in the Wild", 
    image: "/adventure/dolphin.jpg" 
  },
  { 
    title: "Full Watersports Combo", 
    subtitle: "Jetski, Banana, Bumper & Speedboat", 
    image: "/adventure/watersports.webp" 
  },
  { 
    title: "Island Sightseeing", 
    subtitle: "Divar Island & Scenic Views", 
    image: "/adventure/arabian-view.webp" 
  },
  { 
    title: "Breakfast / Buffet Lunch", 
    subtitle: "Morning & Afternoon Slots Available", 
    image: "/adventure/breakfast.webp" 
  },
  { 
    title: "Music & Sea Party Vibes", 
    subtitle: "Fun, Splash & Group Energy", 
    image: "/adventure/party.png" 
  },
];

const myData = [
  {
    id: 1,
    tag:"The Adventure Begins",
    title: "Pickup & Boarding",
    videos: 4,
    time: "30 mins",
    points: [
      "Hotel pickup (Pre-booked guests)",
      "Check-in & safety briefing",
      "Life jackets & basic instructions",
      "Board the speed boat with crew"
    ]
  },
  {
    id: 2,
    tag:"The Sea Thrill",
    title: "40+ KM Speed Boat Ride",
    videos: 8,
    time: "1 hour",
    points: [
      "Thrilling high-speed boat ride",
      "Ride across the Arabian Sea",
      "Music & energetic vibes onboard",
      "Scenic island and open sea views"
    ]
  },
  {
    id: 3,
    tag:"The Dolphin Moment",
    title: "Dolphin Show & Island Sightseeing",
    videos: 6,
    time: "45 mins",
    points: [
      "Spot dolphins in their natural habitat",
      "Island sightseeing experience",
      "Perfect photo opportunities",
      "Short relaxation break at island"
    ]
  },
  {
    id: 4,
    tag:"The Splash Zone",
    title: "Full Watersports Combo",
    videos: 12,
    time: "1.5 hours",
    points: [
      "Jet Ski Ride",
      "Banana Ride",
      "Bumper Ride",
      "Speed Boat Ride",
      "Supervised by trained instructors"
    ]
  },
  {
    id: 5,
    tag:"The Recharge Break",
    title: "Breakfast / Buffet Lunch",
    videos: 5,
    time: "1 hour",
    points: [
      "Morning slot: Fruits, Samosa, Burger, Cold Coffee, Juice",
      "Afternoon slot: Veg & Non-Veg Buffet",
      "Beer & Soft Drinks (Afternoon slot)",
      "Relax & socialize with group"
    ]
  },
  {
    id: 6,
    tag:"The Smooth Return",
    title: "Safe Drop & Memories",
    videos: 3,
    time: "30 mins",
    points: [
      "Return boat ride",
      "Hotel drop service",
      "Coordinated group management",
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
    text: "Substandard Safety Gear & Rusted Equipment",
    icon: <LifeBuoy className="text-orange-600" />,
    mobileOrder: "order-1", // Top center
    position: "lg:col-start-2 lg:row-start-1" 
  },
  { 
    id: 2, 
    text: "Long Waiting Times & 2-Minute 'Quick' Rides",
    icon: <Waves className="text-orange-600" />,
    mobileOrder: "order-2", // Bottom left
  },
  { 
    id: 3, 
    text: "Hidden Costs for Photos & Videos (HD is extra)",
    icon: <CameraOff className="text-orange-600" />,
    mobileOrder: "order-3", // Bottom right
  },
];


const serviceFeatures = [
  {
    title: "PADI Certified Safety Standards",
    description: "Your safety is our priority.\n\nEvery session begins with a mandatory safety briefing by PADI-certified professionals using international-standard life jackets and gear."
  },
  {
    title: "High-Speed Equipment & Full Circuits",
    description: "No '30-second' shortcut rides.\n\nWe use well-maintained 750cc+ Jet Skis and high-performance parasailing winches to ensure you get the full duration you paid for."
  },
  {
    title: "Free HD GoPro 11 Videos & Photos",
    description: "Capture the thrill without the bill.\n\nUnlike beach operators who charge extra on the spot, our package includes high-definition underwater and aerial footage at no additional cost."
  }
];

const islandSeaTripPackage = {
  title: "Island Sea Trip With Grand Island Water Sports",
  price: 2200,
  rating: 4.7,
  reviews: 620,
  description:
    "Experience an exciting Grand Island sea trip with thrilling water sports, dolphin spotting, buffet meals, and a scenic speed boat ride across the Arabian Sea.",

  sections: [
    {
      title: "Water Sports Included",
      items: [
        "Jet Ski Ride",
        "Banana Ride",
        "Bumper Ride",
        "Speed Boat Ride",
        "Optional Parasailing (if included in slot)",
      ],
    },
    {
      title: "Meals & Refreshments",
      items: [
        "Welcome drink on arrival",
        "Breakfast snacks (Fruits, Samosa, Burger, Cold Coffee, Juices)",
        "Veg & Non-Veg Buffet Lunch",
        "Beer & Soft Drinks (selected slots)",
      ],
    },
    {
      title: "Trip Timeline",
      items: [
        "8:30 AM hotel pickup",
        "Speed boat ride to Grand Island",
        "Dolphin spotting experience",
        "Island sightseeing & relaxation break",
        "Water sports activity slots",
        "Lunch break",
        "Return boat ride",
        "5:30 PM hotel drop",
      ],
    },
    {
      title: "Safety & Operations",
      items: [
        "Life jackets provided for all activities",
        "Trained watersports instructors",
        "Safety briefing before activities",
        "Basic swimming knowledge not required for most rides",
        "Weather-dependent operations",
      ],
    },
    {
      title: "Policies",
      items: [
        "Free cancellation within allowed period",
        "Rescheduling available subject to availability",
        "Carry swimwear, sunscreen & towel",
        "Age restrictions for certain rides",
        "Alcohol consumption rules apply",
      ],
    },
  ],
};

const Faqs = [
  {
    id: 1,
    question: "What activities are included in the Island Sea Trip package?",
    answer:
      "This package includes a speed boat ride across the Arabian Sea, dolphin spotting, island sightseeing, and water sports such as jet ski, banana ride, and bumper ride.",
  },
  {
    id: 2,
    question: "Are meals included in this trip?",
    answer:
      "Yes. Guests receive welcome drinks, breakfast snacks, and a veg & non-veg buffet lunch with beverages.",
  },
  {
    id: 3,
    question: "Is this trip suitable for families and groups?",
    answer:
      "Yes. The Island Sea Trip is suitable for families, couples, and groups looking to enjoy water sports and sightseeing in one day.",
  },
  {
    id: 4,
    question: "What time does the trip start and end?",
    answer:
      "Hotel pickup usually begins around 8:30 AM and the return drop is around 5:30 PM depending on sea conditions.",
  },
  {
    id: 5,
    question: "Do I need prior experience for water sports?",
    answer:
      "No prior experience is required. All water sports are supervised by trained instructors.",
  },
];


const page = () => {

    const customText = `Hello, it’s great to know about goasportsadventure.in. Could you please guide me through the next steps to book the Island Sea Trip with Grand Island Water Sports Package?`;
   const WHATSAPP_NUMBER = "917678464517";
          const encodedText = encodeURIComponent(customText);
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  return (
    <div className=''>
<HeroBanner 
  desktopSrc="/adventure/desktop-hero.png"
  mobileSrc="/adventure/mobile-hero.png"
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
        <TourPackage data={islandSeaTripPackage} />
      <CommunicationMasterclass features={features} para="Do You Want to Avoid These" head="Common Adventure Water Sports Mistakes?"/>
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
         subtitle="That’s Why We Designed the Most Complete Adventure Water Sports Combo"
         description="To give you a stress-free, fully organized and truly unforgettable experience."
         features={serviceFeatures}
         ctaText="Get Instant Confirmation on WhatsApp"
         ctaLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Island Sea Trip with Grand Island Water Sports Package?" // Replace with your actual link
       />
   <Testimonials/>
    <StatsSection/>
    <StackedModules
        title="What’s Included in Your"
        highlightText="Adventure Water Sports Package?"
        items={myData}
        xAxisLabel="Expertise"
        yAxisLabel="Effort"
        src="/adventure/adven-bg.png"
      />
    <HorizontalScrollTarget targets={targets} header="Who Should Book This Adventure Water Sports Package?"/>
   <FAQSection
    title="General Questions"
    description="Everything you need to know before booking your Goa adventure."
    faqs={Faqs}
  />
  <FloatingContact />
   <Sticky
  title="Full Fun Adventure Water Sports Package"
  oldPrice="₹2,500"
  newPrice="₹2,200"
  image="/adventure/adven-bg.png"
  whatsappLink="https://wa.me/917678464517?text=Hello, I came across goasportsadventure.in and would like to know more. Could you please guide me through the next steps to book the Island Sea Trip with Grand Island Water Sports Package?
"
  accentColor="emerald"
    bannerText="Limited Time Offer - 20% Exclusive Discount"
/>
    </div>
  )
}

export default page