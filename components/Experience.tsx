"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Insalud",
    role: "Desarrollador Frontend",
    period: "Feb 2026 – Actualmente",
    location: "Lima, Perú",
    type: "Tiempo completo",
    color: "#007bff",// azul
    highlights: [
      "Optimicé el rendimiento SEO técnico, logrando una mejora significativa en el posicionamiento orgánico.",
      "Realicé análisis detallados de métricas web para alinear las estrategias de marketing con el desarrollo técnico.",
      "Implementé mejoras de velocidad y Core Web Vitals, maximizando la retención y conversión de usuarios.",
      "Colaboré en la integración de herramientas de análisis para optimizar el rendimiento de campañas digitales.",
    ],
    tech: ["Next.js", "TypeScript", "SEO Specialist", "Google Analytics", "Search Console"],
  },
  {
    company: "Maxillaris",
    role: "Desarrollador Frontend",
    period: "Feb 2025 – Nov 2025",
    location: "Lima, Perú",
    type: "Tiempo completo",
    color: "#00FF94",
    highlights: [
      "Implementé interfaces modernas para plataformas de un centro odontológico especializado.",
      "Desarrollé con React + Vite, Next.js y Angular para experiencias multi-dispositivo.",
      "Colaboré en arquitecturas de microservicios con NestJS.",
      "Optimicé consultas PostgreSQL, mejorando la visualización de datos clínicos.",
    ],
    tech: ["React", "Vite", "Next.js", "Angular", "NestJS", "PostgreSQL"],
  },
  {
    company: "EvoxLab",
    role: "Desarrollador Web",
    period: "Sep 2024 – Ene 2025",
    location: "Lima, Perú",
    type: "Tiempo completo",
    color: "#F97316",
    highlights: [
      "Desarrollé plataformas web personalizadas: desde sitios informativos hasta sistemas complejos.",
      "Implementé soluciones con Laravel, PHP, HTML, CSS y JavaScript.",
      "Integré React mediante Inertia.js, mejorando la fluidez en apps Laravel.",
    ],
    tech: ["Laravel", "PHP", "Inertia.js", "React", "JavaScript", "CSS"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = experiences[active];

  return (
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs" style={{ color: "#00FF94" }}>02</span>
            <div className="h-px w-8" style={{ background: "#00FF94" }} />
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#4A5568" }}>
              Experiencia
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
            DONDE HE
            <br />
            <span style={{ color: "#00FF94" }}>TRABAJADO</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Company selector */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: "0.2s",
            }}
          >
            {experiences.map((e, i) => (
              <button
                key={e.company}
                className="w-full text-left p-4 rounded mb-3 transition-all duration-300 flex items-start gap-4"
                style={{
                  background: active === i ? "rgba(0,255,148,0.06)" : "transparent",
                  border: `1px solid ${active === i ? "rgba(0,255,148,0.3)" : "#1E2530"}`,
                }}
                onClick={() => setActive(i)}
              >
                <div
                  className="w-1 h-full rounded-full flex-shrink-0 mt-1"
                  style={{
                    background: active === i ? e.color : "#1E2530",
                    minHeight: "40px",
                    transition: "background 0.3s",
                  }}
                />
                <div>
                  <div
                    className="font-mono text-sm font-medium mb-0.5"
                    style={{ color: active === i ? "#E8EAED" : "#8892A4" }}
                  >
                    {e.company}
                  </div>
                  <div className="font-body text-xs" style={{ color: "#4A5568" }}>
                    {e.period}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Experience detail */}
          <div
            className="md:col-span-2 transition-all duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transitionDelay: "0.3s",
            }}
          >
            <div
              className="rounded-lg p-8 h-full"
              style={{
                background: "#0F1318",
                border: "1px solid #1E2530",
              }}
            >
              {/* Role header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3
                    className="font-display text-3xl mb-1"
                    style={{ color: "#E8EAED", letterSpacing: "0.02em" }}
                  >
                    {exp.role.toUpperCase()}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm" style={{ color: exp.color }}>
                      @ {exp.company}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "#4A5568" }}>
                      {exp.location}
                    </span>
                  </div>
                </div>
                <span
                  className="px-3 py-1.5 rounded font-mono text-xs flex-shrink-0"
                  style={{
                    background: "rgba(0,255,148,0.08)",
                    border: "1px solid rgba(0,255,148,0.2)",
                    color: "#00FF94",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: "#1E2530" }} />

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#8892A4" }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: exp.color }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded font-mono text-xs transition-all duration-200"
                    style={{
                      background: "#161B22",
                      border: "1px solid #1E2530",
                      color: "#8892A4",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,255,148,0.4)";
                      e.currentTarget.style.color = "#00FF94";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1E2530";
                      e.currentTarget.style.color = "#8892A4";
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
