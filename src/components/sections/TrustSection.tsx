import {
  Plane,
  ShieldCheck,
  MapPin,
  Package,
  MessageCircle,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { trustPoints } from "@/lib/data";
import Container from "@/components/ui/Container";

const iconMap: Record<string, LucideIcon> = {
  Plane,
  ShieldCheck,
  MapPin,
  Package,
  MessageCircle,
  BadgeCheck,
};

export default function TrustSection() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Why choose us">
      <Container>
        <p className="mx-auto max-w-2xl text-center text-lg font-medium leading-relaxed text-slate-700 lg:text-xl">
          Plan your transport, stay, and private tour with one trusted local
          team.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.id}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {Icon ? (
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  ) : (
                    <BadgeCheck className="h-7 w-7" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
