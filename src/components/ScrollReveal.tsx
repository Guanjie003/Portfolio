"use client";

import { useEffect } from "react";

/**
 * Drives the scroll reveal for every element carrying `reveal` or `reveal-mask`.
 * Mounted once in the layout so the rest of the tree can stay server components.
 *
 * This measures positions itself instead of using IntersectionObserver: elements that
 * have not been revealed yet are hidden, so if the observer failed to fire for any
 * reason the content would disappear entirely. Measuring rects directly fails open —
 * anything unexpected still ends with the content on screen.
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
      // If measuring fails for any reason, showing everything beats leaving a blank page
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
