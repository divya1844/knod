import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, FileText, AlertCircle } from "lucide-react";
import { submitQuoteRequest } from "../lib/supabase";

interface QuoteFormProps {
  source: string;
  plan?: string;
  // Called when the user dismisses the success state. If omitted, the form
  // resets in place so another quote can be submitted (used on the pricing page).
  onDone?: () => void;
}

const emptyForm = {
  name: "",
  email: "",
  organization: "",
  website: "",
  eventType: "",
  eventDuration: "",
  attendeeCount: "",
};

const selectArrow = (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-black/50">
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </div>
);

const selectClass =
  "w-full appearance-none px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black";
const inputClass =
  "w-full px-4 py-3 rounded-2xl bg-white/40 border border-black/5 focus:bg-white/80 focus:border-brand-blue/60 focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-brand-black placeholder-brand-black/45";
const labelClass =
  "block text-xs font-semibold text-brand-black/60 tracking-wider uppercase mb-1.5 pl-1";

export function QuoteForm({ source, plan, onDone }: QuoteFormProps) {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.eventType ||
      !formData.eventDuration ||
      !formData.attendeeCount
    )
      return;
    setErrorMsg("");
    setIsSubmitting(true);
    const error = await submitQuoteRequest({
      name: formData.name,
      email: formData.email,
      organization: formData.organization || undefined,
      website: formData.website || undefined,
      event_type: formData.eventType,
      event_duration: formData.eventDuration,
      attendee_count: formData.attendeeCount,
      plan: plan || undefined,
      source,
    });
    setIsSubmitting(false);
    if (error) {
      setErrorMsg(error);
      return;
    }
    setIsSuccess(true);
  };

  const handleDone = () => {
    if (onDone) {
      onDone();
      return;
    }
    setIsSuccess(false);
    setErrorMsg("");
    setFormData(emptyForm);
  };

  return (
    <AnimatePresence mode="wait">
      {!isSuccess ? (
        <motion.form
          key="quote-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="space-y-4"
        >
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
            <label className={labelClass}>Website</label>
            <input
              type="text"
              autoComplete="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="Your website URL"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>What kind of event? *</label>
            <div className="relative">
              <select
                required
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className={selectClass}
              >
                <option value="" disabled hidden>Select event type</option>
                <option value="Meetups/Mixers">Meetups / Mixers</option>
                <option value="Conferences">Conferences</option>
                <option value="Corporate Events">Corporate Events</option>
                <option value="Community Gatherings">Community Gatherings</option>
                <option value="University/Campus">University / Campus</option>
                <option value="Other">Other</option>
              </select>
              {selectArrow}
            </div>
          </div>

          <div>
            <label className={labelClass}>How long is your event? *</label>
            <div className="relative">
              <select
                required
                value={formData.eventDuration}
                onChange={(e) => setFormData({ ...formData, eventDuration: e.target.value })}
                className={selectClass}
              >
                <option value="" disabled hidden>Select duration</option>
                <option value="Under 2 hours">Under 2 hours</option>
                <option value="Half day (2-4 hrs)">Half day (2-4 hrs)</option>
                <option value="Full day (4-8 hrs)">Full day (4-8 hrs)</option>
                <option value="Multi-day">Multi-day</option>
              </select>
              {selectArrow}
            </div>
          </div>

          <div>
            <label className={labelClass}>How many attendees? *</label>
            <div className="relative">
              <select
                required
                value={formData.attendeeCount}
                onChange={(e) => setFormData({ ...formData, attendeeCount: e.target.value })}
                className={selectClass}
              >
                <option value="" disabled hidden>Select attendee range</option>
                <option value="Under 50">Under 50</option>
                <option value="50-150">50 to 150</option>
                <option value="150-500">150 to 500</option>
                <option value="500-1,000">500 to 1,000</option>
                <option value="1,000+">1,000+</option>
              </select>
              {selectArrow}
            </div>
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
                Request Quote
                <FileText className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="quote-success"
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
            Thanks, <span className="font-semibold">{formData.name}</span>. We'll send your custom quote to <span className="font-semibold">{formData.email}</span> shortly.
          </p>

          <button
            onClick={handleDone}
            className="cursor-pointer bg-brand-black text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-brand-blue transition-all duration-300 active:scale-95"
          >
            Done
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
