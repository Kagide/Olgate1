import { MapPin, Mail, Phone, Twitter, LinkedIn, Instagram } from "./Icons";

const QUICK_LINKS = ["Home", "Services", "About", "Contact"];
const SERVICE_LINKS = [
  "Software Consultancy",
  "Software Development",
  "BRD Documentation",
  "Hospitality Services",
  "Car Rentals",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              Ol<span>gate</span> Ltd
            </div>
            <p className="footer-desc">
              A multi-service company based in Kigali, Rwanda — delivering
              technology, business, and lifestyle services with uncompromising
              quality.
            </p>
            <div className="footer-social" aria-label="Social media links">
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
          <nav aria-label="Footer quick links">
            <div className="footer-col-title">Quick Links</div>
            {QUICK_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">
                {l}
              </a>
            ))}
          </nav>
          <nav aria-label="Footer services">
            <div className="footer-col-title">Services</div>
            {SERVICE_LINKS.map((s) => (
              <a key={s} href="#services" className="footer-link">
                {s}
              </a>
            ))}
          </nav>
          <address style={{ fontStyle: "normal" }}>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <MapPin />
              <span>KG 240 St, Kigali, Rwanda</span>
            </div>
            <div className="footer-contact-item">
              <Mail />
              <a href="mailto:info@olgate.rw" className="footer-contact-link">
                info@olgate.rw
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone />
              <a href="tel:+250780000000" className="footer-contact-link">
                +250 788740653
              </a>
            </div>
          </address>
        </div>
        <div className="footer-bottom">
          <span>© {year} Olgate Ltd. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
