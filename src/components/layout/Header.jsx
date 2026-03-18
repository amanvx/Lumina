import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Models", href: "#models" },
  { label: "Workflows", href: "#workflows" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#studio");

  useEffect(() => {
    const sections = navItems
      .map((item) => ({ ...item, element: document.querySelector(item.href) }))
      .filter((item) => item.element);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const visibleId = `#${visibleEntries[0].target.id}`;
        setActiveHref(visibleId);
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section.element));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full px-2 py-2 pl-6 flex items-center justify-between transition-all duration-500 hover:bg-white/80 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
          <a href="#studio" className="flex items-center gap-2 group">
            <span className="font-medium text-slate-800 tracking-tight text-sm uppercase hidden sm:block">Lumina</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-all ${
                  activeHref === item.href
                    ? "text-slate-900 bg-white/70"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white uppercase tracking-widest bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
            >
              Start Creating
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-white/60 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <Icon icon={menuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="20" height="20" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveHref(item.href);
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-xs font-medium uppercase tracking-wider rounded-2xl transition-all ${
                    activeHref === item.href
                      ? "text-slate-900 bg-white/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
