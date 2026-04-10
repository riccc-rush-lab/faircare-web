import ScrollReveal from "./ScrollReveal";

const frameworks = [
  { name: "CHAI RAIC", color: "var(--color-primary)" },
  { name: "TRIPOD+AI", color: "var(--color-success)" },
  { name: "Van Calster et al. 2025", color: "var(--color-secondary)" },
  { name: "WCAG 2.1 AA", color: "var(--color-accent)" },
  { name: "HIPAA-friendly", color: "var(--color-success)" },
];

export default function Frameworks() {
  return (
    <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-[var(--color-text-muted)] mb-6">
            Aligned with established governance frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {frameworks.map((fw) => (
              <span
                key={fw.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text)] border border-[var(--color-border)] bg-white hover:shadow-sm transition-shadow"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: fw.color }}
                />
                {fw.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
