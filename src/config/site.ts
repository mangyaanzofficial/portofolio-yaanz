/* ============================================================================
 *  SITE_CONFIG  —  SATU-SATUNYA FILE YANG PERLU KAMU EDIT
 *  ---------------------------------------------------------------------------
 *  Ganti semua identitas, link, project, skill, dan layanan di file ini.
 *  Tidak perlu menyentuh komponen UI sama sekali.
 * ==========================================================================*/

export type Project = {
  id: string;
  name: string;
  category: string; // dipakai juga untuk filter
  categoryLabel: string;
  description: string;
  tags: string[];
  year: string;
  status: "Live" | "In Development" | "Private" | "Concept";
  link: string; // ganti dengan URL project asli (atau "#")
  preview: "store" | "otp" | "bot" | "panel";
};

export type Skill = {
  name: string;
  level: number; // 0 - 100 (dipakai untuk bar halus pada card)
  icon: string; // key pada komponen TechIcon
};

export type Service = {
  title: string;
  description: string;
  icon: "web" | "bot" | "automation" | "server" | "api" | "design" | "product";
  points: string[];
};

export const SITE_CONFIG = {
  /* ---------------------------------------------------------------- IDENTITY */
  name: "Reza Pratama", // TODO: ganti nama kamu
  firstName: "Reza",
  username: "@santanic", // TODO: username / handle
  role: "Developer • Digital Creator • Entrepreneur",
  roleList: ["Developer", "Digital Creator", "Entrepreneur"],
  location: "Indonesia",
  available: true,
  availabilityText: "Available for Projects",

  profileImage: "", // TODO: isi URL foto, mis. "/images/profile.jpg". Kosongkan untuk pakai monogram.

  heroTitle: "Hi, I'm",
  heroDescription:
    "Saya membangun website, bot, automation, dan berbagai solusi digital dengan fokus pada performa, desain, dan pengalaman pengguna.",

  /* ------------------------------------------------------------------- ABOUT */
  aboutTitle: "About Me",
  bio: "Saya adalah seorang developer dan digital creator yang tertarik pada web development, automation, server management, bot development, dan teknologi digital. Saya senang membangun project dari konsep hingga menjadi sistem yang dapat digunakan.",
  aboutParagraphs: [
    "Fokus saya sederhana: membuat sistem yang stabil, cepat, dan mudah dipakai. Saya terbiasa bekerja dari sisi front-end sampai sisi server — mulai dari desain antarmuka, logika backend, database, sampai deployment di VPS.",
    "Sehari-hari saya membangun digital product, bot Telegram untuk kebutuhan operasional, automation yang memangkas pekerjaan manual, serta mengelola server dan layanan hosting berbasis Pterodactyl.",
  ],
  aboutHighlights: [
    { label: "Fokus", value: "Web, Bot & Automation" },
    { label: "Basis", value: "Indonesia · Remote" },
    { label: "Bahasa", value: "Indonesia · English" },
  ],

  /* --------------------------------------------------------------- SOCIALS */
  email: "hello@santanic.dev", // TODO
  telegram: "https://t.me/santanic", // TODO
  whatsapp: "https://wa.me/6281234567890", // TODO
  github: "https://github.com/santanic", // TODO
  instagram: "https://instagram.com/santanic", // TODO

  /* ----------------------------------------------------------------- STATS */
  stats: [
    { label: "Projects Completed", value: 24, suffix: "+" },
    { label: "Clients", value: 15, suffix: "+" },
    { label: "Years Experience", value: 2, suffix: "" },
    { label: "Technologies", value: 18, suffix: "+" },
  ],

  /* ---------------------------------------------------------------- SKILLS */
  skills: [
    { name: "HTML", level: 95, icon: "html" },
    { name: "CSS", level: 90, icon: "css" },
    { name: "JavaScript", level: 88, icon: "javascript" },
    { name: "Node.js", level: 86, icon: "nodejs" },
    { name: "PHP", level: 80, icon: "php" },
    { name: "Python", level: 76, icon: "python" },
    { name: "MySQL", level: 84, icon: "mysql" },
    { name: "GitHub", level: 88, icon: "github" },
    { name: "Linux", level: 82, icon: "linux" },
    { name: "Docker", level: 74, icon: "docker" },
    { name: "Telegram Bot", level: 92, icon: "telegram" },
    { name: "REST API", level: 87, icon: "api" },
    { name: "Cloudflare", level: 80, icon: "cloudflare" },
    { name: "VPS", level: 85, icon: "vps" },
    { name: "Pterodactyl", level: 83, icon: "pterodactyl" },
  ] as Skill[],

  /* -------------------------------------------------------------- PROJECTS */
  projects: [
    {
      id: "santanic-store",
      name: "Santanic Store",
      category: "ecommerce",
      categoryLabel: "E-Commerce / Digital Product",
      description: "Platform digital store dengan sistem order dan payment automation.",
      tags: ["Node.js", "MySQL", "Payment API", "Tailwind"],
      year: "2025",
      status: "Live",
      link: "#",
      preview: "store",
    },
    {
      id: "santanic-otp",
      name: "Santanic OTP",
      category: "service",
      categoryLabel: "OTP / Digital Service",
      description: "Platform untuk pemesanan layanan OTP secara praktis.",
      tags: ["JavaScript", "REST API", "Cloudflare"],
      year: "2025",
      status: "Live",
      link: "#",
      preview: "otp",
    },
    {
      id: "telegram-vps-manager",
      name: "Telegram VPS Manager",
      category: "automation",
      categoryLabel: "Automation / VPS",
      description: "Telegram bot untuk membuat, mengelola, dan memonitor VPS secara otomatis.",
      tags: ["Node.js", "SSH", "Telegram Bot", "Linux"],
      year: "2026",
      status: "In Development",
      link: "#",
      preview: "bot",
    },
    {
      id: "pterodactyl-panel-system",
      name: "Pterodactyl Panel System",
      category: "hosting",
      categoryLabel: "Hosting / Server",
      description: "System management untuk layanan hosting berbasis Pterodactyl.",
      tags: ["PHP", "Docker", "MySQL", "VPS"],
      year: "2026",
      status: "Private",
      link: "#",
      preview: "panel",
    },
  ] as Project[],

  /* -------------------------------------------------------------- SERVICES */
  services: [
    {
      title: "Web Development",
      description: "Website Company profile, landing page, dan web app yang cepat serta responsif.",
      icon: "web",
      points: ["Landing page", "Web app", "Performance"],
    },
    {
      title: "Bot Development",
      description: "Bot Telegram untuk order, notifikasi, dan manajemen sistem secara otomatis.",
      icon: "bot",
      points: ["Telegram Bot", "Inline menu", "Webhook"],
    },
    {
      title: "Automation System",
      description: "Otomatisasi alur kerja berulang agar operasional lebih efisien dan minim error.",
      icon: "automation",
      points: ["Cron job", "Auto order", "Monitoring"],
    },
    {
      title: "VPS & Server Management",
      description: "Setup, hardening, dan maintenance server agar layanan tetap online.",
      icon: "server",
      points: ["Provisioning", "Hardening", "Uptime monitor"],
    },
    {
      title: "API Integration",
      description: "Integrasi payment gateway, gateway OTP, dan layanan pihak ketiga.",
      icon: "api",
      points: ["REST API", "Webhook", "Payment gateway"],
    },
    {
      title: "UI/UX Design",
      description: "Antarmuka bersih dan modern dengan fokus pada kenyamanan pengguna.",
      icon: "design",
      points: ["Design system", "Dark UI", "Prototyping"],
    },
    {
      title: "Digital Product Development",
      description: "Membangun produk digital dari riset, development, sampai siap dipasarkan.",
      icon: "product",
      points: ["Validasi ide", "MVP", "Launch"],
    },
  ] as Service[],

  /* -------------------------------------------------------------- TIMELINE */
  timeline: [
    {
      year: "2024",
      title: "Started exploring web development",
      description:
        "Belajar dasar HTML, CSS, dan JavaScript. Membuat halaman statis pertama serta memahami struktur dan styling.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      year: "2025",
      title: "Started building automation, bots, and server systems",
      description:
        "Mulai membangun bot Telegram, sistem order otomatis, dan mengelola VPS untuk layanan yang berjalan 24 jam.",
      tags: ["Node.js", "Telegram Bot", "Linux", "VPS"],
    },
    {
      year: "2026",
      title: "Building digital products and various web-based systems",
      description:
        "Fokus mengembangkan produk digital, platform hosting berbasis Pterodactyl, dan sistem web yang siap dipakai klien.",
      tags: ["PHP", "Docker", "MySQL", "Pterodactyl"],
    },
  ],

  /* ------------------------------------------------------- TECHNOLOGY STACK */
  stack: {
    Frontend: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
    ],
    Backend: [
      { name: "Node.js", icon: "nodejs" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
    ],
    Database: [{ name: "MySQL", icon: "mysql" }],
    Infrastructure: [
      { name: "Linux", icon: "linux" },
      { name: "VPS", icon: "vps" },
      { name: "Docker", icon: "docker" },
      { name: "Cloudflare", icon: "cloudflare" },
    ],
    Tools: [
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Acode", icon: "acode" },
    ],
  },

  /* ------------------------------------------------------------------- NAV */
  nav: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ],

  /* ------------------------------------------------------------------- CTA */
  cta: {
    primary: "View My Work",
    secondary: "Contact Me",
    contactTitle: "Let's Work Together",
    contactQuestion: "Punya ide atau project yang ingin dibuat?",
    contactLead: "Let's turn your idea into something real.",
    footerTagline: "Building digital experiences, one project at a time.",
    copyright: `© ${new Date().getFullYear()} {name}. All rights reserved.`,
  },
} as const;

