"use client";

import { UsersRound } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Course } from "@/lib/data/types";

export default function CourseAudience({ course }: { course: Course }) {
  const { language } = useLanguage();
  const t = dictionaries[language].courseDetails;
  const content = course[language];

  if (!content.audience) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
        {t.audience}
      </h2>
      <div className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
          <UsersRound size={24} />
        </div>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed pt-2">
          {content.audience}
        </p>
      </div>
    </section>
  );
}
