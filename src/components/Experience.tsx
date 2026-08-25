import { jobs } from "@/content/profile";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 pt-20 md:pt-28">
      <div className="shell">
        <SectionLabel no="04" title="Education" />

        <ol className="border-t border-line">
          {jobs.map((job, i) => (
            <li
              key={`${job.company}-${job.period}`}
              className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="label flex justify-between text-muted md:col-span-3 md:flex-col md:gap-2">
                <span>{job.period}</span>
                {job.location ? <span>{job.location}</span> : null}
              </div>

              <div className="md:col-span-5">
                <h3 className="display display-lg">{job.role}</h3>
                <p className="label mt-3 text-muted">{job.company}</p>
              </div>

              <div className="md:col-span-4">
                <p className="leading-relaxed text-muted">{job.summary}</p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-muted" aria-hidden="true">
                        —
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
