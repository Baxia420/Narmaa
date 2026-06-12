import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/lib/data";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQPreview() {
  const previewFaqs = faqs.slice(0, 6);

  return (
    <section className="bg-slate-50 py-16 lg:py-20" aria-label="Frequently asked questions">
      <Container>
        <SectionHeader
          accent="Questions?"
          title="Frequently asked"
          subtitle="Quick answers to common questions."
        />

        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={previewFaqs} />
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-jost font-semibold text-slate-700 transition-all hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View all FAQs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
