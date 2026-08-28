import { statement } from "@/content/profile";

export default function Statement() {
  return (
    <section className="invert py-24 md:py-36">
      <div className="shell">
        <p className="label reveal mb-12 text-muted">The whole loop, one person</p>
        <div className="display display-xl">
          {statement.map((word, i) => (
            <span
              key={word}
              className="reveal-mask -mb-[0.2em] block"
              style={{ "--reveal-delay": `${i * 140}ms` } as React.CSSProperties}
            >
              <span>{word}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
