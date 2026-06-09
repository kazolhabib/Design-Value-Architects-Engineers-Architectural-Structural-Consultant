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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Fades in) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            onClick={onClose}
          />

          {/* Sidebar Drawer (Slides in with physics-based spring) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full max-w-[28.125rem] bg-black-2 text-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header inside Sidebar */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <Image
                src="/assets/uploads/2024/07/designvaluelogo.png"
                alt="Design Value Logo"
                width={160}
                height={48}
                className="object-contain h-8 w-auto brightness-0 invert"
              />
              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6">
              <nav className="flex flex-col gap-6 text-[1.25rem] font-medium font-display">
                <Link href="/" onClick={onClose} className="hover:text-primary transition-colors py-2 border-b border-white/5">
                  HOME
                </Link>
                <Link href="/about-us" onClick={onClose} className="hover:text-primary transition-colors py-2 border-b border-white/5">
                  ABOUT US
                </Link>
                <Link href="/our-services" onClick={onClose} className="hover:text-primary transition-colors py-2 border-b border-white/5">
                  OUR SERVICES
                </Link>
                <Link href="/faq" onClick={onClose} className="hover:text-primary transition-colors py-2 border-b border-white/5">
                  FAQ
                </Link>
                <Link href="/our-project" onClick={onClose} className="hover:text-primary transition-colors py-2 border-b border-white/5">
                  OUR PROJECT
                </Link>
                <Link href="/contact-us" onClick={onClose} className="hover:text-primary transition-colors py-2 border-b border-white/5">
                  CONTACT US
                </Link>
              </nav>

              {/* Contact Details */}
              <div className="mt-10 flex flex-col gap-4 text-[0.875rem] text-white/70">
                <h4 className="text-white font-bold text-[0.75rem] uppercase tracking-wider text-primary">Contact Info</h4>
                <div className="flex flex-col gap-3">
                  <a href="tel:+8802223329893" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span>📞</span> +88-02-223329893
                  </a>
                  <a href="mailto:info@designvaluebd.com" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span>✉️</span> info@designvaluebd.com
                  </a>
                  <a
                    href="https://maps.app.goo.gl/2JE17aesqQF52Ch48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-start gap-2"
                  >
                    <span>📍</span>
                    <span>House 5, Block A, Lalmatia,<br />Dhaka, Bangladesh</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer in Sidebar */}
            <div className="p-6 border-t border-white/10 text-center text-[0.75rem] text-white/40">
              &copy; {new Date().getFullYear()} Design Value BD.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
