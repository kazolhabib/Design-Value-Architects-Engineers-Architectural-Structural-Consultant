import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-2 text-white/60 py-16 border-t border-white/10 mt-auto font-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <Image
              src="/assets/uploads/2024/07/designvaluelogo.png"
              alt="Design Value Logo"
              width={200}
              height={60}
              className="object-contain h-10 w-auto brightness-0 invert opacity-80 mb-6"
            />
            <p className="text-[0.9375rem] leading-relaxed max-w-[25rem] text-white/70">
              Architectural & Structural Consultant. We are dedicated to delivering premium designs, safe structural analysis, and professional construction supervision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-[0.875rem] tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[0.875rem]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/our-project" className="hover:text-white transition-colors">Our Project</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-[0.875rem] tracking-wider uppercase mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-[0.875rem]">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+8802223329893" className="hover:text-white transition-colors">+88-02-223329893</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@designvaluebd.com" className="hover:text-white transition-colors">info@designvaluebd.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <a
                  href="https://maps.app.goo.gl/2JE17aesqQF52Ch48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  House 5, Block A, Lalmatia,<br />Dhaka, Bangladesh
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.8125rem] text-white/40">
          <div>
            &copy; 2025 – {new Date().getFullYear()} | All rights reserved by Design Value BD
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
