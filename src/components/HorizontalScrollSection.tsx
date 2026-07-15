import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowRight, QrCode, Users, ClipboardList, SlidersHorizontal, Share2, Send } from "lucide-react";

const STEPS = [
  {
    title: "Paste your event link",
    desc: "Paste your event link from Luma, Eventbrite, Partiful, and more. Knod spins up instantly.",
    icon: <ClipboardList className="w-6 h-6 text-brand-black" />,
    label: "PASTE",
    track: "FOR HOSTS",
  },
  {
    title: "Customize your spots",
    desc: "Set your meeting spots and the questions you want to ask your guests.",
    icon: <SlidersHorizontal className="w-6 h-6 text-brand-black" />,
    label: "CUSTOMIZE",
    track: "FOR HOSTS",
  },
  {
    title: "Share the link",
    desc: "Share the link with your attendees. That's it. Knod handles the rest.",
    icon: <Share2 className="w-6 h-6 text-brand-black" />,
    label: "SHARE",
    track: "FOR HOSTS",
  },
  {
    title: "Share your intent",
    desc: "Guests share what they're hoping to get from the event, so Knod knows who they should meet.",
    icon: <Send className="w-6 h-6 text-brand-black" />,
    label: "SHARE",
    track: "FOR ATTENDEES",
  },
  {
    title: "Scan at the venue",
    desc: "Scan the QR code at the venue and start Knodding. No download, no app.",
    icon: <QrCode className="w-6 h-6 text-brand-black" />,
    label: "SCAN",
    track: "FOR ATTENDEES",
  },
  {
    title: "Meet in person",
    desc: "Meet the right people in person, introduced by shared goals and interests.",
    icon: <Users className="w-6 h-6 text-brand-black" />,
    label: "MEET",
    track: "FOR ATTENDEES",
  },
];

const COUNT = STEPS.length;

/** Haptic tap, fails silently on unsupported devices */
function haptic() {
  try {
    if (typeof window !== "undefined" && navigator?.vibrate) {
      navigator.vibrate(10);
    }
  } catch {
    /* no-op */
  }
}

/**
 * Returns the visual "depth" of card `i` relative to `activeIndex`.
 * 0 = front/active, 1 = first behind, 2 = second behind, 3 = third behind.
 */
function getDepth(i: number, activeIndex: number): number {
  return (i - activeIndex + COUNT) % COUNT;
}

const springConfig = {
  type: "spring",
  stiffness: 220,
  damping: 24,
  mass: 0.8,
};

const desktopCardVariants = {
  active: {
    x: 0,
    scale: 1,
    zIndex: 40,
    boxShadow: "0 24px 64px -12px rgba(0,0,0,0.15), 0 8px 24px -6px rgba(0,0,0,0.08)",
  },
  depth1: {
    x: 45,
    scale: 0.94,
    zIndex: 30,
    boxShadow: "0 16px 40px -10px rgba(0,0,0,0.1)",
  },
  depth2: {
    x: 85,
    scale: 0.88,
    zIndex: 20,
    boxShadow: "0 12px 30px -8px rgba(0,0,0,0.08)",
  },
  depth3: {
    x: 120,
    scale: 0.82,
    zIndex: 10,
    boxShadow: "0 8px 20px -6px rgba(0,0,0,0.05)",
  },
};

const mobileCardVariants = {
  active: {
    x: 0,
    scale: 1,
    zIndex: 40,
    boxShadow: "0 20px 48px -10px rgba(0,0,0,0.15), 0 8px 20px -6px rgba(0,0,0,0.08)",
  },
  depth1: {
    x: 20,
    scale: 0.95,
    zIndex: 30,
    boxShadow: "0 12px 30px -8px rgba(0,0,0,0.1)",
  },
  depth2: {
    x: 35,
    scale: 0.9,
    zIndex: 20,
    boxShadow: "0 8px 20px -6px rgba(0,0,0,0.08)",
  },
  depth3: {
    x: 48,
    scale: 0.85,
    zIndex: 10,
    boxShadow: "0 4px 12px -4px rgba(0,0,0,0.05)",
  },
};

