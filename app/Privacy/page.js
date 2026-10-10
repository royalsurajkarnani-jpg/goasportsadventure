'use client'

import Image from "next/image";
import FAQSection from "../components/FAQ";
import Testimonials from "../components/Testemonial";
import FloatingContact from "../components/FloatingContact";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/privacy.png"
          alt="Privacy Policy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-2">Home • Privacy Policy</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-8 text-gray-700">

        <h2 className="text-[40px] font-bold text-black">Privacy Policy</h2>
        <p>Last Updated: March 2026</p>

        <p>
          At GoaSportsAdventure, accessible from
          https://goasportsadventure.in, protecting the privacy of our visitors
          and customers is one of our main priorities. This Privacy Policy
          document outlines the types of information that we collect and how we
          use it.
        </p>

        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us through our website.
        </p>

        {/* Who We Are */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            1. Who We Are
          </h3>
          <p>Website: https://goasportsadventure.in</p>
          <p>Business Name: GoaSportsAdventure</p>
          <p>
            We provide adventure activity bookings such as scuba diving,
            watersports, island trips, and other sea adventure experiences in
            Goa.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            2. Information We Collect
          </h3>

          <p className="mb-2">
            When you interact with our website or booking forms, we may collect
            the following information.
          </p>

          <h4 className="font-semibold">Personal Information</h4>
          <p>You may voluntarily provide:</p>

          <ul className="list-disc ml-6 mt-2">
            <li>Name</li>
            <li>Phone number / WhatsApp number</li>
            <li>Email address</li>
            <li>Travel or booking dates</li>
            <li>Any other information submitted through contact or booking forms</li>
          </ul>

          <h4 className="font-semibold mt-4">Automatically Collected Information</h4>
          <p>We may automatically collect:</p>

          <ul className="list-disc ml-6 mt-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
          </ul>

          <p className="mt-2">
            This information helps us analyze website usage and improve user
            experience.
          </p>
        </div>

        {/* How We Use Information */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            3. How We Use Your Information
          </h3>

          <p>
            The information collected is used only to provide better service to
            our customers.
          </p>

          <p className="mt-2">We may use the data to:</p>

          <ul className="list-disc ml-6 mt-2">
            <li>Process bookings and inquiries</li>
            <li>Provide customer support</li>
            <li>Send booking confirmations or updates</li>
            <li>Improve our website and services</li>
            <li>Monitor website usage and performance</li>
          </ul>

          <p className="mt-2">
            GoaSportsAdventure does not sell, rent, or share your personal data
            with third parties for marketing purposes.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            4. Cookies
          </h3>
          <p>Our website may use cookies to improve user experience.</p>

          <p className="mt-2">Cookies help us:</p>

          <ul className="list-disc ml-6 mt-2">
            <li>Remember visitor preferences</li>
            <li>Analyze website traffic</li>
            <li>Improve website performance</li>
          </ul>

          <p className="mt-2">
            You can disable cookies through your browser settings.
          </p>
        </div>

        {/* Third Party */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            5. Third-Party Services
          </h3>

          <p>We may use trusted third-party services such as:</p>

          <ul className="list-disc ml-6 mt-2">
            <li>Google Analytics for website analytics</li>
            <li>Payment gateways for secure online payments</li>
          </ul>

          <p className="mt-2">
            These services may collect limited technical data necessary to
            operate their services.
          </p>
        </div>

        {/* Embedded */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            6. Embedded Content
          </h3>
          <p>
            Pages on our website may include embedded content such as videos,
            maps, or social media content. These external websites may collect
            data according to their own privacy policies.
          </p>
        </div>

        {/* Children */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            7. Children's Information
          </h3>
          <p>
            Our services are not intended for children under 13 years of age,
            and we do not knowingly collect personal information from children.
          </p>
        </div>

        {/* Consent */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            8. Consent
          </h3>
          <p>
            By using https://goasportsadventure.in, you consent to our Privacy
            Policy and agree to its terms.
          </p>
        </div>

        {/* Updates */}
        <div>
          <h3 className="text-[24px] font-semibold mb-2 text-black">
            9. Updates to This Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page.
          </p>
        </div>

      </div>

      <Testimonials />
      <FAQSection />
<FloatingContact isHome={true} />
    </div>
  );
}