import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a free clarity call with Thu Anh Flynn. A focused 45-minute conversation to help you step back, think clearly, and map your next move with confidence.",
  openGraph: {
    title: "Book a Call | You Lead Coaching",
    description:
      "Book a free clarity call with Thu Anh Flynn. A focused 45-minute conversation to help you step back, think clearly, and map your next move with confidence.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
            Let&apos;s Get Clear
          </h1>
          <p className="mt-6 text-lg text-warm-white/80 sm:text-xl">
            A focused conversation to help you step back, think clearly, and map
            your next move with confidence.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Who This Is For
          </h2>
          <p className="mt-4 text-charcoal/70">This call is for you if:</p>
          <ul className="mt-4 space-y-3 text-charcoal/80">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              You feel stretched or pulled in too many directions
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              You&apos;re working hard but something still feels unclear
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              You&apos;re ready for your next step but unsure where to focus
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              You want clarity, not more noise
            </li>
          </ul>
        </div>
      </section>

      {/* What We'll Do Together */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            What We&apos;ll Do Together
          </h2>
          <p className="mt-4 text-charcoal/70">
            In this 45-minute call, we will:
          </p>
          <ul className="mt-4 space-y-3 text-charcoal/80">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              Clarify where you are right now
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              Identify what&apos;s getting in your way
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              Explore what aligned growth looks like for you
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
              Map your next step with more direction and confidence
            </li>
          </ul>
        </div>
      </section>

      {/* What This Is (And Isn't) */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            What This Is (And Isn&apos;t)
          </h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            This is a space to think clearly and explore what&apos;s next.
            There&apos;s no pressure and no obligation. If working together
            feels like the right next step, we can talk about it. If not,
            you&apos;ll still leave with clarity and direction.
          </p>
        </div>
      </section>

      {/* Book Your Call */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Book Your Call
          </h2>
          <p className="mt-4 text-charcoal/70">
            Choose a time that works for you.
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
            </div>
          </div>
          <p className="mt-8 text-sm text-charcoal/50">
            You don&apos;t need to have it all figured out before this call.
            That&apos;s what we&apos;ll do together.
          </p>
        </div>
      </section>
    </>
  );
}
