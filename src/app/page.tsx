import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  Calendar,
  Quote
} from "lucide-react";
import { getFeaturedCourses, getAllCourses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const allCourses = getAllCourses();

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#071424] text-white overflow-hidden">
        {/* Background Campus Photo with Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-campus.jpg"
            alt="Prince College London Historic Quadrangle and Glass Library"
            fill
            priority
            className="object-cover object-center opacity-35 filter brightness-95"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071424] via-[#071424]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071424] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            {/* College Crest & Established Pill */}
            <div className="inline-flex items-center gap-2.5 bg-[#0B1E36]/90 border border-[#D4AF37]/50 rounded-full py-1.5 px-4 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#DFB847]">
                Prince College London • Sixth Form & GCSE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Inspiring Intellectual Excellence in the Heart of London
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
              Prince College blends historic academic traditions with cutting-edge teaching to empower 
              ambitious students for the world’s leading universities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2.5 bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-bold text-base px-7 py-4 rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply Now for 2026</span>
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/30 backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5 text-[#DFB847]" />
                <span>Explore Courses</span>
              </Link>
            </div>

            {/* Quick Key Badges */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Ofsted Outstanding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Oxbridge & Russell Group Pathways</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Westminster Academic Quarter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS COUNTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white dark:bg-[#0E1626] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
          <div className="text-center px-4 pt-4 sm:pt-0">
            <span className="block font-serif text-3xl sm:text-5xl font-bold text-[#0B1E36] dark:text-[#D4AF37]">
              98.4%
            </span>
            <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Overall Pass Rate (A*-C / 9-4)
            </span>
          </div>

          <div className="text-center px-4 pt-4 sm:pt-0">
            <span className="block font-serif text-3xl sm:text-5xl font-bold text-[#0B1E36] dark:text-[#D4AF37]">
              84%
            </span>
            <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Russell Group & Top 30 Offers
            </span>
          </div>

          <div className="text-center px-4 pt-4 sm:pt-0">
            <span className="block font-serif text-3xl sm:text-5xl font-bold text-[#0B1E36] dark:text-[#D4AF37]">
              1 : 12
            </span>
            <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Faculty-to-Student Ratio
            </span>
          </div>

          <div className="text-center px-4 pt-4 sm:pt-0">
            <span className="block font-serif text-3xl sm:text-5xl font-bold text-[#0B1E36] dark:text-[#D4AF37]">
              £2.4M
            </span>
            <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Annual Scholarship & Bursary Fund
            </span>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS / PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
            The Prince College Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white mt-2 mb-4">
            A Beacon of Rigorous Learning & Character
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every student at Prince College benefits from individualized academic mentoring, 
            prestigious London cultural immersion, and world-class faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-[#C59B27] transition-all hover:shadow-md group">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-[#C59B27] mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white mb-2">
              Academic Rigour
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Tailored seminar-style tutorials taught by subject masters holding PhDs and senior examiner credentials.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-[#C59B27] transition-all hover:shadow-md group">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white mb-2">
              Westminster Campus
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Steps away from Parliament Square, Westminster Abbey, and Whitehall academic and research libraries.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-[#C59B27] transition-all hover:shadow-md group">
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white mb-2">
              Oxbridge Preparation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dedicated admissions tutors guide students through UCAT, BMAT, STEP, and Oxford/Cambridge mock interviews.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-[#C59B27] transition-all hover:shadow-md group">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white mb-2">
              Holistic Pastoral Care
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every student is supported by a personal tutor, mental wellbeing coach, and university careers advisor.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/50 aspect-square">
              <Image
                src="/images/principal-williams-reynold.jpg"
                alt="Professor Williams Reynold, Principal of Prince College London"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 400px"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              <span>Leadership & Vision</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white leading-tight">
              A Warm Welcome from Our Principal
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                &ldquo;At Prince College London, we believe education is not merely the accumulation of examination grades, 
                but an awakening of scholarly passion and character. In our historic Westminster premises, students 
                are met with deep academic rigour, world-class faculty, and personal mentorship that prepares them 
                for the challenges of tomorrow.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Whether you aspire to read Medicine at Imperial, Natural Sciences at Cambridge, or Law at Oxford, 
                Prince College provides the platform, scholarship, and community to turn aspiration into reality.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white">
                  Professor Williams Reynold
                </h3>
                <p className="text-xs font-semibold text-[#C59B27] dark:text-[#D4AF37]">
                  Principal &amp; Head of College &bull; MA (Oxon), PhD (Cantab), FBA
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1E36] dark:text-[#D4AF37] hover:underline"
              >
                <span>Read College History &amp; Leadership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COURSES SECTION */}
      <section className="bg-slate-50 dark:bg-[#0B1422] py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
                Programmes of Study
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white mt-1">
                Featured Academic Courses
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
                Explore our rigorously designed GCSE, A-Level, and BTEC pathways with clear grade boundaries and university entry specifications.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#0B1E36] dark:bg-[#C59B27] text-white dark:text-[#0B1E36] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#132B4F] dark:hover:bg-[#DFB847] transition-colors"
            >
              <span>View All {allCourses.length} Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAMPUS LIFE & FACILITIES (Rich Imagery) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              Campus Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white leading-tight">
              World-Class Facilities in London's Knowledge Quarter
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our campus blends historic Grade II listed Victorian chambers with contemporary 
              glass-atrium study facilities. Students study in quiet collegiate libraries, 
              modern science laboratories, and high-performance computing suites.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-[#C59B27] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B1E36] dark:text-white">The Prince Memorial Library</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Over 35,000 physical texts, JSTOR academic database access, and quiet research pods.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-[#C59B27] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B1E36] dark:text-white">Specialist STEM Laboratories</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">University-grade physics interferometers, chemistry synthesis fumehoods, and biosafety suites.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-[#C59B27] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B1E36] dark:text-white">Creative Arts & Computing Studios</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Natural-light fine art studios, printmaking presses, and GPU-accelerated computing workstations.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about#campus"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#0B1E36] dark:text-[#D4AF37] hover:underline"
              >
                <span>Read our campus history and facilities guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/students-library.jpg"
                alt="Students studying in Prince College library"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md mt-6">
              <Image
                src="/images/science-lab.jpg"
                alt="Science laboratory at Prince College"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-slate-50 dark:bg-[#071424] py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              Voices of Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white mt-1">
              What Our Students & Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0E1626] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#C59B27]/30 absolute top-6 right-6" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
                "The teaching here is truly university-grade. My chemistry teacher, Dr. Finch, challenged me 
                beyond the syllabus and coached me for the Chemistry Olympiad. I've now received an offer for Medicine at Imperial."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1E36] text-[#D4AF37] font-bold flex items-center justify-center text-sm">
                  SA
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B1E36] dark:text-white">Siddharth Anand</h3>
                  <p className="text-xs text-slate-500">A-Level Chemistry, Maths, Biology • Class of 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#C59B27]/30 absolute top-6 right-6" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
                "As international parents moving to London, Prince College was exceptional. The pastoral team 
                ensured our daughter settled seamlessly and achieved straight 9s in her GCSEs."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1E36] text-[#D4AF37] font-bold flex items-center justify-center text-sm">
                  EK
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B1E36] dark:text-white">Elizabeth & Marcus King</h3>
                  <p className="text-xs text-slate-500">Parents of GCSE Scholar, Year 11</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#C59B27]/30 absolute top-6 right-6" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
                "The BTEC IT programme gave me hands-on database and cybersecurity experience. With Triple Distinction*, 
                I secured both a top university offer and a competitive degree apprenticeship in the City."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1E36] text-[#D4AF37] font-bold flex items-center justify-center text-sm">
                  TJ
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B1E36] dark:text-white">Tariq Javid</h3>
                  <p className="text-xs text-slate-500">BTEC Extended Diploma in IT • Class of 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS & EVENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              Campus Dispatch
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
              Latest College News & Academic Life
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#0E1626] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>October 2, 2026</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mb-2 leading-snug">
                Prince College Scholars Shine in National Mathematics Olympiad
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                Four Sixth Form students achieved Gold Awards in the Senior Mathematical Challenge, qualifying for the prestigious British Mathematical Olympiad.
              </p>
              <span className="text-xs font-bold text-[#C59B27]">Read full dispatch →</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0E1626] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>September 24, 2026</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mb-2 leading-snug">
                Annual Westminster Science Colloquium Announced
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                Nobel Laureate Sir Richard Henderson to deliver the keynote address to college STEM students in the historic Great Hall.
              </p>
              <span className="text-xs font-bold text-[#C59B27]">Read full dispatch →</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0E1626] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>September 18, 2026</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mb-2 leading-snug">
                Expanded Scholarship Fund Opens for 2026 Sixth Form Applicants
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                The Board of Governors has approved an additional £400,000 for means-tested bursaries and academic excellence awards.
              </p>
              <span className="text-xs font-bold text-[#C59B27]">Read full dispatch →</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#071424] via-[#0B1E36] to-[#132B4F] rounded-3xl p-8 sm:p-14 text-white text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Admissions for Academic Year 2026/27
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Begin Your Journey to Academic Distinction
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Applications for September 2026 entry are now open. Speak to our Admissions Tutors or arrange a personalized campus visit today.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-md"
            >
              Start Online Application
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm border border-white/20 transition-all"
            >
              Book Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
