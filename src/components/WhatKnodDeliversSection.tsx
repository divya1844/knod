import { motion } from "motion/react";

export function WhatKnodDeliversSection() {
  return (
    <section className="bg-[#f5f5f7] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans flex flex-col justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] font-sans font-medium tracking-tight mb-10 sm:mb-12 lg:mb-14 text-center text-brand-black max-w-4xl">
          What <span className="italic font-light text-brand-blue">Knod</span>{" "}
          Delivers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card 1: For Hosts & Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[440px] sm:h-[560px] lg:h-[560px] xl:h-[620px]"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 sm:p-10 lg:p-10 xl:p-12 bg-[#FF4D00] shadow-xl group isolate relative [transform:translate3d(0,0,0)] [backface-visibility:hidden] will-change-transform [mask-image:radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
            {/* Fluid Background Layer */}
            <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] pointer-events-none rounded-full bg-[#FF3366] mix-blend-overlay blur-[90px] opacity-70 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] pointer-events-none rounded-full bg-[#FF9900] mix-blend-overlay blur-[60px]" />

            {/* Abstract UI Element (Like 'Subscribe' Pricing card) */}
            <div className="absolute top-[4%] sm:top-[6%] lg:top-[5%] xl:top-[6%] left-1/2 -translate-x-1/2 w-[240px] sm:w-[280px] lg:w-[clamp(200px,23vh,225px)] xl:w-[240px] h-[250px] sm:h-[300px] lg:h-[clamp(210px,25vh,235px)] xl:h-[250px] bg-[#0a0a0a] rounded-[2rem] shadow-2xl p-4 sm:p-6 lg:p-5 xl:p-5 border border-white/10 rotate-[-4deg] flex flex-col group-hover:rotate-[-2deg] group-hover:translate-y-[-10px] transition-all duration-700 ease-out z-10">
              <div className="text-white/40 text-[10px] font-semibold tracking-widest mb-1 sm:mb-3 lg:mb-1 xl:mb-2">
                Venue Dashboard
              </div>
              <div className="text-white text-2xl sm:text-3xl lg:text-xl xl:text-2xl font-medium mb-3 sm:mb-6 lg:mb-2 xl:mb-3 flex items-baseline gap-1">
                84%{" "}
                <span className="text-xs sm:text-sm font-normal text-white/50">
                  engagement
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3 flex-1">
                <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full" />
                <div className="h-1.5 sm:h-2 w-4/5 bg-white/10 rounded-full" />
                <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full" />
                <div className="h-1.5 sm:h-2 w-2/3 bg-white/10 rounded-full" />
              </div>
              <div className="mt-auto h-9 sm:h-10 bg-white/10 rounded-full flex items-center p-1 sm:p-1.5 relative">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF4D00] flex items-center justify-center font-bold text-white text-xs shadow-lg">
                  K
                </div>
                <span className="ml-2 sm:ml-3 text-white/80 text-[10px] sm:text-xs font-semibold">
                  Metrics verified
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2rem] sm:text-[2.35rem] lg:text-[2.35rem] xl:text-[2.5rem] font-sans font-medium tracking-tight text-white mb-3 leading-[1.1]">
                Hosts & Spaces
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg text-white/90 font-normal leading-relaxed pr-2 line-clamp-4 min-h-[3.5em]">
                Increase engagement, strengthen attendee experiences, and measure meaningful connections.
              </p>
            </div>
            </div>
          </motion.div>

          {/* Card 2: For Attendees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-[440px] sm:h-[560px] lg:h-[560px] xl:h-[620px]"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 sm:p-10 lg:p-10 xl:p-12 bg-[#0033FF] shadow-xl group isolate relative [transform:translate3d(0,0,0)] [backface-visibility:hidden] will-change-transform [mask-image:radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
            {/* Fluid Background Layer */}
            <div className="absolute top-[-10%] right-[-20%] w-[120%] h-[120%] pointer-events-none rounded-full bg-[#00FFCC] mix-blend-soft-light blur-[80px] group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[100%] h-[100%] pointer-events-none rounded-full bg-[#CC00FF] mix-blend-overlay blur-[70px]" />
            <div className="absolute top-[30%] left-[30%] w-[60%] h-[60%] pointer-events-none rounded-full bg-[#FFE600] mix-blend-overlay blur-[90px] opacity-60" />

            {/* Abstract UI Element (Marquee Pills) */}
            <div
              className="absolute top-[4%] sm:top-[6%] lg:top-[6%] xl:top-[8%] left-0 w-full h-[45%] flex flex-col justify-center gap-3 sm:gap-4 lg:gap-[clamp(10px,1.4vh,16px)] z-10 overflow-hidden"
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
                  className="flex gap-2 sm:gap-3 w-max pr-3"
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
                      className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold shadow-xl border border-white/20 whitespace-nowrap"
                    >
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Row 2 */}
              <div className="flex w-[200%] ml-[-30%]">
                <motion.div
                  className="flex gap-2 sm:gap-3 w-max pr-3"
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
                      className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold shadow-xl border border-white/20 whitespace-nowrap"
                    >
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Row 3 */}
              <div className="flex w-[200%] ml-[-15%]">
                <motion.div
                  className="flex gap-2 sm:gap-3 w-max pr-3"
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
                      className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold shadow-xl border border-white/20 whitespace-nowrap"
                    >
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2rem] sm:text-[2.35rem] lg:text-[2.35rem] xl:text-[2.5rem] font-sans font-medium tracking-tight text-white mb-3 leading-[1.1]">
                Attendees
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg text-white/80 font-normal leading-relaxed pr-2 line-clamp-4 min-h-[3.5em]">
                Meet the right people faster and make every interaction more valuable.
              </p>
            </div>
            </div>
          </motion.div>

          {/* Card 3: For Communities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[440px] sm:h-[560px] lg:h-[560px] xl:h-[620px]"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 sm:p-10 lg:p-10 xl:p-12 bg-[#FD3482] shadow-xl group isolate relative [transform:translate3d(0,0,0)] [backface-visibility:hidden] will-change-transform [mask-image:radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
            {/* Fluid Background Layer */}
            <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] pointer-events-none rounded-full bg-[#FF0066] mix-blend-overlay blur-[90px] opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] pointer-events-none rounded-full bg-[#0022FF] mix-blend-screen blur-[100px] opacity-60" />
            <div className="absolute top-[20%] right-[-10%] w-[80%] h-[80%] pointer-events-none rounded-full bg-[#FFCC00] mix-blend-soft-light blur-[80px]" />

            {/* Abstract UI Element (Profile Cards) */}
            <div className="absolute top-[4%] sm:top-[6%] lg:top-[6%] xl:top-[6%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] lg:w-[clamp(190px,22vh,210px)] h-[270px] sm:h-[320px] lg:h-[clamp(230px,26vh,260px)] xl:h-[280px] flex items-center justify-center perspective-[1000px] z-10">
              <div className="absolute w-[180px] sm:w-[200px] lg:w-[clamp(150px,18vh,170px)] h-[220px] sm:h-[280px] lg:h-[clamp(170px,20vh,195px)] xl:h-[240px] bg-[#FF0066] rounded-3xl rotate-[12deg] shadow-2xl origin-bottom border border-black/10 group-hover:rotate-[16deg] transition-transform duration-700 ease-out" />
              <div className="absolute w-[180px] sm:w-[200px] lg:w-[clamp(150px,18vh,170px)] h-[220px] sm:h-[280px] lg:h-[clamp(170px,20vh,195px)] xl:h-[240px] bg-[#CCFF00] rounded-3xl rotate-[-6deg] shadow-2xl origin-bottom border border-black/10 group-hover:rotate-[-10deg] transition-transform duration-700 ease-out" />

              <div className="relative w-[190px] sm:w-[210px] lg:w-[clamp(160px,19vh,185px)] bg-[#f5f5f7] rounded-[2rem] shadow-2xl border-4 border-white p-1 sm:p-1.5 z-10 group-hover:translate-y-[-10px] transition-transform duration-700 ease-out">
                <div className="bg-white rounded-[1.5rem] w-full p-2 h-[210px] sm:h-[260px] lg:h-[clamp(170px,20vh,195px)] xl:h-[210px] flex flex-col shadow-sm">
                  <div className="w-full h-[90px] sm:h-[120px] lg:h-[clamp(65px,8vh,80px)] xl:h-[95px] rounded-[1rem] overflow-hidden mb-2 sm:mb-3 relative">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Profile"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-brand-blue rounded-full border-[2px] sm:border-[2.5px] border-white flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <div className="w-2/3 h-2.5 sm:h-3.5 bg-black/10 rounded-full mb-1 sm:mb-2" />
                  <div className="w-1/3 h-2 bg-black/5 rounded-full mb-auto" />
                  <div className="w-full h-7 sm:h-9 lg:h-7 xl:h-8 bg-brand-black rounded-xl mt-2 sm:mt-4 flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold shadow-md active:scale-95 transition-transform">
                    Connect at Knod
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2rem] sm:text-[2.35rem] lg:text-[2.35rem] xl:text-[2.5rem] font-sans font-medium tracking-tight text-white mb-3 leading-[1.1]">
                Communities
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg text-white/90 font-normal leading-relaxed pr-2 line-clamp-4 min-h-[3.5em]">
                Turn introductions into relationships and shared spaces into thriving communities
              </p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
