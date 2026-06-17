"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import HeaderInternal from "@/components/HeaderInternal";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Internal Page Header (as per user rule: First header is shown on all pages except home) */}
      <HeaderInternal />

      {/* 404 Main Area */}
      <main className="flex-1 flex items-center pt-24 py-20 relative overflow-hidden bg-white-2">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Abstract Architectural Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-[45rem] mx-auto text-center">
            
            {/* Animated 404 Number */}
            <Reveal duration={0.8} y={30} scale={0.9}>
              <div className="font-display font-bold text-[8rem] md:text-[12rem] text-black-2 leading-none select-none tracking-tighter">
                404
              </div>
            </Reveal>

            {/* Error Message */}
            <Reveal duration={0.8} delay={0.2} y={30}>
              <h1 className="font-display font-bold text-[1.75rem] md:text-[2.5rem] text-black-2 mt-4 mb-6 leading-tight">
                Oops! The Page You Are Looking For <br className="hidden sm:inline" />
                <span className="text-primary">Cannot Be Found</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal duration={0.8} delay={0.4} y={20}>
              <p className="text-gray-600 text-[1rem] leading-relaxed mb-10 max-w-[32rem] mx-auto">
                The link you followed might be broken, or the page may have been removed. Let&apos;s get you back on track to exploring our architectural and structural designs.
              </p>
            </Reveal>

            {/* Actions */}
            <Reveal duration={0.8} delay={0.6} y={10}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/">
                  <Button className="bg-black hover:bg-primary text-white font-bold rounded-lg px-8 py-4 text-[0.9375rem] w-full sm:w-auto transition-colors duration-300">
                    Go Back Home
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button className="bg-transparent border border-gray-300 hover:border-black text-black-2 font-bold rounded-lg px-8 py-4 text-[0.9375rem] w-full sm:w-auto transition-colors duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Reveal>
            
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
