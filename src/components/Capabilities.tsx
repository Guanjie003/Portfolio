import { sectionNo, skillGroups } from "@/content/profile";
import SectionLabel from "./SectionLabel";

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-16 pt-20 md:pt-28">
      <div className="shell">
        <SectionLabel
          no={sectionNo("capabilities")}
          title="Capabilities"
          description="Not everything I have ever touched — just what I reach for on real projects and can explain the reasoning behind."
        />

        <div className="grid border-t border-line md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.name}
              className="reveal border-b border-line py-8 md:border-r md:px-6 md:[&:nth-child(3n+1)]:pl-0 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n)]:pr-0 md:[&:nth-last-child(-n+3)]:border-b-0"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <h3 className="label text-muted">{group.name}</h3>
              <ul className="mt-5 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
