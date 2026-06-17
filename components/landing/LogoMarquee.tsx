"use client";

import { motion, useReducedMotion } from "framer-motion";

const logos = [
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

export default function LogoMarquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-12 overflow-hidden bg-transparent">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

      <div className="flex items-center">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors select-none group"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[var(--border)] flex items-center justify-center p-2 shadow-sm group-hover:border-[var(--accent)] transition-all">
                <img src={logo.url} alt={logo.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="text-sm font-bold tracking-tight font-display">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
