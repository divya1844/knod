import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Building2, Code2, FileText, MapPin } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useDemoModal } from "../contexts/DemoModalContext";

const AGGREGATE = [
  { value: "1,700+", label: "Attendees across live events" },
  { value: "500+", label: "Mutual connections confirmed in person" },
  { value: "94%", label: "Of responded intros are accepted" },
  { value: "4.6", suffix: "/5", label: "Average event rating" },
];

const DEFINITIONS = [
  { term: "Nod", def: "One person signaling they want to meet someone." },
  { term: "Mutual connection", def: "Both people nod: the moment an introduction actually happens." },
  { term: "Match rate", def: "Mutual connections divided by the nods exchanged at that event." },
];

type Stat = { value: string; label: string };

const CASE_STUDIES = [
  {
    n: "01",
    icon: GraduationCap,
    type: "Controlled university study",
    client: "University of Illinois Chicago",
    headline:
      "A controlled study measured a 12x jump in connections. Then a professor ran it again across three classes.",
    sections: [
      {
        label: "The setup",
        text: "In a networking and social computing course at UIC, researchers ran a controlled experiment with 41 undergraduate business students on October 31, 2025. In a room of just 41 people there are 820 possible introductions to evaluate, impossible to do well by walking around and hoping. Students ran two rounds of three minutes each: first networking the traditional way, then using Knod.",
      },
    ],
    comparison: {
      before: { label: "Traditional networking", value: "1", unit: "match", rate: "4.9% success rate" },
      after: { label: "With Knod", value: "12", unit: "matches", rate: "58.5% success rate" },
      badge: "12x",
      badgeLabel: "improvement in the same room, same three minutes",
    },
    perception: {
      label: "The perception shift",
      stats: [
        { value: "65.2%", label: "said AI makes networking more meaningful" },
        { value: "91.3%", label: "were open to AI-assisted connection" },
      ] as Stat[],
    },
    encore: {
      label: "The encore",
      text: "A single study is a data point. What happened next is the proof. On March 20, 2026, Dr. Alvin Chin ran Knod again across three of his IDS classes at UIC. The results held up at scale.",
      stats: [
        { value: "82", label: "Students across three sections" },
        { value: "245", label: "Nods exchanged" },
        { value: "145", label: "Mutual connections confirmed" },
        { value: "~59%", label: "Match rate · 4.3–5.0 section ratings" },
      ] as Stat[],
    },
    quote: {
      text: "It was fun meeting new people, but at the same time nervous because it's the first time talking to someone new.",
      author: "UIC student",
    },
    reference:
      "AI-Powered Connection: Solving the Handshake Problem to Increase Human Connection by 12x. Accepted at HCI International 2026, published by Springer. Link available at publication.",
  },
  {
    n: "02",
    icon: Building2,
    type: "Membership innovation community",
    client: "Chicago Innovation",
    headline: "A membership community whose entire value is the connection between its members.",
    sections: [
      {
        label: "Who they are",
        text: "Chicago Innovation is one of the most recognized innovation communities in the city. Best known for the annual Chicago Innovation Awards, it brings together founders, corporate leaders, investors, students, and civic figures throughout the year. Its work is built on a simple idea: innovation happens when the right people meet.",
      },
      {
        label: "The need",
        text: "A room full of the right people does not guarantee the right introductions. Members arrive, mingle near the people they already know, and leave without meeting the person who could have changed their year. Chicago Innovation wanted its gatherings to actually deliver on the promise of connection.",
      },
    ],
    events: [
      {
        date: "October 8, 2025",
        title: "The Complete Innovator",
        venue: "The Second City",
        stats: [{ value: "89", label: "Attendees on Knod" }] as Stat[],
      },
      {
        date: "February 19, 2026",
        title: "The Innovation Forecast: The Next 25 Years",
        venue: "School of the Art Institute of Chicago",
        stats: [
          { value: "60", label: "Attendees" },
          { value: "68", label: "Nods exchanged" },
          { value: "30", label: "Mutual connections" },
          { value: "44%", label: "Match rate" },
        ] as Stat[],
      },
    ],
    closer:
      "The headline is not any single number. It is that they ran it twice. Connections that would have taken hours of forced small talk, or never happened at all, happened in minutes.",
  },
  {
    n: "03",
    icon: Code2,
    type: "Hackathon · backed by Google DeepMind",
    client: "Vibecoding Hackathon",
    headline: "A technical crowd that needed to find collaborators fast.",
    sections: [
      {
        label: "The setup",
        text: "On March 14, 2026, a Vibecoding Hackathon backed by Google's DeepMind ran at Drive Capital in Chicago. Hackathons live and die on who you team up with, and the best collaborator in the room is usually a stranger you never get around to meeting.",
      },
    ],
    stats: [
      { value: "54", label: "Attendees on Knod" },
      { value: "37", label: "Nods exchanged" },
      { value: "14", label: "Mutual connections confirmed" },
      { value: "38%", label: "Match rate · top rating from attendees" },
    ] as Stat[],
    closer:
      "For a builder, a single introduction can be the difference between a demo and a company. Knod put those introductions in front of people while the room was still full.",
  },
];

