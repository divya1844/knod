const PARTNERS = [
  { name: "Chicago Innovation", logo: "/trusted_partner_logos/chicago-innovation.png", darkCard: true },
  { name: "UIC Business" }, // No logo available
  { name: "Stuart School of Business", logo: "/trusted_partner_logos/stuart-school-of-business.png" },
  { name: "Forever 22", logo: "/trusted_partner_logos/forever-22.png" },
  { name: "2389 Research, Inc.", logo: "/trusted_partner_logos/2389.png" },
  { name: "JAMA" }, // No logo available
  { name: "Elevate" }, // No logo available
  { name: "WAGU", logo: "/trusted_partner_logos/wagu.png", darkCard: true },
  { name: "KNUST Law Faculty", logo: "/trusted_partner_logos/knust.png" }
];

export function TrustedPartnersSection() {
  return (
    <section className="pb-6 relative overflow-hidden flex flex-col w-full">
      <h3 className="text-center text-sm font-semibold tracking-widest text-brand-black/40 mb-8">
        Trusted Partners
      </h3>
      
      {/* Absolute Gradient Fade Masks */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />

      {/* Marquee Wrapper */}
      <div className="overflow-hidden w-full flex">
        {/* The Animated Track */}
        <div className="flex w-max animate-logo-marquee motion-reduce:animate-none">
          {/* Block 1 */}
          <div className="flex shrink-0 px-4 gap-x-6 md:gap-x-8">
            {PARTNERS.map((partner, idx) => (
              <div
                key={`a-${partner.name}-${idx}`}
                className={`flex items-center justify-center w-[130px] h-[44px] md:w-[170px] md:h-[52px] shrink-0 border shadow-sm rounded-xl px-3 md:px-4 transition-transform duration-300 hover:scale-105 ${
                  partner.darkCard 
                    ? "bg-[#111112] border-white/10" 
                    : "bg-white border-brand-black/5"
                }`}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-auto h-auto max-w-full max-h-[26px] md:max-h-[34px] object-contain transition-all duration-300"
                  />
                ) : (
                  <span className="text-brand-black/50 text-[11px] md:text-[13px] font-bold uppercase tracking-widest text-center leading-tight select-none">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Block 2 (Exact Duplicate for Loop) */}
          <div className="flex shrink-0 px-4 gap-x-6 md:gap-x-8" aria-hidden="true">
            {PARTNERS.map((partner, idx) => (
              <div
                key={`b-${partner.name}-${idx}`}
                className={`flex items-center justify-center w-[130px] h-[44px] md:w-[170px] md:h-[52px] shrink-0 border shadow-sm rounded-xl px-3 md:px-4 transition-transform duration-300 hover:scale-105 ${
                  partner.darkCard 
                    ? "bg-[#111112] border-white/10" 
                    : "bg-white border-brand-black/5"
                }`}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-auto h-auto max-w-full max-h-[26px] md:max-h-[34px] object-contain transition-all duration-300"
                  />
                ) : (
                  <span className="text-brand-black/50 text-[11px] md:text-[13px] font-bold uppercase tracking-widest text-center leading-tight select-none">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
