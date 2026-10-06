"use client";

import React, { useState } from "react";
import {
  Building2,
  Navigation,
  Compass,
  Clock,
  ShieldCheck,
  Check,
  Copy,
  Train,
  Bus,
  Footprints,
  Sparkles,
  Info,
  CalendarCheck,
  BadgeCheck,
  MapPin
} from "lucide-react";

interface CampusBuilding {
  id: string;
  name: string;
  tag: string;
  floors: string;
  description: string;
  facilities: string[];
  access: string;
  icon: string;
}

const campusBuildings: CampusBuilding[] = [
  {
    id: "main-hall",
    name: "The Great Hall & Administration",
    tag: "Historic Wing",
    floors: "Floors G, 1 & 2",
    description: "The ceremonial heart of Prince College Westminster. Houses Registry, Principal's study, and historic debate chambers.",
    facilities: ["Admissions & Registry Desk", "Collegiate Assembly Hall", "Senior Leadership Offices", "Examinations Office"],
    access: "All visitors must sign in here at Registry reception",
    icon: "🏛️",
  },
  {
    id: "stem-wing",
    name: "Newton STEM & Innovation Wing",
    tag: "Science & Tech",
    floors: "Floors 1 – 4",
    description: "Specialist undergraduate-standard laboratories for Advanced Chemistry, Physics, Molecular Biology, and Computer Science.",
    facilities: ["3 Chemistry Wet Labs", "Cleanroom Physics Suite", "Robotics & AI Workshop", "Bio-Microscopy Lab"],
    access: "Authorized lab coats & eye protection required in designated areas",
    icon: "🔬",
  },
  {
    id: "library",
    name: "Gladstone Memorial Library",
    tag: "Research & Archive",
    floors: "Floors G, Mezzanine & 1",
    description: "Extensive collections spanning classical history, jurisprudence, sciences, and modern literature, plus individual silent carrels.",
    facilities: ["Silent Study Carrels", "Digital JSTOR & Oxford Terminals", "Rare Book Archive", "Oxbridge Tutorial Pods"],
    access: "Open 08:00–18:00 Mon–Fri; 09:00–14:00 Sat",
    icon: "📚",
  },
  {
    id: "arts-wing",
    name: "Westminster Arts & Design Studios",
    tag: "Creative Arts",
    floors: "Floors 3 & 4 (North Light)",
    description: "Naturally lit penthouses designed for fine art, architecture portfolios, graphic design, and darkroom photography.",
    facilities: ["Fine Art Easel Studios", "Digital Media & Print Lab", "Ceramics & 3D Prototyping", "Darkroom"],
    access: "Portfolio reviews and exhibitions held termly",
    icon: "🎨",
  },
  {
    id: "portcullis",
    name: "Portcullis Welcome Lodge",
    tag: "Security & Arrival",
    floors: "Ground Level (Great Smith St)",
    description: "Primary collegiate gateway and security concierge. All prospective families and external guests are greeted here.",
    facilities: ["Visitor Badging Concierge", "Step-Free Ramp Access", "Parent Hospitality Lounge", "Left Luggage"],
    access: "Photo ID required for issue of visitor credential badge",
    icon: "🛡️",
  },
];

