import { skillGroups } from "@/content/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-line bg-bg-soft py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          index="02 — Skills"
          title="เครื่องมือที่ใช้ทำงานจริง"
          description="ไม่ได้ลิสต์ทุกอย่างที่เคยแตะ แต่เป็นสิ่งที่หยิบมาใช้ในโปรเจคจริงและอธิบายได้ว่าเลือกเพราะอะไร"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.name}
              className="reveal rounded-card border border-line bg-surface p-6 transition hover:border-accent/50"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{group.name}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px] text-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
