"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Course, Department, Level } from "@/types";
import { CourseCard } from "./CourseCard";
import { Search, Filter, RotateCcw, BookOpen, Layers } from "lucide-react";

interface CourseFiltersProps {
  initialCourses: Course[];
  initialDept?: string;
  initialLevel?: string;
}

const DEPARTMENTS: { label: string; value: string }[] = [
  { label: "All Departments", value: "ALL" },
  { label: "Sciences", value: "Sciences" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Humanities", value: "Humanities" },
  { label: "Languages", value: "Languages" },
  { label: "Business", value: "Business" },
  { label: "Arts", value: "Arts" },
  { label: "Technology", value: "Technology" },
];

const LEVELS: { label: string; value: string }[] = [
  { label: "All Levels", value: "ALL" },
  { label: "A-Level", value: "A-Level" },
  { label: "GCSE", value: "GCSE" },
  { label: "BTEC", value: "BTEC" },
];

export function CourseFilters({
  initialCourses,
  initialDept,
  initialLevel,
}: CourseFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDept || "ALL");
  const [selectedLevel, setSelectedLevel] = useState(initialLevel || "ALL");
  const [sortBy, setSortBy] = useState<"featured" | "title">("featured");

  useEffect(() => {
    if (initialDept) setSelectedDept(initialDept);
    if (initialLevel) setSelectedLevel(initialLevel);
  }, [initialDept, initialLevel]);

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      // Search term matching
      const matchesSearch =
        searchTerm.trim() === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.examBoard.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.teacher.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Department matching
      const matchesDept =
        selectedDept === "ALL" || course.department === selectedDept;

      // Level matching
      const matchesLevel =
        selectedLevel === "ALL" || course.level === selectedLevel;

      return matchesSearch && matchesDept && matchesLevel;
    }).sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      // Featured first, then title
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [initialCourses, searchTerm, selectedDept, selectedLevel, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedDept("ALL");
    setSelectedLevel("ALL");
    setSortBy("featured");
  };

  const isFiltered =
    searchTerm !== "" || selectedDept !== "ALL" || selectedLevel !== "ALL";

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white dark:bg-[#0E1626] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by course title, subject, exam board or faculty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#080D1A] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#C59B27] focus:outline-none transition-colors"
              aria-label="Search courses"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-by" className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
              Sort By:
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "featured" | "title")}
              className="bg-slate-50 dark:bg-[#080D1A] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-800 dark:text-slate-200 focus:border-[#C59B27] focus:outline-none"
            >
              <option value="featured">Featured & Recommended</option>
              <option value="title">Course Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Level Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mr-2">
            <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
            Qualification Level:
          </span>
          {LEVELS.map((lvl) => (
            <button
              key={lvl.value}
              type="button"
              onClick={() => setSelectedLevel(lvl.value)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                selectedLevel === lvl.value
                  ? "bg-[#0B1E36] dark:bg-[#C59B27] text-white dark:text-[#0B1E36] shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Department Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#C59B27]" />
            Department:
          </span>
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.value}
              type="button"
              onClick={() => setSelectedDept(dept.value)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedDept === dept.value
                  ? "bg-[#C59B27] text-[#0B1E36] font-bold shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {dept.label}
            </button>
          ))}

          {/* Reset button if active filter */}
          {isFiltered && (
            <button
              type="button"
              onClick={resetFilters}
              className="ml-auto inline-flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 hover:underline px-2 py-1 font-semibold"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 px-1">
        <p>
          Showing <span className="font-bold text-[#0B1E36] dark:text-white">{filteredCourses.length}</span> of {initialCourses.length} programmes
        </p>
        {(selectedDept !== "ALL" || selectedLevel !== "ALL" || searchTerm) && (
          <p className="text-xs text-[#C59B27]">Filtered view active</p>
        )}
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white dark:bg-[#0E1626] rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <h3 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white mb-2">
            No courses matched your query
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            We couldn't find any courses matching your current search terms and filter criteria. Try adjusting your keyword or selecting "All Departments".
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 bg-[#0B1E36] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#132B4F] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Clear Filters & Show All</span>
          </button>
        </div>
      )}
    </div>
  );
}
