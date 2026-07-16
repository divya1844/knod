import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustedPartnersSection } from "./components/TrustedPartnersSection";
import { WhatKnodDeliversSection } from "./components/WhatKnodDeliversSection";
import { MissionSection } from "./components/MissionSection";
import { HorizontalScrollSection } from "./components/HorizontalScrollSection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { TestimonialsSection, ResearchStatsSection } from "./components/TestimonialsAndResearchSection";
import { KnodInActionSection } from "./components/KnodInActionSection";
import { SubscriptionSection } from "./components/SubscriptionSection";
import { Footer } from "./components/Footer";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage";
import { PricingPage } from "./pages/PricingPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { LaunchPartnerPage } from "./pages/LaunchPartnerPage";
import { CareersPage } from "./pages/CareersPage";

import { CommunitiesPage } from "./pages/CommunitiesPage";
import { UniversitiesPage } from "./pages/UniversitiesPage";
import { ConferencesPage } from "./pages/ConferencesPage";
import { EnterprisePage } from "./pages/EnterprisePage";

import { StyleGuidePage } from "./pages/StyleGuidePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { PledgePage } from "./pages/PledgePage";
import { CommunityPartnersPage } from "./pages/CommunityPartnersPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useSEO } from "./hooks/useSEO";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has a hash (e.g. /community-partners#apply), scroll to that
    // element instead of the top, so shared links and QR codes land on the section.
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // Defer to the next frame so the target has rendered (and hydrated).
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  useSEO({
    title: "Knod | Connection Infrastructure for Physical Spaces",
    description: "Knod turns rooms into connections. Event and community networking infrastructure for conferences, universities, and enterprises.",
  });

  return (
    <>
      <HeroSection />
      <TrustedPartnersSection />
      <WhatKnodDeliversSection />
      <ResearchStatsSection />
      <HorizontalScrollSection />
      <MissionSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      {/* Launch-partner pricing hidden on home page (still available at /pricing and /launch-partner) */}
      {/* <SubscriptionSection /> */}
      <KnodInActionSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f5f5f7] font-sans text-brand-black flex flex-col relative selection:bg-brand-blue selection:text-white">
        {/* Background Orbs for Liquid Glass Effect */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-brand-blue/20 blur-[100px] md:blur-[140px] mix-blend-multiply" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-300/30 blur-[80px] md:blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[100px] mix-blend-multiply" />
        </div>

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/why-the-future-of-networking-is-b2b2c" element={<BlogDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/conferences" element={<ConferencesPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/launch-partner" element={<LaunchPartnerPage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
          <Route path="/pledge" element={<PledgePage />} />
          <Route path="/community-partners" element={<CommunityPartnersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

