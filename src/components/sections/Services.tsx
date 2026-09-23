import { SITE_CONFIG } from "../../config/site";
import { ServiceIcon } from "../icons/Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Layanan yang bisa saya <span className="text-accent-300">kerjakan</span> untuk kamu.
            </>
          }
          description="Dari website sampai automation dan server — saya menangani bagian teknis agar kamu bisa fokus pada bisnisnya."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITE_CONFIG.services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <article className="group card-hover relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-6 hover:-translate-y-1.5 hover:border-white/16 hover:bg-white/[0.04] hover:shadow-[0_30px_70px_-40px_rgba(72,213,196,0.4)]">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px hairline opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-300/15 bg-accent-400/8 text-accent-300 transition-all duration-500 group-hover:scale-105 group-hover:border-accent-300/30 group-hover:bg-accent-400/14">
                  <ServiceIcon name={service.icon} className="h-[1.35rem] w-[1.35rem]" />
                </span>

                <h3 className="relative mt-5 font-display text-[1.02rem] font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 text-[0.86rem] leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="font-mono text-[0.62rem] tracking-wide text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={120}>
            <a
              href="#contact"
              className="group relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden rounded-3xl border border-accent-300/18 bg-gradient-to-br from-accent-400/12 via-white/[0.02] to-transparent p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-300/35"
            >
              <span
                aria-hidden="true"
                className="absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-accent-400/18 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              />
              <p className="relative font-mono text-[0.62rem] tracking-[0.18em] text-accent-200/80 uppercase">
                Open for project
              </p>
              <div className="relative mt-8">
                <p className="font-display text-[1.15rem] leading-snug font-semibold text-white">
                  Punya kebutuhan khusus?
                  <br />
                  Diskusikan sekarang.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-medium text-accent-200">
                  Hubungi saya
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


