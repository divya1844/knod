import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { CaseImage } from "../components/CaseImage";
import { AGGREGATE, RESEARCH, CASE_STUDIES } from "../lib/caseStudies";
import { HOST_SIGNUP_URL, HOST_CTA_LABEL } from "../lib/cta";

/** Animates a number from 0 to its value once scrolled into view. */
function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const duration = 1600;
    const tick = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  const text = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-US");
  return (
    <span ref={ref}>
      {text}
      <span className="text-brand-black/30">{suffix}</span>
    </span>
  );
}

export function CaseStudiesPage() {
  useSEO({
    title: "Case Studies & Results | Knod",
    description:
      "Real results from the field: live events with Chicago Innovation, a classroom deployment at UIC, and a Google DeepMind hackathon, backed by independent peer-reviewed research.",
  });

  return (
    <main className="flex-1 w-full pt-28 sm:pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero */}
      <section className="px-6 max-w-[860px] mx-auto text-center mb-12 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Proof from the field
          </span>
          <h1 className="text-[2.5rem] leading-[1.05] md:text-5xl lg:text-[4rem] font-medium tracking-tight text-brand-black">
            Real results,{" "}
            <span className="italic font-light text-brand-blue">real rooms.</span>
          </h1>
        </motion.div>
      </section>

      {/* Counting numbers (static, no boxes) */}
      <section className="px-6 max-w-[1000px] mx-auto mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
          {AGGREGATE.map((s) => (
            <div key={s.label} className="px-2 sm:px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black leading-none">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <p className="text-brand-black/55 text-xs sm:text-sm font-medium mt-3 leading-snug max-w-[180px] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Peer-reviewed paper, in the style of its Springer page */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-brand-black/5 shadow-sm overflow-hidden"
        >
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-start">
            <div>
              <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs mb-3 block">
                {RESEARCH.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-medium tracking-tight text-brand-black leading-[1.12] mb-3">
                {RESEARCH.title}
              </h2>
              <p className="text-xs sm:text-sm text-brand-black/55 leading-relaxed font-light">{RESEARCH.authors}</p>

              {/* Mobile: cover beside the book info so the space is used. Desktop keeps the cover in its own column. */}
              <a
                href={RESEARCH.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex md:hidden items-center gap-4"
                aria-label="View the proceedings on Springer"
              >
                <div className="w-[104px] shrink-0 rounded-lg overflow-hidden border border-brand-black/10 shadow-sm bg-white">
                  <CaseImage
                    src={RESEARCH.cover.src}
                    alt={RESEARCH.cover.alt}
                    client="HCI International 2026 Posters"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-black text-sm leading-snug group-hover:text-brand-blue transition-colors">
                    {RESEARCH.bookTitle}
                  </p>
                  <p className="text-brand-black/50 text-xs mt-1">{RESEARCH.pages}</p>
                </div>
              </a>

              <a
                href={RESEARCH.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-7 inline-flex items-center justify-center gap-2 bg-brand-black text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-black/90 transition-colors group w-full sm:w-auto"
              >
                Read the paper on Springer
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Desktop cover column */}
            <a
              href={RESEARCH.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 w-[190px] hidden md:block"
              aria-label="View the proceedings on Springer"
            >
              <div className="rounded-xl overflow-hidden border border-brand-black/10 shadow-sm bg-white group-hover:shadow-md transition-shadow">
                <CaseImage
                  src={RESEARCH.cover.src}
                  alt={RESEARCH.cover.alt}
                  client="HCI International 2026 Posters"
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-3 font-semibold text-brand-black text-sm leading-snug group-hover:text-brand-blue transition-colors">
                {RESEARCH.bookTitle}
              </p>
              <p className="text-brand-black/50 text-xs mt-0.5">{RESEARCH.pages}</p>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Case study cards → detail pages */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto mb-16 md:mb-24">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-black mb-6 sm:mb-8">
          Selected Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CASE_STUDIES.map((study, i) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="group flex flex-col h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-brand-black/5 shadow-sm overflow-hidden hover:-translate-y-1.5 hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-brand-black/5">
                    <CaseImage
                      src={study.hero.src}
                      alt={study.hero.alt}
                      client={study.client}
                      meta={study.meta}
                      className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 bg-[#f5f5f7] rounded-full text-[10px] sm:text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-4">
                      <Icon className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      {study.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-brand-black mb-2">
                      {study.client}
                    </h3>
                    <p className="text-brand-black/60 font-light leading-relaxed text-[15px] mb-5">
                      {study.hook}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                      Read the story
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto mb-16">
        <div className="bg-[#111112] text-white rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/40 blur-[100px]" />
          </div>

          <div className="relative z-10 text-center md:text-left md:w-[60%] lg:w-[70%]">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-sm mb-6 inline-block">
              Your room could be next
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl text-white leading-[1.1]">
              Join UIC, Chicago Innovation, and a Google DeepMind hackathon in turning rooms into
              connections.
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
            <a
              href={HOST_SIGNUP_URL}
              className="bg-[#1AEB7E] text-brand-black px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#1AEB7E]/90 transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-[#1AEB7E]/20 cursor-pointer"
            >
              {HOST_CTA_LABEL}{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
