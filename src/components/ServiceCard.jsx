import { IconByName } from "./Icons";

export default function ServiceCard({
  iconName,
  title,
  description,
  delay = 0,
}) {
  return (
    <article
      className={`service-card reveal reveal-delay-${delay}`}
      aria-label={title}
    >
      <div className="service-icon" aria-hidden="true">
        <IconByName name={iconName} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </article>
  );
}
