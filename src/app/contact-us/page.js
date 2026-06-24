"use client";

import Image from "next/image";
import HeaderInternal from "@/components/HeaderInternal";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TitleReveal from "@/components/TitleReveal";

const contactItems = [
  {
    label: "PHONE",
    href: "tel:+8802223329893",
    text: "+88-02-223329893",
  },
  {
    label: "EMAIL",
    href: "mailto:info@designvaluebd.com",
    text: "info@designvaluebd.com",
  },
  {
    label: "LOCATION",
    href: "https://maps.app.goo.gl/rHA5txz4AbvSyv8Z6",
    text: "House 17(ground floor), House 5, Block A, Section 4, kaderabad housing,Katasur, Mohammadpur, Dhaka-1207, Dhaka, Bangladesh, 1207",
  },
];

const mapSrc =
  "https://maps.google.com/maps?q=House%2017%28ground%20floor%29%2C%20House%205%2C%20Block%20A%2C%20Section%20%204%2C%20kaderabad%20housing%2CKatasur%2C%20Mohammadpur%2C%20Dhaka-1207%2C%20Dhaka%2C%20Bangladesh%2C%201207&t=m&z=12&output=embed&iwloc=near";

function ContactInput({ placeholder, type = "text", className = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-[3.4375rem] w-full border-0 border-b border-gray-200 bg-transparent px-0 pb-4 text-[1rem] font-medium text-black outline-none transition-colors placeholder:text-[#555555] focus:border-black ${className}`}
    />
  );
}

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-primary selection:text-white">
      <HeaderInternal forceWhite />

      <main className="overflow-hidden bg-white">
        <section className="bg-white pt-[10.75rem] pb-20 sm:pt-[11.25rem] lg:pb-[7.5rem]">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <TitleReveal
                  lines={["GET IN TOUCH", "WITH", "DESIGNVALUE"]}
                  lineClassNames={["", "", "text-[#ff5e14]"]}
                  as="h1"
                  className="max-w-[46.5rem] font-display text-[3.25rem] font-normal uppercase leading-[1] tracking-normal text-[#0f0f0f] sm:text-[5.25rem] md:text-[5.625rem]"
                />
              </div>

              <div className="grid gap-8 pt-2 sm:grid-cols-[8rem_1fr] lg:col-span-5 lg:pt-2">
                <Reveal duration={0.8} y={18}>
                  <div className="relative hidden h-6 w-[6.5625rem] sm:block">
                    <Image
                      src="/assets/uploads/2024/09/long-arrow.png"
                      alt=""
                      fill
                      sizes="105px"
                      className="object-contain"
                    />
                  </div>
                </Reveal>
                <Reveal duration={0.8} delay={0.12} y={20}>
                  <p className="max-w-[21rem] text-[1.125rem] font-medium leading-[1.45] text-[#555555]">
                    At bilder Interiors We’re always open for a chat, so get in touch to find out how we can help.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-18 grid grid-cols-1 gap-16 lg:mt-[4.375rem] lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <div className="flex max-w-[25rem] flex-col gap-9">
                  {contactItems.map((item, index) => (
                    <Reveal key={item.label} duration={0.75} delay={index * 0.07} y={22}>
                      <div>
                        <h2 className="mb-4 font-display text-[1.25rem] font-medium uppercase leading-none text-[#0f0f0f]">
                          {item.label}
                        </h2>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-[1.125rem] font-medium leading-[1.45] text-[#343434] transition-colors hover:text-[#ff5e14]"
                        >
                          {item.text}
                        </a>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <Reveal duration={0.8} y={26}>
                  <h2 className="font-display text-[3rem] font-normal leading-none tracking-normal text-[#0f0f0f] sm:text-[3.125rem]">
                    Send us a message
                  </h2>
                </Reveal>

                <Reveal duration={0.8} delay={0.12} y={26}>
                  <form className="mt-10" onSubmit={(event) => event.preventDefault()}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      <ContactInput placeholder="Name *" />
                      <ContactInput placeholder="Email *" type="email" />
                      <ContactInput placeholder="Phone" type="tel" />
                      <ContactInput placeholder="Subject *" />
                    </div>

                    <textarea
                      placeholder="Message *"
                      className="mt-6 h-[8.75rem] w-full resize-y border-0 border-b border-gray-200 bg-transparent px-0 pb-4 text-[1rem] font-medium text-black outline-none transition-colors placeholder:text-[#555555] focus:border-black"
                    />

                    <div className="mt-10 flex justify-end">
                      <button
                        type="submit"
                        className="btn-hover-cropping inline-flex min-h-[3.75rem] items-center justify-center bg-black px-9 text-[0.875rem] font-bold uppercase tracking-normal text-white"
                      >
                        SEND MESSAGES
                      </button>
                    </div>
                  </form>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[31.25rem] bg-[#e5e3df] sm:h-[37.5rem]">
          <iframe
            title="House 17(ground floor), House 5, Block A, Section 4, kaderabad housing,Katasur, Mohammadpur, Dhaka-1207, Dhaka, Bangladesh, 1207"
            src={mapSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
