import { motion, useReducedMotion } from "motion/react";
import knodLogoWhite from '../assets/images/knod-wordmark-white.svg';
import knodFlyer from '../assets/images/knod-flyer-banner.png';
import { useSEO } from "../hooks/useSEO";

export function AboutPage() {
  useSEO({
    title: "About Us | Knod",
    description: "Knod is the connection infrastructure for physical spaces. Not an event app, but the layer that works with the tools you already use so the right people find each other in person.",
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
      {/* 1. Full-width logo banner */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-10 md:mb-20">
        <div className="rounded-[1.5rem] md:rounded-[2rem] h-[150px] md:h-[320px] flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-[#1B93E8] via-brand-accent-blue to-[#1B93E8]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.15),_transparent_65%)] pointer-events-none" />
          <img src={knodLogoWhite} alt="Knod" className="h-20 md:h-44 w-auto relative z-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]" />
        </div>
      </section>

      {/* 2. Hook: what Knod is */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto text-center mb-20 md:mb-28">
        <motion.h1 {...reveal} className="text-4xl md:text-5xl lg:text-[3.75rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
          Connection infrastructure for <span className="italic font-light text-brand-accent-blue">physical spaces.</span>
        </motion.h1>
        <motion.p {...reveal} className="text-lg md:text-xl text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
          The people who could change your path are already in the room, at your events, on your campus, across your community. Knod makes sure the right ones actually find each other, in person.
        </motion.p>
      </section>

      {/* 3. The flyer that started it */}
      <section className="px-4 lg:px-8 max-w-[1100px] mx-auto mb-20 md:mb-28">
        <motion.figure {...reveal} className="flex flex-col items-center">
          <div className="w-full rounded-[2rem] overflow-hidden shadow-xl border border-brand-black/5">
            <img src={knodFlyer} alt="Knod flyer: Human Connection, No App Required. Talk to someone today." className="w-full h-auto" />
          </div>
          <figcaption className="text-sm text-brand-black/50 font-light mt-5 text-center max-w-md">
            The flyer that started it all. First posted on a college campus, this simple reminder sparked conversations that spread across Chicago.
          </figcaption>
        </motion.figure>
      </section>

      {/* 4. Origin story */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-28">
        <motion.h2 {...reveal} className="text-3xl md:text-5xl font-medium tracking-tight text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-[1.15]">
          Every Great Connection <span className="italic font-light text-brand-accent-blue">Starts Somewhere.</span>
        </motion.h2>

        <motion.div {...reveal} className="max-w-3xl mx-auto flex flex-col gap-6 text-lg md:text-xl text-brand-black/70 leading-relaxed">
          <p>
            Every event brings together people with the potential to inspire, collaborate, mentor, hire, invest, or become lifelong friends. Too often, those opportunities are missed simply because people don't know where to start. Knod was created to change that. Recognizing that nothing is more meaningful than an in-person connection built on shared interests, Knod took shape in the heart of Chicago. Beginning as a simple idea shared across college campuses and later embraced by communities throughout the local technology ecosystem, Knod has continued to evolve with one belief at its core: meaningful connections should be easy to make, wherever people gather.
          </p>

          <blockquote className="border-l-2 border-brand-accent-blue pl-6 my-2 text-brand-black text-2xl md:text-3xl font-medium leading-snug tracking-tight">
            Knod is not another social app. It lives in the browser and works with the tools and spaces you already use. The phone gets you to the person. The conversation is the point.
          </blockquote>

          <p>
            That is why Knod works effortlessly through a simple event link or QR code, becoming active only for the duration of an event. In seconds, attendees can discover the people they are most likely to learn from, collaborate with, hire, mentor, or do business with, while organizers create experiences remembered not just for what happened on stage, but for the relationships that continued long after the event ended.
          </p>
          <p>
            Connection does not happen on its own. In a world designed to keep us scrolling, it has to be built for on purpose. That is what Knod is.
          </p>
          <p>
            We build inside a strange paradox. We are more connected by technology than any generation before us, and yet more divided and distracted by it. The same phones and platforms designed to bring us together often keep us apart, heads down, scrolling past the people standing right in front of us. Knod exists to turn that on its head. We take the tools you already carry, your phone, AI, and intelligent, low-friction design, and use them not to pull you deeper into a screen, but to point you back to the person across the room.
          </p>
        </motion.div>
      </section>

      {/* 5. The belief */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-20 md:mb-28">
        <motion.blockquote {...reveal} className="text-center">
          <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-brand-black leading-[1.2] max-w-3xl mx-auto">
            Knod is only successful when you put your phone down and talk to the person in front of you.
          </p>
          <p className="text-lg text-brand-black/50 font-light mt-8">
            The AI stays in the background. People stay in the foreground.
          </p>
        </motion.blockquote>
      </section>

      {/* 5b. Highlighted thesis */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-28">
        <motion.div
          {...reveal}
          className="rounded-[2rem] bg-gradient-to-br from-[#1B93E8] via-brand-accent-blue to-[#1B93E8] px-8 py-16 md:py-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.18),_transparent_65%)] pointer-events-none" />
          <p className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Human connection should never be a <span className="italic font-light">premium experience.</span>
          </p>
        </motion.div>
      </section>

      {/* 6. Closing bookend */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-16 py-8 md:py-16">
        <div className="flex flex-col items-center text-center">
          <span className="font-bold text-3xl md:text-4xl tracking-tighter text-brand-accent-blue mb-6 md:mb-8">Knod</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black leading-[1.1] max-w-3xl">
            Connecting people in <span className="italic font-light text-brand-accent-blue">shared spaces.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
