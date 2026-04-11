import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import CopyButton from "./CopyButton";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      {/* Mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-primary-light)] via-white to-white" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--color-success)] opacity-[0.06] blur-[60px]" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Hollow circle */}
        <div className="float absolute top-24 right-[15%] w-16 h-16 rounded-full border-2 border-[var(--color-primary)] opacity-[0.12]" />
        {/* Filled dot */}
        <div className="float-slow float-delay absolute top-40 right-[28%] w-3 h-3 rounded-full bg-[var(--color-secondary)] opacity-30" />
        {/* Rotated square */}
        <div className="float absolute bottom-32 right-[20%] w-10 h-10 border-2 border-[var(--color-success)] opacity-[0.1] rotate-45" />
        {/* Small cross */}
        <div className="float-slow absolute top-32 right-[40%] text-[var(--color-accent)] opacity-20 text-2xl font-light select-none">+</div>
        {/* Dots cluster */}
        <div className="float-delay float absolute bottom-40 right-[35%] flex gap-1.5 opacity-15">
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-primary)]/20 bg-white/60 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="text-xs font-medium text-[var(--color-text-muted)]">
              Python library &middot; Open source &middot; v{SITE.version}
            </span>
          </div>

          <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight leading-[1.1]">
            <span className="text-[var(--color-text)]">Fairness auditing</span>
            <br />
            <span className="text-[var(--color-text)]">for </span>
            <span className="gradient-text">healthcare AI</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-lg">
            {SITE.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quickstart"
              className="gradient-border inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium text-sm hover:brightness-110 transition-all"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:bg-[var(--color-bg-subtle)] hover:border-[var(--color-text-muted)]/30 transition-all"
            >
              <GitHubIcon size={16} /> View on GitHub
            </a>
          </div>

          {/* Install badge — prominent */}
          <div className="mt-8 inline-flex items-center gap-3 pr-10 rounded-xl bg-[var(--color-code-bg)] text-white font-mono text-sm relative overflow-hidden">
            <span className="px-3 py-2.5 bg-white/10 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
              pip
            </span>
            <span className="py-2.5">{SITE.installCmd}</span>
            <CopyButton text={SITE.installCmd} />
          </div>

          {/* Meta badges */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {[SITE.license, `Python ${SITE.python}`, "HIPAA-friendly"].map(
              (badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-[var(--color-text-muted)] bg-white/70 border border-[var(--color-border)] backdrop-blur-sm"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Wavy section divider */}
      <div className="relative h-16 -mb-1">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z"
            fill="var(--color-bg-subtle)"
          />
        </svg>
      </div>
    </section>
  );
}
