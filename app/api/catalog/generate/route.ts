import { renderToBuffer } from '@react-pdf/renderer';
import React from 'react';
import PremiumCatalog from '@/components/pdf/premium/PremiumCatalog';

export async function GET() {
  try {
    const buffer = await renderToBuffer(React.createElement(PremiumCatalog));
    
    return new Response(buffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="ZiryabTec_Catalogue_Premium_2026.pdf"',
        // Cache management
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
    });
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    return new Response('Failed to generate catalog PDF', { status: 500 });
  }
}
