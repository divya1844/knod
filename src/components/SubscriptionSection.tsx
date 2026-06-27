import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SmileFace = ({ className = "w-14 h-14 sm:w-20 sm:h-20", stroke = "black" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 14s2 3 5 3 5-3 5-3" />
    <line x1="8.5" y1="9" x2="8.51" y2="9" strokeWidth="4" strokeLinecap="round" />
    <line x1="15.5" y1="9" x2="15.51" y2="9" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const TIERS = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/ 2yr",
    availability: "● 100 spots available",
    badge: null,
    features: [
      "Up to 250 members / attendees",
      "5 event activations",
      "AI-powered matching",
      "Admin dashboard",
      "Email support",
      "Launch partner badge"
    ],
    buttonText: "Get Started →",
    decorColor: "#004A22",
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "/ 2yr",
    availability: "● 50 spots · 23 claimed",
    badge: "Most Popular",
    features: [
      "Up to 1,000 members / attendees",
      "Unlimited event activations",
      "AI matching + pre-registration",
      "Custom event questions",
      "Connection insights & export",
      "Priority support + onboarding",
      "Co-marketing opportunities"
    ],
    buttonText: "Pay Now — $5,000",
    decorColor: "#ffaa00",
  },
  {
    name: "Strategic Founding",
    price: "$10,000",
    period: "/ 2yr",
    availability: "🔴 First 10 orgs only · 7 claimed",
    badge: null,
    features: [
      "Up to 5,000+ members",
      "Unlimited everything",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Shape the Knod roadmap",
      "White-label option"
    ],
    buttonText: "Pay Now — $10,000",
    decorColor: "#FF0055",
  }
];

export function SubscriptionSection() {
  const [activeTier, setActiveTier] = useState(1); // Start with 'Growth'

  const nextTier = () => setActiveTier((p) => (p + 1) % TIERS.length);
  const prevTier = () => setActiveTier((p) => (p - 1 + TIERS.length) % TIERS.length);

  const tier = TIERS[activeTier];

  return (
    <>
      <section className="bg-[#eaeaea] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans border-t border-brand-black/5" id="pricing">
        <div className="max-w-[1300px] mx-auto relative z-10">
          
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Card */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 lg:p-14 flex flex-col justify-end min-h-[500px] lg:min-h-[600px] relative shadow-sm overflow-hidden">
            
            {/* Floating Card element */}
            <motion.div
              animate={{ y: [-15, 10, -15], rotate: [-14, -10, -14] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 sm:top-8 -left-10 sm:-left-12 lg:-left-20 w-[380px] sm:w-[500px] aspect-[1.6] bg-[#0022FF] rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] overflow-hidden flex flex-wrap -rotate-12 border-2 border-white/5 origin-center z-20 pointer-events-none"
            >
              <div className="w-1/3 h-1/2 bg-[#FF0055] flex items-center justify-center pt-4"><SmileFace /></div>
              <div className="w-1/3 h-1/2 bg-[#FF4D00] flex items-center justify-center pt-8"><SmileFace /></div>
              <div className="w-1/3 h-1/2 bg-[#0033FF] flex items-center justify-center pt-4"><SmileFace stroke="white"/></div>
              <div className="w-1/3 h-1/2 bg-[#004A22] flex items-center justify-center text-white"><SmileFace stroke="white"/></div>
              <div className="w-1/3 h-1/2 bg-[#FFCC00] flex items-center justify-center pb-4"><SmileFace /></div>
              <div className="w-1/3 h-1/2 bg-[#FF8800] flex items-center justify-center pb-6"><SmileFace /></div>
              <span className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 text-white/90 text-[8px] sm:text-[10px] uppercase font-mono tracking-widest font-bold mix-blend-overlay">Monthly Club</span>
            </motion.div>

            <div className="relative z-10 mt-64 sm:mt-80 lg:mt-0">
              <div className="inline-flex items-center gap-3 bg-brand-black text-white px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide mb-6 sm:mb-8 border border-white/10 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFE600] animate-pulse" />
                Limited Availability
              </div>
              <h3 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-medium tracking-tight text-brand-black leading-[1.05] mb-4">
                Become a Knod<br />Launch Partner.
              </h3>
              <p className="text-brand-black/70 text-lg sm:text-xl font-medium leading-relaxed max-w-md mb-8">
                Lock in founding pricing. Help shape connection infrastructure for physical spaces. 3 tiers available — pay directly on this page.
              </p>
              <a href="#learn-more" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 transition-colors">
                Learn what launch partners get <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Card - Interactive Slider */}
          <div className="bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-12 relative overflow-hidden flex flex-col shadow-2xl min-h-[500px] lg:min-h-[600px]">
            
            {/* Slider Controls */}
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 z-30 flex items-center gap-2">
              <button 
                onClick={prevTier} 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTier} 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative z-10 w-full flex-grow flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTier}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col flex-grow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8 pr-24">
                    <h3 className="text-3xl sm:text-[2.5rem] font-medium text-white tracking-tight leading-none">{tier.name}</h3>
                    <span className="border border-white/10 text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-medium inline-block align-middle self-start">
                      {tier.availability}
                    </span>
                  </div>

                  <div className="w-full h-px border-t border-dashed border-white/20 mb-8" />

                  <div className="h-10 mb-6">
                    {tier.badge && (
                      <div className="inline-block bg-[#FF0055]/10 text-[#FF0055] px-4 py-2 rounded-full text-xs font-semibold tracking-tight border border-[#FF0055]/20">
                        {tier.badge}
                      </div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-3 text-white mb-10">
                    <span className="text-[3.5rem] sm:text-[5rem] leading-none font-medium tracking-tighter">{tier.price}</span>
                    <span className="text-white/40 text-[13px] sm:text-sm font-semibold tracking-wide">{tier.period}</span>
                  </div>

                  {/* Included Box */}
                  <div className="bg-[#18181b] border border-white/5 rounded-[1.2rem] p-6 sm:p-8 pt-8 sm:pt-10 relative flex-grow mb-20 sm:mb-24">
                    <div className="absolute -top-3.5 left-6 bg-[#27272a] border border-white/10 text-white/60 text-[9px] font-semibold px-3 py-1 rounded-md uppercase tracking-widest shadow-md">
                      Included
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {tier.features.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckIcon className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span className="text-white/90 text-[13px] sm:text-[14px] font-normal leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-20">
                    <button className="bg-[#27272a] border border-white/5 text-white rounded-[1rem] flex items-stretch overflow-hidden hover:bg-[#3f3f46] transition-colors shadow-lg group cursor-pointer">
                      <div className="bg-[#ff5500] w-14 sm:w-[4.5rem] flex items-center justify-center group-hover:bg-[#ff7700] transition-colors">
                        <svg className="text-brand-black w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                      <span className="px-6 py-4 font-semibold text-[14px] sm:text-[15px]">{tier.buttonText}</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slider Dots */}
            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-30 flex items-center gap-2">
              {TIERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTier(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeTier ? "w-6 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
