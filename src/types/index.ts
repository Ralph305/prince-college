export type Department = 
  | "Sciences" 
  | "Mathematics" 
  | "Humanities" 
  | "Languages" 
  | "Business" 
  | "Arts" 
  | "Technology";

export type Level = "GCSE" | "A-Level" | "BTEC";

export interface TeacherInfo {
  name: string;
  role: string;
  credentials: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  department: Department;
  level: Level;
  yearGroup: string;
  duration: string;
  examBoard: string;
  gradingScale: string;
  entryRequirements: string;
  description: string;
  teacher: TeacherInfo;
  fees: string;
  assessmentMethod: string;
  keyTopics?: string[];
  careerPaths?: string[];
  featured?: boolean;
  badgeColor?: string;
}

export interface GcseGradeRow {
  grade: string;
  oldLetter: string;
  description: string;
  ucasEquivalent: string;
  benchmark: string;
}

export interface ALevelGradeRow {
  grade: string;
  ucasPoints: number;
  percentageBenchmark: string;
  description: string;
  typicalOffer: string;
}

export interface BtecGradeRow {
  grade: string;
  singleUcas: number;
  extendedDiplomaUcas: number;
  aLevelEquivalent: string;
  description: string;
}

export interface GradesData {
  gcse: GcseGradeRow[];
  aLevel: ALevelGradeRow[];
  btec: BtecGradeRow[];
}

export interface AdmissionFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  currentSchool: string;
  courseSlug: string;
  intendedYear: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  personalStatement: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  enquiryType: string;
  message: string;
}
