import { useMemo } from "react";

type Particle = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

/** Latar belakang global: gradient gelap, grid beranimasi, glow halus, partikel subtle. */
export default function Background() {
  const particles = useMemo<Particle[]>(() => {
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: 16 }, () => ({
      left: `${(rand() * 100).toFixed(2)}%`,
      top: `${(rand() * 100).toFixed(2)}%`,
      size: rand() > 0.75 ? 2.5 : 1.5,
      delay: `${(rand() * 8).toFixed(2)}s`,
      duration: `${(8 + rand() * 10).toFixed(2)}s`,
      opacity: 0.12 + rand() * 0.22,
    }));
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#101018_0%,#08080b_45%,#050506_100%)]" />

      {/* Grid beranimasi */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />

      {/* Glow halus */}
      <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-500/12 blur-[130px]" />
      <div className="absolute top-[38%] -left-24 h-[26rem] w-[26rem] rounded-full bg-indigo-500/8 blur-[140px]" />
      <div className="absolute right-[-8rem] bottom-[6%] h-[24rem] w-[24rem] rounded-full bg-accent-400/8 blur-[150px]" />

      {/* Partikel subtle */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-float-slow"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_50%,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
