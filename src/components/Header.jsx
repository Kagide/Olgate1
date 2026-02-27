import { useState, useEffect } from "react";
import { Menu, X } from "./Icons";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="container header-inner">
          <a
            href="#home"
            className="header-logo"
            aria-label="Olgate Ltd homepage"
          >
            Ol<span>gate</span> Ltd
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
                {l}
              </a>
            ))}
            <a href="#contact" className="btn btn-outline header-cta">
              Get a Quote
            </a>
          </nav>
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          className="mobile-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <X />
        </button>
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-red"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
