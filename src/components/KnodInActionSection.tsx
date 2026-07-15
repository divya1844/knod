import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BookDemoModal } from "./BookDemoModal";

// Auto-loads every image in src/assets/images/carousel/.
// To update the carousel: just drop image files into that folder (or remove them).
// Order follows the filename (e.g. 1.jpg, 2.jpg, 3.jpg ...). No code changes needed.
const carouselModules = import.meta.glob(
  "../assets/images/carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const imagesRow1 = Object.entries(carouselModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
  .map(([, src]) => src as string);

export function KnodInActionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center text-center mb-12 sm:mb-16 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-sans font-medium tracking-tight text-brand-black leading-[1.05] max-w-3xl"
        >
          Knod in Action
        </motion.h2>
      </div>

      <div className="w-[110vw] relative left-1/2 -translate-x-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Row 1 - Left to Right */}
        <div className="flex w-max">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 w-max pr-4 sm:pr-6 md:pr-8 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...imagesRow1, ...imagesRow1].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden bg-gray-100 relative group"
              >
                <img
                  src={src}
                  alt="Event"
                  className="h-full w-auto max-w-none object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center text-center pt-16 sm:pt-24 px-4 sm:px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-brand-black leading-[1.1] max-w-2xl mb-8"
        >
          Ready to Transform Your Space?
        </motion.h3>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0a0a0a] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-brand-blue hover:text-white transition-all shadow-xl shadow-black/5 inline-flex items-center gap-2 cursor-pointer group"
        >
          Get a Quote
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <BookDemoModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
