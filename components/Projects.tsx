"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Click & Play",
    description:
      "Agencia creativa 360° para campañas de marketing digital, gestión de redes y diseño web.",
    href: "https://cpmarketing-nine.vercel.app/",
    tags: ["Next.js", "Landing Page", "Marketing"],
    color: "#F97316",
  },
  {
    name: "InSalud El Salvador",
    description:
      "Plataforma médica de medicina regenerativa con terapia de ondas de choque, +125,000 tratamientos realizados.",
    href: "https://www.insalud.sv/",
    tags: ["Next.js", "SEO", "Salud"],
    color: "#00FF94",
  },
  {
    name: "SyfCode",
    description:
      "Sitio de agencia web propia: landings, sitios corporativos y e-commerce enfocados en conversión.",
    href: "https://syfcode.com/",
    tags: ["Agencia", "Next.js", "UI/UX"],
    color: "#A78BFA",
  },
  {
    name: "Grupo Vemper",
    description:
      "Soluciones financieras e inmobiliarias con simulador de préstamos en tiempo real.",
    href: "https://grupovemper.com/",
    tags: ["React", "Fintech", "Calculadora"],
    color: "#007bff",
  },
  {
    name: "Bienestar Comunidad",
    description:
      "Plataforma informativa de bienestar comunitario, con foco en experiencia y accesibilidad.",
    href: "https://bienestar-comunidad-mocha.vercel.app/",
    tags: ["React", "Accesibilidad", "Responsive"],
    color: "#00C97A",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs" style={{ color: "#00FF94" }}>04</span>
            <div className="h-px w-8" style={{ background: "#00FF94" }} />
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#4A5568" }}>
              Proyectos
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
            PROYECTOS
            <br />
            <span style={{ color: "#00FF94" }}>REALIZADOS</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg p-6 card-hover transition-all duration-700 flex flex-col"
              style={{
                background: "#0F1318",
                border: "1px solid #1E2530",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.color}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1E2530";
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 font-mono text-sm font-semibold"
                  style={{
                    background: `${p.color}1A`,
                    border: `1px solid ${p.color}40`,
                    color: p.color,
                  }}
                >
                  {p.name.charAt(0)}
                </div>
                <span
                  className="font-mono text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#2D3748" }}
                >
                  ↗
                </span>
              </div>

              <h3 className="font-mono text-base font-medium mb-2" style={{ color: "#E8EAED" }}>
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#8892A4" }}>
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded font-mono text-xs"
                    style={{
                      background: "#161B22",
                      border: "1px solid #1E2530",
                      color: "#6B7280",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
