import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Testimonials">
      <Container>
        <SectionHeader
          title="What Customers Can Expect"
          subtitle="These are example reviews to give you a sense of the service experience. Real customer reviews coming soon."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              {/* Star rating */}
              <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-500">{testimonial.location}</p>
                <span className="mt-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  {testimonial.service}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
