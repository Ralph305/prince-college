"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Mail, 
  Phone,
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Send
} from "lucide-react";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes("@")) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#071424] text-slate-300 border-t border-slate-800">
      {/* Top Banner with Accreditations */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center text-center">
          <div className="flex items-center gap-2.5 text-slate-300">
            <Award className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Ofsted Rating</p>
              <p className="text-xs text-slate-400">Outstanding in All Categories</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">DfE Registered</p>
              <p className="text-xs text-slate-400">UK Provider Reference #312/6045</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300">
            <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Pearson & AQA</p>
              <p className="text-xs text-slate-400">Accredited Examination Centre</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300">
            <Award className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Russell Group</p>
              <p className="text-xs text-slate-400">84% University Progression</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Crest & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Prince College London Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white tracking-wider">
                  PRINCE COLLEGE
                </h3>
                <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase">
                  London • 40 Years of Excellence
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pr-6">
              Located in the historic scholarly quarter of Westminster, Prince College London provides 
              transformative GCSE, A-Level, and BTEC pathways. We cultivate intellectual curiosity, 
              personal resilience, and academic distinction.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                College Gazette & Open Day Bulletins
              </h4>
              {subscribed ? (
                <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 rounded-md text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Thank you. You have been subscribed to Prince College announcements.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    aria-label="Email address for college newsletter"
                    className="flex-1 bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-md focus:border-[#D4AF37] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-semibold text-xs px-3.5 py-2.5 rounded-md transition-colors flex items-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Academic Departments */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 border-b border-slate-800 pb-2">
              Departments
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses?dept=Sciences" className="hover:text-[#D4AF37] transition-colors">
                  Faculty of Sciences
                </Link>
              </li>
              <li>
                <Link href="/courses?dept=Mathematics" className="hover:text-[#D4AF37] transition-colors">
                  Mathematics & Computing
                </Link>
              </li>
              <li>
                <Link href="/courses?dept=Humanities" className="hover:text-[#D4AF37] transition-colors">
                  Humanities & History
                </Link>
              </li>
              <li>
                <Link href="/courses?dept=Languages" className="hover:text-[#D4AF37] transition-colors">
                  Modern Languages
                </Link>
              </li>
              <li>
                <Link href="/courses?dept=Business" className="hover:text-[#D4AF37] transition-colors">
                  Business & Economics
                </Link>
              </li>
              <li>
                <Link href="/courses?dept=Arts" className="hover:text-[#D4AF37] transition-colors">
                  Fine Art & Visual Design
                </Link>
              </li>
              <li>
                <Link href="/courses?dept=Technology" className="hover:text-[#D4AF37] transition-colors">
                  Digital Technology & AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 border-b border-slate-800 pb-2">
              Admissions & College
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About & History
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
                  Course Directory
                </Link>
              </li>
              <li>
                <Link href="/grades" className="hover:text-[#D4AF37] transition-colors">
                  Grades & Assessment Scale
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#D4AF37] transition-colors">
                  Application Portal
                </Link>
              </li>
              <li>
                <Link href="/admissions#dates" className="hover:text-[#D4AF37] transition-colors">
                  Term Dates & Open Evenings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Campus Visit & Map
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
                  Privacy Policy & GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & London Address */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 border-b border-slate-800 pb-2">
              London Campus
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Prince College London<br />
                  25 Great Smith Street<br />
                  Westminster, London SW1P 3BL
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:princecollege54@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  princecollege54@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+442079460888" className="text-slate-300 hover:text-white transition-colors">
                  +44 (0)20 7946 0888
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  <span>Plan your campus journey</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#050B14] py-5 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Prince College London. All rights reserved. Registered Charity No. 1094821.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
              Privacy Notice
            </Link>
            <Link href="/privacy#accessibility" className="hover:text-[#D4AF37] transition-colors">
              Accessibility Statement
            </Link>
            <Link href="/privacy#terms" className="hover:text-[#D4AF37] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
              Safeguarding
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
