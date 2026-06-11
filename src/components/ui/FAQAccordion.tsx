import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  if (items.length === 0) return null;

  return (
    <div className={cn("divide-y divide-slate-200 rounded-xl border border-slate-200", className)}>
      {items.map((item, index) => (
        <details
          key={index}
          className="group"
        >
          <summary
            className={cn(
              "flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4",
              "text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-inset",
              "[&::-webkit-details-marker]:hidden",
              index === 0 && "rounded-t-xl",
            )}
            aria-label={item.question}
          >
            <span className="text-sm sm:text-base">{item.question}</span>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="overflow-hidden">
            <p className="px-5 pb-4 pt-0 text-sm leading-relaxed text-slate-600 sm:text-base">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
