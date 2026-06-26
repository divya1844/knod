import { motion } from "motion/react";

export function TrustedPartnersSection() {
  return (
    <section className="pb-24 relative overflow-hidden flex flex-col">
      <h3 className="text-center text-sm font-semibold tracking-widest text-brand-black/40  mb-12">
        Trusted Partners
      </h3>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      <div className="flex w-max relative overflow-hidden">
        <motion.div
          className="flex gap-20 md:gap-32 w-max px-10 items-center justify-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {/* Block 1 */}
          <div className="flex gap-20 md:gap-32 items-center">
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              OASIS SPACE
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              CULTURE HUB
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              VERTEX EXPO
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              LUMEN CAMPUS
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              KNOD EVENT
            </div>
          </div>
          {/* Block 2 (duplicate) */}
          <div className="flex gap-20 md:gap-32 items-center ml-20 md:ml-32">
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              OASIS SPACE
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              CULTURE HUB
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              VERTEX EXPO
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              LUMEN CAMPUS
            </div>
            <div className="text-brand-black/30 text-xl font-bold tracking-tight">
              KNOD EVENT
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
