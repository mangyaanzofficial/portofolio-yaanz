import type { Project } from "../config/site";

/** Thumbnail project dibuat dengan CSS murni (ringan, cepat, tanpa gambar eksternal). */
export default function ProjectPreview({ type }: { type: Project["preview"] }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[linear-gradient(150deg,#0e0e13_0%,#08080b_60%,#0a0a10_100%)]">
      {/* grid halus */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-10 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-accent-400/12 blur-3xl"
      />

      {type === "store" && <StoreMock />}
      {type === "otp" && <OtpMock />}
      {type === "bot" && <BotMock />}
      {type === "panel" && <PanelMock />}
    </div>
  );
}

/* --------------------------------------------------------------- mocks */

function StoreMock() {
  return (
    <div className="absolute inset-0 flex flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-accent-400/25" />
          <span className="h-1.5 w-14 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-white/8" />
          <span className="h-1.5 w-8 rounded-full bg-white/8" />
          <span className="h-5 w-12 rounded-full bg-accent-400/30" />
        </div>
      </div>

      <div className="mt-6 h-2 w-24 rounded-full bg-white/20" />
      <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />

      <div className="mt-5 grid flex-1 grid-cols-3 gap-2.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-white/8 bg-white/[0.03] p-2"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <span className="block h-6 rounded-md bg-gradient-to-br from-white/12 to-transparent" />
            <span className="mt-2 block h-1.5 w-8 rounded-full bg-white/12" />
            <span className="mt-1.5 block h-1.5 w-5 rounded-full bg-accent-400/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

function OtpMock() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="w-[62%] max-w-[190px] rounded-[1.4rem] border border-white/10 bg-ink-950/80 p-3.5 shadow-[0_20px_50px_-25px_rgba(0,0,0,1)]">
        <div className="mx-auto h-1 w-8 rounded-full bg-white/12" />
        <p className="mt-4 text-center font-mono text-[0.55rem] tracking-[0.2em] text-zinc-500 uppercase">
          verify code
        </p>
        <div className="mt-3 flex justify-center gap-1.5">
          {["8", "4", "2", "9"].map((d, i) => (
            <span
              key={i}
              className="flex h-7 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] font-mono text-[0.7rem] text-accent-200"
              style={{ opacity: 1 - i * 0.12 }}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="mt-3.5 h-1 overflow-hidden rounded-full bg-white/8">
          <span className="block h-full w-2/3 rounded-full bg-accent-400/70" />
        </div>
        <div className="mt-3.5 space-y-1.5">
          <span className="block h-5 rounded-md bg-white/6" />
          <span className="block h-5 rounded-md bg-accent-400/20" />
        </div>
      </div>
    </div>
  );
}

function BotMock() {
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5 sm:p-7">
      <div className="flex items-center gap-2 pb-1">
        <span className="h-6 w-6 rounded-lg bg-accent-400/25" />
        <span className="h-1.5 w-20 rounded-full bg-white/15" />
      </div>

      <div className="max-w-[70%] rounded-2xl rounded-tl-md border border-white/8 bg-white/[0.04] px-3 py-2">
        <p className="font-mono text-[0.6rem] text-zinc-400">/create vps --region sg</p>
      </div>
      <div className="max-w-[78%] rounded-2xl rounded-tl-md border border-accent-400/20 bg-accent-400/8 px-3 py-2">
        <p className="font-mono text-[0.6rem] leading-relaxed text-accent-200/90">
          VPS created · 2 vCPU · 4GB
          <br />
          IP 103.**.**.14 · status running
        </p>
      </div>
      <div className="ml-auto max-w-[55%] rounded-2xl rounded-br-md border border-white/8 bg-white/[0.05] px-3 py-2">
        <p className="font-mono text-[0.6rem] text-zinc-300">/monitor</p>
      </div>
    </div>
  );
}

function PanelMock() {
  return (
    <div className="absolute inset-0 flex flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-16 rounded-full bg-white/15" />
        <span className="h-5 w-14 rounded-md border border-white/10 bg-white/[0.04]" />
      </div>

      <div className="mt-4 flex-1 space-y-2">
        {[
          { w: "72%", up: true },
          { w: "48%", up: true },
          { w: "61%", up: false },
          { w: "35%", up: true },
        ].map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-2"
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${row.up ? "bg-accent-400" : "bg-amber-400/80"}`}
            />
            <span className="h-1.5 rounded-full bg-white/14" style={{ width: row.w }} />
            <span className="ml-auto h-1 w-8 rounded-full bg-white/8" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-end gap-1.5">
        {[38, 62, 45, 78, 55, 88, 68].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-400/15 to-accent-400/50"
            style={{ height: `${h * 0.32}px` }}
          />
        ))}
      </div>
    </div>
  );
}
