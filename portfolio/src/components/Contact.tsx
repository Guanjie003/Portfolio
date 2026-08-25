import { profile, socials } from "@/content/profile";
import { ArrowUpRight, socialIcons } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="section-shell">
        <div className="reveal relative overflow-hidden rounded-card border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[32rem] -translate-x-1/2 rounded-full opacity-25 blur-[90px]"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
            aria-hidden="true"
          />

          <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">05 — Contact</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            มีโปรเจคในหัวอยู่แล้วใช่ไหม?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            เล่าโจทย์มาคร่าว ๆ ได้เลย ผมตอบกลับภายใน 1–2 วันทำการ และยินดีคุยฟรีรอบแรกเพื่อดูว่าเราเหมาะกันไหม
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-lg font-medium text-on-accent transition hover:bg-accent-hover"
          >
            {profile.email}
            <span className="h-4 w-4">
              <ArrowUpRight />
            </span>
          </a>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.label] ?? ArrowUpRight;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                  >
                    <span className="h-[18px] w-[18px]">
                      <Icon />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
