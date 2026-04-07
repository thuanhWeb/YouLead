import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const testimonials = [
  {
    quote:
      "TA's coaching gave me practical direction and clarity I could actually act on. I left each session feeling more confident, focused, and supported.",
    name: "Client",
    role: "",
  },
  {
    quote:
      "Working with TA helped me reconnect with myself and make decisions with more confidence. Her approach is warm, strategic, and deeply empowering.",
    name: "Client",
    role: "",
  },
];

const services = [
  {
    title: "Self-Leadership Coaching",
    tagline: "Clarity, confidence, direction",
    href: "#contact",
  },
  {
    title: "Leadership Coaching",
    tagline: "Communication, influence, culture",
    href: "#contact",
  },
  {
    title: "Business Coaching",
    tagline: "Strategy, structure, sustainability",
    href: "#contact",
  },
];

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "Founders, leaders, and professionals who want clarity, stronger leadership, and aligned growth.",
  },
  {
    question: "Do you offer online coaching?",
    answer:
      "Yes, sessions are available online (and in-person if/when available).",
  },
  {
    question: "How long do clients usually work with you?",
    answer:
      "It depends on your goals. Some begin with a Clarity Intensive, others continue with ongoing coaching.",
  },
  {
    question: "What if I'm not sure which offer fits?",
    answer:
      "Book a Clarity Call and we'll choose the best starting point together.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== SECTION 1 — HERO (2-column: text left, image right) ===== */}
      <section className="bg-forest py-24 sm:py-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
                Lead with Clarity.
                <br />
                Grow in Alignment.
                <br />
                Thrive with Confidence.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-white/85 sm:text-xl">
                Helping driven professionals, business owners, and leaders gain
                clarity, act in alignment, and move forward with confidence and
                structure. So they don&apos;t feel stretched in every direction.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-warm-white/60">
                Inclusive, culturally aware coaching supporting diverse
                professionals, including CALD women navigating confidence,
                identity, and leadership transitions.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
                >
                  Book a Clarity Call
                </a>
                <a
                  href="#lead-magnet"
                  className="inline-block rounded-lg border border-warm-white/40 bg-warm-white/10 px-8 py-3 text-base font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20"
                >
                  Take the Free Clarity Snapshot
                </a>
              </div>
            </div>

            {/* Image — natural light, calm presence */}
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80"
                  alt="Professional woman in natural light"
                  width={560}
                  height={640}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP (from Bloom Draft) ===== */}
      <section className="border-b border-charcoal/5 bg-white py-6">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm tracking-wide text-charcoal/50">
            Trusted by growth-minded leaders, founders, and professionals
            navigating change, growth, and reinvention.
          </p>
        </div>
      </section>

      {/* ===== SECTION 2 — CONNECTION (beige bg, large serif) ===== */}
      <FadeIn>
        <section className="bg-cream py-24 sm:py-36">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-charcoal/70 sm:text-xl">
              You&apos;re capable. Responsible. The one people rely on.
            </p>
            <div className="mt-10 space-y-3">
              <p className="font-heading text-3xl leading-snug tracking-wide text-charcoal sm:text-4xl lg:text-5xl">
                You lead at work.
              </p>
              <p className="font-heading text-3xl leading-snug tracking-wide text-charcoal sm:text-4xl lg:text-5xl">
                You lead at home.
              </p>
              <p className="font-heading text-3xl leading-snug tracking-wide text-charcoal sm:text-4xl lg:text-5xl">
                And most of the time, you&apos;re holding more than anyone sees.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 3 — PROBLEM EXPANSION ===== */}
      <FadeIn>
        <section className="bg-white py-24 sm:py-36">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
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

            <div className="mt-16">
              <h3 className="font-heading text-xl font-bold text-charcoal sm:text-2xl">
                You might be here if:
              </h3>
              <ul className="mt-8 space-y-4 text-left text-charcoal/80">
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

      {/* ===== SECTION 4 — PHILOSOPHY (deep green bg, white text) ===== */}
      <FadeIn>
        <section className="bg-forest py-24 sm:py-36">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
              Leadership Starts From Within
            </h2>
            <ul className="mt-12 space-y-5">
              <li className="text-xl text-warm-white/90">Clearer decisions</li>
              <li className="text-xl text-warm-white/90">Calm communication</li>
              <li className="text-xl text-warm-white/90">Stronger boundaries</li>
              <li className="text-xl text-warm-white/90">Sustainable growth</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 5 — SERVICES (3 columns) — id="services" ===== */}
      <FadeIn>
        <section id="services" className="scroll-mt-20 py-24 sm:py-36">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              How We Can Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal/70">
              Coaching programs designed to meet you where you are
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-charcoal/70">
                    {service.tagline}
                  </p>
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
                  >
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 6 — ABOUT SNAPSHOT — id="about" ===== */}
      <FadeIn>
        <section id="about" className="scroll-mt-20 py-24 sm:py-36">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* Photo */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80"
                  alt="Thu Anh Flynn — Leadership & Business Coach"
                  width={600}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Bio — homepage short version from Content doc */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Meet Your Coach
                </h2>
                <p className="mt-6 leading-relaxed text-charcoal/80">
                  I know what it&apos;s like to work hard and still feel unclear.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
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
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 7 — VALUES (centered, minimal) ===== */}
      <FadeIn>
        <section className="bg-cream py-24 sm:py-36">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <div className="space-y-5">
              <p className="font-heading text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Leadership begins within.
              </p>
              <p className="font-heading text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Growth should feel sustainable.
              </p>
              <p className="font-heading text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Success should align with your values.
              </p>
              <p className="font-heading text-xl leading-relaxed tracking-wide text-charcoal sm:text-2xl">
                Strength and softness can coexist.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 8 — TESTIMONIALS (beige bg, gold quotes) — id="testimonials" ===== */}
      <FadeIn>
        <section id="testimonials" className="scroll-mt-20 bg-cream py-24 sm:py-36">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              What Clients Experience
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
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
                    <footer className="mt-6">
                      <p className="text-sm italic text-charcoal/50">
                        — {testimonial.name}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-charcoal/40">
              Names and roles will be added with client permission.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 9 — LEAD MAGNET (deep green bg) ===== */}
      <section id="lead-magnet" className="bg-forest py-24 sm:py-36">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
            Free Leadership Clarity Snapshot
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-warm-white/80">
            Get a quick insight into how you currently approach decisions,
            challenges, and leadership. This short profile will highlight your
            natural tendencies, where you may be getting stuck, and what could be
            influencing how you think and act.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
            >
              Get My Free Clarity Snapshot
            </a>
          </div>
          <p className="mt-8 text-warm-white/60">
            Want to go deeper? Book a free Clarity Call and we&apos;ll walk
            through your results together.
          </p>
        </div>
      </section>

      {/* ===== FAQ (cherry-picked from Bloom Draft) ===== */}
      <FadeIn>
        <section className="bg-white py-24 sm:py-36">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-12 space-y-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-charcoal/70">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 10 — FINAL CTA (white bg, minimal) ===== */}
      <section className="bg-white py-24 sm:py-36">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-charcoal/80">
            You don&apos;t have to figure this out on your own. If you&apos;re
            ready for more clarity, stronger direction, and a way forward that
            actually feels aligned — let&apos;s map your next move together.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Book a Clarity Call
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT — id="contact" ===== */}
      <FadeIn>
        <section id="contact" className="scroll-mt-20 bg-cream py-24 sm:py-36">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Let&apos;s Get Clear
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
                A focused conversation to help you step back, think clearly, and
                map your next move with confidence.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal sm:text-2xl">
                  Who This Is For
                </h3>
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

                <h3 className="mt-10 font-heading text-xl font-bold text-charcoal sm:text-2xl">
                  What We&apos;ll Do Together
                </h3>
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

              <div>
                <div className="rounded-2xl border border-charcoal/10 bg-white p-8 sm:p-12">
                  <h3 className="text-center font-heading text-xl font-bold text-charcoal sm:text-2xl">
                    Book Your Call
                  </h3>
                  <p className="mt-2 text-center text-sm text-charcoal/70">
                    Choose a time that works for you.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 text-charcoal/50">
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
                <p className="mt-6 text-center text-sm text-charcoal/50">
                  There&apos;s no pressure and no obligation. You&apos;ll leave
                  with clarity and direction either way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
