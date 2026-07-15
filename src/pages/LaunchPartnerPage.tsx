import { motion } from "motion/react";
import { Check, ArrowRight, Lock, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

const LAUNCH_PLANS = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/ 2yr",
    availability: "● 100 spots available",
    features: [
      "Up to 250 members / attendees",
      "5 event activations",
      "AI-powered matching",
      "Admin dashboard",
      "Email support",
      "Launch partner badge"
    ],
    ctaText: "Get Started →",
    popular: false,
    color: "bg-[#f5f5f7] text-brand-black",
    btnColor: "bg-brand-black text-white hover:bg-[#222]"
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "/ 2yr",
    availability: "● 50 spots · 23 claimed",
    features: [
      "Up to 1,000 members / attendees",
      "Unlimited event activations",
      "AI matching + pre-registration",
      "Custom event questions",
      "Connection insights & export",
      "Priority support + onboarding",
      "Co-marketing opportunities"
    ],
    ctaText: "Pay Now, $5,000",
    popular: true,
    color: "bg-brand-blue text-white",
    btnColor: "bg-white text-brand-blue hover:bg-white/90"
  },
  {
    name: "Strategic Founding",
    price: "$10,000",
    period: "/ 2yr",
    availability: "🔴 First 10 orgs only · 7 claimed",
    features: [
      "Up to 5,000+ members",
      "Unlimited everything",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Shape the Knod roadmap",
      "White-label option"
    ],
    ctaText: "Pay Now, $10,000",
    popular: false,
    color: "bg-[#f5f5f7] text-brand-black",
    btnColor: "bg-[#ff4444] text-white hover:bg-[#ee3333]"
  }
];

const FAQS = [
  {
    q: "Is this a subscription?",
    a: "No. The launch partner price is a one-time payment that covers 2 years of full access. No recurring charges."
  },
  {
    q: "What happens after 2 years?",
    a: "You'll be offered a renewal at preferential pricing, founders honor their early supporters. You'll never be auto-charged."
  },
  {
    q: "Can I upgrade my tier later?",
    a: "Yes. You can upgrade at any time by paying the difference between tiers at your locked-in founding rate."
  },
  {
    q: "How does payment work?",
    a: "Stripe handles checkout. You can pay by card, ACH bank transfer, or request an invoice. Confirmation is instant."
  }
];

export function LaunchPartnerPage() {
  useSEO({
    title: "Become a Launch Partner | Knod",
    description: "Lock in founding pricing and become a Knod launch partner. Starter, Growth, and Strategic Founding tiers available for early adopters.",
  });

  const scrollToTiers = () => {
    const el = document.getElementById("tiers");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-24 cursor-default">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Early Access
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Become a Knod <br className="hidden sm:block" /> Launch Partner.
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/60 font-light max-w-2xl mx-auto mb-10">
            Lock in founding pricing. Help build connection infrastructure for the world's physical spaces.
          </p>
          
          <button 
            onClick={scrollToTiers}
            className="inline-flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#111] transition-transform hover:scale-[1.02] mb-10"
          >
            See Launch Partner Tiers <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* What You Get & Testimonial */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
           <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-brand-black/5 shadow-sm">
             <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-8">
               What You Get
             </h2>
             <p className="text-brand-blue font-semibold mb-8">
               More than access. A stake in what we're building.
             </p>
             <ul className="space-y-6">
               {[
                 "Founding price locked for 2 full years, never pay more as we scale",
                 "Early access to every new feature before public rollout",
                 "Direct line to the Knod founding team, your feedback shapes the roadmap",
                 "Co-marketing and case study feature on Knod.ai and our social channels",
                 "Priority support and white-glove onboarding for your first event",
                 "Launch partner badge displayed on your event page"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-4 text-brand-black/80 font-light text-lg">
                   <div className="mt-1 shrink-0 text-[#1AEB7E]">
                     <Check className="w-5 h-5" />
                   </div>
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="flex flex-col justify-center bg-brand-black text-white rounded-[2rem] p-10 sm:p-14 md:px-16 shadow-lg relative overflow-hidden group">
              {/* Abstract element */}
              <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-brand-blue/30 rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-blue/40 transition-colors" />
              
              <svg className="w-10 h-10 text-white/20 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl sm:text-2xl font-light leading-relaxed mb-10 relative z-10">
                "Knod changed how we think about our events. People who would never have found each other were connecting within minutes."
              </p>
              
              <div className="text-white/60 font-medium tracking-wide uppercase text-xs sm:text-sm">
, Event organizer, Chicago Innovation
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="tiers" className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 pt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-medium tracking-tight mb-4 text-brand-black">
            Choose your tier. Pay now via Stripe.
          </h2>
          <p className="text-lg text-brand-black/60 font-light max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> All tiers include a 2-year founding price lock. No recurring charges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6 max-w-xl lg:max-w-none mx-auto">
          {LAUNCH_PLANS.map((plan, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col ${plan.color} ${plan.popular ? 'md:-mt-6 shadow-xl shadow-brand-blue/20 mb-6 md:mb-0' : 'border border-black/5'}`}
             >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111112] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-semibold tracking-tight mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-medium tracking-tighter">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-brand-black/50'} font-semibold ml-1`}>{plan.period}</span>
                </div>
                
                <div className={`text-xs font-bold tracking-wider mb-8 uppercase ${plan.name === 'Strategic Founding' ? 'text-[#ff4444]' : plan.popular ? 'text-white/90' : 'text-brand-blue'}`}>
                  {plan.availability}
                </div>

                <div className="flex-grow">
                   <ul className="space-y-4 mb-8">
                     {plan.features.map((feature, fIdx) => (
                       <li key={fIdx} className="flex items-start gap-3">
                         <div className={`mt-0.5 shrink-0 ${plan.popular ? 'text-white/80' : 'text-brand-black/40'}`}>
                           <Check className="w-4 h-4" />
                         </div>
                         <span className={`text-sm md:text-[15px] font-medium leading-snug ${plan.popular ? 'text-white/90' : 'text-brand-black/80'}`}>
                           {feature}
                         </span>
                       </li>
                     ))}
                   </ul>
                </div>
                
                <button className={`w-full py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] ${plan.btnColor}`}>
                  {plan.ctaText}
                </button>
             </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 lg:px-8 max-w-[800px] mx-auto mb-24">
        <h2 className="text-3xl font-medium tracking-tight mb-10 text-center">FAQ</h2>
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 border border-brand-black/5 shadow-sm flex gap-6 items-start">
               <div className="bg-[#f5f5f7] p-3 rounded-full text-brand-blue shrink-0 hidden sm:block">
                 <HelpCircle className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-black">{faq.q}</h3>
                  <p className="text-brand-black/60 font-light leading-relaxed">{faq.a}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-16">
        <div className="bg-brand-blue text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-lg shadow-brand-blue/20">
           <div>
             <h2 className="text-3xl font-medium tracking-tight mb-3">
               Pilot Knod at your next event.
             </h2>
             <p className="text-white/80 font-light">
               Limited spots. Founding price. Direct relationship with the team.
             </p>
           </div>
           
           <button 
             onClick={scrollToTiers}
             className="bg-white text-brand-blue px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap min-w-[200px]"
           >
             Become a Launch Partner <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </section>

    </main>
  );
}
