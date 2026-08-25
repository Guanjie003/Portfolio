/**
 * ✏️ The only file you need to edit to change the whole site.
 * Swap the copy, links and projects below for your own.
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
  name: "Guanjie",
  /** The name on the home page — always stretched to the full width. Shorter names render bigger. */
  displayName: "Guanjie",
  fullName: "Guanjie",
  role: "Full-Stack Developer",
  /** One line in the meta bar under the hero. */
  tagline:
    "I design, build and ship web apps end to end — from the first screen to the last line of the pipeline.",
  location: "Chiang Rai, Thailand",
  availability: "Available for work",
  email: "engguanjie@gmail.com",
  /** Drop resume.pdf into /public and this link works immediately. */
  resumeUrl: "/resume.pdf",
  about: [
    "I started out wanting to know how the websites I used every day actually worked, and never stopped writing code. These days I work across the whole stack — laying out screens in Figma, wiring up APIs, and looking after the pipeline all the way to production.",
    "What I care about most is load speed, accessibility, and code someone else can read. A good project is one that can still be changed a year from now.",
  ],
  facts: [
    { label: "Experience", value: "3+ years" },
    { label: "Projects shipped", value: "20+" },
    { label: "Core stack", value: "TypeScript" },
    { label: "Languages", value: "EN / TH" },
  ],
} as const;

/** The oversized words stacked in the middle of the page. */
export const statement = ["Design.", "Code.", "Deploy."];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Guanjie003", handle: "Guanjie003" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", handle: "your-handle" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "REST / GraphQL"],
  },
  {
    name: "Design",
    items: ["Figma", "Design systems", "Wireframing", "Prototyping", "Accessibility"],
  },
  {
    name: "DevOps",
    items: ["Docker", "GitLab CI", "GitHub Actions", "Vercel", "Nginx", "Linux"],
  },
];

/** Ticker that runs between sections. */
export const marqueeItems = [
  "TypeScript",
  "Next.js",
  "React",
  "Vue",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Figma",
  "Tailwind",
  "CI / CD",
];

export const projects: Project[] = [
  {
    no: "01",
    slug: "marketplace",
    title: "Zdrive Marketplace",
    tagline: "Used-car buying and selling platform",
    description:
      "A marketplace pulling listings, viewing appointments and a dealer dashboard into one place. Rebuilt the search flow so buyers find the right car noticeably faster.",
    year: "2025",
    role: "Design + Full-stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    links: { demo: "#", repo: "#" },
  },
  {
    no: "02",
    slug: "admin-suite",
    title: "Ops Admin Suite",
    tagline: "Back office for the operations team",
    description:
      "Consolidated scattered back-office tasks into a single console, with fine-grained permissions, real-time reporting and Excel export.",
    year: "2024",
    role: "Frontend lead",
    stack: ["Vue", "Vuex", "Chart.js", "Docker"],
    links: { demo: "#", caseStudy: "#" },
  },
  {
    no: "03",
    slug: "attendance",
    title: "Face Check-in",
    tagline: "Attendance tracking by face scan",
    description:
      "Clock in through the browser camera. Face processing runs entirely client-side so no images ever leave the device, with monthly summary reports for HR.",
    year: "2024",
    role: "Full-stack",
    stack: ["Vue", "face-api.js", "Node.js", "MongoDB"],
    links: { repo: "#" },
  },
  {
    no: "04",
    slug: "design-system",
    title: "Sprout Design System",
    tagline: "Shared component library for the team",
    description:
      "Tokens, components and documentation that kept four products visually consistent and made new screens far quicker to assemble.",
    year: "2023",
    role: "Design engineer",
    stack: ["React", "Storybook", "Figma", "CSS variables"],
    links: { demo: "#" },
  },
  {
    no: "05",
    slug: "queue-app",
    title: "Clinic Queue",
    tagline: "Appointment queueing for clinics",
    description:
      "Book ahead, get notified over LINE, and a waiting-room display that calls the next number. Cut average patient wait times measurably.",
    year: "2023",
    role: "Full-stack",
    stack: ["Next.js", "Prisma", "LINE API"],
    links: { demo: "#", repo: "#" },
  },
];

export const jobs: Job[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 — Now",
    location: "Remote",
    summary:
      "Building web apps for clients end to end — scoping the problem, designing it, and shipping it to production.",
    highlights: [
      "Delivered more than 10 web apps on schedule",
      "Set up CI/CD so clients can deploy without me",
      "Lifted client Lighthouse performance scores from 60 to 95+",
    ],
  },
  {
    company: "Tech Company",
    role: "Frontend Developer",
    period: "2022 — 2024",
    location: "Chiang Rai",
    summary:
      "Owned the frontend of an internal platform and acted as the bridge between the design and backend teams.",
    highlights: [
      "Built a design system shared across four products",
      "Nearly halved pipeline build times",
      "Shipped full i18n support for English and Thai",
    ],
  },
  {
    company: "Mae Fah Luang University",
    role: "B.Eng. Computer Engineering",
    period: "2018 — 2022",
    location: "Chiang Rai",
    summary: "Computer engineering, with a final-year project on web systems.",
    highlights: ["Graduated with an A on the final project", "Teaching assistant for intro programming"],
  },
];

export const navItems = [
  { no: "01", label: "Work", href: "#work" },
  { no: "02", label: "About", href: "#about" },
  { no: "03", label: "Capabilities", href: "#capabilities" },
  { no: "04", label: "Experience", href: "#experience" },
  { no: "05", label: "Contact", href: "#contact" },
];

/** Used in production — change this to your own domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app";
