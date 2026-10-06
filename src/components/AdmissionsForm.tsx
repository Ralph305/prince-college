"use client";

import React, { useState } from "react";
import { Course } from "@/types";
import { CheckCircle2, AlertCircle, Loader2, Send, GraduationCap } from "lucide-react";

interface AdmissionsFormProps {
  courses: Course[];
  preselectedSlug?: string;
}

export function AdmissionsForm({ courses, preselectedSlug }: AdmissionsFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    currentSchool: "",
    courseSlug: preselectedSlug || (courses[0]?.slug ?? ""),
    intendedYear: "September 2026",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    personalStatement: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [referenceCode, setReferenceCode] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setReferenceCode(data.referenceNumber);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit application.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 rounded-2xl p-8 sm:p-12 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600 dark:text-emerald-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-200/60 dark:bg-emerald-900/50 px-3 py-1 rounded-full">
          Application Received
        </span>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-emerald-900 dark:text-emerald-100 mt-4 mb-3">
          Welcome to Prince College London Admissions
        </h3>
        <p className="text-sm sm:text-base text-emerald-800 dark:text-emerald-200 max-w-xl mx-auto leading-relaxed mb-6">
          Thank you, <strong className="font-semibold">{formData.fullName}</strong>. Your preliminary application dossier has been officially registered with our Registry Office.
        </p>

        <div className="bg-white dark:bg-[#071424] border border-emerald-200 dark:border-emerald-800/80 rounded-xl p-5 max-w-md mx-auto mb-8 shadow-sm">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">
            Application Reference Number
          </p>
          <p className="font-mono text-2xl font-bold text-[#0B1E36] dark:text-[#D4AF37]">
            {referenceCode}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Please quote this reference in all correspondence with the Admissions Tutor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                dateOfBirth: "",
                currentSchool: "",
                courseSlug: courses[0]?.slug ?? "",
                intendedYear: "September 2026",
                parentName: "",
                parentEmail: "",
                parentPhone: "",
                personalStatement: "",
              });
            }}
            className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:underline px-4 py-2"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl flex items-start gap-3 text-rose-800 dark:text-rose-200 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
          <div>
            <p className="font-semibold">Application Submission Error</p>
            <p className="text-xs text-rose-700 dark:text-rose-300">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Student Personal Info */}
      <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
          <GraduationCap className="w-5 h-5 text-[#C59B27]" />
          <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white">
            1. Applicant Information
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Full Legal Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Alexander James Wright"
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27] ${
                fieldErrors.fullName ? "border-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
            />
            {fieldErrors.fullName && (
              <p className="text-xs text-rose-500 mt-1">{fieldErrors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Applicant Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alexander.wright@example.co.uk"
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27] ${
                fieldErrors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-rose-500 mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Contact Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +44 7700 900123"
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27] ${
                fieldErrors.phone ? "border-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
            />
            {fieldErrors.phone && (
              <p className="text-xs text-rose-500 mt-1">{fieldErrors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="currentSchool" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Current School / Educational Institution
            </label>
            <input
              type="text"
              id="currentSchool"
              name="currentSchool"
              value={formData.currentSchool}
              onChange={handleChange}
              placeholder="e.g. St. Paul's Grammar School, London"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            />
          </div>
        </div>
      </div>

      {/* Programme Selection */}
      <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800">
          2. Academic Programme
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="courseSlug" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Intended Course *
            </label>
            <select
              id="courseSlug"
              name="courseSlug"
              required
              value={formData.courseSlug}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27] ${
                fieldErrors.courseSlug ? "border-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
            >
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title} ({c.level})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="intendedYear" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Entry Intake *
            </label>
            <select
              id="intendedYear"
              name="intendedYear"
              required
              value={formData.intendedYear}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            >
              <option value="September 2026">Autumn Intake (September 2026)</option>
              <option value="January 2027">Spring Fast-Track (January 2027)</option>
              <option value="September 2027">Autumn Intake (September 2027)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="personalStatement" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Personal Statement / Academic Aspirations
            </label>
            <textarea
              id="personalStatement"
              name="personalStatement"
              rows={4}
              value={formData.personalStatement}
              onChange={handleChange}
              placeholder="Outline your academic passions, target university degrees, and why you are applying to Prince College London..."
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Parent/Guardian Details */}
      <div className="bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <h3 className="font-serif font-bold text-lg text-[#0B1E36] dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800">
          3. Parent or Guardian Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Guardian Full Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Dr. Catherine Wright"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <div>
            <label htmlFor="parentEmail" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Guardian Email
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              placeholder="e.g. catherine.wright@example.com"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          <div>
            <label htmlFor="parentPhone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Guardian Telephone
            </label>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="e.g. +44 7700 900456"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all hover:shadow-lg disabled:opacity-50 cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Dossier to Registry...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Official Application</span>
            </>
          )}
        </button>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
          By submitting, you agree to Prince College London processing your personal data strictly in accordance with UK GDPR.
        </p>
      </div>
    </form>
  );
}
