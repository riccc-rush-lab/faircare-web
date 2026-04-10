import { SITE } from "@/lib/constants";

const links = [
  { label: "GitHub", href: SITE.github },
  { label: "PyPI", href: SITE.pypi },
  { label: "Issues", href: `${SITE.github}/issues` },
  { label: "Contributing", href: `${SITE.github}/blob/main/CONTRIBUTING.md` },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-success)] to-[var(--color-accent)]" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-3">
            <p className="text-lg font-bold tracking-tight">
              <span className="text-[var(--color-primary)]">Fair</span>
              <span className="text-[var(--color-text)]">Care</span>
              <span className="text-[var(--color-text)]">AI</span>
            </p>
            <p className="text-sm text-[var(--color-text-muted)] max-w-xs leading-relaxed">
              Package <span className="font-semibold text-[var(--color-text)]">suggests</span>, humans{" "}
              <span className="font-semibold text-[var(--color-text)]">decide</span>.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              {SITE.license} &middot; v{SITE.version}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <details className="text-xs text-[var(--color-text-muted)] group">
            <summary className="cursor-pointer hover:text-[var(--color-primary)] transition-colors select-none">
              Cite FairCareAI
            </summary>
            <pre className="mt-3 p-4 bg-[var(--color-bg-subtle)] rounded-xl overflow-x-auto font-mono text-xs leading-relaxed border border-[var(--color-border)]">
{`@software{faircareai,
  title = {FairCareAI: Healthcare AI Fairness Auditing},
  version = {${SITE.version}},
  license = {${SITE.license}},
  url = {${SITE.github}}
}`}
            </pre>
          </details>
        </div>
      </div>
    </footer>
  );
}
