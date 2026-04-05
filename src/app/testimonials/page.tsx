import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from leaders who transformed their careers with You Lead Coaching. Real stories of growth, clarity, and lasting impact.",
  openGraph: {
    title: "Testimonials | You Lead Coaching",
    description:
      "Hear from leaders who transformed their careers with You Lead Coaching. Real stories of growth, clarity, and lasting impact.",
  },
};

const testimonials = [
  {
    quote:
      "Working with You Lead Coaching was a turning point in my career. I went from feeling overwhelmed to leading my team with clarity and purpose.",
    name: "Sarah M.",
    role: "VP of Engineering",
  },
  {
    quote:
      "The coaching helped me find my voice as a leader. I now approach challenges with confidence and a strategic mindset I didn't know I had.",
    name: "James T.",
    role: "Director of Operations",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. My team engagement scores are up 40% and I finally feel like the leader I was meant to be.",
    name: "Priya K.",
    role: "Senior Product Manager",
  },
  {
    quote:
      "The group coaching program gave me a community of peers who challenge and support me. It's been invaluable for my growth as an executive.",
    name: "Michael R.",
    role: "Chief Marketing Officer",
  },
  {
    quote:
      "Before coaching, I was constantly second-guessing myself. Now I make decisions with conviction and my team trusts my leadership more than ever.",
    name: "Amanda L.",
    role: "Engineering Manager",
  },
  {
    quote:
      "The leadership workshop transformed how our entire management team communicates. We're more aligned, more empathetic, and more effective.",
    name: "David C.",
    role: "CEO, Tech Startup",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
            Client Testimonials
          </h1>
          <p className="mt-6 text-lg text-warm-white/70 sm:text-xl">
            Real stories from leaders who invested in their growth and
            transformed their careers.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm"
              >
                <svg
                  className="mb-4 h-8 w-8 text-gold/60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <blockquote>
                  <p className="leading-relaxed text-charcoal/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                      <span className="text-sm font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-charcoal/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Write Your Success Story?"
        description="Join the leaders who have transformed their careers through coaching. Book a complimentary discovery call today."
        buttonText="Book a Discovery Call"
        buttonHref="/contact"
      />
    </>
  );
}