/** Ganti placeholder {name} pada teks copyright dengan nama dari config. */
export const copyrightText = SITE_CONFIG.cta.copyright.replace("{name}", SITE_CONFIG.name);

/** Link social siap pakai — dipakai di Contact & Footer. */
export const socialLinks = [
  {
    label: "Telegram",
    handle: SITE_CONFIG.username,
    href: SITE_CONFIG.telegram,
    icon: "telegram" as const,
  },
  {
    label: "WhatsApp",
    handle: "+62 812-3456-7890", // TODO: samakan dengan nomor WhatsApp
    href: SITE_CONFIG.whatsapp,
    icon: "whatsapp" as const,
  },
  {
    label: "GitHub",
    handle: SITE_CONFIG.github.replace("https://github.com/", "@"),
    href: SITE_CONFIG.github,
    icon: "github" as const,
  },
  {
    label: "Email",
    handle: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: "mail" as const,
  },
];

/** Tambahkan instagram di sini jika ingin ditampilkan di footer. */
export const footerLinks = [
  { label: "Telegram", href: SITE_CONFIG.telegram, icon: "telegram" as const },
  { label: "WhatsApp", href: SITE_CONFIG.whatsapp, icon: "whatsapp" as const },
  { label: "GitHub", href: SITE_CONFIG.github, icon: "github" as const },
  { label: "Instagram", href: SITE_CONFIG.instagram, icon: "instagram" as const },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "mail" as const },
];
