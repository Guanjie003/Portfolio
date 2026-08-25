/**
 * ✏️ ไฟล์เดียวที่ต้องแก้เพื่อเปลี่ยนเนื้อหาทั้งเว็บ
 * เปลี่ยนข้อความ/ลิงก์/โปรเจคด้านล่างให้เป็นข้อมูลจริงของคุณได้เลย
 */

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  featured: boolean;
  links: { demo?: string; repo?: string; caseStudy?: string };
  /** ไล่สีของการ์ด (ใช้แทนรูปได้ หรือใส่ image เป็น path ใน /public) */
  gradient: [string, string];
  image?: string;
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
  fullName: "Guanjie",
  role: "Full-Stack Developer",
  /** ประโยคเปิดหน้า Hero — สั้น คม บอกว่าคุณทำอะไรให้ใคร */
  headline: "ผมสร้างเว็บแอปที่ใช้งานจริง ตั้งแต่ดีไซน์จนถึงดีพลอย",
  headlineAccent: "ใช้งานจริง",
  subheadline:
    "Full-stack developer ที่สนใจงาน product — ออกแบบ UI ที่อ่านง่าย เขียน frontend/backend ให้ maintain ต่อได้ และส่งขึ้น production ด้วย CI/CD",
  location: "Chiang Rai, Thailand",
  availability: "เปิดรับงานฟรีแลนซ์และตำแหน่งประจำ",
  email: "engguanjie@gmail.com",
  /** วางไฟล์ resume.pdf ไว้ใน /public แล้วลิงก์จะทำงานทันที */
  resumeUrl: "/resume.pdf",
  about: [
    "ผมเริ่มจากความอยากรู้ว่าเว็บที่ใช้ทุกวันทำงานยังไง แล้วก็ไม่ได้หยุดเขียนโค้ดอีกเลย ทุกวันนี้ผมทำงานครบทั้งสาย — วางโครงหน้าจอใน Figma, ต่อ API, ดูแล pipeline จนขึ้น production",
    "สิ่งที่ผมให้ความสำคัญที่สุดคือ ความเร็วในการโหลด, การเข้าถึงได้ (accessibility) และโค้ดที่คนอื่นอ่านต่อได้ เพราะโปรเจคที่ดีคือโปรเจคที่ยังแก้ต่อได้ในอีกหนึ่งปี",
  ],
  facts: [
    { label: "ประสบการณ์", value: "3+ ปี" },
    { label: "โปรเจคที่ส่งมอบ", value: "20+" },
    { label: "ถนัดที่สุด", value: "TypeScript" },
    { label: "ภาษา", value: "ไทย / English" },
  ],
} as const;

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Guanjie003", handle: "@Guanjie003" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", handle: "/in/your-handle" },
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

