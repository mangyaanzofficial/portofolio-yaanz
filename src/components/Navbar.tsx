import { useEffect, useState } from "react";
import { SITE_CONFIG } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";

import { cn } from "../utils/cn";


const SECTION_IDS = SITE_CONFIG.nav.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const initials = SITE_CONFIG.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/8 bg-ink-950/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
            scrolled ? "h-16" : "h-20",
          )}
        >
          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display text-[0.8rem] font-semibold tracking-tight text-white transition-colors duration-300 group-hover:border-accent-300/40">
              {initials}
              <span className="absolute -inset-px rounded-xl bg-accent-400/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
              <span className="mt-1 font-mono text-[0.62rem] tracking-[0.18em] text-zinc-500 uppercase">
                {SITE_CONFIG.roleList[0]}
              </span>
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {SITE_CONFIG.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.82rem] font-medium transition-colors duration-300",
                      isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100",
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border border-white/10 bg-white/5" />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.8rem] font-medium text-zinc-200 transition-all duration-300 hover:border-accent-300/35 hover:bg-accent-400/10 hover:text-white sm:inline-flex"
            >
              Let&apos;s Talk
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition-colors duration-300 hover:border-white/20 hover:text-white lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300",
                    open ? "top-1/2 rotate-45" : "top-0.5",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-1/2 left-0 block h-[1.5px] bg-current transition-all duration-300",
                    open ? "w-0 opacity-0" : "w-3.5 opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300",
                    open ? "top-1/2 -rotate-45" : "bottom-0.5",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Garis bawah halus saat scroll */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px hairline transition-opacity duration-500"
          style={{ opacity: scrolled ? 1 : 0 }}
        />
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "visible pointer-events-auto" : "invisible pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-950/80 backdrop-blur-md transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-[4.6rem] origin-top rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,1)] transition-all duration-400",
            open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-3 scale-[0.97] opacity-0",
          )}
        >
          <ul className="flex flex-col">
            {SITE_CONFIG.nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 45 + 90}ms` : "0ms" }}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] transition-all duration-300",
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                    active === item.id
                      ? "bg-white/6 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <span className="font-display font-medium">{item.label}</span>
                  <span className="font-mono text-[0.65rem] text-zinc-600">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center rounded-2xl bg-white px-4 py-3.5 text-[0.9rem] font-semibold text-ink-950 transition-transform duration-300 active:scale-[0.98]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}
