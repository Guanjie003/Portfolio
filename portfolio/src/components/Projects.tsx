import { projects, type Project } from "@/content/profile";
import { ArrowUpRight } from "./Icons";
import SectionHeading from "./SectionHeading";

function ProjectLinks({ links }: { links: Project["links"] }) {
  const entries = [
    links.demo ? { label: "Live demo", href: links.demo } : null,
    links.caseStudy ? { label: "Case study", href: links.caseStudy } : null,
    links.repo ? { label: "Source", href: links.repo } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  if (!entries.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
      {entries.map((entry) => (
        <a
          key={entry.label}
          href={entry.href}
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition hover:text-accent"
        >
          {entry.label}
          <span className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
            <ArrowUpRight />
          </span>
        </a>
      ))}
    </div>
  );
}

function Thumb({ project, tall }: { project: Project; tall?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line ${tall ? "aspect-[16/10]" : "aspect-[16/9]"}`}
      style={{
        background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
      }}
    >
      <div className="grid-backdrop absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden="true" />
      <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.2em] text-white/85">
        {project.slug}
      </span>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          index="03 — Selected work"
          title="ผลงานที่เลือกมา"
          description="เลือกมาเฉพาะโปรเจคที่เล่าได้ว่าโจทย์คืออะไร ตัดสินใจอย่างไร และผลลัพธ์เป็นแบบไหน"
        />

        <div className="mt-12 space-y-6">
          {featured.map((project, i) => (
            <article
              key={project.slug}
              className="reveal group grid gap-8 rounded-card border border-line bg-surface p-6 transition hover:border-accent/50 hover:shadow-[var(--shadow)] sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <Thumb project={project} tall />

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  <span className="text-accent">{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-1 text-base text-accent">{project.tagline}</p>
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <ProjectLinks links={project.links} />
              </div>
            </article>
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <h3 className="reveal mt-16 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              โปรเจคอื่น ๆ
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {rest.map((project, i) => (
                <article
                  key={project.slug}
                  className="reveal rounded-card border border-line bg-surface p-6 transition hover:border-accent/50"
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                >
                  <Thumb project={project} />
                  <div className="mt-5 flex items-baseline justify-between gap-3">
                    <h4 className="text-lg font-semibold tracking-tight">{project.title}</h4>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ProjectLinks links={project.links} />
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
