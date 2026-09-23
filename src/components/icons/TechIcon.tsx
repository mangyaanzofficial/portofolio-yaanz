/**
 * TechIcon — set glyph SVG buatan sendiri (ringan, tanpa dependency eksternal).
 * Tambahkan teknologi baru dengan menambah key pada PATHS + BRAND di bawah.
 */

export type TechKey =
  | "html"
  | "css"
  | "javascript"
  | "nodejs"
  | "php"
  | "python"
  | "mysql"
  | "github"
  | "linux"
  | "docker"
  | "telegram"
  | "api"
  | "cloudflare"
  | "vps"
  | "pterodactyl"
  | "vscode"
  | "acode";

const PATHS: Record<TechKey, React.ReactNode> = {
  html: (
    <>
      <path d="M12 2.6l8 2.4v6.3c0 5-3.3 8.6-8 10.8-4.7-2.2-8-5.8-8-10.8V5l8-2.4z" />
      <path d="M10 10.2L7.8 12.4 10 14.6M14 10.2l2.2 2.2-2.2 2.2" />
    </>
  ),
  css: (
    <>
      <path d="M4.2 4.5h15.6L18.4 18 12 20l-6.4-2L4.2 4.5z" />
      <path d="M8.6 8.8h6.9l-.3 3.4H12" />
      <path d="M12 15.6l-2.6-.7-.2-1.8" />
    </>
  ),
  javascript: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3.4" />
      <path d="M9.8 10.2v4.6c0 .9-.6 1.4-1.4 1.4-.7 0-1.2-.4-1.4-1" />
      <path d="M15.6 11.1c-.3-.6-.9-1-1.6-1-.9 0-1.5.5-1.5 1.2 0 1.6 3.3 1 3.3 2.9 0 1.1-.8 1.8-2 1.8-1 0-1.7-.4-2.1-1.1" />
    </>
  ),
  nodejs: (
    <>
      <path d="M12 2.7l8 4.5v9.6l-8 4.5-8-4.5V7.2l8-4.5z" />
      <path d="M8.8 9.6v4.2c0 1-.8 1.6-1.7 1.6" />
      <path d="M13.2 15.4c.5.4 1.2.5 1.8.2.7-.3 1-1.2.4-1.8-.5-.5-1.6-.4-2.1-.9-.5-.5-.2-1.3.4-1.6.6-.3 1.3-.2 1.8.2" />
    </>
  ),
  php: (
    <>
      <ellipse cx="12" cy="12" rx="9.6" ry="6" />
      <path d="M6.4 9.6l1.2 4.8M7.4 12.4l1.8-.5.5 2.5" />
      <path d="M15.2 9.6l1.2 4.8M16.2 12.4l1.8-.5.5 2.5" />
      <path d="M11 9.6l-.9 4.8M12.6 9.6l-.9 4.8" />
    </>
  ),
  python: (
    <>
      <path d="M11.8 2.8c-2.6 0-3.9 1-3.9 2.6v2.1h6.3v1.1H6.4c-1.7 0-3 1.3-3 3.6 0 2.3 1.2 3.6 3 3.6h1.5v-2.5c0-1.6 1.3-2.8 3-2.8h3.8c1.6 0 2.8-1.1 2.8-2.7V5.4c0-1.6-1.3-2.6-3.9-2.6z" />
      <path d="M12.2 21.2c2.6 0 3.9-1 3.9-2.6v-2.1H9.8v-1.1h7.8c1.7 0 3-1.3 3-3.6" />
      <path d="M9.7 5.1h.02M14.3 18.9h.02" />
    </>
  ),
  mysql: (
    <>
      <ellipse cx="12" cy="6.4" rx="7.6" ry="3.2" />
      <path d="M4.4 6.4v11.2c0 1.8 3.4 3.2 7.6 3.2s7.6-1.4 7.6-3.2V6.4" />
      <path d="M4.4 12c0 1.8 3.4 3.2 7.6 3.2s7.6-1.4 7.6-3.2" />
    </>
  ),
  github: (
    <path
      d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.9 0C17.2 3.7 18.2 4 18.2 4c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5a11.4 11.4 0 007.8-10.8C23.4 5.6 18.3.5 12 .5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linux: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M7 13.4l2 1.8-2 1.8M11.6 17h5" />
    </>
  ),
  docker: (
    <>
      <rect x="3.2" y="11.4" width="3.6" height="3.4" rx="0.6" />
      <rect x="7.6" y="11.4" width="3.6" height="3.4" rx="0.6" />
      <rect x="12" y="11.4" width="3.6" height="3.4" rx="0.6" />
      <rect x="7.6" y="7.2" width="3.6" height="3.4" rx="0.6" />
      <path d="M2.6 17.6h15.9c2 0 3.1-1.2 3.5-3" />
      <path d="M20.2 12.2c1.2-.6 2 .1 2.2.8" />
    </>
  ),
  telegram: (
    <>
      <path d="M21.4 3.6L2.9 10.9c-.8.3-.8.9-.1 1.1l4.7 1.5 1.8 5.5c.2.6.6.7 1 .3l2.5-2.1 4.7 3.4c.6.4 1 .2 1.2-.6L22.6 4.7c.2-.9-.3-1.4-1.2-1.1z" />
      <path d="M7.5 13.5l10.2-6.3-7.6 7.3" />
    </>
  ),
  api: (
    <>
      <path d="M8.4 3.6c-2.2 0-2.6 1-2.6 2.8v2c0 1.4-.5 2.3-2.2 2.7 1.7.4 2.2 1.3 2.2 2.7v2.6c0 1.8.4 2.8 2.6 2.8" />
      <path d="M15.6 3.6c2.2 0 2.6 1 2.6 2.8v2c0 1.4.5 2.3 2.2 2.7-1.7.4-2.2 1.3-2.2 2.7v2.6c0 1.8-.4 2.8-2.6 2.8" />
      <path d="M13.4 9.2l-2.8 5.6" />
    </>
  ),
  cloudflare: (
    <>
      <path d="M7.4 17.4h9.2a3.4 3.4 0 00.6-6.7 5.2 5.2 0 00-9.9-1.2A3.9 3.9 0 007.4 17.4z" />
      <path d="M5.6 20h12.8" />
    </>
  ),
  vps: (
    <>
      <rect x="3" y="3.6" width="18" height="6.4" rx="2" />
      <rect x="3" y="14" width="18" height="6.4" rx="2" />
      <path d="M6.4 6.8h.02M6.4 17.2h.02" />
      <path d="M10 6.8h5M10 17.2h5" />
    </>
  ),
  pterodactyl: (
    <>
      <path d="M2.6 14.6c4.2-.9 7.4-3.6 9.4-8 1.2 3.5 3.5 5.8 6.9 6.9-3.1.8-4.8 2.1-5.9 4.6-1.2-2.1-2.7-3.2-4.8-3.6-1.5-.3-3.5.2-5.6.1z" />
      <path d="M12 6.6V3.4" />
    </>
  ),
  vscode: (
    <>
      <path d="M17.4 3.2l4 2v13.6l-4 2-8.6-7.3-3.9 3-1.5-.8 3.3-4.7-3.3-4.7 1.5-.8 3.9 3 8.6-7.3z" />
      <path d="M17.4 7.8v8.4l-5.6-4.2 5.6-4.2z" />
    </>
  ),
  acode: (
    <>
      <rect x="5.4" y="2.4" width="13.2" height="19.2" rx="2.8" />
      <path d="M10.6 10l-2 2 2 2M13.4 10l2 2-2 2" />
      <path d="M10.4 5h3.2" />
    </>
  ),
};

export const BRAND: Record<TechKey, string> = {
  html: "#E44D26",
  css: "#3B9DD8",
  javascript: "#F0DB4F",
  nodejs: "#5FA04E",
  php: "#8A93C7",
  python: "#FFD845",
  mysql: "#2A9DB5",
  github: "#FFFFFF",
  linux: "#FCC624",
  docker: "#3FA1E8",
  telegram: "#33A9E0",
  api: "#7FE6D8",
  cloudflare: "#F38020",
  vps: "#C6C6D0",
  pterodactyl: "#48D5C4",
  vscode: "#2BA8F2",
  acode: "#48D5C4",
};

type Props = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export default function TechIcon({ name, className = "h-5 w-5", strokeWidth = 1.4 }: Props) {
  const key = (name.toLowerCase().replace(/[^a-z]/g, "") || "api") as TechKey;
  const path = PATHS[key] ?? PATHS.api;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}

export function techColor(name: string) {
  const key = (name.toLowerCase().replace(/[^a-z]/g, "") || "api") as TechKey;
  return BRAND[key] ?? "#7FE6D8";
}
