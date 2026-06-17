"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Shield, Cloud, Terminal, Wifi, Brain, Facebook, Twitter, Instagram, Linkedin, Send, Download } from "lucide-react";
import Link from "next/link";
import { Course } from "@/lib/data/types";

const themeConfig: Record<string, { icon: any; mainColor: string; bgClass: string; darkClass: string; accentClass: string; gradientBase: string }> = {
  "Cybersécurité": { 
    icon: Shield, 
    mainColor: "#e60000",
    bgClass: "bg-[#e60000]",
    darkClass: "bg-[#b30000]",
    accentClass: "bg-[#ff1a1a]",
    gradientBase: "from-[#e60000] to-[#cc0000]"
  },
  "Cloud": { 
    icon: Cloud, 
    mainColor: "#0066cc",
    bgClass: "bg-[#0066cc]",
    darkClass: "bg-[#004d99]",
    accentClass: "bg-[#3385ff]",
    gradientBase: "from-[#0066cc] to-[#0052a3]"
  },
  "Système": { 
    icon: Terminal, 
    mainColor: "#009933",
    bgClass: "bg-[#009933]",
    darkClass: "bg-[#006622]",
    accentClass: "bg-[#1ab24d]",
    gradientBase: "from-[#009933] to-[#00802b]"
  },
  "Réseaux": { 
    icon: Wifi, 
    mainColor: "#6600cc",
    bgClass: "bg-[#6600cc]",
    darkClass: "bg-[#4d0099]",
    accentClass: "bg-[#8533ff]",
    gradientBase: "from-[#6600cc] to-[#5900b3]"
  },
  "IA": { 
    icon: Brain, 
    mainColor: "#e60073",
    bgClass: "bg-[#e60073]",
    darkClass: "bg-[#b30059]",
    accentClass: "bg-[#ff1a8c]",
    gradientBase: "from-[#e60073] to-[#cc0066]"
  },
};

