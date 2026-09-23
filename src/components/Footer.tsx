import { copyrightText, footerLinks, SITE_CONFIG } from "../config/site";
import { Github, Instagram, Mail, Telegram, WhatsApp } from "./icons/Icons";

const ICONS = {
  telegram: Telegram,
  whatsapp: WhatsApp,
  github: Github,
  mail: Mail,
  instagram: Instagram,
} as const;

export default function Footer() {
  const year = copyrightText.match(/\d{4}/)?.[0] ?? String(new Date().getFullYear());

  return (
    <footer className="relative z-10 border-t border-white/8 pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-zinc-500">
              {SITE_CONFIG.cta.footerTagline}
            </p>
            <p className="mt-4 font-mono text-[0.66rem] tracking-[0.16em] text-zinc-700 uppercase">
              {SITE_CONFIG.username} · {SITE_CONFIG.location}
            </p>
          </div>

          <nav aria-label="Social links" className="flex flex-wrap gap-2.5">
            {footerLinks.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="group flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3.5 py-2 text-[0.78rem] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300/25 hover:text-white"
                >
                  <Icon className="h-[0.95rem] w-[0.95rem]" />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-12 h-px w-full hairline" />

        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-center font-mono text-[0.68rem] text-zinc-600 sm:text-left">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.66rem] tracking-[0.14em] text-zinc-700 uppercase">
            Designed &amp; built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
