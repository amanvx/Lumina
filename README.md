# ✦ Lumina — Next-Gen Generative AI Studio

<div align="center">

![Lumina Banner](https://img.shields.io/badge/Lumina-AI%20Studio-0f172a?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxNy45M1Y0LjA3YzMuOTMuNDkgNyAzLjg1IDcgNy45M3MtMy4wNyA3LjQ0LTcgNy45M3oiLz48L3N2Zz4=)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)

**A stunning, production-grade landing page for an AI-powered generative studio.**
Built with React 18, Vite 6, and Tailwind CSS v4 — featuring WebGL animated backgrounds, glassmorphism UI, and smooth micro-interactions.

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## ✨ Preview

| Hero Section | Features Bento | Pricing |
|---|---|---|
| WebGL shader bg + floating card | 3×2 glass bento grid | 3-tier with billing toggle |

---

## 🚀 Features

- **WebGL Animated Background** — GLSL fragment shader rendered via Three.js, creating a subtle living color wash
- **Glassmorphism Design System** — Consistent `backdrop-filter` glass panels throughout with depth layering
- **Floating Hero Card** — 3D-perspective card stack with CSS keyframe float animation and skeleton loading states
- **Infinite Marquee** — Smooth CSS-only scrolling brand strip with pause-on-hover
- **Bento Feature Grid** — Asymmetric 3×2 layout with live mini-charts, asset pipeline previews, and toggle controls
- **Orbit Integrations Diagram** — SVG dashed-line orbit with 4 positioned integration cards
- **Testimonial Cards** — Avatar photos, star ratings, and role badges in a 3-column glass grid
- **Pricing with Toggle** — Monthly/Annual billing switch with animated toggle and 20% discount badge
- **Sticky Glassmorphic Header** — Scrolls from translucent → more opaque, with mobile hamburger menu
- **Fully Responsive** — Mobile-first breakpoints across all sections

---

## 🗂️ Project Structure

```
lumina/
├── index.html                        # HTML entry point (Google Fonts loaded here)
├── vite.config.js                    # Vite + React plugin config
├── postcss.config.js                 # PostCSS + Tailwind v4 plugin
├── package.json
└── src/
    ├── main.jsx                      # ReactDOM.createRoot entry
    ├── App.jsx                       # Root — composes all sections
    ├── index.css                     # Tailwind v4 @import, @theme, global animations
    └── components/
        ├── layout/
        │   ├── Header.jsx            # Sticky nav pill with scroll-aware opacity
        │   └── Footer.jsx            # Brand mark + social links
        ├── sections/
        │   ├── HeroSection.jsx       # Headline, CTA buttons, stats row
        │   ├── TrustedBySection.jsx  # Infinite marquee of studio brands
        │   ├── FeaturesSection.jsx   # Bento grid (multi-modal, library, workflows, render farm)
        │   ├── IntegrationsSection.jsx # Orbit diagram + API tag strip
        │   ├── TestimonialsSection.jsx # 3-column review cards
        │   └── PricingSection.jsx    # 3-tier pricing + monthly/annual toggle
        └── ui/
            ├── HeroCard.jsx          # Animated floating card with skeleton states
            └── WebGLBackground.jsx   # Three.js canvas with GLSL shader background
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.x | UI component framework |
| [Vite](https://vitejs.dev) | 6.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | v4.x | Utility-first styling |
| [Three.js](https://threejs.org) | r128 | WebGL background shader |
| [Iconify](https://iconify.design) | 2.0 | Icon system (Solar icon set) |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Display / heading font |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | — | Body / UI font |

---

## ⚡ Getting Started

### Prerequisites

- Node.js **18+**
- npm **9+**

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/lumina-ai-studio.git
cd lumina-ai-studio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

---

## 🎨 Design Decisions

### Why Tailwind v4?
Tailwind v4 uses a CSS-first config (`@theme` block in `index.css`) instead of `tailwind.config.js`. This keeps all design tokens co-located with styles and removes the need for a JS config file.

### Why inline styles for some components?
Certain components (Header, HeroSection, Pricing cards) use inline styles for properties like `backdropFilter`, `WebkitBackdropFilter`, and complex `boxShadow` values. Tailwind's JIT doesn't always purge arbitrary backdrop/shadow values correctly in v4 — inline styles guarantee these critical glassmorphism effects render as intended.

### WebGL Background
The background uses an `OrthographicCamera` with a full-screen `PlaneGeometry` and a custom GLSL fragment shader. It runs at `requestAnimationFrame` and is pinned `position: fixed` behind all content. `pointer-events: none` ensures it never intercepts clicks.

---

## 📐 Customisation

### Changing Colors
Edit the `:root` variables in `src/index.css`:
```css
:root {
  --primary: #0f0f18;
  --text-muted: #6b7280;
  --glass-bg: rgba(255, 255, 255, 0.55);
  --glass-border: rgba(255, 255, 255, 0.7);
}
```

### Changing Fonts
Replace the Google Fonts `<link>` in `index.html` and update `src/index.css`:
```css
@theme {
  --font-display: "Your Display Font", sans-serif;
  --font-body: "Your Body Font", sans-serif;
}
```

### Tweaking the WebGL Shader
Open `src/components/ui/WebGLBackground.jsx` and edit the `fragmentShader` string to change the background's color mathematics and animation speed.

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `localhost:5173` |
| `npm run build` | Build for production into `/dist` |
| `npm run preview` | Serve the `/dist` build locally |

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-section`
3. Commit your changes: `git commit -m 'Add amazing section'`
4. Push to the branch: `git push origin feature/amazing-section`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

- [Solar Icons](https://www.figma.com/community/plugin/1166831539021534215/solar-icons-pack) by 480 Design — the icon set used throughout
- [Three.js](https://threejs.org) for the WebGL rendering
- [Pravatar](https://pravatar.cc) for placeholder avatars

---

<div align="center">
  Made with ♥ · <a href="#">lumina.ai</a>
</div>
