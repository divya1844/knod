import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, QrCode, Users, Star, Zap, DollarSign, Check, X, Calendar, Sparkles, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", website: "", eventType: "", frequency: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBookDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.eventType || !formData.frequency) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset state after transition completes
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", organization: "", website: "", eventType: "", frequency: "" });
    }, 300);
  };

  return (
    <>
      <main className="max-w-[1400px] mx-auto px-6 pb-8 pt-24 sm:pt-28 lg:pt-28 min-h-[60vh] lg:min-h-[600px] flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8 w-full items-center">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 z-10 w-full mt-8 sm:mt-0">
            


            {/* Core H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.2rem,7.5vw,5rem)] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] sm:leading-[1.05] font-sans font-medium tracking-tight text-brand-black"
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
              className="text-base sm:text-lg text-brand-black/80 leading-relaxed font-normal max-w-xl"
              id="hero-subtext-para"
            >
              Every room is full of opportunities.
              <br />
              <span className="text-base sm:text-lg block my-1 text-brand-black/80">
                A future client. A mentor. A cofounder. A new hire. An investor.
              </span>
              <span className="block mt-2 font-medium text-brand-black/80">
                Knod helps people find the conversations that move them forward.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center mt-1"
              id="hero-cta-buttons"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative cursor-pointer inline-flex items-center justify-center gap-2.5 bg-brand-black text-white px-7 py-3.5 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-98"
                id="cta-book-demo"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-blue transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative flex items-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <Link
                to="/how-it-works"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold border border-black/10 bg-white/40 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.6)] text-brand-black transition-all duration-300 hover:bg-white/60 hover:border-black/20 hover:-translate-y-0.5 active:scale-98"
                id="cta-see-how-it-works"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Frictionless Experience Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 p-5 sm:p-6 rounded-3xl border-2 border-brand-blue/20 bg-white shadow-[0_15px_40px_rgba(0,113,227,0.08)] max-w-full lg:max-w-[95%] xl:max-w-2xl flex flex-col gap-4 relative overflow-hidden group"
              id="hero-frictionless-experience"
            >
              {/* Subtle top brand glow accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-blue to-brand-accent-blue" />
              
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/8 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                  Scan. Match. Meet.
                </span>
                <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full flex items-center gap-1.5 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  No download required
                </span>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-brand-black/90 leading-relaxed font-semibold font-sans">
                <span className="text-brand-blue">Knod</span> will create a link & QR code for your event. Helps share what your guests are looking for. <span className="text-brand-blue">Knod</span> instantly recommends the most relevant people around each attendee.
              </p>
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
                
                {/* Top Glass Badge */}
                <div className="self-start">
                  <div className="px-4 py-2 rounded-full flex items-center gap-2 border border-white/55 bg-white/40 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.4)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-black animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-black">
                      AI Room Orchestrator
                    </span>
                  </div>
                </div>

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

      {/* Book a Demo - Apple HIG Liquid Glass Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-brand-black/35 backdrop-blur-lg"
              id="modal-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/45 bg-white/70 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl z-10"
              id="demo-modal-dialog"
            >
              {/* Absorb colors behind modal */}
              <div className="absolute top-[-30%] right-[-20%] w-[250px] h-[250px] rounded-full bg-brand-blue/20 blur-[60px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] rounded-full bg-blue-300/20 blur-[50px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/40 border border-black/5 text-brand-black/60 hover:text-brand-black hover:bg-white/80 active:scale-95 transition-all outline-none cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-xl bg-brand-blue/15 text-brand-blue">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-brand-black/60">Knod Matching AI</span>
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight text-brand-black mb-2">Request Early Access to Knod</h3>
                    <p className="text-sm text-brand-black/75 mb-6 leading-relaxed">
                      We're opening access to event hosts in Chicago.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleBookDemo} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1">Organization</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Your organization"
                          className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1">Website</label>
                        <input
                          type="text"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="Your website URL"
                          className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1">What kind of events do you host? *</label>
                        <div className="relative">
                          <select
                            required
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            className="w-full appearance-none px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45"
                          >
                            <option value="" disabled hidden>Select event type</option>
                            <option value="Meetups/Mixers">Meetups/Mixers</option>
                            <option value="Conferences">Conferences</option>
                            <option value="Corporate Events">Corporate Events</option>
                            <option value="Community Gatherings">Community Gatherings</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-black/50">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1">How many events do you host per month? *</label>
                        <div className="relative">
                          <select
                            required
                            value={formData.frequency}
                            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                            className="w-full appearance-none px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45"
                          >
                            <option value="" disabled hidden>Select frequency</option>
                            <option value="1-2">1-2</option>
                            <option value="3-5">3-5</option>
                            <option value="6+">6+</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-black/50">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full cursor-pointer group mt-6 bg-brand-black text-white py-4 rounded-2xl text-base font-semibold hover:bg-brand-blue transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-blue/15 active:scale-98 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Request Access
                            <Calendar className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-6 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-6 shadow-lg shadow-emerald-500/5">
                      <Check className="w-8 h-8" strokeWidth={3} />
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight text-brand-black mb-2">You're on the list!</h3>
                    <p className="text-sm text-brand-black/75 mb-8 max-w-sm leading-relaxed">
                      Thanks for reaching out, <span className="font-semibold">{formData.name}</span>. An event orchestration specialist will email you at <span className="font-semibold">{formData.email}</span> within 12 hours.
                    </p>

                    <button
                      onClick={closeModal}
                      className="cursor-pointer bg-brand-black text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-brand-blue transition-all duration-300 active:scale-95"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
