import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Users, BedDouble, Bath, Home as HomeIcon } from "lucide-react";
import type { Homestay } from "@/lib/data";
import { cn } from "@/lib/utils";
import bookingSvg from "@/assets/booking-ar21.svg";

type HomestayCardProps = {
  homestay: Homestay;
  className?: string;
};

export default function HomestayCard({ homestay, className }: HomestayCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md card-hover-blue",
        className
      )}
    >
      {/* Gradient top accent stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-500" aria-hidden="true" />

      {/* Image - Clickable */}
      <Link to={`/homestay/${homestay.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        {!imgError && homestay.image ? (
          <img
            src={homestay.image}
            alt={homestay.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <HomeIcon className="h-8 w-8 text-blue-200" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-300">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Location overlay pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600/85 to-cyan-600/85 px-3 py-1.5 backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-white/90" aria-hidden="true" />
          <span className="text-[11px] font-bold text-white">
            {homestay.location.split(",")[0]}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/homestay/${homestay.slug}`} className="hover:text-blue-600 transition-colors">
          <h3 className="font-jost text-[19px] font-bold text-slate-900 leading-snug">
            {homestay.name}
          </h3>
        </Link>

        {/* Specs chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
            <Users className="h-3 w-3" aria-hidden="true" />
            {homestay.guests} guests
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
            <BedDouble className="h-3 w-3" aria-hidden="true" />
            {homestay.bedrooms} bed
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
            <Bath className="h-3 w-3" aria-hidden="true" />
            {homestay.bathrooms} bath
          </span>
        </div>

        {/* Nearby area chips */}
        {homestay.nearby && homestay.nearby.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {homestay.nearby.slice(0, 3).map((place) => (
              <span
                key={place}
                className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600"
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
              <span className="text-[18px] font-extrabold text-slate-900 font-jost">
                RM{homestay.priceFrom}
              </span>
              <span className="text-xs text-slate-400">/night</span>
            </p>
          )}

          <a
            href={homestay.bookingUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-jost font-bold text-white shadow-md shadow-blue-300/30 transition-all hover:shadow-blue-400/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View on
            <img src={bookingSvg} alt="Booking.com" className="h-4 w-auto" />
          </a>
        </div>
      </div>
    </article>
  );
}
