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
    "I am in my third year of software engineering at Mae Fah Luang University. Most of what I know came from building things end to end — a React and Java news platform for a course final, an admin portal with Google sign-in and OTP, and this site.",
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

export const projects: Project[] = [
  {
    no: "01",
    slug: "mfu-news",
    title: "MFU News",
    tagline: "Course final project — campus news and activities",
    // TODO: describe what the app actually does for its users, and add a result if you have one
    description:
      "A news and activity platform split into a React front end and a Java service behind it. Built as the final project for a university course, with the two halves developed and run separately.",
    year: "2024",
    role: "Full-stack",
    stack: ["React", "Java", "Maven", "REST API"],
    links: { repo: "https://github.com/Guanjie003/final-project-mfu-news" },
  },
  {
    no: "02",
    slug: "admin-portal",
    title: "Admin Portal",
    tagline: "Multi-app back office with Google sign-in and OTP",
    // TODO: this is read off the source — correct anything wrong and say what it was built for
    description:
      "A Vue admin portal built on CoreUI: Google OAuth sign-in with an OTP second factor, a dashboard listing the apps a user can reach, multi-language content editing, QR code generation and Excel export.",
    year: "2025",
    role: "Frontend",
    stack: ["Vue", "Vuex", "CoreUI", "Google OAuth"],
    links: {},
  },
  {
    no: "03",
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "Monochrome editorial site, designed and built from scratch",
    description:
      "Designed in Figma as a small token system, then built as a static Next.js site. Type-driven layout with no accent colour, a name that fits the viewport at any width, and around 103 kB of JavaScript on first load.",
    year: "2026",
    role: "Design + Build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    links: { repo: "https://github.com/Guanjie003/Portfolio" },
  },
];

export const jobs: Job[] = [
  {
    company: "Mae Fah Luang University",
    role: "B.Eng. Software Engineering",
    period: "2023 — Present",
    location: "",
    summary: "Third year, currently taking Emerging Technology for Software Engineering.",
    // TODO: swap these for the coursework and results you actually want to show
    highlights: [
      "Built MFU News as a course final project, React front end on a Java service",
      "Coursework across web development, databases and software engineering practice",
    ],
  },
];

export const navItems = [
  { no: "01", label: "Work", href: "#work" },
  { no: "02", label: "About", href: "#about" },
  { no: "03", label: "Capabilities", href: "#capabilities" },
  { no: "04", label: "Education", href: "#experience" },
  { no: "05", label: "Contact", href: "#contact" },
];

/** Used in production — change this to your own domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app";
