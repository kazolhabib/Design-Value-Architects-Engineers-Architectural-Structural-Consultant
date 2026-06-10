"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, onClose }) {
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "OUR SERVICES", path: "/our-services" },
    { name: "FAQ", path: "/faq" },
    { name: "OUR PROJECT", path: "/our-project" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Fades in overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 pointer-events-auto cursor-pointer"
            onClick={onClose}
          />

          {/* Full-Screen Split Sidebar Container */}
          <div className="fixed inset-0 z-50 flex overflow-hidden pointer-events-none">
            {/* Left Panel: Steel Blue (visible on desktop md+) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="hidden md:flex md:w-[32%] lg:w-[28%] xl:w-[25%] h-full bg-[#243441] flex-col justify-between p-10 lg:p-14 text-white pointer-events-auto shadow-2xl z-50"
            >
              {/* Top: Logo */}
              <div>
                <Link href="/" onClick={onClose} className="inline-block">
                  <Image
                    src="/assets/uploads/2024/07/designvaluelogo.png"
                    alt="Design Value Logo"
                    width={240}
                    height={72}
                    className="object-contain h-[52px] md:h-[60px] lg:h-[68px] w-auto"
                  />
                </Link>
              </div>

              {/* Middle: Contact Info */}
              <div className="flex flex-col gap-8 my-auto pr-2">
                <div>
                  <span className="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest block mb-2">EMAIL</span>
                  <a
                    href="mailto:info@designvaluebd.com"
                    className="text-[1.125rem] lg:text-[1.25rem] font-display font-bold text-white hover:text-gray-300 transition-colors uppercase block break-all"
                  >
                    INFO@DESIGNVALUEBD.COM
                  </a>
                </div>
                <div>
                  <span className="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest block mb-2">Phone</span>
                  <a
                    href="tel:+8802223329893"
                    className="text-[1rem] lg:text-[1.125rem] font-semibold text-white hover:text-gray-300 transition-colors"
                  >
                    +88-02-223329893
                  </a>
                </div>
                <div>
                  <span className="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest block mb-2">Address</span>
                  <p className="text-[0.875rem] lg:text-[0.9375rem] leading-relaxed text-gray-200">
                    House 17(ground floor), House 5, Block A, Section 4, kaderabad housing,Katasur, Mohammadpur, Dhaka-1207, Dhaka, Bangladesh.
                  </p>
                </div>
              </div>

              {/* Bottom: Copyright & Search input */}
              <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-8">
                <div className="text-[0.75rem] text-gray-400 leading-normal">
                  &copy; Alright reserved<br />
                  by <span className="text-white font-medium">Designvaluebd</span>
                </div>
                {/* Search input line */}
                <div className="relative w-36 lg:w-44 border-b border-white/20 pb-1 flex items-center">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="bg-transparent text-white placeholder-gray-400 text-[0.875rem] focus:outline-none w-full pr-6"
                  />
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 absolute right-0 bottom-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Right Panel: Charcoal Black (takes full width on mobile, 68-75% on desktop) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="w-full md:w-[68%] lg:w-[72%] xl:w-[75%] h-full bg-[#1b1c20] flex flex-col justify-center px-8 sm:px-20 md:px-24 lg:px-32 relative text-white pointer-events-auto shadow-2xl z-50"
            >
              {/* Close Button (top-right circular button) */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all cursor-pointer z-50 shadow-md"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Mobile Only: Top Brand Logo */}
              <div className="md:hidden absolute top-8 left-8">
                <Link href="/" onClick={onClose}>
                  <Image
                    src="/assets/uploads/2024/07/designvaluelogo.png"
                    alt="Design Value Logo"
                    width={200}
                    height={60}
                    className="object-contain h-[44px] w-auto brightness-0 invert"
                  />
                </Link>
              </div>

              {/* Centered Large Navigation Links */}
              <nav className="flex flex-col gap-6 sm:gap-8 md:gap-9 text-left py-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      href={link.path}
                      onClick={onClose}
                      className="inline-block font-display font-extrabold text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-white hover:text-gray-300 transition-colors uppercase tracking-tight leading-none"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Only: Bottom Contact details */}
              <div className="md:hidden absolute bottom-8 left-8 right-8 flex justify-between items-center text-[0.8125rem] text-gray-400 border-t border-white/5 pt-6">
                <a href="mailto:info@designvaluebd.com" className="hover:text-white transition-colors">
                  info@designvaluebd.com
                </a>
                <a href="tel:+8802223329893" className="hover:text-white transition-colors">
                  +88-02-223329893
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
