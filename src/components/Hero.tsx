import { useEffect, useState } from "react";
import { SITE_CONFIG } from "../config/site";
import { ArrowUpRight, Copy } from "./icons/Icons";
import { useToast } from "./ui/Toast";
import { cn } from "../utils/cn";

/** Memecah teks jadi kata dengan animasi reveal berurutan. */
function TextReveal({
  text,
  delay = 0,
  step = 70,
  className,
  wordClassName,
}: {
  text: string;
  delay?: number;
  step?: number;
  className?: string;
  wordClassName?: string;
}) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.28em]", className)}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pt-[0.06em] pb-[0.16em] -mb-[0.1em]"
        >
          <span
            className={cn(
              "inline-block transition-all duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
              wordClassName,
            )}
            style={{
              transitionDelay: `${delay + i * step}ms`,
              transform: shown ? "translateY(0)" : "translateY(105%)",
              opacity: shown ? 1 : 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const toast = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
    } catch {
      const el = document.createElement("textarea");
      el.value = SITE_CONFIG.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    toast(`Email disalin — ${SITE_CONFIG.email}`);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const monogram = SITE_CONFIG.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-28 pb-16 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* ---------------------------------------------------------- Copy */}
        <div className="lg:col-span-7">
          {/* Status */}
          <div className="animate-[rise_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
            <span className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-2.5 text-[0.72rem] font-medium tracking-wide text-zinc-300">
              <span className="relative flex h-2 w-2">
                {SITE_CONFIG.available && (
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent-400" />
                )}
                <span
                  className={cn(
                    "relative inline-flex h-2 w-2 rounded-full",
                    SITE_CONFIG.available ? "bg-accent-400" : "bg-zinc-500",
                  )}
                />
              </span>
              {SITE_CONFIG.availabilityText}
            </span>
          </div>

          <h1 className="mt-7 text-[2.6rem] leading-[1.04] font-semibold tracking-tight sm:text-6xl lg:text-[4.4rem]">
            <span className="block text-zinc-400">
              <TextReveal text={SITE_CONFIG.heroTitle} delay={120} step={60} />
            </span>
            <span className="mt-2 block">
              <TextReveal
                text={SITE_CONFIG.name}
                delay={260}
                step={90}
                wordClassName="text-gradient"
              />
            </span>
          </h1>

          <div className="mt-6 animate-[rise_0.9s_cubic-bezier(0.22,1,0.36,1)_0.55s_both]">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.68rem] tracking-[0.16em] text-zinc-500 uppercase sm:text-xs">
              {SITE_CONFIG.roleList.map((role, i) => (
                <span key={role} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-accent-400/70" />}
                  {role}
                </span>
              ))}
            </p>
          </div>

          <p className="mt-6 max-w-xl animate-[rise_0.9s_cubic-bezier(0.22,1,0.36,1)_0.7s_both] text-[0.95rem] leading-relaxed text-zinc-400 sm:text-[1.05rem]">
            {SITE_CONFIG.heroDescription}
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 animate-[rise_0.9s_cubic-bezier(0.22,1,0.36,1)_0.85s_both] sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.88rem] font-semibold text-ink-950 shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_rgba(255,255,255,0.45)] active:translate-y-0"
            >
              {SITE_CONFIG.cta.primary}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-[0.88rem] font-medium text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300/40 hover:bg-accent-400/10 hover:text-white"
            >
              {SITE_CONFIG.cta.secondary}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-3 py-3.5 font-mono text-[0.72rem] text-zinc-500 transition-colors duration-300 hover:text-accent-300 sm:ml-1"
            >
              {copied ? "copied!" : SITE_CONFIG.email}
              <Copy className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* --------------------------------------------------- Terminal card */}
        <div className="lg:col-span-5">
          <div className="animate-[rise_1s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] bg-accent-400/10 blur-3xl"
              />
              <div className="glass animate-float-slower relative overflow-hidden rounded-3xl p-1.5">
                <div className="rounded-[1.35rem] border border-white/5 bg-ink-950/80 p-4 sm:p-5">
                  {/* window bar */}
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="ml-2 font-mono text-[0.62rem] tracking-wider text-zinc-600">
                      ~/santanic — zsh
                    </span>
                  </div>

                  {/* code */}
                  <pre className="mt-5 overflow-x-auto font-mono text-[0.68rem] leading-[1.9] text-zinc-400 sm:text-[0.72rem]">
                    <code>
                      <span className="text-accent-300">const</span>{" "}
                      <span className="text-zinc-200">developer</span> = {"{"}
                      {"\n"}  name: <span className="text-amber-200/80">"{SITE_CONFIG.name}"</span>,
                      {"\n"}  focus: [<span className="text-amber-200/80">"web"</span>,{" "}
                      <span className="text-amber-200/80">"bot"</span>,{" "}
                      <span className="text-amber-200/80">"automation"</span>],
                      {"\n"}  stack: [<span className="text-amber-200/80">"node"</span>,{" "}
                      <span className="text-amber-200/80">"php"</span>,{" "}
                      <span className="text-amber-200/80">"linux"</span>],
                      {"\n"}  status: <span className="text-accent-300">"open to work"</span>,
                      {"\n"}
                      {"}"};
                    </code>
                  </pre>

                  {/* footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/6 pt-4">
                    <span className="font-mono text-[0.62rem] text-zinc-600">
                      deploy · vps · monitor
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[0.62rem] text-accent-300/90">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent-400" />
                      online
                    </span>
                  </div>
                </div>
              </div>

              {/* monogram badge */}
              <div className="glass absolute -bottom-5 -left-3 hidden h-16 w-16 items-center justify-center rounded-2xl font-display text-lg font-semibold text-white sm:flex">
                {monogram}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll ke bagian About"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-300 md:flex"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">scroll</span>
        <span className="h-10 w-px overflow-hidden bg-white/10">
          <span className="block h-4 w-px animate-[floatY_2.4s_ease-in-out_infinite] bg-accent-300/80" />
        </span>
      </a>
    </section>
  );
}
