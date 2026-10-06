import React from "react";
import { Metadata } from "next";
import { getGradesData } from "@/lib/courses";
import { Award, CheckCircle2, HelpCircle, FileCheck, Info, Scale } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grades & Assessment System | Prince College London",
  description:
    "Comprehensive guide to UK qualification grading systems: GCSE 9-1, A-Level A*-E, and BTEC Pass/Merit/Distinction frameworks with official UCAS points tables.",
};

export default function GradesPage() {
  const grades = getGradesData();

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#071424] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Academic Benchmarks & Standards
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">
              Grades & Assessment Systems
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Prince College adheres to the rigorous national examination standards regulated by Ofqual. 
              Below is our official guide to the GCSE 9–1 scale, A-Level A*–E letter grades with UCAS Tariff points, 
              and BTEC Level 3 National vocational criteria.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-slate-50 dark:bg-[#0E1626] rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
            Jump to Scale:
          </span>
          <a
            href="#gcse-scale"
            className="text-xs font-semibold px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#C59B27] transition-colors"
          >
            GCSE (9 – 1 Scale)
          </a>
          <a
            href="#alevel-scale"
            className="text-xs font-semibold px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#C59B27] transition-colors"
          >
            A-Level (A* – E Scale & UCAS)
          </a>
          <a
            href="#btec-scale"
            className="text-xs font-semibold px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#C59B27] transition-colors"
          >
            BTEC Level 3 (Pass / Merit / Distinction)
          </a>
          <a
            href="#assessment-cycle"
            className="text-xs font-semibold px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#C59B27] transition-colors"
          >
            Prince College Assessment Cycle
          </a>
        </div>

        {/* 1. GCSE 9-1 Section */}
        <section id="gcse-scale" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
                Secondary Benchmark
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
                GCSE Numerical Grading System (9 – 1)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 px-3 py-1.5 rounded-lg">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>Grade 9 is higher than the legacy A* grade</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The GCSE grading system uses numbers from 9 (highest) to 1 (lowest). The Department for Education 
            classifies a <strong>Grade 4 as a "Standard Pass"</strong> and a <strong>Grade 5 as a "Strong Pass"</strong>. 
            At Prince College, Sixth Form admission to A-Level subjects typically requires a Grade 6 or Grade 7 in the corresponding discipline.
          </p>

          {/* GCSE Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0E1626]">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1E36] text-white text-xs uppercase font-semibold tracking-wider">
                  <th className="py-3.5 px-4">New Grade</th>
                  <th className="py-3.5 px-4">Legacy Equivalent</th>
                  <th className="py-3.5 px-6">Official Performance Standard</th>
                  <th className="py-3.5 px-4">UK Benchmark Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {grades.gcse.map((row) => (
                  <tr key={row.grade} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0B1E36] dark:text-[#D4AF37] font-mono text-base">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-600 dark:text-slate-400">
                      {row.oldLetter}
                    </td>
                    <td className="py-3.5 px-6 text-xs sm:text-sm">
                      {row.description}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                        row.grade === "9" || row.grade === "8" || row.grade === "7"
                          ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300"
                          : row.grade === "5" || row.grade === "6"
                          ? "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300"
                          : row.grade === "4"
                          ? "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}>
                        {row.benchmark}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. A-Level A*-E Section */}
        <section id="alevel-scale" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
                Higher Education Matrix
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
                GCE A-Level Grading & UCAS Tariff Points
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 px-3 py-1.5 rounded-lg">
              <Scale className="w-4 h-4 flex-shrink-0" />
              <span>UCAS Tariff 2026/27 Standard</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            A-Levels are graded from A* (highest) to E (minimum pass). Universities make offers based on either letter combinations 
            (e.g., <strong>A*AA</strong> for Imperial Medicine, <strong>AAA</strong> for UCL Law) or accumulated <strong>UCAS Tariff points</strong>.
          </p>

          {/* A-Level Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0E1626]">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1E36] text-white text-xs uppercase font-semibold tracking-wider">
                  <th className="py-3.5 px-4">A-Level Grade</th>
                  <th className="py-3.5 px-4">UCAS Tariff</th>
                  <th className="py-3.5 px-4">Mark Benchmark</th>
                  <th className="py-3.5 px-6">Performance Characteristics</th>
                  <th className="py-3.5 px-4">Typical University Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {grades.aLevel.map((row) => (
                  <tr key={row.grade} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0B1E36] dark:text-[#D4AF37] font-mono text-base">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#0B1E36] dark:text-white">
                      {row.ucasPoints} pts
                    </td>
                    <td className="py-3.5 px-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                      {row.percentageBenchmark}
                    </td>
                    <td className="py-3.5 px-6 text-xs sm:text-sm">
                      {row.description}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                      {row.typicalOffer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. BTEC Level 3 Nationals Section */}
        <section id="btec-scale" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
                Applied Vocational Framework
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
                Pearson BTEC Nationals (Pass / Merit / Distinction)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-300 px-3 py-1.5 rounded-lg">
              <Award className="w-4 h-4 flex-shrink-0" />
              <span>Vocational Equivalence</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            BTEC Level 3 qualifications reward continual project delivery, controlled assessment, and real-world coursework alongside 
            external examinations. A <strong>BTEC National Extended Diploma</strong> is equivalent in volume and UCAS Tariff to 3 full A-Levels.
          </p>

          {/* BTEC Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0E1626]">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1E36] text-white text-xs uppercase font-semibold tracking-wider">
                  <th className="py-3.5 px-4">BTEC Award Grade</th>
                  <th className="py-3.5 px-4">Single Award UCAS</th>
                  <th className="py-3.5 px-4">Triple Extended Diploma UCAS</th>
                  <th className="py-3.5 px-4">A-Level Equivalence</th>
                  <th className="py-3.5 px-6">Criteria & Evidence Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {grades.btec.map((row) => (
                  <tr key={row.grade} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0B1E36] dark:text-[#D4AF37]">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#0B1E36] dark:text-white">
                      {row.singleUcas} pts
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#0B1E36] dark:text-[#D4AF37]">
                      {row.extendedDiplomaUcas} pts
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-600 dark:text-slate-300">
                      {row.aLevelEquivalent}
                    </td>
                    <td className="py-3.5 px-6 text-xs sm:text-sm">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Assessment Cycle at Prince College */}
        <section id="assessment-cycle" className="bg-slate-50 dark:bg-[#071424] p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
              Internal Academic Monitoring
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
              How Students Are Assessed at Prince College
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              We operate continuous formative tracking to ensure no student falls behind their projected target grade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold text-[#C59B27] uppercase">Phase 1</span>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mt-1 mb-2">
                Half-Termly Topic Assessments
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Regular 45-minute exam-style tests conducted under timed conditions to identify knowledge gaps early.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold text-[#C59B27] uppercase">Phase 2</span>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mt-1 mb-2">
                Formal Mock Examinations
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Held in January of Year 11 (GCSE) and January of Year 13 (A-Level) in the Great Hall with external invigilation.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold text-[#C59B27] uppercase">Phase 3</span>
              <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mt-1 mb-2">
                External Summer Board Series
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Official examinations run in May/June administered under strict Joint Council for Qualifications (JCQ) rules.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
