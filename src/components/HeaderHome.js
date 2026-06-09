"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function HeaderHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-8 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/uploads/2024/07/designvaluelogo.png"
            alt="Design Value Logo"
            width={240}
            height={72}
            className="object-contain h-12 w-auto"
            priority
          />
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Phone Link (Underlined) */}
          <a
            href="tel:+8802223329893"
            className={`hidden sm:inline-block font-sans font-medium hover:text-primary transition-colors pb-0.5 text-[0.875rem] md:text-[0.9375rem] border-b ${
              scrolled
                ? "text-black-2 border-black hover:border-primary"
                : "text-black-2 border-black hover:border-primary"
            }`}
          >
            +88-02-223329893
          </a>

          {/* Contact Us Button (Pill shaped solid black with cropping hover effect) */}
          <Link
            id="contact-us-button"
            href="/contact-us"
            className="btn-hover-cropping bg-black text-white font-bold rounded-full py-2.5 px-6 md:px-8 text-[0.8125rem] md:text-[0.875rem] tracking-wider uppercase border border-black cursor-pointer inline-flex items-center justify-center"
          >
            <span className="relative z-10">CONTACT US</span>
          </Link>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex flex-col gap-1.5 justify-center items-center hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer ${
              scrolled ? "border-gray-200" : "border-gray-300"
            }`}
            aria-label="Open menu"
          >
            <span className="w-5 h-[2px] bg-black rounded" />
            <span className="w-5 h-[2px] bg-black rounded" />
          </button>
        </div>
      </div>

      {/* Global Sidebar Drawer */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
