"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Building } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  icon: React.ReactNode;
}

export default function PricingPreview() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].pricing;

  const tiers: PricingTier[] = [
    {
      name: t.plans.basic.name,
      price: "0",
      period: language === 'fr' ? "MAD / toujours" : "MAD / forever",
      description: t.plans.basic.desc,
      features: language === 'fr' ? [
        "3 cours gratuits",
        "Quiz basiques",
        "Certificats standard",
        "Communauté",
        "Support email",
      ] : [
        "3 free courses",
        "Basic quizzes",
        "Standard certificates",
        "Community access",
        "Email support",
      ],
      cta: t.plans.basic.cta,
      highlighted: false,
      icon: <Sparkles size={20} className="text-[var(--text-muted)]" />,
    },
    {
      name: t.plans.pro.name,
      price: "249",
      period: language === 'fr' ? "MAD / mois" : "MAD / month",
      description: t.plans.pro.desc,
      features: language === 'fr' ? [
        "Accès illimité à tous les cours",
        "Tuteur IA contextuel",
        "Quiz auto-générés avancés",
        "Certificats premium",
        "Parcours adaptatifs IA",
        "Notes horodatées illimitées",
        "Téléchargement des ressources",
        "Support prioritaire",
      ] : [
        "Unlimited access to all courses",
        "Contextual AI Tutor",
        "Advanced auto-generated quizzes",
        "Premium certificates",
        "Adaptive AI paths",
        "Unlimited timestamped notes",
        "Resource downloads",
        "Priority support",
      ],
      cta: t.plans.pro.cta,
      highlighted: true,
      icon: <Sparkles size={20} className="text-[var(--accent)]" />,
    },
    {
      name: t.plans.elite.name,
      price: "Custom",
      period: "",
      description: t.plans.elite.desc,
      features: language === 'fr' ? [
        "Tout le plan Pro",
        "Dashboard administrateur",
        "Reporting & analytics",
        "SSO / SAML",
        "Cours privés personnalisés",
        "Account manager dédié",
        "SLA garanti",
      ] : [
        "Everything in Pro",
        "Admin dashboard",
        "Reporting & analytics",
        "SSO / SAML",
        "Custom private courses",
        "Dedicated account manager",
        "Guaranteed SLA",
      ],
      cta: t.plans.elite.cta,
      highlighted: false,
      icon: <Building size={20} className="text-[var(--text-muted)]" />,
    },
  ];

  return (
    <SectionWrapper id="pricing" suppressHydrationWarning className="bg-white py-24">
      <FadeInChild className="text-center mb-16">
        <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
          {t.subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-[var(--text-primary)]">
          {t.title}
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          {t.description}
        </p>
      </FadeInChild>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={shouldReduceMotion ? {} : "initial"}
        whileInView={shouldReduceMotion ? {} : "animate"}
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.name}
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex"
          >
            <div className={`elite-card p-8 bg-white relative flex flex-col w-full ${
              tier.highlighted ? "border-2 border-[var(--accent)] shadow-xl scale-105 z-10" : "border border-[var(--border)]"
            }`}>
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {language === 'fr' ? 'Le plus populaire' : 'Most Popular'}
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {tier.icon}
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold text-[var(--text-primary)]">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm font-medium text-[var(--text-muted)]">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <Check
                      size={18}
                      className={`shrink-0 ${
                        tier.highlighted ? "text-[var(--accent)]" : "text-[var(--success)]"
                      }`}
                    />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                suppressHydrationWarning
                href={tier.name === "Entreprise" ? "/contact" : "/register"}
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  tier.highlighted 
                    ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-lg shadow-blue-200" 
                    : "bg-[var(--bg-alt)] text-[var(--text-primary)] hover:bg-[var(--border)]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
