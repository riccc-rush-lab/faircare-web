import { FUNDING } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Funding() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-subtle)] relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="var(--color-primary)" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="var(--color-primary)" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" stroke="var(--color-primary)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">
              Funding &amp; Acknowledgement
            </p>

            <div className="mt-8 p-8 rounded-2xl bg-white border border-[var(--color-border)] relative overflow-hidden">
              {/* Accent top gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-success)]" />

              {/* Institutions row */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6">
                {FUNDING.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="text-sm font-semibold text-[var(--color-text)]"
                  >
                    {inst}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-[var(--color-border)]" />
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] border border-[var(--color-primary)]/10">
                  NIH/NCATS Grant {FUNDING.grant}
                </span>
                <div className="flex-1 h-px bg-[var(--color-border)]" />
              </div>

              {/* Statement */}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed text-center">
                {FUNDING.statement}
              </p>

              {/* Disclaimer */}
              <p className="mt-4 text-xs text-[var(--color-text-muted)]/70 text-center italic">
                {FUNDING.disclaimer}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
