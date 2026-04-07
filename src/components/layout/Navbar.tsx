"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Work With Me" },
  { href: "#lead-magnet", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo — left-aligned, gold */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="YouLead Coaching"
            width={200}
            height={187}
            className="h-14 w-auto sm:h-16"
            unoptimized
            priority
          />
        </a>

        {/* Desktop nav — right-aligned */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
          >
            Book a Clarity Call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden rounded-md p-2 text-charcoal/70 hover:text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-charcoal/5 bg-white px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-base font-medium text-charcoal/80 transition-colors hover:text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-block rounded-lg bg-gold px-6 py-2.5 text-center text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
              onClick={() => setMobileOpen(false)}
            >
              Book a Clarity Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
