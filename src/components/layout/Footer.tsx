"use client";

import Image from "next/image";
import { Globe, Mail, ExternalLink, Link2 } from "lucide-react";

const footerNav = {
  coaching: [
    { href: "#services", label: "Self-Leadership Coaching" },
    { href: "#services", label: "Leadership Coaching" },
    { href: "#services", label: "Business Coaching" },
  ],
  company: [
    { href: "#about", label: "About" },
    { href: "#services", label: "Work With Me" },
    { href: "#contact", label: "Book a Call" },
  ],
};

const socialLinks = [
  { href: "#", label: "Website", icon: Globe },
  { href: "#", label: "Email", icon: Mail },
  { href: "#", label: "Profile", icon: ExternalLink },
  { href: "#", label: "Connect", icon: Link2 },
];

export function Footer() {
  return (
    <footer className="border-t bg-charcoal text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <Image
                src="/logo.svg"
                alt="You Lead Coaching"
                width={140}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-3 text-sm text-warm-white/70">
              True leadership starts from within.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-md p-2 text-warm-white/60 transition-colors hover:text-gold"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coaching links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-gold">
              Coaching
            </h3>
            <ul className="mt-3 space-y-2">
              {footerNav.coaching.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-warm-white/70 transition-colors hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-gold">
              Company
            </h3>
            <ul className="mt-3 space-y-2">
              {footerNav.company.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-warm-white/70 transition-colors hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-gold">
              Stay Updated
            </h3>
            <p className="mt-3 text-sm text-warm-white/70">
              Get leadership insights delivered to your inbox.
            </p>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="min-w-0 flex-1 rounded-md border border-warm-white/20 bg-warm-white/10 px-3 py-2 text-sm text-warm-white placeholder:text-warm-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-gold-light"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-warm-white/10 pt-6 text-center text-sm text-warm-white/50">
          &copy; {new Date().getFullYear()} You Lead Coaching. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
