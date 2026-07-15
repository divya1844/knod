import { motion } from "motion/react";

const AUDIENCES = [
  {
    title: (
      <>
        Conferences <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Live Events
      </>
    ),
    desc: "Summits, trade shows, corporate events, festivals.",
    img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Conference",
  },
  {
    title: (
      <>
        Universities <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Campuses
      </>
    ),
    desc: "Orientation, international students, career fairs, alumni events.",
    img: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Campus Life",
  },
  {
    title: (
      <>
        Communities <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Third Spaces
      </>
    ),
    desc: "Apartments, co-living, bars, coffee shops, coworking, gyms.",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Coworking space",
  },
  {
    title: (
      <>
        Enterprise <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Custom
      </>
    ),
    desc: "Corporate offsites, ERGs, multi-building campuses, white-label.",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Corporate",
  },
];

export function TargetAudienceSection() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden relative font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="mb-16 flex items-center gap-4 text-brand-blue font-semibold tracking-[0.2em] text-xs">
          <span>04</span>
          <div className="w-12 h-px bg-brand-blue/30" />
          <span>Who Knod Is For</span>
        </div>

        <div className="flex flex-col gap-4 relative">
          {AUDIENCES.map((a) => (
            <motion.div
              key={a.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#f4f4f5] md:hover:bg-[#18181b] transition-colors duration-500 rounded-[2rem] p-8 sm:p-10 md:px-16 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 w-full"
            >
              <h2 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-sans font-medium tracking-tight text-brand-black md:group-hover:text-white transition-colors duration-500 md:-mt-2 z-10">
                {a.title}
              </h2>
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-brand-black/60 md:group-hover:text-[#a1a1aa] transition-colors duration-500 max-w-[280px] z-10 md:text-right">
                {a.desc}
              </p>
              {/* Hover Image */}
              <div className="hidden md:block absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 w-[240px] h-[320px] rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-20 shadow-2xl origin-center">
                <img
                  src={a.img}
                  alt={a.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
