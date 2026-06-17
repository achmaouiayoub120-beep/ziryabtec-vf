"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { User, Award, BookOpen } from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen bg-[var(--bg)]">
        <SectionWrapper id="profile">
          <FadeInChild className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-2 text-[var(--text-primary)]">
              Votre <span className="text-[var(--accent)]">Espace Personnel</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Gérez votre apprentissage et suivez vos progrès.
            </p>
          </FadeInChild>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Profil */}
            <FadeInChild className="lg:col-span-1">
              <div className="elite-card text-center p-8 bg-white">
                <div className="w-24 h-24 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  <User size={48} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-1 text-[var(--text-primary)]">Ayoub Achmaoui</h2>
                <p className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest mb-8">Étudiant Pro</p>
                
                <div className="space-y-4 text-left border-t border-[var(--border)] pt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[var(--text-muted)] font-medium">Cours complétés</span>
                    <span className="font-bold text-[var(--text-primary)]">4</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[var(--text-muted)] font-medium">Certificats</span>
                    <span className="font-bold text-[var(--text-primary)]">2</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[var(--text-muted)] font-medium">Membre depuis</span>
                    <span className="font-bold text-[var(--text-primary)]">Avril 2026</span>
                  </div>
                </div>
              </div>
            </FadeInChild>

            {/* Contenu Principal */}
            <FadeInChild className="lg:col-span-2 space-y-8">
              {/* Cours Récents */}
              <div>
                <h3 className="text-2xl font-display font-bold flex items-center gap-3 mb-6 text-[var(--text-primary)]">
                  <BookOpen size={24} className="text-[var(--accent)]" />
                  Cours récents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="elite-card p-6 bg-white">
                    <p className="text-[10px] text-[var(--accent)] font-bold uppercase tracking-wider mb-2">Développement</p>
                    <h4 className="font-display font-bold text-lg mb-4 text-[var(--text-primary)]">Python Avancé & Data Science</h4>
                    <div className="w-full h-2 rounded-full bg-[var(--bg-alt)] mb-2">
                      <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: "65%" }} />
                    </div>
                    <p className="text-xs font-bold text-[var(--accent)] text-right">65% complété</p>
                  </div>
                  <div className="elite-card p-6 bg-white opacity-80">
                    <p className="text-[10px] text-[var(--accent)] font-bold uppercase tracking-wider mb-2">Frontend</p>
                    <h4 className="font-display font-bold text-lg mb-4 text-[var(--text-primary)]">React & Next.js</h4>
                    <div className="w-full h-2 rounded-full bg-[var(--bg-alt)] mb-2">
                      <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: "12%" }} />
                    </div>
                    <p className="text-xs font-bold text-[var(--accent)] text-right">12% complété</p>
                  </div>
                </div>
              </div>

              {/* Certificats */}
              <div>
                <h3 className="text-2xl font-display font-bold flex items-center gap-3 mb-6 text-[var(--text-primary)]">
                  <Award size={24} className="text-[var(--gold)]" />
                  Derniers Certificats
                </h3>
                <div className="elite-card p-6 bg-white flex items-center gap-6 border-l-4 border-l-[var(--gold)]">
                  <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-[var(--gold)]">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-[var(--text-primary)]">Bases de la Programmation</h4>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Délivré le 12 Avril 2026 • ID: ZT-4429</p>
                  </div>
                  <button className="ml-auto text-sm font-bold text-[var(--accent)] hover:underline">
                    Télécharger
                  </button>
                </div>
              </div>
            </FadeInChild>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
