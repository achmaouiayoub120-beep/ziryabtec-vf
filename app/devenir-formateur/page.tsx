"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { 
  UploadCloud, 
  CheckCircle2, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Linkedin, 
  Users, 
  Calendar, 
  Award,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

export default function DevenirFormateurPage() {
  const { language } = useLanguage();
  const t = dictionaries[language].devenirFormateur;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // Traductions locales pour les avantages (benefits)
  const benefits = language === 'fr' ? [
    {
      icon: <Users className="w-6 h-6 text-[var(--accent)]" />,
      title: "Impact Direct",
      desc: "Formez la nouvelle génération d'experts IT et transmettez votre passion."
    },
    {
      icon: <Calendar className="w-6 h-6 text-[var(--accent)]" />,
      title: "Flexibilité Totale",
      desc: "Animez vos sessions en présentiel, en ligne ou en format hybride selon vos disponibilités."
    },
    {
      icon: <Award className="w-6 h-6 text-[var(--accent)]" />,
      title: "Réseau d'Excellence",
      desc: "Rejoignez une communauté prestigieuse d'experts certifiés."
    }
  ] : [
    {
      icon: <Users className="w-6 h-6 text-[var(--accent)]" />,
      title: "Direct Impact",
      desc: "Train the new generation of IT experts and pass on your passion."
    },
    {
      icon: <Calendar className="w-6 h-6 text-[var(--accent)]" />,
      title: "Total Flexibility",
      desc: "Run your sessions on-site, online or in a hybrid format according to your availability."
    },
    {
      icon: <Award className="w-6 h-6 text-[var(--accent)]" />,
      title: "Network of Excellence",
      desc: "Join a prestigious community of certified experts."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20 min-h-screen bg-[var(--bg)] relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[var(--accent)]/10 to-transparent z-0" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px] z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] z-0 pointer-events-none" />

        <SectionWrapper id="devenir-formateur" className="relative z-10 pt-10">
          <FadeInChild>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Colonne Texte (Gauche sur desktop, Haut sur mobile) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-sm font-bold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    {t.badge}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-[var(--text-primary)] leading-tight">
                    {t.titleStart} <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-600">
                      {t.titleHighlight}
                    </span>
                  </h1>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md">
                    {t.subtitle}
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-[var(--border)] max-w-md">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--border)] shadow-sm flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent)] group-hover:shadow-md transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[var(--text-primary)] text-lg mb-1">{benefit.title}</h4>
                        <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne Formulaire (Droite sur desktop, Bas sur mobile) */}
              <div className="lg:col-span-7">
                <div className="elite-card bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border-t-4 border-t-[var(--accent)] relative overflow-hidden">
                  
                  {/* Subtle pattern overlay inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500 relative z-10">
                      <div className="w-24 h-24 bg-[var(--success)]/10 rounded-full flex items-center justify-center mb-8 relative">
                        <div className="absolute inset-0 border-4 border-[var(--success)]/20 rounded-full animate-ping" />
                        <CheckCircle2 className="w-12 h-12 text-[var(--success)] relative z-10" />
                      </div>
                      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-display">
                        {t.successTitle}
                      </h2>
                      <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto">
                        {t.successDesc}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                      
                      {/* Section 1 : Informations Personnelles */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] font-bold font-display shadow-sm">1</div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">{t.section1}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.nameLabel} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                              <input
                                type="text"
                                id="name"
                                required
                                placeholder={t.namePlaceholder}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]/50 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.emailLabel} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                              <input
                                type="email"
                                id="email"
                                required
                                placeholder={t.emailPlaceholder}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]/50 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.phoneLabel} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                              <input
                                type="tel"
                                id="phone"
                                required
                                placeholder={t.phonePlaceholder}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]/50 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="border-[var(--border)]" />

                      {/* Section 2 : Profil Professionnel */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] font-bold font-display shadow-sm">2</div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">{t.section2}</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="domain" className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.domainLabel} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)] z-10" />
                              <select
                                id="domain"
                                required
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]/50 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all cursor-pointer appearance-none relative"
                              >
                                <option value="">{t.domainPlaceholder}</option>
                                <option value="cybersecurite">Cybersécurité</option>
                                <option value="cloud">Cloud Computing</option>
                                <option value="systeme">Système</option>
                                <option value="reseaux">Réseaux</option>
                                <option value="ia">Intelligence Artificielle</option>
                              </select>
                              {/* Custom caret */}
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="linkedin" className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.linkedinLabel} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A66C2]" />
                              <input
                                type="url"
                                id="linkedin"
                                required
                                placeholder={t.linkedinPlaceholder}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]/50 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="border-[var(--border)]" />

                      {/* Section 3 : Pièces jointes & Message */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] font-bold font-display shadow-sm">3</div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">{t.section3}</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.cvLabel} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative border-2 border-dashed border-[var(--border)] bg-[var(--bg-alt)]/30 rounded-2xl p-10 text-center hover:bg-[var(--accent-light)]/50 hover:border-[var(--accent)] transition-all cursor-pointer group">
                              <input
                                type="file"
                                id="cv"
                                accept=".pdf"
                                required
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                              />
                              <div className="flex flex-col items-center justify-center gap-3">
                                {fileName ? (
                                  <>
                                    <FileText className="w-14 h-14 text-[var(--accent)]" />
                                    <span className="text-base font-semibold text-[var(--text-primary)]">{fileName}</span>
                                    <span className="text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">{t.cvDragDrop}</span>
                                  </>
                                ) : (
                                  <>
                                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                      <UploadCloud className="w-8 h-8 text-[var(--accent)]" />
                                    </div>
                                    <span className="text-base font-semibold text-[var(--text-primary)] mt-3">{t.cvClickAdd}</span>
                                    <span className="text-sm text-[var(--text-muted)]">{t.cvFormat}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)]">
                              {t.messageLabel}
                            </label>
                            <textarea
                              id="message"
                              rows={5}
                              placeholder={t.messagePlaceholder}
                              className="w-full p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]/50 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-y"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      {/* Explicitly Blue Solid Button to ensure proper display */}
                      <div className="pt-8">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-3 bg-[#1A56DB] hover:bg-[#1344B8] text-white py-4 px-8 rounded-xl font-bold text-lg shadow-[0_4px_20px_rgba(26,86,219,0.3)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Envoi en cours...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              {t.submitButton}
                              <ArrowRight className="w-5 h-5" />
                            </span>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </FadeInChild>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
