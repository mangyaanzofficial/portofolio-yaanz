import { useScrollProgress } from "../hooks/useScrollProgress";
import { ChevronUp } from "./icons/Icons";
import { cn } from "../utils/cn";

export default function BackToTop() {
  const { y } = useScrollProgress();
  const visible = y > 520;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      className={cn(
        "fixed right-4 bottom-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-900/70 text-zinc-300 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent-300/35 hover:text-white sm:right-6 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  );
}
