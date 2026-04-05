import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ValueProps } from "@/components/home/ValueProps";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { CTASection } from "@/components/layout/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Professional team collaborating in a modern office"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-gold-dark/30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
            Transform Your Leadership Journey
          </h1>
          <p className="mt-6 text-lg text-warm-white/80 sm:text-xl">
            Executive coaching for leaders ready to unlock their full potential
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg border border-warm-white/40 bg-warm-white/10 px-8 py-3 text-base font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <FadeIn>
        <ValueProps />
      </FadeIn>

      {/* Services Overview */}
      <FadeIn>
        <ServicesOverview />
      </FadeIn>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* About Teaser */}
      <FadeIn>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Coach photo */}
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Professional executive coach in a modern office setting"
                  fill
                  className="object-cover"
                />
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
                className="mt-6 inline-flex items-center gap-1 rounded text-sm font-semibold text-gold-dark transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
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
      </FadeIn>

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
