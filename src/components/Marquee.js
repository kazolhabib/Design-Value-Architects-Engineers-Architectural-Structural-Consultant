"use client";

import Reveal from "./Reveal";

export default function Marquee() {
  const companies = [
    "GRREEN VAIL HILLS RESORT PLC",
    "ANWAR LANDMARK",
    "GEMCON GROUP",
    "SAARA BUILDERS",
    "ASIAN DUPLEX",
    "HOMELINK",
    "RUPAYAN",
    "GRAMUS",
    "NAVANA",
    "ACME",
    "ESDO",
    "GUK",
  ];

  return (
    <Reveal duration={0.8} delay={0.1} y={20}>
      <div className="container-custom py-6 sm:py-8 lg:py-10">
        <div className="w-full bg-white border-t border-b border-gray-100 py-6 sm:py-8 overflow-hidden select-none">
          <div className="animate-marquee whitespace-nowrap">
            {/* First Loop */}
            <div className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12">
              {companies.map((name, i) => (
                <span
                  key={`comp-1-${i}`}
                  className="font-sans font-semibold text-gray-500 text-[1.125rem] sm:text-[1.375rem] md:text-[1.5625rem] uppercase tracking-[0.2px] cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
            {/* Second Loop (duplicated for seamless loop transition) */}
            <div className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12">
              {companies.map((name, i) => (
                <span
                  key={`comp-2-${i}`}
                  className="font-sans font-semibold text-gray-500 text-[1.125rem] sm:text-[1.375rem] md:text-[1.5625rem] uppercase tracking-[0.2px] cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
