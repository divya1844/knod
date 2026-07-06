import { motion } from "motion/react";

import chicagoInnovation1 from "../assets/images/carousel_chicago_innovation_1.jpg";
import qrScanning from "../assets/images/carousel_qr_scanning.jpg";
import chicagoInnovation2 from "../assets/images/carousel_chicago_innovation_2.jpg";
import techConference from "../assets/images/carousel_tech_conference.jpg";
import mobileApp from "../assets/images/carousel_mobile_app.jpg";

const imagesRow1 = [
  { src: chicagoInnovation1, aspect: "aspect-[3/4]" },
  { src: qrScanning, aspect: "aspect-[3/4]" },
  { src: chicagoInnovation2, aspect: "aspect-[3/4]" },
  { src: techConference, aspect: "aspect-[3/4]" },
  { src: mobileApp, aspect: "aspect-[3/4]" },
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

      </div>
    </section>
  );
}
