import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const testimonials = [
  {
    quote:
      "TA's coaching gave me practical direction and clarity I could actually act on. I left each session feeling more confident, focused, and supported.",
    name: "Client",
  },
  {
    quote:
      "Working with TA helped me reconnect with myself and make decisions with more confidence. Her approach is warm, strategic, and deeply empowering.",
    name: "Client",
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

export default function Home() {
  return (
    <>
      {/* ===== SECTION 1 — HERO (2-column: text left, image right) ===== */}
      <section className="bg-cream py-24 sm:py-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
                Lead with Clarity.
                <br />
                Grow in Alignment.
                <br />
                Thrive with Confidence.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75 sm:text-xl">
                Helping driven professionals, business owners, and leaders gain
                clarity, act in alignment, and move forward with confidence and
                structure. So they don&apos;t feel stretched in every direction.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/50">
                Inclusive, culturally aware coaching supporting diverse
                professionals, including CALD women navigating confidence,
                identity, and leadership transitions.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
                >
                  Book a Free Clarity Call
                </a>
                <a
                  href="#lead-magnet"
                  className="inline-block rounded-lg border border-charcoal/20 px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:border-charcoal/40 hover:bg-charcoal/5"
                >
                  Download the Leadership Reset Guide
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

      {/* ===== SECTION 2 — CONNECTION (beige bg, large serif, 40-44px) ===== */}
      <FadeIn>
        <section className="bg-cream py-24 sm:py-36">
          <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-charcoal/70 sm:text-xl">
              You&apos;re capable. Responsible. The one people rely on.
            </p>
            <div className="mt-10 space-y-3">
              <p className="font-heading text-[2.25rem] leading-snug tracking-wide text-charcoal sm:text-[2.5rem] lg:text-[2.75rem]">
                You lead at work.
              </p>
              <p className="font-heading text-[2.25rem] leading-snug tracking-wide text-charcoal sm:text-[2.5rem] lg:text-[2.75rem]">
                You lead at home.
              </p>
              <p className="font-heading text-[2.25rem] leading-snug tracking-wide text-charcoal sm:text-[2.5rem] lg:text-[2.75rem]">
                And most of the time, you&apos;re holding more than anyone sees.
              </p>
            </div>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-gold/40" />
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 3 — PROBLEM EXPANSION ===== */}
      <FadeIn>
        <section className="bg-white py-24 sm:py-36">
          <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6 lg:px-8">
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
          <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6 lg:px-8">
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
        <section id="services" className="scroll-mt-20 bg-white py-24 sm:py-36">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Coaching for Professionals &amp; Leaders
            </h2>

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
        <section id="about" className="scroll-mt-20 bg-cream py-24 sm:py-36">
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

              {/* Bio */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                  Meet Your Coach
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Thu Anh Flynn
                </h2>
                <p className="mt-1 text-lg text-charcoal/60">
                  Leadership &amp; Business Coach
                </p>
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 7 — VALUES (centered, minimal) ===== */}
      <FadeIn>
        <section className="bg-white py-24 sm:py-36">
          <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6 lg:px-8">
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
          </div>
        </section>
      </FadeIn>

      {/* ===== SECTION 9 — LEAD MAGNET (deep green bg) ===== */}
      <section id="lead-magnet" className="scroll-mt-20 bg-forest py-24 sm:py-36">
        <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
            Feeling stretched? Start here.
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
              Get the Free Guide
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10 — FINAL CTA (white bg, minimal) — id="contact" ===== */}
      <section id="contact" className="scroll-mt-20 bg-white py-24 sm:py-36">
        <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Ready to lead with clarity?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            You don&apos;t have to figure this out on your own. If you&apos;re
            ready for more clarity, stronger direction, and a way forward that
            actually feels aligned — let&apos;s map your next move together.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Book Your Free Clarity Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
