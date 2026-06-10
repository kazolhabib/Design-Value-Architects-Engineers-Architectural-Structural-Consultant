"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderInternal from "@/components/HeaderInternal";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TitleReveal from "@/components/TitleReveal";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Internal Page Header */}
      <HeaderInternal />

      {/* Main Content: About Us Hero Section */}
      <main className="flex-1 pt-38 pb-20 sm:pb-24 lg:pb-32 bg-white overflow-hidden">
        <div className="container-custom">
          {/* Main Grid: Left vertical image, right overlapping content block */}
          <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-end relative">
            
            {/* Left Column: Construction Site Vertical Image */}
            <div className="col-span-12 lg:col-span-5 relative z-0">
              <Reveal duration={1.1} y={40}>
                <div className="relative w-full aspect-[3/3.8] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/about-construction.jpg"
                    alt="DVAE Construction Site Workers"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Column: Overlapping content block */}
            <div className="col-span-12 lg:col-span-7 z-10 flex flex-col">
              
              {/* Title Section: Overlaps construction image on desktop */}
              <div className="mb-6 lg:mb-10 pointer-events-none flex flex-col">
                <TitleReveal
                  lines={["ABOUT STORIES"]}
                  as="h1"
                  className="font-display font-extrabold text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.95] text-black tracking-tight uppercase lg:-ml-32 xl:-ml-48"
                />
                <TitleReveal
                  lines={["CONSTRUCTION"]}
                  as="h1"
                  delay={0.12}
                  className="font-display font-extrabold text-[3rem] sm:text-[4.75rem] md:text-[6rem] lg:text-[6.5rem] leading-[0.95] text-[#ff5e14] tracking-tight uppercase lg:ml-24 xl:ml-36"
                />
              </div>

              {/* Sub-grid: Text details & isometric rendering side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-end">
                
                {/* Paragraph Details & EXPLORE SERVICES Button */}
                <div className="flex flex-col gap-8">
                  <Reveal duration={0.8} delay={0.2} y={30}>
                    <p className="text-gray-600 text-[0.9375rem] leading-relaxed max-w-[24rem]">
                      Design Value Architects & Engineers (DVAE) was established in the year 2008 as a premier consultancy organization providing architectural & structural consultancy with detailed planning, design and engineering for varied and diverse discipline of projects. Its professional achievements include a large number of consultancy assignments.
                    </p>
                  </Reveal>

                  <Reveal duration={0.8} delay={0.3} y={20}>
                    <div>
                      <Link href="/our-services">
                        <span className="bg-black text-white hover:bg-[#ff5e14] transition-colors duration-300 font-bold py-4 px-8 uppercase tracking-wider text-[0.8125rem] border border-black hover:border-[#ff5e14] cursor-pointer inline-flex items-center justify-center">
                          EXPLORE SERVICES
                        </span>
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Right Side: Isometric 3D Render Image */}
                <div className="relative w-full">
                  <Reveal duration={1.0} delay={0.25} y={40}>
                    <div className="relative w-full aspect-[1.1] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                      <Image
                        src="/assets/uploads/2025/07/review-intirior.jpg"
                        alt="Mezzanine Loft Apartment Layout rendering"
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Reveal>
                </div>

              </div>

            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
