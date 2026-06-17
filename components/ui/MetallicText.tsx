"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetallicTextProps {
  text: string;
  className?: string;
  secondaryText?: string;
}

export default function MetallicText({ text, className, secondaryText }: MetallicTextProps) {
  return (
    <div className={cn("relative flex flex-col items-start leading-none", className)}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-black tracking-tighter"
      >
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-silver-200 to-gray-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {text}
          {/* Metallic Sheen Overlay */}
          <motion.span
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
          />
        </span>
      </motion.h1>
      
      {secondaryText && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-1"
        >
          {secondaryText}
        </motion.span>
      )}
      
      {/* 3D Reflection effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent blur-sm -z-10 opacity-50" />
    </div>
  );
}
