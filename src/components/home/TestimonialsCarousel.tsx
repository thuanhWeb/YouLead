"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Working with You Lead Coaching was a turning point in my career. I went from feeling overwhelmed to leading my team with clarity and purpose.",
    name: "Sarah M.",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "The coaching helped me find my voice as a leader. I now approach challenges with confidence and a strategic mindset I didn't know I had.",
    name: "James T.",
    role: "Director of Operations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. My team engagement scores are up 40% and I finally feel like the leader I was meant to be.",
    name: "Priya K.",
    role: "Senior Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote:
      "The group coaching program gave me a community of peers who challenge and support me. It's been invaluable for my growth as an executive.",
    name: "Michael R.",
    role: "Chief Marketing Officer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      className="bg-charcoal bg-pattern-dots-light py-16 sm:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-warm-white sm:text-4xl">
          What Our Clients Say
        </h2>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full shrink-0 px-4"
              >
                <blockquote className="text-center">
                  <svg
                    className="mx-auto mb-6 h-8 w-8 text-gold/60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-lg leading-relaxed text-warm-white/90 sm:text-xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex flex-col items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold/40">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} photo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gold">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-sm text-warm-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current
                  ? "bg-gold"
                  : "bg-warm-white/30 hover:bg-warm-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
