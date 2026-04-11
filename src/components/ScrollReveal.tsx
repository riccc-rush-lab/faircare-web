"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger) {
            // Animate direct children individually with CSS stagger delays
            Array.from(el.children).forEach((child) =>
              child.classList.add("visible")
            );
          } else {
            el.classList.add("visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      // When stagger: wrapper is the layout container, children carry fade-up
      // When not stagger: wrapper itself carries fade-up
      className={`${stagger ? "stagger" : "fade-up"} ${className}`}
    >
      {children}
    </div>
  );
}
