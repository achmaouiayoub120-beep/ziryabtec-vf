import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturedCourses from "@/components/landing/FeaturedCourses";
import BentoFeatures from "@/components/landing/BentoFeatures";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
/* ── Portfolio supprimé — site dédié Centre de Formation ──
import PortfolioSection from "@/components/landing/PortfolioSection";
── */
import LogoMarquee from "@/components/landing/LogoMarquee";
import InstructorBanner from "@/components/landing/InstructorBanner";

/* ── Sections masquées sur directive du professeur ──
import CoursesPreview from "@/components/landing/CoursesPreview";
import PricingPreview from "@/components/landing/PricingPreview";
import CTASection from "@/components/landing/CTASection";
── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--bg)]">
        <HeroSection />
        <LogoMarquee />
        <StatsSection />
        <FeaturedCourses />
        <BentoFeatures />
        {/* ── PortfolioSection supprimée — Centre de Formation uniquement ── */}
        <TestimonialsSection />
        <InstructorBanner />

        {/* ── Section Tarifs masquée (directive professeur) ──
        <PricingPreview />
        ── */}
        {/* ── Section CTA masquée (directive professeur) ──
        <CTASection />
        ── */}
      </main>
      <Footer />
    </>
  );
}
