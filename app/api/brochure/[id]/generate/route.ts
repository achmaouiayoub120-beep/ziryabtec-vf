import { renderToBuffer } from '@react-pdf/renderer';
import React from 'react';
import PremiumBrochure from '@/components/pdf/premium/PremiumBrochure';
import { getCourseById } from '@/lib/data/mockCourse';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const course = getCourseById(id);
    
    if (!course) {
      return new Response('Formation non trouvée', { status: 404 });
    }

    const buffer = await renderToBuffer(React.createElement(PremiumBrochure, { course }) as any);
    
    return new Response(buffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Brochure_${id}_ZiryabTec.pdf"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Failed to generate brochure PDF:', error);
    return new Response('Failed to generate brochure PDF', { status: 500 });
  }
}
