import { motion } from "motion/react";
import { Check, ArrowRight, Lock, Target, Handshake, Megaphone } from "lucide-react";

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
    ctaText: "Get Started",
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
    ctaText: "Pay Now — $5,000",
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
    ctaText: "Pay Now — $10,000",
    popular: false,
    color: "bg-[#f5f5f7] text-brand-black",
    btnColor: "bg-brand-black text-white hover:bg-[#222]"
  }
];

const STANDARD_PLANS = [
  {
    name: "Community",
    price: "$99",
    period: "/mo",
    features: [
      "Up to 100 members",
      "3 event activations/mo",
      "Basic matching",
      "Email support"
    ],
    ctaText: "Available at public launch",
    popular: false,
    color: "bg-[#f5f5f7] text-brand-black",
    btnColor: "bg-brand-black text-white hover:bg-[#222]"
  },
  {
    name: "Professional",
    price: "$299",
    period: "/mo",
    features: [
      "Up to 500 members",
      "Unlimited events",
      "Advanced matching + insights",
      "Priority support"
    ],
    ctaText: "Available at public launch",
    popular: true,
    color: "bg-brand-blue text-white",
    btnColor: "bg-white text-brand-blue hover:bg-white/90"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited members",
      "White-label option",
      "API + integrations",
      "Dedicated CSM"
    ],
    ctaText: "Contact Us",
    popular: false,
    color: "bg-[#111112] text-white",
    btnColor: "bg-[#1AEB7E] text-[#111] hover:bg-[#15cd6d]"
  }
];

export function PricingPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-16 md:mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Early Access
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Become a Knod <br className="hidden sm:block" /> Launch Partner
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/60 font-light max-w-2xl mx-auto mb-8">
            Lock in founding pricing. Help shape connection infrastructure for physical spaces.
          </p>
          
          <div className="flex items-center justify-center gap-3 text-sm text-brand-black/50 font-medium">
             {/* Simple stripe-like lock icon */}
             <Lock className="w-4 h-4" />
             <span>Secure checkout powered by Stripe. Pay by card, bank transfer, or invoice. Instant confirmation sent to your email.</span>
          </div>
        </motion.div>
      </section>

      {/* Launch Partner Pricing Tier */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-xl lg:max-w-none mx-auto">
          {LAUNCH_PLANS.map((plan, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col ${plan.color} ${plan.popular ? 'md:-mt-6 shadow-xl shadow-brand-blue/20' : 'border border-black/5'}`}
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

                <div className="flex-1">
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
                  {plan.ctaText} {plan.name === 'Starter' && <ArrowRight className="w-4 h-4" />}
                </button>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Perks Grid */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-28 md:mb-32">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-4 text-brand-black max-w-lg mx-auto leading-tight">
            Every launch partner gets
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
           <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#f5f5f7] rounded-xl flex items-center justify-center text-brand-black/60">
                 <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-brand-black mb-2">Founding price locked for 2 years</h3>
                <p className="text-brand-black/60 leading-relaxed font-light">Never pay more as we scale. Your pricing remains guaranteed for a full two years regardless of new feature releases.</p>
              </div>
           </div>
           
           <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#ebfaef] rounded-xl flex items-center justify-center text-[#20B073]">
                 <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-brand-black mb-2">Early feature access</h3>
                <p className="text-brand-black/60 leading-relaxed font-light">Get early access to upcoming features including pre-registration, advanced connection analytics, and native integrations.</p>
              </div>
           </div>

           <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                 <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-brand-black mb-2">Direct founder relationship</h3>
                <p className="text-brand-black/60 leading-relaxed font-light">Work directly with our founding team to shape how Knod works for your organization and influence our product roadmap.</p>
              </div>
           </div>

           <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#fff6e5] rounded-xl flex items-center justify-center text-[#ffa500]">
                 <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-brand-black mb-2">Co-marketing + case study</h3>
                <p className="text-brand-black/60 leading-relaxed font-light">Get featured on Knod.ai and across our social channels as a pioneering organization building connection infrastructure.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Standard Monthly pricing (Ecosystem Pricing) */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-20 md:mb-32">
        <div className="bg-[#f9f9fb] rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-brand-black/5">
           <div className="mb-12 text-center md:text-left flex flex-col md:flex-row gap-8 justify-between items-end">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-brand-black">
                  Ecosystem pricing
                </h2>
                <p className="text-brand-black/60 max-w-lg">
                  After the launch partner window closes, Knod moves to standard monthly pricing.
                </p>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-xl lg:max-w-none mx-auto">
              {STANDARD_PLANS.map((plan, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col ${plan.color} ${plan.popular ? 'shadow-xl shadow-brand-blue/20 lg:-mt-6 lg:mb-6' : 'border border-black/5'}`}
                 >
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111112] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-medium tracking-tighter">{plan.price}</span>
                      <span className={`text-sm ${plan.name === 'Community' ? 'text-brand-black/50' : 'text-white/70'} font-semibold ml-1`}>{plan.period}</span>
                    </div>
                    
                    <div className="flex-1 mt-6">
                       <ul className="space-y-4 mb-8">
                         {plan.features.map((feature, fIdx) => (
                           <li key={fIdx} className="flex items-start gap-3">
                             <div className={`mt-0.5 shrink-0 ${plan.popular || plan.name === 'Enterprise' ? 'text-white/80' : 'text-brand-black/40'}`}>
                               <Check className="w-4 h-4" />
                             </div>
                             <span className={`text-sm md:text-[15px] font-medium leading-snug ${plan.popular || plan.name === 'Enterprise' ? 'text-white/90' : 'text-brand-black/80'}`}>
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
        </div>
      </section>
    </main>
  );
}
