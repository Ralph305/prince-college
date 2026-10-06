import React from "react";
import Link from "next/link";
import { BookX, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 bg-amber-50 dark:bg-amber-950/40 text-[#C59B27] rounded-3xl flex items-center justify-center mx-auto shadow-sm">
          <BookX className="w-10 h-10" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white mt-1 mb-2">
            Academic Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            The page or syllabus you are seeking could not be located in the Prince College archives. It may have been archived or relocated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1E36] dark:bg-[#C59B27] text-white dark:text-[#0B1E36] font-semibold text-xs px-6 py-3 rounded-lg shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to College Home</span>
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
