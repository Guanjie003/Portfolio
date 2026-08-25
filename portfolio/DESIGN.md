# Design System — Portfolio

เอกสารสรุปการตัดสินใจด้านดีไซน์ของเว็บนี้ ใช้เป็นแผนที่เวลาจะเพิ่มหน้าใหม่หรือแก้ของเดิม

## 1. คอนเซปต์

> **"Brutalist editorial — ตัวอักษรคือภาพ"**

อ้างอิงแนวทางจากเว็บอย่าง [paulkalkbrenner.net](https://www.paulkalkbrenner.net) คือทิ้งทุกอย่างที่ไม่จำเป็น
เหลือแค่ **ขาว ดำ และตัวอักษร** แล้วเล่นกับ *ขนาด* ให้สุดทาง ผลคือหน้าเว็บที่ดูมั่นใจ จำได้ และโหลดเร็ว
เพราะแทบไม่มีอะไรให้โหลดนอกจากฟอนต์

หลักที่ยึด 4 ข้อ:

1. **ไม่มีสีเน้นเลย** — ลำดับความสำคัญมาจากขนาดตัวอักษรและเส้น hairline ไม่ใช่สี
2. **ตัวใหญ่ต้องใหญ่จริง** — ชื่อบนหน้าแรกกว้างเต็มจอเสมอ ไม่ว่าจอกว้างแค่ไหน
3. **กลับขั้วเพื่อแบ่งจังหวะ** — เซคชันสำคัญ (statement, contact) พลิกเป็นพื้นดำตัวขาว แทนการใช้สีพื้นหลังอ่อน
4. **มูฟเมนต์ต้องเบา** — เผยเนื้อหาตอนเลื่อนถึงเท่านั้น ไม่มีอะไรกระพริบตลอดเวลา

## 2. Color tokens

มีแค่ 4 token ต่อธีม ประกาศเป็น CSS custom property ใน [`src/app/globals.css`](src/app/globals.css)
แล้ว map เข้า Tailwind ผ่าน `@theme inline` → ใช้เป็นคลาสได้เลย

| Token | Tailwind class | Light | Dark | ใช้ตอนไหน |
| --- | --- | --- | --- | --- |
| `--paper` | `bg-paper` | `#ffffff` | `#0a0a0a` | พื้นหลัง |
| `--ink` | `text-ink` / `bg-ink` | `#0a0a0a` | `#f4f4f4` | ตัวอักษรหลัก |
| `--muted` | `text-muted` | `#767676` | `#8c8c8c` | คำอธิบาย, meta, label |
| `--line` | `border-line` | `#e2e2e2` | `#242424` | เส้นคั่นทั้งหมด |

### `.invert` — บล็อกกลับขั้ว

คลาสเดียวที่พลิกทั้งบล็อก โดย **นิยาม token ชุดใหม่ทับใน subtree นั้น**:

```css
.invert { --paper: #0a0a0a; --ink: #f4f4f4; --muted: #8c8c8c; --line: #242424;
          background-color: var(--paper); color: var(--ink); }
[data-theme="dark"] .invert { --paper: #ffffff; --ink: #0a0a0a; /* ... */ }
```

ข้อดีคือคลาส Tailwind ที่อยู่ข้างใน (`text-muted`, `border-line`, `bg-ink`) กลับสีตามเองทั้งหมด
ไม่ต้องเขียน `dark:` หรือ variant ซ้อนเลย ใช้กับเซคชัน Statement และ Contact

**สลับธีม:** คุมด้วย `data-theme="light" | "dark"` บน `<html>` สคริปต์เล็ก ๆ ใน `layout.tsx`
อ่านค่าจาก `localStorage` (fallback เป็น `prefers-color-scheme`) ก่อนหน้าจอวาด เพื่อไม่ให้เห็นจอกระพริบ

> อยากได้สีเน้นกลับมา? เพิ่ม `--accent` หนึ่งตัวใน `:root` แล้วใช้กับลิงก์และ label — โครงที่เหลือไม่ต้องแตะ

## 3. Typography

ฟอนต์เดียวทั้งเว็บ (บวกฟอนต์ไทย) — ไม่มี mono ไม่มี serif เพราะดีไซน์นี้ให้ *น้ำหนักและขนาด* เป็นตัวแยกลำดับ

| บทบาท | ฟอนต์ | ใช้กับ |
| --- | --- | --- |
| Display | **Inter Tight** Bold | ชื่อ, หัวเซคชัน, ชื่อโปรเจค |
| Body | **Inter** | เนื้อหาทั้งหมด |
| Thai | **Noto Sans Thai** | fallback อัตโนมัติสำหรับตัวอักษรไทย |

คลาสสำเร็จรูปใน `globals.css`:

```
.display       font-weight 700 · tracking -0.045em · leading 0.85
.display-hero  clamp(3.2rem, 13.2vw, 15rem)
.display-xl    clamp(2.6rem, 10.5vw, 12rem)    ← statement
.display-lg    clamp(2rem, 5.2vw, 4.5rem)      ← หัวเซคชัน / ชื่อโปรเจค
.label         11px · uppercase · tracking 0.2em
.thai-tight    leading 1.15 (ตัวไทยกินความสูงมากกว่าละติน จึงบีบลง)
```

### ชื่อที่กว้างเต็มจอเสมอ — `FitText`

การไล่ `font-size` ด้วย `vw` จะพอดีแค่ความกว้างเดียว [`FitText.tsx`](src/components/FitText.tsx)
จึงใช้ **SVG + `textLength`** แทน:

```tsx
<svg viewBox={`0 0 ${width} 100`}>
  <text textLength={width} lengthAdjust="spacingAndGlyphs" fontSize="100">Guanjie</text>
</svg>
```

`viewBox` ประมาณจากความกว้างเฉลี่ยของ Inter Tight (~0.5em ต่อตัวอักษร) แล้ว `textLength`
บังคับให้พอดีเป๊ะอีกที ค่าประมาณจึงมีผลแค่กับสัดส่วนความสูง — เปลี่ยนชื่อในไฟล์ content ได้เลยโดยไม่ต้องแก้ตัวเลข

## 4. Layout & spacing

- `.shell` = `padding-inline` 1.25rem (มือถือ) → 2rem (เดสก์ท็อป) — **ไม่มี max-width** เนื้อหาเต็มจอแบบเว็บ editorial
- กริดหลักเป็น 12 คอลัมน์ (`md:grid-cols-12`) แถวผลงานและ experience วางบนกริดนี้ทั้งหมด
- ระยะเซคชัน: `pt-20` (มือถือ) → `pt-28` (เดสก์ท็อป)
- **ไม่มีมุมโค้ง ไม่มีเงา** — ขอบเขตทุกอย่างมาจากเส้น 1px สีเดียว

## 5. Motion

| Element | พฤติกรรม |
| --- | --- |
| `.reveal` | fade + เลื่อนขึ้น 14px เมื่อเข้า viewport |
| `.reveal-mask` | บรรทัดใหญ่เลื่อนขึ้นจากใต้หน้ากาก (`overflow: hidden` + `translateY(105%)`) |
| `--reveal-delay` | หน่วงเป็นขั้น 60–140ms ให้บรรทัด/แถวโผล่ไล่กัน |
| `.marquee` | ข้อความวิ่งวนซ้าย 38s หยุดเมื่อ hover |
| `.work-row:hover` | ทั้งแถวกลับขั้วเป็นพื้นดำ + การ์ดตัวอย่างลอยตามเมาส์ |

### ทำไมไม่ใช้ IntersectionObserver

เคยใช้ แล้วเจอสองปัญหา:

1. **`clip-path` ทำให้ observer ตายตัวเอง** — element ที่ซ่อนด้วย `clip-path: inset(0 0 100% 0)`
   มีพื้นที่ intersection เป็นศูนย์ observer จึงไม่มีวันรายงานว่ามันเข้า viewport เนื้อหาหายถาวร
   (แก้ด้วยการเปลี่ยนมาใช้หน้ากาก `overflow: hidden` แทน)
2. **ถ้า observer ไม่ยิง เนื้อหาหายทั้งหน้า** — เพราะสถานะเริ่มต้นคือซ่อน

[`ScrollReveal.tsx`](src/components/ScrollReveal.tsx) จึงวัด `getBoundingClientRect()` เองบน scroll/resize
(throttle ด้วย `requestAnimationFrame`) และถ้าการวัดพังเมื่อไหร่ก็ **แสดงทุกอย่างทันที** — fail open เสมอ

ทุกอย่างเคารพ `prefers-reduced-motion: reduce` — ถ้าผู้ใช้ปิดอนิเมชัน เนื้อหาแสดงทันทีและ marquee หยุดนิ่ง

## 6. Accessibility checklist

- [x] คอนทราสต์ตัวอักษรผ่าน AA ทั้งสองธีม (ขาว-ดำล้วนได้ 19:1, `muted` บนขาวได้ 4.7:1)
- [x] Skip link ไปเนื้อหาหลัก (โผล่ตอน focus)
- [x] โครงสร้าง landmark: `header` / `main` / `footer` + heading ไล่ระดับถูกต้อง
- [x] `:focus-visible` ใช้ `currentColor` จึงเห็นชัดทั้งบนพื้นขาวและพื้นดำ
- [x] เมนูมือถือมี `aria-expanded` / `aria-controls`
- [x] `FitText` เป็น SVG จึงใส่ `role="img"` + `aria-label` ให้อ่านออกเสียงได้
- [x] การ์ดที่ลอยตามเมาส์เป็นของตกแต่ง ใส่ `aria-hidden` และซ่อนบนอุปกรณ์สัมผัส
- [x] เนื้อหายังอ่านได้เมื่อปิด JavaScript (`<noscript>` บังคับให้ reveal แสดง)

## 7. ไฟล์ Figma

[Portfolio — Design System & Screens](https://www.figma.com/design/txEBfMOIt0Ra4lt6PKcFjK)

- **01 · Foundations** — color token ทั้งสองธีม (ผูกเป็น Figma Variables จริง) + type scale
- **02 · Screens** — Desktop 1440px เต็มหน้า และ Mobile 390px

> Figma ยังไม่มี Inter Tight ในไฟล์นี้จึงใช้ Inter Bold + tracking -4.5% ซึ่งให้หน้าตาใกล้เคียงมาก
> ส่วนแผน Starter จำกัด collection ละ 1 mode จึงแยกเป็น `Mono · Light` กับ `Mono · Dark`

## 8. เพิ่มเซคชันใหม่ยังไง

```tsx
// src/components/Writing.tsx
import SectionLabel from "./SectionLabel";

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-16 pt-20 md:pt-28">
      <div className="shell">
        <SectionLabel no="06" title="Writing" description="..." />
        {/* ใส่ .reveal ให้ลูก ๆ เพื่อให้อนิเมชันทำงานอัตโนมัติ */}
      </div>
    </section>
  );
}
```

แล้วเพิ่มเข้า `src/app/page.tsx` และเพิ่มลิงก์ใน `navItems` ที่ `src/content/profile.ts`
— ทั้งเมนูบนและสารบัญกลางหน้าจะอัปเดตเอง
