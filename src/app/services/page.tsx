import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FAQ } from "@/components/services/FAQ";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Explore how we can work together — coaching, leadership development, and workshops designed to bring clarity, alignment, and confidence to your leadership.",
  openGraph: {
    title: "Work With Me | You Lead Coaching",
    description:
      "Explore how we can work together — coaching, leadership development, and workshops designed to bring clarity, alignment, and confidence to your leadership.",
  },
};

const services = [
  {
    title: "Lead From Within\u2122",
    description:
      "Self-leadership coaching for clarity, confidence, and direction. Reconnect with your values, build inner confidence, and lead from a grounded, authentic place.",
    ctaText: "Learn More",
    ctaHref: "/contact",
  },
  {
    title: "Leadership Architecture\u2122",
    description:
      "Strategic leadership coaching for communication, influence, and culture. Develop your leadership presence and create lasting impact in your team and organisation.",
    ctaText: "Learn More",
    ctaHref: "/contact",
  },
  {
    title: "The Impact Accelerator\u2122",
    description:
      "Business coaching for strategy, structure, and sustainability. Build a business that grows in alignment with your values and supports the life you want.",
    ctaText: "Learn More",
    ctaHref: "/contact",
  },
  {
    title: "Workshops",
    description:
      "Corporate and community workshops. Interactive sessions designed to build leadership capacity, strengthen team culture, and create sustainable growth.",
    ctaText: "Learn More",
    ctaHref: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
            Work With Me
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 sm:text-xl">
            Explore how we can work together to bring clarity, alignment, and
            confidence to your leadership and business.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
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

      {/* CTA */}
      <CTASection
        heading="Ready to lead with clarity?"
        description="Let's find the right path forward for you. Book a free call and we'll explore how coaching can support your next chapter."
        buttonText="Book a Free Clarity Call"
        buttonHref="/contact"
      />
    </>
  );
}
