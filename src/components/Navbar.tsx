"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, MapPin, Sparkles, ChevronRight, GraduationCap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/grades", label: "Grades & Assessment" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#071424] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              25 Great Smith Street, Westminster, London SW1P 3BL
            </span>
            <a
              href="mailto:princecollege54@gmail.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              princecollege54@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="/admissions#dates"
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-[#E5C35D] font-medium"
            >
              <Sparkles className="w-3 h-3" />
              <span>Next Open Evening: 14 November 2026</span>
            </Link>
            <div className="h-3 w-px bg-slate-700 hidden sm:block"></div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 dark:bg-[#0B1E36]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & College Brand */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="Prince College London Home"
            >
              <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Prince College Crest"
                  fill
                  sizes="48px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl md:text-2xl tracking-wider text-[#0B1E36] dark:text-white uppercase leading-none">
                  Prince College
                </span>
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C59B27] dark:text-[#D4AF37] uppercase mt-1">
                  London • 40 Years of Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative ${
                      isActive
                        ? "text-[#0B1E36] dark:text-[#D4AF37] font-semibold"
                        : "text-slate-700 dark:text-slate-200 hover:text-[#0B1E36] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C59B27] dark:bg-[#D4AF37] rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center gap-2 bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-semibold px-5 py-2.5 rounded-md text-sm shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply Now</span>
              </Link>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-[#0B1E36] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071424] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 dark:bg-slate-800 text-[#0B1E36] dark:text-[#D4AF37] font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/admissions"
                className="w-full flex items-center justify-center gap-2 bg-[#C59B27] hover:bg-[#B38A1F] text-[#0B1E36] font-semibold px-4 py-3 rounded-lg text-base text-center shadow-sm"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply for 2026 Entry</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
