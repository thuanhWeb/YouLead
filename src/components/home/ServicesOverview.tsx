import Link from "next/link";

const services = [
  {
    title: "Self-Leadership",
    description:
      "Build self-awareness, emotional intelligence, and inner confidence to lead from a grounded, authentic place.",
    href: "/services",
  },
  {
    title: "Executive Coaching",
    description:
      "Personalised 1:1 coaching to help you navigate challenges, amplify your strengths, and lead with greater impact.",
    href: "/services",
  },
  {
    title: "Group Coaching",
    description:
      "Grow alongside a small cohort of leaders. Gain fresh perspectives and build lasting professional connections.",
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-forest py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-warm-white sm:text-4xl">
          Coaching for Professionals &amp; Leaders
        </h2>
        <p className="mt-4 text-center text-warm-white/70">
          Programs designed to meet you where you are and take you where you want to go
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-warm-white/10 bg-forest-light/20 p-8 transition-all hover:border-gold/30 hover:bg-forest-light/30"
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
