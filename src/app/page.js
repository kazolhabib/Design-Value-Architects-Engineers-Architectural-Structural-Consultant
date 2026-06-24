import Image from "next/image";
import Link from "next/link";
import HeaderHome from "@/components/HeaderHome";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TitleReveal from "@/components/TitleReveal";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import TestimonialSlider from "@/components/TestimonialSlider";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Home Page Header */}
      <HeaderHome />

      {/* Hero Section */}
      <Hero />

      {/* Featured Work Section */}
      <section id="featured-work" className="py-16 sm:py-20 lg:py-33 bg-white">
        <div className="container-custom">
          {/* Top Row: Title + Description */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-14 lg:mb-20">
            {/* Left: Label + Big Title */}
            <div>
              <Reveal duration={0.8} y={20}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[0.75rem] sm:text-[0.8125rem] font-bold text-black-2 tracking-[0.2em] uppercase">
                    FEATURED WORK
                  </span>
                  <div className="w-12 h-[2px] bg-primary" />
                </div>
              </Reveal>
              <TitleReveal
                lines={["OUR CREATIVE", "WORK"]}
                as="h2"
                delay={0.1}
                className="font-display font-semibold text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[0.95] text-black-2 tracking-tight uppercase"
              />
            </div>

            {/* Right: Description Paragraph */}
            <Reveal duration={0.8} delay={0.2} y={30}>
              <p className="text-gray-600 text-[1.125rem] leading-relaxed lg:max-w-[28rem] xl:max-w-[32rem] lg:pt-4">
                DVAE specializes in the provision of design, construction supervision and project management for clients in the governmental, private and public sectors and offers comprehensive package of services to its clients. So far Design Value Architects & Engineers DVAE has completed more than 650 projects.
              </p>
            </Reveal>
          </div>

          {/* Project Grid — exact layout matching screenshot */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 items-start mb-16 md:mb-24 lg:mb-30">
            {/* Left: Ashulia Complex (larger, taking 7 columns) */}
            <Reveal duration={0.9} delay={0.1} y={40} className="col-span-12 md:col-span-7">
              <div className="group">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/3a-copy-scaled.jpg"
                    alt="Ashulia Complex"
                    fill
                    loading="eager"
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
                    src="/assets/uploads/2025/07/Fornt-01-1536x2048.png"
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
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 items-start mb-16 md:mb-24 lg:mb-30">
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
              <Link href="/about-us" className="btn-hover-cropping bg-black text-white font-semibold rounded-full py-5 px-11 text-[0.90rem] tracking-wider uppercase border border-black cursor-pointer inline-flex items-center justify-center">
                <span className="relative z-10">SEE MORE</span>
              </Link>
            </Reveal>
          </div>

          {/* Third Row: Stats + Noah City Center */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-10 md:items-stretch items-start mb-16 md:mb-24 lg:mb-30">
            {/* Left: Stats Block */}
            <Reveal duration={0.9} delay={0.1} y={40} className="col-span-12 md:col-span-4 flex flex-col justify-between md:h-full pb-8">
              <div className="flex items-center gap-5">
                <span className="text-[1rem] font-sans font-medium text-black tracking-wide uppercase">
                  WHY WE&apos;RE BEST
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
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/ext6-copy-1536x1023.jpg"
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
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-y-12 md:gap-y-0 gap-x-6 lg:gap-x-[4.75rem] items-start">
            {/* Left: Chuadanga Police Shopping Mall (larger, taking 7 columns) */}
            <Reveal duration={0.9} delay={0.1} y={40}>
              <div className="group">
                <div className="relative w-full aspect-[20/13] overflow-hidden bg-gray-100">
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
            <Reveal duration={0.9} delay={0.3} y={50}>
              <div className="group">
                <div className="relative w-full aspect-[18/25] overflow-hidden bg-gray-100">
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
            <Link href="/our-project" className="btn-hover-cropping bg-black text-white font-bold rounded-full py-5 px-10 text-[0.8125rem] tracking-wider uppercase border border-black cursor-pointer inline-flex items-center justify-center">
              <span className="relative z-10">VIEW ALL WORKS</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSlider />

      {/* Full-width Cover Image */}
      <div className="relative w-full h-[12.5rem] sm:h-[22rem] md:h-[27rem] lg:h-[33rem] xl:h-[37.5rem] overflow-hidden">
        <Image
          src="/assets/uploads/2025/07/TOP-scaled.jpg"
          alt="Design Value Outdoor Terrace Banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="container-custom">
          {/* Top Row: Title */}
          <div className="mb-14 lg:mb-20">
            <div>
              <Reveal duration={0.8} y={20}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-base font-medium text-black-2 tracking-[0.2em] uppercase">
                    FEATURED WORK
                  </span>
                  <div className="w-12 h-[2px] bg-black" />
                </div>
              </Reveal>
              <TitleReveal
                lines={["WE’RE PROVIDING", "EXCLUSIVE ARCH", "SERVICE"]}
                as="h2"
                delay={0.1}
                className="font-display font-semibold text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[0.95] text-black-2 tracking-tight uppercase"
              />
            </div>
          </div>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 items-start">
            {/* Left Column */}
            <div className="flex flex-col">
              {/* 01 ARCHITECTURAL DESIGN */}
              <Reveal duration={0.8} delay={0.1} y={30}>
                <Link href="/our-services" className="group flex items-center justify-between py-5 sm:py-6 border-t border-gray-200 cursor-pointer">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-gray-400 text-[0.8125rem] sm:text-[0.875rem] font-sans font-semibold tracking-wider">
                      01
                    </span>
                    <span className="text-black-2 font-display font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] uppercase tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      ARCHITECTURAL DESIGN
                    </span>
                  </div>
                  <svg className="w-4.5 h-4.5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </Link>
              </Reveal>
              
              {/* 02 PROJECT PLANNING */}
              <Reveal duration={0.8} delay={0.2} y={30}>
                <Link href="/our-services" className="group flex items-center justify-between py-5 sm:py-6 border-t border-gray-200 cursor-pointer">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-gray-400 text-[0.8125rem] sm:text-[0.875rem] font-sans font-semibold tracking-wider">
                      02
                    </span>
                    <span className="text-black-2 font-display font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] uppercase tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      PROJECT PLANNING
                    </span>
                  </div>
                  <svg className="w-4.5 h-4.5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </Link>
              </Reveal>

              {/* 03 INTERIOR DESIGN */}
              <Reveal duration={0.8} delay={0.3} y={30}>
                <Link href="/our-services" className="group flex items-center justify-between py-5 sm:py-6 border-t border-b border-gray-200 cursor-pointer">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-gray-400 text-[0.8125rem] sm:text-[0.875rem] font-sans font-semibold tracking-wider">
                      03
                    </span>
                    <span className="text-black-2 font-display font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] uppercase tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      INTERIOR DESIGN
                    </span>
                  </div>
                  <svg className="w-4.5 h-4.5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </Link>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              {/* 04 RENOVATION */}
              <Reveal duration={0.8} delay={0.1} y={30}>
                <Link href="/our-services" className="group flex items-center justify-between py-5 sm:py-6 border-t-0 md:border-t border-gray-200 cursor-pointer">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-gray-400 text-[0.8125rem] sm:text-[0.875rem] font-sans font-semibold tracking-wider">
                      04
                    </span>
                    <span className="text-black-2 font-display font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] uppercase tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      RENOVATION
                    </span>
                  </div>
                  <svg className="w-4.5 h-4.5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </Link>
              </Reveal>

              {/* 05 HISTORIC PREVENTION */}
              <Reveal duration={0.8} delay={0.2} y={30}>
                <Link href="/our-services" className="group flex items-center justify-between py-5 sm:py-6 border-t border-gray-200 cursor-pointer">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-gray-400 text-[0.8125rem] sm:text-[0.875rem] font-sans font-semibold tracking-wider">
                      05
                    </span>
                    <span className="text-black-2 font-display font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] uppercase tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      HISTORIC PREVENTION
                    </span>
                  </div>
                  <svg className="w-4.5 h-4.5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </Link>
              </Reveal>

              {/* 06 VISUALIZATION */}
              <Reveal duration={0.8} delay={0.3} y={30}>
                <Link href="/our-services" className="group flex items-center justify-between py-5 sm:py-6 border-t border-gray-200 border-b cursor-pointer">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-gray-400 text-[0.8125rem] sm:text-[0.875rem] font-sans font-semibold tracking-wider">
                      06
                    </span>
                    <span className="text-black-2 font-display font-bold text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] uppercase tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      VISUALIZATION
                    </span>
                  </div>
                  <svg className="w-4.5 h-4.5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Centered CTA Banner */}
          <div className="text-center pt-24 pb-8 sm:pt-28 md:pt-36">
            <TitleReveal
              lines={["READY TO BUILD YOUR", "DREAM TOGETHER?"]}
              as="h2"
              className="font-display font-semibold text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-black leading-tight uppercase tracking-tight mb-8 max-w-4xl mx-auto"
            />
            <Reveal duration={0.8} delay={0.1} y={20}>
              <Link href="/contact-us" className="btn-hover-cropping bg-black text-white font-bold rounded-full py-4.5 px-9 text-[0.8125rem] tracking-wider uppercase border border-black cursor-pointer inline-flex items-center justify-center">
                <span className="relative z-10">GET ESTIMATED RATE</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <Marquee />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
