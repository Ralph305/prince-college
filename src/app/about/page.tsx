import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Building, 
  History, 
  Target, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck, 
  Users 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & History | Prince College London",
  description:
    "Discover the history, leadership, educational philosophy, and mission of Prince College London in Westminster, with 40 years of academic leadership.",
};

const LEADERSHIP = [
  {
    name: "Professor Williams Reynold",
    role: "Principal & Head of College",
    credentials: "MA (Oxon), PhD (Cantab), FBA",
    bio: "Professor Reynold has led Prince College London with distinction for over two decades. A renowned scholar and educational visionary, he previously held senior academic fellowships at the University of Oxford and Cambridge before dedicating his leadership to collegiate excellence in London.",
    image: "/images/principal-williams-reynold.jpg",
  },
  {
    name: "Dr. Anthony Sterling",
    role: "Vice Principal & Academic Dean",
    credentials: "MA (Cantab), MEd, FRSA",
    bio: "Directs curriculum innovation, examination standards, and academic faculty appointments across all departments with 25 years of UK secondary and collegiate leadership experience.",
    image: null,
  },
  {
    name: "Dr. Marcus Vance-Reid",
    role: "Director of Sixth Form & Oxbridge Coordinator",
    credentials: "PhD in Pure Mathematics (Warwick University)",
    bio: "Leads competitive university preparation, STEP mentoring, and university mock interview panels for medical and Russell Group applicants.",
    image: null,
  },
  {
    name: "Mrs. Althea Sterling",
    role: "Director of Admissions & Registry",
    credentials: "BSc (Hons) Psychology (UCL), PGCE",
    bio: "Guides prospective families from initial inquiry through application, interviews, bursary awards, and college enrollment.",
    image: null,
  },
  {
    name: "Ms. Farah Al-Mansoor",
    role: "Head of Pastoral Care & Student Wellbeing",
    credentials: "MSc Clinical Mental Health Sciences (UCL)",
    bio: "Coordinates personalized tutorial care, safeguarding, mental health support, and accommodation welfare for day and boarding scholars.",
    image: null,
  },
  {
    name: "Mr. Samuel O'Connor",
    role: "Director of Vocational Pathways & Industry Partnerships",
    credentials: "BSc Information Systems, CISSP",
    bio: "Manages BTEC accreditation standards, corporate degree apprenticeships, and City of London employer mentoring initiatives.",
    image: null,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-[#071424] text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            40 Years of Excellence • Westminster, London
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-4 text-white">
            About Prince College London
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            For four decades, Prince College has stood at the crossroads of rigorous scholarship, 
            civic duty, and transformative personal development.
          </p>
        </div>
      </section>

      {/* 2. History & Founding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              <History className="w-4 h-4" />
              <span>A Storied Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white leading-tight">
              40 Years of Academic Leadership in London
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Founded four decades ago in the historic scholarly quarter of Westminster, Prince College was established 
                by university scholars and educators dedicated to opening the highest standard of classical and 
                scientific instruction to students across London.
              </p>
              <p>
                Throughout the twentieth century, Prince College educated pioneering mathematicians, doctors, civil servants, 
                and writers. During the post-war era, the College expanded to incorporate cutting-edge physical sciences 
                and modern European languages.
              </p>
              <p>
                Today, Prince College stands as a premier sixth-form and senior collegiate institution in London, welcoming 
                ambitious students into GCSE, A-Level, and BTEC pathways within world-class Grade II listed premises.
              </p>
            </div>
          </div>

          <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
            <Image
              src="/images/hero-campus.jpg"
              alt="Prince College Victorian Quadrangle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Core Values */}
      <section className="bg-slate-50 dark:bg-[#071424] py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white dark:bg-[#0E1626] p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 text-[#C59B27] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0B1E36] dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                To cultivate an environment of unyielding academic ambition, moral integrity, and intellectual curiosity. 
                We prepare our students to master rigorous examinations and enter the world's most selective universities 
                as critical thinkers and responsible global leaders.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E1626] p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0B1E36] dark:text-white mb-3">
                Our Educational Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                To be the preeminent college in Central London, celebrated globally for academic distinction, 
                inclusivity of opportunity, and a vibrant community where every scholar is known, challenged, and empowered.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#0B1E36] dark:text-white mb-2">1. Intellectual Rigour</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We reject superficial learning. Students are guided to engage deeply with source materials and proof.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#0B1E36] dark:text-white mb-2">2. Integrity & Humility</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Academic honesty, respectful discourse, and ethical conduct form the bedrock of daily collegiate life.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#0B1E36] dark:text-white mb-2">3. Inclusivity & Equity</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Talent knows no background. Through our £2.4M bursary fund, we ensure financial barriers never impede ability.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0E1626] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#0B1E36] dark:text-white mb-2">4. Civic Responsibility</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We empower students to apply their gifts in service of their communities and global scientific progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
            College Governance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white mt-1">
            Academic Leadership Team
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Led by distinguished scholars dedicated to academic excellence, student safeguarding, and individual potential.
          </p>
        </div>

        {/* Principal Spotlight Card */}
        <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 mb-12 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg border-2 border-[#D4AF37]/50 flex-shrink-0 aspect-square">
            <Image
              src="/images/principal-williams-reynold.jpg"
              alt="Professor Williams Reynold, Principal of Prince College London"
              fill
              priority
              unoptimized
              className="object-cover object-top"
              sizes="(max-width: 768px) 208px, 256px"
            />
          </div>

          <div className="md:col-span-2 space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              Principal & Head of College
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1E36] dark:text-white">
              Professor Williams Reynold
            </h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              MA (Oxon), PhD (Cantab), FBA
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              "At Prince College London, our ambition for our scholars is limitless. We do not simply teach students 
              to pass examinations; we inspire them to think independently, interrogate assumptions, and carry themselves 
              with the quiet confidence that true intellectual mastery brings."
            </p>
          </div>
        </div>

        {/* Other Leadership Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP.slice(1).map((leader) => (
            <div
              key={leader.name}
              className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#0B1E36] text-[#D4AF37] font-bold flex items-center justify-center text-sm mb-4">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white">
                  {leader.name}
                </h4>
                <p className="text-xs font-semibold text-[#C59B27] dark:text-[#D4AF37] mb-1">
                  {leader.role}
                </p>
                <p className="text-xs text-slate-400 mb-3">{leader.credentials}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Campus Facilities Breakdown (anchor #campus) */}
      <section id="campus" className="bg-slate-50 dark:bg-[#071424] py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] dark:text-[#D4AF37]">
              Westminster Estate
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1E36] dark:text-white mt-1">
              Facilities Designed for Scholarly Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0E1626] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/students-library.jpg"
                  alt="Library at Prince College"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mb-2">
                  Collegiate Study Library
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Silent reading desks, networked study pods, university database subscriptions, and a rare collection of classic literature.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0E1626] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/science-lab.jpg"
                  alt="Science laboratories"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mb-2">
                  Specialist Research Labs
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fully equipped physics, chemistry, and biological labs exceeding standard A-Level and GCSE practical requirements.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0E1626] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/hero-campus.jpg"
                  alt="College Quadrangle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mb-2">
                  Historic Quadrangle & Refectory
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Lush landscaped lawns and the College Refectory serving hot, freshly prepared seasonal meals to scholars and faculty daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
