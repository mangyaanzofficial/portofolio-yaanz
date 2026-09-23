import { useMemo, useState } from "react";
import { SITE_CONFIG, type Project } from "../../config/site";
import { ArrowUpRight } from "../icons/Icons";
import ProjectPreview from "../ProjectPreview";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "../../utils/cn";

const statusStyle: Record<Project["status"], string> = {
  Live: "border-accent-400/30 bg-accent-400/10 text-accent-200",
  "In Development": "border-amber-400/25 bg-amber-400/10 text-amber-200/90",
  Private: "border-white/12 bg-white/5 text-zinc-400",
  Concept: "border-indigo-400/25 bg-indigo-400/10 text-indigo-200/90",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="animate-[rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="group card-hover relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] hover:-translate-y-1.5 hover:border-white/16 hover:bg-white/[0.035] hover:shadow-[0_30px_80px_-40px_rgba(72,213,196,0.45)]">
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
            <ProjectPreview type={project.preview} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent opacity-90" />

          <span
            className={cn(
              "absolute top-3.5 right-3.5 rounded-full border px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.12em] uppercase backdrop-blur-sm",
              statusStyle[project.status],
            )}
          >
            {project.status}
          </span>
          <span className="absolute bottom-3.5 left-4 font-mono text-[0.62rem] tracking-[0.14em] text-zinc-400 uppercase">
            {project.categoryLabel}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[1.05rem] leading-snug font-semibold text-white sm:text-[1.12rem]">
              {project.name}
            </h3>
            <span className="mt-1 shrink-0 font-mono text-[0.65rem] text-zinc-600">
              {project.year}
            </span>
          </div>

          <p className="mt-3 text-[0.86rem] leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[0.6rem] tracking-wide text-zinc-400 transition-colors duration-300 group-hover:border-white/14 group-hover:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target={project.link.startsWith("#") ? undefined : "_blank"}
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[0.8rem] font-medium text-zinc-200 transition-all duration-300 hover:border-accent-300/35 hover:bg-accent-400/10 hover:text-white"
          >
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(SITE_CONFIG.projects.map((p) => p.category)));
    return [{ key: "all", label: "All Work" }, ...unique.map((key) => ({ key, label: key }))];
  }, []);

  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? SITE_CONFIG.projects
        : SITE_CONFIG.projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Featured <span className="text-accent-300">Projects</span>
            </>
          }
          description="Beberapa project yang pernah saya bangun — dari digital store, layanan OTP, sampai automation dan sistem hosting."
        />

        {/* Filter */}
        <Reveal delay={150} variant="fade">
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setFilter(cat.key)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[0.78rem] font-medium capitalize transition-all duration-300",
                    isActive
                      ? "border-white/15 bg-white text-ink-950"
                      : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-100",
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
            <span className="ml-auto hidden font-mono text-[0.66rem] text-zinc-600 sm:block">
              {visible.length} / {SITE_CONFIG.projects.length} projects
            </span>
          </div>
        </Reveal>

        {/* Grid */}
        <div
          key={filter}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2"
        >
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-zinc-500">
            Belum ada project pada kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}
