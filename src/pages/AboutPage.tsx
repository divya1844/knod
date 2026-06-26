import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import aboutHeroImg from '../assets/images/about_hero_infra_1780939620369.png';
import aboutProblemImg from '../assets/images/about_problem_1780939632807.png';
import aboutJoinImg from '../assets/images/about_join_1780939652490.png';

export function AboutPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-white">
      {/* 1. Hero Dual Section */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px]">
          {/* Left Block */}
          <div className="bg-[#f5f5f7] rounded-[2rem] p-10 lg:p-16 flex flex-col justify-center h-full relative overflow-hidden">
            <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Knod Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
              Building Connection <br className="hidden lg:block"/> Infrastructure for <br className="hidden lg:block"/> <span className="underline decoration-brand-blue/30 underline-offset-4">Physical Spaces.</span>
            </h1>
            <p className="text-lg text-brand-black/70 max-w-md mb-10">
              We believe human connection is infrastructure. Just like WiFi. Just like electricity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
               <button className="bg-brand-black text-white px-6 py-3.5 rounded-full font-medium hover:bg-black/80 transition-colors flex items-center justify-center gap-2 text-sm">
                 Subscribe <ArrowRight className="w-4 h-4" />
               </button>
               <div className="flex items-center -space-x-2 pl-4">
                  <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" className="w-10 h-10 rounded-full border-2 border-[#f5f5f7] object-cover" />
                  <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=100" className="w-10 h-10 rounded-full border-2 border-[#f5f5f7] object-cover" />
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 border-2 border-[#f5f5f7] flex items-center justify-center text-brand-blue text-xs font-bold shrink-0">
                    +1.5k
                  </div>
               </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="bg-white rounded-[2rem] relative h-[400px] lg:h-full overflow-hidden">
             <img src={aboutHeroImg} className="w-full h-full object-cover" alt="Hero" />
             
             {/* Floating elements matching reference */}
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-2 flex items-center gap-3 shadow-lg max-w-[200px]">
                <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100" className="w-10 h-10 rounded-lg object-cover" />
                <p className="text-[10px] font-semibold leading-tight pr-2">Connecting physical spaces</p>
             </div>
             
             <div className="absolute bottom-6 right-6 bg-brand-black/80 backdrop-blur-md text-white rounded-xl p-4 max-w-[220px] text-xs leading-relaxed hidden sm:block">
               We are an organization dedicated to making human connections happen seamlessly.
             </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Pill Shapes */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto text-center mb-24 md:mb-32">
         <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
           Let's Make Our World <br className="hidden sm:block"/> Better Connected!
         </h2>
         <p className="text-brand-black/60 max-w-xl mx-auto text-sm md:text-base mb-8">
           Turn every physical space into a connection-enabled environment. Starting with events and communities where connections matter most. Expanding to every space where people gather with intention.
         </p>
         <div className="flex items-center justify-center gap-4 mb-16">
            <button className="border border-brand-black/10 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-black/5 transition-colors">
              View Vision <ArrowRight className="w-4 h-4 inline ml-1" />
            </button>
         </div>

         {/* The 4 pill shapes like "We" "[image]" "->" "Nature" */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 h-auto md:h-32">
            <div className="w-full md:w-auto md:px-12 h-24 md:h-full bg-[#f5f5f7] rounded-[2rem] md:rounded-full flex items-center justify-center shrink-0">
               <span className="text-3xl md:text-4xl font-medium px-8 text-brand-black">Measure</span>
            </div>
            <div className="w-full md:w-[200px] h-24 md:h-full rounded-[2rem] md:rounded-full overflow-hidden relative shrink-0">
               <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" />
               <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/20">
                 <span className="text-white text-3xl md:text-4xl font-medium tracking-tight">Invest</span>
               </div>
            </div>
            <div className="w-full md:w-32 h-24 md:h-full bg-[#38b6ff] rounded-[2rem] md:rounded-full flex items-center justify-center shrink-0">
               <ArrowRight strokeWidth={1.5} className="w-12 h-12 text-white" />
            </div>
            <div className="w-full md:w-[250px] h-24 md:h-full rounded-[2rem] md:rounded-full overflow-hidden relative shrink-0">
               <img src={aboutProblemImg} className="w-full h-full object-cover" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                 <span className="text-white text-3xl md:text-4xl font-medium tracking-tight">Build</span>
               </div>
            </div>
         </div>
      </section>

      {/* 3. The Problem We're Solving (Table Layout) */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-28 md:mb-36">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-brand-black/10">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-black">
            The Problem We're Solving
          </h2>
          <p className="text-brand-black/50 text-sm hidden sm:block text-right max-w-[200px]">
            Find out what issues we are tackling to improve connection.
          </p>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {/* Header Row */}
          <div className="grid grid-cols-12 text-xs text-brand-black/40 uppercase tracking-widest font-semibold pb-4">
             <div className="col-span-12 sm:col-span-4">Title</div>
             <div className="col-span-12 sm:col-span-6 hidden sm:block">Description</div>
             <div className="col-span-12 sm:col-span-2 hidden sm:block text-right">Action</div>
          </div>
          
          <div className="border-t border-brand-black/5" />

          {/* Row 1 */}
          <div className="grid grid-cols-12 py-6 items-center group relative cursor-pointer border-b border-brand-black/5 hover:bg-brand-black/[0.02] transition-colors -mx-4 px-4 rounded-xl">
             <div className="col-span-12 sm:col-span-4 pr-4">
                <h3 className="text-lg font-medium tracking-tight">The Disconnection</h3>
             </div>
             <div className="col-span-12 sm:col-span-6 flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                <span className="px-3 py-1 bg-[#f5f5f7] rounded-full text-xs font-medium text-brand-black/60 truncate max-w-full">Scrolling</span>
                <span className="px-3 py-1 bg-[#fff6e5] rounded-full text-xs font-medium text-brand-black/70 truncate max-w-full">Distractions</span>
             </div>
             <div className="col-span-12 sm:col-span-2 flex justify-end mt-4 sm:mt-0">
               <div className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
               </div>
             </div>
             {/* Hover Floating Image (Optional flair) */}
             <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[160px] h-[100px] rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-xl z-20 scale-95 group-hover:scale-100 hidden lg:block">
                <img src={aboutProblemImg} className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 py-6 items-center group relative cursor-pointer border-b border-brand-black/5 hover:bg-brand-black/[0.02] transition-colors -mx-4 px-4 rounded-xl">
             <div className="col-span-12 sm:col-span-4 pr-4">
                <h3 className="text-lg font-medium tracking-tight">The Proximity Gap</h3>
             </div>
             <div className="col-span-12 sm:col-span-6 flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                <span className="px-3 py-1 bg-[#ebfaef] rounded-full text-xs font-medium text-brand-black/70 truncate max-w-full">Missed chances</span>
             </div>
             <div className="col-span-12 sm:col-span-2 flex justify-end mt-4 sm:mt-0">
               <div className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
               </div>
             </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 py-6 items-center group relative cursor-pointer border-b border-brand-black/5 hover:bg-brand-black/[0.02] transition-colors -mx-4 px-4 rounded-xl">
             <div className="col-span-12 sm:col-span-4 pr-4">
                <h3 className="text-lg font-medium tracking-tight">The Opportunity</h3>
             </div>
             <div className="col-span-12 sm:col-span-6 flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                <span className="px-3 py-1 bg-[#f5f5f7] rounded-full text-xs font-medium text-brand-black/60 truncate max-w-full">Infrastructure</span>
                <span className="px-3 py-1 bg-[#f0f4f8] rounded-full text-xs font-medium text-brand-blue/70 truncate max-w-full">Investment</span>
             </div>
             <div className="col-span-12 sm:col-span-2 flex justify-end mt-4 sm:mt-0">
               <div className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
               </div>
             </div>
             {/* Hover Floating Image (Optional flair) */}
             <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[160px] h-[100px] rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-xl z-20 scale-95 group-hover:scale-100 hidden lg:block">
                <img src={aboutHeroImg} className="w-full h-full object-cover" />
             </div>
          </div>

        </div>
      </section>

      {/* 4. Join Us (Tall Vertical Cards) */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px] lg:h-[600px]">
          {/* Card 1 */}
          <div className="flex-1 rounded-[2rem] overflow-hidden relative group cursor-pointer h-[400px] md:h-full">
             <img src={aboutJoinImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
             
             <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1AEB7E]" />
                <span className="text-white text-xs font-medium uppercase tracking-wider">Hosts & Spaces</span>
             </div>
             <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
               <ArrowUpRight className="w-5 h-5 text-white" />
             </div>

             <div className="absolute bottom-8 left-6 right-6">
               <h3 className="text-white text-2xl lg:text-3xl font-medium tracking-tight mb-2 leading-tight">Universities & Venues</h3>
               <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">Ready to pilot and transform spaces into connection engines.</p>
               <button className="w-full bg-white text-brand-black py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#1AEB7E] transition-colors">
                  Explore Pilot <ArrowRight className="w-4 h-4" />
               </button>
             </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 rounded-[2rem] overflow-hidden relative group cursor-pointer h-[400px] md:h-full">
             <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
             
             <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#38b6ff]" />
                <span className="text-white text-xs font-medium uppercase tracking-wider">Investors</span>
             </div>
             <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
               <ArrowUpRight className="w-5 h-5 text-white" />
             </div>

             <div className="absolute bottom-8 left-6 right-6">
               <h3 className="text-white text-2xl lg:text-3xl font-medium tracking-tight mb-2 leading-tight">Forward-Thinkers</h3>
               <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">Who believe connection is the next phase of critical infrastructure.</p>
               <button className="w-full bg-white text-brand-black py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#38b6ff] hover:text-white transition-colors">
                  Explore Thesis <ArrowRight className="w-4 h-4" />
               </button>
             </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 rounded-[2rem] overflow-hidden relative group cursor-pointer h-[400px] md:h-full">
             <img src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
             
             <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffB347]" />
                <span className="text-white text-xs font-medium uppercase tracking-wider">Researchers</span>
             </div>
             <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
               <ArrowUpRight className="w-5 h-5 text-white" />
             </div>

             <div className="absolute bottom-8 left-6 right-6">
               <h3 className="text-white text-2xl lg:text-3xl font-medium tracking-tight mb-2 leading-tight">Technologists</h3>
               <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">Studying human interactions, AI, and the future of community.</p>
               <button className="w-full bg-white text-brand-black py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#ffB347] hover:text-white transition-colors">
                  Explore Studies <ArrowRight className="w-4 h-4" />
               </button>
             </div>
          </div>

        </div>
      </section>

      {/* 5. CTA Footer Block */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-16">
        <div className="bg-[#f5f5f7] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div>
             <span className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold tracking-wider uppercase text-brand-black/60 shadow-sm mb-6 inline-block">
               Get in touch
             </span>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight max-w-xl text-brand-black leading-tight">
               Subscribe to get the latest updates on missions and initiatives.
             </h2>
           </div>
           
           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
             <input type="email" placeholder="Email address..." className="px-6 py-4 outline-none rounded-full bg-white border border-brand-black/5 focus:border-brand-blue min-w-[280px]" />
             <button className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#111] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
               Subscribe <ArrowRight className="w-4 h-4" />
             </button>
           </div>
        </div>
      </section>

    </main>
  );
}