function StatCard({ value, label }: Stat & { key?: string | number }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-black/5 shadow-sm flex flex-col justify-center">
      <span className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-black mb-1.5">
        {value}
      </span>
      <span className="text-brand-black/60 font-medium text-xs sm:text-sm leading-snug">{label}</span>
    </div>
  );
}

const sectionLabel =
  "text-xs font-semibold tracking-wider uppercase text-brand-blue mb-3 flex items-center gap-2";

export function CaseStudiesPage() {
  const { openDemo } = useDemoModal();

  useSEO({
    title: "Case Studies & Results | Knod",
    description:
      "Real results from the field: a controlled UIC study measured a 12x jump in connections, backed by live events with Chicago Innovation and a Google DeepMind hackathon.",
  });

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Proof from the field
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Real results,{" "}
            <span className="italic font-light text-brand-blue">real rooms.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-black/60 font-light max-w-2xl mx-auto leading-relaxed">
            Knod has run in real rooms across Chicago, at a public university, a leading innovation
            community, and a hackathon backed by Google's DeepMind. The numbers below come straight
            from Knod's own event data, backed by an independent controlled study accepted for
            publication at HCI International 2026.
          </p>
        </motion.div>
      </section>

      {/* By the numbers */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {AGGREGATE.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-[1.5rem] p-6 sm:p-8 border border-brand-black/5 shadow-sm flex flex-col"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mb-2">
                {stat.value}
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl text-brand-black/30">{stat.suffix}</span>
                )}
              </span>
              <span className="text-brand-black/60 font-medium text-xs sm:text-sm leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Definitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 bg-white rounded-[1.5rem] p-6 sm:p-8 border border-brand-black/5 shadow-sm"
        >
          <p className="text-xs font-semibold tracking-wider uppercase text-brand-black/40 mb-5">
            So every number reads clearly
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {DEFINITIONS.map((d) => (
              <div key={d.term}>
                <p className="font-semibold text-brand-black mb-1.5">{d.term}</p>
                <p className="text-sm text-brand-black/60 leading-relaxed font-light">{d.def}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case studies */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-20 md:mb-24 space-y-8 sm:space-y-12">
        {CASE_STUDIES.map((study) => {
          const Icon = study.icon;
          return (
            <motion.article
              key={study.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-14 border border-brand-black/5 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="px-4 py-1.5 bg-[#f5f5f7] rounded-full text-[10px] sm:text-xs font-semibold text-brand-black/60 uppercase tracking-wider flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-brand-blue" />
                      {study.type}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-black mb-4">
                    {study.client}
                  </h2>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-blue leading-snug max-w-3xl">
                    {study.headline}
                  </h3>
                </div>
                <span className="hidden sm:block text-5xl lg:text-7xl font-medium tracking-tight text-brand-black/10 leading-none shrink-0">
                  {study.n}
                </span>
              </div>

              {/* Narrative sections */}
              <div className="space-y-6 max-w-3xl mb-10">
                {study.sections.map((s) => (
                  <div key={s.label}>
                    <p className={sectionLabel}>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      {s.label}
                    </p>
                    <p className="text-brand-black/70 leading-relaxed text-[15px] sm:text-base">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Comparison (UIC) */}
              {study.comparison && (
                <div className="mb-10">
                  <p className={sectionLabel}>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    The result
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-4">
                    <div className="bg-[#f9f9fb] rounded-2xl p-6 border border-brand-black/5 flex flex-col justify-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-black/50 mb-3">
                        {study.comparison.before.label}
                      </span>
                      <span className="text-4xl sm:text-5xl font-medium tracking-tight text-brand-black/70">
                        {study.comparison.before.value}{" "}
                        <span className="text-lg text-brand-black/40 font-normal">
                          {study.comparison.before.unit}
                        </span>
                      </span>
                      <span className="text-sm text-brand-black/50 mt-2">
                        {study.comparison.before.rate}
                      </span>
                    </div>

                    <div className="flex md:flex-col items-center justify-center gap-2 px-2">
                      <div className="w-12 h-12 rounded-full bg-brand-black text-[#1AEB7E] flex items-center justify-center font-semibold text-sm shrink-0">
                        {study.comparison.badge}
                      </div>
                    </div>

                    <div className="bg-brand-blue/5 rounded-2xl p-6 border border-brand-blue/20 flex flex-col justify-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
                        {study.comparison.after.label}
                      </span>
                      <span className="text-4xl sm:text-5xl font-medium tracking-tight text-brand-black">
                        {study.comparison.after.value}{" "}
                        <span className="text-lg text-brand-black/40 font-normal">
                          {study.comparison.after.unit}
                        </span>
                      </span>
                      <span className="text-sm text-brand-black/50 mt-2">
                        {study.comparison.after.rate}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-brand-black/50 mt-3 text-center md:text-left">
                    A <span className="font-semibold text-brand-black">{study.comparison.badge}</span>{" "}
                    {study.comparison.badgeLabel}.
                  </p>
                </div>
              )}

              {/* Perception (UIC) */}
              {study.perception && (
                <div className="mb-10">
                  <p className={sectionLabel}>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {study.perception.label}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {study.perception.stats.map((s) => (
                      <StatCard key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              )}

              {/* Encore (UIC) */}
              {study.encore && (
                <div className="mb-10 bg-[#f9f9fb] rounded-[1.5rem] p-6 sm:p-8 border border-brand-black/5">
                  <p className={sectionLabel}>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {study.encore.label}
                  </p>
                  <p className="text-brand-black/70 leading-relaxed text-[15px] sm:text-base max-w-3xl mb-6">
                    {study.encore.text}
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {study.encore.stats.map((s) => (
                      <StatCard key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              )}

              {/* Events timeline (Chicago Innovation) */}
              {study.events && (
                <div className="mb-10">
                  <p className={sectionLabel}>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    The result: run twice
                  </p>
                  <div className="space-y-4">
                    {study.events.map((ev) => (
                      <div
                        key={ev.date}
                        className="bg-[#f9f9fb] rounded-2xl p-6 sm:p-8 border border-brand-black/5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                          <div>
                            <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-brand-blue border border-brand-black/5 mb-3">
                              {ev.date}
                            </span>
                            <p className="font-medium text-brand-black text-lg leading-snug">
                              {ev.title}
                            </p>
                          </div>
                          <span className="flex items-center gap-1.5 text-sm text-brand-black/50">
                            <MapPin className="w-4 h-4 shrink-0" />
                            {ev.venue}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                          {ev.stats.map((s) => (
                            <StatCard key={s.label} value={s.value} label={s.label} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats grid (DeepMind) */}
              {study.stats && (
                <div className="mb-10">
                  <p className={sectionLabel}>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    The result
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {study.stats.map((s) => (
                      <StatCard key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              )}

              {/* Quote (UIC) */}
              {study.quote && (
                <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-blue/30 mb-8 max-w-3xl">
                  <p className="text-base sm:text-lg italic text-brand-black/80 font-medium leading-relaxed">
                    "{study.quote.text}"
                  </p>
                  <footer className="text-xs sm:text-sm font-semibold text-brand-black/50 mt-4 tracking-wide uppercase">
                    {study.quote.author}
                  </footer>
                </div>
              )}

              {/* Closer line */}
              {study.closer && (
                <p className="text-brand-black/70 leading-relaxed text-[15px] sm:text-base max-w-3xl">
                  {study.closer}
                </p>
              )}

              {/* Reference (UIC) */}
              {study.reference && (
                <div className="mt-8 pt-6 border-t border-brand-black/5 flex items-start gap-3 max-w-3xl">
                  <FileText className="w-4 h-4 text-brand-black/40 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-brand-black/50 leading-relaxed">
                    <span className="font-semibold text-brand-black/70">Read the study: </span>
                    {study.reference}
                  </p>
                </div>
              )}
            </motion.article>
          );
        })}
      </section>

      {/* Methodology note */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-16">
        <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 border border-brand-black/5 shadow-sm">
          <p className="text-xs font-semibold tracking-wider uppercase text-brand-black/40 mb-3">
            A note on the data
          </p>
          <p className="text-sm text-brand-black/60 leading-relaxed font-light max-w-4xl">
            Every figure here is drawn from Knod's own event records: attendees are counted from
            event participants, connections from confirmed mutual nods, and ratings from post-event
            feedback. The UIC 12x figure comes from an independent controlled study accepted for
            publication at HCI International 2026. Match rate is mutual connections divided by nods
            exchanged. Acceptance rate is accepted intros divided by intros that got a response.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-16">
        <div className="bg-[#111112] text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 text-center md:text-left relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/40 blur-[100px]" />
          </div>

          <div className="relative z-10 text-center md:text-left md:w-[60%] lg:w-[70%]">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-sm mb-6 inline-block">
              Your room could be next
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl text-white leading-[1.1] mb-6">
              Join UIC, Chicago Innovation, and a DeepMind hackathon in turning rooms into
              connections.
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
            <button
              onClick={openDemo}
              className="bg-[#1AEB7E] text-brand-black px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#1AEB7E]/90 transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-[#1AEB7E]/20 cursor-pointer"
            >
              Book a Demo{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
