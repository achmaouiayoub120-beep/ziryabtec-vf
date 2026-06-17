"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Building, PenTool, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Course } from "@/lib/data/types";

export default function SessionTabs({ course }: { course: Course }) {
  const { language } = useLanguage();
  const t = dictionaries[language].courseDetails;
  
  // Determine available tabs
  const availableTabs = [];
  if (course.sessions.inter) availableTabs.push("inter");
  if (course.sessions.intra) availableTabs.push("intra");
  if (course.sessions.surMesure) availableTabs.push("surMesure");

  const [activeTab, setActiveTab] = useState<string>(availableTabs[0] || "inter");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const getTabIcon = (id: string) => {
    if (id === "inter") return <Users size={20} />;
    if (id === "intra") return <Building size={20} />;
    return <PenTool size={20} />;
  };

  if (availableTabs.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-[var(--card-shadow)] border border-[var(--border)] overflow-hidden">
      <div className="p-6 border-b border-[var(--border)] bg-[var(--bg)]">
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">{t.sessions.title}</h3>
        <div className="flex flex-wrap gap-2">
          {availableTabs.map((tabId) => (
            <button
              key={tabId}
              onClick={() => {
                setActiveTab(tabId);
                setIsSubmitted(false);
              }}
              className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all ${
                activeTab === tabId 
                  ? "bg-[var(--accent)] text-white shadow-md" 
                  : "bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {getTabIcon(tabId)}
              <span>{(t.sessions[tabId as keyof typeof t.sessions] as any).label as string}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-[var(--text-secondary)] mb-8">
              {(t.sessions[activeTab as keyof typeof t.sessions] as any).desc as string}
            </p>

            {activeTab === "intra" && course.sessions.intra ? (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  Tarif Intra-entreprise
                </div>
                <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {course.sessions.intra.price} MAD <span className="text-lg font-medium text-[var(--text-secondary)]">{t.perGroup}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  Jusqu'à {course.sessions.intra.minParticipants} participants inclus.
                </p>
                <button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white py-4 rounded-xl font-medium text-lg transition-all shadow-md">
                  {(t.sessions.intra as any).cta as string}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === "inter" && course.sessions.inter && (
                  <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Calendar size={16} className="text-[var(--accent)]" />
                      <span>{t.nextSession}: <strong>{course.sessions.inter.nextDate}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <MapPin size={16} className="text-[var(--accent)]" />
                      <span>{t.location}: <strong>{course.sessions.inter.location}</strong></span>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">{t.form.name}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 bg-[var(--bg)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">{t.form.company}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 bg-[var(--bg)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">{t.form.email}</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 bg-[var(--bg)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">{t.form.phone}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 bg-[var(--bg)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">{t.form.message}</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 bg-[var(--bg)]" />
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle2 size={24} className="shrink-0" />
                    <p className="text-sm font-medium">{t.form.success}</p>
                  </div>
                ) : (
                  <button type="submit" className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white py-4 rounded-xl font-medium text-lg transition-all shadow-md">
                    {(t.sessions[activeTab as keyof typeof t.sessions] as any).cta as string}
                  </button>
                )}
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
