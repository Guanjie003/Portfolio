/**
 * ✏️ The only file you need to edit to change the whole site.
 *
 * Content is taken from Guan_Jie_Khamchan_Resume.pdf — keep the two in step when
 * either one changes.
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
  role: "Full-stack Developer",
  /** One line in the meta bar under the hero. */
  tagline:
    "Software engineering student at Mae Fah Luang University, working across React and TypeScript on the front end through to Node and Spring Boot behind it — and a deep learning pipeline on the side.",
  availability: "Open to a 5-month co-op · Jan–May 2027 · Bangkok",
  email: "engguanjie@gmail.com",
  /** Drop resume.pdf into /public and this link works immediately. */
  resumeUrl: "/resume.pdf",
  about: [
    "I study software engineering at Mae Fah Luang University, graduating in 2027. Most of what I know came from building things end to end rather than from lectures — a survey platform running on Docker Compose, a booking front end in Next.js, and a semantic segmentation pipeline in PyTorch.",
    "I like working across the whole stack because it is the only way to see how a decision on one side lands on the other. What I want next is a co-op placement where the code has real users and someone more experienced reviews my pull requests.",
  ],
  facts: [
    { label: "Focus", value: "Full-stack web" },
    { label: "Graduating", value: "2027" },
    { label: "Core stack", value: "React / TypeScript" },
    { label: "Languages", value: "EN / TH / ZH" },
  ],
} as const;

/** The oversized words stacked in the middle of the page. */
export const statement = ["Design.", "Code.", "Deploy."];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Guanjie003", handle: "Guanjie003" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/guan-jie-eng/", handle: "guan-jie-eng" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Radix UI", "react-hook-form"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Hibernate", "REST API design", "OpenAPI / Swagger"],
  },
  {
    name: "Databases",
    items: ["MongoDB", "Redis", "MySQL"],
  },
  {
    name: "DevOps",
    items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "GitLab CI"],
  },
  {
    name: "ML & CV",
    items: ["PyTorch", "OpenCV", "Albumentations", "NumPy"],
  },
];

/** Ticker that runs between sections. */
export const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "Docker",
  "PyTorch",
  "Nginx",
];

export const projects: Project[] = [
  {
    no: "01",
    slug: "land-cover",
    title: "Land Cover Semantic Segmentation",
    tagline: "Deep learning pipeline for land-use mapping",
    description:
      "Owned the pipeline end to end — dataset loading, model and loss construction, training loop, validation, checkpointing, evaluation and inference — for land-use segmentation on the OpenEarthMap dataset. A U-Net with an EfficientNet-B4 encoder produces 8-class pixel predictions, trained with a combined CrossEntropy and Dice loss. Mixed-precision training halved GPU memory use, and tiled inference let large scenes be predicted without downsampling small features away.",
    year: "2025–now",
    role: "Owner",
    stack: ["PyTorch", "EfficientNet-B4", "OpenCV", "NumPy"],
    links: { repo: "https://github.com/Leng201202/lulc_cei" },
  },
  {
    no: "02",
    slug: "e-questionnaires",
    title: "Digital University E-Questionnaires",
    tagline: "Survey platform for educational institutions",
    description:
      "An enterprise questionnaire platform on a decoupled Vue.js and Node/Express architecture, containerised end to end with Docker Compose and Nginx so the full stack deploys with a single command — 448 commits across the team. Built the dynamic form-builder that lets administrators compose questionnaires without a developer, and the API integration layer wiring the front end to the backend. Contributed role-based access control and a real-time analytics dashboard backed by MongoDB 7.0 with Redis caching on read-heavy queries.",
    year: "2025–26",
    role: "Full-stack",
    stack: ["Vue.js", "Node.js", "Express", "MongoDB", "Redis", "Docker", "Nginx"],
    links: { repo: "https://github.com/Napus-BackendDev/Digital-University-Project-SE" },
  },
  {
    no: "03",
    slug: "dormitory-booking",
    title: "Dormitory Booking System",
    tagline: "Booking and maintenance platform for a dormitory",
    description:
      "Owned the entire front end, built with Next.js 14 and React 18 in TypeScript, styled with Tailwind CSS and composed from Radix UI primitives so components were keyboard-accessible by default. Booking and request flows validate client-side with react-hook-form, with Recharts dashboards and toast notifications, responsive across mobile and desktop. Built against the team’s OpenAPI specification so the front end could go in parallel with the backend rather than waiting on it.",
    year: "2025",
    role: "Frontend owner",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Radix UI"],
    links: { repo: "https://github.com/Napus-BackendDev/Dormitory-Booking-System" },
  },
  {
    no: "04",
    slug: "fortune",
    title: "Fortune",
    tagline: "Tarot and horoscope app, live on Google Play",
    description:
      "A daily tarot and horoscope companion: a personalised card draw each day, zodiac horoscopes by day, week and month, and a saved history so past readings can be looked back on. Designed the interface and built the front end; published on Google Play by the SE61 MFU Software Engineering team.",
    year: "2025",
    // TODO: add the framework you built the app in, e.g. Flutter or React Native
    role: "Design + Frontend",
    stack: ["UI design", "Mobile frontend"],
    links: { demo: "https://play.google.com/store/apps/details?id=com.napus1234.fortune" },
  },
];

export const jobs: Job[] = [
  {
    company: "Mae Fah Luang University",
    role: "Bachelor of Engineering, Software Engineering",
    period: "Expected 2027",
    location: "Chiang Rai, Thailand",
    summary:
      "Relevant coursework: Software Engineering, Web Application Development, Database Systems, Data Structures & Algorithms, Machine Learning.",
    highlights: [
      "MFU Software Engineer Hackathon 2025 — built a mobile sleep-tracking app in the health track with a team of four, idea to working prototype within the event",
      "Spoken languages: Mandarin Chinese (native), Thai (fluent), English (intermediate working proficiency)",
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
