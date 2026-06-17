"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, GraduationCap } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ── SVG Flag Components ─────────────────────────────────── */

/** Drapeau du Maroc (simplifié) */
function FlagMA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" className={className} aria-label="Drapeau du Maroc">
      <rect width="900" height="600" fill="#C1272D" />
      <path
        d="M450 175l29.4 90.5h95.1l-76.9 55.9 29.4 90.5L450 356l-76.9 55.9 29.4-90.5-76.9-55.9h95.1z"
        fill="none"
        stroke="#006233"
        strokeWidth="18"
      />
    </svg>
  );
}

/** Drapeau de la France */
function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" className={className} aria-label="Drapeau de la France">
      <rect width="300" height="600" fill="#002395" />
      <rect x="300" width="300" height="600" fill="#FFFFFF" />
      <rect x="600" width="300" height="600" fill="#ED2939" />
    </svg>
  );
}

/** Drapeau du Royaume-Uni */
function FlagEN({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-label="Flag of the United Kingdom">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

const translations = {
  fr: {
    home: "Accueil",
    courses: "Formations",
    partners: "Partenaires",
    faqs: "FAQ",
    about: "À propos",
    profile: "Mon Profil",
    register: "S'inscrire gratuitement"
  },
  en: {
    home: "Home",
    courses: "Courses",
    partners: "Partners",
    faqs: "FAQs",
    about: "About Us",
    profile: "My Profile",
    register: "Sign Up Free"
  }
};

const navLinks = [
  { key: "home", href: "/" },
  { key: "courses", href: "/courses" },
  { key: "partners", href: "/partners" },
  { key: "faqs", href: "/faqs" },
  { key: "about", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div suppressHydrationWarning className="bg-[var(--accent)] text-white text-[12px] py-2 px-6 md:px-12 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-6">
          <a href="tel:+2126123456" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
            <Phone size={14} />
            <span>(+212) 6 123 456</span>
          </a>
          <a href="mailto:ziryabtec@gmail.com" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
            <Mail size={14} />
            <span>ziryabtec@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Casablanca, Maroc
          </span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[var(--gold)] transition-colors"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors"><Youtube size={14} /></a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION ── */}
      <motion.header
        initial={shouldReduceMotion ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-white",
          isScrolled ? "border-b border-[var(--border)] shadow-[var(--card-shadow)]" : "border-b border-transparent"
        )}
      >
        <nav suppressHydrationWarning className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          {/* Logo — Centre de Formation */}
          <a href="/" className="flex items-center gap-3 group" aria-label="ZiryabTec Home">
            <div className="flex flex-col items-start">
              <div className="relative">
                <GraduationCap 
                  size={18} 
                  className="absolute -top-1.5 left-[5px] text-[#2CA5D1] rotate-[-15deg] transition-transform duration-300 group-hover:rotate-[-20deg]" 
                  strokeWidth={2.5}
                />
                <img src="/logo.png" alt="ZiryabTec" className="h-16 w-auto" />
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#1A3B5C] -mt-1 ml-[2px] opacity-70">
                {language === 'fr' ? 'Centre de Formation' : 'Training Center'}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative group"
              >
                {t[link.key as keyof typeof t]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* ── Language Switcher — Dual SVG Flags ── */}
            <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Language selection">
              <button
                onClick={() => setLanguage("fr")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 transition-all duration-200 text-[12px] font-bold tracking-wide",
                  language === "fr"
                    ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)] shadow-sm"
                    : "border-transparent bg-[var(--bg-alt)] text-[var(--text-muted)] hover:border-[var(--border)] hover:text-[var(--text-secondary)]"
                )}
                aria-label="Français"
                role="radio"
                aria-checked={language === "fr"}
              >
                <FlagFR className="w-5 h-3.5 rounded-[2px] shadow-sm" />
                <span>FR</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 transition-all duration-200 text-[12px] font-bold tracking-wide",
                  language === "en"
                    ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)] shadow-sm"
                    : "border-transparent bg-[var(--bg-alt)] text-[var(--text-muted)] hover:border-[var(--border)] hover:text-[var(--text-secondary)]"
                )}
                aria-label="English"
                role="radio"
                aria-checked={language === "en"}
              >
                <FlagEN className="w-5 h-3.5 rounded-[2px] shadow-sm" />
                <span>EN</span>
              </button>
            </div>

            {/* ── Auth buttons (MASQUÉS temporairement sur directive du professeur) ──
            <div className="hidden lg:flex items-center gap-4">
              <a href="/profile" className="flex items-center gap-2 text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <UserCircle size={20} />
                {t.profile}
              </a>
              <a 
                href="/register"
                className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-5 py-2.5 rounded-[8px] font-medium text-[15px] transition-all transform hover:scale-[0.98] active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                {t.register}
              </a>
            </div>
            ── Fin du bloc masqué ── */}

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 top-[112px] md:top-[120px] z-30 bg-white lg:hidden border-t border-[var(--border)]"
          >
            <div className="flex flex-col p-8 gap-6 overflow-y-auto h-full pb-32">
              {/* Mobile Language Switcher — Dual Flags */}
              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={() => setLanguage("fr")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all text-sm font-bold flex-1 justify-center",
                    language === "fr"
                      ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)]"
                      : "border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)]"
                  )}
                >
                  <FlagFR className="w-6 h-4 rounded-[2px]" />
                  Français
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all text-sm font-bold flex-1 justify-center",
                    language === "en"
                      ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)]"
                      : "border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)]"
                  )}
                >
                  <FlagEN className="w-6 h-4 rounded-[2px]" />
                  English
                </button>
              </div>

              <div className="h-px bg-[var(--border)] my-2 w-full" />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-display font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  {t[link.key as keyof typeof t]}
                </motion.a>
              ))}
              
              {/* ── Auth buttons mobiles (MASQUÉS temporairement) ──
              <div className="h-px bg-[var(--border)] my-4 w-full" />
              <a href="/profile" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-3 text-lg font-medium text-[var(--text-secondary)]">
                <UserCircle size={24} /> {t.profile}
              </a>
              <a 
                href="/register" 
                onClick={() => setIsMobileOpen(false)} 
                className="bg-[var(--accent)] text-white text-center px-6 py-4 rounded-[8px] font-medium text-lg mt-4"
              >
                {t.register}
              </a>
              ── Fin du bloc masqué ── */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
