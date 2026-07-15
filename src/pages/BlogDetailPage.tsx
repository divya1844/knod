import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Linkedin, Twitter, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export function BlogDetailPage() {
  useSEO({
    title: "Why the Future of Networking Is B2B2C, Not Another App | Knod",
    description: "We're paying to put people in rooms while they feel more disconnected inside them. Here's why the fix is an infrastructure layer, not another networking app.",
    type: "article",
  });

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Article Header */}
      <section className="px-6 max-w-[800px] mx-auto mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black/60 hover:text-brand-blue transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Industry Insights
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] mb-8 text-brand-black">
            Why the Future of Networking Is B2B2C, Not Another App
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-brand-black/5 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-black/5 flex items-center justify-center font-bold text-brand-black">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-brand-black uppercase tracking-wider mb-0.5">Knod AI</span>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-black/50 uppercase tracking-widest">
                  <span>December 2025</span>
                  <span className="w-1 h-1 rounded-full bg-brand-black/20" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-black/60 hover:text-[#0a66c2] transition-colors">
                Read on LinkedIn <ExternalLink className="w-3.5 h-3.5 -mt-0.5" />
              </a>
              <div className="w-px h-6 bg-brand-black/10 hidden sm:block" />
              <div className="flexItems-center gap-2 hidden sm:flex">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-black/50 mr-2">Share:</span>
                <button aria-label="Share on LinkedIn" className="w-11 h-11 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/60 hover:bg-[#0a66c2] hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </button>
                <button aria-label="Share on Twitter" className="w-11 h-11 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/60 hover:bg-brand-black hover:text-white transition-colors">
                  <Twitter className="w-3.5 h-3.5" />
                </button>
                <button aria-label="Copy link" className="w-11 h-11 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/60 hover:border-brand-black hover:text-brand-black transition-colors">
                  <LinkIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-16">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[21/9] md:aspect-[16/7] rounded-[2rem] overflow-hidden bg-brand-black/5 shadow-sm"
         >
           <img 
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Networking and connecting" 
              className="w-full h-full object-cover"
           />
         </motion.div>
      </section>

      {/* Article Content */}
      <section className="px-6 max-w-[800px] mx-auto mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="text-brand-black/70 font-light leading-relaxed text-lg"
        >
          <p className="text-xl md:text-2xl font-light text-brand-black/80 leading-relaxed mb-8">
            We are living in a strange moment.
          </p>
          
          <p className="mb-6">
            On one side, people feel more isolated than ever. A recent Meta Gallup survey found that nearly one in four adults worldwide say they feel very or fairly lonely. For young people aged 15 to 24, time spent in person with friends has fallen by almost 70 percent over the last two decades.
          </p>
          
          <p className="mb-6">
            On the other side, we are spending huge amounts of money to get people into the same physical spaces. Events, conferences, member programs, campuses, brand experiences, all together sit in the hundreds of billions of dollars globally every year.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-black mt-12 mb-6">The Paradox</h2>
          <p className="mb-6">
            So we have a paradox. We are paying to put people in rooms while they feel more disconnected inside those rooms.
          </p>
          <p className="mb-6">
            For years, the default response has been 'build another app.' The data is not kind. The average smartphone user might have forty to eighty apps installed but actively uses only around nine or ten a day. Event specific apps struggle to get downloads before the event is even over.
          </p>
          <p className="mb-6">
            At Knod we think the solution is not another social network. It is an infrastructure layer.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-black mt-12 mb-6">What B2B2C Connection Infrastructure Looks Like</h2>
          <p className="mb-6">
            In payments, communications, and authentication, B2B2C is already normal. Stripe powers your payment flow without owning your customer. Twilio powers your SMS and calls without being the product your users see every day.
          </p>
          <p className="mb-6">
            Connection infrastructure works the same way.
          </p>
          <p className="mb-6">
            Knod sells to hosts, universities, innovation hubs, coworking spaces, commercial & residential real estate, communities and event organizers. They keep the brand and the relationship. We power the connection.
          </p>
          <p className="mb-6">
            Attendees see the host's identity first: 'Illinois Tech Orientation,' 'Chicago Innovation AI Summit,' 'Resident Lounge Connect.' They scan a QR code, type a name, flip Knod on, and get a few relevant suggestions for who to talk to. No app store. No new profile. No feed.
          </p>
          <p className="mb-6">
            Behind the scenes, Knod handles event management, presence, intent understanding, matching, and insights.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-black mt-12 mb-6">Why This Model Aligns Incentives</h2>
          <p className="mb-6">
            <strong className="font-semibold text-brand-black">For hosts:</strong> A connection layer like Knod is a way to standardize how people meet across multiple events and spaces, without hiring an internal engineering team. It makes their rooms 'work' better. When people leave saying 'this is where I meet my people,' retention and word of mouth go up.
          </p>
          <p className="mb-6">
            <strong className="font-semibold text-brand-black">For attendees:</strong> It is a low friction way to get value from in person time. They can opt in or not. There is no expectation that this becomes yet another daily social platform.
          </p>
          <p className="mb-6">
            <strong className="font-semibold text-brand-black">For Knod:</strong> B2B2C means we grow through existing communities instead of fighting for individual downloads. Each deployment makes the system smarter about what kinds of prompts and pairings actually turn into real conversations.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-black mt-12 mb-6">Why This Matters Now</h2>
          <p className="mb-6">
            Event and experiential teams say they care deeply about ROI, yet a large percentage still do not consistently track basics. Most of the value of 'networking' is left unmeasured. Who met whom, whether they stayed in touch, and how that affected churn or lifetime value.
          </p>
          <p className="mb-6">
            Connection infrastructure makes those things visible. It does not try to replace the human part. It gives hosts tools and insights to design better rooms next time.
          </p>
          <p className="mb-6">
            That is why we believe the future of networking is not another app icon on your home screen. It is B2B2C infrastructure that lives quietly behind the places you already trust, and helps you meet the right people when you show up.
          </p>
          
          <div className="mt-12 pt-8 border-t border-brand-black/5 flex items-center justify-between">
             <p className="text-sm font-semibold uppercase tracking-widest text-brand-black/40 italic m-0">
               Originally published on LinkedIn
             </p>
             <div className="flex sm:hidden items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/60 hover:bg-[#0a66c2] hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black/60 hover:bg-brand-black hover:text-white transition-colors">
                  <Twitter className="w-3.5 h-3.5" />
                </button>
             </div>
          </div>
        </motion.div>
      </section>
      
      {/* Read More / Newsletter */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-16">
        <div className="bg-[#111112] text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div>
             <h2 className="text-3xl font-medium tracking-tight mb-3">
               More insights like this
             </h2>
             <p className="text-white/60 font-light">
               Join our newsletter for the latest ideas on community building and connection.
             </p>
           </div>
           
           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
             <label htmlFor="newsletter-email-blog" className="sr-only">Email address</label>
             <input id="newsletter-email-blog" type="email" autoComplete="email" placeholder="Email address..." className="px-6 py-4 outline-none rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors min-w-[280px]" />
             <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
               Subscribe <ArrowRight className="w-4 h-4" />
             </button>
           </div>
        </div>
      </section>

    </main>
  );
}
