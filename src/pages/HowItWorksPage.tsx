import { motion } from "motion/react";
import { QrCode, BrainCircuit, Handshake, BarChart3, Target, Map, Puzzle, CheckCircle2, Sparkles, MessageCircle, Eye } from "lucide-react";

export function HowItWorksPage() {
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
          <span className="bg-brand-black/5 px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-brand-black/80 mb-6 inline-block">
            How Knod Works
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 flex flex-col md:block">
            Four simple steps to transform your event <span className="inline-flex items-center justify-start md:justify-center gap-3"><Sparkles className="w-8 h-8 md:w-12 md:h-12 text-brand-blue" /> from random networking</span> to intelligent connection.
          </h1>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-black/5 flex flex-col h-full relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/40 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                <QrCode className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-6xl font-medium text-brand-black/5 group-hover:text-brand-blue/10 transition-colors">01</div>
            </div>
            <h3 className="text-xl font-medium mb-4">Attendees Arrive at Your Event</h3>
            <p className="text-brand-black/70 mb-6 leading-relaxed">
              Place QR code posters at the entrance or registration area. Attendees scan with their phone camera—no download required, no app to install.
            </p>
            <div className="mt-auto bg-[#f5f5f7] rounded-xl p-5 text-sm space-y-3 font-medium opacity-80 border border-brand-black/5 group-hover:border-brand-blue/20 transition-colors">
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />Why are you here today?</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />What are you interested in?</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />What are you hoping to get from this event?</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />How do you prefer to connect?</p>
              <p className="pt-2 text-brand-black/50 text-xs italic">Takes less than 60 seconds. Works on any smartphone.</p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-black/5 flex flex-col h-full relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/40 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                <BrainCircuit className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-6xl font-medium text-brand-black/5 group-hover:text-brand-blue/10 transition-colors">02</div>
            </div>
            <h3 className="text-xl font-medium mb-4">AI Finds Their Best Matches</h3>
            <p className="text-brand-black/70 mb-6 leading-relaxed">
              Our three-layer intelligence system analyzes profile data within seconds, filtering out the noise to deliver precision connections.
            </p>
            <div className="mt-auto bg-[#f5f5f7] rounded-xl p-5 text-sm space-y-3 font-medium opacity-80 border border-brand-black/5 group-hover:border-brand-blue/20 transition-colors">
              <p className="flex items-start gap-2"><Target className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span><strong>Intent Layer:</strong> Why they're here</span></p>
              <p className="flex items-start gap-2"><Map className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span><strong>Context Layer:</strong> What's happening at this event</span></p>
              <p className="flex items-start gap-2"><Puzzle className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span><strong>Match Layer:</strong> Who they should meet based on complementary goals</span></p>
              <p className="pt-2 text-brand-black/50 text-xs italic">Within seconds, they receive real-time notifications.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-black/5 flex flex-col h-full relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/40 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                <Handshake className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-6xl font-medium text-brand-black/5 group-hover:text-brand-blue/10 transition-colors">03</div>
            </div>
            <h3 className="text-xl font-medium mb-4">They Meet in Person at the Event</h3>
            <p className="text-brand-black/70 mb-6 leading-relaxed">
              This is the critical part: Knod facilitates the introduction, then steps back. Chat is limited to 3 messages each—by design.
            </p>
            <div className="mt-auto bg-[#f5f5f7] rounded-xl p-5 text-sm space-y-3 font-medium opacity-80 border border-brand-black/5 group-hover:border-brand-blue/20 transition-colors">
              <p className="flex items-start gap-2"><MessageCircle className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>Why you were matched (shared interests, complementary goals)</span></p>
              <p className="flex items-start gap-2"><MessageCircle className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>Conversation starters to break the ice</span></p>
              <p className="flex items-start gap-2"><MessageCircle className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>Context about what they're looking for</span></p>
              <p className="pt-2 text-brand-black/50 text-xs italic">3-text limit forces real conversations, not endless chatting. The rest is human.</p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-black text-white rounded-[2rem] p-8 shadow-lg flex flex-col h-full relative overflow-hidden group"
          >
            {/* Glow effect on the dark card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">
                <BarChart3 className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-6xl font-medium text-white/10 group-hover:text-brand-blue/20 transition-colors">04</div>
            </div>
            <h3 className="text-xl font-medium mb-4 relative z-10">Organizers See the Impact</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              While attendees are networking, organizers get real-time insights via dashboard to prove your event delivered value.
            </p>
            <div className="mt-auto bg-white/5 backdrop-blur-sm rounded-xl p-5 text-sm space-y-3 font-medium text-white/90 border border-white/10 group-hover:border-brand-blue/30 transition-colors">
              <p className="flex items-start gap-2"><Eye className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>How many matches were made</span></p>
              <p className="flex items-start gap-2"><Eye className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>Average match quality ratings (1-5)</span></p>
              <p className="flex items-start gap-2"><Eye className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>What topics people are interested in</span></p>
              <p className="flex items-start gap-2"><Eye className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>Engagement levels throughout the event</span></p>
              <p className="flex items-start gap-2"><Eye className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" /><span>Anonymous sentiment and feedback</span></p>
            </div>
          </motion.div>
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
                <p className="text-xl text-brand-black/70 leading-relaxed mb-8">
                  Our three-layer system is what makes Knod different from generic "networking apps."
                </p>
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
                    <Puzzle className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium">Complementary Matching</h3>
                </div>
                <p className="text-brand-black/70 leading-relaxed text-lg">
                  We look for complementary goals, not just similar interests. If you're hiring engineers, we match you with engineers looking for jobs—not other hiring managers. If you're fundraising, we connect you with investors—not other founders fundraising.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
