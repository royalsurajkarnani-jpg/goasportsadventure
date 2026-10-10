'use client'

import Image from "next/image";
import FAQSection from "../components/FAQ";
import Testimonials from "../components/Testemonial";
import FloatingContact from "../components/FloatingContact";

export default function RefundPage() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* HERO */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/refund.png"
          alt="Refund Policy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-2">Home • Refund Policy</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-8 text-gray-700">

        <h2 className="text-[40px] font-bold text-black">
          Refund & Cancellation Policy
        </h2>

        <p>Last Updated: March 2026</p>

        <p>
          This Refund & Cancellation Policy applies to all bookings made through
          https://goasportsadventure.in. By making a booking with
          GoaSportsAdventure, you agree to the following terms.
        </p>

        {/* Booking Policy */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            1. Booking Policy
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>Bookings can be made up to 90 days in advance.</li>
            <li>An advance payment is required to confirm your booking.</li>
            <li>Once the booking is confirmed, the slot is reserved for you.</li>
            <li>
              Customers should confirm their availability before booking, as the
              advance payment is non-refundable.
            </li>
          </ul>
        </div>

        {/* Zero Refund */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            2. Zero Refund Policy
          </h3>

          <p className="mb-2">We follow a strict No Refund Policy.</p>

          <p>No refunds will be issued in the following cases:</p>

          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li>Change of personal plans</li>
            <li>Medical issues or illness</li>
            <li>Late arrival or no-show</li>
            <li>Cancellation by the customer</li>
            <li>Sea sickness or fear of activity</li>
            <li>Weather delays or operational delays</li>
          </ul>

          <p className="mt-2">
            This policy exists because advance payments are made to boat
            operators, hospitality partners, and activity providers.
          </p>
        </div>

        {/* Pre Booking */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            3. Pre-Booking Amount
          </h3>

          <p>
            The pre-booking amount is strictly non-refundable if the booking is
            cancelled by the customer.
          </p>

          <p className="mt-2">
            Once the booking is confirmed, the slot cannot be cancelled for refund.
          </p>
        </div>

        {/* Boat Boarding */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            4. Boat Boarding Policy
          </h3>

          <p>
            Once a customer boards the boat, the activity is considered started.
          </p>

          <p className="mt-2">After boarding:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>No refunds will be issued</li>
            <li>No cancellations will be accepted</li>
          </ul>
        </div>

        {/* Rescheduling */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            5. Trip Rescheduling
          </h3>

          <p>
            In case of genuine emergencies, customers may request rescheduling
            of the trip date.
          </p>

          <p className="mt-2">Conditions:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Request must be made at least 48 hours before the trip date</li>
            <li>Rescheduling is subject to availability</li>
            <li>Approval is at the discretion of management</li>
          </ul>
        </div>

        {/* Weather */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            6. Weather Conditions
          </h3>

          <p>Adventure activities are subject to weather and sea conditions.</p>

          <p className="mt-2">If activities are cancelled due to:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Bad weather</li>
            <li>Government restrictions</li>
            <li>Safety concerns</li>
          </ul>

          <p className="mt-2">
            Customers may reschedule to the next available date.
            No monetary refunds will be issued.
          </p>
        </div>

        {/* No Show */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            7. No-Show Policy
          </h3>

          <p>
            If a customer fails to arrive at the reporting time, the booking
            will be considered a No-Show.
          </p>

          <p className="mt-2">
            No refunds or vouchers will be provided.
          </p>
        </div>

        {/* Refund Processing */}
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-2">
            8. Refund Processing (Exceptional Cases)
          </h3>

          <p>
            In rare situations where a refund is approved by management, it will
            be processed:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li>Within 5–7 working days</li>
            <li>Through the original payment method</li>
          </ul>
        </div>

      </div>

      <Testimonials/>
      <FAQSection/>
<FloatingContact isHome={true} />
    </div>
  )
}