"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function HeaderHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-40 shadow-sm transition-all duration-300">
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
            className="hidden sm:inline-block font-sans font-medium text-black-2 hover:text-primary transition-colors border-b border-black hover:border-primary pb-0.5 text-[0.875rem] md:text-[0.9375rem]"
          >
            +88-02-223329893
          </a>

          {/* Contact Us Button (Pill shaped solid black) */}
          <Link href="/contact-us">
            <button className="bg-black hover:bg-primary text-white font-bold rounded-full py-2.5 px-6 md:px-8 text-[0.8125rem] md:text-[0.875rem] tracking-wider uppercase transition-all duration-300 transform hover:scale-105 cursor-pointer">
              CONTACT US
            </button>
          </Link>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200 flex flex-col gap-1.5 justify-center items-center hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer"
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
