import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Fuel, Cog, Car as CarIcon } from "lucide-react";
import type { Car } from "@/lib/data";
import { cn } from "@/lib/utils";

type CarCardProps = {
  car: Car;
  className?: string;
};

export default function CarCard({ car, className }: CarCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
        {!imgError && car.image ? (
          <img
            src={car.image}
            alt={car.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 p-4">
            <CarIcon className="h-10 w-10 text-slate-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">No Image</span>
          </div>
        )}
        {car.popular && (
          <span className="absolute top-3 left-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
          {car.category}
        </p>
        <h3 className="mt-1 text-lg font-bold text-slate-900">{car.name}</h3>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Users className="h-4 w-4" aria-hidden="true" />
            {car.seats} seats
          </span>
          <span className="inline-flex items-center gap-1">
            <Cog className="h-4 w-4" aria-hidden="true" />
            {car.transmission}
          </span>
          <span className="inline-flex items-center gap-1">
            <Fuel className="h-4 w-4" aria-hidden="true" />
            {car.fuel}
          </span>
        </div>

        <div className="mt-auto pt-4">
          {car.priceFrom && (
            <p className="text-sm text-slate-500">
              From{" "}
              <span className="text-xl font-bold text-slate-900">
                RM{car.priceFrom}
              </span>
              /day
            </p>
          )}

          <Link
            to={`/car-rental/${car.slug}`}
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
