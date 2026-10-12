import Image from 'next/image';



export default function CommunicationMasterclass({features = [],head,para}) {
  return (
    <section className="bg-white py-12 md:py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <p className="text-gray-500 text-[18px] font-bold mb-2 font-satoshi">
        
{para}
        </p>
        
        <div className="relative inline-block mb-12 ">
          <h2 className="text-[32px] md:text-[56px] font-bold text-gray-900 tracking-tight leading-tight font-satoshi">
          {head}
          </h2>
          {/* Next.js Image for the brush stroke asset */}
  
        </div>

        {/* Feature Grid - Triangle Layout on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-12  max-w-sm md:max-w-none mx-auto">
          {features?.map((feature) => (
            <div 
              key={feature.id} 
              className={`flex flex-col md:flex-row items-center text-center 
                ${feature.mobileOrder} 
                /* Logic to make the first item span 2 columns on mobile to create the 'top' of the triangle */
                ${feature.id === 1 ? 'col-span-2 md:col-span-1' : 'col-span-1'}
              `}
            >
              {/* Question Mark Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2085b5] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-xl shadow-red-100">
                <span className="text-white text-2xl md:text-3xl font-bold">{feature.id}?</span>
              </div>
              <p className="text-gray-900 text-[18px] font-bold leading-snug px-2 font-satoshi">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}