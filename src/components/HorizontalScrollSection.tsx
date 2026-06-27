import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, QrCode, Users, Zap, BarChart3 } from "lucide-react";

const STEPS = [
  {
    title: "Attendees Arrive at Your Event",
    desc: 'They scan a QR code. No download. No app. Answer 3-5 questions about why they\'re here, what they\'re interested in, and what they\'re hoping to get from the event.',
    icon: <QrCode className="w-6 h-6 text-brand-black" />,
    label: "CHECK IN",
  },
  {
    title: "AI Finds Their Best Matches",
    desc: 'Our AI analyzes interests, goals, and context to find people who should meet. Real-time notifications: "You matched with Sarah—she\'s also interested in AI and fundraising."',
    icon: <Zap className="w-6 h-6 text-brand-black" />,
    label: "MATCH",
  },
  {
    title: "They Meet in Person",
    desc: "Knod facilitates the introduction. Provides conversation starters. Then steps back. The rest is human.",
    icon: <Users className="w-6 h-6 text-brand-black" />,
    label: "CONNECT",
  },
  {
    title: "Organizers See the Impact",
    desc: "Live dashboard shows match quality, conversation topics, engagement levels. Learn what worked. Improve your next event.",
    icon: <BarChart3 className="w-6 h-6 text-brand-black" />,
    label: "ANALYZE",
  },
];

const COUNT = STEPS.length;

