import fs from "fs";
import path from "path";
import { Course, Department, Level, GradesData } from "@/types";

// In fallback/bundled situations, import directly
import fallbackCourses from "../../data/courses.json";
import fallbackGrades from "../../data/grades.json";

export function getAllCourses(): Course[] {
  try {
    const filePath = path.join(process.cwd(), "data", "courses.json");
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent) as Course[];
    }
  } catch (error) {
    console.warn("Could not read courses.json from filesystem, falling back to static import:", error);
  }
  return fallbackCourses as Course[];
}

export function getCourseBySlug(slug: string): Course | undefined {
  const courses = getAllCourses();
  return courses.find((course) => course.slug.toLowerCase() === slug.toLowerCase());
}

export function getCoursesByDepartment(department: Department): Course[] {
  const courses = getAllCourses();
  return courses.filter((course) => course.department.toLowerCase() === department.toLowerCase());
}

export function getCoursesByLevel(level: Level): Course[] {
  const courses = getAllCourses();
  return courses.filter((course) => course.level.toLowerCase() === level.toLowerCase());
}

export function getFeaturedCourses(): Course[] {
  const courses = getAllCourses();
  return courses.filter((course) => course.featured);
}

export const DEPARTMENTS: Department[] = [
  "Sciences",
  "Mathematics",
  "Humanities",
  "Languages",
  "Business",
  "Arts",
  "Technology"
];

export const LEVELS: Level[] = ["GCSE", "A-Level", "BTEC"];

export function getGradesData(): GradesData {
  try {
    const filePath = path.join(process.cwd(), "data", "grades.json");
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent) as GradesData;
    }
  } catch (error) {
    console.warn("Could not read grades.json from filesystem, falling back to static import:", error);
  }
  return fallbackGrades as GradesData;
}
