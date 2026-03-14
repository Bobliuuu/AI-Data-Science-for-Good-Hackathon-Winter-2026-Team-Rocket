import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type IconName =
  | "talk"
  | "photo"
  | "again"
  | "school"
  | "pharmacy"
  | "grocery"
  | "clinic"
  | "home"
  | "person"
  | "mic"
  | "spark"
  | "back"
  | "check";

const shellClass =
  "mx-auto flex h-[calc(100vh-1.5rem)] w-full max-w-[27rem] flex-col gap-3 rounded-[2rem] border border-[rgba(255,255,255,0.7)] bg-[linear-gradient(180deg,rgba(255,251,244,0.94),rgba(247,241,228,0.96))] p-4 shadow-[0_20px_50px_rgba(53,41,25,0.14)] backdrop-blur";
const cardClass =
  "rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--card)] shadow-[0_10px_24px_rgba(53,41,25,0.08)]";

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "talk":
      return (
        <svg {...shared}>
          <path d="M5 7.5a4.5 4.5 0 0 1 4.5-4.5h5A4.5 4.5 0 0 1 19 7.5v3A4.5 4.5 0 0 1 14.5 15H11l-4 3v-3.2A4.48 4.48 0 0 1 5 10.5z" />
          <path d="M9 8h6" />
          <path d="M9 11h4" />
        </svg>
      );
    case "photo":
      return (
        <svg {...shared}>
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
          <path d="M8.5 5 10 3.5h4L15.5 5" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "again":
      return (
        <svg {...shared}>
          <path d="M7 8H4V5" />
          <path d="M4.6 8A8 8 0 0 1 18 6" />
          <path d="M17 16h3v3" />
          <path d="M19.4 16A8 8 0 0 1 6 18" />
        </svg>
      );
    case "school":
      return (
        <svg {...shared}>
          <path d="m3 10 9-6 9 6" />
          <path d="M5 10v9h14v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "pharmacy":
      return (
        <svg {...shared}>
          <path d="M12 4v16" />
          <path d="M4 12h16" />
          <rect x="5" y="5" width="14" height="14" rx="3" />
        </svg>
      );
    case "grocery":
      return (
        <svg {...shared}>
          <path d="M6 7h13l-1.3 6.2a2 2 0 0 1-2 1.6H9.4a2 2 0 0 1-2-1.5L5 4H3" />
          <circle cx="10" cy="18.5" r="1.2" />
          <circle cx="16" cy="18.5" r="1.2" />
        </svg>
      );
    case "clinic":
      return (
        <svg {...shared}>
          <path d="M12 20s-6.5-3.8-6.5-9.2A3.8 3.8 0 0 1 9.3 7a4 4 0 0 1 2.7 1.2A4 4 0 0 1 14.7 7a3.8 3.8 0 0 1 3.8 3.8C18.5 16.2 12 20 12 20Z" />
          <path d="M12 9.5v4.8" />
          <path d="M9.6 11.9h4.8" />
        </svg>
      );
    case "home":
      return (
        <svg {...shared}>
          <path d="m4 11 8-6 8 6" />
          <path d="M6 10.8V19h12v-8.2" />
        </svg>
      );
    case "person":
      return (
        <svg {...shared}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case "mic":
      return (
        <svg {...shared}>
          <rect x="9" y="4" width="6" height="10" rx="3" />
          <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0" />
          <path d="M12 17v3" />
          <path d="M9 20h6" />
        </svg>
      );
    case "spark":
      return (
        <svg {...shared}>
          <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4Z" />
        </svg>
      );
    case "back":
      return (
        <svg {...shared}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      );
    case "check":
      return (
        <svg {...shared}>
          <path d="m5 12 4.2 4.2L19 6.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function AppShell({
  children,
  title,
  subtitle,
  headerIcon,
  backHref,
  label,
  minimalHeader,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
  headerIcon: IconName;
  backHref?: string;
  label?: string;
  minimalHeader?: boolean;
}) {
  return (
    <main className="grid min-h-screen place-items-center p-3">
      <section className={shellClass}>
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--teal),var(--teal-deep))] text-white shadow-[0_10px_24px_rgba(17,79,88,0.18)]"
              aria-hidden="true"
            >
              <Icon name={headerIcon} className="h-5 w-5" />
            </span>
            {minimalHeader ? (
              <span className="sr-only">{`${title} ${subtitle}`}</span>
            ) : (
              <div>
                <p className="m-0 text-base font-extrabold">{title}</p>
                <span className="block text-xs text-[color:var(--muted)]">
                  {subtitle}
                </span>
              </div>
            )}
          </div>
          {backHref ? (
            <Link
              href={backHref}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70"
              aria-label="Go back"
            >
              <Icon name="back" className="h-5 w-5" />
            </Link>
          ) : (
            <span className="inline-flex h-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 px-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[color:var(--teal-deep)]">
              {label ?? "Flow"}
            </span>
          )}
        </header>
        {children}
      </section>
    </main>
  );
}

