import { profile, socials } from "@/content/profile";

export default function Contact() {
  return (
    <section id="contact" className="invert scroll-mt-16 py-24 md:py-32">
      <div className="shell">
        <p className="label reveal text-muted">05 — Contact</p>

        <a href={`mailto:${profile.email}`} className="mt-10 block">
          <span
            className="reveal-mask block"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <span className="display text-[clamp(1.75rem,7vw,7rem)] break-all leading-[0.9] underline-offset-[0.12em] hover:underline">
              {profile.email}
            </span>
          </span>
        </a>

        <div className="reveal mt-16 grid gap-8 border-t border-line pt-8 md:grid-cols-12">
          <p className="thai-tight max-w-md text-muted md:col-span-6">
            เล่าโจทย์มาคร่าว ๆ ได้เลย ผมตอบกลับภายใน 1–2 วันทำการ และยินดีคุยฟรีรอบแรกเพื่อดูว่าเราเหมาะกันไหม
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-6 md:justify-end">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="label text-muted transition-colors hover:text-ink"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} className="label text-muted transition-colors hover:text-ink">
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
