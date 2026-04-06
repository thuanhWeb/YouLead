import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FAQ } from "@/components/services/FAQ";

const testimonials = [
  {
    quote:
      "Working with You Lead Coaching was a turning point in my career. I went from feeling overwhelmed to leading my team with clarity and purpose.",
    name: "Sarah M.",
    role: "VP of Engineering",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "The coaching helped me find my voice as a leader. I now approach challenges with confidence and a strategic mindset I didn't know I had.",
    name: "James T.",
    role: "Director of Operations",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. My team engagement scores are up 40% and I finally feel like the leader I was meant to be.",
    name: "Priya K.",
    role: "Senior Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote:
      "The group coaching program gave me a community of peers who challenge and support me. It's been invaluable for my growth as an executive.",
    name: "Michael R.",
    role: "Chief Marketing Officer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote:
      "Before coaching, I was constantly second-guessing myself. Now I make decisions with conviction and my team trusts my leadership more than ever.",
    name: "Amanda L.",
    role: "Engineering Manager",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    quote:
      "The leadership workshop transformed how our entire management team communicates. We're more aligned, more empathetic, and more effective.",
    name: "David C.",
    role: "CEO, Tech Startup",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
];

const services = [
  {
    title: "Lead From Within\u2122",
    description:
      "Self-leadership coaching for clarity, confidence, and direction. Reconnect with your values, build inner confidence, and lead from a grounded, authentic place.",
    ctaText: "Learn More",
    ctaHref: "#contact",
  },
  {
    title: "Leadership Architecture\u2122",
    description:
      "Strategic leadership coaching for communication, influence, and culture. Develop your leadership presence and create lasting impact in your team and organisation.",
    ctaText: "Learn More",
    ctaHref: "#contact",
  },
  {
    title: "The Impact Accelerator\u2122",
    description:
      "Business coaching for strategy, structure, and sustainability. Build a business that grows in alignment with your values and supports the life you want.",
    ctaText: "Learn More",
    ctaHref: "#contact",
  },
  {
    title: "Workshops",
    description:
      "Corporate and community workshops. Interactive sessions designed to build leadership capacity, strengthen team culture, and create sustainable growth.",
    ctaText: "Learn More",
    ctaHref: "#contact",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO — Full-width background image ===== */}
      <section className="relative min-h-[90vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
              Lead with Clarity. Grow in Alignment. Thrive with Confidence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warm-white/85 sm:text-xl">
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
              <a
                href="#contact"
                className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
              >
                Book a Free Clarity Call
              </a>
              <a
                href="#lead-magnet"
                className="inline-block rounded-lg border border-warm-white/40 bg-warm-white/10 px-8 py-3 text-base font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20"
              >
                Download the Leadership Reset Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONNECTION ===== */}
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

      {/* ===== PROBLEM EXPANSION ===== */}
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

      {/* ===== PHILOSOPHY — Full-width background image ===== */}
      <FadeIn>
        <section className="relative py-16 sm:py-20">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/85" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
              Leadership Starts From Within
            </h2>
            <ul className="mt-10 space-y-4">
              <li className="text-xl text-warm-white/90">Clearer decisions</li>
              <li className="text-xl text-warm-white/90">Calm communication</li>
              <li className="text-xl text-warm-white/90">Stronger boundaries</li>
              <li className="text-xl text-warm-white/90">Sustainable growth</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* ===== SERVICES — id="services" ===== */}
      <FadeIn>
        <section id="services" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Work With Me
            </h2>
            <p className="mt-4 text-center text-charcoal/70">
              Explore how we can work together to bring clarity, alignment, and
              confidence to your leadership and business.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== FAQ ===== */}
      <FadeIn>
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-center text-charcoal/70">
              Everything you need to know about working together
            </p>
            <div className="mt-10">
              <FAQ />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== ABOUT — id="about" — Full-width background image ===== */}
      <FadeIn>
        <section id="about" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* Photo with background image */}
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80"
                  alt="Thu Anh Flynn — Leadership & Business Coach"
                  width={600}
                  height={700}
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>

              {/* Bio text */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Meet Your Coach
                </h2>
                <p className="mt-2 text-lg font-medium text-gold-dark">
                  Thu Anh Flynn — Leadership &amp; Business Coach
                </p>
                <p className="mt-6 leading-relaxed text-charcoal/80">
                  I know what it&apos;s like to work hard and still feel unclear.
                  There was a point in my career where, on the outside, everything
                  looked fine. But internally, I felt lost, unmotivated, and unsure
                  of what was next.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  I had spent over 20 years in advertising and marketing. It was
                  all I knew. Yet something didn&apos;t feel right anymore. I
                  wanted to contribute more. To see the impact of my work directly.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  That experience is why I&apos;m especially passionate about
                  supporting women who feel the same pull, but aren&apos;t sure
                  where or how to begin. Over time, I found my way back, not by
                  working harder, but by understanding myself more deeply.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  I created <strong>YouLead Coaching</strong> to help you find
                  clarity faster, move through uncertainty with support, and build
                  success that feels aligned, not forced.
                </p>
                <p className="mt-4 leading-relaxed text-charcoal/80">
                  <strong>Practical. Human. Strategic.</strong> Always aligned to
                  who you are.
                </p>
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
                  >
                    Work With Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== VALUES — Full-width background image ===== */}
      <FadeIn>
        <section className="relative py-16 sm:py-20">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="space-y-4">
              <p className="font-serif text-xl leading-relaxed tracking-wide text-warm-white sm:text-2xl">
                Leadership begins within.
              </p>
              <p className="font-serif text-xl leading-relaxed tracking-wide text-warm-white sm:text-2xl">
                Growth should feel sustainable.
              </p>
              <p className="font-serif text-xl leading-relaxed tracking-wide text-warm-white sm:text-2xl">
                Success should align with your values.
              </p>
              <p className="font-serif text-xl leading-relaxed tracking-wide text-warm-white sm:text-2xl">
                Strength and softness can coexist.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== TESTIMONIALS — id="testimonials" ===== */}
      <FadeIn>
        <section id="testimonials" className="scroll-mt-20 bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-center text-charcoal/70">
              Real stories from leaders who invested in their growth and
              transformed their careers.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/30">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name} photo`}
                          fill
                          className="object-cover"
                        />
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
      </FadeIn>

      {/* ===== LEAD MAGNET ===== */}
      <section id="lead-magnet" className="relative py-16 sm:py-20">
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
            Feeling stretched? Start here.
          </h2>
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

      {/* ===== CONTACT — id="contact" ===== */}
      <FadeIn>
        <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Let&apos;s Get Clear
              </h2>
              <p className="mt-4 text-lg text-charcoal/70">
                A focused conversation to help you step back, think clearly, and
                map your next move with confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Left — Who this is for */}
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

                <h3 className="mt-8 font-heading text-xl font-bold text-charcoal sm:text-2xl">
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

              {/* Right — Booking placeholder */}
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
                  There&apos;s no pressure and no obligation. If working together
                  feels like the right next step, we can talk about it. If not,
                  you&apos;ll still leave with clarity and direction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== FINAL CTA — Full-width background image ===== */}
      <section className="relative py-16 sm:py-24">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl">
            Ready to lead with clarity?
          </h2>
          <p className="mt-4 text-lg text-warm-white/70">
            Let&apos;s find the right path forward for you. Book a free call and
            we&apos;ll explore how coaching can support your next chapter.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-forest-dark transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Book Your Free Clarity Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
