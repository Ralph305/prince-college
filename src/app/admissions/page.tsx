import React from "react";
import { Metadata } from "next";
import { getAllCourses } from "@/lib/courses";
import { AdmissionsForm } from "@/components/AdmissionsForm";
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  FileCheck, 
  GraduationCap, 
  Award, 
  HelpCircle,
  FileSpreadsheet
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions & Online Application | Prince College London",
  description:
    "Apply to Prince College London for GCSE, A-Level, or BTEC study. Review admission steps, key dates, entry criteria, and submit your application.",
};

interface AdmissionsPageProps {
  searchParams: Promise<{ course?: string }>;
}

export default async function AdmissionsPage({
  searchParams,
}: AdmissionsPageProps) {
  const resolvedParams = await searchParams;
  const courses = getAllCourses();

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#071424] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Admissions 2026/27
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">
              Join Prince College London
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              We welcome applications from motivated, intellectually curious students across the UK and internationally. 
              Review the five-step admissions pathway below and submit your application dossier online.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Five-Step Admissions Process */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
              How To Apply
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
              The Admissions Pathway
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Our transparent 5-step admissions journey ensures the best match between each student's goals and our faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0B1E36] text-[#D4AF37] text-xs font-bold flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="font-serif font-bold text-base text-[#0B1E36] dark:text-white mb-2">
                Online Application
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Submit the online dossier below with your preferred subjects, previous school reports, and personal statement.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0B1E36] text-[#D4AF37] text-xs font-bold flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="font-serif font-bold text-base text-[#0B1E36] dark:text-white mb-2">
                Academic Review
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Our Registry evaluates predicted GCSE/national examination grades and confidential headteacher references.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0B1E36] text-[#D4AF37] text-xs font-bold flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="font-serif font-bold text-base text-[#0B1E36] dark:text-white mb-2">
                Interview & Assessment
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Candidates meet a Head of Department for a 30-minute academic discussion and short diagnostic subject assessment.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0B1E36] text-[#D4AF37] text-xs font-bold flex items-center justify-center mb-4">
                4
              </span>
              <h3 className="font-serif font-bold text-base text-[#0B1E36] dark:text-white mb-2">
                Offer of a Place
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Successful candidates receive a formal Conditional or Unconditional Offer letter, alongside any scholarship decisions.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0B1E36] text-[#D4AF37] text-xs font-bold flex items-center justify-center mb-4">
                5
              </span>
              <h3 className="font-serif font-bold text-base text-[#0B1E36] dark:text-white mb-2">
                Enrollment & Induction
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Accept your offer, attend Induction Day in Westminster, receive your college timetable, and begin term in September.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Key Dates & Deadlines */}
        <section id="dates" className="space-y-8 scroll-mt-28">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
              Calendar of Admissions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
              Key Dates for 2026/27 Entry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border-l-4 border-l-[#C59B27] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-[#C59B27] font-bold uppercase mb-2">
                <Calendar className="w-4 h-4" />
                <span>14 November 2026</span>
              </div>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
                Autumn Open Evening
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore the campus, meet subject heads and student ambassadors. Runs 17:30 - 20:00.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border-l-4 border-l-[#0B1E36] dark:border-l-blue-400 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-[#0B1E36] dark:text-blue-400 font-bold uppercase mb-2">
                <Calendar className="w-4 h-4" />
                <span>15 January 2027</span>
              </div>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
                Sixth Form Early Priority
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Early application deadline for priority subject timetable selection and bursary consideration.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border-l-4 border-l-emerald-600 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold uppercase mb-2">
                <Calendar className="w-4 h-4" />
                <span>6 February 2027</span>
              </div>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
                Scholarship Assessment Day
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Competitive scholarship examinations in STEM, Humanities, and the Visual Arts.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border-l-4 border-l-purple-600 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-purple-600 font-bold uppercase mb-2">
                <Calendar className="w-4 h-4" />
                <span>1 September 2027</span>
              </div>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
                Autumn Term Induction
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official registration, student ID issuance, and inaugural matriculation ceremonies.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Official Application Form */}
        <section id="application-form" className="space-y-8 scroll-mt-28">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
              Admissions Portal
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
              Online Application Form
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Please complete all required fields. There is no application fee for preliminary registration.
            </p>
          </div>

          <AdmissionsForm
            courses={courses}
            preselectedSlug={resolvedParams.course}
          />
        </section>

        {/* 4. Bursaries & Scholarships */}
        <section className="bg-slate-50 dark:bg-[#071424] p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
                Financial Support
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white">
                Scholarships & Means-Tested Bursaries
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Prince College operates one of the most generous independent bursary funds in Central London. 
                Through our £2.4M endowment, means-tested bursaries can cover between <strong>20% to 100% of college tuition</strong>, 
                examination fees, and academic books for qualifying households.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span><strong>The Westminster Academic Excellence Scholarship:</strong> Awarded to outstanding GCSE performers (Straight Grade 8s/9s).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span><strong>The Alan Turing STEM Award:</strong> For candidates displaying exceptional aptitude in Mathematics and Computing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span><strong>Means-Tested Bursaries:</strong> Scaled according to verified household income.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white">
                Have an Admissions Question?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Our Admissions Registry is open Monday to Friday, 08:30 – 17:30. Contact Mrs. Althea Sterling 
                and the team for guidance on entry thresholds and overseas qualifications.
              </p>
              <div className="pt-2 text-xs space-y-1">
                <p>
                  <strong>Official Email:</strong>{" "}
                  <a
                    href="mailto:princecollege54@gmail.com"
                    className="text-[#0B1E36] dark:text-[#D4AF37] font-bold hover:underline"
                  >
                    princecollege54@gmail.com
                  </a>
                </p>
                <p className="text-slate-400 text-[11px] pt-1">
                  All admissions correspondence is handled exclusively via email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
