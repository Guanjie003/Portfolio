type Props = {
  index: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, title, description }: Props) {
  return (
    <div className="reveal max-w-2xl">
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{index}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
