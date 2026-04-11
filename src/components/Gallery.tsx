"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const tabs = [
  {
    id: "governance",
    label: "Governance Report",
    subtitle: "3–5 page summary for committees",
    screens: [
      {
        src: "/screenshots/gov_discrimination_gauge.png",
        caption: "Executive summary — traffic-light deployment status at a glance",
      },
      {
        src: "/screenshots/gov_4panel_metrics.png",
        caption: "Performance metrics with plain-language explanations for non-technical reviewers",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical Report",
    subtitle: "Full validation suite for data scientists",
    screens: [
      {
        src: "/screenshots/ds_performance_charts.png",
        caption: "AUROC, calibration curves, and full discrimination analysis with bootstrap CIs",
      },
      {
        src: "/screenshots/gov_subgroup_fairness.png",
        caption: "Subgroup fairness analysis — equalized odds across demographic groups",
      },
    ],
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("governance");
  const tab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
              See It In Action
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
              One run. Two audiences.
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              The same audit produces a full technical report and a governance
              summary — each tailored to its audience.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-xl border border-[var(--color-border)] bg-white p-1 gap-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === t.id
                      ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-success)] text-white shadow-sm"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {t.label}
                  <span
                    className={`ml-2 text-xs font-normal hidden sm:inline ${
                      activeTab === t.id ? "text-white/70" : "text-[var(--color-text-muted)]/60"
                    }`}
                  >
                    {t.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div className="grid md:grid-cols-2 gap-5">
            {tab.screens.map((screen, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-[var(--color-text-muted)]/50 font-mono">
                    faircare — {activeTab === "governance" ? "governance" : "data_scientist"}_report.html
                  </span>
                </div>
                <div className="relative w-full aspect-[14/9] bg-white">
                  <Image
                    src={screen.src}
                    alt={screen.caption}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="px-4 py-3 border-t border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {screen.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]/60">
            Generated from synthetic ICU data using{" "}
            <code className="font-mono">pip install faircare</code>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
