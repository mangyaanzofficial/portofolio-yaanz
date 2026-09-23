import { SITE_CONFIG } from "../../config/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Timeline() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Perjalanan <span className="text-accent-300">singkat</span> saya.
            </>
          }
          description="Belajar secara otodidak, lalu mulai membangun sistem yang benar-benar dipakai."
        />

        <ol className="relative mt-14 space-y-10 sm:space-y-12">
          {/* garis vertikal */}
          <span
            aria-hidden="true"
            className="absolute top-2 left-[7px] h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-300/50 via-white/10 to-transparent sm:left-[calc(6rem_+_7px)]"
          />

          {SITE_CONFIG.timeline.map((item, i) => (
            <li key={item.year} className="relative pl-8 sm:pl-[calc(6rem_+_2.5rem)]">
              {/* tahun (desktop) */}
              <Reveal
                variant="left"
                className="absolute top-0 left-0 hidden w-24 text-right sm:block"
              >
                <span className="font-display text-lg font-semibold tracking-tight text-zinc-500 transition-colors duration-500">
                  {item.year}
                </span>
              </Reveal>

              {/* titik */}
              <Reveal
                variant="scale"
                className="absolute top-1.5 left-0 sm:left-24"
                delay={100}
              >
                <span className="relative flex h-[15px] w-[15px] items-center justify-center">
                  <span className="absolute h-full w-full rounded-full bg-accent-400/20" />
                  <span className="h-[7px] w-[7px] rounded-full bg-accent-300 shadow-[0_0_12px_2px_rgba(72,213,196,0.45)]" />
                </span>
              </Reveal>

              <div className="sm:pl-2">
                <Reveal variant="right" delay={80}>
                  <span className="font-mono text-[0.68rem] tracking-[0.18em] text-accent-300/90 uppercase sm:hidden">
                    {item.year}
                  </span>
                </Reveal>

                <Reveal variant="right" delay={140}>
                  <h3 className="mt-2 font-display text-[1.1rem] leading-snug font-semibold text-white sm:text-[1.25rem] sm:mt-0">
                    {item.title}
                  </h3>
                </Reveal>

                <Reveal variant="right" delay={200}>
                  <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </Reveal>

                <Reveal variant="right" delay={260}>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[0.6rem] tracking-wide text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* pemisah halus */}
              {i < SITE_CONFIG.timeline.length - 1 && (
                <span aria-hidden="true" className="absolute -bottom-5 left-8 h-px w-full hairline sm:left-[calc(6rem_+_2.5rem)]" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
