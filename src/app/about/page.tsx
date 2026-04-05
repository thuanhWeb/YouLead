import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about You Lead Coaching — our mission, philosophy, and the journey behind transformative leadership coaching.",
  openGraph: {
    title: "About | You Lead Coaching",
    description:
      "Learn about You Lead Coaching — our mission, philosophy, and the journey behind transformative leadership coaching.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
            About You Lead Coaching
          </h1>
          <p className="mt-6 text-lg text-warm-white/70 sm:text-xl">
            Empowering leaders to unlock their full potential through clarity,
            confidence, and purposeful growth.
          </p>
        </div>
      </section>

      {/* Coach Bio */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-80 w-80 items-center justify-center rounded-2xl bg-cream text-charcoal/40 sm:h-96 sm:w-96">
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

            {/* Bio text */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Your Coach
              </h2>
              <p className="mt-2 text-lg font-medium text-gold-dark">
                ICF Certified Coach &bull; Leadership Strategist
              </p>
              <p className="mt-6 text-charcoal/80 leading-relaxed">
                With over a decade of experience in executive development and
                organizational leadership, I founded You Lead Coaching to help
                ambitious professionals bridge the gap between where they are and
                where they&apos;re meant to be.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                My coaching philosophy is built on the belief that every leader
                already holds the answers within. My role is to create the space,
                ask the right questions, and provide the frameworks that unlock
                those answers — so you can lead with authenticity, clarity, and
                lasting impact.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I&apos;ve worked with executives across industries including
                technology, healthcare, finance, and non-profit, helping them
                navigate career transitions, build high-performing teams, and
                cultivate the confidence to lead at the highest levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-l-4 border-gold bg-white p-8 shadow-sm sm:p-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              To empower emerging and established leaders with the self-awareness,
              strategic thinking, and emotional intelligence they need to create
              meaningful change — in their careers, their organizations, and their
              lives.
            </p>
            <div className="mt-8 border-t border-charcoal/10 pt-8">
              <h3 className="font-heading text-2xl font-bold text-charcoal">
                Our Vision
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
                A world where every leader feels equipped and inspired to lead with
                purpose — where leadership is not a title, but a way of showing up
                for the people and causes that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey / Story Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            The Journey
          </h2>
          <p className="mt-4 text-center text-charcoal/70">
            How You Lead Coaching came to be
          </p>

          <div className="mt-12 space-y-12">
            {[
              {
                label: "The Spark",
                title: "A passion for people",
                description:
                  "It started with a simple observation: talented professionals were struggling not because they lacked skill, but because they lacked support. The seed for You Lead Coaching was planted.",
              },
              {
                label: "The Training",
                title: "Deepening the craft",
                description:
                  "Years of rigorous training in executive coaching methodologies, positive psychology, and organizational behavior followed — along with ICF certification and hundreds of coaching hours.",
              },
              {
                label: "The Launch",
                title: "You Lead Coaching is born",
                description:
                  "What began as one-on-one sessions grew into a full coaching practice offering executive coaching, group programs, and leadership workshops for teams and organizations.",
              },
              {
                label: "Today",
                title: "Growing impact",
                description:
                  "Today, You Lead Coaching serves leaders at every stage — from first-time managers finding their voice to seasoned executives navigating their next chapter. The mission remains the same: help you lead.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 sm:gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal font-semibold text-sm">
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className="mt-2 h-full w-px bg-gold/30" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gold-dark">
                    {milestone.label}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-charcoal">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-charcoal/80">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Start Your Journey?"
        description="Take the first step toward becoming the leader you were meant to be. Let's explore how coaching can transform your career and life."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
