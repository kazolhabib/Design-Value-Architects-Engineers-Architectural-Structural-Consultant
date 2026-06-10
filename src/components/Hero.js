"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import TitleReveal from "./TitleReveal";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  // Auto-play video when modal opens
  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Auto-play blocked or failed:", err);
      });
    }
  }, [isVideoOpen]);

  return (
    <section className="relative w-full bg-[#fbfbfb] overflow-hidden min-h-[40rem] sm:min-h-[44rem] md:min-h-[48rem] lg:min-h-[55rem] xl:min-h-[58rem] flex items-stretch pt-[4.5rem]">
      {/* Pattern Background Grid lines */}
      <div
        className="absolute inset-0 bg-repeat-x pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: "url('/assets/uploads/2024/07/Pattern-scaled.png')",
          backgroundPosition: "top center",
          backgroundSize: "auto 100%",
        }}
      />

      {/* BG Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url('/assets/uploads/BG.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Right Video Block — absolutely positioned to touch right viewport edge (Desktop only) */}
      <div className="absolute right-0 top-[15rem] w-[34%] xl:w-[32%] z-20 hidden lg:block lg:pr-4">
        <Reveal duration={0.8} delay={0.5} y={35}>
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full aspect-[2.6] overflow-hidden cursor-pointer group shadow-xl"
          >
            <Image
              src="/assets/uploads/2025/07/design_n.jpg"
              alt="DVAE Row House Project"
              fill
              sizes="35vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

            {/* Play Button — large transparent circle with white border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5.5rem] h-[5.5rem] rounded-full border-2 border-white/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-10">
              <svg className="w-6 h-6 text-white fill-current translate-x-[2px]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col justify-between py-12 lg:py-25">

        {/* DESKTOP LAYOUT (hidden lg:grid grid-cols-12) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start w-full relative h-full flex-1">

          {/* 1. Large Left Building Image (spans columns 1 to 5 absolutely, but leaves space) */}
          <div className="absolute left-0 bottom-0 w-[38%] h-[96%] z-20 pointer-events-none">
            <Reveal duration={1.2} y={60}>
              <div className="relative w-full h-[45rem] xl:h-[50rem]">
                <Image
                  src="/assets/uploads/2025/07/Revised-20.10.2016-png.png"
                  alt="DVAE Tall Building Rendering"
                  fill
                  priority
                  sizes="(max-width: 1200px) 38vw, 32vw"
                  className="object-contain object-left-bottom drop-shadow-2xl"
                />
              </div>
            </Reveal>
          </div>

          {/* 2. Giant Overlapping Title (on top of building — z-30) */}
          <div className="absolute top-4 left-[22%] xl:left-[24%] z-30 select-none pointer-events-none">
            <TitleReveal
              lines={["ARCHI—", "TECTURE"]}
              as="h1"
              delay={0.15}
              className="font-display font-bold text-[7rem] xl:text-[7.85rem] leading-[0.9] text-[#0c0c0e]"
            />
          </div>

          {/* 3. Center Content Column (spans columns 6 to 9, pushed down below title) */}
          <div className="col-start-6 col-span-4 pt-[20rem] xl:pt-[24rem] flex flex-col gap-6 relative z-30">
            <Reveal duration={0.8} delay={0.3} y={20}>
              <div className="font-display font-semibold text-[1.75rem] text-black-2 tracking-[0.15em] uppercase">
                SINCE 2008
              </div>
            </Reveal>

            <Reveal duration={0.8} delay={0.4} y={30}>
              <p className="text-gray-600 text-[0.9375rem] xl:text-[1rem] leading-relaxed">
                DVAE is staffed with 15 experienced, skilled and qualified professionals with knowledge of modern design and construction methods comprising of Architectural, Structural Engineers, Electrical Engineers and Plumbing & Sanitary Engineers of various disciplines.
              </p>
            </Reveal>

            {/* Awarded Studio Card */}
            <Reveal duration={0.8} delay={0.5} y={30}>
              <div className="bg-black-3 text-white p-8 xl:p-10 relative overflow-hidden flex flex-col gap-6 shadow-xl border border-white/5 mt-6">
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none" />

                <div className="text-white">
                  <svg className="w-12 h-12" viewBox="0 0 416 512" fill="currentColor">
                    <path d="M0 32v119.2h64V96h107.2C284.6 96 352 176.2 352 255.9 352 332 293.4 416 171.2 416H0v64h171.2C331.9 480 416 367.3 416 255.9c0-58.7-22.1-113.4-62.3-154.3C308.9 56 245.7 32 171.2 32H0z" />
                  </svg>
                </div>

                <h3 className="font-display font-bold text-[1.0625rem] xl:text-[1.1875rem] leading-snug tracking-wide text-white uppercase max-w-[18.75rem]">
                  AN AWARDED ARCHITECTURE & ENGINEERS STUDIO IN BANGLADESH
                </h3>
              </div>
            </Reveal>
          </div>

          {/* 5. Far Right: Social Follow Bar (aligned bottom right) */}
          <div className="absolute bottom-8 right-0 flex flex-col items-center gap-6 z-20">
            <span className="text-[0.875rem] font-bold text-[#1a1a1a] tracking-[0.3em] uppercase select-none [writing-mode:vertical-rl]">
              FOLLOW
            </span>
            <div className="w-[1px] h-[3.5rem] bg-[#1a1a1a]/30" />
            <div className="flex flex-col gap-5 text-[#1a1a1a]">
              <a href="#" className="hover:text-black transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <svg className="w-[1.25rem] h-[1.25rem]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" className="hover:text-black transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <svg className="w-[1.25rem] h-[1.25rem]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.9 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-black transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <svg className="w-[1.25rem] h-[1.25rem]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/designvaluebd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-[1.25rem] h-[1.25rem]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (lg:hidden) */}
        <div className="lg:hidden flex flex-col gap-6 sm:gap-8 w-full relative z-10 px-1">
          {/* Building image */}
          <div className="hidden sm:flex w-full justify-center">
            <div className="relative w-[75%] sm:w-[65%] md:w-[50%] max-w-[22rem] md:max-w-[28rem] aspect-[4/5]">
              <Image
                src="/assets/uploads/2025/07/Revised-20.10.2016-png.png"
                alt="Building Rendering"
                fill
                priority
                sizes="(max-width: 640px) 75vw, (max-width: 768px) 65vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Title and since */}
          <div>
            <TitleReveal
              lines={["ARCHI—", "TECTURE"]}
              as="h1"
              className="font-display font-bold text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] leading-[0.9] text-black-2 tracking-tighter"
            />
            <div className="font-display font-semibold text-[0.875rem] sm:text-[1rem] text-black-2 tracking-widest uppercase mt-3 sm:mt-4">
              SINCE 2008
            </div>
          </div>

          {/* Video Popup Card */}
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer group shadow-md"
          >
            <Image
              src="/assets/uploads/2025/07/design_n.jpg"
              alt="DVAE Row House Project"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] rounded-full border-2 border-white flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current translate-x-[1px]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-[0.875rem] sm:text-[0.9375rem] leading-relaxed">
            DVAE is staffed with 15 experienced, skilled and qualified professionals with knowledge of modern design and construction methods comprising of Architectural, Structural Engineers, Electrical Engineers and Plumbing & Sanitary Engineers of various disciplines.
          </p>

          {/* Black Card */}
          <div className="bg-black-3 text-white p-5 sm:p-6 rounded-lg relative overflow-hidden flex flex-col gap-4 shadow-md">
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40" />
            <div className="text-white">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 416 512" fill="currentColor">
                <path d="M0 32v119.2h64V96h107.2C284.6 96 352 176.2 352 255.9 352 332 293.4 416 171.2 416H0v64h171.2C331.9 480 416 367.3 416 255.9c0-58.7-22.1-113.4-62.3-154.3C308.9 56 245.7 32 171.2 32H0z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-[0.9375rem] sm:text-[1rem] leading-snug uppercase">
              AN AWARDED ARCHITECTURE & ENGINEERS STUDIO IN BANGLADESH
            </h3>
          </div>

          {/* Mobile Social Follow links */}
          <div className="flex items-center gap-4 border-t border-gray-100 pt-5 justify-center">
            <span className="text-[0.75rem] font-bold text-gray-400 tracking-wider">FOLLOW US:</span>
            <div className="flex gap-4 text-gray-500 text-[0.8125rem]">
              <a href="#" className="hover:text-black transition-colors" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="hover:text-black transition-colors" aria-label="Instagram">Instagram</a>
              <a href="#" className="hover:text-black transition-colors" aria-label="Twitter">Twitter</a>
              <a
                href="https://www.facebook.com/designvaluebd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal (Popup Overlay) */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              onClick={() => setIsVideoOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-[56.25rem] bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl z-10 border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 hover:bg-black/60 hover:border-white/50 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close video"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <video
                ref={videoRef}
                src="/assets/videos/designvaluereels-1.mp4"
                controls
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
