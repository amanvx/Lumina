# ✦ Lumina - Next-Gen Generative AI Studio

<div align="center">

![Lumina Banner](https://img.shields.io/badge/Lumina-AI%20Studio-0f172a?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxNy45M1Y0LjA3YzMuOTMuNDkgNyAzLjg1IDcgNy45M3MtMy4wNyA3LjQ0LTcgNy45M3oiLz48L3N2Zz4=)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)

**A stunning, production-grade landing page for an AI-powered generative studio.**
Built with React 18, Vite 5, and Tailwind CSS v3 featuring WebGL animated backgrounds, glassmorphism UI, and smooth micro-interactions.

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## ✨ Preview

| Hero Section | Features Bento | Pricing |
|---|---|---|
| WebGL shader bg + floating card | 3x2 glass bento grid | 3-tier glass cards |

---

## 🚀 Features

- **WebGL Animated Background** - GLSL fragment shader rendered via Three.js for a subtle living color wash
- **Glassmorphism Design System** - Consistent backdrop blur panels with soft depth layering
- **Floating Hero Card** - 3D-perspective card stack with keyframe float animation and skeleton loading states
- **Infinite Marquee** - Smooth CSS-only scrolling brand strip with pause-on-hover behavior
- **Bento Feature Grid** - Asymmetric 3x2 layout with mini charts, pipeline previews, and toggle controls
- **Orbit Integrations Diagram** - Circular integration visualization with positioned cards
- **Testimonial Cards** - Avatar photos, star ratings, and role labels in a 3-column grid
- **Pricing Section** - Three plan tiers for creators, studio teams, and enterprise needs
- **Sticky Glass Header** - Translucent nav pill with mobile hamburger + active section highlighting
- **Fully Responsive** - Mobile-first behavior across all major sections

---

## 🗂️ Project Structure

```text
hello/
├── index.html                          # HTML entry point (Google Fonts loaded here)
├── vite.config.js                      # Vite + React plugin config
├── postcss.config.js                   # PostCSS + Tailwind plugin config
├── tailwind.config.js                  # Tailwind theme/content config
├── package.json
├── style.html                          # Original static source kept for reference
└── src/
		├── main.jsx                        # ReactDOM.createRoot entry
		├── App.jsx                         # Root composition of all sections
		├── index.css                       # Tailwind directives + global styles/animations
		└── components/
				├── layout/
				│   ├── Header.jsx              # Sticky nav with active section tracking
				│   └── Footer.jsx              # Footer with socials
				├── sections/
				│   ├── HeroSection.jsx         # Hero copy, CTAs, floating showcase card
				│   ├── BrandsSection.jsx       # Infinite marquee of creative studios
				│   ├── FeaturesSection.jsx     # Bento-style feature grid
				│   ├── WorkflowSection.jsx     # Orbit-style integrations/workflow diagram
				│   ├── TestimonialsSection.jsx # 3-column testimonial cards
				│   └── PricingSection.jsx      # Three-tier pricing plans
				└── ui/
						└── AnimatedBackground.jsx  # Three.js canvas with GLSL shader
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.x | UI component framework |
| [Vite](https://vitejs.dev) | 5.x | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Utility-first styling |
| [Three.js](https://threejs.org) | 0.165.x | WebGL background shader |
| [Iconify React](https://iconify.design) | 5.x | Icon system (Solar icon set) |
| [Inter](https://fonts.google.com/specimen/Inter) | variable | Body and UI font |

---

## ⚡ Getting Started

### Prerequisites

- Node.js **18+**
- npm **9+**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/lumina-ai-studio.git
cd lumina-ai-studio

# 2. Install dependencies
npm install

# 3. Start development server
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

### Why Tailwind v3?
The project currently uses Tailwind CSS v3 with a standard `tailwind.config.js` setup. This keeps utility generation predictable and easy to extend while preserving fast iteration.

### Why custom CSS + Tailwind together?
Tailwind handles layout and spacing, while custom CSS in `src/index.css` manages advanced effects such as float animations, marquee motion, and fine-grained glassmorphism details.

### WebGL Background
The background uses an `OrthographicCamera` with full-screen `PlaneGeometry` and a custom GLSL fragment shader. It runs with `requestAnimationFrame` and stays fixed behind all content with `pointer-events: none`.

---

## 📐 Customization

### Changing Colors
Edit the `:root` variables in `src/index.css`:

```css
:root {
	--primary: #1a1a24;
	--text-muted: #5a5a6a;
	--btn-bg: rgba(255, 255, 255, 0.7);
	--btn-border: rgba(255, 255, 255, 0.9);
}
```

### Changing Fonts
Replace the Google Fonts `<link>` in `index.html` and update the `font-family` declaration in `src/index.css`.

### Tweaking the WebGL Shader
Open `src/components/ui/AnimatedBackground.jsx` and edit the `fragmentShader` string to change color math and animation speed.

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `localhost:5173` |
| `npm run build` | Build production files into `/dist` |
| `npm run preview` | Serve `/dist` locally for preview |

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. Add a `LICENSE` file to the repository to enable this badge.

---

## 🙏 Acknowledgements

- [Solar Icons](https://www.figma.com/community/plugin/1166831539021534215/solar-icons-pack) by 480 Design
- [Three.js](https://threejs.org) for WebGL rendering
- [Pravatar](https://pravatar.cc) for placeholder avatars

---

<div align="center">
	Made with love · <a href="#">lumina.ai</a>
</div>
