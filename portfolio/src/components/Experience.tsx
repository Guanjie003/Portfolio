import { jobs } from "@/content/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-line bg-bg-soft py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="04 — Experience" title="เส้นทางที่ผ่านมา" />

        <ol className="mt-12 border-l border-line">
          {jobs.map((job, i) => (
            <li
              key={`${job.company}-${job.period}`}
              className="reveal relative pl-8 pb-12 last:pb-0 sm:pl-12"
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <span
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-[var(--bg-soft)]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                <span className="text-accent">@ {job.company}</span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {job.period} · {job.location}
              </p>
              <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-[15px] text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
