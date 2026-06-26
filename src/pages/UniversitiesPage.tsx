import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Users, Calendar, Award } from "lucide-react";

export function UniversitiesPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-white">
      {/* Hero Dual Section */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px]">
          {/* Left Block */}
          <div className="bg-[#f5f5f7] rounded-[2rem] p-10 lg:p-16 flex flex-col justify-center h-full relative overflow-hidden">
            <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              For Universities & Campuses
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
              Build <span className="underline decoration-brand-blue/30 underline-offset-4">belonging</span> from day one.
            </h1>
            <p className="text-lg text-brand-black/70 max-w-md mb-10 leading-relaxed font-light">
              Orientation, international students, career fairs, alumni events. Help students find their people and build connections that matter.
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
             <img src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full h-full object-cover" alt="Universities and Campuses" />
             
             {/* Floating elements */}
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-2 flex items-center gap-3 shadow-lg max-w-[220px]">
                <div className="w-10 h-10 rounded-lg bg-[#ebfaef] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-[10px] font-semibold leading-tight pr-2">Student Connections</p>
             </div>
             
             <div className="absolute bottom-6 right-6 bg-brand-black/80 backdrop-blur-md text-white rounded-xl p-4 max-w-[220px] text-xs leading-relaxed hidden sm:block">
               Creating environments where students naturally discover shared interests and form lasting bonds.
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
                     Orientation staff use Knod to help new and international students find people with shared interests and backgrounds
                   </p>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex gap-6">
                <span className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold shrink-0">2</span>
                <div>
                   <p className="text-brand-black/80 leading-relaxed font-medium text-lg">
                     Career services enable matching around industries, roles, and target companies at fairs and networking events
                   </p>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex gap-6">
                <span className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold shrink-0">3</span>
                <div>
                   <p className="text-brand-black/80 leading-relaxed font-medium text-lg">
                     Student organizations run Knod during events so new members can quickly find people they vibe with
                   </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Perfect for every campus moment */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black mb-6">
            Perfect for every campus moment
          </h2>
          <p className="text-lg text-brand-black/60 font-light">
            From first-year orientation to alumni reunions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
           <div className="bg-[#f5f5f7] border border-black/5 rounded-[2rem] p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black">Orientation</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Help new students find their tribe before classes even start
             </p>
           </div>
           
           <div className="bg-[#f5f5f7] border border-black/5 rounded-[2rem] p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black">International Students</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Connect international students with peers who share their background or interests
             </p>
           </div>

           <div className="bg-[#f5f5f7] border border-black/5 rounded-[2rem] p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black">Career Fairs</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Pre-match students with relevant employers and peers focused on similar industries
             </p>
           </div>

           <div className="bg-[#f5f5f7] border border-black/5 rounded-[2rem] p-10">
             <h3 className="text-2xl font-semibold mb-4 text-brand-black">Alumni Events</h3>
             <p className="text-brand-black/70 font-light leading-relaxed">
               Create meaningful reunions with smart attendee matching
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
                     Why universities choose Knod
                   </h3>
                   <div className="bg-white rounded-[2rem] border border-brand-black/5 p-8 md:p-10 shadow-sm">
                     <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">Stronger belonging in the first weeks of school</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">More efficient networking at high-stakes events like career fairs or admitted student days</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                          <p className="text-brand-black leading-relaxed font-medium">Data on what students are looking for—internships, co-founders, research, creative projects—which can feed programming</p>
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
                       An engineering school runs Knod at their career fair. Students mark "AI", "Sustainability", "Fintech", "Looking for internship" and quickly see peers plus alumni focused on the same topics. Instead of shallow card collecting, students form small groups, walk the fair together, and report more useful conversations with both employers and peers.
                     </p>
                   </div>
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
               Empower your students
             </span>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight max-w-xl text-white leading-tight mb-4">
               Ready to transform your campus?
             </h2>
             <p className="text-white/60 text-lg max-w-md font-light">
               Start with a free pilot. See what connection infrastructure can do for your students.
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
