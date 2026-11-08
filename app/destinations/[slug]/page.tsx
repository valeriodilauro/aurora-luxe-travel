import { getDestination } from "@/data/destinations";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiMapPin, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import DestinationCTA from "./destination-cta";

export function generateStaticParams() {
  return [
    { slug: "maldives" },
    { slug: "tokyo" },
    { slug: "swiss-alps" },
    { slug: "dubai" },
    { slug: "safari" },
    { slug: "amalfi" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return { title: "Destination Not Found" };
  return {
    title: `${dest.name} — AURORA LUXE TRAVEL`,
    description: dest.description,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  return (
    <main>
      {/* Back button */}
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-aurora-sm bg-aurora-black/60 backdrop-blur-sm border border-aurora-border text-aurora-muted hover:text-white transition-colors font-body text-sm"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aurora-black via-aurora-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-48 max-w-4xl mx-auto px-6 pb-24">
        <div className="rounded-aurora-lg bg-aurora-card/60 backdrop-blur-xl border border-aurora-border p-8 md:p-12 shadow-aurora-strong">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-aurora-border text-aurora-muted text-xs font-body flex items-center gap-1.5">
              <FiGlobe className="w-3 h-3" />
              {dest.region}
            </span>
            <span className="px-3 py-1 rounded-full bg-aurora-border text-aurora-muted text-xs font-body flex items-center gap-1.5">
              <FiMapPin className="w-3 h-3" />
              {dest.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-aurora-gold/20 text-aurora-gold text-xs font-body font-semibold">
              from {dest.fromPrice}
            </span>
          </div>

          {/* Vibe */}
          <p className="font-body text-aurora-cyan italic text-lg mb-4">
            {dest.vibe}
          </p>

          {/* Description */}
          <p className="font-body text-aurora-muted leading-relaxed text-lg mb-8">
            {dest.description}
          </p>

          {/* Quick Facts */}
          <h3 className="font-heading text-xl font-bold text-white mb-4">
            Quick Facts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {dest.facts.map((fact) => (
              <div
                key={fact}
                className="p-4 rounded-aurora-sm bg-aurora-card/30 border border-aurora-border"
              >
                <p className="text-aurora-cyan text-sm font-body">{fact}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <DestinationCTA destinationName={dest.name} destinationRegion={dest.region} />
        </div>
      </div>
    </main>
  );
}