export function HeroCard({
  badge,
  title,
  subtitle,
  icon,
  children,
  full,
}: {
  badge: string;
  title: string;
  subtitle: string;
  icon?: IconName;
  children?: ReactNode;
  full?: boolean;
}) {
  return (
    <section
      className={`${cardClass} ${
        full ? "flex-1 min-h-0" : ""
      } flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(26,139,125,0.16),transparent_36%),radial-gradient(circle_at_top_left,rgba(239,179,84,0.22),transparent_36%),var(--card)] p-4 text-center`}
    >
      <span className="inline-flex min-h-7 items-center justify-center rounded-full bg-white/70 px-3 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-[color:var(--teal-deep)]">
        {badge}
      </span>
      {icon ? (
        <div className="mt-4 inline-flex h-[min(34vw,8.5rem)] w-[min(34vw,8.5rem)] items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(233,245,242,0.96))] text-[color:var(--teal-deep)] shadow-[0_0_0_0.8rem_rgba(26,139,125,0.07),0_0_0_1.5rem_rgba(26,139,125,0.03)] max-[450px]:h-28 max-[450px]:w-28">
          <Icon name={icon} className="h-8 w-8" />
        </div>
      ) : null}
      <div className="mt-4">
        <h1 className="m-0 font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,8vw,2.4rem)] leading-[0.98] tracking-[-0.05em]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)]">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

export function HeroImageCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className={`${cardClass} flex flex-col p-4 text-left`}>
      <span className="inline-flex min-h-7 w-fit items-center justify-center rounded-full bg-white/70 px-3 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-[color:var(--teal-deep)]">
        Scenario
      </span>
      <div className="relative mt-4 aspect-[1.5] overflow-hidden rounded-3xl shadow-[0_12px_28px_rgba(53,41,25,0.12)]">
        <Image
          src="/classroom-scene.svg"
          alt="Classroom practice scene"
          fill
          priority
          sizes="(max-width: 900px) 80vw, 22rem"
        />
      </div>
      <div className="mt-4">
        <h1 className="m-0 font-[family-name:var(--font-fraunces)] text-2xl leading-[1.02] tracking-[-0.04em]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)]">{subtitle}</p>
      </div>
    </section>
  );
}

export function PhraseAvatar() {
  return (
    <span className="relative h-[2.2rem] w-8" aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-[1.05rem] w-[1.05rem] -translate-x-1/2 rounded-full bg-[#f2c542]" />
      <span className="absolute bottom-0 left-1/2 h-[1.2rem] w-[1.7rem] -translate-x-1/2 rounded-[0.65rem_0.65rem_0.3rem_0.3rem] bg-[#3a8ef6]" />
    </span>
  );
}

export function MiniNav({
  active,
  iconOnly,
}: {
  active: "home" | "talk" | "photo" | "me";
  iconOnly?: boolean;
}) {
  const items = [
    { id: "home", label: "Home", icon: "home" as const, href: "/home" },
    { id: "talk", label: "Talk", icon: "talk" as const, href: "/conversation" },
    { id: "photo", label: "Photo", icon: "photo" as const, href: "/photo" },
    { id: "me", label: "Me", icon: "person" as const, href: "/scenarios" },
  ];

  return (
    <nav className={`${cardClass} mt-auto flex gap-1 rounded-[1.3rem] p-1`}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.id === "home" ? "/" : item.href}
          className={`flex min-h-14 flex-1 flex-col items-center justify-center ${
            iconOnly ? "" : "gap-1"
          } rounded-2xl text-[color:var(--muted)] ${
            active === item.id
              ? "bg-[linear-gradient(180deg,rgba(26,139,125,0.14),rgba(255,255,255,0.86))] text-[color:var(--teal-deep)]"
              : ""
          }`}
          aria-label={item.label}
          aria-current={active === item.id ? "page" : undefined}
        >
          <Icon name={item.icon} className="h-5 w-5" />
          {iconOnly ? <span className="sr-only">{item.label}</span> : <span className="text-xs font-extrabold">{item.label}</span>}
        </Link>
      ))}
    </nav>
  );
}

export function ActionLink({
  href,
  icon,
  label,
  detail,
}: {
  href: string;
  icon: IconName;
  label: string;
  detail: string;
}) {
  return (
    <Link
      href={href}
      className={`${cardClass} grid grid-cols-[auto_1fr] items-center gap-3 p-3`}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,rgba(26,139,125,0.12),rgba(255,255,255,0.9))]">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <strong className="block text-[0.92rem]">{label}</strong>
        <p className="text-[0.78rem] leading-[1.3] text-[color:var(--muted)]">
          {detail}
        </p>
      </div>
    </Link>
  );
}

export function ScenarioLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconName;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex min-h-[4.75rem] flex-col items-center justify-center gap-1 rounded-2xl border border-[color:var(--line)] bg-white/65"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(239,179,84,0.18)]">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-[0.74rem] font-extrabold">{label}</span>
    </Link>
  );
}
