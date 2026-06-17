import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[var(--bg)]">
      <SectionWrapper className="max-w-4xl mx-auto text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all mb-10"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-12">
          Politique de confidentialité
        </h1>
        <div className="mx-auto text-[var(--text-secondary)] text-center space-y-8 leading-relaxed">
          <p className="text-lg">
            ZiryabTec accorde une grande importance à la protection de vos données personnelles. Cette politique décrit comment nous collectons, utilisons et protégeons vos informations.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">1. Collecte des données</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">2. Utilisation des données</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">3. Vos droits</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
