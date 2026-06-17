"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { transitions } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].cta;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={transitions.enter}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Glass container */}
        <div className="glass rounded-[var(--radius-xl)] p-10 md:p-16 relative overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--electric-blue)] via-transparent to-[var(--neon-cyan)] opacity-20" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
              {language === 'fr' ? 'Prêt à transformer ' : 'Ready to transform '}
              <GradientText>{language === 'fr' ? 'votre carrière' : 'your career'}</GradientText>
              <span className="text-[var(--text-primary)]"> ?</span>
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--text-secondary)] max-w-xl mx-auto mb-10">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" magnetic className="animate-pulse-glow">
                {t.primaryBtn}
                <ArrowRight size={18} />
              </Button>
              <p className="text-[var(--text-xs)] text-[var(--text-muted)]">
                {language === 'fr' ? '✓ Sans carte bancaire  ·  ✓ 3 cours offerts  ·  ✓ Annulation libre' : '✓ No credit card required  ·  ✓ 3 free courses  ·  ✓ Cancel anytime'}
              </p>
            </div>

            {/* Arabic tagline */}
            <p className="mt-8 text-[var(--text-sm)] text-[var(--text-muted)] font-mono" dir="rtl">
              علم بلا حدود — Un savoir sans frontières
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
