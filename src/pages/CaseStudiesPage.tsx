import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

const CASE_STUDIES = [
  {
    type: "Annual summit & community events",
    client: "Chicago Innovation",
    headline: "12x more connections per attendee in a single room.",
    body: "Chicago Innovation hosted Knod at their flagship event, giving 200+ attendees a pre-registration flow that matched them based on industry, goals, and interests. Connections that would have taken hours of forced small talk happened in minutes.",
    quote: "Knod changed how we think about our events. People who would never have found each other were connecting within minutes.",
    author: "Event Director, Chicago Innovation",
    stats: [
      { value: "12x", label: "Connection efficiency", colSpan: 2 },
      { value: "200+", label: "Attendees", colSpan: 1 },
      { value: "4.3/5", label: "Match quality", colSpan: 1 }
    ],
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    type: "Academic networking research",
    client: "UIC — University of Illinois Chicago",
    headline: "63.6% of students said AI made networking more meaningful, not less.",
    body: "Deployed in a campus networking context, Knod was used as part of a research study on AI-assisted human connection. Students consistently rated Knod-facilitated introductions as higher quality than organic networking.",
    quote: "The data surprised us. Students weren't just tolerating the AI — they preferred it.",
    author: "Research lead, UIC",
    stats: [
      { value: "63.6%", label: "Say AI improves networking", colSpan: 2 },
      { value: "4.3/5", label: "Avg match quality", colSpan: 1 },
      { value: "89%", label: "Would use again", colSpan: 1 }
    ],
    image: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    type: "Campus deployment",
    client: "Illinois Tech",
    headline: "290+ users activated across campus events.",
    body: "Illinois Tech integrated Knod into their campus event infrastructure, running multiple activations across student organizations and career events. The platform scaled seamlessly from 30-person workshops to 150-person career fairs.",
    quote: "Setup was fast. Students loved it. We're running it at every event now.",
    author: "Student affairs, Illinois Tech",
    stats: [
      { value: "290+", label: "Users activated", colSpan: 2 },
      { value: "6+", label: "Events run", colSpan: 1 },
      { value: "Multi", label: "Workshops → career fairs", colSpan: 1 }
    ],
    image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    type: "Entrepreneurship community",
    client: "1 Million Cups Chicago",
    headline: "Turning a weekly coffee meetup into a real connection engine.",
    body: "1 Million Cups Chicago piloted Knod to help founders, investors, and mentors find each other faster at their weekly Wednesday meetups. Pre-registration matched attendees before they even sat down.",
    quote: "The right conversations were happening. That's all we wanted.",
    author: "Organizer, 1 Million Cups Chicago",
    stats: [
      { value: "Weekly", label: "Recurring activation", colSpan: 2 },
      { value: "Founders", label: "Investors · Mentors", colSpan: 1 },
      { value: "Pre-reg", label: "Before-event matching", colSpan: 1 }
    ],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

export function CaseStudiesPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero Section */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-16 md:mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Proof from the field
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Real Results
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/60 font-light max-w-2xl mx-auto">
            Knod has been deployed at conferences, universities, and community events across Chicago. Here's what happened.
          </p>
        </motion.div>
      </section>

      {/* Case Studies List */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24">
        {CASE_STUDIES.map((study, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`bg-white rounded-[2rem] p-6 sm:p-10 lg:p-14 mb-8 sm:mb-12 flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 border border-brand-black/5 shadow-sm`}
          >
            {/* Left/Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
               <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-[#f5f5f7] rounded-full text-[10px] sm:text-xs font-semibold text-brand-black/60 uppercase tracking-wider">
                    {study.type}
                  </span>
               </div>
               
               <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-brand-black">
                 {study.client}
               </h2>
               <h3 className="text-xl sm:text-2xl font-medium text-brand-blue mb-6 leading-tight pr-4">
                 {study.headline}
               </h3>
               <p className="text-brand-black/70 mb-8 sm:mb-12 leading-relaxed text-[15px] sm:text-base">
                 {study.body}
               </p>
               
               <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-blue/30 mt-auto">
                 <Quote className="absolute -top-2 -left-3 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 text-brand-blue/20 rotate-180" />
                 <p className="text-base sm:text-lg italic text-brand-black/80 font-medium leading-relaxed">
                   "{study.quote}"
                 </p>
                 <footer className="text-xs sm:text-sm font-semibold text-brand-black/50 mt-4 tracking-wide uppercase">
                   — {study.author}
                 </footer>
               </div>
            </div>

            {/* Right/Stats Block */}
            <div className="w-full lg:w-1/2 bg-[#f9f9fb] rounded-[2rem] p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between border border-brand-black/5">
                {/* Background Contextual Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={study.image} className="w-full h-full object-cover opacity-10 mix-blend-multiply" alt="Contextual background" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fb]/90 via-[#f9f9fb]/40 to-[#f9f9fb]" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full relative z-10 w-full">
                  {study.stats.map((stat, sIdx) => (
                    <div 
                      key={sIdx} 
                      className={`bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-black/5 flex flex-col justify-center overflow-hidden group ${stat.colSpan === 2 ? 'col-span-2 min-h-[140px] sm:min-h-[160px]' : 'col-span-1 min-h-[120px] sm:min-h-[140px]'}`}
                    >
                      <span className={`${stat.colSpan === 2 ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-2xl sm:text-3xl lg:text-4xl'} font-medium tracking-tight mb-2 text-brand-black group-hover:scale-105 transition-transform origin-left duration-300 truncate`}>
                        {stat.value.includes('/') ? (
                          <>
                            {stat.value.split('/')[0]}
                            <span className="text-xl sm:text-2xl lg:text-3xl text-brand-black/30">/{stat.value.split('/')[1]}</span>
                          </>
                        ) : (
                           stat.value
                        )}
                      </span>
                      <span className="text-brand-black/60 font-medium text-[10px] sm:text-xs uppercase tracking-wider leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Footer Block */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-16">
        <div className="bg-[#111112] text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 text-center md:text-left relative overflow-hidden">
           
           {/* Abstract shapes for CTA */}
           <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full sm:bg-brand-blue/40 blur-[100px]" />
           </div>

           <div className="relative z-10 text-center md:text-left md:w-[60%] lg:w-[70%]">
             <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-sm mb-6 inline-block">
               Your organization could be next
             </span>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl text-white leading-[1.1] mb-6">
               Join Chicago Innovation, UIC, and Illinois Tech as a Knod launch partner.
             </h2>
           </div>
           
           <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
             <button className="bg-[#1AEB7E] text-brand-black px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#1AEB7E]/90 transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-[#1AEB7E]/20">
               Become a Launch Partner <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </section>

    </main>
  );
}
