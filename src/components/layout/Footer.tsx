"use client";

import Image from "next/image";

const footerNav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Work With Me" },
  { href: "#lead-magnet", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/logo.png"
              alt="YouLead Coaching"
              width={200}
              height={187}
              className="h-16 w-auto brightness-0 invert"
              unoptimized
            />
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerNav.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-warm-white/70 transition-colors hover:text-gold"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <p className="max-w-sm text-sm leading-relaxed text-warm-white/60">
            True leadership starts from within.
          </p>

          {/* Copyright */}
          <div className="border-t border-warm-white/10 pt-6 text-sm text-warm-white/40">
            &copy; {new Date().getFullYear()} YouLead Coaching. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
