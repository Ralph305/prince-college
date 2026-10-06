# Prince College London — Official Web Portal

A production-ready web application built for **Prince College London**, an academic college situated in Queen's Square, Bloomsbury, London WC1N 3AZ.

![Prince College Logo](/public/images/logo.png)

---

## 🏛️ Project Overview

Prince College London provides GCSE, A-Level, and BTEC pathways preparing students for admission into Oxford, Cambridge, Imperial, UCL, LSE, and leading global universities.

### Key Features
- **Next.js 16 (App Router)** with React 19, TypeScript, and Tailwind CSS.
- **Academic Design System**: Deep British Navy (`#0B1E36`), Royal Antique Gold (`#C59B27`), pristine card surfaces, and elegant Playfair Display serif typography.
- **Official Crest & Real Photography**: High-definition London collegiate architecture and STEM laboratory assets.
- **Dynamic Course Directory**: Live client search, multi-criteria filtering by level (GCSE, A-Level, BTEC) and academic department (Sciences, Mathematics, Humanities, Languages, Business, Arts, Technology).
- **Mandatory "Grade" Badge**: Every course card prominently displays its qualification tier and grading scale.
- **Grades & Assessment Scale Matrix**: Interactive reference tables explaining the GCSE 9-1 system, A-Level A*-E matrix with UCAS Tariff points, and BTEC Level 3 criteria.
- **Admissions & Contact Portals**: Built with multi-field client validation, dedicated API endpoints (`/api/admissions`, `/api/contact`), and official reference number generators.
- **Accessibility & SEO**: Semantic HTML5, WCAG 2.1 AA contrast ratios, skip-to-content accessibility link, dynamic sitemap (`/sitemap.xml`), and robots protocol.
- **Theme Toggle**: Academic light mode by default with dark theme support.

---

## 📁 Folder Structure

```
Prince college/
├── data/
│   ├── courses.json        # 14+ complete course specifications
│   └── grades.json         # GCSE, A-Level, and BTEC benchmark scales
├── public/
│   ├── images/
│   │   ├── logo.png             # Official Prince College Crest
│   │   ├── hero-campus.jpg      # Bloomsbury Quadrangle and Library
│   │   ├── students-library.jpg # Academic research library
│   │   ├── science-lab.jpg      # Advanced STEM laboratory
│   │   └── principal.jpg        # Principal Dr. Eleanor Vance portrait
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── admissions/route.ts  # Admissions dossier API endpoint
│   │   │   └── contact/route.ts     # General enquiries API endpoint
│   │   ├── about/page.tsx           # History, mission, values, leadership
│   │   ├── admissions/page.tsx      # Process steps, key dates, form
│   │   ├── contact/page.tsx         # Address, transport, map, contact form
│   │   ├── courses/
│   │   │   ├── page.tsx             # Searchable and filterable course list
│   │   │   └── [slug]/page.tsx      # Dynamic syllabus & requirements page
│   │   ├── grades/page.tsx          # GCSE, A-Level, BTEC comparison tables
│   │   ├── privacy/page.tsx         # GDPR and accessibility statements
│   │   ├── globals.css              # Design tokens and custom utilities
│   │   ├── layout.tsx               # Root layout, fonts, SEO, navbar, footer
│   │   ├── not-found.tsx            # Custom collegiate 404 page
│   │   ├── page.tsx                 # Homepage with hero, stats, testimonials
│   │   ├── robots.ts                # Crawler indexing rules
│   │   └── sitemap.ts               # Dynamic XML sitemap
│   ├── components/
│   │   ├── AdmissionsForm.tsx       # Interactive admissions form
│   │   ├── ContactForm.tsx          # Interactive contact form
│   │   ├── CourseCard.tsx           # Course card with Grade badge
│   │   ├── CourseFilters.tsx        # Search, filters, sort, reset
│   │   ├── Footer.tsx               # Academic footer with badges
│   │   ├── Navbar.tsx               # Responsive header navigation
│   │   ├── ThemeProvider.tsx        # Light/dark theme context
│   │   └── ThemeToggle.tsx          # Theme switcher button
│   ├── lib/
│   │   └── courses.ts               # Helpers to query courses & grades
│   └── types/
│       └── index.ts                 # Full TypeScript definitions
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (version 18 or newer) and npm installed:
```bash
node -v
npm -v
```

### 2. Installation
Install all dependencies:
```bash
npm install
```

### 3. Running the Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### 4. Production Build
To create a production-optimized build and test it locally:
```bash
npm run build
npm run start
```

---

## ✏️ How to Add or Edit Courses & Grades

All academic data is deliberately stored in clean, editable JSON files located in the root `/data` folder:

### Adding a New Course (`/data/courses.json`)
Open `data/courses.json` and append a new JSON object adhering to the following schema:

```json
{
  "id": "econ-a-level",
  "slug": "a-level-economics",
  "title": "A-Level Economics",
  "department": "Business",
  "level": "A-Level",
  "yearGroup": "Year 12-13 (Sixth Form)",
  "duration": "2 Years (Full-Time)",
  "examBoard": "Edexcel Economics A (9EC0)",
  "gradingScale": "A* - E",
  "entryRequirements": "Minimum Grade 6 in GCSE Mathematics and Grade 6 in GCSE English Language.",
  "description": "Examines how societies allocate scarce resources...",
  "teacher": {
    "name": "Mr. Jonathan Hayes",
    "role": "Head of Economics & Finance",
    "credentials": "MSc Financial Economics (LSE), CFA"
  },
  "fees": "Fully Funded (UK 16-19) / £9,500 pa (International)",
  "assessmentMethod": "Three 2-hour written exam papers.",
  "keyTopics": [
    "Market Mechanisms & Elasticity",
    "Monetary and Fiscal Policies"
  ],
  "careerPaths": [
    "Economics & Finance",
    "Investment Banking",
    "Policy Analysis"
  ],
  "featured": true,
  "badgeColor": "yellow"
}
```

* **Valid Departments**: `"Sciences"`, `"Mathematics"`, `"Humanities"`, `"Languages"`, `"Business"`, `"Arts"`, `"Technology"`.
* **Valid Levels**: `"GCSE"`, `"A-Level"`, `"BTEC"`.
* The course will automatically appear in the Courses search/filter directory, home featured grid (if `featured: true`), and dynamically render at `/courses/[slug]`.

### Editing Grades & Assessment Benchmarks (`/data/grades.json`)
Open `data/grades.json` to edit or update grade thresholds, UCAS points, or performance descriptors across:
- `gcse`: Grade, legacy equivalent, performance standard, and benchmark status.
- `aLevel`: Grade, UCAS Tariff points, benchmark mark, and Russell Group targets.
- `btec`: Award grade, single UCAS, triple extended diploma UCAS, and criteria description.

---

## 🛡️ Validation & Testing Checklist

- [x] Responsive layout tested on desktop, tablet, and mobile viewport widths.
- [x] Grade badge verified on every Course card.
- [x] Admissions form submits successfully to `/api/admissions` with validation and reference ID generation.
- [x] Contact form submits to `/api/contact` with inquiry ticketing.
- [x] Static sitemap (`/sitemap.xml`) and robots file (`/robots.txt`) configured.
- [x] Accessible contrast ratios and keyboard navigation tested.

---

## 🏛️ Contact & Accreditation Information

**Prince College London**  
14-18 Queen's Square, Bloomsbury, London WC1N 3AZ  
Official Contact Email: `princecollege54@gmail.com` (Contact is exclusively via email)  
DfE Reference: `#312/6045` • Ofsted Rating: **Outstanding**
