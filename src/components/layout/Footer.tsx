"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

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
  {
    href: "https://www.linkedin.com/company/youleadcoaching",
    label: "LinkedIn",
    icon: () => (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/youleadcoaching",
    label: "Instagram",
    icon: () => (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "mailto:hello@youleadcoaching.com",
    label: "Email",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-charcoal text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="rounded font-heading text-xl font-bold text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal">
              You Lead Coaching
            </Link>
            <p className="mt-3 text-sm text-warm-white/70">
              Transform your leadership with clarity, confidence, and growth.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-md p-2 text-warm-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
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
                    className="rounded text-sm text-warm-white/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
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
                    className="rounded text-sm text-warm-white/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
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
                className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-10 border-t border-warm-white/10 pt-6 text-center text-sm text-warm-white/50">
          <p>
            &copy; {new Date().getFullYear()} You Lead Coaching. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
