import { Star } from "./Icons";

export default function TestimonialCard({
  initials,
  name,
  role,
  company,
  quote,
}) {
  return (
    <article
      className="testimonial-card"
      aria-label={`Testimonial from ${name}`}
    >
      <div className="testimonial-stars" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} />
        ))}
      </div>
      <blockquote className="testimonial-quote">
        <p>{quote}</p>
      </blockquote>
      <footer className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">
          {initials}
        </div>
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">
            {role} · {company}
          </div>
        </div>
      </footer>
    </article>
  );
}
