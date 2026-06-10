"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderInternal() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "OUR SERVICES", path: "/our-services" },
    { name: "FAQ", path: "/faq" },
    { name: "OUR PROJECT", path: "/our-project" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-5 transition-all duration-400 ${
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
            priority={true}
            loading="eager"
          />
        </Link>

        {/* Center: Navigation links */}
        <nav className="hidden lg:flex items-center gap-8 md:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-sans font-bold text-[0.8125rem] md:text-[0.875rem] tracking-wider transition-colors duration-300 hover:text-black ${
                  isActive ? "text-black border-b-2 border-black pb-1" : "text-black-2"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact Us link */}
        <div className="flex items-center">
          <Link
            href="/contact-us"
            className={`font-sans font-bold text-[0.8125rem] md:text-[0.875rem] tracking-wider transition-colors duration-300 hover:text-black ${
              pathname === "/contact-us" ? "text-black border-b-2 border-black pb-1" : "text-black-2"
            }`}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}
