"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PlayCircle, UserPlus, ArrowRight, Search, X, SlidersHorizontal, SearchX } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense, useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries, translatedCourses, categories } from "@/lib/i18n/dictionaries";
import type { CourseFormat } from "@/lib/data/types";
import dynamic from "next/dynamic";

const DownloadCatalogButton = dynamic(() => import("@/components/pdf/DownloadCatalogButton"), { ssr: false });

/* ══════════════════════════════════════════════════════════
   FILTER TYPES
   ══════════════════════════════════════════════════════════ */

interface FilterState {
  search: string;
  categories: string[];
  levels: string[];
  formats: string[];
  durations: string[];
}

const LEVEL_OPTIONS = ["beginner", "intermediate", "advanced", "all"] as const;
const FORMAT_OPTIONS: CourseFormat[] = ["presentiel", "hybride", "en-ligne"];
const DURATION_OPTIONS = ["1", "2-3", "4-5", "5+"] as const;

function matchesDuration(durationDays: number, filter: string): boolean {
  switch (filter) {
    case "1": return durationDays === 1;
    case "2-3": return durationDays >= 2 && durationDays <= 3;
    case "4-5": return durationDays >= 4 && durationDays <= 5;
    case "5+": return durationDays > 5;
    default: return false;
  }
}

/* ══════════════════════════════════════════════════════════
   SIDEBAR FILTER PANEL
   ══════════════════════════════════════════════════════════ */

