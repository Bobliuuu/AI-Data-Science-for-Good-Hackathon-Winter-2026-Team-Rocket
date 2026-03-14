import Image from "next/image";
import Link from "next/link";
import { savedScenarios } from "../components/flow-data";
import { AppShell, Icon, MiniNav } from "../components/flow-ui";

export default function ScenariosPage() {
  return (
    <AppShell
      title="Past scenarios"
      subtitle="Image gallery"
      headerIcon="again"
      backHref="/"
    >
      <section className="rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--card)] p-4 shadow-[0_10px_24px_rgba(53,41,25,0.08)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="m-0 font-[family-name:var(--font-fraunces)] text-[1.7rem] leading-[1] tracking-[-0.04em]">
              Scenario gallery
            </h1>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Tap an image to reopen it.
            </p>
          </div>
          <span className="inline-flex min-h-7 min-w-7 items-center justify-center rounded-full bg-[rgba(239,179,84,0.2)] px-2 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-[color:var(--teal-deep)]">
            {savedScenarios.length}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {savedScenarios.map((scenario) => (
            <Link
              key={scenario.label}
              href="/conversation"
              className="group relative aspect-[0.95] overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-white/70"
            >
              <Image
                src={scenario.image}
                alt={scenario.label}
                fill
                sizes="(max-width: 480px) 42vw, 12rem"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(25,48,52,0),rgba(25,48,52,0.58))] p-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/18 backdrop-blur-sm">
                    <Icon name={scenario.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold">{scenario.label}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <MiniNav active="me" />
    </AppShell>
  );
}
