"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Williamsburg next level flexitarian yr bicycle rights waistcoat 8-bit Austin. Tofu glossier whatever, scenester snack wave literally shaman grained. The incredible site it was mind blowing and everything we gotten vented.",
    author: "DAVID K. ROZAR",
    role: "MANAGER",
  },
  {
    quote:
      "DVAE specializes in the provision of design, construction supervision and project management for clients in the governmental, private and public sectors and offers comprehensive package of services.",
    author: "Asraful Alam Nasim",
    role: "Architect",
  },
  {
    quote:
      "Design Value Architects & Engineers has successfully completed more than 650 projects with outstanding creativity, structural precision, and dedication to architectural excellence.",
    author: "M. A. RAHMAN",
    role: "CHIEF ARCHITECT",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Autoplay every 5 seconds

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="py-20 sm:py-24 lg:py-28 bg-white border-t border-gray-100">
      <div className="container-custom">
        {/* Quote Outline Icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-12 h-8 text-gray-300/60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 44 32"
          >
            <path d="M17.5 28C17.5 23 20 18.5 23.5 14L20 4H10C6 4 2 8 2 13V28H17.5ZM39.5 28C39.5 23 42 18.5 45.5 14L42 4H32C28 4 24 8 24 13V28H39.5Z" />
          </svg>
        </div>

        {/* Slider Navigation Row */}
        <div className="relative flex items-center justify-between gap-4 max-w-[60rem] mx-auto">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="text-gray-400 hover:text-black transition-colors text-[1.5rem] md:text-[2rem] p-4 cursor-pointer select-none font-light"
            aria-label="Previous slide"
          >
            ←
          </button>

          {/* Testimonial Text & Author */}
          <div className="flex-1 px-4 sm:px-10 overflow-hidden h-[18rem] sm:h-[14rem] md:h-[12rem] flex flex-col justify-center items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                <p className="font-sans text-gray-700 text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] leading-relaxed max-w-[42rem] mx-auto mb-8 font-light">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="mt-4">
                  <h4 className="font-sans font-bold text-[0.875rem] tracking-[0.15em] uppercase text-black mb-1.5">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="font-sans text-gray-400 text-[0.75rem] tracking-[0.2em] uppercase font-bold">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="text-gray-400 hover:text-black transition-colors text-[1.5rem] md:text-[2rem] p-4 cursor-pointer select-none font-light"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
