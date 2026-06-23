"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderInternal({ forceWhite = false }) {
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
        scrolled || forceWhite
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
            className="object-contain h-[44px] sm:h-[50px] md:h-[56px] w-auto"
            loading="eager"
            fetchPriority="high"
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
                className={`font-sans font-medium text-sm tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-[#ff5e14] border-b-2 border-[#ff5e14] pb-1"
                    : "text-black-2 pb-1.5 nav-link-internal"
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
            className={`font-sans font-medium text-sm tracking-wider transition-colors duration-300 ${
              pathname === "/contact-us"
                ? "text-[#ff5e14] border-b-2 border-[#ff5e14] pb-1"
                : "text-black-2 pb-1.5 nav-link-internal"
            }`}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}
