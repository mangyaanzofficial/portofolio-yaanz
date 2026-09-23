/** Ikon UI kecil (stroke, currentColor) — semuanya inline agar tanpa dependency. */

type P = { className?: string };

const base = "h-5 w-5";

function Svg({ className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? base}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = ({ className }: P) => (
  <Svg className={className}>
    <path d="M7 17L17 7M9 7h8v8" />
  </Svg>
);

export const ArrowRight = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Svg>
);

export const Copy = ({ className }: P) => (
  <Svg className={className}>
    <rect x="9" y="9" width="11" height="11" rx="2.4" />
    <path d="M15 5.6A2.6 2.6 0 0012.4 3H6.6A2.6 2.6 0 004 5.6v5.8A2.6 2.6 0 006.6 14" />
  </Svg>
);

export const Check = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4.5 12.8l4.6 4.4L19.5 6.8" />
  </Svg>
);

export const Menu = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4 8h16M4 16h11" />
  </Svg>
);

export const Close = ({ className }: P) => (
  <Svg className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const ChevronUp = ({ className }: P) => (
  <Svg className={className}>
    <path d="M6 14l6-6 6 6" />
  </Svg>
);

export const Sparkle = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5z" />
  </Svg>
);

export const Mail = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4.6 7.4L12 12.6l7.4-5.2" />
  </Svg>
);

export const WhatsApp = ({ className }: P) => (
  <Svg className={className}>
    <path d="M20.4 11.6a8.4 8.4 0 01-12.5 7.4L3.6 20.4l1.5-4.2A8.4 8.4 0 1120.4 11.6z" />
    <path d="M9.1 8.6c.3-.6 1.3-.5 1.6.1l.6 1.2c.1.3.1.6-.1.8l-.5.6c.6 1.1 1.4 1.8 2.5 2.3l.6-.6c.2-.2.6-.3.8-.2l1.3.5c.6.2.8 1.2.2 1.6-1.6 1.1-5.4-.6-6.8-4.1-.3-.7-.4-1.6-.2-2.2z" />
  </Svg>
);

export const Telegram = ({ className }: P) => (
  <Svg className={className}>
    <path d="M21.4 3.6L2.9 10.9c-.8.3-.8.9-.1 1.1l4.7 1.5 1.8 5.5c.2.6.6.7 1 .3l2.5-2.1 4.7 3.4c.6.4 1 .2 1.2-.6L22.6 4.7c.2-.9-.3-1.4-1.2-1.1z" />
    <path d="M7.5 13.5l10.2-6.3-7.6 7.3" />
  </Svg>
);

export const Instagram = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <path d="M17 7.2h.02" />
  </Svg>
);

export const Github = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className ?? base} aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.9 0C17.2 3.7 18.2 4 18.2 4c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5a11.4 11.4 0 007.8-10.8C23.4 5.6 18.3.5 12 .5z"
    />
  </svg>
);

/* ------------------------------------------------------- Service icons */

export const ServiceIcon = ({
  name,
  className,
}: P & { name: "web" | "bot" | "automation" | "server" | "api" | "design" | "product" }) => {
  switch (name) {
    case "web":
      return (
        <Svg className={className}>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M3 9h18M6.4 6.6h.02M9 6.6h.02" />
          <path d="M8 13.4l2 1.9-2 1.9M12.4 17.2h4" />
        </Svg>
      );
    case "bot":
      return (
        <Svg className={className}>
          <rect x="4" y="7.4" width="16" height="11.2" rx="4" />
          <path d="M12 3.6v3.8" />
          <circle cx="12" cy="2.9" r="0.9" />
          <path d="M9.2 12.4h.02M14.8 12.4h.02" />
          <path d="M9.8 15.4c1.4.9 3 .9 4.4 0" />
        </Svg>
      );
    case "automation":
      return (
        <Svg className={className}>
          <path d="M4.6 8.4A8 8 0 0119 10.4" />
          <path d="M19.4 15.6A8 8 0 015 13.6" />
          <path d="M16.4 6.4l2.8 1-.6 2.9M7.6 17.6l-2.8-1 .6-2.9" />
        </Svg>
      );
    case "server":
      return (
        <Svg className={className}>
          <rect x="3" y="3.6" width="18" height="6.4" rx="2" />
          <rect x="3" y="14" width="18" height="6.4" rx="2" />
          <path d="M6.4 6.8h.02M6.4 17.2h.02" />
          <path d="M10 6.8h5M10 17.2h5" />
        </Svg>
      );
    case "api":
      return (
        <Svg className={className}>
          <path d="M9 7.4L4.4 12 9 16.6M15 7.4l4.6 4.6-4.6 4.6" />
          <path d="M13.4 6l-2.8 12" />
        </Svg>
      );
    case "design":
      return (
        <Svg className={className}>
          <path d="M12 3.4a8.6 8.6 0 000 17.2c1.4 0 2-.8 2-1.8 0-1.6-1.4-1.7-1.4-3 0-1 .8-1.7 2.2-1.7h1.8c2.3 0 4-1.6 4-3.8 0-3.9-3.9-6.9-8.6-6.9z" />
          <path d="M8 9h.02M11 7h.02M7 12.4h.02" />
        </Svg>
      );
    case "product":
      return (
        <Svg className={className}>
          <path d="M12 3.2l7.6 3.6v6.4c0 3.8-3 6.6-7.6 8.6-4.6-2-7.6-4.8-7.6-8.6V6.8L12 3.2z" />
          <path d="M8.8 12.2l2.3 2.3 4.1-4.6" />
        </Svg>
      );
    default:
      return null;
  }
};
