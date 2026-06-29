function BentoTestimonial({
  quote,
  author,
  role,
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
  bgClass?: string;
  textClass?: string;
  subTextClass?: string;
  borderClass?: string;
  iconBgClass?: string;
  iconTextClass?: string;
  pillBgClass?: string;
  pillTextClass?: string;
}) {
  const initials = author
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`backdrop-blur-3xl rounded-[2rem] flex flex-col justify-between border ${borderClass} ${bgClass} shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative p-6 lg:p-8 group hover:-translate-y-2 transition-transform duration-500`}>
      <p className={`font-light leading-relaxed text-[15px] sm:text-base mb-6 ${textClass}`}>
        "{quote}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className={`w-10 h-10 shrink-0 rounded-[12px] ${iconBgClass} border border-brand-black/5 shadow-sm flex items-center justify-center overflow-hidden text-brand-blue font-bold text-sm bg-brand-blue/5`}>
          {initials}
        </div>
        <div className="flex flex-col">
          <span className={`font-sans text-sm tracking-[0.1em] font-semibold ${textClass}`}>
            {author}
          </span>
          <span className={`text-[11px] sm:text-xs text-brand-black/60`}>
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsAndResearchSection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 relative z-10 w-full overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
          
          {/* Testimonials Block (Left 2/3 on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full lg:w-2/3">
            {/* Explicit Column 1 */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <BentoTestimonial
                quote="At Chicago Innovation, we are always trying to spark meaningful connections at our monthly events. Knod offers a unique, tech-forward way for our innovation-minded attendees to network that's fun, frictionless, and outcomes-focused."
                author="Paul Kitti"
                role="Vice President, Marketing & Events, Chicago Innovation"
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
                quote="I knew who to walk up to and what to talk about. It made the whole experience feel easy for a socially anxious person."
                author="Melat Zeru"
                role="Student, Illinois Tech"
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
                quote="Getting started with Knod was smooth and intuitive. Mint handled the setup for my event, and it truly elevated the way guests mingled and met each other."
                author="Kaya Jones"
                role="Event Organizer, Forever 22"
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
                quote="I had a chance to participate in an early app trial - super awesome! I actually met someone very relevant through it."
                author="Elina (Kasman) Cooley"
                role="Founder, Azenity Consulting"
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

            {/* Explicit Column 2 */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <BentoTestimonial
                quote="It was such a fun and easy way to connect with new people and discover shared interests at a big event. I met several attendees with similar interests, and the conversations flowed naturally. Overall, it was an excellent networking experience!"
                author="Noelle Rotte"
                role="MBA"
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
                quote="Using Knod at Chicago Innovation was phenomenal. The matching was surprisingly accurate we were paired with attendees who aligned closely with our interests, and the conversations felt natural and high-level. It made networking intentional and genuinely valuable."
                author="Rylee Johnson"
                role="MainStreet Investment Advisors, LLC"
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
                quote="Knod made me realize that despite being an introvert I do enjoy talking to people. Thank you for developing this!"
                author="UIC Business Student"
                role="UIC Business"
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
          </div>

          {/* Research Stats Block (Right 1/3 on Desktop) */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/3">
            {/* Research Header Card */}
            <div className="bg-[#ff4d00] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
              <h3 className="font-sans text-[2rem] sm:text-[2.5rem] text-white mb-4 tracking-tight leading-tight">
                Validated by Research
              </h3>
              <p className="text-white font-light text-[15px] sm:text-base leading-relaxed">
                In a controlled experiment at the University of Illinois Chicago:
              </p>
            </div>

            {/* Stat 1 */}
            <div className="bg-[#0033ff] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
              <span className="text-[5rem] sm:text-[6rem] font-medium leading-none tracking-tight text-white mb-4">
                12<span className="text-[3.5rem] sm:text-[4.5rem]">x</span>
              </span>
              <p className="font-sans text-sm tracking-[0.15em] font-semibold text-white mb-4 leading-relaxed">
                More Connections
              </p>
              <p className="text-white/80 text-[13px] font-light leading-relaxed max-w-[260px]">
                with Knod than manual networking (12 meaningful matches in 3 minutes vs. 1 match in 3 minutes)
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
              <p className="font-sans text-xs sm:text-sm tracking-[0.15em] font-semibold text-white mb-4 leading-relaxed">
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
