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
          accent="Your Journey Begins"
          title="How It Works"
          subtitle="Getting started is easy. Here's how we help you plan your trip."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 flex flex-col"
              >
                {/* Large Background Number */}
                <span className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-200 select-none pointer-events-none">
                  {`0${step.number}`}
                </span>

                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
