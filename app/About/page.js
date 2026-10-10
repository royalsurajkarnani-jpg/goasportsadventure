import ContactForm from '../components/Form'
import { Button } from '../components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FloatingContact from '../components/FloatingContact'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-white flex flex-col gap-5 overflow-hidden'>
      <div className='first flex flex-col w-full items-center gap-4 justify-center px-10'>
        <h1 className='text-[28px] font-semibold lg:text-[48px] text-center font-poppins'>Step into<br/>GoaSportsAdventure.in Where Every Journey Begins on <br/>Goa&apos;s Enchanting Shores</h1>
        <h2 className='text-[14px] text-center font-light font-poppins lg:text-[24px]'>At GoaSportsAdventure.in, we go beyond travel — we craft lasting memories that stay with you forever. Born from the passion of seasoned travelers and true Goan locals, our goal is to showcase the soul, charm, and energy of Goa to the world. We don&apos;t just offer tours; we curate immersive experiences that connect you with the heart of Goa — its golden beaches, lively markets, peaceful scenery, and pulse-pounding adventures.</h2>
        <Link href={`https://wa.me/+917678464517?text=I%20want%20to%20enquire%20about%20your%20Scuba%20packages`}>
     <Button
              type="submit"
              className="w-full md:w-40 bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-white font-semibold"
            >
              Chat With Us
            </Button>
        </Link>
      </div>
      <div className='border-2 border-black w-full h-[42vh] relative'>
        <Image src='/about.jpg' fill className='object-cover'/>
      </div>
          <div className="promise w-full h-full flex flex-col items-center justify-center gap-4 px-10">
        <h1 className='text-[28px] font-semibold lg:text-[48px] text-center font-poppins'>Our Journey</h1>
        <h2 className='text-[14px] text-center font-light font-poppins lg:text-[24px]'>Driven by a deep love for exploration and Goa&apos;s rich charm, GoaSportsAdventure.in began as a humble initiative and has blossomed into one of the region&apos;s top travel specialists. We Are One of the Region&apos;s Top Scuba Activities Specialist With 5 + Years of Experience our dedicated team designs personalized tour packages for every kind of traveler — from thrill-seekers and culture lovers to those in search of tranquility or romance.</h2>
      </div>
      <div className="promise w-full h-full flex flex-col items-center justify-center gap-4 px-10">
        <h1 className='text-[28px] font-semibold lg:text-[48px] text-center font-poppins'>Our Promises</h1>
        <h2 className='text-[14px] text-center font-light font-poppins lg:text-[24px]'>At GoaSportsAdventure.in, we&apos;re dedicated to offering more than just a vacation — we deliver experiences that embody the true spirit of Goa. From watching sunsets point at the Arabian Sea, to dancing through the buzzing nightlife, or uncovering the stories behind historic forts and sacred temples — we&apos;re here to make your adventure smooth, secure, and truly unforgettable.</h2>
      </div>
      <ContactForm/>
      <FloatingContact isHome={true} />
    </div>
  )
}

export default page