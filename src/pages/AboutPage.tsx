import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import knodLogo from '../assets/images/knod-logo-white.png';
import { useSEO } from "../hooks/useSEO";

export function AboutPage() {
  useSEO({
    title: "About Us | Knod",
    description: "Every meaningful opportunity begins with a conversation. Knod helps people discover the right conversations in the spaces they already share: events, campuses, and communities.",
  });

  const reduce = useReducedMotion();
  const reveal = {
    initial: reduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-white">
      {/* 1. Hero */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:min-h-[600px]">
          {/* Left Block */}
          <div className="bg-[#f5f5f7] rounded-[2rem] p-10 lg:p-16 flex flex-col justify-center h-full">
            <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Knod AI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
              Connecting people in <span className="italic font-light text-brand-blue">shared spaces.</span>
            </h1>
            <p className="text-lg text-brand-black/70 max-w-xl">
              Every meaningful opportunity begins with a conversation. Knod helps people discover the right conversations so they can spend less time searching and more time connecting. Built for community leaders, event hosts and conference directors to curate meaningful experiences.
            </p>
          </div>

          {/* Right Block */}
          <div className="bg-brand-accent-blue rounded-[2rem] relative h-[400px] lg:h-full overflow-hidden flex items-center justify-center">
            <img src={knodLogo} className="w-[45%] max-w-[280px] h-auto object-contain" alt="Knod" />
          </div>
        </div>
      </section>

      {/* 2. Origin story */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-24 md:mb-36">
        <motion.h2 {...reveal} className="text-3xl md:text-5xl font-medium tracking-tight text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-[1.15]">
          Every Great Connection <span className="italic font-light text-brand-blue">Starts Somewhere.</span>
        </motion.h2>

        <motion.div {...reveal} className="max-w-3xl mx-auto flex flex-col gap-6 text-lg md:text-xl text-brand-black/70 leading-relaxed">
          <p>
            Every event brings together people with the potential to inspire, collaborate, mentor, hire, invest, or become lifelong friends. Too often, those opportunities are missed simply because people don't know where to start. Knod was created to change that while also fostering real human connection. Recognizing that nothing is more meaningful than a connection in person curated by shared interests Knod took shape in the heart of Chicago. Beginning as a simple idea shared across college campuses and later embraced by communities throughout the local technology ecosystem, Knod has continued to evolve with one belief at its core: meaningful connections should happen naturally and efficiently, wherever people gather.
          </p>

          <blockquote className="border-l-2 border-brand-blue pl-6 my-2 text-brand-black text-2xl md:text-3xl font-medium leading-snug tracking-tight">
            Meaningful connections should happen naturally and efficiently, wherever people gather.
          </blockquote>

          <p>
            Knod is building the connection infrastructure for physical spaces helping organizers create environments where conversations happen with greater purpose and ease. Rather than asking attendees to download another app or navigate a complicated platform, Knod works effortlessly through a simple event link or QR code, becoming active only for the duration of an event. In seconds, attendees can discover the people they're most likely to learn from, collaborate with, hire, mentor, or do business with, while organizers create experiences remembered not just for what happened on stage, but for the relationships that continued long after the event ended.
          </p>
          <p>
            This is only the beginning. Knod envisions a future where technology quietly supports human connection wherever communities gather from conferences and campuses to neighborhood events, pop-ups, collaborative experiences, and beyond. As the platform grows, so does its mission: creating thoughtful ways for people to meet, engage, and build lasting relationships in the spaces they already share.
          </p>
        </motion.div>
      </section>

      {/* 3. Closing bookend */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-16">
        <div className="bg-[#f5f5f7] rounded-[2rem] px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black leading-[1.1] mb-10 max-w-3xl">
            Connecting people in <span className="italic font-light text-brand-blue">shared spaces.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/launch-partner" className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-colors flex items-center justify-center gap-2">
              Become a Launch Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
