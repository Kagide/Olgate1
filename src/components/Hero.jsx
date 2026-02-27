import { WhatsApp } from "./Icons";
import { STATS } from "../data/stats";

const WA =
  "https://wa.me/250780000000?text=Hello%20Olgate%20Ltd%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Kigali, Rwanda · Est. 2019</div>
          <h1 className="hero-title">
            Empowering Businesses Through
            <br />
            <em>Technology</em> &amp; Professional Services
          </h1>
          <p className="hero-sub">
            Olgate Ltd delivers end-to-end software consultancy, custom
            development, business analysis, hospitality management, and premium
            car rental services — all under one trusted roof.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-red">
              Contact Us
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-wa-btn"
              aria-label="Chat on WhatsApp"
            >
              <WhatsApp /> Chat on WhatsApp
            </a>
          </div>
          <div className="hero-stats" aria-label="Company highlights">
            {STATS.map(({ id, num, label }) => (
              <div key={id}>
                <div className="hero-stat-num">{num}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
