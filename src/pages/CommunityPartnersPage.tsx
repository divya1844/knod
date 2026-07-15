import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Heart,
  GraduationCap,
  Users,
  Briefcase,
  Rocket,
  HandHeart,
  Sparkles,
  Landmark,
  Store,
} from "lucide-react";

const ORG_TYPES = [
  { label: "Nonprofit organizations", icon: Heart },
  { label: "Student organizations & university clubs", icon: GraduationCap },
  { label: "Community groups", icon: Users },
  { label: "Professional associations", icon: Briefcase },
  { label: "Startup communities", icon: Rocket },
  { label: "Volunteer organizations", icon: HandHeart },
  { label: "Incubators & accelerators", icon: Sparkles },
  { label: "Local chambers of commerce", icon: Landmark },
  { label: "Small-business networking groups", icon: Store },
];

const RECEIVE = [
  "Discounted or free access to the full Knod platform, decided case by case.",
  "Connections that happen before, during, and after every event.",
  "Supported onboarding so you're up and running quickly.",
  "A partnership that grows with your community.",
];

const inputClass =
  "w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/5 focus:bg-white focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45";
const labelClass =
  "block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1";

export function CommunityPartnersPage() {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    email: "",
    orgType: "",
    city: "",
    about: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.organization || !formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-white">
      {/* Hero */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:min-h-[600px]">
          {/* Left Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#f5f5f7] rounded-[2rem] p-10 lg:p-16 flex flex-col justify-center h-full relative overflow-hidden"
          >
            <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-6 flex items-center gap-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              The Community Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight font-medium text-brand-black leading-[1.1] mb-6">
              Every community deserves the tools to help people{" "}
              <span className="italic font-light text-brand-blue">find each other.</span>
            </h1>
            <p className="text-lg text-brand-black/70 max-w-md mb-10 leading-relaxed font-light">
              Knod offers discounted or free access, case by case, to nonprofits, student
              organizations, community groups, and mission-driven initiatives that bring people
              together. If you're creating opportunities for meaningful human connection, we'd love
              to support your work.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
              >
                Apply to Become a Community Partner <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#f5f5f7] rounded-[2rem] relative h-[400px] lg:h-full overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="w-full h-full object-cover"
              alt="A community of volunteers working together"
            />
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-lg max-w-[300px]">
              <div className="w-10 h-10 rounded-xl bg-[#ebfaef] flex items-center justify-center shrink-0">
                <HandHeart className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs font-semibold leading-snug text-brand-black">
                Knod for Good, supporting the communities that bring people together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Build Community narrative */}
      <section className="px-4 lg:px-8 max-w-[900px] mx-auto mb-24 md:mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-[1.1] mb-6">
            Build Community. <span className="italic font-light text-brand-blue">We'll Help.</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-black font-medium mb-6">
            Communities thrive when people find each other.
          </p>
          <p className="text-lg text-brand-black/60 leading-relaxed font-light">
            Whether you're running a nonprofit, leading a student organization, organizing local
            meetups, supporting entrepreneurs, or bringing neighbors together, meaningful
            connections are often your greatest resource, and your biggest challenge. That's why we
            created the Knod Community Partner Program. If your organization exists to bring people
            together, we'll provide Knod at a discounted or free rate, case by case, so you can
            spend less time hoping connections happen, and more time helping them happen.
          </p>
        </motion.div>
      </section>

      {/* Who It's For */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-black/60 mb-4 flex items-center gap-2 uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black leading-tight max-w-2xl">
            Built for the people already bringing others together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ORG_TYPES.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="bg-[#f5f5f7] rounded-2xl p-6 flex items-center gap-4 hover:bg-white hover:shadow-lg hover:shadow-black/5 border border-transparent hover:border-brand-black/5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Icon className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="font-medium text-brand-black leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You Receive */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="bg-[#f5f5f7] rounded-[2rem] p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black leading-tight mb-6">
                What You Receive
              </h2>
              <p className="text-lg text-brand-black/60 leading-relaxed font-light">
                Accepted partners receive discounted or free access to Knod, decided case by case,
                allowing their community to discover meaningful connections before, during, and
                after every event.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 space-y-4"
            >
              {RECEIVE.map((item) => (
                <li key={item} className="flex items-start gap-4 bg-white rounded-2xl p-5">
                  <div className="w-6 h-6 rounded-full bg-[#1AEB7E]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                  </div>
                  <p className="text-brand-black leading-relaxed font-medium">{item}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-4 lg:px-8 max-w-[640px] mx-auto mb-24 md:mb-32 scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-brand-black/5 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-black/5"
        >
          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <span className="text-sm font-semibold tracking-wide text-brand-blue mb-3 flex items-center justify-center gap-2 uppercase">
                  <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  Apply Now
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-black mb-2">
                  Apply to Become a Community Partner
                </h2>
                <p className="text-brand-black/60 font-light">
                  Tell us about your community and we'll be in touch with next steps.
                </p>
              </div>

              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className={labelClass}>Organization / Community name *</label>
                  <input
                    type="text"
                    required
                    autoComplete="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your organization or community"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Your name *</label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Organization type</label>
                  <div className="relative">
                    <select
                      value={formData.orgType}
                      onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled hidden>
                        Select one
                      </option>
                      {ORG_TYPES.map(({ label }) => (
                        <option key={label} value={label}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-black/50">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>City</label>
                  <input
                    type="text"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Your city"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Tell us about your community</label>
                  <textarea
                    rows={3}
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    placeholder="What does your community do, and who do you bring together?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer mt-2 bg-brand-black text-white py-4 rounded-full text-base font-semibold hover:bg-brand-blue transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-blue/15 active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Apply for Partnership ✦</>
                  )}
                </button>

                <p className="text-center text-xs text-brand-black/45 pt-1">
                  We review every application personally. No spam, ever.
                </p>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-8 text-center flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-6 shadow-lg shadow-emerald-500/5">
                <Check className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-black mb-3">
                Application received
              </h3>
              <p className="text-brand-black/70 max-w-sm leading-relaxed font-light">
                Thanks, <span className="font-semibold">{formData.name}</span>. We'll review your
                application and be in touch. For anything urgent, email{" "}
                <a href="mailto:hello@knod.ai" className="text-brand-blue hover:underline font-medium">
                  hello@knod.ai
                </a>
                .
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 lg:px-8 max-w-[1400px] mx-auto mb-16">
        <div className="bg-brand-black rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1AEB7E]/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 w-full md:w-auto">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-sm mb-6 inline-block border border-white/10">
              Knod for Good
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight max-w-xl text-white leading-tight mb-4">
              If your organization brings people together, we'd love to support your work.
            </h2>
            <p className="text-white/60 text-lg max-w-md font-light">
              Apply to the Community Partner Program and give your community a better way to connect.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <a
              href="#apply"
              className="bg-white text-brand-black px-10 py-5 rounded-full font-semibold hover:bg-[#1AEB7E] transition-colors flex items-center justify-center gap-2 whitespace-nowrap md:w-auto w-full shadow-xl shadow-black/20"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
