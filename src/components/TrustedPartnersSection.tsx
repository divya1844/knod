import { motion } from "motion/react";

const PARTNERS = ["OASIS SPACE", "CULTURE HUB", "VERTEX EXPO", "LUMEN CAMPUS", "KNOD EVENT"];

export function TrustedPartnersSection() {
  return (
    <section className="pb-6 relative overflow-hidden flex flex-col">
      <h3 className="text-center text-sm font-semibold tracking-widest text-brand-black/40 mb-4">
        Trusted Partners
      </h3>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Block 1 */}
          {PARTNERS.map((name) => (
            <div
              key={`a-${name}`}
              className="text-brand-black/30 text-xl font-bold tracking-tight px-12 md:px-16 shrink-0"
            >
              {name}
            </div>
          ))}
          {/* Block 2 (duplicate for seamless loop) */}
          {PARTNERS.map((name) => (
            <div
              key={`b-${name}`}
              className="text-brand-black/30 text-xl font-bold tracking-tight px-12 md:px-16 shrink-0"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
