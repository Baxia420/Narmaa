import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Compass, ArrowRight, MapPin } from "lucide-react";
import type { Tour } from "@/lib/data";
import { cn } from "@/lib/utils";

type TourCardProps = {
  tour: Tour;
  className?: string;
};

export default function TourCard({ tour, className }: TourCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Image area — taller ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        {!imgError && tour.image ? (
          <img
            src={tour.image}
            alt={tour.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Compass className="h-8 w-8 text-emerald-300" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-500/70">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Duration badge — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-slate-900/75 px-2.5 py-1 backdrop-blur-sm">
          <Clock className="h-3 w-3 text-white/80" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-white">
            {tour.duration.split(" ")[0]}
          </span>
        </div>

        {/* Pickup badge — top left */}
        {tour.pickupIncluded && (
          <span className="absolute top-3 left-3 rounded-full bg-emerald-600/90 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            Pickup included
          </span>
        )}

        {/* Location label */}
        {tour.location && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-900/70 px-3 py-1.5 backdrop-blur-sm">
            <MapPin className="h-3 w-3 text-white/80" aria-hidden="true" />
            <span className="text-[11px] font-semibold text-white">
              {tour.location}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jost text-[19px] font-semibold text-slate-900 leading-snug">
          {tour.name}
        </h3>

        {/* Highlights as chips instead of bullet list */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tour.highlights.slice(0, 4).map((highlight) => (
            <span
              key={highlight}
              className="inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          {tour.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-[18px] font-bold text-slate-900 font-jost">
                RM{tour.priceFrom}
              </span>
              <span className="text-xs text-slate-400">/trip</span>
            </p>
          )}

          <Link
            to={`/tours/${tour.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-jost font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            View trip
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
