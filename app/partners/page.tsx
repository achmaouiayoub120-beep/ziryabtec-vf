"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoMarquee from "@/components/landing/LogoMarquee";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen bg-[var(--bg)]">
        <SectionWrapper id="partners">
          <FadeInChild className="text-center mb-16">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              Partenaires
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-[var(--text-primary)]">
              Nos <span className="text-[var(--accent)]">Partenaires Technologiques</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 text-lg">
              Nous collaborons avec les meilleures entreprises tech pour vous offrir une formation de pointe.
            </p>
          </FadeInChild>
          <div className="elite-card py-16 bg-white overflow-hidden">
            <LogoMarquee />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
