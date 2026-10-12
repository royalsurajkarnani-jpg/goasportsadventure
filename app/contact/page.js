
import ContactInfoSection from "../components/ContactInfoSection"
import FloatingContact from "../components/FloatingContact"
import ContactForm from "../components/Form"
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full min-h-screen gap-2'>
      {/* Background Image Section */}
      <div 
        className='w-full h-[40vh] text-white flex items-center justify-center bg-cover bg-center bg-no-repeat relative'
        style={{
          backgroundImage: "url('/contact-bg.jpg')", 
        }}
      >
        {/* Optional: Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 px-4 py-4 max-w-7xl mx-auto">
          <h1 className='text-[28px] text-center font-bold font-poppins lg:text-[50px] leading-tight'>
            We would love to speak with you.
          </h1>
          <p className='text-[18px] text-center font-light font-poppins lg:text-[24px] mt-2'>
            Feel free to reach out.
          </p>
        </div>
      </div>

      <ContactInfoSection/>
      <ContactForm/>
      <FloatingContact isHome={true} />
    </div>
  )
}

export default page