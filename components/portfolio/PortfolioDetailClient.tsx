"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ExternalLink, Target, Layers } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { transitions } from "@/lib/utils";
import type { PortfolioProject } from "@/lib/data/types";

/* ══════════════════════════════════════════════════════════
   Portfolio Detail Client View
   ══════════════════════════════════════════════════════════ */

export default function PortfolioDetailClient({ project }: { project: PortfolioProject }) {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].portfolio;
  const content = project[language];

  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen bg-[var(--bg)]">
        {/* ── Hero Section ── */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={project.image}
            alt={content.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="relative z-10 h-full flex flex-col justify-end max-w-[1200px] mx-auto px-6 md:px-12 pb-12">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitions.enter}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors"
              >
                <ArrowLeft size={16} />
                {t.backToPortfolio}
              </Link>
              <p className="text-sm text-white/60 font-bold uppercase tracking-widest mb-2">
                {t.detailSubtitle} — {content.category}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-3">
                {content.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                {content.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content — Left 2 columns */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitions.enter, delay: 0.1 }}
              >
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
                  {content.description}
                </p>
              </motion.div>

              {/* Objectives */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitions.enter, delay: 0.2 }}
                className="elite-card p-8 bg-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)]">
                    <Target size={20} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                    {t.objectives}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {content.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[var(--text-secondary)] font-medium leading-relaxed">
                        {obj}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar — Right column */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitions.enter, delay: 0.3 }}
                className="elite-card p-6 bg-white"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)]">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
                    {t.technologies}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-alt)] text-sm font-bold text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* External Link */}
              {project.url && (
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transitions.enter, delay: 0.4 }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-4 rounded-xl font-bold text-[15px] transition-all transform hover:scale-[0.98] active:scale-95 shadow-lg shadow-blue-200/50"
                  >
                    <ExternalLink size={18} />
                    {t.visitSite}
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
