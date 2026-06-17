import React from 'react';
import { Document } from '@react-pdf/renderer';
import { Course } from '@/lib/data/types';
import { registerFonts } from '@/lib/pdf/fonts';

// Import Pages
import { BrochureCover, BrochureContent } from './brochure/BrochurePages';

// Register fonts once
registerFonts();

export default function PremiumBrochure({ course }: { course: Course }) {
  return (
    <Document 
      author="ZiryabTec" 
      title={`Brochure - ${course.fr.title}`}
      subject="Brochure Formation"
      creator="ZiryabTec System"
    >
      <BrochureCover course={course} />
      <BrochureContent course={course} />
    </Document>
  );
}
