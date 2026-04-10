import { SITE, CODE_EXAMPLE } from "@/lib/constants";
import CodeBlock from "./CodeBlock";
import ScrollReveal from "./ScrollReveal";

export default function QuickStart() {
  return (
    <section id="quickstart" className="py-16 md:py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">
            Quick Start
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-center text-[var(--color-text)]">
            Up and running in minutes
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-10 max-w-3xl mx-auto">
          <div className="space-y-5">
            {/* Step labels */}
            <div className="flex items-center gap-3 ml-1">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold">
                1
              </span>
              <span className="text-sm font-medium text-[var(--color-text)]">
                Install the package
              </span>
            </div>
            <CodeBlock code={SITE.installCmd} lang="bash" title="terminal" />

            <div className="flex items-center gap-3 ml-1 pt-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold">
                2
              </span>
              <span className="text-sm font-medium text-[var(--color-text)]">
                Run your first audit
              </span>
            </div>
            <CodeBlock
              code={CODE_EXAMPLE}
              lang="python"
              title="audit.py"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
