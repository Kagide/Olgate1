import { useState, useEffect, useRef, useCallback } from "react";
import useReveal from "../hooks/useReveal";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "./Icons";
import { TESTIMONIALS } from "../data/testimonials";

export default function TestimonialCarousel() {
  useReveal();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const count = TESTIMONIALS.length;

  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);
  const prev = useCallback(
    () => setActive((p) => (p - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title" id="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="section-sub">
            Real feedback from real businesses — across every service we offer.
          </p>
        </div>
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (dx < -40) next();
            if (dx > 40) prev();
            touchStartX.current = null;
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          <TestimonialCard {...TESTIMONIALS[active]} />
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <div
              className="carousel-dots"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === active ? " active" : ""}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1} of ${count}`}
                />
              ))}
            </div>
            <button
              className="carousel-btn"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
