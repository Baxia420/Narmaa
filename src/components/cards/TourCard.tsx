import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, CheckCircle, Compass } from "lucide-react";
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
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
        {!imgError && tour.image ? (
          <img
            src={tour.image}
            alt={tour.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 p-4">
            <Compass className="h-10 w-10 text-slate-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">No Image</span>
          </div>
        )}
        {tour.pickupIncluded && (
          <span className="absolute top-3 left-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
            Pickup Included
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jost text-xl lg:text-[22px] font-semibold text-slate-900 leading-snug">{tour.name}</h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {tour.duration}
        </div>

        <ul className="mt-3 space-y-1">
          {tour.highlights.slice(0, 3).map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-1.5 text-sm text-slate-600"
            >
              <CheckCircle className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          {tour.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-xl font-bold text-slate-900 font-jost">
                RM{tour.priceFrom}
              </span>
              /trip
            </p>
          )}

          <Link
            to={`/tours/${tour.slug}`}
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-jost font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
