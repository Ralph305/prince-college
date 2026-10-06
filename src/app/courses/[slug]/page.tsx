import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { 
  getAllCourses, 
  getCourseBySlug, 
  getCoursesByDepartment 
} from "@/lib/courses";
import { 
  Award, 
  BookOpen, 
  Calendar, 
  Clock, 
  CreditCard, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  User,
  Briefcase
} from "lucide-react";
import { CourseCard } from "@/components/CourseCard";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Prince College London",
    };
  }

  return {
    title: `${course.title} (${course.level}) | Prince College London`,
    description: course.description,
    openGraph: {
      title: `${course.title} | Prince College London`,
      description: course.description,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = getCoursesByDepartment(course.department)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 2);

  return (
    <div className="space-y-12 pb-24">
      {/* Header Banner */}
      <section className="bg-[#071424] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-slate-300">{course.department}</span>
            <span>/</span>
            <span className="text-[#D4AF37] font-semibold">{course.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#0B1E36] border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-md font-semibold">
                  Department of {course.department}
                </span>

                {/* Grade Badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#FAF5E8] border border-[#DFB847] text-[#8F6C15] px-3 py-1 rounded-md text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Grade: {course.level} • {course.gradingScale}</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {course.description}
              </p>
            </div>

            {/* Quick CTA Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md w-full lg:w-80 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Tuition & Funding</span>
                <p className="text-sm font-bold text-white mt-1">{course.fees}</p>
              </div>
              <Link
                href={`/admissions?course=${course.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for this Course</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main 2 Columns: Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
                <span className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                  Duration
                </span>
                <p className="text-sm font-bold text-[#0B1E36] dark:text-white">{course.duration}</p>
              </div>

              <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
                <span className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                  Year Group
                </span>
                <p className="text-sm font-bold text-[#0B1E36] dark:text-white">{course.yearGroup}</p>
              </div>

              <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
                <span className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                  Exam Board
                </span>
                <p className="text-sm font-bold text-[#0B1E36] dark:text-white">{course.examBoard}</p>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0B1E36] dark:text-white flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[#C59B27]" />
                <span>Entry Requirements</span>
              </h2>
              <div className="p-4 bg-slate-50 dark:bg-[#080D1A] rounded-xl border border-slate-200 dark:border-slate-700/80 text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {course.entryRequirements}
              </div>
              <p className="text-xs text-slate-500">
                Applicants holding alternative qualifications (IGCSE, IB Middle Years, or overseas national diplomas) will have their equivalence assessed by the College Registry.
              </p>
            </div>

            {/* Assessment Method & Grading Scale */}
            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0B1E36] dark:text-white flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-[#C59B27]" />
                <span>Assessment Method & Grading Scheme</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.assessmentMethod}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                <span>Official Assessment Scale:</span>
                <span className="font-bold text-[#0B1E36] dark:text-[#D4AF37] px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded">
                  {course.gradingScale}
                </span>
                <Link href="/grades" className="text-[#C59B27] hover:underline font-semibold ml-auto">
                  View full grading criteria table →
                </Link>
              </div>
            </div>

            {/* Key Topics / Syllabus Outline */}
            {course.keyTopics && course.keyTopics.length > 0 && (
              <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0B1E36] dark:text-white">
                  Curriculum & Core Modules
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {course.keyTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-[#080D1A] rounded-xl border border-slate-100 dark:border-slate-800"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#0B1E36] text-[#D4AF37] text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* University & Career Progression */}
            {course.careerPaths && course.careerPaths.length > 0 && (
              <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0B1E36] dark:text-white flex items-center gap-2.5">
                  <Briefcase className="w-6 h-6 text-[#C59B27]" />
                  <span>University & Career Pathways</span>
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Graduates of {course.title} at Prince College commonly progress into the following degree specialisms and professions:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {course.careerPaths.map((path, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                      {path}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Faculty & Related Courses */}
          <div className="space-y-8">
            {/* Faculty Instructor Card */}
            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
                Lead Academic Faculty
              </span>
              <div className="flex items-center gap-3.5 pt-1">
                <div className="w-12 h-12 rounded-full bg-[#0B1E36] text-[#D4AF37] font-bold flex items-center justify-center text-sm">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#0B1E36] dark:text-white">
                    {course.teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C59B27]">
                    {course.teacher.role}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                {course.teacher.credentials}
              </p>
            </div>

            {/* Tuition & Funding Summary */}
            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
                <CreditCard className="w-4 h-4" />
                <span>Fees & Bursaries</span>
              </div>
              <p className="text-sm font-bold text-[#0B1E36] dark:text-white">
                {course.fees}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                UK students aged 16-18 may qualify for state-funded entitlement. Means-tested bursaries covering up to 100% of international tuition are available through the Prince Memorial Foundation.
              </p>
              <Link
                href="/admissions"
                className="block text-xs font-bold text-[#C59B27] hover:underline"
              >
                Inquire about bursary availability →
              </Link>
            </div>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white">
                  Related in {course.department}
                </h3>
                <div className="space-y-4">
                  {relatedCourses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#0B1E36] dark:hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Courses</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
