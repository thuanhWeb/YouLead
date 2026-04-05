import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: "gold" | "default";
}

export function CTASection({
  heading,
  description,
  buttonText,
  buttonHref,
  variant = "gold",
}: CTASectionProps) {
  const isGold = variant === "gold";

  return (
    <section
      className={`py-16 sm:py-20 ${
        isGold
          ? "bg-cream text-charcoal"
          : "bg-forest text-warm-white"
      }`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          {heading}
        </h2>
        <p
          className={`mt-4 text-lg ${
            isGold ? "text-charcoal/70" : "text-warm-white/70"
          }`}
        >
          {description}
        </p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-forest-dark transition-colors hover:bg-gold-light"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
