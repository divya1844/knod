import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function HighlightParagraph() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "end 60%"],
  });

  const op1 = useTransform(scrollYProgress, [0, 0.33], [0.2, 1]);
  const op2 = useTransform(scrollYProgress, [0.33, 0.66], [0.2, 1]);
  const op3 = useTransform(scrollYProgress, [0.66, 1], [0.2, 1]);

  return (
    <div
      ref={container}
      className="mt-10 sm:mt-16 text-lg sm:text-2xl lg:text-3xl text-brand-black leading-relaxed max-w-4xl font-light"
    >
      <p className="mb-6 sm:mb-8">
        <motion.span style={{ opacity: op1 }}>
          Yet when people gather in the same room, we still rely on{" "}
          <span className="italic font-sans font-medium">
            luck
          </span>{" "}
          to determine who meets whom.{" "}
        </motion.span>
        <motion.span style={{ opacity: op2 }}>
          Knod helps people discover the conversations, relationships, and
          opportunities they might otherwise miss.
        </motion.span>
      </p>
      <p>
        <motion.span
          style={{ opacity: op3 }}
          className="text-brand-blue font-sans italic text-[1.4em] tracking-tight block mt-4"
        >
          Because the most important connection in the room shouldn't be
          accidental.
        </motion.span>
      </p>
    </div>
  );
}

export function MissionSection() {
  return (
    <section className="bg-white py-16 lg:py-20 px-6 lg:px-12 relative font-sans border-t border-brand-black/5">
      {/* Subtle Background Glow Fill */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-[1400px] mx-auto">
        <div className="text-brand-blue font-semibold tracking-[0.2em] text-xs mb-6 md:mb-8">
          Our Mission
        </div>

        <div className="max-w-[1200px] relative">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] leading-[1.1] font-sans font-medium tracking-tight text-brand-black"
          >
            Human connection is{" "}
            <span className="italic text-brand-blue">infrastructure</span>. We
            design communities, cities, and digital networks to help people
            move, communicate, and collaborate.
          </motion.h3>

          <HighlightParagraph />
          

        </div>
      </div>
    </section>
  );
}
