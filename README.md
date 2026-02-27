# Olgate Ltd — Corporate Website

> Production-quality React frontend for Olgate Ltd, Kigali, Rwanda.

## Quick Start

```bash
# 1. Navigate into the project
cd olgate-ltd

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
# → Opens http://localhost:3000
```

## Build for Production

```bash
npm run build
# Output in /build — ready to deploy on Vercel, Netlify, or any static host
```

---

## Project Structure

```
olgate-ltd/
├── public/
│   └── index.html              # HTML shell + Google Fonts preload
│
└── src/
    ├── App.jsx                 # Root: Header + Pages + Footer + WhatsApp
    ├── index.js                # ReactDOM entry point
    │
    ├── pages/
    │   └── Home.jsx            # Composes all page sections in order
    │
    ├── components/
    │   ├── Icons.jsx           # All SVG icons + IconByName resolver
    │   ├── Header.jsx          # Sticky nav (transparent → white on scroll)
    │   ├── Header.module.css
    │   ├── Hero.jsx            # Full-viewport hero with CTAs + stats strip
    │   ├── Hero.module.css
    │   ├── ServiceCard.jsx     # Reusable service card (icon + title + desc)
    │   ├── ServiceCard.module.css
    │   ├── Services.jsx        # 5-card service grid
    │   ├── Services.module.css
    │   ├── WhyChooseUs.jsx     # Split layout: visual panel + feature grid
    │   ├── WhyChooseUs.module.css
    │   ├── StatsBar.jsx        # Full-bleed stats band
    │   ├── StatsBar.module.css
    │   ├── TestimonialCard.jsx # Single testimonial (used by carousel)
    │   ├── TestimonialCard.module.css
    │   ├── TestimonialCarousel.jsx  # Auto-sliding carousel with swipe
    │   ├── TestimonialCarousel.module.css
    │   ├── ContactForm.jsx     # Validated form + success state
    │   ├── ContactForm.module.css
    │   ├── WhatsAppButton.jsx  # Fixed floating WhatsApp CTA
    │   ├── WhatsAppButton.module.css
    │   ├── Footer.jsx          # 4-column footer
    │   └── Footer.module.css
    │
    ├── data/
    │   ├── services.js         # Service card content (edit to update cards)
    │   ├── testimonials.js     # Testimonial content
    │   └── stats.js            # Company stats (projects, clients, years, support)
    │
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver scroll-reveal hook
    │
    └── styles/
        ├── global.css          # Design tokens, resets, utility classes, buttons
        └── variables.css       # Token documentation / theming reference
```

---

## Architecture Notes

### CSS Modules
Each component has a co-located `.module.css` file. Class names are scoped to the component,
preventing style leakage. Global utility classes (`.btn`, `.container`, `.reveal`, `.section-label`)
are defined in `styles/global.css` and used via plain `className` strings.

### Data-Driven Components
Content for Services, Testimonials, and Stats is stored in `src/data/*.js`.
To update copy, icons, or add new entries — edit only the data files.

### Scroll Reveal
The `useReveal` hook attaches an `IntersectionObserver` to all `.reveal` elements.
Classes `.reveal-delay-1` through `.reveal-delay-5` stagger the animations.
Call `useReveal()` at the top of any section component.

### WhatsApp Integration
The floating button and hero CTA both deep-link to `wa.me/250780000000` with a
pre-filled professional message. Update the phone number in:
- `src/components/WhatsAppButton.jsx`
- `src/components/Hero.jsx`

### Accessibility
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<address>`)
- `aria-label` on interactive elements
- `aria-live="polite"` on the carousel
- Skip-to-content link in `App.jsx`
- All decorative elements marked `aria-hidden="true"`

---

## Customisation

| What to change | Where |
|---|---|
| Company name / phone / email | `Footer.jsx`, `ContactForm.jsx`, `Hero.jsx`, `WhatsAppButton.jsx` |
| Services content | `src/data/services.js` |
| Testimonials | `src/data/testimonials.js` |
| Stats numbers | `src/data/stats.js` |
| Brand colours | `src/styles/global.css` `:root` block |
| Fonts | `public/index.html` (Google Fonts link) + `global.css` font-family |