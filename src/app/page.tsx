import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { CTASection } from "@/components/layout/CTASection";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-forest py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text — LEFT */}
            <div>
              <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
                Lead with Clarity. Grow in Alignment. Thrive with Confidence.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-warm-white/80 sm:text-xl">
                Helping driven professionals, business owners, and leaders gain
                clarity, act in alignment, and move forward with confidence and
                structure. So they don&apos;t feel stretched in every direction.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-warm-white/60">
                Inclusive, culturally aware coaching supporting diverse
                professionals, including CALD women navigating confidence,
                identity, and leadership transitions.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
                >
                  Book a Free Clarity Call
                </Link>
                <Link
                  href="#lead-magnet"
                  className="inline-block rounded-lg border border-warm-white/40 bg-warm-white/10 px-8 py-3 text-base font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20"
                >
                  Download the Leadership Reset Guide
                </Link>
              </div>
            </div>

            {/* Photo placeholder — RIGHT */}
            <div className="flex items-center justify-center">
              <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-warm-white/10 text-warm-white/40 sm:h-96 sm:w-96">
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
          </div>
        </div>
      </section>

      {/* Section 2: Connection */}
      <FadeIn>
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-charcoal/80 sm:text-xl">
              You&apos;re capable. Responsible. The one people rely on.
            </p>
            <div className="mt-8 space-y-2">
              <p className="font-serif text-2xl leading-relaxed tracking-wide text-charcoal sm:text-3xl">
                You lead at work.
              </p>
              <p className="font-serif text-2xl leading-relaxed tracking-wide text-charcoal sm:text-3xl">
                You lead at home.
              </p>
              <p className="font-serif text-2xl leading-relaxed tracking-wide text-charcoal sm:text-3xl">
                And most of the time, you&apos;re holding more than anyone sees.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 3: Problem Expansion */}
      <FadeIn>
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="space-y-4 text-lg leading-relaxed text-charcoal/80">
              <p>
                But behind the scenes, it can feel like a lot. You&apos;re making
                decisions constantly. Carrying responsibility. Thinking about
                what&apos;s next while managing what&apos;s now.
              </p>
              <p>
                On paper, things look good. But internally, you might feel
                stretched, second-guessing, or pulled in too many directions.
              </p>
              <p>
                Between ambition, expectations, and the pace of life and
                business, it&apos;s easy to lose alignment with what actually
                matters. Not because you&apos;re not capable. But because you
                haven&apos;t had the space to step back and think clearly.
              </p>
              <p>
                You don&apos;t need another productivity hack. You don&apos;t
                need to work harder. You need space to think. Structure to lead.
                And support to realign.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="font-heading text-xl font-bold text-charcoal sm:text-2xl">
                You might be here if:
              </h3>
              <ul className="mt-6 space-y-3 text-left text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  You&apos;re growing a business but feel scattered or low on
                  energy
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  You&apos;re leading others while quietly second-guessing
                  yourself
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  You&apos;re juggling work, family, and expectations with no
                  space to think
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  You&apos;re ready for your next level but unsure what to focus
                  on first
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  You&apos;ve built something meaningful but it no longer feels
                  fully aligned
                </li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 4: Philosophy — Leadership Starts From Within */}
      <FadeIn>
        <section className="bg-forest py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
              Leadership Starts From Within
            </h2>
            <ul className="mt-10 space-y-4">
              <li className="text-xl text-warm-white/90">Clearer decisions</li>
              <li className="text-xl text-warm-white/90">
                Calm communication
              </li>
              <li className="text-xl text-warm-white/90">
                Stronger boundaries
              </li>
              <li className="text-xl text-warm-white/90">
                Sustainable growth
              </li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* Section 5: Services Overview */}
      <FadeIn>
        <ServicesOverview />
      </FadeIn>

      {/* Section 6: About Snapshot */}
      <FadeIn>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Text */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Thu Anh Flynn
                </h2>
                <p className="mt-2 text-lg font-medium text-gold-dark">
                  Leadership &amp; Business Coach
                </p>
                <p className="mt-6 leading-relaxed text-charcoal/80">
                  I know what it&apos;s like to work hard and still feel unclear.
                  After more than 20 years in advertising and marketing, I
                  reached a point where everything looked fine on the outside,
                  but internally I felt stuck, unmotivated, and unsure of what
                  was next. I had always felt a pull towards something more, but
                  without guidance, I didn&apos;t know how to move forward.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  That&apos;s why I do the work I do today. I help driven
                  professionals, business owners, and leaders gain clarity,
                  realign what matters, and move forward with confidence and
                  structure.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
                >
                  See My Journey
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
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 7: Values */}
      <FadeIn>
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="space-y-4">
              <p className="font-serif text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Leadership begins within.
              </p>
              <p className="font-serif text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Growth should feel sustainable.
              </p>
              <p className="font-serif text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Success should align with your values.
              </p>
              <p className="font-serif text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Strength and softness can coexist.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 8: Testimonials */}
      <TestimonialsCarousel />

      {/* Section 9: Lead Magnet */}
      <section id="lead-magnet" className="bg-forest py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
            Feeling stretched? Start here.
          </h2>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              Get the Free Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <CTASection
        heading="Ready to lead with clarity?"
        description=""
        buttonText="Book Your Free Clarity Call"
        buttonHref="/contact"
      />
    </>
  );
}
