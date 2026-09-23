import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

type Variant = "up" | "fade" | "blur" | "left" | "right" | "scale" | "none";

const variantClass: Record<Variant, string> = {
  up: "reveal-up",
  fade: "reveal-none",
  blur: "reveal-blur",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  none: "reveal-none",
};

type RevealProps = {
  children: React.ReactNode;
  /** delay dalam ms */
  delay?: number;
  variant?: Variant;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header" | "span";
  threshold?: number;
};

/** Wrapper animasi reveal-on-scroll (fade / slide / blur). */
export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  as: Tag = "div",
  threshold,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold ? { threshold } : undefined);

  return (
    <Tag
      // @ts-expect-error – ref generic untuk semua tag string di atas
      ref={ref}
      className={cn("reveal", variantClass[variant], inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
