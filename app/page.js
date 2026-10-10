import Hero from "./components/Hero";
import DiscountSection from "./components/Discount";
import FeaturedDestinations from "./components/Featured";
import ServiceSection from "./components/Service";
import PopularPackages from "./components/Popular";
import ParallaxService from "./components/Parallax";
import Testimonials from "./components/Testemonial";
import FAQSection from "./components/FAQ";
import Statistics from "./components/Statistics";
import FloatingContact from "./components/FloatingContact";

export default function Home() {

  const Faqs = [
  {
    id: 1,
    question: "What adventure activities can I book in Goa?",
    answer:
      "You can book scuba diving, water sports at Grand Island, dolphin sightseeing trips, luxury dinner cruises on the Mandovi River, and Dudhsagar waterfall tours with jeep safari.",
  },
  {
    id: 2,
    question: "Are these activities safe for beginners?",
    answer:
      "Yes. All activities are conducted by trained professionals with proper safety equipment. Scuba diving is guided by certified instructors and safety instructions are provided before activities.",
  },
  {
    id: 3,
    question: "Do I need to know swimming for scuba diving?",
    answer:
      "No. Swimming is not required for introductory scuba diving experiences. Certified instructors guide you throughout the dive and safety gear is provided.",
  },
  {
    id: 4,
    question: "What is the best time to visit Goa for water sports?",
    answer:
      "The best time for water sports and scuba diving in Goa is from October to May when sea conditions are calm and underwater visibility is better.",
  },
  {
    id: 5,
    question: "Do your packages include hotel pickup and drop?",
    answer:
      "Yes. Most of our packages include hotel pickup and drop services from selected areas in North Goa.",
  },
];

  return (
    <div className="">
      <Hero/>
      <DiscountSection/>
      <FeaturedDestinations/>
      <ServiceSection/>
      <PopularPackages/>
      <ParallaxService/>
      <Testimonials/>
   <FAQSection
  title="General Questions"
  description="Everything you need to know before booking your Goa adventure."
  faqs={Faqs}
/>
      <Statistics/>
<FloatingContact isHome={true} />
    </div>
  );
}
