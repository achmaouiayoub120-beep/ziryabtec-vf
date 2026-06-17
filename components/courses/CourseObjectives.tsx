"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Course } from "@/lib/data/types";

export default function CourseObjectives({ course }: { course: Course }) {
  const { language } = useLanguage();
  const t = dictionaries[language].courseDetails;
  const content = course[language];

  if (!content.objectives || content.objectives.length === 0) return null;

  return (
    <section className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 mb-12">
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
        {t.objectives}
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {content.objectives.map((objective, index) => (
          <div key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
            <CheckCircle2 size={24} className="text-[var(--accent)] shrink-0" />
            <span className="pt-0.5 leading-relaxed">{objective}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
