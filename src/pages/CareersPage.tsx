import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const VALUES = [
  {
    icon: "🧠",
    title: "AI-first",
    desc: "We use AI in everything we build and how we work."
  },
  {
    icon: "🤝",
    title: "Founder access",
    desc: "You work directly with the founding team — no layers."
  },
  {
    icon: "🌆",
    title: "Chicago-rooted",
    desc: "We're building in Chicago and growing from here."
  },
  {
    icon: "🚀",
    title: "Ship fast",
    desc: "We move quickly, learn from real users, and iterate."
  }
];

const ROLES = [
  {
    title: "Product Design Intern",
    type: "Part-time · Remote",
    desc: "Help design the future of human connection. You'll work directly with the founders on UI/UX for our event activation flows, admin dashboard, and marketing site.",
    tags: ["Figma", "UI/UX", "Design systems", "Prototyping"]
  },
  {
    title: "Software Engineering Intern",
    type: "Part-time · Remote",
    desc: "Build features that thousands of event attendees will use. You'll contribute to our React/Next.js frontend and Supabase backend, working on AI matching, real-time dashboards, and event flows.",
    tags: ["React", "TypeScript", "Node.js", "Supabase"]
  },
  {
    title: "Sales & Business Development Intern",
    type: "Part-time · Chicago (preferred)",
    desc: "Help us bring Knod to universities, conferences, and communities across Chicago and beyond. You'll run outreach, attend events, and help close our first 100 paying organizations.",
    tags: ["Outreach", "CRM", "Events", "Storytelling"]
  },
  {
    title: "Marketing & Content Intern",
    type: "Part-time · Remote",
    desc: "Build the Knod story. You'll create content, run social media, write case studies, and help us grow from 1,000 early users to 100,000.",
    tags: ["Writing", "Social media", "Video", "SEO"]
  }
];

const TOOLS = [
  "Claude (Anthropic)", "Cursor", "Midjourney", "Perplexity", "Notion AI", "Supabase AI"
];

export function CareersPage() {
  useSEO({
    title: "Careers | Knod",
    description: "Join a small AI-first team building connection infrastructure in Chicago. Explore open internships in product design, engineering, and sales.",
  });

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero Section */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-24 cursor-default">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Join the Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Build the future of <br className="hidden sm:block" /> human connection.
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/60 font-light max-w-2xl mx-auto mb-10">
            We're a small, AI-powered team building connection infrastructure for the world's physical spaces. Come work with us.
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES.map((val, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-brand-black/5 shadow-sm hover:-translate-y-1 transition-transform"
             >
                <div className="text-4xl mb-6">{val.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-brand-black">{val.title}</h3>
                <p className="text-brand-black/60 font-light leading-relaxed">
                  {val.desc}
                </p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-32">
         <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-brand-black">
              Open Roles
            </h2>
            <p className="text-lg text-brand-black/60 font-medium tracking-wide uppercase">
              Internships — Summer / Fall 2026
            </p>
         </div>

         <div className="space-y-6">
           {ROLES.map((role, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="bg-white rounded-[2rem] p-8 sm:p-10 border border-brand-black/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-8"
              >
                 <div className="flex-1">
                   <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                     <h3 className="text-2xl font-semibold text-brand-black">{role.title}</h3>
                     <span className="inline-block bg-[#f5f5f7] text-brand-black/60 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap self-start md:self-auto">
                       {role.type}
                     </span>
                   </div>
                   <p className="text-brand-black/70 font-light leading-relaxed mb-8 max-w-3xl">
                     {role.desc}
                   </p>
                   
                   <div className="flex flex-wrap gap-2">
                     {role.tags.map((tag, tIdx) => (
                       <span key={tIdx} className="bg-brand-blue/5 text-brand-blue border border-brand-blue/10 px-4 py-1.5 rounded-full text-sm font-medium">
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
                 
                 <div className="md:shrink-0 flex items-center justify-start md:justify-end">
                    <a href="mailto:careers@knod.ai?subject=Application for ${role.title}" className="inline-flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue transition-colors group-hover:scale-[1.02] whitespace-nowrap">
                      Apply <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
              </motion.div>
           ))}
         </div>
      </section>

      {/* AI Tools */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-32">
         <div className="bg-brand-black rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF0066]/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6 text-white">
                AI tools we use
              </h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12">
                We're an AI-native team. These are the tools in our daily workflow.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center justify-center max-w-3xl mx-auto">
                 {TOOLS.map((tool, idx) => (
                    <span key={idx} className="bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium text-lg backdrop-blur-sm">
                      {tool}
                    </span>
                 ))}
              </div>
            </div>
         </div>
      </section>

      {/* CTA section */}
      <section className="px-4 lg:px-8 max-w-[800px] mx-auto text-center mb-16 text-brand-black">
         <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6 text-brand-black">
           Ready to join us?
         </h2>
         <p className="text-xl text-brand-black/60 font-light max-w-2xl mx-auto mb-10">
            Send your resume and a note about why you want to build Knod.
         </p>
         <a href="mailto:careers@knod.ai" className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-10 py-5 rounded-full font-semibold hover:bg-blue-600 transition-colors text-lg shadow-lg shadow-brand-blue/20">
           careers@knod.ai
         </a>
      </section>
    </main>
  );
}
