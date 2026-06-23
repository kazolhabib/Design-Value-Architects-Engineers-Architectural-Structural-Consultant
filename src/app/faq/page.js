"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import HeaderInternal from "@/components/HeaderInternal";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TitleReveal from "@/components/TitleReveal";

const faqAnswer =
  "The timeline varies depending on the project's scope and complexity. Residential projects can take anywhere from a Typically, you’ll need building, electrical, plumbing, and mechanical permits. Your contractor will help you navigate this process. few months to a year while commercial projects may take longer.";

const faqs = [
  "WHAT IS THE TYPICAL TIMELINE FOR A CONSTRUCTION PROJECT?",
  "WHAT PERMITS ARE REQUIRED FOR MY PROJECT?",
  "WHAT SHOULD I DO IF THERE ARE ISSUES AFTER THE PROJECT IS COMPLETED?",
  "WHAT IS THE COST OF A CONSTRUCTION PROJECT?",
  "HOW CAN I ENSURE MY PROJECT STAYS ON SCHEDULE?",
  "WHAT SHOULD I DO IF THERE ARE ISSUES AFTER THE PROJECT IS COMPLETED?",
  "HOW CAN I ENSURE MY PROJECT STAYS ON SCHEDULE?",
  "HOW IS THE QUALITY OF MATERIALS ENSURED?",
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-primary selection:text-white">
      <HeaderInternal forceWhite />

      <main className="overflow-hidden bg-white">
        <section className="bg-white pt-[12.25rem] pb-[7.5rem] lg:pb-[7.5rem]">
          <div className="container-custom">
            <div className="mb-24 lg:mb-[6.625rem]">
              <TitleReveal
                lines={["FREQUENTLY ASKED", "QUESTIONS"]}
                lineClassNames={["", "text-[#ff5e14]"]}
                as="h1"
                className="font-display text-[4rem] font-normal uppercase leading-[0.98] tracking-normal text-black sm:text-[5.75rem] md:text-[6.5rem] lg:text-[6.25rem] xl:text-[6.8rem]"
              />
            </div>

            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-0">
              <aside className="lg:col-span-5 lg:pr-14">
                <Reveal duration={0.85} y={28}>
                  <h2 className="font-display text-[2.75rem] font-normal uppercase leading-[1.03] tracking-normal text-black sm:text-[3.25rem] md:text-[3.75rem] lg:text-[3.35rem] xl:text-[3.8rem]">
                    IF YOU DON&apos;T HAVE<br />
                    ANY QUESTIONS,<br />
                    PLEASE LET US KNOW.
                  </h2>
                </Reveal>

                <Reveal duration={0.75} delay={0.18} y={18}>
                  <Link href="/contact-us" className="mt-[4.75rem] inline-block group">
                    <span className="font-sans text-[1rem] font-medium text-black transition-colors group-hover:text-[#ff5e14]">
                      Let&apos;s Contact Us
                    </span>
                    <span className="mt-2 block h-px w-full bg-black transition-colors group-hover:bg-[#ff5e14]" />
                  </Link>
                </Reveal>
              </aside>

              <div className="lg:col-span-7">
                <Reveal duration={0.9} y={34}>
                  <div className="border border-gray-200 bg-white">
                    {faqs.map((question, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={`${question}-${index}`}
                          className={index === 0 ? "" : "border-t border-gray-200"}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className="flex min-h-[6.5rem] w-full items-center justify-between gap-6 px-6 text-left sm:px-10"
                            aria-expanded={isOpen}
                          >
                            <span className="font-display text-[1.125rem] font-medium uppercase leading-[1.25] tracking-normal text-black sm:text-[1.25rem]">
                              {question}
                            </span>
                            <span className="shrink-0 font-display text-[2rem] font-light leading-none text-black">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-12 pr-8 sm:px-10 sm:pr-18">
                                  <p className="max-w-[39rem] text-[1.0625rem] font-medium leading-[1.55] text-[#3f3f46]">
                                    {faqAnswer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex h-[27.75rem] w-full items-center justify-center overflow-hidden">
          <Image
            src="/assets/uploads/2025/07/TOP-scaled.jpg"
            alt="Design Value terrace project"
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="container-custom relative z-10 flex flex-col items-center justify-center gap-8 text-center">
            <TitleReveal
              lines={["READY TO BUILD YOUR", "DREAM TOGETHER?"]}
              as="h2"
              className="mx-auto max-w-[36rem] font-display text-[2.5rem] font-medium uppercase leading-[1.08] tracking-normal text-white sm:text-[3.25rem] md:text-[3.75rem]"
            />
            <Reveal duration={0.8} delay={0.18} y={18}>
              <Link href="/contact-us">
                <span className="inline-flex min-h-[3.75rem] items-center justify-center bg-white px-10 text-[0.875rem] font-medium uppercase tracking-normal text-black transition-colors hover:bg-[#ff5e14] hover:text-white">
                  GET ESTIMATED RATE
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
