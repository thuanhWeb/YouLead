import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function ServiceCard({
  title,
  description,
  ctaText,
  ctaHref,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-heading text-2xl font-bold text-charcoal">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-charcoal/70">{description}</p>

        <div className="mt-auto pt-8">
          <Link
            href={ctaHref}
            className="inline-block w-full rounded-lg bg-gold px-6 py-3 text-center font-semibold text-charcoal transition-colors hover:bg-gold-light"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
