"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { transitions } from "@/lib/utils";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t = dictionaries[language].hero;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section suppressHydrationWarning className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-purple-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
      />

      {/* Radial Gradient Overlay to darken the edges */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(88,28,135,0.8)_100%)]" />

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-[120px] animate-float z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-fuchsia-500 opacity-20 blur-[100px] animate-float z-0" style={{ animationDelay: "2s" }} />

      <div suppressHydrationWarning className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center text-center">
        
        {/* Pre-title Badge */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.enter, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm mb-8"
        >
          <Sparkles size={14} className="text-purple-300" />
          <span>{t.badge}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.enter, delay: 0.2 }}
          className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
        >
          {t.titleStart}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">
            {t.titleHighlight}
          </span>
          {t.titleEnd}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.enter, delay: 0.3 }}
          className="text-lg md:text-xl text-purple-100/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.enter, delay: 0.4 }}
          className="w-full max-w-2xl"
        >
          <form 
            onSubmit={handleSearch}
            className="relative flex items-center w-full bg-white rounded-full shadow-2xl overflow-hidden p-1.5 focus-within:ring-4 focus-within:ring-purple-500/30 transition-all"
          >
            <div className="pl-5 pr-2 text-gray-400">
              <Search size={24} />
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 w-full py-4 px-2 text-gray-800 bg-transparent outline-none text-lg placeholder-gray-400"
            />
            <button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              {t.searchButton}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/50 uppercase tracking-widest">{t.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Search size={16} className="text-white/50 opacity-0 absolute" aria-hidden="true" />
          <div className="w-4 h-4 border-r-2 border-b-2 border-white/50 rotate-45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
