import Image from 'next/image';
import Link from "next/link";


export default function HeroBanner({
  desktopSrc,
  mobileSrc,
  altText,
  desktopAspect = "aspect-[21/9]",
  mobileAspect = "aspect-[9/16]",
  className = "w-full px-4 py-22 md:px-10 lg:px-20",
  link
}) {
  return (
    <div className={className}>
       <Link href={link} className="block cursor-pointer">
      <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] shadow-2xl bg-white border border-gray-100">
        
        {/* DESKTOP VERSION: Hidden on mobile, shown on md screens (768px+) */}
        <div className={`hidden md:block relative ${desktopAspect} w-full`}>
          <Image
            src={desktopSrc}
            alt={altText}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 100vw"
          />
        </div>

        {/* MOBILE VERSION: Shown on mobile, hidden on md screens */}
        <div className={`md:hidden relative ${mobileAspect} w-full`}>
          <Image
            src={mobileSrc}
            alt={altText}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

      </div>
      </Link>
    </div>
  );
}