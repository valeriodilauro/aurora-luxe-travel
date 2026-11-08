'use client';

import { FiArrowLeft, FiGlobe, FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function DestinationCTA({ destinationName, destinationRegion }: { destinationName: string; destinationRegion: string }) {
  return (
    <a
      href="/#concierge"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "/";
        setTimeout(() => {
          document.getElementById("concierge")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-aurora bg-aurora-gradient text-white font-body font-medium text-lg shadow-aurora hover:shadow-aurora-strong transition-shadow"
    >
      Request This Destination
      <FiArrowLeft className="w-4 h-4 rotate-180" />
    </a>
  );
}
