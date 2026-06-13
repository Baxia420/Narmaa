import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Compass, ArrowRight, MapPin } from "lucide-react";
import type { Tour } from "@/lib/data";
import { cn } from "@/lib/utils";

type TourCardProps = {
  tour: Tour;
  className?: string;
};

// Cycle through highlight chip colors
const highlightColors = [
  "bg-emerald-100 text-emerald-700",
  "bg-teal-100 text-teal-700",
  "bg-green-100 text-green-700",
  "bg-lime-100 text-lime-700",
];

export default function TourCard({ tour, className }: TourCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md card-hover-emerald",
        className
      )}
    >
      {/* Gradient top accent stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 to-orange-400" aria-hidden="true" />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-rose-50 to-orange-50 flex items-center justify-center">
        {!imgError && tour.image ? (
          <img
            src={tour.image}
            alt={tour.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Compass className="h-8 w-8 text-rose-200" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-rose-300">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Duration badge — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-600/85 to-orange-500/85 px-2.5 py-1 backdrop-blur-sm">
          <Clock className="h-3 w-3 text-white/90" aria-hidden="true" />
          <span className="text-[10px] font-bold text-white">
            {tour.duration}
          </span>
        </div>

        {/* Pickup badge */}
        {tour.pickupIncluded && (
          <span className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
            ✓ Pickup included
          </span>
        )}

        {/* Location label */}
        {tour.location && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-900/80 to-slate-800/80 px-3 py-1.5 backdrop-blur-sm">
            <MapPin className="h-3 w-3 text-white/80" aria-hidden="true" />
            <span className="text-[11px] font-bold text-white">
              {tour.location}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jost text-[19px] font-bold text-slate-900 leading-snug">
          {tour.name}
        </h3>

        {/* Highlights as coloured chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tour.highlights.slice(0, 4).map((highlight, i) => (
            <span
              key={highlight}
              className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${highlightColors[i % highlightColors.length]}`}
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          {tour.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-[18px] font-extrabold text-slate-900 font-jost">
                RM{tour.priceFrom}
              </span>
              <span className="text-xs text-slate-400">/trip</span>
            </p>
          )}

          <Link
            to={`/tours/${tour.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-2 text-sm font-jost font-bold text-white shadow-md shadow-rose-300/30 transition-all hover:shadow-rose-400/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            View trip
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
