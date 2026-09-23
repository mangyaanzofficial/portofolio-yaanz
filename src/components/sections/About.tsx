import { SITE_CONFIG } from "../../config/site";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const count = useCountUp(value, inView, 1400 + delay);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors duration-500 hover:border-white/14 hover:bg-white/[0.04] sm:p-5"
    >
      <span className="absolute inset-x-0 top-0 h-px hairline opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {count}
        <span className="text-accent-300">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[0.72rem] leading-snug tracking-wide text-zinc-500 uppercase">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const monogram = SITE_CONFIG.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Membangun hal dari <span className="text-accent-300">nol</span> sampai
              benar-benar bisa dipakai.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Bio */}
          <div className="lg:col-span-7">
            <Reveal variant="blur">
              <p className="text-lg leading-relaxed font-light text-zinc-200 sm:text-xl">
                {SITE_CONFIG.bio}
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {SITE_CONFIG.aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 90}>
                  <p className="text-[0.95rem] leading-relaxed text-zinc-400">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <dl className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {SITE_CONFIG.aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3.5"
                  >
                    <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-zinc-600 uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.85rem] font-medium text-zinc-200">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Profile card + stats */}
          <div className="lg:col-span-5">
            <Reveal variant="right" delay={80}>
              <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent-400/12 blur-3xl"
                />
                <div className="relative flex items-center gap-4">
                  {SITE_CONFIG.profileImage ? (
                    <img
                      src={SITE_CONFIG.profileImage}
                      alt={SITE_CONFIG.name}
                      className="h-16 w-16 rounded-2xl border border-white/10 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent font-display text-xl font-semibold text-white">
                      {monogram}
                      <span className="absolute inset-0 rounded-2xl bg-accent-400/10 blur-lg" />
                    </div>
                  )}
                  <div>
                    <p className="font-display text-[1.05rem] font-semibold text-white">
                      {SITE_CONFIG.name}
                    </p>
                    <p className="mt-1 font-mono text-[0.7rem] text-accent-300/90">
                      {SITE_CONFIG.username}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 text-[0.9rem] leading-relaxed text-zinc-400">
                  &ldquo;Detail kecil pada interface dan stabilitas di sisi server adalah dua hal
                  yang tidak bisa ditawar.&rdquo;
                </p>

                <div className="relative mt-7 grid grid-cols-2 gap-3">
                  {SITE_CONFIG.stats.map((stat, i) => (
                    <StatItem
                      key={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      delay={i * 90}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
