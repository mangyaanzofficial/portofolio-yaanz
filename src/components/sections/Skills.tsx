import { SITE_CONFIG } from "../../config/site";
import { useInView } from "../../hooks/useInView";
import TechIcon, { techColor } from "../icons/TechIcon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function SkillCard({ name, level, index }: { name: string; level: number; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const color = techColor(name);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 5) * 60}ms` }}
      className={inView ? "reveal reveal-up is-visible" : "reveal reveal-up"}
    >
      <div className="group card-hover relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-4 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.045] hover:shadow-[0_20px_60px_-30px_rgba(72,213,196,0.5)] sm:p-5">
      <span
        aria-hidden="true"
        className="absolute -top-14 -right-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: color }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-105"
          style={{
            borderColor: `${color}22`,
            backgroundColor: `${color}12`,
            color,
          }}
        >
          <TechIcon name={name} className="h-[1.35rem] w-[1.35rem]" />
        </span>
        <span className="font-mono text-[0.66rem] text-zinc-600 tabular-nums">{level}%</span>
      </div>

      <p className="relative mt-4 font-display text-[0.92rem] font-medium text-zinc-100">{name}</p>

      <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/6">
        <span
          className="block h-full rounded-full transition-[width] duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: inView ? `${level}%` : "0%", background: color, opacity: 0.75 }}
        />
      </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Skills & Technologies"
            title={
              <>
                Tools yang saya pakai <span className="text-accent-300">setiap hari</span>.
              </>
            }
            description="Kombinasi front-end, backend, database, dan infrastruktur untuk menyelesaikan project dari sisi desain sampai deployment."
          />
          <Reveal variant="fade" delay={200}>
            <p className="shrink-0 font-mono text-[0.68rem] tracking-[0.16em] text-zinc-600 uppercase">
              {SITE_CONFIG.skills.length} technologies
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {SITE_CONFIG.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
