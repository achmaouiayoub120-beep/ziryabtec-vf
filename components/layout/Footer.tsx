"use client";

import { Github, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const { language } = useLanguage();
  const t = dictionaries[language].footer;

  const footerLinks = {
    plateforme: [
      { label: t.links.platform.items[0], href: "/courses" },
      { label: t.links.platform.items[2], href: "/formations" },
      { label: t.links.platform.items[3], href: "/courses" },
      { label: language === 'fr' ? "Entreprises" : "Business", href: "/about" },
    ],
    ressources: [
      { label: t.links.company.items[2], href: "/blog" },
      { label: language === 'fr' ? "Documentation" : "Documentation", href: "/blog" },
      { label: "FAQ", href: "/faqs" },
      { label: language === 'fr' ? "Communauté" : "Community", href: "/blog" },
      { label: language === 'fr' ? "Devenir Formateur" : "Become an Instructor", href: "/devenir-formateur" },
      { label: language === 'fr' ? "Vérifier un certificat" : "Verify a certificate", href: "/formations" },
    ],
    legal: [
      { label: t.links.legal.items[2], href: "/mentions-legales" },
      { label: t.links.legal.items[0], href: "/cgv" },
      { label: t.links.legal.items[1], href: "/confidentialite" },
      { label: "Cookies", href: "/cookies" },
    ],
  };

  return (
    <footer suppressHydrationWarning className="relative border-t border-[var(--border)] bg-white">
      <div suppressHydrationWarning className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start gap-0 mb-4">
              <div className="relative">
                <GraduationCap 
                  size={16} 
                  className="absolute -top-1 left-[4px] text-[#2CA5D1] rotate-[-15deg]" 
                  strokeWidth={2.5}
                />
                <img src="/logo.png" alt="ZiryabTec" className="h-14 w-auto" />
              </div>
              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#1A3B5C] -mt-0.5 ml-[2px] opacity-70">
                {language === 'fr' ? 'Centre de Formation' : 'Training Center'}
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 max-w-sm">
              {t.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[var(--accent)]" /> 
                <a href="https://maps.app.goo.gl/Casablanca" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                  Casablanca, Maroc
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[var(--accent)]" /> contact@ziryabtec.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[var(--accent)]" /> +212 6 123 456
              </div>
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 font-display">
              {t.links.platform.title}
            </h4>
            <ul className="space-y-4">
              {footerLinks.plateforme.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 font-display">
              {language === 'fr' ? 'Ressources' : 'Resources'}
            </h4>
            <ul className="space-y-4">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 font-display">
              {t.links.legal.title}
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-[var(--text-muted)]">
            {t.rights}
          </p>
          <div className="flex items-center gap-2 text-sm font-normal text-slate-500">
            <span>{language === 'fr' ? 'Fièrement conçu au Maroc' : 'Proudly engineered in Morocco'}</span>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[2px] opacity-80">
              <rect width="16" height="11" fill="#C1272D"/>
              <path d="M8 3.5L8.58779 5.30902H10.4894L8.95081 6.42197L9.53859 8.23098L8 7.11803L6.46141 8.23098L7.04919 6.42197L5.51057 5.30902H7.41221L8 3.5Z" fill="#006233"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
