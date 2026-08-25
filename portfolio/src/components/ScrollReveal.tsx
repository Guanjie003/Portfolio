"use client";

import { useEffect } from "react";

/**
 * ทำ scroll-reveal ให้ทุก element ที่มี class="reveal" หรือ "reveal-mask"
 * mount ครั้งเดียวใน layout เพื่อให้ส่วนอื่นยังเป็น server component ได้
 *
 * ตั้งใจวัดตำแหน่งเองแทนการใช้ IntersectionObserver เพราะ element ที่ยังไม่ reveal
 * ถูกซ่อนอยู่ — ถ้า observer ไม่ยิง callback ด้วยเหตุผลใดก็ตาม เนื้อหาจะหายทั้งหน้า
 * การวัด rect ตรง ๆ ทำให้ล้มเหลวแล้วยังเห็นเนื้อหาเสมอ
 */
export default function ScrollReveal() {
  useEffect(() => {
    const nodes = new Set(document.querySelectorAll<HTMLElement>(".reveal, .reveal-mask"));
    if (!nodes.size) return;

    const revealAll = () => {
      nodes.forEach((n) => n.classList.add("is-visible"));
      nodes.clear();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealAll();
      return;
    }

    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.95;
      nodes.forEach((n) => {
        if (n.getBoundingClientRect().top < limit) {
          n.classList.add("is-visible");
          nodes.delete(n);
        }
      });
      if (!nodes.size) detach();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    function detach() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    try {
      check();
    } catch {
      // วัดตำแหน่งไม่ได้ด้วยเหตุผลใดก็ตาม — โชว์เนื้อหาทั้งหมดดีกว่าปล่อยให้หน้าว่าง
      revealAll();
      detach();
    }

    return () => {
      detach();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
