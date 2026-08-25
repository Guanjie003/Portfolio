import { navItems } from "@/content/profile";

/** สารบัญแบบมีเลขกำกับ — คลิกกระโดดไปแต่ละเซคชัน */
export default function IndexList() {
  return (
    <nav aria-label="สารบัญ" className="shell">
      <ul className="rule">
        {navItems.map((item, i) => (
          <li
            key={item.href}
            className="reveal border-b border-line"
            style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
          >
            <a
              href={item.href}
              className="group flex items-baseline gap-6 py-4 transition-[padding] duration-300 hover:pl-3 md:gap-10"
            >
              <span className="label w-8 shrink-0 text-muted">{item.no}</span>
              <span className="display display-lg flex-1">{item.label}</span>
              <span className="label text-muted transition-opacity group-hover:opacity-100 md:opacity-0">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
