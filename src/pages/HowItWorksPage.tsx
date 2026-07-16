import { motion } from "motion/react";
import { QrCode, Share2, Send, Users, ClipboardList, SlidersHorizontal, Target, Map, Zap, BarChart3, Eye } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const HOST_STEPS = [
  { icon: ClipboardList, title: "Paste", desc: "Paste your event link from Luma, Eventbrite, Partiful, and more." },
  { icon: SlidersHorizontal, title: "Customize", desc: "Customize your meeting spots and the questions you want to ask." },
  { icon: Share2, title: "Share", desc: "Share the link with your attendees. That's it." },
];

const ATTENDEE_STEPS = [
  { icon: Send, title: "Share", desc: "Share your intent before the event so Knod knows who you're hoping to meet." },
  { icon: QrCode, title: "Scan", desc: "Scan the QR code at the venue and start Knodding. No download, no app." },
  { icon: Users, title: "Meet", desc: "Meet the right people in person, introduced by shared goals and interests." },
];

export function HowItWorksPage() {
  useSEO({
    title: "How Knod Works | Knod",
    description: "Three simple steps for hosts, three for your guests. See how Knod turns any event into intelligent, in-person connection.",
  });

  return (
    <main className="flex-1 w-full pt-32 pb-24 relative">
      {/* Background Orbs for Liquid Glass Effect */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none data-[ignore]:invisible max-h-[800px]">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-[120px] mix-blend-multiply" />
      </div>

      {/* Header Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-24 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[900px]"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2 uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            How Knod Works
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.05] mb-6">
            Three steps for hosts. <span className="italic font-light text-brand-blue">Three for your guests.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-black/70 max-w-2xl leading-relaxed">
            Knod works with the tools you already use. Hosts set up in seconds, guests join with a scan, and the right people find each other in the room.
          </p>
        </motion.div>
      </section>

      {/* Steps Section: two role tracks, 3 steps each */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32 space-y-20 lg:space-y-28">
        {/* For Hosts */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-black/60">For Hosts</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {HOST_STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-black/5 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/40 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                    <step.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-6xl font-medium text-brand-black/5 group-hover:text-brand-blue/10 transition-colors">0{idx + 1}</div>
                </div>
                <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                <p className="text-brand-black/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* For Attendees */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-black/60">For Attendees</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ATTENDEE_STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-black/5 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/40 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                    <step.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-6xl font-medium text-brand-black/5 group-hover:text-brand-blue/10 transition-colors">0{idx + 1}</div>
                </div>
                <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                <p className="text-brand-black/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Intelligence Behind It Section */}
      <section className="bg-white py-24 border-y border-brand-black/5 px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: `48px 48px`,
          }}
        />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                  The Intelligence Behind It
                </h2>
                <p className="text-xl text-brand-black/70 leading-relaxed mb-6">
                  Knod combines behavioral math, AI, and low-friction design to read intent and quietly connect the right people, without turning networking into work.
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  Patent-pending technology
                </span>
                <div className="text-brand-black/50 font-medium italic p-6 bg-[#f5f5f7] rounded-2xl border border-brand-black/5">
                  "This is why users say AI makes networking more meaningful, not less."
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hidden lg:block w-48 mt-16 mx-auto relative group pointer-events-none"
                >
                  <div className="absolute inset-0 bg-brand-blue/10 blur-[40px] rounded-full group-hover:bg-brand-blue/20 transition-all duration-700"></div>
                  <img src="/knod_mascot.png" alt="Knod AI Mascot" className="w-full h-auto object-contain relative z-10 drop-shadow-xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105" />
                </motion.div>
              </motion.div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-12 border border-brand-black/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Target className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium">Intent Understanding</h3>
                </div>
                <p className="text-brand-black/70 leading-relaxed text-lg">
                  We don't just match based on job titles or industries. We understand why you're at this specific event. Are you hiring? Fundraising? Looking for co-founders? Learning about a new technology?
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-12 border border-brand-black/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Map className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium">Context Awareness</h3>
                </div>
                <p className="text-brand-black/70 leading-relaxed text-lg">
                  A startup pitch event requires different matches than a university career fair. We adapt our matching algorithm to the type of event, the audience, and what success looks like in that context.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-12 border border-brand-black/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Zap className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium">Smart Coordination</h3>
                </div>
                <p className="text-brand-black/70 leading-relaxed text-lg">
                  Finding the right person is only half of it. Knod handles the introduction, suggests a place to meet, and reduces the friction that usually kills a connection before it happens, so you actually meet in person instead of trading profiles.
                </p>
              </motion.div>

              {/* Host analytics card (dark, distinct) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-brand-black text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-56 h-56 bg-brand-blue/20 rounded-full blur-[60px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-accent-blue">
                    <BarChart3 className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium">See Your Room in Real Time</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6 relative z-10">
                  Hosts get a live view of what is happening in the room: who is looking for what, which connections are forming, and what people came for. You leave the event knowing it delivered, with insights to make the next one better.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                  {[
                    { icon: Users, label: "Matches made" },
                    { icon: Target, label: "What people want" },
                    { icon: Eye, label: "Live engagement" },
                    { icon: BarChart3, label: "Post-event recap" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
                      <item.icon className="w-5 h-5 text-brand-accent-blue" strokeWidth={1.75} />
                      <span className="text-xs font-medium text-white/80 leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
