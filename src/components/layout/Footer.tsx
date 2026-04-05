"use client";

import Link from "next/link";
import { Globe, Mail, ExternalLink, Link2 } from "lucide-react";

const footerNav = {
  coaching: [
    { href: "/services", label: "Executive Coaching" },
    { href: "/services", label: "Group Programs" },
    { href: "/services", label: "Workshops" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
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
    <footer className="border-t border-forest-light/20 bg-forest-dark text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-heading text-xl font-bold text-gold">
              You Lead Coaching
            </Link>
            <p className="mt-3 text-sm text-warm-white/70">
              Lead with clarity, grow in alignment, thrive with confidence.
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
                  <Link
                    href={href}
                    className="text-sm text-warm-white/70 transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
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
                  <Link
                    href={href}
                    className="text-sm text-warm-white/70 transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
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
                className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-forest-dark transition-colors hover:bg-gold-light"
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
