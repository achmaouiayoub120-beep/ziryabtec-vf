"use client";

import { useState } from "react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { formationsData } from "@/lib/data/formations";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, ArrowRight, Shield, Cloud, Terminal, Wifi, Brain, Lock, Monitor, Network, Bot } from "lucide-react";
import Link from "next/link";
import DownloadCatalogButton from "@/components/pdf/DownloadCatalogButton";

/* ══════════════════════════════════════════════════════════
   THÈME → DESIGN CONFIG
   ══════════════════════════════════════════════════════════ */
const themeConfig: Record<string, {
  icon: React.ElementType;
  iconAlt: React.ElementType;
  gradient: string;
  iconColor: string;
  bgPattern: string;
  accentRing: string;
}> = {
  "Cybersécurité": {
    icon: Shield,
    iconAlt: Lock,
    gradient: "from-red-600/90 via-orange-500/80 to-amber-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08)_0%,transparent_60%)]",
    accentRing: "ring-red-500/30",
  },
  "Cloud": {
    icon: Cloud,
    iconAlt: Cloud,
    gradient: "from-sky-600/90 via-blue-500/80 to-indigo-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)]",
    accentRing: "ring-sky-500/30",
  },
  "Système": {
    icon: Terminal,
    iconAlt: Monitor,
    gradient: "from-emerald-600/90 via-teal-500/80 to-cyan-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_60%)]",
    accentRing: "ring-emerald-500/30",
  },
  "Réseaux": {
    icon: Wifi,
    iconAlt: Network,
    gradient: "from-violet-600/90 via-purple-500/80 to-fuchsia-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_20%_60%,rgba(255,255,255,0.1)_0%,transparent_60%)]",
    accentRing: "ring-violet-500/30",
  },
  "IA": {
    icon: Brain,
    iconAlt: Bot,
    gradient: "from-fuchsia-600/90 via-pink-500/80 to-rose-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)]",
    accentRing: "ring-fuchsia-500/30",
  },
};

const defaultConfig = themeConfig["Cybersécurité"];

/* ══════════════════════════════════════════════════════════
   CARD IMAGE — Icône thématique premium
   ══════════════════════════════════════════════════════════ */
