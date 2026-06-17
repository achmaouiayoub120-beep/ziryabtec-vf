import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CGVPage() {
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
          Conditions Générales de Vente
        </h1>
        <div className="mx-auto text-[var(--text-secondary)] text-center space-y-8 leading-relaxed">
          <p className="text-lg">
            Les présentes conditions générales de vente s'appliquent à toutes les formations et services proposés par ZiryabTec.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">1. Objet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">2. Prix et modalités de paiement</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">3. Inscription et annulation</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">4. Responsabilité</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
