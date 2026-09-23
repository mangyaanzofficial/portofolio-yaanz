import { useScrollProgress } from "../hooks/useScrollProgress";

/** Indikator progress scroll tipis di paling atas halaman. */
export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent-500 via-accent-300 to-white/80"
      style={{ transform: `scaleX(${progress})`, opacity: progress > 0.001 ? 1 : 0 }}
    />
  );
}
