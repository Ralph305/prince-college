"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    enquiryType: "General Admissions",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successInfo, setSuccessInfo] = useState({ message: "", ticketId: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessInfo({ message: data.message, ticketId: data.ticketId });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Could not dispatch enquiry.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network connection failure. Please call our reception.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-2xl p-8 text-center animate-fadeIn">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
        <h3 className="font-serif font-bold text-2xl text-emerald-900 dark:text-emerald-100 mb-2">
          Message Dispatched Successfully
        </h3>
        <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-4">
          {successInfo.message}
        </p>
        <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400">
          Enquiry Tracking ID: <strong>{successInfo.ticketId}</strong>
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              enquiryType: "General Admissions",
              message: "",
            });
          }}
          className="mt-6 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:underline"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl flex items-center gap-3 text-rose-800 dark:text-rose-200 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alexander Wright"
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alexander@example.co.uk"
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
            Telephone / Mobile Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +44 7700 900123"
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
          />
        </div>

        <div>
          <label htmlFor="contact-enquiryType" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
            Department / Nature of Enquiry
          </label>
          <select
            id="contact-enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
          >
            <option value="General Admissions">Admissions & Applications</option>
            <option value="Course Enquiries">Course & Curriculum Guidance</option>
            <option value="Scholarships & Bursaries">Scholarships & Financial Aid</option>
            <option value="Campus Visits">Open Days & Campus Tours</option>
            <option value="International Students">International Visa & Tier 4</option>
            <option value="Principal's Office">Principal's Office / General Registry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
          Subject *
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Inquiry regarding A-Level Chemistry entry requirements"
          className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
          Your Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please write your detailed enquiry here..."
          className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#071424] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#C59B27]"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1E36] hover:bg-[#132B4F] text-white font-semibold text-sm px-7 py-3.5 rounded-lg shadow-sm transition-all hover:shadow disabled:opacity-50 cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-[#C59B27]" />
            <span>Send Enquiry to College</span>
          </>
        )}
      </button>
    </form>
  );
}
