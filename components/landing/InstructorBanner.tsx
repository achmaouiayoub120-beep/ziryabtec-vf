"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";

export default function InstructorBanner() {
  const { language } = useLanguage();
  const t = dictionaries[language].homeBanner;

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--accent)] to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">{t.title}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <a 
          href="/devenir-formateur" 
          className="inline-flex items-center gap-2 bg-white text-[var(--accent)] hover:bg-[var(--bg-alt)] px-8 py-4 rounded-md font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          {t.button}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
