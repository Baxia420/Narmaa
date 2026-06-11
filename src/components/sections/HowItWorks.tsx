import { Search, MessageCircle, CheckCircle, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Choose Your Service",
    description:
      "Browse our cars, homestays, and tour packages to find what suits your trip.",
  },
  {
    number: 2,
    icon: MessageCircle,
    title: "Message Us",
    description:
      "Send us a message on WhatsApp or submit the enquiry form with your travel details.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Confirm Details",
    description:
      "We'll confirm availability, pricing, and all the details before you commit.",
  },
  {
    number: 4,
    icon: Plane,
    title: "Enjoy Your Trip",
    description:
      "Sit back and enjoy your trip in Malaysia — we've got the logistics covered.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="bg-slate-50 py-16 lg:py-20"
      aria-label="How it works"
    >
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="Getting started is easy. Here's how we help you plan your trip."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
