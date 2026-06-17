import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrochureView from "./BrochureView";
import { getCourseById } from "@/lib/data/mockCourse";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.id);

  return {
    title: `Brochure : ${course.fr.title} | ZiryabTec`,
    description: `Découvrez la brochure détaillée de la formation : ${course.fr.title}.`,
  };
}

export default async function FormationBrochurePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.id);
  
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#F8F7F4]">
        <BrochureView course={course} />
      </main>
      <Footer />
    </>
  );
}
