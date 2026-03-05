import useReveal from "../Hooks/useReveal";
import { Award, Users, Clock, Shield, Headphones, CheckCircle } from "./Icons";

const FEATURES = [
  {
    icon: <Award />,
    title: "Trusted Expertise",
    desc: "5+ years of proven delivery across tech and services sectors in East Africa.",
  },
  {
    icon: <Users />,
    title: "Client-Focused Approach",
    desc: "Every engagement begins with deep listening. Your goals define our strategy.",
  },
  {
    icon: <Clock />,
    title: "Timely Delivery",
    desc: "Rigorous project management ensures milestones are hit — every time.",
  },
  {
    icon: <Shield />,
    title: "Quality Assurance",
    desc: "End-to-end QA processes guarantee every output meets international standards.",
  },
  {
    icon: <Headphones />,
    title: "Professional Support",
    desc: "Dedicated account managers and 24/7 technical support for all clients.",
  },
  {
    icon: <CheckCircle />,
    title: "Proven Methodology",
    desc: "Structured frameworks adapted to your industry for predictable outcomes.",
  },
];

export default function WhyChooseUs() {
  useReveal();
  return (
    <section id="about" className="why-section" aria-labelledby="why-title">
      <div className="container">
        <div className="why-inner">
          <div className="why-visual reveal">
            <div className="why-visual-main">
              <div className="why-visual-pattern" aria-hidden="true" />
              <div className="why-visual-text">
                <div className="why-visual-num">120+</div>
                <div className="why-visual-label">Satisfied Clients</div>
              </div>
            </div>
            <div className="why-badge why-badge-tl" aria-hidden="true">
              <Award /> Top-rated in Kigali
            </div>
            <div className="why-badge why-badge-br" aria-hidden="true">
              <CheckCircle /> ISO-aligned Processes
            </div>
          </div>
          <div>
            <div className="reveal">
              <span className="section-label">Why Olgate</span>
              <h2 className="section-title" id="why-title">
                Built on Trust,
                <br />
                Driven by Results
              </h2>
              <p className="section-sub">
                We don't just deliver projects — we build lasting partnerships
                that drive measurable business outcomes.
              </p>
            </div>
            <div className="why-features">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className={`why-feature reveal reveal-delay-${(i % 5) + 1}`}
                >
                  <div className="why-feature-icon" aria-hidden="true">
                    {f.icon}
                  </div>
                  <div>
                    <div className="why-feature-title">{f.title}</div>
                    <div className="why-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
