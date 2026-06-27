import { motion } from "motion/react";

const imagesRow1 = [
  { src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[4/5]" },
  { src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[3/4]" },
  { src: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-square" },
  { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[4/3]" },
  { src: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[16/9]" },
];

const imagesRow2 = [
  { src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[4/5]" },
  { src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[4/3]" },
  { src: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-square" },
  { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[3/4]" },
  { src: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800", aspect: "aspect-[16/9]" },
];

export function KnodInActionSection() {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden font-sans flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center text-center pb-16 sm:pb-24 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-sans font-medium tracking-tight text-brand-black mb-6 leading-[1.05] max-w-3xl"
        >
          Ready to Transform Your Events or Space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-black/50 font-light mb-10 max-w-md"
        >
          Real moments from events across Chicago
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0a0a0a] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-brand-blue hover:text-white transition-all shadow-xl shadow-black/5"
        >
          Start creating
        </motion.button>
      </div>

      <div className="w-[110vw] relative left-1/2 -translate-x-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Row 1 - Left to Right */}
        <div className="flex w-max">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 w-max pr-4 sm:pr-6 md:pr-8 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...imagesRow1, ...imagesRow1].map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] ${img.aspect} rounded-[2rem] overflow-hidden bg-gray-100 relative group`}
              >
                <img
                  src={img.src}
                  alt="Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="flex w-max">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 w-max pr-4 sm:pr-6 md:pr-8 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 55, repeat: Infinity }}
          >
            {[...imagesRow2, ...imagesRow2].map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] ${img.aspect} rounded-[2rem] overflow-hidden bg-gray-100 relative group`}
              >
                <img
                  src={img.src}
                  alt="Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
