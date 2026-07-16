import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Mic, Users, Ticket, Star } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function ConferencesPage() {
  useSEO({
    title: "Connection Infrastructure for Conferences & Events | Knod",
    description: "Summits, trade shows, corporate events, and festivals. Turn your event into a networking powerhouse where meaningful connections happen by design.",
  });

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-white">
      {/* Hero Dual Section */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px]">
          {/* Left Block */}
          <div className="bg-[#f5f5f7] rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center h-full relative overflow-hidden">
            <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              For Conferences & Live Events
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
              Make every event <span className="underline decoration-brand-blue/30 underline-offset-4">unforgettable</span>.
            </h1>
            <p className="text-lg text-brand-black/70 max-w-md mb-10 leading-relaxed font-light">
              Summits, trade shows, corporate events, festivals. Turn your event into a networking powerhouse where meaningful connections happen by design.
            </p>
            
          </div>

          {/* Right Block */}
          <div className="bg-white rounded-[2rem] relative h-[400px] lg:h-full overflow-hidden">
             <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full h-full object-cover" alt="Conferences and Live Events" />
             
             {/* Floating elements */}
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-2 flex items-center gap-3 shadow-lg max-w-[220px]">
                <div className="w-10 h-10 rounded-lg bg-[#ebfaef] flex items-center justify-center">
                    <Mic className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-[10px] font-semibold leading-tight pr-2">Live Experiences</p>
             </div>
             
             <div className="absolute bottom-6 right-6 bg-brand-black/80 backdrop-blur-md text-white rounded-xl p-4 max-w-[220px] text-xs leading-relaxed hidden sm:block">
               Creating environments where attendees naturally discover shared interests and form lasting bonds.
             </div>
          </div>
        </div>
      </section>

      {/* How Knod is used Section */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
           <div className="lg:col-span-5 sticky top-32">
             <div className="w-16 h-16 bg-[#eff6ff] rounded-2xl flex items-center justify-center mb-8">
               <Users className="w-8 h-8 text-blue-600" />
             </div>
             <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black mb-4 leading-tight">
               How Knod is used
             </h2>
           </div>
           
           <div className="lg:col-span-7 space-y-8">
              <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex gap-6">
                <span className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold shrink-0">1</span>
                <div>
                   <p className="text-brand-black/80 leading-relaxed font-medium text-lg">
                     Organizers create Knod spaces for the full conference and for specific tracks or lounges
                   </p>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex gap-6">
                <span className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold shrink-0">2</span>
                <div>
                   <p className="text-brand-black/80 leading-relaxed font-medium text-lg">
                     During breaks, slide decks show a QR: "Use Knod to find the three people you should meet this hour"
                   </p>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex gap-6">
                <span className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold shrink-0">3</span>
                <div>
                   <p className="text-brand-black/80 leading-relaxed font-medium text-lg">
                     Attendees answer a targeted prompt and get a small set of matches instead of a giant directory
                   </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Built for every event type */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black mb-6">
            Built for every event type
          </h2>
          <p className="text-lg text-brand-black/60 font-light">
            From intimate summits to massive festivals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
           <div className="bg-[#f5f5f7] border border-brand-black/5 rounded-[2rem] p-6 sm:p-8 md:p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black flex items-center gap-2"><Ticket className="w-6 h-6 text-brand-black/50" /> Summits & Trade Shows</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Turn every break into an opportunity for targeted connections
             </p>
           </div>
           
           <div className="bg-[#f5f5f7] border border-brand-black/5 rounded-[2rem] p-6 sm:p-8 md:p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black flex items-center gap-2"><Users className="w-6 h-6 text-brand-black/50" /> Corporate Events</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Help attendees find the right people to meet across departments or companies
             </p>
           </div>

           <div className="bg-[#f5f5f7] border border-brand-black/5 rounded-[2rem] p-6 sm:p-8 md:p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black flex items-center gap-2"><Mic className="w-6 h-6 text-brand-black/50" /> Festivals & Gatherings</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Create serendipitous connections in large, dynamic environments
             </p>
           </div>

           <div className="bg-[#f5f5f7] border border-brand-black/5 rounded-[2rem] p-6 sm:p-8 md:p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black flex items-center gap-2"><Star className="w-6 h-6 text-brand-black/50" /> Sponsor Experiences</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Give sponsors tools to run their own matching sessions and office hours
             </p>
           </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
           <div className="lg:col-span-12 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Benefits */}
                <div>
                   <h3 className="text-3xl font-medium tracking-tight mb-8">
                     Why event organizers love Knod
                   </h3>
                   <div className="bg-white rounded-[2rem] border border-brand-black/5 p-8 md:p-10 shadow-sm">
                     <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">Higher networking satisfaction without pushing a heavy conference app</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">Stronger sponsor experiences, sponsors can host their own Knod spaces for office hours or founder matching</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">New formats such as "connection breaks", "birds of a feather" tables, topic-based micro meetups</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">Post-event insight that helps with rebooking sponsors and designing next year's program</p>
                        </li>
                     </ul>
                   </div>
                </div>

                {/* Example Story */}
                <div>
                   <h3 className="text-3xl font-medium tracking-tight mb-8">
                     Example Story
                   </h3>
                   <div className="border border-brand-black/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group h-full">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff6e5] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                     <p className="text-brand-black/80 leading-relaxed font-light text-lg relative z-10">
                       A two-day startup summit runs scheduled "Knod breaks". Attendees opt into prompts like "Looking for an AI co-founder", "Raising a seed round", "Hiring first engineer". Knod gives each person a handful of relevant people to meet on each break. Organizers later show sponsors and partners that hundreds of targeted connections were created inside their event, not somewhere else.
                     </p>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-16">
        <div className="bg-brand-black rounded-[2rem] p-6 sm:p-8 md:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1AEB7E]/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
           
           <div className="relative z-10 w-full md:w-auto">
             <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-sm mb-6 inline-block border border-white/10">
               Connect your attendees
             </span>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight max-w-xl text-white leading-tight mb-4">
               Ready to elevate your next event?
             </h2>
             <p className="text-white/60 text-lg max-w-md font-light">
               Start with a free pilot. See what connection infrastructure can do for your attendees.
             </p>
           </div>
           
           <div className="relative z-10 w-full md:w-auto">
             <Link to="/pricing" className="bg-white text-brand-black px-10 py-5 rounded-full font-semibold hover:bg-[#1AEB7E] transition-colors flex items-center justify-center gap-2 whitespace-nowrap md:w-auto w-full shadow-xl shadow-black/20">
               Request a Quote <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
        </div>
      </section>

    </main>
  );
}
