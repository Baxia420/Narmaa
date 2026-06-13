import { Search, MessageCircle, CheckCircle, Plane } from "lucide-react";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Browse",
    description: "Find a car, stay, or tour.",
    color: "bg-blue-500",
    shadow: "shadow-[0_0_20px_rgba(59,130,246,0.6)]",
  },
  {
    number: 2,
    icon: MessageCircle,
    title: "Message",
    description: "WhatsApp us your dates.",
    color: "bg-emerald-500",
    shadow: "shadow-[0_0_20px_rgba(16,185,129,0.6)]",
    whatsappPreview: true,
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Confirm",
    description: "We confirm price & details.",
    color: "bg-violet-500",
    shadow: "shadow-[0_0_20px_rgba(139,92,246,0.6)]",
  },
  {
    number: 4,
    icon: Plane,
    title: "Travel",
    description: "We handle the logistics.",
    color: "bg-rose-500",
    shadow: "shadow-[0_0_20px_rgba(244,63,94,0.6)]",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 py-16 lg:py-24"
      aria-label="How it works"
    >
      <Container>
        <div className="text-center mb-16">
          <span className="font-script text-2xl text-cyan-400">Ready in 4 steps</span>
          <h2 className="mt-2 font-jost text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">How it works</h2>
        </div>

        {/* Steps grid */}
        <div className="relative mt-10">
          {/* Connector line - desktop only */}
          <div
            className="absolute top-[2.125rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] hidden h-px bg-gradient-to-r from-blue-500/50 via-emerald-500/50 to-rose-500/50 lg:block"
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
                  <div className={`relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full ${step.color} text-white ${step.shadow} z-10`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span
                      className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-slate-900 shadow-sm"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-jost text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-[10rem]">
                    {step.description}
                  </p>

                  {/* WhatsApp chat preview - step 2 */}
                  {step.whatsappPreview && (
                    <div className="mt-5 w-full max-w-[180px] rounded-xl border border-white/10 bg-white/5 p-3 text-left shadow-lg backdrop-blur-sm">
                      {/* Incoming message bubble */}
                      <div className="flex justify-start mb-2">
                        <span className="inline-block rounded-lg rounded-tl-none bg-slate-700 px-2.5 py-1.5 text-[10px] text-white shadow-sm max-w-[90%]">
                          Hi, KLIA pickup 15 July, 2 pax 🙂
                        </span>
                      </div>
                      {/* Outgoing reply */}
                      <div className="flex justify-end">
                        <span className="inline-block rounded-lg rounded-tr-none bg-emerald-500 px-2.5 py-1.5 text-[10px] text-white shadow-sm max-w-[90%]">
                          Sure! Confirming details now ✓✓
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
