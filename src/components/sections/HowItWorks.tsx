import { Search, MessageCircle, CheckCircle, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Browse",
    description: "Find a car, stay, or tour.",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"},
  {
    number: 2,
    icon: MessageCircle,
    title: "Message",
    description: "WhatsApp us your dates.",
    color: "bg-[#25d366]",
    lightColor: "bg-green-50",
    textColor: "text-[#25d366]",
    whatsappPreview: true},
  {
    number: 3,
    icon: CheckCircle,
    title: "Confirm",
    description: "We confirm price & details.",
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600"},
  {
    number: 4,
    icon: Plane,
    title: "Travel",
    description: "We handle the logistics.",
    color: "bg-violet-600",
    lightColor: "bg-violet-50",
    textColor: "text-violet-600"},
];

export default function HowItWorks() {
  return (
    <section
      className="bg-white py-16 lg:py-20"
      aria-label="How it works"
    >
      <Container>
        <SectionHeader
          accent="Ready in 4 steps"
          title="How it works"
        />

        {/* Steps grid */}
        <div className="relative mt-10">
          {/* Connector line — desktop only */}
          <div
            className="absolute top-[2.125rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] hidden h-px bg-gradient-to-r from-blue-200 via-green-200 to-violet-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className={`relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full ${step.color} text-white shadow-md ring-4 ring-white z-10`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span
                      className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-slate-900 shadow-sm ring-1 ring-slate-200"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-4 font-jost text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed max-w-[10rem]">
                    {step.description}
                  </p>

                  {/* WhatsApp chat preview — step 2 */}
                  {step.whatsappPreview && (
                    <div className="mt-3 w-full max-w-[180px] rounded-xl border border-green-100 bg-green-50 p-3 text-left shadow-sm">
                      {/* Incoming message bubble */}
                      <div className="flex justify-start mb-1.5">
                        <span className="inline-block rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 text-[10px] text-slate-700 shadow-sm max-w-[90%]">
                          Hi, I need KLIA pickup on 15 July, 2 pax 🙂
                        </span>
                      </div>
                      {/* Outgoing reply */}
                      <div className="flex justify-end">
                        <span className="inline-block rounded-lg rounded-tr-none bg-[#dcf8c6] px-2.5 py-1.5 text-[10px] text-slate-700 shadow-sm max-w-[90%]">
                          Sure! I'll confirm the details now ✓✓
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
