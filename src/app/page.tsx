import Link from "next/link";
import { ValueProps } from "@/components/home/ValueProps";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { CTASection } from "@/components/layout/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gold-dark/10 via-gold/5 to-cream py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
            Transform Your Leadership Journey
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 sm:text-xl">
            Executive coaching for leaders ready to unlock their full potential
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg border border-charcoal/20 px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-charcoal/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <ValueProps />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* About Teaser */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-cream text-charcoal/40 sm:h-80 sm:w-80">
                <svg
                  className="h-20 w-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Meet Your Coach
              </h2>
              <p className="mt-2 text-lg font-medium text-gold-dark">
                ICF Certified Coach &bull; Leadership Strategist
              </p>
              <p className="mt-6 leading-relaxed text-charcoal/80">
                With over a decade of experience in executive development, I
                founded You Lead Coaching to help ambitious professionals bridge
                the gap between where they are and where they&apos;re meant to
                be. My approach combines proven frameworks with deep listening to
                unlock the leader within you.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
              >
                Read My Story
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection
        heading="Ready to Lead with Confidence?"
        description="Take the first step toward transformative leadership. Book a complimentary discovery call and explore how coaching can accelerate your growth."
        buttonText="Book a Call"
        buttonHref="/contact"
      />
    </>
  );
}
