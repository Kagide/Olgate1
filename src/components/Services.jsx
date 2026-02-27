import useReveal from "../hooks/useReveal";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../data/services";

export default function Services() {
  useReveal();
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title" id="services-title">
            Five Disciplines,
            <br />
            One Trusted Partner
          </h2>
          <p className="section-sub">
            From digital transformation to physical logistics, Olgate brings
            enterprise-grade expertise to every engagement.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              iconName={s.iconName}
              title={s.title}
              description={s.description}
              delay={(i % 5) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
