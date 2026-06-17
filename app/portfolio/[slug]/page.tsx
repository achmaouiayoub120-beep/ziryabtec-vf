import { notFound } from "next/navigation";
import { getProjectBySlug, portfolioProjects } from "@/lib/data/portfolioData";
import PortfolioDetailClient from "@/components/portfolio/PortfolioDetailClient";

/* ══════════════════════════════════════════════════════════
   Portfolio Detail Page — /portfolio/[slug]
   Server Component wrapper for static generation
   ══════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
