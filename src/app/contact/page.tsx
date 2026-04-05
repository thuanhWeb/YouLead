import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with You Lead Coaching. Book a discovery call, ask a question, or learn more about our executive coaching and leadership programs.",
  openGraph: {
    title: "Contact | You Lead Coaching",
    description:
      "Get in touch with You Lead Coaching. Book a discovery call, ask a question, or learn more about our executive coaching and leadership programs.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 sm:text-xl">
            Ready to take the next step in your leadership journey? We&apos;d
            love to hear from you. Fill out the form below or book a call
            directly.
          </p>
        </div>
      </section>

      {/* Contact Image Banner */}
      <section className="relative h-48 sm:h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Warm, inviting workspace for coaching conversations"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 to-transparent" />
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-charcoal/70">
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
                Contact Info
              </h2>
              <p className="mt-2 text-charcoal/70">
                Prefer to reach out directly? Here&apos;s how.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20">
                    <Mail className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <a
                      href="mailto:hello@youleadcoaching.com"
                      className="mt-1 text-charcoal/70 hover:text-gold-dark transition-colors"
                    >
                      hello@youleadcoaching.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20">
                    <Clock className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Availability</h3>
                    <p className="mt-1 text-charcoal/70">
                      Monday &ndash; Friday, 9 AM &ndash; 5 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20">
                    <MapPin className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Location</h3>
                    <p className="mt-1 text-charcoal/70">
                      Virtual coaching &mdash; available worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-charcoal">Follow Along</h3>
                <div className="mt-3 flex gap-4">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-charcoal/60 hover:bg-gold/20 hover:text-gold-dark transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-charcoal/60 hover:bg-gold/20 hover:text-gold-dark transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Book a Discovery Call
          </h2>
          <p className="mt-4 text-charcoal/70">
            Skip the form and book a complimentary 30-minute discovery call
            directly on our calendar.
          </p>
          <div className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-8 sm:p-12">
            <div className="flex flex-col items-center justify-center gap-4 text-charcoal/50">
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <p className="text-sm font-medium">
                Calendly scheduling widget will appear here
              </p>
              <p className="text-xs text-charcoal/40">
                Book a Discovery Call directly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Placeholder */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream">
            <div className="flex h-64 items-center justify-center text-charcoal/40">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10" />
                <p className="mt-3 text-sm font-medium">
                  Virtual coaching — available worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
