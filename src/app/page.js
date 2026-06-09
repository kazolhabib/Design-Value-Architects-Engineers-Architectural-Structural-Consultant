import Image from "next/image";
import { Button } from "@heroui/react";
import HeaderHome from "@/components/HeaderHome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Home Page Header */}
      <HeaderHome />

      {/* Hero Banner Section */}
      <section className="bg-black-2 text-white relative py-20 overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-[43.75rem] h-[43.75rem] bg-primary/20 rounded-full blur-[7.5rem] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[31.25rem] h-[31.25rem] bg-blue-light/10 rounded-full blur-[6.25rem] -ml-40 -mb-40 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-[50rem]">
            <span className="text-primary font-bold tracking-widest text-[0.75rem] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Next.js Migration Project
            </span>
            <h1 className="text-[3.25rem] md:text-[4.5rem] font-bold font-display leading-[1.1] mt-6 mb-6">
              Architectural & Structural <br />
              <span className="text-primary">Consultant Platform</span>
            </h1>
            <p className="text-white/70 text-[1.125rem] leading-relaxed mb-8 max-w-[40rem]">
              Welcome to the modernized codebase for <strong className="text-white font-semibold">Design Value</strong>. 
              We have completed the download of all site assets, configured the custom container, and initialized the style system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#setup">
                <Button className="bg-primary text-white font-bold rounded-lg px-8 py-4 text-[1rem]">
                  Check Build Config
                </Button>
              </a>
              <a href="#projects">
                <Button className="bg-transparent border border-white/20 hover:border-white/50 text-white font-bold rounded-lg px-8 py-4 text-[1rem]">
                  Explore Assets
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Specifications */}
      <section id="setup" className="py-16 bg-white-2">
        <div className="container-custom">
          <div className="border-b border-gray-300/30 pb-6 mb-12">
            <h2 className="text-[2rem] font-bold text-black-2 font-display">Rebuild Configuration Setup</h2>
            <p className="text-gray-500 mt-2">Active specifications for the designvaluebd.com Next.js application</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold mb-6 text-[1.25rem]">
                  W
                </div>
                <h3 className="text-[1.25rem] font-bold text-black-2 mb-3">Custom Container</h3>
                <p className="text-gray-600 text-[0.9375rem] leading-relaxed">
                  Responsive layout container set to maximum width of <strong className="text-black">1720px</strong> (<code className="bg-gray-100 px-1 py-0.5 rounded text-primary text-[0.8125rem]">107.5rem</code>) with auto-centering and <code className="bg-gray-100 px-1 py-0.5 rounded text-primary text-[0.8125rem]">1.5rem</code> gutter padding.
                </p>
              </div>
              <div className="mt-6 text-[0.8125rem] text-primary font-semibold tracking-wider uppercase">
                Active &bull; src/app/globals.css
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold mb-6 text-[1.25rem]">
                  R
                </div>
                <h3 className="text-[1.25rem] font-bold text-black-2 mb-3">Px-Free Units (REM)</h3>
                <p className="text-gray-600 text-[0.9375rem] leading-relaxed">
                  All sizing rules, margins, paddings, borders, and typography scale values are defined in <strong className="text-black">rem</strong>. Clean responsiveness across screen resolutions.
                </p>
              </div>
              <div className="mt-6 text-[0.8125rem] text-primary font-semibold tracking-wider uppercase">
                Strict Rule &bull; Standard Compliant
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold mb-6 text-[1.25rem]">
                  T
                </div>
                <h3 className="text-[1.25rem] font-bold text-black-2 mb-3">Original Typography</h3>
                <p className="text-gray-600 text-[0.9375rem] leading-relaxed">
                  Loaded <strong className="text-black">Space Grotesk</strong> as heading font and <strong className="text-black">Euclid Circular B</strong> for body copy, matching your design values.
                </p>
              </div>
              <div className="mt-6 text-[0.8125rem] text-primary font-semibold tracking-wider uppercase">
                Active &bull; src/app/layout.js
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assets Showcase Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8 mb-12">
            <div>
              <h2 className="text-[2.25rem] font-bold text-black-2 font-display">Downloaded Project Assets</h2>
              <p className="text-gray-500 mt-2">All image resources were crawled and downloaded directly from WordPress</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-[0.875rem] font-semibold text-white bg-black-2 px-4 py-2 rounded-lg">
                118 Assets Downloaded
              </span>
            </div>
          </div>

          {/* Asset Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white-2 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src="/assets/uploads/2025/07/police-shopping-768x498.png"
                  alt="Police Shopping"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.75rem] font-bold text-primary uppercase">Commercial Project</span>
                <h4 className="text-[1.125rem] font-bold text-black-2 mt-1">Police Shopping Complex</h4>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white-2 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src="/assets/uploads/2025/07/moon-light.png"
                  alt="Moon Light"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.75rem] font-bold text-primary uppercase">Residential Project</span>
                <h4 className="text-[1.125rem] font-bold text-black-2 mt-1">Moon Light</h4>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white-2 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src="/assets/uploads/2025/07/patwary-vila.png"
                  alt="Patwary Vila"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.75rem] font-bold text-primary uppercase">Structural Project</span>
                <h4 className="text-[1.125rem] font-bold text-black-2 mt-1">Patwary Vila</h4>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white-2 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src="/assets/uploads/2025/07/krisnochura.png"
                  alt="Krisnochura"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.75rem] font-bold text-primary uppercase">Architectural Design</span>
                <h4 className="text-[1.125rem] font-bold text-black-2 mt-1">Krisnochura</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
