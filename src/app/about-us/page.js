"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderInternal from "@/components/HeaderInternal";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TitleReveal from "@/components/TitleReveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";

const team = [
  {
    name: "Asraful Alam Nasim",
    role: "Architect",
    image: "/assets/uploads/2025/07/DSC_0953-1.jpg",
    social: "Facebook",
    link: "https://www.facebook.com/designvaluebd/"
  },
  {
    name: "MD. Naimur Rahman",
    role: "Office Attendant",
    image: "/assets/uploads/2025/07/naeem-jpg.jpg",
    social: "Twitter",
    link: "#"
  },
  {
    name: "Romanoor Rahman Roman",
    role: "Sub Assistant Architect",
    image: "/assets/uploads/2025/07/IMG-20240110-WA0008-copy-2.jpg",
    social: "LinkedIn",
    link: "#"
  },
  {
    name: "Abdullah Al Mim",
    role: "Sub Assistant Eng.",
    image: "/assets/uploads/2025/07/Abdullah-al-mim-23.jpg",
    social: "Twitter",
    link: "#"
  },
  {
    name: "Md. Ariful Islam",
    role: "Structural Engineer",
    image: "/assets/uploads/2025/07/Screenshot-2025-07-28-160902.png",
    social: "LinkedIn",
    link: "#"
  },
  {
    name: "Md. Mahbub Sadik",
    role: "Drawing & 3D Visualization",
    image: "/assets/uploads/2025/07/Screenshot-2025-07-28-155447.png",
    social: "Facebook",
    link: "#"
  }
];

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Internal Page Header */}
      <HeaderInternal />

      {/* Main Content */}
      <main className="flex-1 bg-white overflow-hidden">
        {/* About Us Hero Section */}
        <section className="pt-38 pb-20 sm:pb-24 lg:pb-32 bg-white">
          <div className="container-custom">
            {/* Main Grid: Left vertical image, right overlapping content block */}
            <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-end relative">
              
              {/* Left Column: Construction Site Vertical Image */}
              <div className="hidden lg:block lg:col-span-5 relative z-0">
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
                    className="font-display font-medium text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] text-black tracking-tight uppercase lg:-ml-32 xl:-ml-48"
                  />
                  <TitleReveal
                    lines={["CONSTRUCTION"]}
                    as="h1"
                    delay={0.12}
                    className="font-display font-medium text-[3rem] sm:text-[4.75rem] md:text-[6rem] lg:text-[6.5rem] leading-[0.95] text-[#ff5e14] tracking-tight uppercase lg:ml-24 xl:ml-36"
                  />
                </div>

                {/* Sub-grid: Text details & isometric rendering side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-end">
                  
                  {/* Paragraph Details & EXPLORE SERVICES Button */}
                  <div className="flex flex-col gap-8">
                    <Reveal duration={0.8} delay={0.2} y={30}>
                      <p className="text-gray-700 text-base leading-relaxed max-w-[24rem]">
                        Design Value Architects & Engineers (DVAE) was established in the year 2008 as a premier consultancy organization providing architectural & structural consultancy with detailed planning, design and engineering for varied and diverse discipline of projects. Its professional achievements include a large number of consultancy assignments.
                      </p>
                    </Reveal>

                    <Reveal duration={0.8} delay={0.3} y={20}>
                      <div>
                        <Link href="/our-services">
                          <span className="btn-hover-cropping-orange bg-black text-white font-bold py-4 px-8 uppercase tracking-wider text-[0.8125rem] border border-black cursor-pointer inline-flex items-center justify-center">
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
        </section>

        {/* Stats & Timeline Section */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Title & Timeline */}
              <div className="lg:col-span-7 flex flex-col">
                <Reveal duration={0.8} y={30}>
                  <h2 className="font-display font-medium text-3xl md:text-[2.25rem] leading-[1.2] text-black tracking-tight uppercase mb-12 max-w-[32rem]">
                    CREATING TIMELESS SPACES WITH PASSION SINCE 2008
                  </h2>
                </Reveal>

                {/* Vertical Timeline */}
                <div className="relative flex flex-col gap-8 mt-4">
                  
                  {/* Vertical timeline line */}
                  <div className="absolute left-[7.5rem] top-8 bottom-8 w-[1px] bg-gray-200 z-0 hidden sm:block" />

                  {/* Timeline Item 1 */}
                  <Reveal duration={0.8} delay={0.1} y={25}>
                    <div className="grid grid-cols-1 sm:grid-cols-[5.5rem_4rem_1fr] gap-y-4 sm:gap-y-0 gap-x-2 items-center relative z-10">
                      <div className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] py-2.5 px-4 text-center font-display font-semibold text-xs tracking-wider text-black-3 select-none">
                        DVAE
                      </div>
                      <div className="flex justify-center text-gray-400 font-sans text-lg relative bg-white py-2 select-none">
                        →
                      </div>
                      <div className="bg-white border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200/60 transition-all duration-300">
                        <p className="text-gray-600 text-[0.9375rem] leading-relaxed">
                          is staffed with 15 experienced, skilled and qualified professionals with knowledge of modern design and construction methods comprising of Architectural, Structural Engineers, Electrical Engineers and Plumbing & Sanitary Engineers of various disciplines.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* Timeline Item 2 */}
                  <Reveal duration={0.8} delay={0.2} y={25}>
                    <div className="grid grid-cols-1 sm:grid-cols-[5.5rem_4rem_1fr] gap-y-4 sm:gap-y-0 gap-x-2 items-center relative z-10">
                      <div className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] py-2.5 px-4 text-center font-display font-semibold text-xs tracking-wider text-black-3 select-none">
                        DVAE
                      </div>
                      <div className="flex justify-center text-gray-400 font-sans text-lg relative bg-white py-2 select-none">
                        →
                      </div>
                      <div className="bg-white border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200/60 transition-all duration-300">
                        <p className="text-gray-600 text-[0.9375rem] leading-relaxed">
                          specializes in the provision of design, construction supervision and project management for clients in the governmental, private and public sectors and offers comprehensive package of services to its clients. So far (DVAE) has completed more than 650 projects.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* Timeline Item 3 */}
                  <Reveal duration={0.8} delay={0.3} y={25}>
                    <div className="grid grid-cols-1 sm:grid-cols-[5.5rem_4rem_1fr] gap-y-4 sm:gap-y-0 gap-x-2 items-center relative z-10">
                      <div className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] py-2.5 px-4 text-center font-display font-semibold text-xs tracking-wider text-black-3 select-none">
                        DVAE
                      </div>
                      <div className="flex justify-center text-gray-400 font-sans text-lg relative bg-white py-2 select-none">
                        →
                      </div>
                      <div className="bg-white border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200/60 transition-all duration-300">
                        <p className="text-gray-600 text-[0.9375rem] leading-relaxed">
                          aims at being known as a multidisciplinary consulting firm with the ability to complete projects timely and successfully with over 15 years in the consultancy services. (DVAE) has become one of the well-reputed architectural and structural design consultancy firms in Dhaka, Bangladesh.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                </div>
              </div>

              {/* Right Column: Stats Grid */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full relative py-2 lg:py-6">
                
                {/* Background Architectural Sketch */}
                <div className="absolute right-0 bottom-0 w-[85%] md:w-[70%] lg:w-[90%] aspect-[549/700] pointer-events-none select-none z-0 opacity-[0.04] mix-blend-multiply">
                  <Image
                    src="/assets/uploads/2025/07/HomeLink-1.png"
                    alt="Architectural House Sketch Background"
                    fill
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    className="object-contain object-right-bottom"
                  />
                </div>

                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative z-10 mb-16">
                  
                  {/* Stat 1 */}
                  <Reveal duration={0.7} y={20}>
                    <div className="border-b border-gray-100 pb-8 flex flex-col">
                      <span className="font-display font-medium text-[3.5rem] md:text-[4.5rem] leading-none text-black-2 tracking-tight">
                        <Counter target={17} />
                      </span>
                      <span className="font-display font-bold text-[0.75rem] tracking-[0.15em] text-[#666666] uppercase mt-3">
                        YEARS EXPERIENCE
                      </span>
                    </div>
                  </Reveal>

                  {/* Stat 2 */}
                  <Reveal duration={0.7} delay={0.1} y={20}>
                    <div className="border-b border-gray-100 pb-8 flex flex-col">
                      <span className="font-display font-medium text-[3.5rem] md:text-[4.5rem] leading-none text-black-2 tracking-tight">
                        <Counter target={650} suffix=" +" />
                      </span>
                      <span className="font-display font-bold text-[0.75rem] tracking-[0.15em] text-[#666666] uppercase mt-3">
                        PROJECTS COMPLETED
                      </span>
                    </div>
                  </Reveal>

                  {/* Stat 3 */}
                  <Reveal duration={0.7} delay={0.2} y={20}>
                    <div className="border-b border-gray-100 pb-8 flex flex-col">
                      <span className="font-display font-medium text-[3.5rem] md:text-[4.5rem] leading-none text-black-2 tracking-tight">
                        <Counter target={98} suffix="%" />
                      </span>
                      <span className="font-display font-bold text-[0.75rem] tracking-[0.15em] text-[#666666] uppercase mt-3">
                        DELIVERED BELOW BUDGET
                      </span>
                    </div>
                  </Reveal>

                  {/* Stat 4 */}
                  <Reveal duration={0.7} delay={0.3} y={20}>
                    <div className="border-b border-gray-100 pb-8 flex flex-col">
                      <span className="font-display font-medium text-[3.5rem] md:text-[4.5rem] leading-none text-black-2 tracking-tight">
                        <Counter target={21} suffix="M" />
                      </span>
                      <span className="font-display font-bold text-[0.75rem] tracking-[0.15em] text-[#666666] uppercase mt-3">
                        TOTAL MANHOURS EMPLOYED
                      </span>
                    </div>
                  </Reveal>

                </div>

                {/* Contact Us Underlined Link */}
                <Reveal duration={0.8} delay={0.4} y={15}>
                  <div className="relative z-10 self-start">
                    <Link href="/contact-us" className="inline-block group">
                      <span className="font-display font-semibold text-[0.875rem] tracking-widest text-black-2 uppercase transition-colors group-hover:text-[#ff5e14] duration-300">
                        Let&apos;s Contact Us
                      </span>
                      <div className="h-[2.5px] bg-black-2 w-full mt-1.5 transition-colors group-hover:bg-[#ff5e14] duration-300" />
                    </Link>
                  </div>
                </Reveal>

              </div>

            </div>
          </div>
        </section>

        {/* Our Vision and Philosophy Section */}
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100/80 relative overflow-hidden">
          {/* Background Architectural Sketch */}
          <div className="absolute right-0 top-0 w-[50%] md:w-[35%] lg:w-[40%] aspect-[549/700] pointer-events-none select-none z-0 opacity-[0.03] mix-blend-multiply">
            <Image
              src="/assets/uploads/2025/07/HomeLink-1.png"
              alt="Architectural Sketch Background"
              fill
              sizes="30vw"
              className="object-contain object-right-top"
            />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Vision Images & Icon Grid */}
              <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-end w-full">
                {/* Left Sub-column: Small Square Image + Spacing + Bottom Icon */}
                <div className="col-span-5 flex flex-col justify-between h-full min-h-[300px] md:min-h-[420px]">
                  {/* Top Square Image: safety helmet & blueprints */}
                  <Reveal duration={0.9} y={20} className="w-full">
                    <div className="relative w-full aspect-square overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/60">
                      <Image
                        src="/assets/uploads/2025/07/c0109566dad6d6558801b9c848c26624.jpg"
                        alt="On-site Safety Helmet and Blueprints"
                        fill
                        sizes="(max-width: 768px) 40vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>

                  {/* Bottom Floor-plan Icon */}
                  <Reveal duration={0.8} delay={0.2} y={15} className="self-start pl-2">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/assets/uploads/2024/08/interior-icon.svg"
                        alt="Floor Plan Icon"
                        width={60}
                        height={60}
                        className="object-contain opacity-70"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Right Sub-column: Tall Portrait Image */}
                <div className="col-span-7 h-full">
                  <Reveal duration={1.0} delay={0.1} y={30}>
                    <div className="relative w-full aspect-[3/4.6] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/60">
                      <Image
                        src="/assets/uploads/2025/07/ff17737bd56b548d8a125fb6aba811be.jpg"
                        alt="Architect Drafting Blueprint Design"
                        fill
                        sizes="(max-width: 768px) 60vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Right Column: Title, Paragraph & Shifted Bottom Image */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-6 max-w-[28rem] lg:max-w-[32rem]">
                  <TitleReveal
                    lines={["OUR VISION AND", "PHILOSOPHY"]}
                    as="h2"
                    className="font-display font-medium text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-[1.1] text-black tracking-tight uppercase"
                  />
                  <Reveal duration={0.8} delay={0.15} y={15}>
                    <p className="text-gray-600 text-[0.875rem] sm:text-base leading-relaxed font-sans">
                      At DesignValue Interior, our vision is to be a leading interior design firm known for transform spaces strive to create designs that not onl exceed our client expectations.
                    </p>
                  </Reveal>
                </div>

                {/* Landscape/Square Image Shifted to the Right */}
                <div className="w-[70%] md:w-[60%] lg:w-[68%] self-end mt-12">
                  <Reveal duration={1.0} delay={0.25} y={30}>
                    <div className="relative w-full aspect-square overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/60 bg-gray-50">
                      <Image
                        src="/assets/uploads/2025/07/2756fe4138e2be83119452fb4c1f51ca.jpg"
                        alt="Designing Architectural Models"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experienced Engineer Team Section */}
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100/50">
          <div className="container-custom">
            {/* Header: Centered */}
            <div className="text-center mx-auto mb-16 md:mb-20 max-w-2xl">
              <TitleReveal
                lines={["EXPERIENCED ENGINEER"]}
                as="h2"
                className="font-display font-medium text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-none text-black tracking-tight uppercase"
              />
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {team.map((member, index) => (
                <Reveal key={member.name} duration={0.8} delay={index * 0.08} y={30}>
                  <div className="flex gap-6 items-center border-t border-b border-gray-100 py-8 group transition-colors duration-300">
                    
                    {/* Left side: Aspect Square Image */}
                    <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-[140px] lg:h-[140px] shrink-0 overflow-hidden bg-gray-50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 110px, (max-width: 1024px) 130px, 140px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Right side: Name, Role, and Social Button */}
                    <div className="flex flex-col justify-between h-[110px] sm:h-[130px] lg:h-[140px] py-1 flex-1">
                      <div>
                        <h3 className="font-display font-bold text-[0.875rem] sm:text-[0.9375rem] text-black-2 uppercase tracking-wide leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-[0.6875rem] sm:text-[0.75rem] tracking-wider uppercase font-sans font-semibold mt-1">
                          {member.role}
                        </p>
                      </div>
                      
                      {/* Social Pill Button */}
                      <div className="mt-auto self-start">
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gray-50/60 hover:bg-[#ff5e14] hover:text-white hover:border-[#ff5e14] text-gray-500 border border-gray-200/80 rounded-full px-3.5 py-1 text-[0.625rem] sm:text-[0.6875rem] font-bold uppercase transition-all duration-300"
                        >
                          {member.social === "Facebook" && (
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 320 512">
                              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                          )}
                          {member.social === "Twitter" && (
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 512 512">
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          )}
                          {member.social === "LinkedIn" && (
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 448 512">
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                          )}
                          <span>{member.social}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* Partners Section (Marquee) */}
        <Marquee />

        {/* CTA Banner Section */}
        <section className="relative w-full h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/assets/uploads/2025/07/TOP-scaled.jpg"
            alt="Design Value Outdoor Terrace Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <div className="container-custom relative z-20 text-center flex flex-col items-center gap-8 px-4">
            <TitleReveal
              lines={["READY TO BUILD YOUR", "DREAM TOGETHER?"]}
              as="h2"
              className="font-display font-semibold text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-white leading-[1.1] uppercase tracking-tight max-w-4xl mx-auto"
            />
            <Reveal duration={0.8} delay={0.2} y={20}>
              <Link href="/contact-us">
                <span className="btn-hover-cropping-orange bg-white text-black font-bold py-4 px-8 uppercase tracking-wider text-[0.8125rem] cursor-pointer inline-flex items-center justify-center border border-white">
                  GET ESTIMATED RATE
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
