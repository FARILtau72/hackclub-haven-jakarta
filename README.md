# 🍂 Hack Club Haven Jakarta — Official Event Website

[![Hack Club](https://img.shields.io/badge/Hack_Club-Haven-ec3750?style=flat&logo=hackclub)](https://hackclub.com)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen)](https://github.com)
[![Architecture](https://img.shields.io/badge/Architecture-Modular_HTML5_%2B_CSS3-orange)](./css)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-blue)](./index.html)

A cozy, autumn-themed landing page and interactive event guide for **Hack Club Haven Jakarta** — a 501(c)(3) weekend game jam organized by teenagers, for teenagers, taking place on **November 14–15, 2026** in Jakarta.

---

## 🏗️ Project Architecture & Engineering Highlights

This codebase was engineered with strict frontend software engineering standards in mind:

- **Zero-Dependency Runtime:** Built using pure **HTML5**, **CSS3**, and **Vanilla ES6 JavaScript**. No npm bloat, zero build steps required, and instant sub-second load times.
- **100% Vector HTML/CSS Components:** Sections like **Supporters** and **FAQ** are built with semantic HTML, CSS styling, and SVG assets instead of static raster images, ensuring crisp rendering on 4K/Retina displays, real selectable text, and SEO discoverability.
- **Modular CSS Structure:** Separated into single-responsibility stylesheets (each strictly adhering to a `< 200` line threshold for high maintainability and readability).
- **Accessible & Responsive:** Implements ARIA states (`aria-expanded`, `aria-modal`), keyboard navigation (`Escape` key modal dismiss, focus management), and fluid responsive typography using `clamp()`.
- **Seamless Meadow Palette:** Strict color harmony with continuous background blending on `#b8c220` without unwanted horizontal seam artifacts.

---

## 📁 Repository Structure

```text
hackclubwebsite/
├── assets/                       # Production visual assets (optimized SVG & PNG)
│   ├── cartoon_carrot.svg        # Reusable vector carrot tops for FAQ accordion
│   ├── animalcuteHQ.png          # Mascot hedgehog illustration
│   ├── animalkumpul.png          # Storybook animal picnic gathering
│   ├── roadvillage_exact.png     # Adventure path canvas
│   ├── logo.png                  # Hack Club Haven official emblem
│   └── ...                       # Event thumbnails and decorative elements
├── css/                          # Modular component stylesheets (< 200 lines each)
│   ├── base.css                  # CSS custom properties (variables), reset, typography
│   ├── nav.css                   # Glassmorphic top navigation & mobile drawer
│   ├── hero.css                  # Hero banner, animated mascot, and signup pill
│   ├── meadow.css                # Adventure path section & interactive cards
│   ├── steps.css                 # 4-step organizer roadmap grid
│   ├── picnic.css                # Past events showcase & video preview cards
│   ├── schedule.css              # Weekend timeline & daily tab switcher
│   ├── supporters.css            # 3-tier dirt terraces & HCB sponsor stamps
│   ├── faq.css                   # Carrot patch garden beds & accordion drawers
│   ├── footer.css                # Storybook footer layout & grass trim
│   └── modal.css                 # Accessible lead registration modal dialog
├── js/                           # Modular ES6 interaction scripts
│   ├── nav.js                    # Mobile drawer toggle & hamburger interaction
│   ├── schedule.js               # Day 1 & Day 2 schedule data and tab switcher
│   ├── faq.js                    # Accordion toggle logic with outside-click closing
│   ├── modal.js                  # Accessible modal controller & form validation
│   └── main.js                   # Application bootstrapper & event listeners
├── .gitignore                    # Production git ignore configuration
├── index.html                    # Semantic HTML5 entry document (full English)
├── styles.css                    # Unified master stylesheet importer
└── README.md                     # Technical documentation & project overview
```

---

## 🚀 Getting Started

No build tools or package managers are required. You can serve the project using any static web server:

### Option 1: Python Built-in Server (Recommended)
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Option 2: Node.js `npx serve`
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click on `index.html` and choose **"Open with Live Server"**.

---

## 🎨 Design System & Color Palette

| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| `--c-meadow-green` | `#b8c220` | Base background color across all meadow sections |
| `--c-dirt-terrace` | `#e29b55` | Warm organic dirt terrace color for Supporters |
| `--c-soil-dark` | `#632314` | Deep garden soil background for FAQ plots |
| `--c-orange-autumn` | `#ea580c` | Accent orange for titles, chevrons, and buttons |
| `--c-hcb-crimson` | `#ec3750` | Hack Club Bank brand badge color |
| `--c-cream-card` | `#fffdf2` | Storybook paper cards and accordion answers |

---

## 🧪 Code Quality & Constraint Verification

- **CSS Line Limits:** All stylesheets in `css/` are strictly verified to remain under 200 lines:
  - `base.css`: 112 lines
  - `nav.css`: 162 lines
  - `hero.css`: 189 lines
  - `meadow.css`: 167 lines
  - `steps.css`: 120 lines
  - `picnic.css`: 176 lines
  - `schedule.css`: 185 lines
  - `supporters.css`: 176 lines
  - `faq.css`: 197 lines
  - `footer.css`: 150 lines
  - `modal.css`: 158 lines
- **Asset Integrity:** 100% of referenced image and SVG files are verified and present in `assets/`.
- **Internationalization:** 100% full English copy across all headings, body text, form labels, and interactive notifications.

---

## 📜 License & Acknowledgments

- Organized under the non-profit umbrella of [Hack Club](https://hackclub.com) (501(c)(3)).
- Dedicated to young makers, artists, and hackers creating their first video games!
