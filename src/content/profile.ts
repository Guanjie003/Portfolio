/**
 * ✏️ The only file you need to edit to change the whole site.
 *
 * Anything marked TODO is a guess drawn from the GitHub repos and course work —
 * read it, correct it, then delete the marker.
 */

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type Project = {
  no: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  links: { demo?: string; repo?: string; caseStudy?: string };
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export const profile = {
  name: "Guan Jie",
  /** The name on the home page — always stretched to the full width. Shorter names render bigger. */
  displayName: "Guan Jie",
  fullName: "Guan Jie Khamchan",
  role: "Software Engineering Student",
  /** One line in the meta bar under the hero. */
  tagline:
    "Software engineering student at Mae Fah Luang University. I build full-stack web apps for coursework and side projects, and I am looking for an internship where I can do it on a real team.",
  availability: "Open to internships",
  email: "engguanjie@gmail.com",
  /** Drop resume.pdf into /public and this link works immediately. */
  resumeUrl: "/resume.pdf",
  about: [
    "I am in my third year of software engineering at Mae Fah Luang University. Most of what I know came from building things end to end rather than from lectures — course projects and side projects, front end through to the service behind it.",
    "I like working across the whole stack because it is the only way to see how a decision on one side lands on the other. What I want next is an internship where the code has real users and someone more experienced reviews my pull requests.",
  ],
  facts: [
    { label: "Focus", value: "Full-stack web" },
    { label: "Studying", value: "SE at MFU" },
    { label: "Core stack", value: "React / Java" },
    { label: "Languages", value: "EN / TH" },
  ],
} as const;

/** The oversized words stacked in the middle of the page. */
export const statement = ["Design.", "Code.", "Deploy."];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Guanjie003", handle: "Guanjie003" },
  // TODO: add your real LinkedIn URL, or delete this entry
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", handle: "your-handle" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
];

// TODO: confirm this list — it is inferred from what the repos actually use
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Vue", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "REST APIs", "MySQL"],
  },
  {
    name: "Design",
    items: ["Figma", "Design systems", "Wireframing", "Accessibility"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Maven", "Docker", "Vercel"],
  },
];

/** Ticker that runs between sections. */
export const marqueeItems = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Java",
  "Spring Boot",
  "Figma",
  "Git",
  "Tailwind",
];

/**
 * Work samples. Empty for now — the Work section and its index entry disappear
 * on their own while this is empty, and come back as soon as it is not.
 *
 * To add one, drop an object in and renumber `no` from "01" downwards:
 *
 *   {
 *     no: "01",
 *     slug: "mfu-news",
 *     title: "MFU News",
 *     tagline: "Course final project — campus news and activities",
 *     description: "What it does, what you decided, what came out of it.",
 *     year: "2024",
 *     role: "Full-stack",
 *     stack: ["React", "Java", "Maven", "REST API"],
 *     links: { repo: "https://github.com/Guanjie003/final-project-mfu-news" },
 *   },
 */
export const projects: Project[] = [];

export const jobs: Job[] = [
  {
    company: "Mae Fah Luang University",
    role: "B.Eng. Software Engineering",
    period: "2023 — Present",
    location: "",
    summary: "Third year, currently taking Emerging Technology for Software Engineering.",
    // TODO: swap these for the coursework and results you actually want to show
    highlights: [
      "Course final project: a React front end on a Java service",
      "Coursework across web development, databases and software engineering practice",
    ],
  },
];

/**
 * Sections that actually render, in page order. Work drops out while there are
 * no projects, and everything below it renumbers itself.
 */
export const sections = [
  ...(projects.length > 0 ? [{ id: "work", label: "Work" }] : []),
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const navItems = sections.map((section, i) => ({
  no: String(i + 1).padStart(2, "0"),
  label: section.label,
  href: `#${section.id}`,
}));

/** The number shown in a section header, e.g. "02". */
export function sectionNo(id: string) {
  const i = sections.findIndex((section) => section.id === id);
  return i === -1 ? "" : String(i + 1).padStart(2, "0");
}

/** Used in production — change this to your own domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app";
