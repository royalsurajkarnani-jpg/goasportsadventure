'use client'

import Image from "next/image";
import FAQSection from "../components/FAQ";
import Testimonials from "../components/Testemonial";
import FloatingContact from "../components/FloatingContact";

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* HERO */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/terms.png"
          alt="Terms and Conditions"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-2">Home • Terms</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-8 text-gray-700">

        <h2 className="text-[40px] font-bold text-black">Terms & Conditions</h2>
        <p>Last Updated: March 2026</p>

        <p>
          Welcome to GoaSportsAdventure.
          These Terms & Conditions govern the use of https://goasportsadventure.in
          and the booking of adventure activities offered through the website.
          By using this website or booking our services, you agree to these terms.
        </p>

        {/* Booking */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            1. Booking & Payments
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Bookings must be made through the website or authorized partners.</li>
            <li>An advance payment is required to confirm the booking.</li>
            <li>Once booked, the activity slot is reserved for the customer.</li>
          </ul>
        </div>

        {/* Age */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            2. Age Requirements
          </h3>
          <p className="mb-2">For safety reasons:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Minimum age for Sea Trips: 5 years</li>
            <li>Minimum age for Scuba Diving / Water Activities: 12 years</li>
          </ul>

          <p className="mt-2">
            Participants must be physically fit to participate in adventure activities.
          </p>
        </div>

        {/* Weather */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            3. Activity & Weather Conditions
          </h3>

          <p>All activities are subject to:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Weather conditions</li>
            <li>Sea safety conditions</li>
            <li>Government regulations</li>
          </ul>

          <p className="mt-2">
            GoaSportsAdventure reserves the right to reschedule or modify
            activities if required for safety reasons.
          </p>
        </div>

        {/* Reporting */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            4. Reporting Time
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>Customers must arrive at the pickup point or reporting location on time.</li>
            <li>Boat boarding cut-off time is typically around 08:30 AM.</li>
            <li>
              Customers who miss the pickup must reach the Sinquerim Jetty
              (Dolphin Watching Point) using their own transport.
            </li>
            <li>Late arrival may result in loss of booking without refund.</li>
          </ul>
        </div>

        {/* Safety */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            5. Safety Guidelines
          </h3>

          <p>Participants must follow all safety instructions given by instructors and crew.</p>

          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li>Standing while the boat is moving is not allowed</li>
            <li>Jumping from the boat without permission is prohibited</li>
            <li>Smoking or carrying inflammable items on the boat is prohibited</li>
          </ul>

          <p className="mt-2">
            Failure to follow safety instructions may result in removal
            from the activity without refund.
          </p>
        </div>

        {/* Belongings */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            6. Personal Belongings
          </h3>

          <p>Customers are advised not to carry:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Expensive jewelry</li>
            <li>Large amounts of cash</li>
            <li>Unnecessary valuables</li>
          </ul>

          <p className="mt-2">
            GoaSportsAdventure is not responsible for lost, stolen, or damaged belongings.
          </p>
        </div>

        {/* Duration */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            7. Activity Duration
          </h3>

          <p>Scuba diving experience typically includes:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>10–15 minutes training</li>
            <li>15–20 minutes underwater dive</li>
          </ul>

          <p className="mt-2">
            Duration may vary depending on weather and safety conditions.
          </p>
        </div>

        {/* Media */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            8. Media & Video Policy
          </h3>

          <p>
            Scuba diving videos may be provided via WhatsApp. Video availability
            and quality may vary depending on safety conditions and operational
            factors.
          </p>

          <p className="mt-2">
            Customer safety is prioritized over video recording.
          </p>
        </div>

        {/* Liability */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            9. Liability Disclaimer
          </h3>

          <p>Adventure activities involve inherent risks.</p>

          <p className="mt-2">
            By participating, customers acknowledge and accept these risks.
          </p>

          <p className="mt-2">GoaSportsAdventure will not be liable for:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Minor injuries</li>
            <li>Loss of belongings</li>
            <li>Weather delays or operational disruptions</li>
          </ul>

          <p className="mt-2">
            First aid support is available when required.
          </p>
        </div>

        {/* Updates */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            10. Policy Updates
          </h3>

          <p>
            GoaSportsAdventure reserves the right to update these policies at
            any time. Continued use of the website implies acceptance of the
            updated terms.
          </p>
        </div>

      </div>

      <Testimonials/>
      <FAQSection/>
<FloatingContact isHome={true} />
    </div>
  )
}