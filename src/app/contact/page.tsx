import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CampusHub } from "@/components/CampusHub";
import { 
  MapPin, 
  Mail, 
  Phone,
  Clock, 
  Train, 
  Footprints,
  ShieldCheck, 
  Compass
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Westminster Campus | Prince College London",
  description:
    "Get in touch with Prince College London. Located at 25 Great Smith Street, Westminster, London SW1P 3BL. Direct enquiries, campus visiting protocols, and transit guidance.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-[#071424] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Westminster Estate
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">
              Contact &amp; Westminster Campus
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Situated in the historic heart of London&apos;s Westminster collegiate quarter, Prince College is readily 
              accessible via underground, mainline rail, and international travel links. Send an official enquiry or plan your visit below.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-[#C59B27] mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
              Campus Address
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Prince College London<br />
              25 Great Smith Street<br />
              Westminster, London SW1P 3BL<br />
              United Kingdom
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
              Telephone Switchboard
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              Admissions desk &amp; student enquiries:
            </p>
            <a
              href="tel:+442079460888"
              className="font-bold text-sm text-[#0B1E36] dark:text-[#D4AF37] hover:underline"
            >
              +44 (0)20 7946 0888
            </a>
          </div>

          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
              Official College Email
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              General enquiries &amp; application correspondence:
            </p>
            <a
              href="mailto:princecollege54@gmail.com"
              className="font-bold text-sm text-[#0B1E36] dark:text-[#D4AF37] hover:underline break-all"
            >
              princecollege54@gmail.com
            </a>
          </div>

          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0B1E36] dark:text-white mb-1">
              Operating Hours
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Monday – Friday: 08:00 – 18:00<br />
              Saturday (Library &amp; Study): 09:00 – 14:00<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Main Grid: Contact Form + Campus Estate Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Column */}
          <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-[#C59B27] dark:text-[#D4AF37] uppercase tracking-wider">
                Direct Communication
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E36] dark:text-white mt-1">
                Send an Official Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                Our Registry and Admissions team responds to all formal enquiries within one working day.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Campus Hub Column (Replaces Google Map) */}
          <div className="space-y-8">
            <CampusHub />

            {/* Quick Transport Summary Card */}
            <div className="bg-slate-50 dark:bg-[#071424] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C59B27]" />
                <span>Navigating to Westminster</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-slate-800 dark:bg-slate-200 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <strong>Westminster Station (Jubilee, Circle &amp; District):</strong> 4-minute stroll past Parliament Square and Westminster Abbey.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <strong>St James&apos;s Park Station (Circle &amp; District):</strong> 5 minutes&apos; walk via Broadway and Victoria Street.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <strong>Victoria &amp; Waterloo Mainline:</strong> 10–12 minutes on foot or direct bus links (Routes 11, 24, 148, 211).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
