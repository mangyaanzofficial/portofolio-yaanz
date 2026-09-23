import { SITE_CONFIG } from "../../config/site";
import TechIcon, { techColor } from "../icons/TechIcon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

type StackItem = { readonly name: string; readonly icon: string };
const ENTRIES = Object.entries(SITE_CONFIG.stack) as [string, readonly StackItem[]][];

export default function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          title={
            <>
              Stack yang saya <span className="text-accent-300">kuasai</span> di tiap layer.
            </>
          }
          description="Susunan teknologi dari antarmuka, backend, database, sampai infrastruktur yang menjalankan semuanya."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRIES.map(([group, items], i) => (
            <Reveal key={group} delay={(i % 3) * 90} className={group === "Tools" ? "lg:col-start-2" : undefined}>
              <div className="group card-hover h-full rounded-3xl border border-white/8 bg-white/[0.02] p-6 hover:border-white/14 hover:bg-white/[0.035]">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-[0.68rem] tracking-[0.2em] text-zinc-500 uppercase">
                    {group}
                  </h3>
                  <span className="font-mono text-[0.62rem] text-zinc-700">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-5 h-px w-full hairline" />

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {items.map((item) => {
                    const color = techColor(item.name);
                    return (
                      <li key={item.name}>
                        <span
                          className="flex items-center gap-2 rounded-xl border bg-white/[0.02] py-2 pr-3.5 pl-2.5 text-[0.8rem] font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                          style={{ borderColor: `${color}1f` }}
                        >
                          <TechIcon
                            name={item.name}
                            className="h-[1.05rem] w-[1.05rem]"
                            strokeWidth={1.5}
                          />
                          <span style={{ color: `${color}` }} className="opacity-80">
                            {item.name}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
