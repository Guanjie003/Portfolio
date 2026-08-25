type Props = {
  children: string;
  className?: string;
  /** ป้ายกำกับสำหรับ screen reader ถ้าต้องการต่างจากข้อความที่แสดง */
  label?: string;
};

/**
 * ข้อความที่กว้างเต็มคอนเทนเนอร์เสมอไม่ว่าจอกว้างแค่ไหน
 *
 * ใช้ SVG + textLength เพราะการไล่ font-size ด้วย vw จะพอดีแค่ความกว้างเดียว
 * ส่วน viewBox คำนวณจากความกว้างโดยประมาณของ Inter Tight (~0.5em ต่อตัวอักษร)
 * แล้ว textLength บังคับให้พอดีเป๊ะอีกที ค่าประมาณจึงมีผลแค่กับสัดส่วนความสูง
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
