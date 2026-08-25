# Design System — Portfolio

เอกสารสรุปการตัดสินใจด้านดีไซน์ของเว็บนี้ ใช้เป็นแผนที่เวลาจะเพิ่มหน้าใหม่หรือแก้ของเดิม

## 1. คอนเซปต์

> **"Warm minimal, ผลงานเป็นพระเอก"**

หน้าเว็บพอร์ตโฟลิโอส่วนใหญ่ใช้ดำ-เทา-น้ำเงิน ซึ่งอ่านง่ายแต่จำไม่ได้ เว็บนี้เลยเลือกฐานสีเป็น **นิวทรัลโทนอุ่น**
(ออกน้ำตาลอ่อน ๆ แทนเทากลาง) แล้วใช้ **signal orange** เป็นสีเน้นเพียงสีเดียว
ผลคือหน้าจอดูอบอุ่นและจำได้ แต่ยังคงความสุภาพพอสำหรับส่งให้ HR

หลักที่ยึด 3 ข้อ:

1. **สีเน้นใช้ให้น้อย** — ส้มใช้กับ CTA, ป้ายหมวด, และ hover เท่านั้น ไม่ใช้กับพื้นหลังใหญ่
2. **ลำดับสายตาต้องชัด** — ทุกเซคชันมี `index → title → description → content` รูปแบบเดียวกัน
3. **มูฟเมนต์ต้องเบา** — reveal ตอนเลื่อนถึงเท่านั้น ไม่มีอนิเมชันวิ่งตลอดเวลา

## 2. Color tokens

ประกาศเป็น CSS custom property ใน [`src/app/globals.css`](src/app/globals.css)
แล้ว map เข้า Tailwind ผ่าน `@theme inline` → ใช้เป็นคลาสได้เลย เช่น `bg-surface`, `text-muted`, `border-line`

| Token | Tailwind class | Light | Dark | ใช้ตอนไหน |
| --- | --- | --- | --- | --- |
| `--bg` | `bg-bg` | `#fbfaf9` | `#100e0d` | พื้นหลังหลักของหน้า |
| `--bg-soft` | `bg-bg-soft` | `#f3efeb` | `#171412` | เซคชันสลับสีเพื่อแบ่งจังหวะ |
| `--surface` | `bg-surface` | `#ffffff` | `#191614` | การ์ด, nav ตอน scroll |
| `--surface-2` | `bg-surface-2` | `#f7f4f1` | `#201c19` | ชิป/แท็กในการ์ด |
| `--border` | `border-line` | `#e5ded7` | `#2e2825` | เส้นขอบทั้งหมด |
| `--text` | `text-ink` | `#17130f` | `#f6f2ee` | ตัวอักษรหลัก |
| `--muted` | `text-muted` | `#6b625a` | `#a89d94` | คำอธิบาย, meta |
| `--accent` | `text-accent` / `bg-accent` | `#cf4a24` | `#ff6b45` | CTA, ลิงก์, hover |
| `--on-accent` | `text-on-accent` | `#ffffff` | `#1a0d08` | ตัวอักษรบนพื้นส้ม |

> สีส้มในธีมสว่างเข้มกว่าธีมมืดโดยตั้งใจ — เพื่อให้คอนทราสต์กับพื้นขาวผ่านเกณฑ์ WCAG AA (≥ 4.5:1)

**สลับธีม:** คุมด้วย `data-theme="light" | "dark"` บน `<html>`
สคริปต์เล็ก ๆ ใน `layout.tsx` อ่านค่าจาก `localStorage` (fallback เป็น `prefers-color-scheme`) ก่อนหน้าจอวาด
เพื่อไม่ให้เห็นจอกระพริบตอนโหลด

## 3. Typography

| บทบาท | ฟอนต์ | ใช้กับ |
| --- | --- | --- |
| Sans (หลัก) | **Inter** | เนื้อหาทั้งหมด |
| Thai | **Noto Sans Thai** | fallback อัตโนมัติสำหรับตัวอักษรไทย |
| Display | **Instrument Serif** *(italic)* | เฉพาะคำที่เน้นในหัวข้อ Hero |
| Mono | **JetBrains Mono** | ป้ายหมวด, ปี, meta |

Type scale (มือถือ → เดสก์ท็อป):

```
Hero h1   text-4xl → text-7xl   font-semibold  tracking-tight  leading-[1.12]
Section h2  text-3xl → text-4xl   font-semibold  tracking-tight
Card h3   text-xl  → text-3xl   font-semibold
Body    text-base → text-lg   leading-relaxed  text-muted
Meta    text-xs         font-mono  uppercase  tracking-[0.16em]
```

## 4. Layout & spacing

- คอนเทนเนอร์: `.section-shell` = `max-width 72rem` + `padding-inline 1.5rem`
- ระยะห่างเซคชัน: `py-20` (มือถือ) → `py-28` (เดสก์ท็อป)
- Grid ของ่การ์ด: 1 คอลัมน์ → 2 (sm) → 4 (lg) สำหรับ Skills, และ 2 คอลัมน์สำหรับ Featured work
- มุมโค้ง: การ์ดใหญ่ `rounded-card` (1rem), ชิป/ปุ่ม `rounded-full`
- Breakpoints ใช้ค่ามาตรฐานของ Tailwind: `sm 640 · md 768 · lg 1024`

## 5. Motion

| Element | พฤติกรรม |
| --- | --- |
| `.reveal` | fade + เลื่อนขึ้น 18px เมื่อเข้า viewport (IntersectionObserver, ยิงครั้งเดียว) |
| `--reveal-delay` | หน่วงเป็นขั้น 80–100ms เพื่อให้การ์ดโผล่ไล่กัน |
| Nav | เพิ่มเส้นขอบ + blur เมื่อ `scrollY > 12` |
| Hover การ์ด | ขอบเปลี่ยนเป็นสีส้มจาง + เงานุ่ม |
| Availability dot | `animate-ping` จุดเดียวในหน้า |

ทุกอย่างเคารพ `prefers-reduced-motion: reduce` — ถ้าผู้ใช้ปิดอนิเมชัน เนื้อหาจะแสดงทันทีโดยไม่มีทรานซิชัน

## 6. Accessibility checklist

- [x] คอนทราสต์ตัวอักษร ≥ 4.5:1 ทั้งสองธีม
- [x] Skip link ไปเนื้อหาหลัก (โผล่ตอน focus)
- [x] โครงสร้าง landmark: `header` / `main` / `footer` + heading ไล่ระดับถูกต้อง
- [x] `:focus-visible` มีวงแหวนสีส้มชัดเจนทุกองค์ประกอบที่กดได้
- [x] เมนูมือถือมี `aria-expanded` / `aria-controls`
- [x] ไอคอนตกแต่งใส่ `aria-hidden`, ปุ่มไอคอนล้วนมี `aria-label`
- [x] เนื้อหายังอ่านได้เมื่อปิด JavaScript (`<noscript>` บังคับให้ `.reveal` แสดง)

## 7. เพิ่มเซคชันใหม่ยังไง

```tsx
// src/components/Writing.tsx
import SectionHeading from "./SectionHeading";

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="06 — Writing" title="บทความ" />
        {/* ใส่ .reveal ให้ลูก ๆ เพื่อให้อนิเมชันทำงานอัตโนมัติ */}
      </div>
    </section>
  );
}
```

แล้วเพิ่มเข้า `src/app/page.tsx` และเพิ่มลิงก์ใน `navItems` ที่ `src/content/profile.ts` — active state ของเมนูจะทำงานเอง
