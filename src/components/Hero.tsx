import { profile } from "@/content/profile";
import FitText from "./FitText";

export default function Hero() {
  return (
    <section id="top" className="flex min-h-svh flex-col justify-between pt-24 pb-6">
      <div className="shell flex flex-1 items-center">
        <h1 className="reveal-mask w-full">
          <span>
            <FitText label={profile.fullName}>{profile.displayName}</FitText>
          </span>
        </h1>
      </div>

      <div className="shell rule grid gap-6 pt-5 md:grid-cols-12 md:items-start md:gap-8">
        <div className="reveal label flex items-center gap-2.5 text-muted md:col-span-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
          {profile.availability}
        </div>
        <p
          className="reveal thai-tight max-w-md text-sm leading-relaxed text-muted md:col-span-6"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          {profile.tagline}
        </p>
        <div
          className="reveal label flex gap-6 md:col-span-3 md:justify-end"
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-ink">
            Get in touch ↗
          </a>
        </div>
      </div>
    </section>
  );
}
