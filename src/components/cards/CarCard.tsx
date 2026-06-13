import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Fuel, Cog, Car as CarIcon, Luggage, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import type { Car } from "@/lib/data";
import { cn } from "@/lib/utils";

type CarCardProps = {
  car: Car;
  className?: string;
  hideFuelAndLuggage?: boolean;
};

export default function CarCard({ car, className, hideFuelAndLuggage }: CarCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {/* Image area - taller ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        {!imgError && car.image ? (
          <img
            src={car.image}
            alt={car.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <CarIcon className="h-8 w-8 text-slate-300" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Photo coming soon
            </span>
          </div>
        )}

        {/* Category badge - overlaid on image */}
        <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {car.category}
        </span>

        {/* Popular badge */}
        {car.popular && (
          <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full border border-blue-400/40 bg-blue-600/90 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-200" aria-hidden="true" />
            Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jost text-[19px] font-semibold text-slate-900 leading-snug">
          {car.name}
        </h3>

        {/* Specs row */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {car.seats} seats
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Cog className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {car.transmission}
          </span>
          {hideFuelAndLuggage && (
            <>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                Clean & Sanitized
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                No Hidden Fees
              </span>
            </>
          )}
          {!hideFuelAndLuggage && (
            <span className="inline-flex items-center gap-1.5">
              <Fuel className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              {car.fuel}
            </span>
          )}
          {!hideFuelAndLuggage && car.luggage && (
            <span className="inline-flex items-center gap-1.5">
              <Luggage className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              {car.luggage}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          {car.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-[18px] font-bold text-slate-900 font-jost">
                RM{car.priceFrom}
              </span>
              <span className="text-xs text-slate-400">/day</span>
            </p>
          )}

          <Link
            to={`/car-rental/${car.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-jost font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View car
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
