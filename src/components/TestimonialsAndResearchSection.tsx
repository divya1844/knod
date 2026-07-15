import { useEffect, useRef } from "react";
import { motion, useAnimate } from "motion/react";
import { ExternalLink } from "lucide-react";

function BentoTestimonial({
  quote,
  author,
  role,
  bgClass = "bg-white",
  textClass = "text-brand-black",
  subTextClass = "text-brand-black/70",
  borderClass = "border-white",
  iconBgClass = "bg-white",
  iconTextClass = "text-brand-black",
  pillBgClass = "bg-brand-blue/5",
  pillTextClass = "text-brand-blue",
}: {
  quote: string;
  author: string;
  role: string;
  bgClass?: string;
  textClass?: string;
  subTextClass?: string;
  borderClass?: string;
  iconBgClass?: string;
  iconTextClass?: string;
  pillBgClass?: string;
  pillTextClass?: string;
}) {
  const initials = author
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`rounded-[1.5rem] flex flex-col h-full border ${borderClass} ${bgClass} shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-7 group hover:-translate-y-1.5 transition-transform duration-500`}>
      <p className={`font-light leading-relaxed text-[15px] sm:text-base flex-1 ${textClass}`}>
        "{quote}"
      </p>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-brand-black/5">
        <div className={`w-11 h-11 shrink-0 rounded-[12px] ${iconBgClass} border border-brand-black/5 shadow-sm flex items-center justify-center text-brand-blue font-bold text-sm bg-brand-blue/5`}>
          {initials}
        </div>
        <div className="flex flex-col">
          <span className={`font-sans text-sm tracking-[0.08em] font-semibold ${textClass}`}>
            {author}
          </span>
          <span className={`text-[11px] sm:text-xs ${subTextClass}`}>{role}</span>
        </div>
      </div>
    </div>
  );
}

// Ordered long / short / long / short so two long quotes never sit side by side.
const TESTIMONIALS = [
  {
    quote: "At Chicago Innovation, we are always trying to spark meaningful connections at our monthly events. Knod offers a unique, tech-forward way for our innovation-minded attendees to network that's fun, frictionless, and outcomes-focused.",
    author: "Paul Kitti",
    role: "Vice President, Marketing & Events, Chicago Innovation",
  },
  {
    quote: "I knew who to walk up to and what to talk about. It made the whole experience feel easy for a socially anxious person.",
    author: "Melat Zeru",
    role: "Student, Illinois Tech",
  },
  {
    quote: "It was such a fun and easy way to connect with new people and discover shared interests at a big event. I met several attendees with similar interests, and the conversations flowed naturally. Overall, it was an excellent networking experience!",
    author: "Noelle Rotte",
    role: "MBA",
  },
  {
    quote: "I had a chance to participate in an early app trial - super awesome! I actually met someone very relevant through it.",
    author: "Elina (Kasman) Cooley",
    role: "Founder, Azenity Consulting",
  },
  {
    quote: "Using Knod at Chicago Innovation was phenomenal. The matching was surprisingly accurate we were paired with attendees who aligned closely with our interests, and the conversations felt natural and high-level. It made networking intentional and genuinely valuable.",
    author: "Rylee Johnson",
    role: "MainStreet Investment Advisors, LLC",
  },
  {
    quote: "Knod made me realize that despite being an introvert I do enjoy talking to people. Thank you for developing this!",
    author: "UIC Business Student",
    role: "UIC Business",
  },
  {
    quote: "Getting started with Knod was smooth and intuitive. Mint handled the setup for my event, and it truly elevated the way guests mingled and met each other.",
    author: "Kaya Jones",
    role: "Event Organizer, Forever 22",
  },
];

function TestimonialsMarquee() {
  const [scope, animate] = useAnimate();
  const controls = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    controls.current = animate(
      scope.current,
      { x: ["0%", "-50%"] },
      { duration: 50, ease: "linear", repeat: Infinity }
    );
    return () => controls.current?.stop();
  }, [animate, scope]);

  return (
    <div className="w-full">
      <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] font-sans font-medium tracking-tight mb-10 sm:mb-12 text-center text-brand-black px-4 sm:px-6">
        What People Are Saying
      </h2>

      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => controls.current?.pause()}
        onMouseLeave={() => controls.current?.play()}
      >
        {/* Absolute Gradient Fade Masks */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div ref={scope} className="flex w-max gap-5 sm:gap-6 items-stretch">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[380px] shrink-0"
              aria-hidden={idx >= TESTIMONIALS.length}
            >
              <BentoTestimonial
                quote={t.quote}
                author={t.author}
                role={t.role}
                bgClass="bg-white/95"
                textClass="text-brand-black"
                subTextClass="text-brand-black/70"
                borderClass="border-brand-black/5"
                iconBgClass="bg-white"
                iconTextClass="text-brand-black"
                pillBgClass="bg-brand-blue/5"
                pillTextClass="text-brand-blue"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 relative z-10 w-full overflow-hidden">
      <TestimonialsMarquee />
    </section>
  );
}

export function ResearchStatsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 relative z-10 w-full overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Research Header Card */}
          <div className="bg-[#ff4d00] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
            <h3 className="font-sans text-[2rem] sm:text-[2.5rem] text-white mb-5 tracking-tight leading-tight">
              Validated by Research
            </h3>
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-032-30826-9_27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-semibold inline-flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
            >
              Peer-reviewed · HCI International 2026
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="mt-5 inline-flex items-center gap-2 w-fit rounded-full bg-white/15 px-3 py-1.5 text-white text-[11px] font-semibold uppercase tracking-[0.12em]">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Patent Pending
            </span>
          </div>

          {/* Stat 1 */}
          <div className="bg-[#0033ff] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
            <span className="text-[5rem] sm:text-[6rem] font-medium leading-none tracking-tight text-white mb-4">
              12<span className="text-[3.5rem] sm:text-[4.5rem]">x</span>
            </span>
            <p className="font-sans text-sm tracking-[0.15em] font-semibold text-white mb-4 leading-relaxed">
              More Connections
            </p>
            <p className="text-white/80 text-[13px] font-light leading-relaxed max-w-[260px]">
              with Knod than manual networking (12 meaningful matches in 3 minutes vs. 1 match in 3 minutes)
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#FD3482] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
            <span className="text-[4rem] sm:text-[5rem] font-medium leading-none tracking-tight text-white mb-4 flex items-start justify-center text-center w-full">
              <span>65.2</span>
              <span className="text-[2.5rem] sm:text-[3.5rem] mt-1 ml-1">
                %
              </span>
            </span>
            <p className="font-sans text-xs sm:text-sm tracking-[0.15em] font-semibold text-white leading-relaxed">
              Of users say AI makes networking MORE meaningful, not less
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
