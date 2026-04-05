import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Executive Coaching",
    description:
      "Personalized 1:1 coaching to help you navigate challenges, amplify your strengths, and lead with greater impact.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    imageAlt: "Executive in a professional coaching session",
  },
  {
    title: "Group Coaching",
    description:
      "Grow alongside a small cohort of leaders. Gain fresh perspectives and build lasting professional connections.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Small group of professionals collaborating together",
  },
  {
    title: "Leadership Workshops",
    description:
      "Interactive workshops for teams and organizations looking to build leadership capacity and drive culture change.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80",
    imageAlt: "Interactive leadership workshop with engaged participants",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
          How We Can Work Together
        </h2>
        <p className="mt-4 text-center text-charcoal/70">
          Coaching programs designed to meet you where you are
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-heading text-2xl font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-charcoal/70">
                  {service.description}
                </p>
                <Link
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
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