export default function BrochureView({ course }: { course: Course }) {
  const content = course.fr;
  const theme = content.theme;
  const cfg = themeConfig[theme] || themeConfig["Cybersécurité"];
  const IconComp = cfg.icon;

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center py-12 px-4 sm:px-8">
      <Link href="/formations" className="fixed top-6 left-6 inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-medium z-50 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
        <ArrowLeft size={16} />
        Retour au catalogue
      </Link>

      {/* ── THE POSTER (A4 PROPORTION) ── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative w-full max-w-[800px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] ${cfg.bgClass}`}
        style={{ aspectRatio: "1 / 1.414" }} // A4 aspect ratio approximation (vertical flyer)
      >
        {/* Geometric Background Shapes (Origami Style) */}
        {/* Top-Right Triangle */}
        <div className={`absolute top-0 right-0 w-[60%] h-[40%] ${cfg.darkClass}`} style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        {/* Center Diagonal Slash */}
        <div className={`absolute top-1/4 -left-[20%] w-[150%] h-40 ${cfg.accentClass} opacity-80 -rotate-45`} />
        {/* Bottom-Right Large Triangle */}
        <div className={`absolute bottom-0 right-0 w-[50%] h-[60%] ${cfg.darkClass}`} style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }} />
        {/* Bottom-Left Small Accent */}
        <div className={`absolute bottom-0 left-0 w-[40%] h-[20%] ${cfg.accentClass}`} style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />

        {/* ── POSTER CONTENT ── */}
        <div className="relative z-10 w-full h-full flex flex-col p-8 sm:p-12 md:p-16 text-white">
          
          {/* Header Row */}
          <div className="flex justify-between items-start mb-16">
            <div className="max-w-[40%]">
              <h3 className="text-xl font-bold tracking-tight leading-tight">ZiryabTec<br/>presents:</h3>
            </div>
            <div className="text-right border-t border-white/40 pt-2 flex gap-8">
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest text-white/70 mb-1">DATE</span>
                <span className="block font-bold text-lg leading-tight">Sur Mesure</span>
                <span className="block text-sm text-white/80">{course.duration} Intensif</span>
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest text-white/70 mb-1">VENUE</span>
                <span className="block font-bold text-lg leading-tight">Présentiel &<br/>En Ligne</span>
              </div>
            </div>
          </div>

          {/* Title Area */}
          <div className="mb-16 relative">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black leading-[0.95] tracking-tight uppercase break-words pr-24">
              {content.title}
            </h1>
            <div className="absolute top-1/2 -translate-y-1/2 right-0">
              {/* Massive Icon / Badge mimicking the Angular Logo placement */}
              <div className={`flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-br ${cfg.gradientBase} shadow-2xl`}>
                <IconComp size={64} className="text-white drop-shadow-md" />
              </div>
            </div>
          </div>

          {/* Two Columns Area (Key Features / What you get here) */}
          <div className="grid grid-cols-2 gap-12 flex-grow">
            
            {/* Left Column: KEY FEATURES (Objectifs) */}
            <div className="flex flex-col">
              <div className="mb-6 relative inline-block">
                <h4 className="text-sm font-bold uppercase tracking-widest border-b border-white/40 pb-2">KEY FEATURES:</h4>
                <div className="absolute -top-1 -right-3 w-4 h-4 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
              </div>
              
              <ul className="space-y-4">
                <li className="font-bold text-xl leading-tight border-b border-white/20 pb-4">
                  Formation Intensive<br/>en {content.category}
                </li>
                {content.objectives.slice(0, 5).map((obj, i) => (
                  <li key={i} className="text-sm font-medium text-white/90 leading-snug">
                    <span className="font-bold mr-1">•</span> {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: WHAT YOU GET HERE (Programme & Infos) */}
            <div className="flex flex-col">
              <div className="mb-6 relative inline-block">
                <h4 className="text-sm font-bold uppercase tracking-widest border-b border-white/40 pb-2">WHAT YOU GET HERE:</h4>
                <div className="absolute -top-1 -right-3 w-4 h-4 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
              </div>

              <div className="space-y-6">
                <p className="text-lg italic font-medium leading-snug">
                  Un programme d'excellence adapté au marché du travail !
                </p>
                <div className="space-y-4">
                  {content.curriculum.slice(0, 3).map((mod, i) => (
                    <div key={i}>
                      <span className="block font-bold mb-1">{mod.title}</span>
                      {mod.lessons.slice(0,2).map((l:any, idx:number) => (
                        <span key={idx} className="block text-sm text-white/80 italic">- {l.title}</span>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/20">
                  <span className="block font-bold">Inclus :</span>
                  <span className="block text-sm text-white/90">✓ Support de cours PDF</span>
                  <span className="block text-sm text-white/90">✓ Accès aux Labs virtuels</span>
                  <span className="block text-sm text-white/90">✓ Attestation ZiryabTec</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Footer Row */}
          <div className="mt-auto pt-6 flex justify-between items-end border-b-2 border-white pb-2">
            <div>
              <span className="block text-xs uppercase tracking-widest text-white/70 mb-1">COURSE BY</span>
              <span className="block font-bold text-lg">{content.instructor} | ZiryabTec Experts</span>
            </div>
            <div className="text-right">
              <div className="flex gap-3 justify-end mb-2">
                <Facebook size={16} />
                <Twitter size={16} />
                <Instagram size={16} />
                <Linkedin size={16} />
              </div>
              <span className="block text-sm font-bold">@ZiryabTec</span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ── CTA BUTTONS (Devis & Download) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-[800px] z-10"
      >
        <a 
          href="mailto:contact@ziryabtec.com"
          className="flex-1 w-full flex justify-center items-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(26,86,219,0.3)]"
        >
          <Send size={20} />
          Demander un devis
        </a>
        <a 
          href="/catalogue-dummy.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 w-full flex justify-center items-center gap-3 bg-transparent border-2 border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1"
        >
          <Download size={20} />
          Télécharger la brochure (PDF)
        </a>
      </motion.div>
    </div>
  );
}
