import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Users, BedDouble, Bath, Home as HomeIcon, ArrowRight } from "lucide-react";
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
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Image area - taller ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        {!imgError && homestay.image ? (
          <img
            src={homestay.image}
            alt={homestay.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <HomeIcon className="h-8 w-8 text-amber-300" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-500/70">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Location overlay pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-900/70 px-3 py-1.5 backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-white/80" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-white">
            {homestay.location.split(",")[0]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jost text-[19px] font-semibold text-slate-900 leading-snug">
          {homestay.name}
        </h3>

        {/* Specs row */}
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {homestay.guests} guests
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {homestay.bedrooms} bed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {homestay.bathrooms} bath
          </span>
        </div>

        {/* Nearby area chips */}
        {homestay.nearby && homestay.nearby.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {homestay.nearby.slice(0, 3).map((place) => (
              <span
                key={place}
                className="inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700"
              >
                {place}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          {homestay.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-[18px] font-bold text-slate-900 font-jost">
                RM{homestay.priceFrom}
              </span>
              <span className="text-xs text-slate-400">/night</span>
            </p>
          )}

          <Link
            to={`/homestay/${homestay.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-jost font-semibold text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View stay
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
