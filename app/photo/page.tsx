import Link from "next/link";
import { AppShell, Icon, MiniNav } from "../components/flow-ui";

export default function PhotoPage() {
  return (
    <AppShell
      title="Take photo"
      subtitle="Real place lesson"
      headerIcon="photo"
      backHref="/"
    >
      <section className="rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--card)] p-4 shadow-[0_10px_24px_rgba(53,41,25,0.08)]">
        <div className="relative aspect-[1.15] overflow-hidden rounded-[1.5rem] border border-[rgba(47,43,38,0.08)] bg-[linear-gradient(180deg,rgba(222,240,236,0.95),rgba(248,241,226,0.95))]">
          <div className="absolute inset-0 p-4">
            <span className="inline-flex rounded-full bg-white/82 px-3 py-2 text-xs font-extrabold text-[color:var(--teal-deep)]">
              School office
            </span>
            <span className="absolute inset-[22%] rounded-[1.2rem] border-2 border-dashed border-[rgba(26,139,125,0.45)]" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,rgba(26,139,125,0.12),rgba(255,255,255,0.9))] text-[color:var(--teal-deep)]">
            <Icon name="photo" className="h-6 w-6" />
          </span>
          <div>
            <h1 className="m-0 font-[family-name:var(--font-fraunces)] text-[1.7rem] leading-[1] tracking-[-0.04em]">
              Capture the place.
            </h1>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Turn a real image into phrases and questions.
            </p>
          </div>
        </div>

        <Link
          href="/conversation"
          className="mt-4 inline-flex min-h-[3.35rem] w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--teal),var(--teal-deep))] px-4 font-extrabold text-white shadow-[0_12px_24px_rgba(17,79,88,0.2)]"
        >
          Continue
        </Link>
      </section>

      <MiniNav active="photo" />
    </AppShell>
  );
}
