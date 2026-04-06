import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FAQ } from "@/components/services/FAQ";
import { CTASection } from "@/components/layout/CTASection";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore You Lead Coaching services — executive coaching, group coaching, and leadership workshops designed to unlock your potential.",
  openGraph: {
    title: "Services | You Lead Coaching",
    description:
      "Explore You Lead Coaching services — executive coaching, group coaching, and leadership workshops designed to unlock your potential.",
  },
};

const services = [
  {
    title: "Executive Coaching",
    description:
      "Personalized 1:1 coaching for leaders ready to elevate their impact. Deep-dive into your unique challenges, strengths, and goals with dedicated support.",
    benefits: [
      "Tailored coaching plan aligned to your goals",
      "Bi-weekly 60-minute sessions",
      "Between-session support and accountability",
      "360-degree leadership assessment",
      "Confidential, judgment-free space",
    ],
    pricing: "Contact for Pricing",
    ctaText: "Book a Discovery Call",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    imageAlt: "Professional executive coaching session",
  },
  {
    title: "Group Coaching",
    description:
      "Grow alongside a small cohort of like-minded leaders. Share perspectives, build connections, and accelerate your development in a supportive group setting.",
    benefits: [
      "Small group of 4-8 leaders",
      "Monthly 90-minute group sessions",
      "Peer learning and accountability",
      "Shared frameworks and tools",
      "Community of practice network",
    ],
    pricing: "Contact for Pricing",
    ctaText: "Learn More",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Small group of professionals in a collaborative session",
  },
  {
    title: "Leadership Workshops",
    description:
      "Interactive workshops for teams and organizations looking to build leadership capacity at scale. Customized content for your unique culture and goals.",
    benefits: [
      "Half-day or full-day formats",
      "Customized to your organization",
      "Interactive exercises and case studies",
      "Actionable takeaways for every participant",
      "Follow-up resources and support",
    ],
    pricing: "Contact for Pricing",
    ctaText: "Request a Workshop",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80",
    imageAlt: "Interactive leadership workshop with engaged participants",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A complimentary conversation to understand your goals, challenges, and whether coaching is the right fit for you.",
  },
  {
    step: "02",
    title: "Assessment",
    description:
      "A comprehensive evaluation of your leadership strengths, growth areas, and the context you operate in.",
  },
  {
    step: "03",
    title: "Coaching Program",
    description:
      "Structured sessions with clear milestones, real-time feedback, and tools you can apply immediately.",
  },
  {
    step: "04",
    title: "Results",
    description:
      "Measurable growth in your leadership effectiveness, confidence, and ability to inspire those around you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-warm-white sm:text-5xl lg:text-6xl">
            Coaching Services
          </h1>
          <p className="mt-6 text-lg text-warm-white/70 sm:text-xl">
            Whether you&apos;re an individual leader seeking clarity or an
            organization building leadership capacity, we have a program
            designed for you.
          </p>
        </div>
      </section>

      {/* Divider: Hero → Service Cards */}
      <SectionDivider variant="curve" from="cream" to="warm-white" />

      {/* Service Cards */}
      <section className="bg-radial-gold-tr py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider: Service Cards → Process */}
      <SectionDivider variant="wave" from="warm-white" to="cream" />

      {/* Process Overview */}
      <section className="bg-cream bg-pattern-dots-glow py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            What to Expect
          </h2>
          <p className="mt-4 text-center text-charcoal/70">
            A proven process designed to deliver lasting transformation
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-charcoal font-heading text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider: Process → FAQ */}
      <SectionDivider variant="curve" from="cream" to="warm-white" />

      {/* FAQ */}
      <section className="bg-radial-gold-bl py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-charcoal/70">
            Everything you need to know about working with us
          </p>

          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Find Your Perfect Coaching Package"
        description="Ready to invest in your leadership growth? Let's find the right program for where you are and where you want to go."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  );
}
