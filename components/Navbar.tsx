"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,11,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,255,148,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono font-bold"
            style={{
              background: "rgba(0,255,148,0.1)",
              border: "1px solid rgba(0,255,148,0.3)",
              color: "#00FF94",
            }}
          >
            FI
          </div>
          <span
            className="font-mono text-sm hidden sm:block"
            style={{ color: "#4A5568" }}
          >
            fabricio.dev
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-underline text-sm font-body transition-colors duration-200"
              style={{ color: "#8892A4" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#E8EAED")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#8892A4")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:fabriciodev26@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-sm font-mono transition-all duration-300"
          style={{
            border: "1px solid rgba(0,255,148,0.4)",
            color: "#00FF94",
            background: "rgba(0,255,148,0.05)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,255,148,0.12)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,148,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,255,148,0.05)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Contrátame
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#00FF94",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 5px)"
                      : i === 1
                      ? "scaleX(0)"
                      : "rotate(-45deg) translate(4px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(8,11,15,0.97)",
            borderBottom: "1px solid rgba(0,255,148,0.1)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm py-2"
              style={{ color: "#8892A4", borderBottom: "1px solid #1E2530" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
