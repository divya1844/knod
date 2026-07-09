import { motion } from "motion/react";

export function TermsPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-24 relative bg-[#f5f5f7]">
      <section className="px-6 max-w-[900px] mx-auto text-center cursor-default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-brand-black/60 leading-relaxed">
            We're finalizing our terms of service — check back soon. In the meantime, if you have
            questions, reach out to us at{" "}
            <a href="mailto:hello@knod.ai" className="text-brand-blue hover:underline">
              hello@knod.ai
            </a>
            .
          </p>
        </motion.div>
      </section>
    </main>
  );
}
