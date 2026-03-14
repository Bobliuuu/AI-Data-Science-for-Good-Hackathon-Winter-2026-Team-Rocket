const primaryActions = [
  { label: "Talk", hint: "Start voice lesson", icon: "talk" },
  { label: "Photo", hint: "Take or upload photo", icon: "photo" },
  { label: "Again", hint: "Review saved lesson", icon: "again" },
] as const;

const scenarios = [
  { label: "Meds", icon: "pharmacy" },
  { label: "School", icon: "school" },
  { label: "Food", icon: "grocery" },
  { label: "Doctor", icon: "clinic" },
] as const;

const navItems = [
  { label: "Home", icon: "home", active: true },
  { label: "Talk", icon: "talk", active: false },
  { label: "Photo", icon: "photo", active: false },
  { label: "Me", icon: "person", active: false },
] as const;

function Icon({ name, className }: { name: string; className?: string }) {
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
    case "pharmacy":
      return (
        <svg {...shared}>
          <path d="M12 4v16" />
          <path d="M4 12h16" />
          <rect x="5" y="5" width="14" height="14" rx="3" />
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
    default:
      return null;
  }
}

function ActionButton({
  label,
  hint,
  icon,
}: {
  label: string;
  hint: string;
  icon: string;
}) {
  return (
    <button className="action-button" type="button" aria-label={hint}>
      <span className="action-icon">
        <Icon name={icon} className="glyph" />
      </span>
      <span>{label}</span>
    </button>
  );
}

function ScenarioButton({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  return (
    <button className="scenario-button" type="button" aria-label={label}>
      <Icon name={icon} className="scenario-glyph" />
      <span>{label}</span>
    </button>
  );
}

function NavButton({
  label,
  icon,
  active,
}: {
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <button
      className={`nav-button${active ? " active" : ""}`}
      type="button"
      aria-label={label}
      aria-current={active ? "page" : undefined}
    >
      <Icon name={icon} className="nav-glyph" />
      <span>{label}</span>
    </button>
  );
}

export default function Home() {
  return (
    <main className="mobile-shell">
      <section className="phone-frame">
        <header className="top-bar">
          <div className="brand">
            <span className="brand-mark">
              <Icon name="talk" className="brand-glyph" />
            </span>
            <div>
              <p>Talkbridge</p>
              <span>Tap icon</span>
            </div>
          </div>
          <button className="icon-circle" type="button" aria-label="Open profile">
            <Icon name="person" className="small-glyph" />
          </button>
        </header>

        <section className="main-card" aria-label="Main lesson action">
          <button className="big-start" type="button" aria-label="Start voice lesson">
            <span className="big-ring">
              <Icon name="mic" className="mic-glyph" />
            </span>
            <span className="big-label">Start</span>
          </button>

          <div className="action-grid" aria-label="Quick actions">
            {primaryActions.map((action) => (
              <ActionButton key={action.label} {...action} />
            ))}
          </div>
        </section>

        <section className="scenario-row" aria-label="Scenario choices">
          {scenarios.map((scenario) => (
            <ScenarioButton key={scenario.label} {...scenario} />
          ))}
        </section>

        <nav className="bottom-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavButton key={item.label} {...item} />
          ))}
        </nav>
      </section>
    </main>
  );
}
