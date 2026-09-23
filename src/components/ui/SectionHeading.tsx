import Reveal from "./Reveal";
import { cn } from "../../utils/cn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <Reveal variant="fade">
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-300/80",
          )}
        >
          <span className="h-px w-6 bg-accent-300/50" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80} variant="blur">
        <h2 className="mt-4 text-3xl leading-[1.12] font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={150}>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-zinc-400 sm:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
