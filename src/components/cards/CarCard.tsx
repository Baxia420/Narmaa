import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Fuel, Cog, Car as CarIcon, Luggage, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import type { Car } from "@/lib/data";
import { cn } from "@/lib/utils";

type CarCardProps = {
  car: Car;
  className?: string;
  hideFuelAndLuggage?: boolean;
};

// Cycle through vibrant chip colors
const chipColors = [
  "bg-blue-100 text-blue-700",
  "bg-teal-100 text-teal-700",
  "bg-amber-100 text-amber-700",
];

export default function CarCard({ car, className, hideFuelAndLuggage }: CarCardProps) {
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

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        {!imgError && car.image ? (
          <img
            src={car.image}
            alt={car.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <CarIcon className="h-8 w-8 text-blue-200" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-300">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Category badge */}
        <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {car.category}
        </span>

        {/* Popular badge */}
        {car.popular && (
          <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
            ✦ Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jost text-[19px] font-bold text-slate-900 leading-snug">
          {car.name}
        </h3>

        {/* Specs row with varied chip colors */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${chipColors[0]}`}>
            <Users className="h-3 w-3" aria-hidden="true" />
            {car.seats} seats
          </span>
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${chipColors[1]}`}>
            <Cog className="h-3 w-3" aria-hidden="true" />
            {car.transmission}
          </span>
          {hideFuelAndLuggage && (
            <>
              <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${chipColors[2]}`}>
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Clean & Sanitized
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-0.5 text-[11px] font-semibold text-violet-700">
                <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                No Hidden Fees
              </span>
            </>
          )}
          {!hideFuelAndLuggage && (
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${chipColors[2]}`}>
              <Fuel className="h-3 w-3" aria-hidden="true" />
              {car.fuel}
            </span>
          )}
          {!hideFuelAndLuggage && car.luggage && (
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-0.5 text-[11px] font-semibold text-violet-700">
              <Luggage className="h-3 w-3" aria-hidden="true" />
              {car.luggage}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          {car.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-[18px] font-extrabold text-slate-900 font-jost">
                RM{car.priceFrom}
              </span>
              <span className="text-xs text-slate-400">/day</span>
            </p>
          )}

          <Link
            to={`/car-rental/${car.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-jost font-bold text-white shadow-md shadow-blue-300/30 transition-all hover:shadow-blue-400/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View car
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
