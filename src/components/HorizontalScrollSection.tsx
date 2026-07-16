import { motion } from "motion/react";
import { ArrowRight, ClipboardList, SlidersHorizontal, Share2, Send, QrCode, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HOST_STEPS = [
  { icon: ClipboardList, title: "Paste your event link", desc: "Luma, Eventbrite, Partiful, and more. Knod spins up instantly." },
  { icon: SlidersHorizontal, title: "Customize your spots", desc: "Set your meeting spots and the questions you want to ask." },
  { icon: Share2, title: "Share the link", desc: "Send it to your attendees. Knod handles the rest." },
];

const ATTENDEE_STEPS = [
  { icon: Send, title: "Share your intent", desc: "Say who you are hoping to meet, so Knod knows who to suggest." },
  { icon: QrCode, title: "Scan at the venue", desc: "Scan the QR code and start Knodding. No download, no app." },
  { icon: Users, title: "Meet in person", desc: "Meet the right people, introduced by shared goals and interests." },
];

function Track({
  label,
  steps,
}: {
  label: string;
  steps: { icon: typeof Send; title: string; desc: string }[];
}) {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-5 md:mb-8">
        <span className="w-2 h-2 rounded-full bg-brand-blue" />
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-black/60">{label}</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * i }}
            className="bg-white rounded-[1.25rem] md:rounded-[1.5rem] p-3 sm:p-6 border border-brand-black/5 shadow-sm flex flex-col items-start gap-2.5 sm:gap-5 group hover:border-brand-blue/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
          >
            <div className="w-9 h-9 sm:w-14 sm:h-14 shrink-0 rounded-lg sm:rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <step.icon className="w-4 h-4 sm:w-7 sm:h-7" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-[13px] sm:text-lg font-semibold tracking-tight text-brand-black mb-1 leading-tight">{step.title}</h3>
              <p className="text-brand-black/60 text-[11px] sm:text-[15px] leading-snug sm:leading-relaxed font-light">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HorizontalScrollSection() {
  return (
    <section className="relative bg-[#f5f5f7] border-t border-brand-black/5 py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-16">
          <div className="flex items-center justify-center gap-3 text-brand-blue font-semibold tracking-[0.2em] text-xs mb-6">
            <span className="w-8 h-px bg-brand-blue/30" />
            <span>How Knod Works</span>
            <span className="w-8 h-px bg-brand-blue/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-brand-black mb-6">
            Simple for hosts. <span className="italic font-light text-brand-blue">Effortless for guests.</span>
          </h2>
          <p className="text-brand-black/60 text-lg font-light leading-relaxed">
            Knod uses math, AI, and low-friction design to read intent and connect the right people. Three steps for you, three for your guests. Knod handles the rest.
          </p>
        </div>

        {/* Two tracks stacked: Hosts (3 across), then Attendees (3 across) */}
        <div className="flex flex-col gap-12 md:gap-16">
          <Track label="For Hosts" steps={HOST_STEPS} />
          <Track label="For Attendees" steps={ATTENDEE_STEPS} />
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-brand-black font-semibold hover:text-brand-blue transition-colors group"
          >
            See the full breakdown
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
