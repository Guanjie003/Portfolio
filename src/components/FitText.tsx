type Props = {
  children: string;
  className?: string;
  /** Screen-reader label, if it should differ from the visible text. */
  label?: string;
};

/**
 * Text that always spans the full width of its container, at any viewport size.
 *
 * Uses SVG + textLength because scaling font-size with vw only fits exactly at one
 * width. The viewBox is estimated from Inter Tight's average glyph width (~0.5em per
 * character); textLength then forces an exact fit, so the estimate only affects the
 * rendered aspect ratio.
 */
export default function FitText({ children, className = "", label }: Props) {
  const text = children.trim();
  const estimate = text.length * 50 - Math.max(0, text.length - 1) * 4.5;
  const width = Math.max(estimate, 1);

  return (
    <svg
      viewBox={`0 0 ${width.toFixed(1)} 100`}
      preserveAspectRatio="xMidYMid meet"
      className={`block w-full ${className}`}
      role="img"
      aria-label={label ?? text}
    >
      <text
        x="0"
        y="75"
        textLength={width.toFixed(1)}
        lengthAdjust="spacingAndGlyphs"
        fontSize="100"
        fontWeight="700"
        fill="currentColor"
        className="display"
      >
        {text}
      </text>
    </svg>
  );
}
