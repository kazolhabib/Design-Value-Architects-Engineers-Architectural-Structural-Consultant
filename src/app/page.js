import Image from "next/image";
import { Button } from "@heroui/react";
import HeaderHome from "@/components/HeaderHome";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";

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
                <h2 className="font-display font-bold text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[0.95] text-black-2 tracking-tight uppercase">
                  OUR CREATIVE<br />WORK
                </h2>
              </div>
            </Reveal>

            {/* Right: Description Paragraph */}
            <Reveal duration={0.8} delay={0.2} y={30}>
              <p className="text-gray-600 text-[0.9375rem] lg:text-[1rem] leading-relaxed lg:max-w-[28rem] xl:max-w-[32rem] lg:pt-4">
                DVAE specializes in the provision of design, construction supervision and project management for clients in the governmental, private and public sectors and offers comprehensive package of services to its clients. So far Design Value Architects & Engineers DVAE has completed more than 650 projects.
              </p>
            </Reveal>
          </div>

          {/* Project Grid — offset layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-end">
            {/* Left: Ashulia Complex (larger) */}
            <Reveal duration={0.9} delay={0.1} y={40}>
              <div className="group">
                <div className="relative w-full aspect-[4/3.2] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/3a-copy-scaled.jpg"
                    alt="Ashulia Complex"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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

            {/* Right: Miladri (portrait, offset down) */}
            <Reveal duration={0.9} delay={0.3} y={50}>
              <div className="group md:mt-16 lg:mt-24">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/uploads/2025/07/milari.png"
                    alt="Miladri"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
