"use client";

import { GraduationCap, BookOpen, TrendingUp, Award } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

export default function StatsSection() {
  const { language } = useLanguage();
  const t = dictionaries[language].stats;

  const stats = [
    {
      icon: GraduationCap,
      value: 2400,
      suffix: "+",
      label: t.items.learners,
      color: "var(--electric-blue)",
      bgColor: "rgba(37,99,235,0.12)",
    },
    {
      icon: BookOpen,
      value: 48,
      suffix: "",
      label: t.items.courses,
      color: "var(--neon-cyan)",
      bgColor: "rgba(6,182,212,0.12)",
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: t.items.rating,
      color: "var(--emerald)",
      bgColor: "rgba(16,185,129,0.12)",
    },
    {
      icon: Award,
      value: 1200,
      suffix: "+",
      label: language === 'fr' ? "Certificats délivrés" : "Certificates issued", // fallback
      color: "var(--amber-warn)",
      bgColor: "rgba(245,158,11,0.12)",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-obsidian)] via-[var(--bg-surface)] to-[var(--bg-obsidian)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <FadeInChild key={stat.label}>
              <div className="text-center group">
                <div
                  className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ background: stat.bgColor }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2 + i * 0.2}
                  />
                </div>
                <div className="text-[var(--text-sm)] text-[var(--text-muted)]">{stat.label}</div>
              </div>
            </FadeInChild>
          ))}
        </div>
      </div>
    </section>
  );
}
