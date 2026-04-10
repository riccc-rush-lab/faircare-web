import {
  BarChart3,
  GitBranch,
  Users,
  MessageSquareText,
  FileOutput,
  Eye,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={24} />,
  GitBranch: <GitBranch size={24} />,
  Users: <Users size={24} />,
  MessageSquareText: <MessageSquareText size={24} />,
  FileOutput: <FileOutput size={24} />,
  Eye: <Eye size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  LayoutDashboard: <LayoutDashboard size={24} />,
};

const accents = [
  { color: "var(--color-primary)", bg: "var(--color-primary-light)" },
  { color: "var(--color-success)", bg: "#E8F5E9" },
  { color: "var(--color-secondary)", bg: "#FFF8E1" },
  { color: "var(--color-accent)", bg: "#E1F5FE" },
  { color: "var(--color-error)", bg: "#FBE9E7" },
  { color: "var(--color-primary)", bg: "var(--color-primary-light)" },
  { color: "var(--color-success)", bg: "#E8F5E9" },
  { color: "var(--color-accent)", bg: "#E1F5FE" },
];

// Bento layout: cards 0 and 2 span 2 columns
const spans = [
  "sm:col-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
  "",
  "",
  "sm:col-span-2",
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">
            Capabilities
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-center text-[var(--color-text)]">
            Fairness auditing from metrics
            <br className="hidden sm:block" />{" "}
            through governance sign-off
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-14">
          <div className="grid gap-4 sm:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`card-hover p-6 rounded-2xl bg-white border border-[var(--color-border)] relative overflow-hidden group ${spans[i] ?? ""}`}
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: accents[i].color }}
                />

                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{ background: accents[i].bg, color: accents[i].color }}
                >
                  {iconMap[feature.icon]}
                </div>

                <h3 className="mt-4 font-semibold text-[var(--color-text)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
