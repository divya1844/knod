import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, QrCode, Users, Zap, BarChart3 } from "lucide-react";

export function HorizontalScrollSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const updateScrollRange = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.parentElement
      ) {
        const scrollContentWidth = scrollContainerRef.current.scrollWidth;
        const visibleWidth =
          scrollContainerRef.current.parentElement.offsetWidth;
        setScrollRange(Math.max(0, scrollContentWidth - visibleWidth));
      }
    };

    updateScrollRange();

    const observer = new ResizeObserver(() => updateScrollRange());
    observer.observe(scrollContainerRef.current);
    if (scrollContainerRef.current.parentElement) {
      observer.observe(scrollContainerRef.current.parentElement);
    }

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section
      ref={targetRef}
      className="relative xl:h-[400vh] h-auto bg-transparent border-t border-brand-black/5 font-sans z-10"
    >
      <div className="xl:sticky relative top-0 xl:h-screen flex flex-col justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-12 xl:overflow-hidden overflow-visible">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -z-10 xl:translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1600px] w-full mx-auto flex flex-col xl:flex-row gap-16 xl:gap-24 items-start xl:items-center">
          {/* Left Content */}
          <div className="xl:w-1/3 flex flex-col justify-center shrink-0 w-full">
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
              className="text-brand-black/60 text-lg sm:text-xl mb-10 max-w-md font-light leading-relaxed"
            >
              From check-in to post-event analytics, Knod handles the heavy
              lifting so you can focus on the experience. Drag, scroll, or
              swipe.
            </motion.p>

            <div className="hidden xl:flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-black text-white flex items-center justify-center shadow-lg hover:bg-brand-blue transition-colors cursor-pointer group">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Content - Horizontal Scroll */}
          <div className="xl:w-2/3 w-full">
            <div className="xl:overflow-hidden overflow-visible relative w-full pr-0">
              <motion.div
                ref={scrollContainerRef}
                style={{ x }}
                className="flex flex-col xl:flex-row gap-6 sm:gap-8 w-full xl:w-max xl:pr-12"
              >
                {[
                  {
                    title: "Attendees Arrive at Your Event",
                    desc: "They scan a QR code. No download. No app. Answer 3-5 questions about why they're here, what they're interested in, and what they're hoping to get from the event.",
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
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="w-full sm:w-full xl:w-[420px] 2xl:w-[500px] shrink-0 bg-white border border-brand-black/5 rounded-[2rem] p-8 sm:p-10 2xl:p-12 flex flex-col relative group hover:-translate-y-2 transition-transform duration-500"
                  >
                    <div className="flex justify-between items-center mb-10 sm:mb-12 cursor-pointer">
                      <span className="text-brand-blue tracking-[0.2em] font-sans text-sm font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-brand-black/40 text-xs tracking-[0.2em] ">
                        STEP 0{i + 1}
                      </span>
                    </div>

                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-brand-black/10 bg-white shadow-sm flex items-center justify-center mb-8 sm:mb-10 shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </div>

                    <h3 className="text-[2rem] sm:text-[2.25rem] 2xl:text-[2.5rem] font-sans font-medium tracking-tight mb-4 leading-[1.1] text-brand-black relative z-10">
                      {card.title}
                    </h3>

                    <p className="text-brand-blue text-sm font-semibold tracking-widest  mb-6 relative z-10">
                      {card.label}
                    </p>

                    <p className="text-brand-black/70 text-base sm:text-lg leading-relaxed relative z-10 font-light">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
