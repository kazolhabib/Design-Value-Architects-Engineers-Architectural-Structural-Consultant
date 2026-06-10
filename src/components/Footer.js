import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 py-15 mt-auto font-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-16 items-start">
          {/* Logo and Socials Column */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/uploads/2024/07/designvaluelogo.png"
                alt="Design Value Logo"
                width={200}
                height={60}
                className="object-contain h-[52px] sm:h-[62px] md:h-[72px] w-auto mb-6"
              />
            </Link>
            {/* Social Icons circles (light gray background, black hover) */}
            <div className="flex gap-2.5 mt-4">
              <a
                href="https://www.facebook.com/designvaluebd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Information Column */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h4 className="text-black font-display font-medium text-[20px] uppercase mb-6 tracking-wide">
              INFORMATION
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/our-project"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-6 md:col-span-5 lg:col-span-3">
            <h4 className="text-black font-display font-medium text-[20px] uppercase mb-6 tracking-wide">
              CONTACT
            </h4>
            <div className="flex flex-col gap-3.5">
              <p className="text-gray-600 text-[18px] font-medium capitalize leading-relaxed">
                House 5, Block A, Section 4, kaderabad housing, Katasur Mohammadpur, Dhaka Bangladesh.
              </p>
              <p>
                <a
                  href="tel:+8802223329893"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  +88-02-223329893
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@designvaluebd.com"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  info@designvaluebd.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:mmabuet@yahoo.com"
                  className="text-gray-600 hover:text-black transition-colors text-[18px] font-medium capitalize"
                >
                  mmabuet@yahoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Map Column */}
          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <a
              href="https://maps.app.goo.gl/rHA5txz4AbvSyv8Z6"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[544/250] overflow-hidden bg-gray-100 rounded border border-gray-100 shadow-sm hover:opacity-90 transition-opacity"
            >
              <Image
                src="/assets/uploads/2024/10/static_map.png"
                alt="Design Value Map Location Dhaka"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className="border-t border-gray-100 pt-8 text-center text-base font-medium text-gray-500">
          &copy; 2025 – 2026 | Alright reserved by DesignvalueBD
        </div>
      </div>
    </footer>
  );
}
