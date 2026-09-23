import { useEffect, useState } from "react";

/**
 * Mengembalikan id section yang sedang aktif di viewport.
 * Menggunakan rAF-throttled scroll listener (ringan, tanpa library).
 */
export function useActiveSection(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const scrollY = window.scrollY + offset;
      const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;

      if (bottomReached) {
        setActive(ids[ids.length - 1] ?? "");
        return;
      }

      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, offset]);

  return active;
}
