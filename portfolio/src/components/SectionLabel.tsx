type Props = {
  no: string;
  title: string;
  description?: string;
};

/** หัวเซคชันแบบเดียวกันทั้งเว็บ: เลข + ป้ายตัวพิมพ์ใหญ่ ซ้าย / คำอธิบายขวา */
export default function SectionLabel({ no, title, description }: Props) {
  return (
    <div className="reveal grid gap-6 py-8 md:grid-cols-12 md:gap-8">
      <div className="label flex gap-4 text-muted md:col-span-4">
        <span>{no}</span>
        <span className="text-ink">{title}</span>
      </div>
      {description ? (
        <p className="thai-tight max-w-xl text-lg text-muted md:col-span-8 md:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
