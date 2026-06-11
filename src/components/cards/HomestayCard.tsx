import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Users, BedDouble, Bath, Home as HomeIcon } from "lucide-react";
import type { Homestay } from "@/lib/data";
import { cn } from "@/lib/utils";

type HomestayCardProps = {
  homestay: Homestay;
  className?: string;
};

export default function HomestayCard({ homestay, className }: HomestayCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
        {!imgError && homestay.image ? (
          <img
            src={homestay.image}
            alt={homestay.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 p-4">
            <HomeIcon className="h-10 w-10 text-slate-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">No Image</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {homestay.location}
        </div>
        <h3 className="mt-1 font-jost text-xl lg:text-[22px] font-semibold text-slate-900 leading-snug">{homestay.name}</h3>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Users className="h-4 w-4" aria-hidden="true" />
            {homestay.guests} guests
          </span>
          <span className="inline-flex items-center gap-1">
            <BedDouble className="h-4 w-4" aria-hidden="true" />
            {homestay.bedrooms} bed
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="h-4 w-4" aria-hidden="true" />
            {homestay.bathrooms} bath
          </span>
        </div>

        <div className="mt-auto pt-4">
          {homestay.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-xl font-bold text-slate-900 font-jost">
                RM{homestay.priceFrom}
              </span>
              /night
            </p>
          )}

          <Link
            to={`/homestay/${homestay.slug}`}
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-jost font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
