import { useEffect, useState } from "react";

/** Progress scroll (0-1) + posisi scroll Y, dengan throttle requestAnimationFrame. */
export function useScrollProgress() {
  const [state, setState] = useState({ progress: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setState({
        progress: max > 0 ? Math.min(window.scrollY / max, 1) : 0,
        y: window.scrollY,
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return state;
}
