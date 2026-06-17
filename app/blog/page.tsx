"use client";

import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Comment l'IA transforme la cybersécurité en 2026",
    category: "Cybersécurité",
    date: "12 Mai 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 2,
    title: "Migration vers le Cloud : Les 5 erreurs à éviter",
    category: "Cloud",
    date: "05 Mai 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 3,
    title: "Pourquoi le DevSecOps est devenu indispensable",
    category: "DevOps",
    date: "28 Avril 2026",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 4,
    title: "L'importance de l'OSINT dans l'investigation numérique",
    category: "Cybersécurité",
    date: "15 Avril 2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 5,
    title: "Optimiser les performances de vos applications cloud",
    category: "Développement",
    date: "02 Avril 2026",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 6,
    title: "Comprendre l'Active Directory et ses vulnérabilités",
    category: "Système",
    date: "20 Mars 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
  }
];

export default function BlogPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[var(--bg-alt)]">
      <SectionWrapper>
        <FadeInChild className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all mb-10"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-6 text-center">
            Blog
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
            Découvrez nos derniers articles, actualités et expertises autour de la tech, du cloud et de la cybersécurité.
          </p>
        </FadeInChild>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={shouldReduceMotion ? {} : "initial"}
          animate={shouldReduceMotion ? {} : "animate"}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="elite-card group overflow-hidden bg-white flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-[var(--bg)]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-medium">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-[var(--border)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all group/link"
                  >
                    Lire l'article
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
