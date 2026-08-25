import { profile } from "@/content/profile";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 pt-20 md:pt-28">
      <div className="shell">
        <SectionLabel no="02" title="About" />

        <div className="grid gap-10 pb-16 md:grid-cols-12 md:gap-8">
          <div className="reveal space-y-6 md:col-span-7">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="thai-tight text-xl leading-relaxed md:text-2xl">
                {paragraph}
              </p>
            ))}
          </div>

          <dl
            className="reveal self-start md:col-span-4 md:col-start-9"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {profile.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between border-t border-line py-3.5">
                <dt className="label text-muted">{fact.label}</dt>
                <dd className="text-lg">{fact.value}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between border-y border-line py-3.5">
              <dt className="label text-muted">Based in</dt>
              <dd className="text-lg">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
