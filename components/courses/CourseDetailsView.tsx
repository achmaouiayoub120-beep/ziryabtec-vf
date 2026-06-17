"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, FileText, ChevronDown, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getCourseById } from "@/lib/data/mockCourse";

import CourseHero from "./CourseHero";
import SessionTabs from "./SessionTabs";
import CourseObjectives from "./CourseObjectives";
import CourseAudience from "./CourseAudience";

export default function CourseDetailsView({ courseId }: { courseId?: string }) {
  const { language } = useLanguage();
  const t = dictionaries[language].courseDetails;
  
  const currentCourse = getCourseById(courseId || "ai-practical");
  const content = currentCourse[language];
  
  const [openModule, setOpenModule] = useState<string | null>(
    content.curriculum.length > 0 ? content.curriculum[0].title : null
  );

  const toggleModule = (title: string) => {
    setOpenModule(openModule === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] pb-20">
      
      {/* 1. Hero Section */}
      <CourseHero course={currentCourse} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 lg:pr-[420px]">
        <div className="space-y-12">
            
            {/* 2. Objectives */}
            <CourseObjectives course={currentCourse} />
            
            {/* 3. Audience */}
            <CourseAudience course={currentCourse} />

            {/* 4. Prerequisites */}
            {content.prerequisites && content.prerequisites.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  {t.prerequisites}
                </h2>
                <ul className="space-y-4">
                  {content.prerequisites.map((req: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
                      <BookOpen size={20} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 5. Curriculum Accordion */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                {t.curriculum}
              </h2>
              <div className="space-y-4">
                {content.curriculum.map((module: any, mIdx: number) => (
                  <div 
                    key={mIdx} 
                    className="border border-[var(--border)] rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleModule(module.title)}
                      className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-[var(--bg)] transition-colors"
                    >
                      <h3 className="font-semibold text-lg text-[var(--text-primary)] text-left">
                        {module.title}
                      </h3>
                      <ChevronDown 
                        size={20} 
                        className={`text-[var(--text-secondary)] transition-transform duration-300 ${openModule === module.title ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openModule === module.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 pt-2 space-y-3 bg-[var(--bg)] border-t border-[var(--border)]">
                            {module.lessons.map((lesson: any, idx: number) => (
                              <div key={idx} className="flex items-center justify-between py-2 group cursor-pointer">
                                <div className="flex items-center gap-3">
                                  {lesson.type === 'video' ? (
                                    <PlayCircle size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                                  ) : (
                                    <FileText size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                                  )}
                                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-sm text-[var(--text-secondary)] font-mono">
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
        {/* Mobile Sidebar Placement (en bas de page) */}
        <div className="lg:hidden mt-12 pb-12">
          <SessionTabs course={currentCourse} />
        </div>
      </div>

      {/* Desktop Floating Sidebar (Fixed Right) */}
      <div className="hidden lg:block fixed right-0 top-[73px] bottom-0 w-[400px] bg-white/60 backdrop-blur-xl border-l border-[var(--border)] overflow-y-auto z-40 p-6 shadow-2xl">
        <SessionTabs course={currentCourse} />
      </div>
    </div>
  );
}
