import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

interface BookDemoModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookDemoModal({ open, onClose }: BookDemoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/35 backdrop-blur-lg"
            id="modal-backdrop"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/45 bg-white/70 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            id="demo-modal-dialog"
          >
            {/* Absorb colors behind modal */}
            <div className="absolute top-[-30%] right-[-20%] w-[250px] h-[250px] rounded-full bg-brand-blue/20 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] rounded-full bg-blue-300/20 blur-[50px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/40 border border-black/5 text-brand-black/60 hover:text-brand-black hover:bg-white/80 active:scale-95 transition-all outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/40 cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-xl bg-brand-blue/15 text-brand-blue">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-black/60">Price Quote</span>
            </div>

            <h3 className="text-3xl font-extrabold tracking-tight text-brand-black mb-2">Price Quote Request</h3>
            <p className="text-sm text-brand-black/75 mb-6 leading-relaxed">
              Tell us about your event and we'll send you a custom quote.
            </p>

            <QuoteForm source="quote_modal" onDone={onClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
