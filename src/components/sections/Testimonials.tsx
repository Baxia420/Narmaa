import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20" aria-label="Testimonials">
      <Container>
        <SectionHeader
          accent="Guest Experience"
          title="From our customers"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* Star rating — prominent */}
              <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-100 text-slate-200"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Service badge */}
              <span className="mt-3 inline-flex w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                {testimonial.service}
              </span>

              {/* Review text */}
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                {/* Avatar initial */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white select-none">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
