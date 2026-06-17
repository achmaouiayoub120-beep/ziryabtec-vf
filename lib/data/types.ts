export interface Lesson {
  title: string;
  duration: string;
  type: 'video' | 'document';
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface CourseContent {
  title: string;
  subtitle: string;
  category: string;
  theme: string;
  instructor: string;
  objectives: string[];
  audience: string;
  prerequisites: string[];
  curriculum: Module[];
}

export interface SessionConfig {
  price?: number;
  nextDate?: string;
  location?: string;
  minParticipants?: number;
}

export interface Course {
  id: string;
  ref: string;
  coverImage: string;
  logoImage: string;
  rating: number;
  reviewCount: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  sessions: {
    inter?: SessionConfig;
    intra?: SessionConfig;
    surMesure?: boolean;
  };
  fr: CourseContent;
  en: CourseContent;
}

/* ══════════════════════════════════════════════════════════
   TAXONOMY: Thème → Catégorie → Formation
   ══════════════════════════════════════════════════════════ */

/** A Theme groups multiple Categories (e.g. "Technologie" → Cloud, Dev, etc.) */
export interface Theme {
  id: string;
  fr: { name: string; description: string };
  en: { name: string; description: string };
}

/** A Category belongs to a Theme and groups Formations */
export interface Category {
  id: string;
  themeId: string;
  fr: { name: string };
  en: { name: string };
}

/** Format of delivery */
export type CourseFormat = 'presentiel' | 'hybride' | 'en-ligne';

/** Translated course for catalogue listing (enriched with taxonomy fields) */
export interface TranslatedCourse {
  id: string;
  themeId: string;
  categoryId: string;
  rating: number;
  students: number;
  duration: string;
  durationDays: number;
  price: number;
  badge?: 'bestseller' | 'new' | 'ai';
  color: string;
  image: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  format: CourseFormat;
  featured?: boolean;
  progress?: number;
  fr: {
    title: string;
    category: string;
    theme: string;
    instructor: string;
  };
  en: {
    title: string;
    category: string;
    theme: string;
    instructor: string;
  };
}

/* ══════════════════════════════════════════════════════════
   PORTFOLIO PROJECT TYPES
   ══════════════════════════════════════════════════════════ */

export interface PortfolioProject {
  slug: string;
  image: string;
  technologies: string[];
  url?: string;
  fr: {
    title: string;
    tagline: string;
    category: string;
    description: string;
    objectives: string[];
  };
  en: {
    title: string;
    tagline: string;
    category: string;
    description: string;
    objectives: string[];
  };
}