export const projects: Project[] = [
  {
    slug: "marketplace",
    title: "Zdrive Marketplace",
    tagline: "แพลตฟอร์มซื้อขายรถมือสอง",
    description:
      "ระบบ marketplace ที่รวมประกาศขายรถ ระบบนัดชมรถ และแดชบอร์ดสำหรับดีลเลอร์ ออกแบบ flow การค้นหาใหม่จนผู้ใช้หาเจอเร็วขึ้นชัดเจน",
    year: "2025",
    role: "Design + Full-stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    featured: true,
    links: { demo: "#", repo: "#" },
    gradient: ["#ff6b45", "#ffb43a"],
  },
  {
    slug: "admin-suite",
    title: "Ops Admin Suite",
    tagline: "แดชบอร์ดหลังบ้านสำหรับทีมปฏิบัติการ",
    description:
      "รวมงานหลังบ้านที่กระจัดกระจายให้อยู่ในที่เดียว มีระบบสิทธิ์แบบละเอียด รายงานแบบเรียลไทม์ และ export เป็น Excel ได้",
    year: "2024",
    role: "Frontend lead",
    stack: ["Vue", "Vuex", "Chart.js", "Docker"],
    featured: true,
    links: { demo: "#", caseStudy: "#" },
    gradient: ["#3b82f6", "#22d3ee"],
  },
  {
    slug: "attendance",
    title: "Face Check-in",
    tagline: "ระบบลงเวลาด้วยการสแกนใบหน้า",
    description:
      "ลงเวลาเข้างานผ่านกล้องบนเบราว์เซอร์ ประมวลผลใบหน้าฝั่ง client เพื่อไม่ต้องส่งภาพขึ้นเซิร์ฟเวอร์ พร้อมรายงานสรุปรายเดือน",
    year: "2024",
    role: "Full-stack",
    stack: ["Vue", "face-api.js", "Node.js", "MongoDB"],
    featured: true,
    links: { repo: "#" },
    gradient: ["#8b5cf6", "#ec4899"],
  },
  {
    slug: "design-system",
    title: "Sprout Design System",
    tagline: "ไลบรารีคอมโพเนนต์ที่ใช้ร่วมกันทั้งทีม",
    description:
      "สร้าง token, คอมโพเนนต์ และเอกสารประกอบ เพื่อให้ทุกโปรดักต์ในทีมหน้าตาไปทางเดียวกันและสร้างหน้าใหม่ได้เร็วขึ้น",
    year: "2023",
    role: "Design engineer",
    stack: ["React", "Storybook", "Figma", "CSS variables"],
    featured: false,
    links: { demo: "#" },
    gradient: ["#10b981", "#84cc16"],
  },
  {
    slug: "queue-app",
    title: "Clinic Queue",
    tagline: "แอปจองคิวคลินิก",
    description:
      "จองคิวล่วงหน้า แจ้งเตือนผ่าน LINE และหน้าจอเรียกคิวสำหรับติดหน้าร้าน ลดเวลารอเฉลี่ยของผู้ป่วยลงอย่างเห็นผล",
    year: "2023",
    role: "Full-stack",
    stack: ["Next.js", "Prisma", "LINE API"],
    featured: false,
    links: { demo: "#", repo: "#" },
    gradient: ["#f59e0b", "#ef4444"],
  },
];

export const jobs: Job[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 — ปัจจุบัน",
    location: "Remote",
    summary: "รับงานพัฒนาเว็บแอปให้ลูกค้าตั้งแต่คุยความต้องการ ออกแบบ จนส่งขึ้น production",
    highlights: [
      "ส่งมอบโปรเจคเว็บแอปมากกว่า 10 ตัวตรงเวลา",
      "วางระบบ CI/CD ให้ลูกค้าดีพลอยเองได้โดยไม่ต้องพึ่งผม",
      "ปรับ Lighthouse performance ของเว็บลูกค้าจาก 60 เป็น 95+",
    ],
  },
  {
    company: "Tech Company",
    role: "Frontend Developer",
    period: "2022 — 2024",
    location: "Chiang Rai",
    summary: "ดูแลหน้าบ้านของระบบหลังบ้านองค์กร และเป็นคนกลางระหว่างทีมดีไซน์กับทีมหลังบ้าน",
    highlights: [
      "สร้าง design system ที่ทีมใช้ร่วมกัน 4 โปรดักต์",
      "ลดเวลา build ของ pipeline ลงเกือบครึ่ง",
      "ทำระบบ i18n รองรับไทย/อังกฤษทั้งแอป",
    ],
  },
  {
    company: "Mae Fah Luang University",
    role: "B.Eng. Computer Engineering",
    period: "2018 — 2022",
    location: "Chiang Rai",
    summary: "เรียนสายวิศวกรรมคอมพิวเตอร์ ทำโปรเจคจบเกี่ยวกับระบบเว็บ",
    highlights: ["โปรเจคจบได้เกรด A", "เป็นผู้ช่วยสอนวิชาการเขียนโปรแกรมพื้นฐาน"],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** ใช้ตอน deploy จริง — เปลี่ยนเป็นโดเมนของคุณ */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app";
