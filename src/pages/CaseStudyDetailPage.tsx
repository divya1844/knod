import { useState } from "react";
import { motion } from "motion/react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, QrCode, Award } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { BookDemoModal } from "../components/BookDemoModal";
import { CaseImage } from "../components/CaseImage";
import { getCaseStudy, type Stat } from "../lib/caseStudies";

const sectionLabel =
  "text-xs font-semibold tracking-wider uppercase text-brand-blue mb-3 flex items-center gap-2";

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

function initialsOf(name: string) {
  return name
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hooks must run before any early return; SEO falls back gracefully for unknown slugs.
  useSEO({
    title: study ? `${study.client}, Case Study | Knod` : "Case Study | Knod",
    description: study ? `${study.client}: ${study.hook}` : "Knod case studies from real rooms.",
    type: "article",
  });

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const Icon = study.icon;

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Header */}
      <section className="px-6 max-w-[900px] mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/case-studies"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-brand-black/60 hover:text-brand-blue transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <span className="flex w-fit items-center gap-2 px-4 py-1.5 bg-white rounded-full text-[10px] sm:text-xs font-semibold text-brand-black/60 uppercase tracking-wider border border-brand-black/5 mb-5 max-w-full">
            <Icon className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            {study.type}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight leading-[1.1] mb-4 text-brand-black">
            {study.client}
          </h1>
          <p className="text-lg md:text-xl text-brand-blue font-medium leading-snug max-w-3xl">
            {study.headline}
          </p>
          <div className="flex items-center gap-2 text-sm text-brand-black/50 mt-5">
            <MapPin className="w-4 h-4 shrink-0" />
            {study.meta.venue} · {study.meta.date}
          </div>
        </motion.div>
      </section>

      {/* Hero image */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden bg-brand-black/5 shadow-sm"
        >
          <CaseImage
            src={study.hero.src}
            alt={study.hero.alt}
            client={study.client}
            meta={study.meta}
            className="w-full h-full"
          />
        </motion.div>
      </section>

      {/* Narrative */}
      <section className="px-6 max-w-[800px] mx-auto mb-14">
        <div className="space-y-8">
          {study.sections.map((s) => (
            <div key={s.label}>
              <p className={sectionLabel}>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {s.label}
              </p>
              <p className="text-brand-black/75 leading-relaxed text-base sm:text-lg font-light">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How check-in / matching worked */}
      {study.checkin && (
        <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-14">
          <div className="bg-white rounded-[1.5rem] p-6 sm:p-9 border border-brand-black/5 shadow-sm">
            <p className={sectionLabel}>
              <QrCode className="w-4 h-4 text-brand-blue" />
              {study.checkin.label}
            </p>
            <p className="text-brand-black/75 leading-relaxed text-base sm:text-lg font-light max-w-3xl">
              {study.checkin.text}
            </p>
            {study.checkin.questions && study.checkin.questions.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-brand-black/40 mb-3">
                  Prompts attendees answered
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.checkin.questions.map((q) => (
                    <li
                      key={q}
                      className="bg-[#f5f5f7] rounded-xl px-4 py-3 text-sm text-brand-black/70 leading-snug"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Results */}
      {study.stats && (
        <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-14">
          <p className={`${sectionLabel} px-2`}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            The result
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {study.stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </section>
      )}

      {/* Quotes */}
      {study.quotes.length > 0 && (
        <section className="px-6 max-w-[900px] mx-auto mb-14">
          <div className="grid grid-cols-1 gap-5">
            {study.quotes.map((q) => (
              <figure
                key={q.author}
                className="bg-white rounded-[1.5rem] p-7 sm:p-9 border border-brand-black/5 shadow-sm"
              >
                <blockquote className="text-lg sm:text-xl italic text-brand-black/80 font-medium leading-relaxed mb-5">
                  "{q.text}"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-[12px] bg-brand-blue/5 border border-brand-black/5 flex items-center justify-center text-brand-blue font-bold text-sm shrink-0">
                    {initialsOf(q.author)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-black tracking-wide">
                      {q.author}
                    </span>
                    <span className="text-xs text-brand-black/50">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Photo gallery */}
      {study.gallery.length > 0 && (
        <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {study.gallery.map((img) => (
              <figure key={img.src} className="flex flex-col">
                <div
                  className={`aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden shadow-sm ${
                    img.contain ? "bg-[#eef2ff] p-3" : "bg-brand-black/5"
                  }`}
                >
                  <CaseImage
                    src={img.src}
                    alt={img.alt}
                    client={study.client}
                    meta={study.meta}
                    contain={img.contain}
                    className={img.contain ? "w-full h-full rounded-lg" : "w-full h-full"}
                  />
                </div>
                {img.caption && (
                  <figcaption className="text-sm text-brand-black/50 font-light mt-3 px-1 leading-relaxed">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Sponsor / partnership callout */}
      {study.partner && (
        <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-14">
          <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 border border-brand-black/5 shadow-sm flex flex-col md:flex-row gap-6 md:items-center">
            <div className="md:w-1/2">
              <p className={sectionLabel}>
                <Award className="w-4 h-4 text-brand-blue" />
                {study.partner.label}
              </p>
              <p className="text-brand-black/75 leading-relaxed text-base font-light">
                {study.partner.text}
              </p>
            </div>
            {study.partner.image && (
              <figure className="md:w-1/2">
                <div className="w-full rounded-[1.25rem] overflow-hidden border border-brand-black/5 bg-[#f5f5f7]">
                  <CaseImage
                    src={study.partner.image.src}
                    alt={study.partner.image.alt}
                    client={study.client}
                    className="w-full h-auto"
                  />
                </div>
                {study.partner.image.caption && (
                  <figcaption className="text-xs text-brand-black/50 font-light mt-2 px-1">
                    {study.partner.image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </section>
      )}

      {/* Closer */}
      <section className="px-6 max-w-[800px] mx-auto mb-14">
        <p className="text-xl sm:text-2xl font-light text-brand-black/80 leading-relaxed border-l-2 border-brand-blue/30 pl-6">
          {study.closer}
        </p>
      </section>

      {/* CTA */}
      <section className="px-4 lg:px-8 max-w-[1000px] mx-auto mb-16">
        <div className="bg-[#111112] text-white rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/40 blur-[100px]" />
          </div>
          <div className="relative z-10 md:w-[65%]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.15] mb-3">
              Want a room like this?
            </h2>
            <p className="text-white/60 font-light">
              See what Knod would do at your next event, class, or gathering.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1AEB7E] text-brand-black px-8 py-4 sm:px-10 sm:py-5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#1AEB7E]/90 transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-[#1AEB7E]/20 cursor-pointer"
            >
              Book a Demo{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <BookDemoModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
