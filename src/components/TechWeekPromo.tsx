import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HOST_SIGNUP_URL, HOST_CTA_LABEL } from "../lib/cta";

// TechChicago Week 2026 promo, co-branded with In Good Company.
// Copy mirrors the approved IGC x Knod partnership graphic. Framing note:
// Knod is the connection layer hosts add to their events, not an event platform.

export function TechWeekPromo() {
  return (
    <section className="px-4 lg:px-8 max-w-[1400px] mx-auto py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] bg-white border border-brand-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] overflow-hidden relative"
      >
        {/* IGC brand color bar */}
        <div className="flex h-2 w-full">
          <div className="flex-1 bg-[#E0A93D]" />
          <div className="flex-1 bg-[#E39B7B]" />
          <div className="flex-1 bg-[#B5654B]" />
          <div className="flex-1 bg-[#6E82C7]" />
          <div className="flex-1 bg-[#1E3A2E]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-14 p-8 sm:p-10 lg:p-14">
          {/* Left: recommended-event badge */}
          <div className="shrink-0 order-2 lg:order-1">
            <img
              src="/partner/techchicago-recommended-2026.png"
              alt="TechChicago Week Recommended Event 2026"
              className="w-[180px] sm:w-[220px] h-auto"
            />
          </div>

          {/* Right: copy + CTA */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-[#B5654B] mb-2">
              TechChicago Week 2026 · July 20 to 26
            </span>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-black/40 mb-3">
              In Good Company Co. <span className="text-brand-black/25">×</span> Knod
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-medium tracking-tight text-[#1E3A2E] leading-[1.05] mb-4">
              Turning rooms into <span className="text-[#B5654B]">connections.</span>
            </h2>
            <p className="text-brand-black/65 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              In Good Company Co. is teaming up with Knod, AI-powered connection infrastructure, to bring free, frictionless networking to every TechChicago Week event this year. Sign up, paste your event link from Luma or wherever you host, and share your link and banner. Guests tap the link to say who they want to meet, then scan the QR at the event and start Knodding. No app, no downloads, no cold intros.
            </p>

            {/* 12x stat bar */}
            <div className="inline-flex items-center gap-4 rounded-2xl bg-[#1E3A2E] text-white px-6 py-4 mb-6 w-full sm:w-auto">
              <span className="text-4xl sm:text-5xl font-semibold text-[#E0A93D] leading-none">
                12<span className="text-2xl sm:text-3xl">x</span>
              </span>
              <span className="text-sm font-medium leading-snug text-left">
                more meaningful connections
                <br />
                in the same room, the same three minutes.
              </span>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href={HOST_SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-[#B5654B] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#9d543c] transition-colors shadow-lg group"
              >
                {HOST_CTA_LABEL}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Presented by */}
            <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/35">Presented by</span>
              <div className="flex items-center gap-4">
                <img src="/partner/in-good-company.png" alt="In Good Company" className="h-10 w-auto" />
                <span className="text-brand-black/25 text-lg font-light">×</span>
                <span className="font-bold text-xl tracking-tighter text-brand-accent-blue">Knod</span>
              </div>
              <span className="text-[11px] text-brand-black/40">Part of TechChicago Week 2026 · Chicago Connection Lab</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
