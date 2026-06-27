import { motion } from "motion/react";

export function WhatKnodDeliversSection() {
  return (
    <section className="bg-[#f5f5f7] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:py-0 lg:h-screen lg:min-h-[700px] xl:min-h-[750px] px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans flex flex-col justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.05] font-sans font-medium tracking-tight mb-8 sm:mb-10 lg:mb-8 text-center text-brand-black max-w-4xl">
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
            className="relative rounded-[2rem] h-[440px] sm:h-[480px] lg:h-[400px] xl:h-[440px] overflow-hidden flex flex-col justify-end p-6 lg:p-7 bg-[#FF4D00] shadow-xl group"
          >
            {/* Fluid Background Layer */}
            <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] pointer-events-none rounded-full bg-[#FF3366] mix-blend-overlay blur-[90px] opacity-70 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] pointer-events-none rounded-full bg-[#FF9900] mix-blend-overlay blur-[60px]" />

            {/* Abstract UI Element (Like 'Subscribe' Pricing card) */}
            <div className="absolute top-[6%] sm:top-[8%] left-1/2 -translate-x-1/2 w-[240px] sm:w-[280px] lg:w-[230px] xl:w-[260px] h-[250px] sm:h-[320px] lg:h-[250px] xl:h-[290px] bg-[#0a0a0a] rounded-[2rem] shadow-2xl p-4 sm:p-6 lg:p-4 xl:p-6 border border-white/10 rotate-[-4deg] flex flex-col group-hover:rotate-[-2deg] group-hover:translate-y-[-10px] transition-all duration-700 ease-out z-10">
              <div className="text-white/40 text-[10px] font-semibold tracking-widest mb-2 sm:mb-4 lg:mb-2 xl:mb-4">
                Venue Dashboard
              </div>
              <div className="text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-medium mb-4 sm:mb-8 lg:mb-4 xl:mb-6 flex items-baseline gap-1">
                84%{" "}
                <span className="text-xs sm:text-sm font-normal text-white/50">
                  engagement
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4 flex-1">
                <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full" />
                <div className="h-1.5 sm:h-2 w-4/5 bg-white/10 rounded-full" />
                <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full" />
                <div className="h-1.5 sm:h-2 w-2/3 bg-white/10 rounded-full" />
              </div>
              <div className="mt-auto h-10 sm:h-12 bg-white/10 rounded-full flex items-center p-1 sm:p-1.5 relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF4D00] flex items-center justify-center font-bold text-white text-xs shadow-lg">
                  K
                </div>
                <span className="ml-2 sm:ml-3 text-white/80 text-[10px] sm:text-xs font-semibold">
                  Metrics verified
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2rem] sm:text-[2.25rem] lg:text-[1.85rem] xl:text-[2.25rem] font-sans font-medium tracking-tight text-white mb-2 leading-[1.1]">
                Hosts & Spaces
              </h3>
              <p className="text-sm sm:text-base lg:text-sm xl:text-base text-white/90 font-normal leading-relaxed pr-2">
                Increase engagement, strengthen attendee experiences, and measure meaningful connections.
              </p>
            </div>
          </motion.div>

          {/* Card 2: For Attendees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[2rem] h-[440px] sm:h-[480px] lg:h-[400px] xl:h-[440px] overflow-hidden flex flex-col justify-end p-6 lg:p-7 bg-[#0033FF] shadow-xl group"
          >
            {/* Fluid Background Layer */}
            <div className="absolute top-[-10%] right-[-20%] w-[120%] h-[120%] pointer-events-none rounded-full bg-[#00FFCC] mix-blend-soft-light blur-[80px] group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[100%] h-[100%] pointer-events-none rounded-full bg-[#CC00FF] mix-blend-overlay blur-[70px]" />
            <div className="absolute top-[30%] left-[30%] w-[60%] h-[60%] pointer-events-none rounded-full bg-[#FFE600] mix-blend-overlay blur-[90px] opacity-60" />

            {/* Abstract UI Element (Marquee Pills) */}
            <div
              className="absolute top-[6%] sm:top-[8%] left-0 w-full h-[50%] flex flex-col justify-center gap-3 sm:gap-4 z-10 overflow-hidden"
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
              <h3 className="text-[2rem] sm:text-[2.25rem] lg:text-[1.85rem] xl:text-[2.25rem] font-sans font-medium tracking-tight text-white mb-2 leading-[1.1]">
                Attendees
              </h3>
              <p className="text-sm sm:text-base lg:text-sm xl:text-base text-white/80 font-normal leading-relaxed pr-2">
                Meet the right people faster and make every interaction more valuable.
              </p>
            </div>
          </motion.div>

          {/* Card 3: For Communities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[2rem] h-[440px] sm:h-[480px] lg:h-[400px] xl:h-[440px] overflow-hidden flex flex-col justify-end p-6 lg:p-7 bg-[#FD3482] shadow-xl group"
          >
            {/* Fluid Background Layer */}
            <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] pointer-events-none rounded-full bg-[#FF0066] mix-blend-overlay blur-[90px] opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] pointer-events-none rounded-full bg-[#0022FF] mix-blend-screen blur-[100px] opacity-60" />
            <div className="absolute top-[20%] right-[-10%] w-[80%] h-[80%] pointer-events-none rounded-full bg-[#FFCC00] mix-blend-soft-light blur-[80px]" />

            {/* Abstract UI Element (Profile Cards) */}
            <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] h-[270px] sm:h-[340px] lg:h-[270px] xl:h-[310px] flex items-center justify-center perspective-[1000px] z-10">
              <div className="absolute w-[180px] sm:w-[200px] h-[220px] sm:h-[280px] lg:h-[220px] xl:h-[260px] bg-[#FF0066] rounded-3xl rotate-[12deg] shadow-2xl origin-bottom border border-black/10 group-hover:rotate-[16deg] transition-transform duration-700 ease-out" />
              <div className="absolute w-[180px] sm:w-[200px] h-[220px] sm:h-[280px] lg:h-[220px] xl:h-[260px] bg-[#CCFF00] rounded-3xl rotate-[-6deg] shadow-2xl origin-bottom border border-black/10 group-hover:rotate-[-10deg] transition-transform duration-700 ease-out" />

              <div className="relative w-[190px] sm:w-[210px] bg-[#f5f5f7] rounded-[2rem] shadow-2xl border-4 border-white p-1 sm:p-1.5 z-10 group-hover:translate-y-[-10px] transition-transform duration-700 ease-out">
                <div className="bg-white rounded-[1.5rem] w-full p-2 h-[210px] sm:h-[260px] lg:h-[210px] xl:h-[240px] flex flex-col shadow-sm">
                  <div className="w-full h-[90px] sm:h-[120px] lg:h-[90px] xl:h-[110px] rounded-[1rem] overflow-hidden mb-2 sm:mb-3 relative">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-brand-blue rounded-full border-[2px] sm:border-[2.5px] border-white flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <div className="w-2/3 h-2.5 sm:h-3.5 bg-black/10 rounded-full mb-1 sm:mb-2" />
                  <div className="w-1/3 h-2 bg-black/5 rounded-full mb-auto" />
                  <div className="w-full h-8 sm:h-11 bg-brand-black rounded-xl mt-2 sm:mt-4 flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold shadow-md active:scale-95 transition-transform">
                    Connect at Knod
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[2rem] sm:text-[2.25rem] lg:text-[1.85rem] xl:text-[2.25rem] font-sans font-medium tracking-tight text-white mb-2 leading-[1.1]">
                Communities
              </h3>
              <p className="text-sm sm:text-base lg:text-sm xl:text-base text-white/90 font-normal leading-relaxed pr-2">
                Turn introductions into relationships and shared spaces into thriving communities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
