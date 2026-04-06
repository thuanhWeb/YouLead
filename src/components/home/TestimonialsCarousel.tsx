export function TestimonialsCarousel() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
          What Our Clients Say
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm"
            >
              <svg
                className="mb-6 h-8 w-8 text-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
              <p className="text-center text-charcoal/40 italic">
                Testimonials coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
