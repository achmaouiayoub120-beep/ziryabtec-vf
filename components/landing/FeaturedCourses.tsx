"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PlayCircle, UserPlus, ArrowRight } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries, translatedCourses } from "@/lib/i18n/dictionaries";

/* ══════════════════════════════════════════════════════════
   FeaturedCourses — Affiche uniquement les formations phares
   (celles marquées featured: true dans les données)
   ══════════════════════════════════════════════════════════ */

export default function FeaturedCourses() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].featured;
  const tBadges = dictionaries[language].courses.badges;

  // Filter only featured courses (formations de publicité)
  const featuredCourses = translatedCourses.filter((c) => c.featured);

  return (
    <SectionWrapper id="featured-courses" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      <FadeInChild className="mb-12">
        <span className="font-mono text-sm text-[var(--accent)] font-bold tracking-widest uppercase mb-4 block">
          {t.subtitle}
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              {t.description}
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-bold text-[15px] hover:gap-3 transition-all whitespace-nowrap group"
          >
            {t.viewAll}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {featuredCourses.map((course) => (
          <motion.div
            key={course.id}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="elite-card group flex flex-col h-full bg-white overflow-hidden relative"
          >
            <Link
              suppressHydrationWarning
              href={`/courses/${course.id}`}
              className="absolute inset-0 z-10"
              aria-label={course[language].title}
            />

            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course[language].title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {course.badge && (
                <div
                  className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white z-20 ${
                    course.badge === "new"
                      ? "bg-[var(--success)]"
                      : course.badge === "ai"
                      ? "bg-purple-600"
                      : "bg-[var(--gold)]"
                  }`}
                >
                  {course.badge === "bestseller"
                    ? tBadges.bestseller
                    : course.badge === "new"
                    ? tBadges.new
                    : tBadges.ai}
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="inline-block px-2.5 py-1 rounded bg-[var(--accent-light)] text-[var(--accent)] font-medium text-xs mb-4 w-fit">
                {course[language].category}
              </div>
              <h3 className="font-display font-bold text-xl leading-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                {course[language].title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                <UserPlus size={14} /> {course[language].instructor}
              </p>

              <div className="flex items-center gap-4 text-sm font-medium text-[var(--text-muted)] mb-6">
                <span className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span> {course.rating} ({course.students})
                </span>
                <span className="flex items-center gap-1">
                  <PlayCircle size={14} /> {course.duration}
                </span>
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="font-mono font-bold text-xl text-[var(--text-primary)]">
                  {course.price} MAD
                </span>
                <span className="text-sm font-bold text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1 transition-all">
                  {t.view} <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
