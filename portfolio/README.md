# Portfolio — Guanjie

เว็บพอร์ตโฟลิโอหน้าเดียว สร้างด้วย **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**
ครบทั้ง 3 ส่วน: **Design → Coding → Deploy**

| | |
| --- | --- |
| ดีไซน์ (Figma) | [Portfolio — Design System & Screens](https://www.figma.com/design/txEBfMOIt0Ra4lt6PKcFjK) |
| เอกสารดีไซน์ | [DESIGN.md](DESIGN.md) |
| เนื้อหาทั้งเว็บ | [`src/content/profile.ts`](src/content/profile.ts) |

---

## 1. Design

ไฟล์ Figma แบ่งเป็น 2 หน้า:

- **01 · Foundations** — color token ทั้งธีมมืดและสว่าง (ผูกเป็น Figma Variables จริง ไม่ใช่สี hardcode) + type scale
- **02 · Screens** — หน้า Landing เต็มขนาด Desktop 1440px และ Mobile 390px

ค่าสีใน Figma กับ CSS custom property ใน [`src/app/globals.css`](src/app/globals.css) เป็นชุดเดียวกัน
ถ้าจะเปลี่ยนสีธีม ให้แก้ที่ `globals.css` แล้วอัปเดต variable ใน Figma ให้ตรงกัน

> **หมายเหตุ:** Figma แผน Starter จำกัดให้ collection ละ 1 mode จึงแยกเป็น 2 collection
> (`Color · Dark (default)` และ `Color · Light`) แทนการใช้ mode สลับธีมในไฟล์เดียว

รายละเอียดหลักการออกแบบ token, type scale, motion และ accessibility checklist อยู่ใน [DESIGN.md](DESIGN.md)

## 2. Coding

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

### โครงสร้าง

```
src/
├─ app/
│  ├─ layout.tsx            # ฟอนต์, metadata, สคริปต์กันจอกระพริบตอนสลับธีม
│  ├─ page.tsx              # ประกอบทุกเซคชัน + JSON-LD (schema.org Person)
│  ├─ globals.css           # design token + utility + scroll reveal
│  ├─ icon.tsx              # favicon สร้างอัตโนมัติจากชื่อ
│  ├─ opengraph-image.tsx   # การ์ด OG 1200×630 สร้างอัตโนมัติ
│  ├─ sitemap.ts / robots.ts
├─ components/              # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
└─ content/profile.ts       # ✏️ ข้อมูลทั้งหมดอยู่ที่ไฟล์นี้ไฟล์เดียว
```

**Server component เป็นค่าเริ่มต้น** — มีแค่ 3 ไฟล์ที่เป็น client component คือ
`Nav.tsx` (เมนูมือถือ + active state), `ThemeToggle.tsx` และ `ScrollReveal.tsx`
ทำให้ JavaScript ที่ส่งถึงเบราว์เซอร์อยู่ที่ **~105 kB** (First Load JS)

### แก้เนื้อหา

เปิด [`src/content/profile.ts`](src/content/profile.ts) แล้วแก้ที่เดียวจบ — ชื่อ, headline, about,
skills, projects, experience, social links ทุกเซคชันอ่านข้อมูลจากไฟล์นี้

เพิ่ม `resume.pdf` ลงใน `public/` แล้วปุ่ม "ดาวน์โหลด Resume" จะทำงานทันที

### ⚠️ browserslist — อย่าลบออก

`package.json` ประกาศ `browserslist` ไว้โดยตั้งใจ:

```json
"browserslist": ["chrome 111", "edge 111", "firefox 111", "opera 97", "safari 16.4"]
```

รีโปแม่ (CoreUI Vue) มี `browserslist` ที่ตั้งค่า `"> 1%", "not ie <= 9"` อยู่ที่ root
และ browserslist จะไล่หาไฟล์ config **ขึ้นไปตามลำดับโฟลเดอร์** ถ้าโปรเจคนี้ไม่ประกาศของตัวเอง
ค่าของรีโปแม่จะถูกใช้แทน → Next คอมไพล์เป็น ES5 → bundle บวมจาก **105 kB เป็น 339 kB**

ลบบรรทัดนี้เมื่อไหร่ ปัญหากลับมาทันที (เกิดทั้งบนเครื่องและบน Vercel)

## 3. Deploy

### Vercel (แนะนำ)

1. push โค้ดขึ้น GitHub/GitLab
2. Vercel → **Add New… → Project** → เลือกรีโปนี้
3. **สำคัญ:** ตั้ง **Root Directory** เป็น `portfolio`
   (ถ้าไม่ตั้ง Vercel จะเจอ `package.json` ของ CoreUI ที่ root แล้ว build ผิดโปรเจค)
4. Framework Preset จะขึ้นเป็น **Next.js** อัตโนมัติ — ไม่ต้องแก้ build command
5. ตั้ง Environment Variable:

   | Key | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://<โดเมนของคุณ>` |

   ค่านี้ใช้สร้าง canonical URL, `sitemap.xml` และ OG image — ถ้าไม่ตั้งจะ fallback เป็น
   `https://your-portfolio.vercel.app` ตามที่กำหนดใน `src/content/profile.ts`
6. Deploy — หลังจากนี้ทุก push ขึ้น branch หลักจะ deploy อัตโนมัติ และ PR ทุกอันได้ preview URL

### ตรวจก่อน deploy

```bash
npm run lint && npm run build
```

`npm run build` ต้องขึ้น First Load JS ประมาณ **103–105 kB** ถ้าเห็นเลขระดับ 300 kB
แปลว่า `browserslist` ใน `package.json` หายไป (ดูหัวข้อด้านบน)

### ทางเลือกอื่น

- **Docker + nginx** — รีโปแม่มี `Dockerfile` และ `nginx.conf` อยู่แล้ว ปรับให้ build โฟลเดอร์นี้แทนได้
- **Static export** — เว็บนี้เป็น static ทั้งหมด เพิ่ม `output: "export"` ใน `next.config.ts`
  แล้วเอา `out/` ไปวางบน GitHub Pages / S3 ได้ (แต่ `icon.tsx` และ `opengraph-image.tsx`
  ต้องเปลี่ยนเป็นไฟล์ภาพจริงแทน เพราะ static export สร้าง OG image ตอน runtime ไม่ได้)

## SEO / metadata ที่มีให้แล้ว

- Metadata API: title template, description, Open Graph, Twitter card
- `opengraph-image.tsx` สร้างการ์ดแชร์ 1200×630 อัตโนมัติจากข้อมูลใน `profile.ts`
- `sitemap.xml` และ `robots.txt` สร้างจากโค้ด
- JSON-LD `schema.org/Person` ฝังในหน้าแรก
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) ตั้งไว้ใน `next.config.ts`
