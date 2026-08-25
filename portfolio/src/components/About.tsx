import { profile } from "@/content/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="01 — About" title="สั้น ๆ เกี่ยวกับผม" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="text-ink">
              ตอนนี้อยู่ที่{" "}
              <span className="font-medium text-accent">{profile.location}</span> และทำงานแบบ remote ได้
            </p>
          </div>

          <dl className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {profile.facts.map((fact) => (
              <div key={fact.label} className="bg-surface p-6">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
