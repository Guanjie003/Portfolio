import { marqueeItems } from "@/content/profile";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
      <div className="marquee">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="label flex shrink-0 items-center gap-8 pr-8 text-muted">
            {item}
            <span className="text-ink">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
