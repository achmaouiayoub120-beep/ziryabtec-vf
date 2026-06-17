"use client";

import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface DownloadCatalogButtonProps {
  language: "fr" | "en";
  courses?: any;
}

export default function DownloadCatalogButton({ language }: DownloadCatalogButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/catalog/generate');
      
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = language === "fr" ? "Catalogue_Premium_ZiryabTec_2026.pdf" : "ZiryabTec_Premium_Catalog_2026.pdf";
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="shrink-0 flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-md disabled:opacity-70 disabled:hover:scale-100"
    >
      {isGenerating ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <Download size={18} />
      )}
      {isGenerating 
        ? "Génération en cours..." 
        : "Télécharger le catalogue (PDF)"}
    </button>
  );
}
