import { profile, socials } from "@/content/profile";
import { ArrowDown, ArrowUpRight, DocIcon, socialIcons } from "./Icons";

export default function Hero() {
  const [before, after] = profile.headline.split(profile.headlineAccent);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="section-shell">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </div>

        <h1
          className="reveal mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          {before}
          <span className="font-serif italic text-accent">{profile.headlineAccent}</span>
          {after}
        </h1>

        <p
          className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-muted"
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          {profile.subheadline}
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-3"
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition hover:bg-accent-hover"
          >
            ดูผลงาน
            <span className="h-4 w-4">
              <ArrowDown />
            </span>
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
          >
            <span className="h-4 w-4">
              <DocIcon />
            </span>
            ดาวน์โหลด Resume
          </a>
        </div>

        <ul
          className="reveal mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
          style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
        >
          {socials.map((social) => {
            const Icon = socialIcons[social.label] ?? ArrowUpRight;
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
                >
                  <span className="h-4 w-4 text-muted transition group-hover:text-accent">
                    <Icon />
                  </span>
                  {social.handle}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
