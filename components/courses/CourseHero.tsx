"use client";

import { motion } from "framer-motion";
import { ChevronRight, Star, Clock, Tag } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Course } from "@/lib/data/types";

export default function CourseHero({ course }: { course: Course }) {
  const { language } = useLanguage();
  const t = dictionaries[language].courseDetails;
  const content = course[language];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={course.coverImage} 
          alt={content.title} 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-300 mb-8 overflow-x-auto whitespace-nowrap">
          <span className="hover:text-white cursor-pointer transition-colors">{content.theme}</span>
          <ChevronRight size={16} className="mx-2 shrink-0" />
          <span className="hover:text-white cursor-pointer transition-colors">{content.category}</span>
          <ChevronRight size={16} className="mx-2 shrink-0" />
          <span className="text-white font-medium truncate">{content.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-semibold border border-white/20">
                {t.ref} {course.ref}
              </span>
              <span className="px-3 py-1 bg-[var(--accent)] text-white rounded-full text-sm font-semibold">
                {t.level[course.level]}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              {content.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {content.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold text-sm">
                  {content.instructor.charAt(0)}
                </div>
                <span className="font-medium text-white">{content.instructor}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <Star size={18} fill="currentColor" />
                <span className="font-medium text-white">{course.rating}</span>
                <span className="text-slate-400">({course.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{course.duration}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex w-48 h-48 bg-white rounded-3xl shadow-2xl items-center justify-center p-8 shrink-0"
          >
            <img src={course.logoImage} alt="Course Logo" className="w-full h-full object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
