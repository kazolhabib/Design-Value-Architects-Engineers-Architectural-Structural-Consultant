import Image from "next/image";
import { Button } from "@heroui/react";
import HeaderHome from "@/components/HeaderHome";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Home Page Header */}
      <HeaderHome />

      {/* Hero Section */}
      <Hero />

      {/* Featured Work Section */}
      <section id="featured-work" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          {/* Top Row: Title + Description */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-14 lg:mb-20">
            {/* Left: Label + Big Title */}
            <Reveal duration={0.8} y={30}>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[0.75rem] sm:text-[0.8125rem] font-bold text-black-2 tracking-[0.2em] uppercase">
                    FEATURED WORK
                  </span>
                  <div className="w-12 h-[2px] bg-primary" />
                </div>
                <h2 className="font-display font-semibold text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[0.95] text-black-2 tracking-tight uppercase">
                  OUR CREATIVE<br />WORK
                </h2>
              </div>
            </Reveal>

            {/* Right: Description Paragraph */}
            <Reveal duration={0.8} delay={0.2} y={30}>
              <p className="text-gray-600 text-[1.125rem] leading-relaxed lg:max-w-[28rem] xl:max-w-[32rem] lg:pt-4">
                DVAE specializes in the provision of design, construction supervision and project management for clients in the governmental, private and public sectors and offers comprehensive package of services to its clients. So far Design Value Architects & Engineers DVAE has completed more than 650 projects.
              </p>
            </Reveal>
          </div>

          {/* Project Grid — exact layout matching screenshot */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 items-start mb-16 md:mb-24 lg:mb-28">
            {/* Left: Ashulia Complex (larger, taking 7 columns) */}
            <Reveal duration={0.9} delay={0.1} y={40} className="col-span-12 md:col-span-7">
              <div className="group">
                <div className="relative w-full aspect-[4/3.2] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/3a-copy-scaled.jpg"
                    alt="Ashulia Complex"
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-black-2 uppercase tracking-wide">
                    ASHULIA COMPLEX
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Ashulia, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Miladri (portrait, taking 4 columns, starting at column 9, aligned top) */}
            <Reveal duration={0.9} delay={0.3} y={50} className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="group">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/milari.png"
                    alt="Miladri"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-primary uppercase tracking-wide">
                    MILADRI
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Bashundhara, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Second Row: Sara Aftab + Esdo + Info Block */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 items-start mb-16 md:mb-24 lg:mb-28">
            {/* Sara Aftab Tower */}
            <Reveal duration={0.9} delay={0.1} y={40} className="col-span-12 md:col-span-4">
              <div className="group">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/dara.png"
                    alt="Sara Aftab Tower"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-black-2 uppercase tracking-wide">
                    SARA AFTAB TOWER
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Adabor, Dhaka, Bangladesh.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Esdo House */}
            <Reveal duration={0.9} delay={0.2} y={40} className="col-span-12 md:col-span-4">
              <div className="group">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/esdo.png"
                    alt="Esdo House, Dhaka"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-black-2 uppercase tracking-wide">
                    ESDO HOUSE, DHAKA
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Adabor, Dhaka, Bangladesh.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Info Block */}
            <Reveal duration={0.9} delay={0.3} y={40} className="col-span-12 md:col-span-4 pt-2 lg:pl-8">
              <div className="flex items-center gap-5 mb-14 md:mb-26">
                <span className="text-[1rem] font-sans font-medium text-black tracking-wide uppercase">
                  SINCE 2008
                </span>
                <div className="w-24 h-[1px] bg-black" />
              </div>
              <h3 className="font-display font-medium text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.75rem] leading-[1.05] text-black tracking-tight uppercase mb-8">
                ARCHITECTURE.<br />PLANNING &<br />DESIGN
              </h3>
              <p className="text-gray-600 text-[0.9375rem] font-medium sm:text-lg leading-relaxed mb-10 max-w-[28rem]">
                DVAE was established in the year 2008 as a premier consultancy organization providing architectural & structural consultancy with detailed planning, design and engineering for varied and diverse discipline of projects. Its professional achievements include a large number of consultancy assignments.
              </p>
              <button className="btn-hover-cropping bg-black text-white font-semibold rounded-full py-5 px-11 text-[0.90rem] tracking-wider uppercase border border-black cursor-pointer inline-flex items-center justify-center">
                <span className="relative z-10">SEE MORE</span>
              </button>
            </Reveal>
          </div>

          {/* Third Row: Stats + Noah City Center */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 md:items-stretch items-start mb-16 md:mb-24 lg:mb-28">
            {/* Left: Stats Block */}
            <Reveal duration={0.9} delay={0.1} y={40} className="col-span-12 md:col-span-4 flex flex-col justify-between md:h-full pb-8">
              <div className="flex items-center gap-5">
                <span className="text-[1rem] font-sans font-medium text-black tracking-wide uppercase">
                  WHY WE'RE BEST
                </span>
                <div className="w-20 h-[1px] bg-black" />
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-12">
                {/* Stat 1 */}
                <div className=" ">
                  <div className="font-display font-medium text-[4rem] sm:text-[5rem] lg:text-[6.25rem] text-black leading-none mb-3">
                    <Counter target={35} />
                  </div>
                  <div className="text-black border-t border-gray-300 pt-3.5 text-[1.125rem] font-sans font-medium uppercase tracking-normal">
                    YEARS EXPERIENCE
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="">
                  <div className="font-display font-medium text-[4rem] sm:text-[5rem] lg:text-[6.25rem] text-black leading-none mb-3">
                    <Counter target={2} suffix="K+" />
                  </div>
                  <div className="text-black border-t border-gray-300 pt-3.5 text-[1.125rem] font-sans font-medium uppercase tracking-normal">
                    PROJECTS COMPLETED
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="">
                  <div className="font-display font-medium text-[4rem] sm:text-[5rem] lg:text-[6.25rem] text-black leading-none mb-3">
                    <Counter target={210} />
                  </div>
                  <div className="text-black border-t border-gray-300 pt-3.5 text-[1.125rem] font-sans font-medium uppercase tracking-normal">
                    TEAM MEMBERS
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="">
                  <div className="font-display font-medium text-[4rem] sm:text-[5rem] lg:text-[6.25rem] text-black leading-none mb-3">
                    <Counter target={180} />
                  </div>
                  <div className="text-black border-t border-gray-300 pt-3.5 text-[1.125rem] font-sans font-medium uppercase tracking-normal">
                    AWARDS WINNER
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Noah City Center */}
            <Reveal duration={0.9} delay={0.2} y={40} className="col-span-12 md:col-span-8">
              <div className="group">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/other/our-project/building.jpg"
                    alt="Noah City Center"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-black-2 uppercase tracking-wide">
                    NOAH CITY CENTER
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Saidpur, Bangladesh
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Fourth Row: Chuadanga Police Shopping Mall + Makka Shopping Mall */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 items-start">
            {/* Left: Chuadanga Police Shopping Mall (larger, taking 7 columns) */}
            <Reveal duration={0.9} delay={0.1} y={40} className="col-span-12 md:col-span-7">
              <div className="group">
                <div className="relative w-full aspect-[4/3.2] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/police-shopping.png"
                    alt="Chuadanga Police Shopping Mall"
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-black-2 uppercase tracking-wide">
                    CHUADANGA POLICE SHOPPING MALL
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Chuadanga, Bangladesh.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Makka Shopping Mall (portrait, taking 4 columns, starting at column 9, aligned top) */}
            <Reveal duration={0.9} delay={0.3} y={50} className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="group">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/makka.png"
                    alt="Makka Shopping Mall"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display font-bold text-[1.125rem] sm:text-[1.25rem] text-black-2 uppercase tracking-wide">
                    MAKKA SHOPPING MALL
                  </h3>
                  <p className="text-gray-500 text-[0.8125rem] sm:text-[0.875rem] mt-1 uppercase tracking-wider">
                    Newmarket, Dhaka, Bangladesh.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Centered Button: View All Works */}
          <Reveal duration={0.8} delay={0.1} y={20} className="flex justify-center mt-16 sm:mt-20 lg:mt-24">
            <button className="btn-hover-cropping bg-black text-white font-bold rounded-full py-5 px-10 text-[0.8125rem] tracking-wider uppercase border border-black cursor-pointer inline-flex items-center justify-center">
              <span className="relative z-10">VIEW ALL WORKS</span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSlider />

      {/* Full-width Cover Image */}
      <div className="relative w-full h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] overflow-hidden">
        <Image
          src="/assets/uploads/2025/07/TOP-scaled.jpg"
          alt="Design Value Outdoor Terrace Banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
