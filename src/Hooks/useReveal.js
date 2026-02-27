import { useEffect } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to all `.reveal` elements
 * and adds `.visible` when they enter the viewport.
 * Call this hook at the top of any section component.
 */
export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
