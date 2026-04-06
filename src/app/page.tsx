import Image from "next/image";
import Link from "next/link";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { CTASection } from "@/components/layout/CTASection";
import { YouLeadMethod } from "@/components/home/YouLeadMethod";

export default function Home() {
  return (
    <>
      {/* Hero — dark green with photo left, tagline right */}
      <section className="relative bg-forest py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-80 w-72 items-center justify-center rounded-2xl bg-forest-light/30 text-warm-white/40 sm:h-96 sm:w-80">
                <svg
                  className="h-24 w-24"
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

            {/* Tagline */}
            <div className="text-center md:text-left">
              <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl leading-tight">
                Lead with Clarity.
                <br />
                Grow in Alignment.
                <br />
                Thrive with Confidence.
              </h1>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-forest-dark transition-colors hover:bg-gold-light"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/about"
                  className="inline-block rounded-lg border border-warm-white/30 px-8 py-3 text-base font-semibold text-warm-white transition-colors hover:bg-warm-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-headline */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            You&apos;re capable. Responsible. The one people rely on.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            You hold it well.
            <br />
            You lead with care.
            <br />
            And most of the time, you&apos;re building more than anyone realises.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
            But right now you feel like something is missing. Like there&apos;s a gap between where
            you are and where you know you&apos;re meant to be. You&apos;re ready for more clarity,
            more alignment, and a leadership approach that actually feels like <em>you</em>.
          </p>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-forest py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              "ICF Certified Coach",
              "Leadership Strategist",
              "Career Development Specialist",
              "Workshop Facilitator",
            ].map((credential) => (
              <div
                key={credential}
                className="flex items-center gap-2 text-sm font-medium text-warm-white/90"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                  <svg
                    className="h-4 w-4 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {credential}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Starts From Within */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Leadership Starts From Within
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/80">
                True leadership isn&apos;t about titles or techniques — it&apos;s about
                knowing who you are and leading from that place of authenticity.
                When you align your values with your actions, you create lasting
                impact for yourself and everyone around you.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal/80">
                Through a coaching partnership built on trust and deep listening,
                we&apos;ll uncover the leader within you — the one who leads with
                clarity, grows in alignment, and thrives with confidence.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest transition-colors hover:text-forest-light"
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
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* The YouLead Method */}
      <YouLeadMethod />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Banner */}
      <CTASection
        heading="Ready for your next step?"
        description="Take the first step toward transformative leadership. Book a complimentary discovery call and explore how coaching can accelerate your growth."
        buttonText="Book a Discovery Call"
        buttonHref="/contact"
      />
    </>
  );
}
