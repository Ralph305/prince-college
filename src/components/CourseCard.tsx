import React from "react";
import Link from "next/link";
import { Course } from "@/types";
import { BookOpen, Clock, Award, User, ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  // Department color accent
  const getDeptColor = (dept: string) => {
    switch (dept) {
      case "Sciences":
        return "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
      case "Mathematics":
        return "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800";
      case "Humanities":
        return "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
      case "Languages":
        return "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800";
      case "Business":
        return "bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800";
      case "Arts":
        return "bg-pink-50 text-pink-800 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800";
      case "Technology":
        return "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700";
    }
  };

  return (
    <article className="academic-card group bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:border-[#C59B27] dark:hover:border-[#D4AF37] flex flex-col justify-between">
      {/* Card Header with Badges */}
      <div className="p-6 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {/* Department badge */}
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${getDeptColor(course.department)}`}>
            {course.department}
          </span>

          {/* Prompt specified GRADE BADGE showing level & grading scale */}
          <div 
            className="inline-flex items-center gap-1.5 bg-[#FAF5E8] dark:bg-amber-950/40 border border-[#DFB847]/60 text-[#8F6C15] dark:text-[#E5C35D] px-2.5 py-1 rounded-md text-xs font-bold shadow-2xs"
            title={`Grading Scale: ${course.gradingScale}`}
          >
            <Award className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
            <span>Grade: {course.level} ({course.gradingScale})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white group-hover:text-[#C59B27] dark:group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
          <Link href={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
          {course.description}
        </p>

        {/* Quick meta pills */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 py-3 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Exam Board: {course.examBoard.split(" ")[0]}</span>
          </div>
          <div className="col-span-2 flex items-center gap-1.5 pt-1">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate">Faculty: {course.teacher.name}</span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="bg-slate-50 dark:bg-[#0A1220] px-6 py-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {course.yearGroup}
        </span>
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1E36] dark:text-[#D4AF37] group-hover:translate-x-0.5 transition-transform"
        >
          <span>Explore Course</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
        </Link>
      </div>
    </article>
  );
}
