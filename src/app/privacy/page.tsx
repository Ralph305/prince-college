import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & GDPR Compliance | Prince College London",
  description:
    "Official privacy policy, data protection, student safeguarding, and accessibility statements for Prince College London.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-24">
      {/* Header Banner */}
      <section className="bg-[#071424] text-white py-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            College Governance & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-3 text-white">
            Privacy Policy & Legal Notices
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: October 2026 • Compliant with UK General Data Protection Regulation (UK GDPR) & DfE Standards.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
            <span>1. Commitment to Data Privacy</span>
          </h2>
          <p>
            Prince College London ("the College", "we", "us") is dedicated to protecting the personal data and privacy 
            of our prospective students, current scholars, parents, alumni, and website visitors. We operate as a registered 
            data controller under the Information Commissioner's Office (ICO registration Z7894210).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#C59B27]" />
            <span>2. Information We Collect</span>
          </h2>
          <p>
            When you complete an application, booking, or enquiry form through this website, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Applicant personal identity details (full name, date of birth, nationality).</li>
            <li>Contact details (email address, telephone numbers, residential postal address).</li>
            <li>Academic records (previous schools, predicted GCSE grades, diagnostic test results).</li>
            <li>Parent and emergency guardian contact details.</li>
          </ul>
        </section>

        <section id="accessibility" className="space-y-3 scroll-mt-28">
          <h2 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#C59B27]" />
            <span>3. Accessibility Statement (WCAG 2.1 AA)</span>
          </h2>
          <p>
            Prince College London is committed to ensuring digital accessibility for people with disabilities. 
            We continually improve user experience across our digital portal in conformance with the Web Content 
            Accessibility Guidelines (WCAG) 2.1 Level AA standards, incorporating semantic HTML5 structure, ARIA 
            labels, keyboard accessibility, and high contrast typography.
          </p>
        </section>

        <section id="terms" className="space-y-3 scroll-mt-28">
          <h2 className="font-serif font-bold text-xl text-[#0B1E36] dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C59B27]" />
            <span>4. Contact the Data Protection Officer</span>
          </h2>
          <p>
            If you have questions regarding our data practices or wish to exercise your statutory rights (including 
            Subject Access Requests), please email our Data Protection Officer at:
          </p>
          <div className="p-4 bg-slate-50 dark:bg-[#0E1626] rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
            <p><strong>Data Protection Officer:</strong> Prince College London Registry</p>
            <p><strong>Email:</strong> princecollege54@gmail.com</p>
            <p><strong>Post:</strong> 25 Great Smith Street, Westminster, London SW1P 3BL</p>
          </div>
        </section>
      </div>
    </div>
  );
}
