import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const AUDIENCES = [
  {
    title: (
      <>
        Conferences <span className="md:hidden">&amp;</span>
        <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Live Events
      </>
    ),
    desc: "Summits, trade shows, corporate events, festivals.",
    img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Conference",
    href: "/conferences",
  },
  {
    title: (
      <>
        Universities <span className="md:hidden">&amp;</span>
        <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Campuses
      </>
    ),
    desc: "Orientation, new students, career fairs, alumni events.",
    img: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Campus Life",
    href: "/universities",
  },
  {
    title: (
      <>
        Communities <span className="md:hidden">&amp;</span>
        <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Third Spaces
      </>
    ),
    desc: "Apartments, co-living, bars, coffee shops, coworking, gyms.",
    img: "https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Coworking space",
    href: "/communities",
  },
  {
    title: (
      <>
        Enterprise <span className="md:hidden">&amp;</span>
        <span className="hidden md:inline"> &amp; </span>
        <br className="md:hidden" /> Custom
      </>
    ),
    desc: "Corporate offsites, ERGs, multi-building campuses, white-label.",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Corporate",
    href: "/enterprise",
  },
];

export function TargetAudienceSection() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden relative font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-16 flex items-center gap-4 text-brand-blue font-semibold tracking-[0.2em] text-xs">
          <span>04</span>
          <div className="w-12 h-px bg-brand-blue/30" />
          <span>Who Knod Is For</span>
        </div>

        <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-4 relative">
          {AUDIENCES.map((a) => (
            <motion.div
              key={a.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link
                to={a.href}
                aria-label={a.alt}
                className="group relative block bg-[#f4f4f5] md:hover:bg-[#18181b] transition-all duration-500 rounded-[1.25rem] md:rounded-[2rem] p-5 md:px-16 md:py-14 md:hover:-translate-y-1 md:hover:shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-16 w-full h-full cursor-pointer"
              >
                <h2 className="text-[1.6rem] leading-[1.05] sm:text-3xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-sans font-medium tracking-tight text-brand-black md:group-hover:text-white transition-colors duration-500 md:-mt-2 z-10 pr-6 md:pr-0">
                  {a.title}
                </h2>
                <p className="font-sans text-[11px] leading-snug sm:text-sm md:tracking-[0.15em] text-brand-black/55 md:group-hover:text-[#a1a1aa] transition-colors duration-500 md:max-w-[280px] z-10 md:text-right">
                  {a.desc}
                </p>
                {/* Click affordance arrow */}
                <span className="absolute top-4 right-4 md:top-8 md:right-8 text-brand-black/30 md:text-white md:opacity-0 md:group-hover:opacity-100 md:-translate-x-1 md:group-hover:translate-x-0 transition-all duration-500 z-30">
                  <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7" />
                </span>
                {/* Hover Image */}
                <div className="hidden md:block absolute right-[5%] md:right-[18%] top-1/2 -translate-y-1/2 w-[240px] h-[320px] rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-20 shadow-2xl origin-center">
                  <img
                    src={a.img}
                    alt={a.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