export function CampusHub() {
  const [activeTab, setActiveTab] = useState<"estate" | "transit" | "visitor">("estate");
  const [selectedBuilding, setSelectedBuilding] = useState<string>("main-hall");
  const [copied, setCopied] = useState(false);

  const fullAddress = "Prince College London, 25 Great Smith Street, Westminster, London SW1P 3BL, United Kingdom";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentBuilding = campusBuildings.find((b) => b.id === selectedBuilding) || campusBuildings[0];

  return (
    <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
      {/* Header Bar */}
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27] dark:text-[#D4AF37]">
              Westminster Campus
            </span>
          </div>
          <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white mt-0.5">
            Campus Estate &amp; Visitor Hub
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            25 Great Smith Street, Westminster, London SW1P 3BL
          </p>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#C59B27] bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#0B1E36] dark:hover:text-[#D4AF37] transition-all"
          title="Copy college address to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-bold">Address Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Copy Address</span>
            </>
          )}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#09101d] text-xs font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab("estate")}
          className={`flex-1 py-3 px-3 text-center transition-all flex items-center justify-center gap-1.5 border-b-2 ${
            activeTab === "estate"
              ? "border-[#C59B27] text-[#0B1E36] dark:text-white bg-white dark:bg-[#0E1626]"
              : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Campus Estate</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("transit")}
          className={`flex-1 py-3 px-3 text-center transition-all flex items-center justify-center gap-1.5 border-b-2 ${
            activeTab === "transit"
              ? "border-[#C59B27] text-[#0B1E36] dark:text-white bg-white dark:bg-[#0E1626]"
              : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <Train className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Transit Links</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("visitor")}
          className={`flex-1 py-3 px-3 text-center transition-all flex items-center justify-center gap-1.5 border-b-2 ${
            activeTab === "visitor"
              ? "border-[#C59B27] text-[#0B1E36] dark:text-white bg-white dark:bg-[#0E1626]"
              : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Visitor Protocols</span>
        </button>
      </div>

      {/* Tab 1: Campus Estate Interactive Navigator */}
      {activeTab === "estate" && (
        <div className="p-5 sm:p-6 space-y-6">
          {/* Visual Building Selector Pills */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Select Collegiate Pavilion
              </span>
              <span className="text-[11px] text-[#C59B27] dark:text-[#D4AF37] font-semibold">
                Grade II Listed Architecture
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {campusBuildings.map((building) => {
                const isSelected = selectedBuilding === building.id;
                return (
                  <button
                    key={building.id}
                    type="button"
                    onClick={() => setSelectedBuilding(building.id)}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-all flex items-center gap-2 ${
                      isSelected
                        ? "border-[#C59B27] bg-amber-50/50 dark:bg-amber-950/20 text-[#0B1E36] dark:text-white shadow-sm ring-1 ring-[#C59B27]/40"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422] text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className="text-lg flex-shrink-0">{building.icon}</span>
                    <div className="min-w-0">
                      <div className="font-bold truncate text-[11px] sm:text-xs">{building.name.split(" ")[0]} {building.name.split(" ")[1]}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{building.tag}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Building Card */}
          <div className="bg-slate-50 dark:bg-[#071322] border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-xl bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 shadow-sm">
                  {currentBuilding.icon}
                </span>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#0B1E36] dark:text-white">
                    {currentBuilding.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <span className="font-medium text-[#C59B27] dark:text-[#D4AF37]">{currentBuilding.tag}</span>
                    <span>•</span>
                    <span>{currentBuilding.floors}</span>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>Open for Term Visits</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentBuilding.description}
            </p>

            {/* Key Facilities Inside */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Featured Facilities &amp; Departments
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentBuilding.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0E1626] p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
                    <span className="truncate">{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Protocol */}
            <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-lg border border-amber-200/50 dark:border-amber-900/40">
              <Info className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Access Note:</strong> {currentBuilding.access}
              </span>
            </div>
          </div>

          {/* Quick Estate Stats */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-slate-50 dark:bg-[#071322] rounded-xl border border-slate-200/70 dark:border-slate-800">
              <div className="font-serif font-bold text-base sm:text-lg text-[#0B1E36] dark:text-white">5 Pavilions</div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Westminster Campus</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-[#071322] rounded-xl border border-slate-200/70 dark:border-slate-800">
              <div className="font-serif font-bold text-base sm:text-lg text-[#0B1E36] dark:text-white">100%</div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Step-Free Accessible</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-[#071322] rounded-xl border border-slate-200/70 dark:border-slate-800">
              <div className="font-serif font-bold text-base sm:text-lg text-[#0B1E36] dark:text-white">SW1P 3BL</div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Postal District</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Westminster Transit & Walking Guide */}
      {activeTab === "transit" && (
        <div className="p-5 sm:p-6 space-y-4">
          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#071322] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
            Prince College is situated on <strong>Great Smith Street</strong> in Westminster, between Victoria Street and Westminster Abbey.
          </div>

          <div className="space-y-3">
            {/* Westminster Tube */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Train className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-[#0B1E36] dark:text-white flex items-center gap-2">
                  <span>Westminster Underground Station</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-normal">
                    4 min walk
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Served by the <strong>Jubilee, Circle &amp; District lines</strong>. Exit towards Parliament Square; walk southwest down Great Smith Street.
                </p>
              </div>
            </div>

            {/* St James's Park Tube */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                <Train className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-[#0B1E36] dark:text-white flex items-center gap-2">
                  <span>St James&apos;s Park Station</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-normal">
                    5 min walk
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Served by the <strong>District &amp; Circle lines</strong>. Exit Broadway; proceed east along Victoria Street and turn right onto Great Smith Street.
                </p>
              </div>
            </div>

            {/* Mainline Rail */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                <Footprints className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-[#0B1E36] dark:text-white flex items-center gap-2">
                  <span>London Victoria &amp; Waterloo Mainline</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-normal">
                    10–12 min
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Gatwick Express, Southeastern, Southern, and South Western Railway services with direct connecting buses or walking routes.
                </p>
              </div>
            </div>

            {/* Bus Services */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-400 flex-shrink-0">
                <Bus className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-[#0B1E36] dark:text-white">
                  TfL Bus Connections
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Routes <strong>11, 24, 88, 148, 211, and 507</strong> stop within 90 seconds of the college gates along Victoria Street and Marsham Street.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Visitor Protocols & Security */}
      {activeTab === "visitor" && (
        <div className="p-5 sm:p-6 space-y-4">
          <div className="bg-slate-50 dark:bg-[#071322] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#0B1E36] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span>Campus Security &amp; Visiting Policy</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To ensure safeguarding and scholarly quiet throughout term-time, Prince College operates a secure badge entry system for all non-resident visitors.
            </p>
          </div>

          <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-slate-800 dark:text-slate-200">Advance Appointment:</strong> Prospective families, academic guests, and inspectors should schedule appointments prior to arrival via our Registry.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-slate-800 dark:text-slate-200">Government Photo ID:</strong> All visitors aged 18+ must present a valid passport or driving licence at Portcullis Welcome Lodge to receive a visitor lanyard.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0B1422]">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-slate-800 dark:text-slate-200">Accessibility &amp; Lifts:</strong> The Westminster campus is fully accessible with step-free entrances, passenger lifts to all floors, and hearing induction loops.
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
            <span>Visitor Concierge Desk:</span>
            <span className="font-semibold text-[#0B1E36] dark:text-[#D4AF37]">08:00 – 17:30 (Term Time)</span>
          </div>
        </div>
      )}

      {/* Footer Strip */}
      <div className="bg-slate-50 dark:bg-[#071322] px-5 py-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>25 Great Smith Street, Westminster, SW1P 3BL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Admissions Line:
          </span>
          <a
            href="mailto:princecollege54@gmail.com"
            className="font-bold text-[#C59B27] hover:underline"
          >
            princecollege54@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
