import { navItems, profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.fullName} · สร้างด้วย Next.js และ Tailwind CSS
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted transition hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
