import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  pricing: string;
  ctaText: string;
  ctaHref: string;
}

export function ServiceCard({
  title,
  description,
  benefits,
  pricing,
  ctaText,
  ctaHref,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-heading text-2xl font-bold text-charcoal">{title}</h3>
      <p className="mt-3 leading-relaxed text-charcoal/70">{description}</p>

      <ul className="mt-6 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-charcoal/80">
            <svg
              className="mt-1 h-4 w-4 shrink-0 text-gold-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <p className="text-lg font-semibold text-charcoal">{pricing}</p>
        <Link
          href={ctaHref}
          className="mt-4 inline-block w-full rounded-lg bg-gold px-6 py-3 text-center font-semibold text-charcoal transition-colors hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
