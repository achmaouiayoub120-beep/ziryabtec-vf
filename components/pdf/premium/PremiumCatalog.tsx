import React from 'react';
import { Document } from '@react-pdf/renderer';
import { formationsData } from '@/lib/data/formations';
import { getDomainColor } from '@/lib/pdf/colors';
import { registerFonts } from '@/lib/pdf/fonts';

// Import Pages
import { CoverPage } from './pages/CoverPage';
import { TableOfContents } from './pages/TableOfContents';
import { KPIPage } from './pages/KPIPage';
import { DomainPage } from './pages/DomainPage';
import { FormationListPage } from './pages/FormationListPage';

// Register fonts once
registerFonts();

export default function PremiumCatalog() {
  // Group formations by theme
  const themes = Array.from(new Set(formationsData.map(f => f.theme)));
  
  // Calculate TOC sections
  let currentPage = 3; // Cover(1) + TOC(2)
  const tocSections: Array<{ title: string; page: number; color?: string }> = [
    { title: 'ZIRYABTEC EN CHIFFRES', page: currentPage++ }
  ];
  
  themes.forEach(theme => {
    tocSections.push({ 
      title: `DOMAINE: ${theme.toUpperCase()}`, 
      page: currentPage,
      color: getDomainColor(theme)
    });
    
    // Each theme has 1 domain page
    currentPage += 1;
    
    // Each theme has N formations pages (4 per page)
    const themeFormations = formationsData.filter(f => f.theme === theme);
    const numFormationPages = Math.ceil(themeFormations.length / 4);
    currentPage += numFormationPages;
  });

  return (
    <Document 
      author="ZiryabTec" 
      title="Catalogue des Formations 2026" 
      subject="Catalogue Premium"
      creator="ZiryabTec System"
    >
      <CoverPage />
      <TableOfContents sections={tocSections} />
      <KPIPage />
      
      {themes.map((theme, idx) => {
        const themeFormations = formationsData.filter(f => f.theme === theme);
        const color = getDomainColor(theme);
        
        // Chunk formations into pages of 4
        const chunks = [];
        for (let i = 0; i < themeFormations.length; i += 4) {
          chunks.push(themeFormations.slice(i, i + 4));
        }

        return (
          <React.Fragment key={idx}>
            <DomainPage domain={theme} color={color} formations={themeFormations} />
            {chunks.map((chunk, chunkIdx) => (
              <FormationListPage key={`${idx}-${chunkIdx}`} formations={chunk} />
            ))}
          </React.Fragment>
        );
      })}
    </Document>
  );
}
