import { motion } from "motion/react";
import { ArrowRight, Building, Wine } from "lucide-react";

export function CommunitiesPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-white">
      {/* Hero Dual Section (Following About Us Format) */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px]">
          {/* Left Block */}
          <div className="bg-[#f5f5f7] rounded-[2rem] p-10 lg:p-16 flex flex-col justify-center h-full relative overflow-hidden">
            <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              For Communities & Third Spaces
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
              Turn physical spaces into <span className="underline decoration-brand-blue/30 underline-offset-4">connection-enabled</span> environments.
            </h1>
            <p className="text-lg text-brand-black/70 max-w-md mb-10 leading-relaxed font-light">
              From residential buildings to bars and coworking spaces, Knod helps people discover meaningful connections wherever they gather.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <button className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-colors flex items-center justify-center gap-2">
                 Get Started <ArrowRight className="w-4 h-4" />
               </button>
               <button className="bg-white text-brand-black px-8 py-4 rounded-full font-semibold hover:bg-[#f5f5f7] border border-brand-black/5 transition-colors">
                 See How It Works
               </button>
            </div>
          </div>

          {/* Right Block */}
          <div className="bg-white rounded-[2rem] relative h-[400px] lg:h-full overflow-hidden">
             <img src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full h-full object-cover" alt="Communities" />
             
             {/* Floating elements matching reference */}
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-2 flex items-center gap-3 shadow-lg max-w-[220px]">
                <div className="w-10 h-10 rounded-lg bg-[#ebfaef] flex items-center justify-center">
                    <Building className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-[10px] font-semibold leading-tight pr-2">Residential & Real Estate</p>
             </div>
             
             <div className="absolute bottom-6 right-6 bg-brand-black/80 backdrop-blur-md text-white rounded-xl p-4 max-w-[220px] text-xs leading-relaxed hidden sm:block">
               Creating environments where people naturally discover shared interests and form lasting bonds.
             </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
           <div className="lg:col-span-5 sticky top-32">
             <div className="w-16 h-16 bg-[#ebfaef] rounded-2xl flex items-center justify-center mb-8">
               <Building className="w-8 h-8 text-green-600" />
             </div>
             <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black mb-4 leading-tight">
               Residential & Real Estate
             </h2>
             <p className="text-lg text-brand-black/60 font-light mb-8">
               Apartment buildings, co-living, student housing, senior living, mixed-use developments
             </p>
           </div>
           
           <div className="lg:col-span-7 space-y-16">
              {/* How it used */}
              <div>
                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-brand-black text-white text-xs flex items-center justify-center">1</span>
                   How Knod is used
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">Property team sets up a Knod space for the building or for recurring events—for example, "Resident Social", "Dog Owners in Building A"</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">QR codes go in elevators, lobbies, mail rooms, and resident portals</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">Residents tap a link, choose what they're looking for—gym partner, dog walk buddies, language exchange, game night—and see a short list of neighbors to connect with</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">They send a Knod, share a hint, and then meet in the lobby, rooftop, or common space</p>
                    </li>
                 </ul>
              </div>

              {/* Benefits */}
              <div>
                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-brand-black text-white text-xs flex items-center justify-center">2</span>
                   Benefits
                 </h3>
                 <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10">
                   <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#1AEB7E] mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Increases sense of community and belonging in the building</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#1AEB7E] mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Turns amenities and events into real relationships, not just free pizza nights</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#1AEB7E] mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Differentiates the property in leasing conversations as "the building where people actually know each other"</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#1AEB7E] mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Reduces churn risk—residents with real connections are harder to lose</p>
                      </li>
                   </ul>
                 </div>
              </div>

              {/* Example Story */}
              <div>
                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-brand-black text-white text-xs flex items-center justify-center">3</span>
                   Example Story
                 </h3>
                 <div className="border border-brand-black/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#ebfaef] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                   <p className="text-brand-black/80 leading-relaxed font-light text-lg">
                     A 300-unit building runs "Wednesday Knod Night" twice a month. Over time they see clusters form—remote workers who co-work in the lounge, dog owners who do group walks, new residents who report meeting at least two neighbors in their first month. The property team uses these insights to design better events and can show ownership that community is a real asset, not just a tagline.
                   </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Third Spaces & Hospitality Section */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
           <div className="lg:col-span-5 sticky top-32">
             <div className="w-16 h-16 bg-[#fff6e5] rounded-2xl flex items-center justify-center mb-8">
               <Wine className="w-8 h-8 text-amber-500" />
             </div>
             <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black mb-4 leading-tight">
               Third Spaces & Hospitality
             </h2>
             <p className="text-lg text-brand-black/60 font-light mb-8">
               Bars, coffee shops, restaurants, coworking spaces, social clubs, gyms
             </p>
           </div>
           
           <div className="lg:col-span-7 space-y-16">
              {/* How it used */}
              <div>
                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-brand-black text-white text-xs flex items-center justify-center">1</span>
                   How Knod is used
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">Venue prints a QR code on table tents, menus, or posters with a simple call to action: "Find your people tonight"</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">Guests open Knod in the browser, say what they're open to—"Meet another solo traveler", "Find a co-founder", "Talk about films", "Meet a gym buddy"</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      <p className="text-brand-black/70 leading-relaxed font-light">Knod quietly matches people in the same space—they can exchange a couple of messages then decide to talk in person</p>
                    </li>
                 </ul>
              </div>

              {/* Benefits */}
              <div>
                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-brand-black text-white text-xs flex items-center justify-center">2</span>
                   Benefits
                 </h3>
                 <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10">
                   <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">People stay longer and spend more because the space helped them meet someone interesting</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Regular "Knod nights" become a repeatable event format without extra staff</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Coworking spaces and clubs can run themed sessions: "Founders Monday", "Designers Thursday", "New members social"</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <p className="text-brand-black leading-relaxed font-medium">Venues get simple insights—what people are coming for, which themes drive repeat visits</p>
                      </li>
                   </ul>
                 </div>
              </div>

              {/* Example Story */}
              <div>
                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-brand-black text-white text-xs flex items-center justify-center">3</span>
                   Example Story
                 </h3>
                 <div className="border border-brand-black/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff6e5] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                   <p className="text-brand-black/80 leading-relaxed font-light text-lg">
                     A neighborhood bar introduces "Offscreen Thursdays". Guests scan a QR, add what they're into today—"First week in the city", "Startup person", "Here after work, open to chat". Instead of everyone staring at phones, small groups form at the bar. The bar gets a reputation as the place where you can walk in alone and still leave with a couple of new contacts.
                   </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-16">
        <div className="bg-brand-black rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1AEB7E]/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
           
           <div className="relative z-10 w-full md:w-auto">
             <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-sm mb-6 inline-block border border-white/10">
               Connect your community
             </span>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight max-w-xl text-white leading-tight mb-4">
               Ready to turn your space into a connection hub?
             </h2>
             <p className="text-white/60 text-lg max-w-md font-light">
               Start with a free pilot. See what connection infrastructure can do for your community.
             </p>
           </div>
           
           <div className="relative z-10 w-full md:w-auto">
             <button className="bg-white text-brand-black px-10 py-5 rounded-full font-semibold hover:bg-[#1AEB7E] transition-colors flex items-center justify-center gap-2 whitespace-nowrap md:w-auto w-full shadow-xl shadow-black/20">
               Get Started <ArrowRight className="w-4 h-4" />
             </button>
           </div>
        </div>
      </section>

    </main>
  );
}