function CardVisual({ theme, index }: { theme: string; index: number }) {
  const cfg = themeConfig[theme] || defaultConfig;
  const useAlt = index % 3 === 1;
  const IconComp = useAlt ? cfg.iconAlt : cfg.icon;

  return (
    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${cfg.gradient}`}>
      {/* Subtle pattern overlay */}
      <div className={`absolute inset-0 ${cfg.bgPattern}`} />
      {/* Grid dots decoration */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
      {/* Large faded icon in background */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.15] transform rotate-[-15deg]">
        <IconComp size={180} strokeWidth={0.5} />
      </div>
      {/* Centered icon */}
      <div className="relative flex flex-col items-center justify-center h-full gap-3 z-10">
        <div className={`p-4 rounded-3xl bg-white/10 backdrop-blur-md ring-1 ${cfg.accentRing} shadow-2xl`}>
          <IconComp size={40} className={cfg.iconColor} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

/* Prix déterministe */
function getPrice(ref: string, duree: string): number {
  const hash = ref.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  if (duree === "2J") return [2990, 3200, 3500, 2800, 3100][hash % 5];
  if (duree === "5J") return [4990, 5200, 5500, 4800, 5900][hash % 5];
  return [3990, 4500, 3500, 4200, 3800][hash % 5];
}

/* ══════════════════════════════════════════════════════════
   PAGE FORMATIONS
   ══════════════════════════════════════════════════════════ */
export default function FormationsPage() {
  const [activeTheme, setActiveTheme] = useState<string>("Tous");
  const shouldReduceMotion = useReducedMotion();

  const themes = ["Tous", ...Array.from(new Set(formationsData.map((f) => f.theme)))];

  const filteredFormations = activeTheme === "Tous"
    ? formationsData
    : formationsData.filter((f) => f.theme === activeTheme);

  const themeCounters: Record<string, number> = {};

  return (
    <main className="min-h-screen pt-24 pb-24 bg-[var(--bg)]">
      <SectionWrapper>
        <FadeInChild className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-[var(--text-primary)] mb-6 tracking-tight">
            Les <span className="text-[var(--accent)]">Brochures</span> de Formation
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Parcourez notre catalogue premium et découvrez le détail de chaque cursus professionnel pour accélérer votre carrière IT.
          </p>
        </FadeInChild>

        {/* Bannière de téléchargement catalogue */}
        <FadeInChild className="max-w-4xl mx-auto mb-16 bg-[var(--accent-light)] border border-[var(--accent)]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Catalogue complet 2026</h3>
            <p className="text-[var(--text-secondary)]">Découvrez l'intégralité de nos programmes d'excellence en format PDF pour une consultation hors ligne.</p>
          </div>
          <DownloadCatalogButton language="fr" />
        </FadeInChild>

        {/* Filtres */}
        <FadeInChild className="flex flex-wrap justify-center gap-4 mb-16">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTheme === theme
                  ? "bg-[var(--text-primary)] text-white shadow-xl scale-105"
                  : "bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:shadow-md"
              }`}
            >
              {theme}
            </button>
          ))}
        </FadeInChild>

        {/* Grille : 1 mobile, 2 tablet, 3 desktop (comme demandé) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={shouldReduceMotion ? {} : "initial"}
          animate={shouldReduceMotion ? {} : "animate"}
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
        >
          {filteredFormations.map((formation, idx) => {
            if (!themeCounters[formation.theme]) themeCounters[formation.theme] = 0;
            const imgIdx = themeCounters[formation.theme]++;
            const price = getPrice(formation.reference, formation.duree);

            return (
              <motion.div
                key={`${formation.reference}-${idx}`}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="elite-card group overflow-hidden bg-white flex flex-col h-full rounded-[20px]">
                  {/* Visual thématique type Couverture de Brochure */}
                  <CardVisual theme={formation.theme} index={imgIdx} />
                  
                  {/* Contenu de la carte très aéré */}
                  <div className="p-8 flex flex-col flex-1 relative">
                    
                    {/* Floating Reference Badge */}
                    <div className="absolute -top-5 right-8 px-4 py-1.5 rounded-full bg-white shadow-md text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] border border-[var(--border)]">
                      {formation.reference}
                    </div>

                    {/* Pill Category */}
                    <div className="mb-5 inline-flex">
                      <span className="px-3 py-1 bg-[var(--bg-alt)] text-[var(--text-secondary)] rounded-full text-[11px] font-bold uppercase tracking-wider">
                        {formation.categorie}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-4 leading-tight group-hover:text-[var(--accent)] transition-colors">
                      {formation.titre}
                    </h3>

                    {/* Description courte */}
                    <p className="text-sm text-[var(--text-secondary)] mb-8 line-clamp-3 leading-relaxed flex-grow">
                      Maîtrisez les concepts essentiels et avancés de la thématique "{formation.theme}" grâce à ce programme intensif dispensé par nos experts. Idéal pour monter en compétences rapidement.
                    </p>

                    {/* Info ligne (Durée & Prix) */}
                    <div className="flex justify-between items-center mb-8 pb-6 border-b border-[var(--border)]">
                      <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium">
                        <Clock size={16} className="text-[var(--text-muted)]" />
                        <span>{formation.duree}</span>
                      </div>
                      <div className="text-sm font-mono font-bold text-[var(--text-primary)]">
                        {price} MAD
                      </div>
                    </div>

                    {/* Bouton CTA - Découvrir la brochure */}
                    <Link href={`/formations/${formation.reference}`} className="block w-full">
                      <div className="w-full py-4 rounded-xl flex justify-between items-center px-6 bg-[var(--bg-alt)] group-hover:bg-[var(--accent)] text-[var(--text-primary)] group-hover:text-white transition-all duration-300 font-bold tracking-wide">
                        <span>Voir la brochure</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
