"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/content/profile";
import SectionLabel from "./SectionLabel";

export default function Work() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  // ให้การ์ดตัวอย่างลอยตามเมาส์ — เขียนตรงเข้า style เพื่อไม่ให้ re-render ทุกเฟรม
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = thumbRef.current;
    if (!el) return;
    el.style.translate = `${e.clientX}px ${e.clientY}px`;
  }, []);

  useEffect(() => {
    if (active === null) return;
    const clear = () => setActive(null);
    window.addEventListener("scroll", clear, { passive: true });
    return () => window.removeEventListener("scroll", clear);
  }, [active]);

  return (
    <section id="work" className="scroll-mt-16 pt-20 md:pt-28">
      <div className="shell">
        <SectionLabel
          no="01"
          title="Selected work"
          description="เลือกมาเฉพาะโปรเจคที่เล่าได้ว่าโจทย์คืออะไร ตัดสินใจอย่างไร และผลลัพธ์เป็นแบบไหน"
        />
      </div>

      <ul className="rule border-b border-line">
        {projects.map((project, i) => (
          <li key={project.slug} className="border-b border-line last:border-0">
            <article
              className="work-row reveal"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onMouseMove={onMove}
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <div className="shell grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="label work-muted text-muted md:col-span-1">{project.no}</span>

                <h3 className="display display-lg md:col-span-5">{project.title}</h3>

                <p className="work-muted thai-tight text-sm text-muted md:col-span-3">
                  {project.tagline}
                </p>

                <p className="work-muted label text-muted md:col-span-2">{project.role}</p>

                <div className="label work-muted flex items-center gap-4 text-muted md:col-span-1 md:justify-end">
                  <span>{project.year}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 md:col-span-12 md:mt-1">
                  {project.stack.map((tech) => (
                    <span key={tech} className="label work-muted text-muted">
                      {tech}
                    </span>
                  ))}
                  {project.links.demo ? (
                    <a href={project.links.demo} className="label ml-auto underline underline-offset-4">
                      Live ↗
                    </a>
                  ) : null}
                  {project.links.repo ? (
                    <a href={project.links.repo} className="label underline underline-offset-4">
                      Source ↗
                    </a>
                  ) : null}
                  {project.links.caseStudy ? (
                    <a href={project.links.caseStudy} className="label underline underline-offset-4">
                      Case study ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* การ์ดตัวอย่างที่ลอยตามเมาส์ — ตกแต่งล้วน จึงซ่อนจาก screen reader */}
      <div
        ref={thumbRef}
        aria-hidden="true"
        data-active={active !== null}
        className="hover-thumb hidden md:block"
      >
        {active !== null ? (
          <div className="invert flex h-full w-full flex-col justify-between p-6">
            <span className="label text-muted">{projects[active].no} / Preview</span>
            <div>
              <p className="display text-4xl leading-none">{projects[active].title}</p>
              <p className="label mt-3 text-muted">{projects[active].year}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
