import Link from "next/link";

const services = [
  {
    title: "Self-Leadership Coaching",
    description: "Clarity, confidence, direction",
    href: "/services",
  },
  {
    title: "Leadership Coaching",
    description: "Communication, influence, culture",
    href: "/services",
  },
  {
    title: "Business Coaching",
    description: "Strategy, structure, sustainability",
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-forest py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-warm-white sm:text-4xl">
          How We Can Work Together
        </h2>
        <p className="mt-4 text-center text-warm-white/70">
          Coaching programs designed to meet you where you are
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-warm-white/10 bg-warm-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-warm-white/10"
            >
              <h3 className="font-heading text-2xl font-bold text-warm-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-warm-white/70">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
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
          ))}
        </div>
      </div>
    </section>
  );
}
