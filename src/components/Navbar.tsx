import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="absolute w-full top-0 left-0 print:hidden z-50">
      <nav className="w-full py-4 px-6 lg:px-12 flex justify-between items-center z-50">
        <Link to="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-brand-blue" />
        Knod
      </Link>
      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#414a56]">
        <div className="relative group/solutions">
          <button className="flex items-center gap-1.5 hover:text-brand-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full px-1 cursor-pointer">
            Solutions <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover/solutions:opacity-100 group-hover/solutions:top-full group-hover/solutions:pointer-events-auto transition-all duration-300 z-50">
            <div className="w-64 bg-[#0a0f16] border border-white/5 text-white/90 rounded-2xl p-2 shadow-2xl flex flex-col">
              <Link
                to="/communities"
                className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors"
              >
                Communities & Third Spaces
              </Link>
              <Link
                to="/universities"
                className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors"
              >
                Universities & Campuses
              </Link>
              <Link
                to="/conferences"
                className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors"
              >
                Conferences & Live Events
              </Link>
              <Link
                to="/enterprise"
                className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors"
              >
                Enterprise & Custom
              </Link>
            </div>
          </div>
        </div>
        <Link to="/about" className="hover:text-brand-black transition-colors">
          About
        </Link>
        <Link to="/pricing" className="hover:text-brand-black transition-colors">
          Pricing
        </Link>
        <Link to="/case-studies" className="hover:text-brand-black transition-colors">
          Case Studies
        </Link>
        <Link to="/blog" className="hover:text-brand-black transition-colors">
          Blog
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/launch-partner" className="text-[15px] font-medium text-brand-blue hover:text-blue-600 transition-colors hidden md:block cursor-pointer">
          Launch Partner
        </Link>
        <button className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-blue-600 transition-colors duration-300 hidden sm:block cursor-pointer">
          Book a Demo
        </button>
        <button
          className="md:hidden p-3 -mr-3 text-brand-black outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#f5f5f7]/95 backdrop-blur-xl shadow-2xl flex flex-col md:hidden z-40 border-t border-brand-black/5"
          >
            <div className="p-6 flex flex-col gap-6 text-lg font-medium">
              <div className="flex flex-col gap-2">
                <span className="text-brand-black/50 text-sm font-semibold tracking-wider uppercase px-2">Solutions</span>
                <Link to="/communities" className="hover:text-brand-blue transition-colors text-base py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                  Communities & Third Spaces
                </Link>
                <Link to="/universities" className="hover:text-brand-blue transition-colors text-base py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                  Universities & Campuses
                </Link>
                <Link to="/conferences" className="hover:text-brand-blue transition-colors text-base py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                  Conferences & Live Events
                </Link>
                <Link to="/enterprise" className="hover:text-brand-blue transition-colors text-base py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                  Enterprise & Custom
                </Link>
              </div>
              <Link to="/about" className="hover:text-brand-blue transition-colors py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/pricing" className="hover:text-brand-blue transition-colors py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/case-studies" className="hover:text-brand-blue transition-colors py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link to="/blog" className="hover:text-brand-blue transition-colors py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <hr className="border-brand-black/5 my-2" />
              <Link to="/launch-partner" className="text-left font-semibold text-brand-blue transition-colors py-3 px-2 flex items-center min-h-[44px]" onClick={() => setIsMobileMenuOpen(false)}>
                Launch Partner
              </Link>
              <button className="bg-brand-blue text-white px-6 py-3.5 rounded-xl text-center font-semibold hover:bg-blue-600 transition-colors w-full shadow-lg shadow-black/5">
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </div>
  );
}
