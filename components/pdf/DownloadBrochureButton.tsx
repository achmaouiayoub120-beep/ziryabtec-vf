"use client";

import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface DownloadBrochureButtonProps {
  courseId: string;
  language?: "fr" | "en";
}

export default function DownloadBrochureButton({ courseId, language = "fr" }: DownloadBrochureButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if wrapped in Link
    setIsGenerating(true);
    
    try {
      const response = await fetch(`/api/brochure/${courseId}/generate`);
      
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Brochure_${courseId}_ZiryabTec.pdf`;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Une erreur est survenue lors de la génération de la brochure. Veuillez réessayer.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 bg-[var(--bg-alt)] hover:bg-[var(--accent)] text-[var(--text-primary)] hover:text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm disabled:opacity-70 group"
    >
      {isGenerating ? (
        <Loader2 size={16} className="animate-spin text-[var(--accent)] group-hover:text-white" />
      ) : (
        <Download size={16} className="text-[var(--accent)] group-hover:text-white" />
      )}
      {isGenerating 
        ? "Génération..." 
        : "Télécharger la Brochure"}
    </button>
  );
}
