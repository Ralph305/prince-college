import React from "react";
import { Metadata } from "next";
import { getAllCourses } from "@/lib/courses";
import { CourseFilters } from "@/components/CourseFilters";
import { BookOpen, Layers, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Courses Directory | Prince College London",
  description:
    "Explore full-time GCSE, A-Level, and BTEC programmes at Prince College London. Search and filter by academic department and qualification level.",
};

interface CoursesPageProps {
  searchParams: Promise<{ dept?: string; level?: string }>;
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const resolvedParams = await searchParams;
  const courses = getAllCourses();

  return (
    <div className="space-y-12 pb-24">
      {/* Page Header */}
      <section className="bg-[#071424] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Curriculum & Qualifications
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">
              Course Directory & Syllabi
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Prince College offers an extensive curriculum across Sciences, Mathematics, Humanities, 
              Modern Languages, Business, Creative Arts, and Digital Technologies. Every course card features 
              its official qualification level and grading scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Course List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseFilters
          initialCourses={courses}
          initialDept={resolvedParams.dept}
          initialLevel={resolvedParams.level}
        />
      </section>
    </div>
  );
}
