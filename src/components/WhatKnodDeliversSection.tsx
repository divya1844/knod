import { motion } from "motion/react";

export function WhatKnodDeliversSection() {
  return (
    <section className="bg-[#f5f5f7] py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] leading-[1.05] font-sans font-medium tracking-tight mb-16 sm:mb-20 text-center text-brand-black max-w-4xl">
          What <span className="italic font-light text-brand-blue">Knod</span>{" "}
          Delivers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card 1: For Hosts & Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] h-[500px] sm:h-[550px] overflow-hidden flex flex-col justify-end p-8 lg:p-10 bg-[#FF4D00] shadow-xl group"
          >
            {/* Fluid Background Layer */}
            <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] pointer-events-none rounded-full bg-[#FF3366] mix-blend-overlay blur-[90px] opacity-70 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] pointer-events-none rounded-full bg-[#FF9900] mix-blend-overlay blur-[60px]" />

            {/* Abstract UI Element (Like 'Subscribe' Pricing card) */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[280px] h-[320px] bg-[#0a0a0a] rounded-[2rem] shadow-2xl p-6 border border-white/10 rotate-[-4deg] flex flex-col group-hover:rotate-[-2deg] group-hover:translate-y-[-10px] transition-all duration-700 ease-out z-10">
              <div className="text-white/40 text-[10px] font-semibold tracking-widest  mb-4">
                Venue Dashboard
              </div>
              <div className="text-white text-3xl font-medium mb-8 flex items-baseline gap-1">
                84%{" "}
                <span className="text-sm font-normal text-white/50">
                  engagement
                </span>
              </div>
              <div className="space-y-4 flex-1">
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-2/3 bg-white/10 rounded-full" />
              </div>
              <div className="mt-auto h-12 bg-white/10 rounded-full flex items-center p-1.5 relative">
                <div className="w-9 h-9 rounded-full bg-[#FF4D00] flex items-center justify-center font-bold text-white text-xs shadow-lg">
                  K
                </div>
                <span className="ml-3 text-white/80 text-xs font-semibold">
                  Metrics verified
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2.5rem] font-sans font-medium tracking-tight text-white mb-3 leading-[1.1]">
                Hosts & Spaces
              </h3>
              <p className="text-lg text-white/90 font-normal leading-relaxed pr-4">
                Higher engagement, repeat visits, and connection metrics.
              </p>
            </div>
          </motion.div>

          {/* Card 2: For Attendees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[2rem] h-[500px] sm:h-[550px] overflow-hidden flex flex-col justify-end p-8 lg:p-10 bg-[#0033FF] shadow-xl group"
          >
            {/* Fluid Background Layer */}
            <div className="absolute top-[-10%] right-[-20%] w-[120%] h-[120%] pointer-events-none rounded-full bg-[#00FFCC] mix-blend-soft-light blur-[80px] group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[100%] h-[100%] pointer-events-none rounded-full bg-[#CC00FF] mix-blend-overlay blur-[70px]" />
            <div className="absolute top-[30%] left-[30%] w-[60%] h-[60%] pointer-events-none rounded-full bg-[#FFE600] mix-blend-overlay blur-[90px] opacity-60" />

            {/* Abstract UI Element (Marquee Pills) */}
            <div
              className="absolute top-[8%] left-0 w-full h-[60%] flex flex-col justify-center gap-4 z-10 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {/* Row 1 */}
              <div className="flex w-[200%]">
                <motion.div
                  className="flex gap-3 w-max pr-3"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 15,
                  }}
                >
                  {[
                    "Founders",
                    "Investors",
                    "Mentors",
                    "Advisors",
                    "Founders",
                    "Investors",
                    "Mentors",
                    "Advisors",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold shadow-xl border border-white/20 whitespace-nowrap"
                    >
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Row 2 */}
              <div className="flex w-[200%] ml-[-30%]">
                <motion.div
                  className="flex gap-3 w-max pr-3"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                  }}
                >
                  {[
                    "Designers",
                    "Engineers",
                    "Tech Leads",
                    "Product",
                    "Designers",
                    "Engineers",
                    "Tech Leads",
                    "Product",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold shadow-xl border border-white/20 whitespace-nowrap"
                    >
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Row 3 */}
              <div className="flex w-[200%] ml-[-15%]">
                <motion.div
                  className="flex gap-3 w-max pr-3"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 17,
                  }}
                >
                  {[
                    "Creators",
                    "Marketers",
                    "Sales",
                    "Operators",
                    "Creators",
                    "Marketers",
                    "Sales",
                    "Operators",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold shadow-xl border border-white/20 whitespace-nowrap"
                    >
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2.5rem] font-sans font-medium tracking-tight text-white mb-3 leading-[1.1]">
                Attendees
              </h3>
              <p className="text-lg text-white/80 font-normal leading-relaxed pr-4">
                Less awkward mingling, easy way to make connections.
              </p>
            </div>
          </motion.div>

          {/* Card 3: For Communities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[2rem] h-[500px] sm:h-[550px] overflow-hidden flex flex-col justify-end p-8 lg:p-10 bg-[#FD3482] shadow-xl group"
          >
            {/* Fluid Background Layer */}
            <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] pointer-events-none rounded-full bg-[#FF0066] mix-blend-overlay blur-[90px] opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] pointer-events-none rounded-full bg-[#0022FF] mix-blend-screen blur-[100px] opacity-60" />
            <div className="absolute top-[20%] right-[-10%] w-[80%] h-[80%] pointer-events-none rounded-full bg-[#FFCC00] mix-blend-soft-light blur-[80px]" />

            {/* Abstract UI Element (Profile Cards) */}
            <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[220px] h-[340px] flex items-center justify-center perspective-[1000px] z-10">
              <div className="absolute w-[200px] h-[280px] bg-[#FF0066] rounded-3xl rotate-[12deg] shadow-2xl origin-bottom border border-black/10 group-hover:rotate-[16deg] transition-transform duration-700 ease-out" />
              <div className="absolute w-[200px] h-[280px] bg-[#CCFF00] rounded-3xl rotate-[-6deg] shadow-2xl origin-bottom border border-black/10 group-hover:rotate-[-10deg] transition-transform duration-700 ease-out" />

              <div className="relative w-[210px] bg-[#f5f5f7] rounded-[2rem] shadow-2xl border-4 border-white p-1.5 z-10 group-hover:translate-y-[-10px] transition-transform duration-700 ease-out">
                <div className="bg-white rounded-[1.5rem] w-full p-2 h-[260px] flex flex-col shadow-sm">
                  <div className="w-full h-[120px] rounded-[1rem] overflow-hidden mb-3 relative">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-brand-blue rounded-full border-[2.5px] border-white flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <div className="w-2/3 h-3.5 bg-black/10 rounded-full mb-2" />
                  <div className="w-1/3 h-2.5 bg-black/5 rounded-full mb-auto" />
                  <div className="w-full h-11 bg-brand-black rounded-xl mt-4 flex items-center justify-center text-white text-xs font-semibold shadow-md active:scale-95 transition-transform">
                    Connect at Knod
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2.5rem] font-sans font-medium tracking-tight text-white mb-3 leading-[1.1]">
                Communities
              </h3>
              <p className="text-lg text-white/90 font-normal leading-relaxed pr-4">
                Turn chance encounters into lasting, meaningful relationships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