function FilterSidebar({
  filters,
  setFilters,
  language,
}: {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  language: "fr" | "en";
}) {
  const t = dictionaries[language].courses.filters;

  const toggleFilter = (key: keyof Pick<FilterState, "categories" | "levels" | "formats" | "durations">, value: string) => {
    setFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const clearAll = () => {
    setFilters({ search: filters.search, categories: [], levels: [], formats: [], durations: [] });
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.levels.length > 0 || filters.formats.length > 0 || filters.durations.length > 0;

  // Get unique categories from the course data
  const availableCategories = categories;

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 p-6 sticky top-28 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-[var(--accent)]" />
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">{t.filtersTitle}</h3>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              {t.clearAll}
            </button>
          )}
        </div>

        {/* ── CATÉGORIE ── */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            {t.category}
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableCategories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.id)}
                  onChange={() => toggleFilter("categories", cat.id)}
                  className="w-4 h-4 rounded border-2 border-[var(--border)] text-[var(--accent)] accent-[var(--accent)] cursor-pointer"
                />
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {cat[language].name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* ── NIVEAU ── */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            {t.level}
          </h4>
          <div className="space-y-2">
            {LEVEL_OPTIONS.map((level) => (
              <label
                key={level}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.levels.includes(level)}
                  onChange={() => toggleFilter("levels", level)}
                  className="w-4 h-4 rounded border-2 border-[var(--border)] text-[var(--accent)] accent-[var(--accent)] cursor-pointer"
                />
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {t.levels[level]}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* ── FORMAT ── */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            {t.format}
          </h4>
          <div className="space-y-2">
            {FORMAT_OPTIONS.map((format) => (
              <label
                key={format}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.formats.includes(format)}
                  onChange={() => toggleFilter("formats", format)}
                  className="w-4 h-4 rounded border-2 border-[var(--border)] text-[var(--accent)] accent-[var(--accent)] cursor-pointer"
                />
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {t.formats[format]}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* ── DURÉE ── */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            {t.duration}
          </h4>
          <div className="space-y-2">
            {DURATION_OPTIONS.map((dur) => (
              <label
                key={dur}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.durations.includes(dur)}
                  onChange={() => toggleFilter("durations", dur)}
                  className="w-4 h-4 rounded border-2 border-[var(--border)] text-[var(--accent)] accent-[var(--accent)] cursor-pointer"
                />
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {t.durations[dur]}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════════════════
   MOBILE FILTER DRAWER
   ══════════════════════════════════════════════════════════ */

function MobileFilterDrawer({
  isOpen,
  onClose,
  filters,
  setFilters,
  language,
}: {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  language: "fr" | "en";
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white overflow-y-auto"
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <h3 className="font-display font-bold text-lg">
            {dictionaries[language].courses.filters.filtersTitle}
          </h3>
          <button onClick={onClose} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <X size={20} />
          </button>
        </div>
        <div className="p-4">
          <FilterSidebar filters={filters} setFilters={setFilters} language={language} />
        </div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN COURSES CONTENT
   ══════════════════════════════════════════════════════════ */

function CoursesContent() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].courses;
  const searchParams = useSearchParams();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get("search") || "",
    categories: [],
    levels: [],
    formats: [],
    durations: [],
  });

  // Sync search from URL on mount
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    if (urlSearch !== filters.search) {
      setFilters((prev) => ({ ...prev, search: urlSearch }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Filter courses based on all active filters
  const filteredCourses = translatedCourses.filter((course) => {
    // Search
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matchesTitle = course[language].title.toLowerCase().includes(q);
      const matchesCat = course[language].category.toLowerCase().includes(q);
      const matchesInstructor = course[language].instructor.toLowerCase().includes(q);
      if (!matchesTitle && !matchesCat && !matchesInstructor) return false;
    }

    // Category
    if (filters.categories.length > 0 && !filters.categories.includes(course.categoryId)) return false;

    // Level
    if (filters.levels.length > 0 && !filters.levels.includes(course.level)) return false;

    // Format
    if (filters.formats.length > 0 && !filters.formats.includes(course.format)) return false;

    // Duration
    if (filters.durations.length > 0) {
      const matchesDur = filters.durations.some((d) => matchesDuration(course.durationDays, d));
      if (!matchesDur) return false;
    }

    return true;
  });

  const activeFilterCount = filters.categories.length + filters.levels.length + filters.formats.length + filters.durations.length;

  return (
    <div className="bg-slate-50/50 border-y border-slate-100">
      <SectionWrapper id="courses" suppressHydrationWarning className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      {/* Header */}
      <FadeInChild className="mb-10">
        <span className="font-mono text-sm text-[var(--accent)] font-bold tracking-widest uppercase mb-4 block">{t.catalog}</span>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
              {t.description}
            </p>
          </div>
          <div className="shrink-0">
            <DownloadCatalogButton courses={translatedCourses} language={language} />
          </div>
        </div>

        {/* Search bar (full width, no price filter) */}
        <div className="flex gap-3 items-center">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.filters.searchPlaceholder}
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              className="w-full pl-11 pr-10 py-3 bg-white border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm font-medium shadow-sm"
            />
            {filters.search && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {/* Mobile filter toggle button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-[var(--border)] rounded-xl text-sm font-bold text-[var(--text-secondary)] hover:border-[var(--accent)] transition-colors shadow-sm"
          >
            <SlidersHorizontal size={16} />
            {t.filters.filtersTitle}
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white text-[10px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </FadeInChild>

      {/* ── Two-column layout: Sidebar + Grid ── */}
      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar filters={filters} setFilters={setFilters} language={language} />
        </div>

        {/* Mobile Filter Drawer */}
        <MobileFilterDrawer
          isOpen={mobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
          filters={filters}
          setFilters={setFilters}
          language={language}
        />

        {/* Course Grid */}
        <div className="flex-1">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-medium text-[var(--text-muted)]">
              {filteredCourses.length} {language === "fr" ? "formation(s) trouvée(s)" : "course(s) found"}
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, categories: [], levels: [], formats: [], durations: [] }))}
                className="text-xs font-bold text-[var(--accent)] hover:underline"
              >
                {t.filters.clearAll}
              </button>
            )}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={shouldReduceMotion ? {} : "initial"}
            whileInView={shouldReduceMotion ? {} : "animate"}
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id + i}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl overflow-hidden relative shadow-xl shadow-slate-200/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--accent)]/20 transition-all duration-300"
              >
                <Link
                  suppressHydrationWarning
                  href={`/courses/${course.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={course[language].title}
                />

                <div className="relative h-44 w-full overflow-hidden">
                  <img src={course.image} alt={course[language].title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {course.badge && (
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white z-20 ${course.badge === 'new' ? 'bg-[var(--success)]' : course.badge === 'ai' ? 'bg-purple-600' : 'bg-[var(--gold)]'}`}>
                      {course.badge === "bestseller" ? t.badges.bestseller : course.badge === "new" ? t.badges.new : t.badges.ai}
                    </div>
                  )}
                  {/* Level badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-[var(--text-secondary)] z-20">
                    {t.filters.levels[course.level as keyof typeof t.filters.levels]}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--accent-light)] text-[var(--accent)] font-medium text-[10px] uppercase tracking-wider">
                      {course[language].category}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--bg-alt)] text-[var(--text-muted)] font-medium text-[10px] uppercase tracking-wider border border-[var(--border)]">
                      {t.filters.formats[course.format as keyof typeof t.filters.formats]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {course[language].title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3 flex items-center gap-1.5">
                    <UserPlus size={12} /> {course[language].instructor}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-medium text-[var(--text-muted)] mb-4">
                    <span className="flex items-center gap-1"><span className="text-yellow-400">★</span> {course.rating}</span>
                    <span>({course.students})</span>
                    <span className="flex items-center gap-1"><PlayCircle size={12} /> {course.duration}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-[var(--border)] flex items-center justify-between">
                    {course.progress != null ? (
                      <div className="w-full">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-[var(--text-muted)] font-medium">{t.progress}</span>
                          <span className="text-[var(--success)] font-bold">{course.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[var(--bg-alt)] overflow-hidden">
                          <div className="h-full bg-[var(--success)] rounded-full" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="font-mono font-bold text-lg text-[var(--text-primary)]">{course.price} MAD</span>
                        <span className="text-sm font-bold text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1 transition-all">
                          {t.view} <ArrowRight size={14} />
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            {filteredCourses.length === 0 && (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center mb-6">
                  <SearchX size={36} className="text-[var(--text-muted)]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">
                  {language === 'fr' ? 'Oups ! Aucun résultat' : 'Oops! No results'}
                </h3>
                <p className="text-[var(--text-muted)] text-sm font-medium max-w-sm mb-8">
                  {t.filters.noResults}
                </p>
                <button
                  onClick={() => setFilters({ search: '', categories: [], levels: [], formats: [], durations: [] })}
                  className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all transform hover:scale-[0.98] active:scale-95 shadow-md"
                >
                  <X size={16} />
                  {language === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      </SectionWrapper>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   EXPORTED COMPONENT (with Suspense boundary)
   ══════════════════════════════════════════════════════════ */

function SkeletonCard() {
  return (
    <div className="flex flex-col h-full bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 animate-pulse" style={{ pointerEvents: 'none' }}>
      <div className="h-44 w-full bg-gray-200" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex gap-2 mb-3">
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-5 w-16 bg-gray-100 rounded" />
        </div>
        <div className="h-5 w-full bg-gray-200 rounded mb-2" />
        <div className="h-5 w-3/4 bg-gray-100 rounded mb-3" />
        <div className="h-4 w-1/2 bg-gray-100 rounded mb-4" />
        <div className="flex gap-3 mb-4">
          <div className="h-4 w-12 bg-gray-100 rounded" />
          <div className="h-4 w-16 bg-gray-100 rounded" />
        </div>
        <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between">
          <div className="h-6 w-20 bg-gray-200 rounded" />
          <div className="h-5 w-14 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
      <div className="mb-10">
        <div className="h-4 w-24 bg-gray-200 rounded mb-4 animate-pulse" />
        <div className="h-10 w-72 bg-gray-200 rounded mb-4 animate-pulse" />
        <div className="h-5 w-96 bg-gray-100 rounded mb-8 animate-pulse" />
        <div className="h-12 w-full bg-gray-100 rounded-xl animate-pulse" />
      </div>
      <div className="flex gap-8">
        <div className="hidden lg:block w-72 shrink-0">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 p-6 space-y-4 animate-pulse">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-5 bg-gray-100 rounded" />
            ))}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPreview() {
  return (
    <Suspense fallback={<SkeletonGrid />}>
      <CoursesContent />
    </Suspense>
  );
}
