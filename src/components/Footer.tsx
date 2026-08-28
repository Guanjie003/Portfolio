import { navItems, profile, socials } from "@/content/profile";
import FitText from "./FitText";

export default function Footer() {
  return (
    <footer className="shell py-12">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <FitText label={profile.fullName}>{profile.displayName}</FitText>
          <p className="label mt-4 text-muted">{profile.role}</p>
        </div>

        <nav className="md:col-span-3" aria-label="Sections">
          <p className="label text-muted">Index</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm transition-opacity hover:opacity-60">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label text-muted">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm transition-opacity hover:opacity-60"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} className="text-sm transition-opacity hover:opacity-60">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="label mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-muted">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>Next.js · Tailwind CSS · Vercel</span>
      </div>
    </footer>
  );
}
