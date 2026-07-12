import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#18181b] text-white pt-24 pb-4 px-6 lg:px-12 relative overflow-hidden font-sans flex flex-col">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 z-10 relative">
        <div className="lg:col-span-4 flex flex-col gap-8">
          <Link to="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-blue" />
            Knod
          </Link>
          <p className="text-[1.35rem] sm:text-2xl font-light leading-snug max-w-md">
            Connection infrastructure for physical spaces. Making meaningful connections happen by design, not by chance.
          </p>
          <div className="flex items-center text-white/50 -ml-3 mt-2">
             <a href="#" className="p-3 hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
             <a href="#" className="p-3 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
             <a href="#" className="p-3 hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
             <a href="#" className="p-3 hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
          </div>
          <p className="text-white/40 text-sm mt-4">
            © {new Date().getFullYear()} Knod. All rights reserved.
          </p>
        </div>

        <div className="lg:col-span-8 lg:pl-16 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-4 text-[15px] mt-4 lg:mt-0 font-light">
          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 font-semibold tracking-widest text-[10px] uppercase mb-2">Solutions</h4>
            <Link to="/communities" className="hover:text-brand-blue transition-colors text-white/90">Community Organizers</Link>
            <Link to="/universities" className="hover:text-brand-blue transition-colors text-white/90">Universities & Campuses</Link>
            <Link to="/conferences" className="hover:text-brand-blue transition-colors text-white/90">Conference Organizers</Link>
            <Link to="/enterprise" className="hover:text-brand-blue transition-colors text-white/90">Enterprise & Custom</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 font-semibold tracking-widest text-[10px] uppercase mb-2">Company</h4>
            <Link to="/about" className="hover:text-brand-blue transition-colors text-white/90">About</Link>
            <Link to="/careers" className="hover:text-brand-blue transition-colors text-white/90">Careers</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 font-semibold tracking-widest text-[10px] uppercase mb-2">Resources</h4>
            <Link to="/how-it-works" className="hover:text-brand-blue transition-colors text-white/90">How It Works</Link>
            <Link to="/case-studies" className="hover:text-brand-blue transition-colors text-white/90">Case Studies</Link>
            <Link to="/community-partners" className="hover:text-brand-blue transition-colors text-white/90">Community Partners</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 font-semibold tracking-widest text-[10px] uppercase mb-2">Legal</h4>
            <Link to="/privacy" className="hover:text-brand-blue transition-colors text-white/90">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-blue transition-colors text-white/90">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 sm:mt-24 pointer-events-none select-none max-w-[1400px] mx-auto relative px-4 sm:px-0">
        <span className="text-[34vw] md:text-[28vw] lg:text-[24vw] leading-[0.75] font-sans font-medium tracking-tighter text-white inline-block -ml-[1.5vw] md:-ml-[1vw]">
          Knod
        </span>
        <div className="absolute bottom-0 right-4 sm:right-8 lg:right-16 w-[140px] sm:w-[180px] md:w-[240px] lg:w-[350px] pointer-events-none z-20">
          <img src="/knod_mascot.png" alt="Knod Mascot" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </footer>
  );
}
