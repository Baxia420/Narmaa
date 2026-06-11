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
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our services."
        />

        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={previewFaqs} />
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Full FAQ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
