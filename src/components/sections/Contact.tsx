import { useState } from "react";
import { SITE_CONFIG, socialLinks } from "../../config/site";
import { ArrowUpRight, Check, Copy, Github, Instagram, Mail, Telegram, WhatsApp } from "../icons/Icons";
import Reveal from "../ui/Reveal";
import { useToast } from "../ui/Toast";

const ICONS = {
  telegram: Telegram,
  whatsapp: WhatsApp,
  github: Github,
  mail: Mail,
  instagram: Instagram,
} as const;

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      return true;
    } catch {
      return false;
    }
  }
}

export default function Contact() {
  const toast = useToast();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, label: string, value: string) => {
    const ok = await copyText(value);
    if (!ok) {
      toast("Gagal menyalin, coba manual.");
      return;
    }
    setCopiedKey(key);
    toast(`${label} disalin ke clipboard`);
    window.setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 2000);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.012))] p-6 backdrop-blur-xl sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/4 h-56 w-56 rounded-full bg-accent-400/14 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-[110px]"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Copy */}
            <div className="lg:col-span-6">
              <Reveal variant="fade">
                <span className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-300/80">
                  <span className="h-px w-6 bg-accent-300/50" />
                  Contact
                </span>
              </Reveal>

              <Reveal variant="blur" delay={80}>
                <h2 className="mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-[2.6rem]">
                  {SITE_CONFIG.cta.contactTitle.split(" ").slice(0, 1)}
                  <br />
                  <span className="text-gradient">
                    {SITE_CONFIG.cta.contactTitle.split(" ").slice(1).join(" ")}
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 text-[1rem] font-light text-zinc-300">
                  {SITE_CONFIG.cta.contactQuestion}
                </p>
                <p className="mt-2 text-[0.95rem] text-zinc-500">{SITE_CONFIG.cta.contactLead}</p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={SITE_CONFIG.telegram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.84rem] font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-16px_rgba(255,255,255,0.4)]"
                  >
                    <Telegram className="h-4 w-4" />
                    Telegram
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("email", "Email", SITE_CONFIG.email)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-[0.84rem] font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300/35 hover:text-white"
                  >
                    {copiedKey === "email" ? (
                      <Check className="h-4 w-4 text-accent-300" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    Copy Email
                  </button>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <p className="mt-8 font-mono text-[0.66rem] tracking-[0.14em] text-zinc-600 uppercase">
                  Usually replies within 24 hours · {SITE_CONFIG.location}
                </p>
              </Reveal>
            </div>

            {/* Channels */}
            <div className="lg:col-span-6">
              <ul className="space-y-3">
                {socialLinks.map((link, i) => {
                  const Icon = ICONS[link.icon];
                  return (
                    <Reveal key={link.label} variant="right" delay={i * 90} as="li">
                      <div className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.05] sm:p-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-300 transition-colors duration-400 group-hover:border-accent-300/25 group-hover:bg-accent-400/10 group-hover:text-accent-200">
                          <Icon className="h-[1.15rem] w-[1.15rem]" />
                        </span>

                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noreferrer noopener"
                          className="min-w-0 flex-1"
                        >
                          <span className="block text-[0.88rem] font-medium text-zinc-100">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block truncate font-mono text-[0.72rem] text-zinc-500">
                            {link.handle}
                          </span>
                        </a>

                        <button
                          type="button"
                          aria-label={`Salin ${link.label}`}
                          onClick={() => handleCopy(link.label, link.label, link.handle)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-all duration-300 hover:border-accent-300/30 hover:text-accent-200"
                        >
                          {copiedKey === link.label ? (
                            <Check className="h-4 w-4 text-accent-300" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>

                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noreferrer noopener"
                          aria-label={`Buka ${link.label}`}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-all duration-300 hover:border-white/20 hover:text-white"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
