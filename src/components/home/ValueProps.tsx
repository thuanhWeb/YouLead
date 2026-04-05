const pillars = [
  {
    title: "Clarity",
    description:
      "Cut through the noise and gain a clear vision for your leadership path. Know exactly where you're going and how to get there.",
    icon: (
      <svg
        className="h-8 w-8 text-gold-dark"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Confidence",
    description:
      "Build unshakeable self-trust and the ability to make bold decisions. Step into your authority as a leader others want to follow.",
    icon: (
      <svg
        className="h-8 w-8 text-gold-dark"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Growth",
    description:
      "Develop the skills, mindset, and habits that sustain long-term leadership excellence. Transform potential into measurable impact.",
    icon: (
      <svg
        className="h-8 w-8 text-gold-dark"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
];

export function ValueProps() {
  return (
    <section className="bg-cream bg-pattern-dots-glow py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
          The Foundation of Exceptional Leadership
        </h2>
        <p className="mt-4 text-center text-charcoal/70">
          Every leader&apos;s transformation begins with three core pillars
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10">
                {pillar.icon}
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-charcoal/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
