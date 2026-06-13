import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { SEO, pageSEO } from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";
import { faqs, faqCategories } from "@/lib/data";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<typeof faqCategories[number]>("General");
  const whatsappLink = getGeneralWhatsAppLink();

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      <SEO {...pageSEO.faq} />

      {/* Header */}
      <section className="text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/general/hero-malaysia.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900/80" aria-hidden="true" />
        </div>
        <Container className="relative z-10">
          <HelpCircle className="mx-auto h-12 w-12 text-blue-400 mb-4" />
          <h1 className="font-jost text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100 sm:text-xl">
            Find answers to common questions about our car rentals, homestays, tour packages, and booking procedures.
          </p>
        </Container>
      </section>

      {/* Categories Tabs & Accordion */}
      <section className="py-16 bg-slate-50">
        <Container>
          {/* Tabs Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all shadow-sm ${
                    isActive
                      ? "bg-brand-600 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Accordion Content */}
          <div className="mx-auto max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="text-blue-600">{activeCategory}</span>
              <span className="text-slate-700">Questions</span>
            </h2>
            {filteredFaqs.length > 0 ? (
              <FAQAccordion items={filteredFaqs} />
            ) : (
              <p className="text-slate-500 text-center py-6">No questions found in this category.</p>
            )}
          </div>
        </Container>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-20 bg-white">
        <Container className="text-center max-w-3xl">
          <SectionHeader
            title="Still have questions?"
            subtitle="Can't find the answer you're looking for? Message Narmaa Transport directly on WhatsApp. We typically respond within a few hours."
            accent="We're here to help"
            centered
          />
          <div className="mt-8 flex justify-center">
            <Button
              as="anchor"
              href={whatsappLink}
              external
              variant="whatsapp"
              size="lg"
              iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />}
            >
              Message Us on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
