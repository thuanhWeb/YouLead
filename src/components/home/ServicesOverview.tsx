import Link from "next/link";

const services = [
  {
    title: "Executive Coaching",
    description:
      "Personalized 1:1 coaching to help you navigate challenges, amplify your strengths, and lead with greater impact.",
    href: "/services",
  },
  {
    title: "Group Coaching",
    description:
      "Grow alongside a small cohort of leaders. Gain fresh perspectives and build lasting professional connections.",
    href: "/services",
  },
  {
    title: "Leadership Workshops",
    description:
      "Interactive workshops for teams and organizations looking to build leadership capacity and drive culture change.",
    href: "/services",
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
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
