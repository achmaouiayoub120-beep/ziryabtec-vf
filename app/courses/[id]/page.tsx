import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseDetailsView from "@/components/courses/CourseDetailsView";
import { mockCourse } from "@/lib/data/mockCourse";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  
  // In a real application, you would fetch the course by resolvedParams.id
  // Here we use our new getCourseById utility
  const { getCourseById } = await import('@/lib/data/mockCourse');
  const course = getCourseById(resolvedParams.id);

  return {
    title: `${course.fr.title} | ZiryabTec`,
    description: `Découvrez notre formation : ${course.fr.title} sur ZiryabTec.`,
  };
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CourseDetailsView courseId={resolvedParams.id} />
      </main>
      <Footer />
    </>
  );
}
