function BentoTestimonial({
  quote,
  author,
  role,
  avatarImg,
  bgClass = "bg-white",
  textClass = "text-brand-black",
  subTextClass = "text-brand-black/70",
  borderClass = "border-white",
  iconBgClass = "bg-white",
  iconTextClass = "text-brand-black",
  pillBgClass = "bg-brand-blue/5",
  pillTextClass = "text-brand-blue",
}: {
  quote: string;
  author: string;
  role: string;
  avatarImg: string;
  bgClass?: string;
  textClass?: string;
  subTextClass?: string;
  borderClass?: string;
  iconBgClass?: string;
  iconTextClass?: string;
  pillBgClass?: string;
  pillTextClass?: string;
}) {
  return (
    <div className={`backdrop-blur-3xl rounded-[2rem] flex flex-col items-center justify-between border ${borderClass} ${bgClass} shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative pt-12 pb-8 px-6 sm:px-8 h-full group hover:-translate-y-2 transition-transform duration-500`}>
      <div className="flex-grow flex items-center justify-center">
        <p className={`font-light text-center leading-relaxed text-[15px] sm:text-base mb-8 ${textClass}`}>
          {quote}
        </p>
      </div>

      <div className="w-full relative mt-auto mb-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className={`w-full border-t ${borderClass}`}></div>
        </div>
        <div className="relative flex justify-center">
          <div className={`w-12 h-12 rounded-[14px] ${iconBgClass} border border-white/20 shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
            <img src={avatarImg} alt={author} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className={`font-sans text-sm tracking-[0.15em]  font-semibold ${textClass}`}>
          {author}
        </span>
        <span className={`${pillBgClass} ${pillTextClass} px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-semibold tracking-wider `}>
          {role}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsAndResearchSection() {
  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 relative z-10 w-full overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Testimonials list */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <BentoTestimonial
              quote="The team challenged our assumptions, simplified the story, and shipped a modular networking experience we can actually control. Performance, accessibility, analytics — nothing was an afterthought."
              author="Alex Chen"
              role="Founder, Nova AI"
              avatarImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
              bgClass="bg-white/95"
              textClass="text-brand-black"
              subTextClass="text-brand-black/70"
              borderClass="border-brand-black/5"
              iconBgClass="bg-white"
              iconTextClass="text-brand-black"
              pillBgClass="bg-brand-blue/5"
              pillTextClass="text-brand-blue"
            />
            <BentoTestimonial
              quote="From day one they spoke in outcomes, not features. We got a scalable connection system that measured what mattered. Our community retention is trending upward."
              author="Maya Patel"
              role="Head of Growth"
              avatarImg="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
              bgClass="bg-white/95"
              textClass="text-brand-black"
              subTextClass="text-brand-black/70"
              borderClass="border-brand-black/5"
              iconBgClass="bg-white"
              iconTextClass="text-brand-black"
              pillBgClass="bg-brand-blue/5"
              pillTextClass="text-brand-blue"
            />
          </div>

          {/* Column 2: Testimonials list */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <BentoTestimonial
              quote="Clear process, crisp communication, and zero drama. The live event matches kept us aligned, and post-launch we saw faster networking and a brand narrative our team finally rallies behind."
              author="Leon Müller"
              role="COO, Helix Robotics"
              avatarImg="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
              bgClass="bg-white/95"
              textClass="text-brand-black"
              subTextClass="text-brand-black/70"
              borderClass="border-brand-black/5"
              iconBgClass="bg-white"
              iconTextClass="text-brand-black"
              pillBgClass="bg-brand-blue/5"
              pillTextClass="text-brand-blue"
            />
            <BentoTestimonial
              quote="They brought structure to chaos. The brief became a clear roadmap, the brand finally had a voice, and the check-in loaded fast for every user. We launched on schedule and saw meaningful lift in sign-ups."
              author="Dana Fox"
              role="VP Marketing"
              avatarImg="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
              bgClass="bg-white/95"
              textClass="text-brand-black"
              subTextClass="text-brand-black/70"
              borderClass="border-brand-black/5"
              iconBgClass="bg-white"
              iconTextClass="text-brand-black"
              pillBgClass="bg-brand-blue/5"
              pillTextClass="text-brand-blue"
            />
          </div>

          {/* Column 3: Research & Stats */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Research Header Card */}
            <div className="bg-[#ff4d00] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
              <h3 className="font-sans text-[2rem] sm:text-[2.5rem] text-white mb-4 tracking-tight leading-tight">
                Validated by Research
              </h3>
              <p className="text-white font-light text-[15px] sm:text-base leading-relaxed">
                In a controlled experiment at the University of Illinois
                Chicago:
              </p>
            </div>

            {/* Stat 1 */}
            <div className="bg-[#0033ff] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="text-[5rem] sm:text-[6rem] font-medium leading-none tracking-tight text-white mb-4">
                12<span className="text-[3.5rem] sm:text-[4.5rem]">x</span>
              </span>
              <p className="font-sans text-sm tracking-[0.15em]  font-semibold text-white mb-4 leading-relaxed">
                More Connections
              </p>
              <p className="text-white/80 text-[13px] font-light leading-relaxed max-w-[260px]">
                with Knod than manual networking (12 meaningful matches in 3
                minutes vs. 1 match in 3 minutes)
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#FD3482] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="text-[4rem] sm:text-[5rem] font-medium leading-none tracking-tight text-white mb-4 flex items-start justify-center text-center w-full">
                <span>63.6</span>
                <span className="text-[2.5rem] sm:text-[3.5rem] mt-1 ml-1">
                  %
                </span>
              </span>
              <p className="font-sans text-xs sm:text-sm tracking-[0.15em]  font-semibold text-white mb-4 leading-relaxed">
                Of users say AI makes networking MORE meaningful, not less
              </p>
              <p className="text-white/80 text-[13px] font-light leading-relaxed">
                (Published research, 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
