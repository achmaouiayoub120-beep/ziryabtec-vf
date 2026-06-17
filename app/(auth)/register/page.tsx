"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Rocket, GraduationCap, Code, Globe, Cpu, Shield, BarChart3, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import MetallicText from "@/components/ui/MetallicText";
import { transitions, cn } from "@/lib/utils";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    terms: false,
  });
  const shouldReduceMotion = useReducedMotion();

  const update = (field: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const techIcons = [
    { Icon: Cpu, delay: 0 },
    { Icon: Code, delay: 0.5 },
    { Icon: Globe, delay: 1 },
    { Icon: Shield, delay: 1.5 },
    { Icon: BarChart3, delay: 2 },
    { Icon: GraduationCap, delay: 2.5 },
  ];

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* ── LEFT PANEL: IMMERSIVE VISUAL (45%) ── */}
      <div className="hidden lg:flex w-[45%] relative overflow-hidden bg-[#050510]">
        {/* Background Image with Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/register-bg.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#050510] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60" />

        {/* Floating Particles/Mesh Effect */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="mesh" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="rgba(100,150,255,0.3)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-30 flex flex-col justify-between w-full p-16">
          {/* Top: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo.png" alt="ZiryabTec" className="h-24 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
          </motion.div>

          {/* Center: Rocket Launch Animation */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Energy Burst */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
              />
            </div>

            {/* Light Trails & Rocket */}
            <div className="relative w-full h-full">
              {/* Dynamic Light Trails */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                {[...Array(5)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M -50 ${80 - i * 10} Q 200 ${50 - i * 5} 600 -100`}
                    stroke="url(#trail-grad)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                    transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity, 
                      delay: i * 0.8,
                      ease: "easeInOut" 
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="trail-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Rocket */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/4 top-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              >
                <Rocket size={64} className="rotate-45" />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500/60 blur-xl rounded-full"
                />
              </motion.div>

              {/* Floating Tech Icons along the trails */}
              {techIcons.map(({ Icon, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                    x: [0, 100 + i * 50],
                    y: [0, -100 - i * 30]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    delay: delay + 1,
                    ease: "linear"
                  }}
                  className="absolute left-1/3 top-1/2 text-blue-300/60"
                >
                  <Icon size={24} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT PANEL: CLEAN FORM (55%) ── */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm flex flex-col"
        >
          {/* Mobile Only Logo */}
          <a href="/" className="lg:hidden inline-flex items-center gap-2 mb-12 self-start">
            <img src="/logo.png" alt="ZiryabTec" className="h-10 w-auto" />
          </a>

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Créer votre compte</h1>
            <p className="text-gray-500 font-medium">L&apos;excellence technologique commence ici.</p>
          </div>

          {/* Social Auth */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-200 transition-all active:scale-95 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-bold text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-200 transition-all active:scale-95 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="text-sm font-bold text-gray-700">GitHub</span>
            </button>
          </div>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
            <span className="relative px-4 bg-white text-[11px] font-bold text-gray-400 uppercase tracking-widest">ou avec email</span>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
              <div className="relative group">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  id="name"
                  type="text"
                  placeholder="Ayoub Achmaoui"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Adresse email</label>
              <div className="relative group">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="pass" className="text-sm font-bold text-gray-700 ml-1">Mot de passe</label>
              <div className="relative group">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  id="pass"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-12 pl-12 pr-12 rounded-xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Premium Role Selector */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { id: 'student', label: 'Étudiant', desc: 'Je veux apprendre', icon: GraduationCap },
                { id: 'mentor', label: 'Formateur', desc: 'Je veux enseigner', icon: Cpu },
              ].map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => update('role', role.id)}
                  className={cn(
                    "flex flex-col items-start p-4 rounded-xl border transition-all text-left group",
                    form.role === role.id 
                      ? "border-blue-500 bg-blue-50/30 ring-4 ring-blue-500/5 shadow-sm" 
                      : "border-gray-100 bg-gray-50/30 hover:bg-gray-100/50"
                  )}
                >
                  <role.icon size={20} className={cn("mb-2 transition-transform group-hover:scale-110", form.role === role.id ? "text-blue-600" : "text-gray-400")} />
                  <span className={cn("text-sm font-bold block", form.role === role.id ? "text-blue-900" : "text-gray-700")}>{role.label}</span>
                  <span className="text-[10px] font-medium text-gray-500">{role.desc}</span>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                variant="primary" 
                className="w-full h-14 rounded-xl text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
                magnetic
              >
                S&apos;inscrire gratuitement
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm font-medium text-gray-500">
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">
              Se connecter
            </a>
          </p>

          <footer className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© 2026 ZiryabTec</span>
            <div className="flex gap-4">
              <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors">Confidentialité</a>
              <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors">Conditions</a>
            </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
