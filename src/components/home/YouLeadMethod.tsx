const steps = [
  {
    title: "Clarity",
    description: "Understand your values and your unique leadership style.",
    position: "top",
  },
  {
    title: "Align",
    description: "Align your goals with your strengths and direction.",
    position: "right",
  },
  {
    title: "Strategise",
    description: "Take purposeful steps with a clear plan of action.",
    position: "bottom-right",
  },
  {
    title: "Execute",
    description: "Turn strategy into results with confidence and support.",
    position: "bottom-left",
  },
  {
    title: "Thrive",
    description: "Lead with authenticity and build sustainable momentum.",
    position: "left",
  },
];

export function YouLeadMethod() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
          The YouLead Method&trade;
        </h2>
        <p className="mt-2 text-sm font-medium tracking-wide text-charcoal/60 uppercase">
          Clarity &bull; Alignment &bull; Strategy &bull; Action &bull; Growth
        </p>
        <p className="mt-4 text-charcoal/70">
          A clear, practical approach to move forward with confidence and purpose.
        </p>

        {/* Circular layout for larger screens, vertical for mobile */}
        <div className="mt-12 hidden sm:block">
          <div className="relative mx-auto h-96 w-96">
            {/* Circle outline */}
            <div className="absolute inset-8 rounded-full border-2 border-gold/30" />
            {/* Center gold circle */}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-lg">
              <svg className="h-8 w-8 text-forest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>

            {/* Step labels positioned around the circle */}
            {steps.map((step, i) => {
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const radius = 170;
              const x = 50 + (Math.cos(angle) * radius) / 3.84;
              const y = 50 + (Math.sin(angle) * radius) / 3.84;
              return (
                <div
                  key={step.title}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    width: "120px",
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                    <span className="text-sm font-bold text-gold-dark">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-tight text-charcoal/60">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical layout */}
        <div className="mt-12 grid gap-6 sm:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20">
                <span className="text-sm font-bold text-gold-dark">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-charcoal/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
