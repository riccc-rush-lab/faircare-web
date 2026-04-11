import { AUDIENCES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const accents = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-success)",
  "var(--color-accent)",
  "var(--color-error)",
];

export default function Audiences() {
  return (
    <section id="audiences" className="py-16 md:py-24 bg-[var(--color-bg-subtle)] relative">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">
            Who It&apos;s For
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-center text-[var(--color-text)]">
            Built for healthcare AI teams
          </h2>
          <p className="mt-3 text-center text-[var(--color-text-muted)] max-w-md mx-auto">
            From clinical model development through governance sign-off.
          </p>
        </ScrollReveal>

        {/*
          stagger wrapper IS the grid — cards are direct children so CSS delays apply.
          6-col base: first 3 cards each span 2, last 2 cards centered via col-start.
        */}
        <ScrollReveal
          stagger
          className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
        >
          {AUDIENCES.map((audience, i) => (
            <div
              key={audience.title}
              className={`fade-up card-hover relative p-6 rounded-2xl bg-white border border-[var(--color-border)] overflow-hidden ${
                i < 3 ? "lg:col-span-2" : ""
              } ${i === 3 ? "lg:col-span-2 lg:col-start-2" : ""} ${
                i === 4 ? "lg:col-span-2 lg:col-start-4" : ""
              }`}
            >
              {/* Colored left accent bar */}
              <div
                className="absolute top-4 bottom-4 left-0 w-1 rounded-r-full"
                style={{ background: accents[i] }}
              />

              {/* Number badge */}
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold mb-3"
                style={{
                  background: accents[i],
                  color: "white",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-semibold text-[var(--color-text)]">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