/** Haptic tap — fails silently on unsupported devices */
function haptic() {
  try {
    navigator?.vibrate?.(10);
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

/** Compute per-card styles for the stacked deck on desktop */
function getDeckStyle(depth: number): React.CSSProperties {
  // depth 0 = active (front), 1-3 = stacked behind
  const configs = [
    // Active card: full size, no offset, highest z, full shadow
    {
      translateX: 0,
      translateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 40,
      shadow: "0 20px 60px -12px rgba(0,0,0,0.15), 0 4px 20px -4px rgba(0,0,0,0.08)",
    },
    // 1st behind: peek right edge, slightly smaller, slightly down
    {
      translateX: 32,
      translateY: 6,
      scale: 0.95,
      opacity: 0.7,
      zIndex: 30,
      shadow: "0 12px 40px -8px rgba(0,0,0,0.1), 0 2px 12px -2px rgba(0,0,0,0.06)",
    },
    // 2nd behind
    {
      translateX: 56,
      translateY: 12,
      scale: 0.9,
      opacity: 0.45,
      zIndex: 20,
      shadow: "0 8px 30px -6px rgba(0,0,0,0.08)",
    },
    // 3rd behind (deepest)
    {
      translateX: 74,
      translateY: 18,
      scale: 0.86,
      opacity: 0.25,
      zIndex: 10,
      shadow: "0 4px 20px -4px rgba(0,0,0,0.05)",
    },
  ];

  const c = configs[Math.min(depth, 3)];

  return {
    transform: `translateX(${c.translateX}px) translateY(${c.translateY}px) scale(${c.scale})`,
    opacity: c.opacity,
    zIndex: c.zIndex,
    boxShadow: c.shadow,
    transition: "transform 450ms cubic-bezier(0.32, 0.72, 0, 1), opacity 450ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 450ms cubic-bezier(0.32, 0.72, 0, 1)",
  };
}

/** Compute per-card styles for mobile deck (simpler, tighter offsets) */
function getMobileDeckStyle(depth: number): React.CSSProperties {
  const configs = [
    {
      translateX: 0,
      translateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 40,
      shadow: "0 16px 48px -10px rgba(0,0,0,0.14), 0 4px 16px -4px rgba(0,0,0,0.07)",
    },
    {
      translateX: 16,
      translateY: 6,
      scale: 0.96,
      opacity: 0.6,
      zIndex: 30,
      shadow: "0 8px 28px -6px rgba(0,0,0,0.08)",
    },
    {
      translateX: 28,
      translateY: 12,
      scale: 0.92,
      opacity: 0.35,
      zIndex: 20,
      shadow: "0 4px 16px -4px rgba(0,0,0,0.06)",
    },
    {
      translateX: 36,
      translateY: 16,
      scale: 0.88,
      opacity: 0.2,
      zIndex: 10,
      shadow: "0 2px 10px -2px rgba(0,0,0,0.04)",
    },
  ];

  const c = configs[Math.min(depth, 3)];

  return {
    transform: `translateX(${c.translateX}px) translateY(${c.translateY}px) scale(${c.scale})`,
    opacity: c.opacity,
    zIndex: c.zIndex,
    boxShadow: c.shadow,
    transition: "transform 400ms cubic-bezier(0.32, 0.72, 0, 1), opacity 400ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 400ms cubic-bezier(0.32, 0.72, 0, 1)",
  };
}

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
  const renderCard = (card: (typeof STEPS)[number], i: number) => (
    <>
      <div className="flex justify-between items-center mb-10 sm:mb-12">
        <span className="text-brand-blue tracking-[0.2em] font-sans text-sm font-semibold">
          0{i + 1}
        </span>
        <span className="text-brand-black/40 text-xs tracking-[0.2em]">
          STEP 0{i + 1}
        </span>
      </div>

      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-brand-black/10 bg-white shadow-sm flex items-center justify-center mb-8 sm:mb-10 shrink-0 relative z-10">
        {card.icon}
      </div>

      <h3 className="text-[1.75rem] sm:text-[2rem] xl:text-[2.25rem] 2xl:text-[2.5rem] font-sans font-medium tracking-tight mb-4 leading-[1.1] text-brand-black relative z-10">
        {card.title}
      </h3>

      <p className="text-brand-blue text-sm font-semibold tracking-widest mb-6 relative z-10">
        {card.label}
      </p>

      <p className="text-brand-black/70 text-base sm:text-lg leading-relaxed relative z-10 font-light">
        {card.desc}
      </p>
    </>
  );

  /** Render controls: prev/next arrows + progress dashes */
  const renderControls = () => (
    <div className="flex items-center gap-4 mt-8 sm:mt-10">
      <button
        onClick={handlePrev}
        aria-label="Previous step"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-black/10 text-brand-black flex items-center justify-center shadow-sm hover:bg-brand-black/20 active:scale-95 transition-all cursor-pointer group"
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
      <div className="flex items-center gap-2 ml-3">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to step ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${i === activeIndex
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
      <div className="relative flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -z-10 xl:translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1600px] w-full mx-auto flex flex-col xl:flex-row gap-12 xl:gap-20 items-start xl:items-center">
          {/* ── Left Content ── */}
          <div className="xl:w-[38%] 2xl:w-1/3 flex flex-col justify-center shrink-0 w-full">
            <div className="flex items-center gap-4 text-brand-blue font-semibold tracking-[0.2em] text-xs mb-8 sm:mb-12">
              <span>03</span>
              <div className="w-12 h-px bg-brand-blue/30" />
              <span>How Knod Works</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-sans font-medium tracking-tight mb-6 sm:mb-8 text-brand-black"
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
              From check-in to post-event analytics, Knod handles the heavy
              lifting so you can focus on the experience.
            </motion.p>
          </div>

          {/* ── Right Content: Stacked Card Deck ── */}
          <div className="xl:w-[62%] 2xl:w-2/3 w-full flex flex-col">

            {/* ─── Desktop Deck (xl+) ─── */}
            <div className="hidden xl:block">
              {/* Deck container — overflow visible so stacked edges show */}
              <div
                className="relative w-full"
                style={{ minHeight: "520px" }}
              >
                {STEPS.map((card, i) => {
                  const depth = getDepth(i, activeIndex);
                  const style = getDeckStyle(depth);

                  return (
                    <div
                      key={i}
                      className="absolute top-0 left-0 w-[420px] 2xl:w-[480px] bg-white border border-brand-black/5 rounded-[2rem] p-8 2xl:p-10 flex flex-col cursor-default select-none"
                      style={{
                        ...style,
                        transformOrigin: "top left",
                        pointerEvents: depth === 0 ? "auto" : "none",
                        willChange: "transform, opacity",
                      }}
                    >
                      {renderCard(card, i)}
                    </div>
                  );
                })}
              </div>

              {/* Controls under the deck */}
              {renderControls()}
            </div>

            {/* ─── Mobile/Tablet Deck (<xl) ─── */}
            <div className="xl:hidden">
              {/* Stacked deck — simplified for mobile */}
              <div
                className="relative w-full"
                style={{ minHeight: "440px" }}
              >
                {STEPS.map((card, i) => {
                  const depth = getDepth(i, activeIndex);
                  const style = getMobileDeckStyle(depth);

                  return (
                    <div
                      key={i}
                      className="absolute top-0 left-0 w-[calc(100%-40px)] sm:w-[calc(100%-48px)] bg-white border border-brand-black/5 rounded-[2rem] p-7 sm:p-8 flex flex-col"
                      style={{
                        ...style,
                        transformOrigin: "top left",
                        pointerEvents: depth === 0 ? "auto" : "none",
                        willChange: "transform, opacity",
                      }}
                    >
                      {renderCard(card, i)}
                    </div>
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
