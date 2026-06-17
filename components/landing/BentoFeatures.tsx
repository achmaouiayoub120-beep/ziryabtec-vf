"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Video, Award, BarChart3, Zap, Brain, User } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

export default function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].features;

  const features = [
    {
      icon: Bot,
      title: t.cards.ai.title,
      description: t.cards.ai.desc,
      size: "col-span-2 row-span-2",
      accent: "blue" as const,
      preview: (
        <div className="mt-6 space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] shrink-0"><User size={14} /></div>
            <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-[var(--text-primary)]">
              {language === 'fr' ? "C'est quoi self en Python ?" : "What is self in Python?"}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[var(--accent)] shrink-0"><Bot size={16} /></div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-[var(--text-primary)]">
              <code className="bg-blue-100 px-1 rounded text-[var(--accent)]">self</code> {language === 'fr' ? "fait référence à l'instance courante de la classe." : "refers to the current instance of the class."}
              <span className="block text-[var(--accent)] mt-1.5 text-xs font-bold">{language === 'fr' ? "[Voir à 14:32 dans la vidéo →]" : "[See at 14:32 in video →]"}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Zap,
      title: language === 'fr' ? "Quiz Auto-Générés" : "Auto-Generated Quizzes",
      description: language === 'fr' ? "L'IA analyse la transcription de chaque leçon et génère des quiz pertinents en un clic." : "AI analyzes each lesson's transcript and generates relevant quizzes in one click.",
      size: "col-span-1 row-span-1",
      accent: "cyan" as const,
    },
    {
      icon: BarChart3,
      title: language === 'fr' ? "Analytics Temps Réel" : "Real-Time Analytics",
      description: language === 'fr' ? "Streak, progression, graphiques d'activité — votre dashboard personnel façon Command Center." : "Streak, progress, activity charts — your personal Command Center dashboard.",
      size: "col-span-1 row-span-1",
      accent: "emerald" as const,
    },
    {
      icon: Video,
      title: language === 'fr' ? "Lecteur Vidéo Premium" : "Premium Video Player",
      description: language === 'fr' ? "Controls custom, notes horodatées, vitesse variable, sous-titres automatiques, PiP natif — tout dans un lecteur conçu pour l'apprentissage." : "Custom controls, timestamped notes, variable speed, auto-subtitles, native PiP — all in a player built for learning.",
      size: "col-span-2 row-span-1",
      accent: "blue" as const,
      preview: (
        <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] overflow-hidden shadow-sm">
          <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative">
             <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--accent)]">
              <Video size={20} />
            </div>
            <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 px-2">
              <div className="flex-1 h-1 rounded-full bg-white/50 overflow-hidden">
                 <div className="h-full bg-[var(--accent)] w-[45%]" />
              </div>
              <span className="text-[10px] text-[var(--text-muted)] font-bold">12:34</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Award,
      title: t.cards.certifs.title,
      description: t.cards.certifs.desc,
      size: "col-span-1 row-span-1",
      accent: "cyan" as const,
      preview: (
        <div className="mt-4 p-4 rounded-xl border border-blue-100 bg-blue-50/50 relative overflow-hidden group">
          <div className="relative text-center">
            <div className="text-[10px] text-[var(--accent)] uppercase font-bold tracking-widest">{language === 'fr' ? 'Certificat' : 'Certificate'}</div>
            <div className="text-sm font-bold mt-1 text-[var(--text-primary)]">{language === 'fr' ? 'Python Avancé' : 'Advanced Python'}</div>
            <div className="text-[10px] text-[var(--success)] font-bold mt-1 flex items-center justify-center gap-1">✓ {language === 'fr' ? 'Vérifié' : 'Verified'}</div>
          </div>
        </div>
      ),
    },
    {
      icon: Brain,
      title: t.cards.adaptive.title,
      description: t.cards.adaptive.desc,
      size: "col-span-1 row-span-1",
      accent: "emerald" as const,
    },
  ];

  return (
    <SectionWrapper id="features" className="py-24 bg-[var(--bg-alt)]">
      <FadeInChild className="text-center mb-16">
        <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
          {t.subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-[var(--text-primary)]">
          {t.title}
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
          {t.description}
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto max-w-[1200px] mx-auto"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              initial: { opacity: 0, y: 20, filter: "blur(8px)" },
              animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
            }}
            className={feature.size}
          >
            <div className="elite-card h-full p-8 bg-white flex flex-col border border-[var(--border)] hover:border-[var(--accent)] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--accent)]">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">{feature.title}</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                {feature.description}
              </p>
              {feature.preview}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