export function HorizontalScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    haptic();
    setActiveIndex((prev) => (prev + 1) % COUNT);
  }, []);

  const handlePrev = useCallback(() => {
    haptic();
    setActiveIndex((prev) => (prev - 1 + COUNT) % COUNT);
  }, []);

  const handleDotClick = useCallback((i: number) => {
    haptic();
    setActiveIndex(i);
  }, []);

  /** Render a single step card */
  const renderCard = (card: (typeof STEPS)[number], i: number, depth: number) => (
    <motion.div
      className="h-full flex flex-col"
      animate={{ opacity: depth === 0 ? 1 : 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-10 xl:mb-12">
        <span className="text-brand-blue tracking-[0.25em] font-sans text-sm font-semibold">
          0{i + 1}
        </span>
        <span className="text-brand-blue/70 text-[11px] font-semibold tracking-[0.2em]">
          {card.track}
        </span>
      </div>

      <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-[1.25rem] border border-brand-black/5 bg-white shadow-sm flex items-center justify-center mb-10 xl:mb-12 shrink-0 relative z-10">
        {card.icon}
      </div>

      <h3 className="text-[1.85rem] xl:text-[2.25rem] 2xl:text-[2.5rem] font-sans font-medium tracking-tight mb-4 leading-[1.15] text-brand-black">
        {card.title}
      </h3>

      <p className="text-brand-blue/90 text-xs font-bold tracking-[0.15em] uppercase mb-6">
        {card.label}
      </p>

      <p className="text-brand-black/60 text-base xl:text-lg leading-[1.6] font-light">
        {card.desc}
      </p>
    </motion.div>
  );

  /** Render controls: prev/next arrows + progress dashes */
  const renderControls = () => (
    <div className="flex items-center gap-4 mt-12 sm:mt-16">
      <button
        onClick={handlePrev}
        aria-label="Previous step"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-black/5 text-brand-black flex items-center justify-center shadow-sm hover:bg-brand-black/10 active:scale-95 transition-all cursor-pointer group"
      >
        <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next step"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-black text-white flex items-center justify-center shadow-lg hover:bg-brand-blue active:scale-95 transition-all cursor-pointer group"
      >
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      {/* Step indicator dashes */}
      <div className="flex items-center gap-2 ml-4">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to step ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
              i === activeIndex
                ? "w-8 bg-brand-blue"
                : "w-3 bg-brand-black/15 hover:bg-brand-black/30"
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative h-auto bg-transparent border-t border-brand-black/5 font-sans z-10">
      <div className="relative flex flex-col justify-center py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -z-10 xl:translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1600px] w-full mx-auto flex flex-col xl:flex-row gap-16 xl:gap-20 items-start xl:items-center">
          {/* ── Left Content ── */}
          <div className="xl:w-[38%] 2xl:w-[35%] flex flex-col justify-center shrink-0 w-full">
            <div className="flex items-center gap-4 text-brand-blue font-semibold tracking-[0.2em] text-xs mb-10 sm:mb-12">
              <span>03</span>
              <div className="w-12 h-px bg-brand-blue/30" />
              <span>How Knod Works</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] font-sans font-medium tracking-tight mb-8 text-brand-black"
            >
              Seamless <br className="hidden sm:block" />
              integration.
              <br className="hidden sm:block" />
              <span className="italic font-light text-brand-blue block sm:inline mt-2 sm:mt-0">
                Real impact.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-black/60 text-lg sm:text-xl max-w-md font-light leading-relaxed"
            >
              Three simple steps for hosts, three for your guests. Knod handles
              the rest so you can focus on the experience.
            </motion.p>
          </div>

          {/* ── Right Content: Stacked Card Deck ── */}
          <div className="xl:w-[62%] 2xl:w-[65%] w-full flex flex-col">

            {/* ─── Desktop Deck (xl+) ─── */}
            <div className="hidden xl:flex flex-col">
              {/* Deck container, overflow visible so stacked edges show */}
              <div
                className="relative w-full"
                style={{ height: "540px" }}
              >
                {STEPS.map((card, i) => {
                  const depth = getDepth(i, activeIndex);
                  const state = depth === 0 ? "active" : `depth${Math.min(depth, 3)}`;

                  return (
                    <motion.div
                      key={i}
                      className="absolute top-0 left-0 w-[440px] 2xl:w-[480px] h-[540px] bg-white border border-brand-black/[0.03] rounded-[2rem] p-10 2xl:p-12 flex flex-col cursor-default select-none"
                      variants={desktopCardVariants}
                      initial={false}
                      animate={state}
                      transition={springConfig}
                      style={{
                        transformOrigin: "center left",
                        pointerEvents: depth === 0 ? "auto" : "none",
                      }}
                    >
                      {renderCard(card, i, depth)}
                    </motion.div>
                  );
                })}
              </div>

              {/* Controls under the deck */}
              {renderControls()}
            </div>

            {/* ─── Mobile/Tablet Deck (<xl) ─── */}
            <div className="xl:hidden flex flex-col">
              {/* Stacked deck, simplified for mobile */}
              <div
                className="relative w-full"
                style={{ height: "500px" }}
              >
                {STEPS.map((card, i) => {
                  const depth = getDepth(i, activeIndex);
                  const state = depth === 0 ? "active" : `depth${Math.min(depth, 3)}`;

                  return (
                    <motion.div
                      key={i}
                      className="absolute top-0 left-0 w-[calc(100%-60px)] sm:w-[400px] h-[500px] bg-white border border-brand-black/[0.04] rounded-[2rem] p-8 sm:p-10 flex flex-col cursor-default select-none"
                      variants={mobileCardVariants}
                      initial={false}
                      animate={state}
                      transition={springConfig}
                      style={{
                        transformOrigin: "center left",
                        pointerEvents: depth === 0 ? "auto" : "none",
                      }}
                    >
                      {renderCard(card, i, depth)}
                    </motion.div>
                  );
                })}
              </div>

              {/* Controls under the deck */}
              {renderControls()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
