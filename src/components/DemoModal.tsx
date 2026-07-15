import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Calendar, AlertCircle } from "lucide-react";
import { submitDemoRequest } from "../lib/supabase";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const emptyForm = {
  name: "",
  email: "",
  organization: "",
  role: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45";
const labelClass =
  "block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1";

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setErrorMsg("");
    setIsSubmitting(true);
    const error = await submitDemoRequest({
      name: formData.name,
      email: formData.email,
      organization: formData.organization || undefined,
      role: formData.role || undefined,
      message: formData.message || undefined,
      source: "book_demo",
    });
    setIsSubmitting(false);
    if (error) {
      setErrorMsg(error);
      return;
    }
    setIsSuccess(true);
  };

  const closeModal = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setErrorMsg("");
      setFormData(emptyForm);
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-brand-black/35 backdrop-blur-lg"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/45 bg-white/70 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            <div className="absolute top-[-30%] right-[-20%] w-[250px] h-[250px] rounded-full bg-brand-blue/20 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] rounded-full bg-blue-300/20 blur-[50px] pointer-events-none" />

            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/40 border border-black/5 text-brand-black/60 hover:text-brand-black hover:bg-white/80 active:scale-95 transition-all outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/40 cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="demo-form"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-brand-blue/15 text-brand-blue">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-black/60">Book a Demo</span>
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight text-brand-black mb-2">Book a demo</h3>
                  <p className="text-sm text-brand-black/75 mb-6 leading-relaxed">
                    Tell us a bit about you and we'll reach out to schedule a walkthrough.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={labelClass}>Name *</label>
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
                      <label className={labelClass}>Organization</label>
                      <input
                        type="text"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Your organization"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Your role</label>
                      <input
                        type="text"
                        autoComplete="organization-title"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Event Director, Community Lead"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>What would you like to see?</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your events or what you're hoping Knod can do."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {errorMsg && (
                      <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50/80 border border-red-200 rounded-2xl px-4 py-3">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer group mt-6 bg-brand-black text-white py-4 rounded-2xl text-base font-semibold hover:bg-brand-blue transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-blue/15 active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Book a Demo
                          <Calendar className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="demo-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-6 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-6 shadow-lg shadow-emerald-500/5">
                    <Check className="w-8 h-8" strokeWidth={3} />
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight text-brand-black mb-2">Request received!</h3>
                  <p className="text-sm text-brand-black/75 mb-8 max-w-sm leading-relaxed">
                    Thanks, <span className="font-semibold">{formData.name}</span>. We'll email <span className="font-semibold">{formData.email}</span> to schedule your demo.
                  </p>

                  <button
                    onClick={closeModal}
                    className="cursor-pointer bg-brand-black text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-brand-blue transition-all duration-300 active:scale-95"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
