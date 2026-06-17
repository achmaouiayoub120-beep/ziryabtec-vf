"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { portfolioProjects } from "@/lib/data/portfolioData";

/* ══════════════════════════════════════════════════════════
   Portfolio Page — Liste complète des projets professionnels
   ══════════════════════════════════════════════════════════ */

export default function PortfolioPage() {
  const { language } = useLanguage();
  const t = dictionaries[language].portfolio;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 min-h-screen bg-[var(--bg)]">
        <SectionWrapper id="portfolio">
          <FadeInChild className="text-center mb-16">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-[var(--text-primary)]">
              {t.title}{" "}
              <span className="text-[var(--accent)]">{t.titleHighlight}</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
              {t.description}
            </p>
          </FadeInChild>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <FadeInChild key={project.slug}>
                <div className="elite-card group overflow-hidden bg-white flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project[language].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                      {project[language].category}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors z-10"
                        aria-label={`${t.visitSite} ${project[language].title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {project[language].title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] font-medium mb-3 italic">
                      {project[language].tagline}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed mb-6 line-clamp-3">
                      {project[language].description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[var(--bg-alt)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider border border-[var(--border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 border-t border-[var(--border)]">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all group/link"
                      >
                        {t.learnMore}
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInChild>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
