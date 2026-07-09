import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="flex-1 w-full pt-32 pb-24 relative bg-[#f5f5f7]">
      <section className="px-6 max-w-[900px] mx-auto text-center cursor-default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            404
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Page not found
          </h1>
          <p className="text-lg text-brand-black/60 leading-relaxed mb-8">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-colors"
          >
            Back to home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
