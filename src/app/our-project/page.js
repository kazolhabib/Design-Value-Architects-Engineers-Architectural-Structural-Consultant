"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderInternal from "@/components/HeaderInternal";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TitleReveal from "@/components/TitleReveal";

const projects = [
  { title: "Shadinata Tower", image: "/assets/uploads/2025/07/shadinata.png" },
  { title: "Noakhali Trade Center", image: "/assets/uploads/2025/07/noakhali.png" },
  { title: "Diniah Poroshmoni", image: "/assets/uploads/2025/07/diniah.png" },
  { title: "Trade Heaven", image: "/assets/uploads/2025/07/Trade.png" },
  { title: "Shamima Resident", image: "/assets/uploads/2025/07/shamima.png" },
  { title: "Modhucity Sohel Ahmed Resident", image: "/assets/uploads/2025/07/modhucity.png" },
  { title: "HomeLink Tower", image: "/assets/uploads/2025/07/HomeLink-1.png" },
  { title: "Patwary Villa", image: "/assets/uploads/2025/07/patwary-vila.png" },
  { title: "Magura New Market", image: "/assets/uploads/2025/07/magura.png" },
  { title: "Chandrima Safiullah Resident", image: "/assets/uploads/2025/07/chandrima.png" },
  { title: "Golpo Griho Abason", image: "/assets/uploads/2025/07/golpo-griho.png" },
  { title: "Moon Light", image: "/assets/uploads/2025/07/moon-light.png" },
  { title: "ALML Tower", image: "/assets/uploads/2025/07/alml.png" },
  { title: "Krisnochura", image: "/assets/uploads/2025/07/krisnochura.png" },
  { title: "Milari Residence", image: "/assets/uploads/2025/07/milari.png" },
];

const marqueeProjects = [...projects, ...projects];

function ProjectCard({ project, priority = false, onOpen }) {
  return (
    <article className="group w-[17.5rem] shrink-0 sm:w-[20rem]">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block h-[23.75rem] w-full cursor-zoom-in overflow-hidden bg-gray-100 text-left sm:h-[26.875rem]"
        aria-label={`View ${project.title} image`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 280px, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/12" />
        <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-white text-[1.375rem] font-light leading-none text-black opacity-0 shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.16)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          +
        </span>
      </button>
      <h2 className="mt-6 font-display text-[1rem] font-medium leading-[1.35] tracking-normal text-[#0f0f0f] sm:text-[1.0625rem]">
        {project.title}
      </h2>
    </article>
  );
}

export default function OurProject() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-primary selection:text-white">
      <HeaderInternal forceWhite />

      <main className="overflow-hidden bg-white">
        <section className="relative mt-[6rem] min-h-[28.625rem] pt-[6rem] text-white">
          <Image
            src="/assets/uploads/2025/07/LEFT1-copy.jpg"
            alt="Design Value commercial project"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/58" />
          <div className="container-custom relative z-10 flex min-h-[22.625rem] items-center">
            <div className="max-w-[49rem] pb-3">
              <Reveal duration={0.8} y={22}>
                <p className="mb-3 text-[0.8125rem] font-bold uppercase tracking-[-0.01em] text-white sm:text-[0.875rem]">
                  DESIGN VALUE
                </p>
              </Reveal>
              <TitleReveal
                lines={["OUR PROJECT"]}
                as="h1"
                delay={0.05}
                className="font-display text-[3.75rem] font-medium uppercase leading-[0.9] tracking-normal text-white sm:text-[5.75rem] md:text-[6.25rem] lg:text-[6.25rem]"
              />
              <Reveal duration={0.8} delay={0.2} y={24}>
                <p className="mt-6 max-w-[31rem] text-[1rem] font-bold leading-[1.55] text-white sm:text-[1.125rem]">
                  Are a full-service construction design firm specialize residential commercial delivering.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white bg-[url('/assets/uploads/2024/08/Line-scaled.png')] bg-top bg-repeat-y pt-24 pb-24 sm:pt-28 lg:pt-[7.5rem] lg:pb-[7rem]">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <Reveal duration={0.8} y={24}>
                  <span className="inline-flex bg-[#f7f7f7] px-2.5 py-1 text-[0.75rem] font-medium uppercase leading-none text-[#555555]">
                    CASE STUDY
                  </span>
                </Reveal>
                <TitleReveal
                  lines={["Recent", "case studies"]}
                  as="h2"
                  delay={0.08}
                  className="mt-6 max-w-[22rem] font-display text-[3.125rem] font-normal leading-[1.18] tracking-normal text-[#0f0f0f] sm:text-[3.625rem] lg:text-[3.125rem]"
                />
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal duration={0.8} delay={0.15} y={24}>
                  <p className="max-w-[32rem] text-[1rem] font-medium leading-[1.7] text-[#555555] sm:text-[1.0625rem]">
                    Projects case study environmental stewardship has impacted economical viability into the creation of places with distinct beauty and identity.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <Reveal duration={0.9} delay={0.18} y={30}>
            <div className="mt-12 overflow-hidden sm:mt-10">
              <div className="animate-marquee gap-10 pr-10 [animation-duration:150s] sm:gap-10 sm:pr-10">
                {marqueeProjects.map((project, index) => (
                  <ProjectCard
                    key={`${project.title}-${index}`}
                    project={project}
                    priority={index < 4}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 px-4 py-6 backdrop-blur-sm sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative flex max-h-[92vh] w-full max-w-[38rem] flex-col"
              initial={{ y: 26, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute -top-4 right-0 z-20 flex h-11 w-11 items-center justify-center bg-white text-[1.75rem] font-light leading-none text-black shadow-[0_0.75rem_2rem_rgba(0,0,0,0.25)] transition-colors hover:bg-[#ff5e14] hover:text-white sm:-right-4"
                aria-label="Close image preview"
              >
                ×
              </button>

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white shadow-[0_1.5rem_5rem_rgba(0,0,0,0.35)]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 92vw, 38rem"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="bg-white px-5 py-4 sm:px-6">
                <h3 className="font-display text-[1.125rem] font-medium leading-tight text-black sm:text-[1.375rem]">
                  {selectedProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
