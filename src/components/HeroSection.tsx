import { motion } from "motion/react";
import { ArrowRight, QrCode, Users, Star, Zap, DollarSign, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { HOST_SIGNUP_URL, HOST_CTA_LABEL } from "../lib/cta";

const NETWORK_NODES = [
  { id: 1, top: '15%', left: '20%', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', delay: 1.5 },
  { id: 2, top: '22%', left: '80%', img: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=150', delay: 1.0 },
  { id: 3, top: '55%', left: '8%', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150', delay: 2.0 },
  { id: 4, top: '65%', left: '88%', img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150', delay: 0.5 },
  { id: 5, top: '85%', left: '25%', img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150', delay: 2.5 },
  { id: 6, top: '80%', left: '75%', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150', delay: 0.2 },
];

const NETWORK_LINES: [number, number][] = [
  [1, 2], [1, 3], [3, 5], [5, 6], [6, 4], [2, 4],
  [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]
];

export function HeroSection() {
  return (
    <>
      <main className="max-w-[1400px] mx-auto px-6 pb-4 pt-20 sm:pt-22 lg:pt-22 min-h-[50vh] lg:min-h-[540px] flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8 w-full items-center min-w-0">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 z-10 w-full min-w-0 mt-8 sm:mt-0">
            


            {/* Core H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.6rem,7.5vw,5rem)] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] sm:leading-[1.05] font-sans font-medium tracking-tight text-brand-black"
              id="hero-main-heading"
            >
              Turn rooms into <br className="hidden sm:block" />
              <span className="italic font-light text-brand-blue pr-2">
                connections.
              </span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg sm:text-xl text-brand-black/70 leading-relaxed font-normal max-w-xl"
              id="hero-subtext-para"
            >
              Every room is full of{" "}
              <span className="italic font-medium text-brand-blue">possibilities</span>:{" "}
              <span className="text-brand-black font-medium">a future client, a mentor, a cofounder, a new hire, an investor, a friend.</span>{" "}
              Yet the connections that could change everything are still{" "}
              <span className="italic text-brand-black/55">left to chance.</span>
              <span className="block mt-4 text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
                We're <span className="italic font-medium text-brand-blue">changing that.</span>
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex justify-center mt-2"
              id="hero-cta-buttons"
            >
              <a
                href={HOST_SIGNUP_URL}
                className="group relative cursor-pointer inline-flex items-center justify-center gap-2.5 bg-brand-black text-white px-8 py-4 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-98"
                id="cta-host-signup"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-blue transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative flex items-center gap-2">
                  {HOST_CTA_LABEL}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Liquid Glass Visual Container */}
          <div className="lg:col-span-5 relative w-full h-[460px] sm:h-[500px] lg:h-[580px] z-10 flex items-center justify-center mt-8 lg:mt-0">
            {/* Main Visual Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-0 bottom-0 lg:-right-4 rounded-3xl bg-gradient-to-br from-brand-blue via-[#5ec4ff] to-[#aae1ff] overflow-hidden shadow-2xl shadow-brand-blue/20 flex flex-col justify-between"
              id="hero-glass-canvas-card"
            >
              {/* Internal abstract shapes for 'liquid' feel inside the card */}
              <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/50 via-white/10 to-transparent opacity-80 blur-2xl pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-20%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/40 via-white/5 to-transparent opacity-60 blur-3xl pointer-events-none" />

              <div className="relative w-full h-full p-5 sm:p-6 flex flex-col justify-between">
                
                {/* Center Content / abstracted UI with rotating resonance */}
                <div className="flex-1 w-full flex items-center justify-center relative my-4 sm:my-6">
                  {/* SVG Network Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {NETWORK_LINES.map(([fromId, toId], idx) => {
                      const fromNode = NETWORK_NODES.find(n => n.id === fromId);
                      let x2 = '50%', y2 = '50%';
                      if (toId !== 0) {
                        const toNode = NETWORK_NODES.find(n => n.id === toId);
                        if (toNode) {
                          x2 = toNode.left;
                          y2 = toNode.top;
                        }
                      }
                      return (
                        <line 
                          key={idx}
                          x1={fromNode?.left} 
                          y1={fromNode?.top} 
                          x2={x2} 
                          y2={y2} 
                          stroke="rgba(255,255,255,0.3)" 
                          strokeWidth="1.5"
                          strokeDasharray="3 4"
                        />
                      );
                    })}
                  </svg>

                  {/* Network Nodes (Avatars) */}
                  {NETWORK_NODES.map((node) => (
                    <motion.div
                      key={node.id}
                      animate={{ y: [-6, 6, -6], x: [-4, 4, -4] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay,
                      }}
                      className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center overflow-hidden z-0 -translate-x-1/2 -translate-y-1/2"
                      style={{ top: node.top, left: node.left }}
                    >
                      <img
                        src={node.img}
                        alt="Network user"
                        className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/45 shadow-[0_12px_30px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.5)] relative z-10"
                  >
                    {/* Resonance rings */}
                    <div className="absolute inset-0 rounded-full border border-white/30 scale-[1.15] pointer-events-none" />
                    <div className="absolute inset-0 rounded-full border border-white/15 scale-[1.3] pointer-events-none" />
                    
                    {/* Mascot or QR illustration */}
                    <div className="flex flex-col items-center gap-0.5 text-center">
                      <QrCode
                        className="w-10 h-10 sm:w-12 sm:h-12 text-brand-black/85"
                        strokeWidth={1.5}
                      />
                      <span className="text-[9px] font-bold text-brand-black/70 tracking-wider uppercase">Scan Room</span>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Stats - Liquid Glass Dock */}
                <div 
                  className="w-full rounded-2xl p-3.5 sm:p-4 bg-white/50 backdrop-blur-xl border border-white/55 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                  id="glass-stats-dock"
                >
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {/* Stat 1: 12x Connection efficiency */}
                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-white/25 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center gap-1 text-brand-black/70">
                        <Zap className="w-3 h-3 text-brand-black/60 fill-brand-black/30" />
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-tight uppercase">Efficiency</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-brand-black leading-tight">12x</span>
                      <span className="text-[8.5px] sm:text-[9.5px] text-brand-black/60 font-medium tracking-tight -mt-0.5">Connection efficiency</span>
                    </div>

                    {/* Stat 2: 1,000+ Early users */}
                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-white/25 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center gap-1 text-brand-black/70">
                        <Users className="w-3 h-3 text-brand-black/60" />
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-tight uppercase">Scale</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-brand-black leading-tight">1,000+</span>
                      <span className="text-[8.5px] sm:text-[9.5px] text-brand-black/60 font-medium tracking-tight -mt-0.5">Early users on Knod</span>
                    </div>

                    {/* Stat 3: 94% Match acceptance rate */}
                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-white/25 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center gap-1 text-brand-black/70">
                        <Star className="w-3 h-3 text-brand-black/60 fill-brand-black/30" />
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-tight uppercase">Quality</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-brand-black leading-tight">94%</span>
                      <span className="text-[8.5px] sm:text-[9.5px] text-brand-black/60 font-medium tracking-tight -mt-0.5">Match acceptance rate</span>
                    </div>

                    {/* Stat 4: 4.6/5 Event experience rating */}
                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-white/25 backdrop-blur-xs border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center gap-1 text-brand-black/70">
                        <MessageSquare className="w-3 h-3 text-brand-black/60 fill-brand-black/30" />
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-tight uppercase">Rating</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-brand-black leading-tight">4.6/5</span>
                      <span className="text-[8.5px] sm:text-[9.5px] text-brand-black/60 font-medium tracking-tight -mt-0.5">Event experience rating</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
