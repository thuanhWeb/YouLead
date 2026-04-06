import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Thu Anh Flynn — the coach behind YouLead Coaching. Over 20 years of experience in advertising and marketing, now helping driven professionals find clarity and lead with confidence.",
  openGraph: {
    title: "About | You Lead Coaching",
    description:
      "Meet Thu Anh Flynn — the coach behind YouLead Coaching. Over 20 years of experience in advertising and marketing, now helping driven professionals find clarity and lead with confidence.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
            Meet Your Coach
          </h1>
        </div>
      </section>

      {/* Coach Bio */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-80 w-80 flex-col items-center justify-center rounded-2xl bg-cream text-charcoal/40 sm:h-96 sm:w-96">
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
                <p className="mt-3 text-sm">Coach photo coming soon</p>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Meet Your Coach
              </h2>
              <p className="mt-6 text-charcoal/80 leading-relaxed">
                I know what it&apos;s like to work hard and still feel unclear.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                There was a point in my career where, on the outside, everything
                looked fine. But internally, I felt lost, unmotivated, and unsure
                of what was next.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I had spent over 20 years in advertising and marketing. It was
                all I knew. Yet something didn&apos;t feel right anymore.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I wanted to contribute more. To see the impact of my work
                directly. But I didn&apos;t know where to go or how to move
                forward.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I remember feeling pulled in different directions, questioning my
                confidence, and wondering if it was too late to change.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                That was the moment I realised:
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                <strong>
                  I can&apos;t keep living like this. I need clarity.
                </strong>
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I had always felt a sense of entrepreneurship in me, but without
                guidance or a mentor, I didn&apos;t know how to explore that
                path.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                That experience is why I&apos;m especially passionate about
                supporting women who feel the same pull, but aren&apos;t sure
                where or how to begin.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Over time, I found my way back, not by working harder, but by
                understanding myself more deeply.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                That journey shaped how I coach today.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Practical. Human. Strategic. Always aligned to who you are.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Today, I work with driven professionals, business owners, and
                leaders who feel exactly how I once felt.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed italic">
                &lsquo;I&apos;m working hard, but something doesn&apos;t feel
                right.&rsquo;
              </p>
              <p className="mt-2 text-charcoal/80 leading-relaxed italic">
                &lsquo;I feel stuck and don&apos;t know what direction I&apos;m
                heading.&rsquo;
              </p>
              <p className="mt-2 text-charcoal/80 leading-relaxed italic">
                &lsquo;I don&apos;t have time, but it still feels like
                it&apos;s not enough.&rsquo;
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I created{" "}
                <strong>YouLead Coaching</strong> to help you find
                clarity faster, move through uncertainty with support, and build
                success that feels aligned, not forced.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                I believe there is a leader in every one of us. When you have the
                right guidance, clarity, and support, you can see what&apos;s
                possible and go after it with confidence.
              </p>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                <strong>
                  You don&apos;t need to do more. You need clarity, direction,
                  and a way forward that feels like you.
                </strong>
              </p>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gold-light"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to lead with clarity?"
        description=""
        buttonText="Work With Me"
        buttonHref="/services"
      />
    </>
  );
}
