import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { QuoteForm } from "../components/QuoteForm";

const SALES_EMAIL = "sales@knod.ai";

const TIERS = [
  { name: "Starter", blurb: "For a first event or a small community." },
  { name: "Growth", blurb: "For organizers running events regularly." },
  { name: "Strategic Founding", blurb: "For larger organizations and multi-event programs." },
];

export function PricingPage() {
  useSEO({
    title: "Request a Quote | Knod",
    description: "Tell us about your event and we'll send you a custom Knod quote. Enterprise and white-label options available.",
  });

  const [plan, setPlan] = useState("");

  return (
    <main className="flex-1 w-full pt-32 pb-24 relative bg-[#f5f5f7]">
      {/* Hero */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Request a custom quote
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/60 font-light max-w-2xl mx-auto">
            Tell us about your event and we'll send you pricing built around it. No account required, no obligation.
          </p>
        </motion.div>
      </section>

      {/* Tier headers + form */}
      <section className="px-4 lg:px-8 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Left: pick a starting point */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-black/60 mb-5">
              Pick a starting point
            </h2>
            <div className="flex flex-col gap-3">
              {TIERS.map((tier) => {
                const selected = plan === tier.name;
                return (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setPlan(selected ? "" : tier.name)}
                    className={`text-left rounded-[1.5rem] p-5 sm:p-6 border transition-all cursor-pointer ${
                      selected
                        ? "bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20"
                        : "bg-white text-brand-black border-brand-black/5 hover:border-brand-blue/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold tracking-tight">{tier.name}</span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                          selected ? "bg-white/20 border-white/40" : "border-brand-black/15"
                        }`}
                      >
                        {selected && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                      </span>
                    </div>
                    <p className={`text-sm mt-1.5 ${selected ? "text-white/80" : "text-brand-black/55"}`}>
                      {tier.blurb}
                    </p>
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-brand-black/55 mt-6 leading-relaxed">
              Need enterprise or a white-label deployment?{" "}
              <a href={`mailto:${SALES_EMAIL}`} className="font-semibold text-brand-blue hover:underline">
                Contact sales
              </a>
              .
            </p>
          </div>

          {/* Right: the quote form */}
          <div className="relative rounded-[2rem] border border-white/45 bg-white/70 backdrop-blur-2xl p-8 sm:p-10 shadow-xl overflow-hidden">
            <div className="absolute top-[-30%] right-[-20%] w-[250px] h-[250px] rounded-full bg-brand-blue/15 blur-[60px] pointer-events-none" />
            <h3 className="text-2xl font-extrabold tracking-tight text-brand-black mb-1 relative z-10">
              {plan ? `${plan} quote` : "Your event details"}
            </h3>
            <p className="text-sm text-brand-black/70 mb-6 relative z-10">
              We'll follow up with a custom quote by email.
            </p>
            <div className="relative z-10">
              <QuoteForm source="pricing_page" plan={plan || undefined} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
