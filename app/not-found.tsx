"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/* ══════════════════════════════════════════════════════════
   404 — Page introuvable
   Design aligné sur l'identité visuelle ZiryabTec
   ══════════════════════════════════════════════════════════ */

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();

  const content = {
    fr: {
      code: "404",
      title: "Page introuvable",
      description:
        "La page que vous recherchez n'existe pas ou a été déplacée. Pas d'inquiétude, retrouvez votre chemin ci-dessous.",
      homeBtn: "Retour à l'accueil",
      catalogBtn: "Explorer le catalogue",
    },
    en: {
      code: "404",
      title: "Page not found",
      description:
        "The page you're looking for doesn't exist or has been moved. Don't worry, find your way below.",
      homeBtn: "Back to home",
      catalogBtn: "Explore catalog",
    },
  };

  const t = content[language];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/60 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-50/40 blur-3xl -z-10" />

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-lg w-full text-center"
      >
        {/* Large 404 number */}
        <div className="relative mb-8">
          <span className="text-[160px] md:text-[200px] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--border)] to-[var(--bg-alt)] leading-none select-none">
            {t.code}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white border border-[var(--border)] shadow-lg flex items-center justify-center">
              <Search size={32} className="text-[var(--accent)]" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)] mb-4 tracking-tight">
          {t.title}
        </h1>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-md mx-auto">
          {t.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-7 py-3.5 rounded-xl font-bold text-[15px] transition-all transform hover:scale-[0.98] active:scale-95 shadow-lg shadow-blue-200/40"
          >
            <Home size={18} />
            {t.homeBtn}
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-white border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] px-7 py-3.5 rounded-xl font-bold text-[15px] transition-all"
          >
            <ArrowLeft size={18} />
            {t.catalogBtn}
          </Link>
        </div>

        {/* ZiryabTec branding */}
        <p className="mt-16 text-sm text-[var(--text-muted)] font-medium">
          ZiryabTec © {new Date().getFullYear()}
        </p>
      </motion.div>
    </main>
  );
}
