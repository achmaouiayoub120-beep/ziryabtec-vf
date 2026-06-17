import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesPreview from "@/components/landing/CoursesPreview";
export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 min-h-screen">
        <CoursesPreview />
      </main>
      <Footer />
    </>
  );
}
