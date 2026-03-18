"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const traits = [
    { icon: "⚡", label: "Pensamiento analítico" },
    { icon: "🎯", label: "Orientado a resultados" },
    { icon: "🤝", label: "Trabajo en equipo" },
    { icon: "📐", label: "Código limpio" },
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs" style={{ color: "#00FF94" }}>
                01
              </span>
              <div className="h-px w-8" style={{ background: "#00FF94" }} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#4A5568" }}>
                Sobre mí
              </span>
            </div>

            <h2
              className="font-display text-5xl md:text-6xl mb-6"
              style={{ color: "#E8EAED", letterSpacing: "0.02em" }}
            >
              CRAFTING
              <br />
              <span style={{ color: "#00FF94" }}>EXPERIENCES</span>
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: "#6B7280" }}>
              Soy un desarrollador frontend apasionado por construir interfaces
              que no solo se ven bien, sino que <em style={{ color: "#8892A4", fontStyle: "normal" }}>funcionan excepcionalmente</em>.
              Combino diseño, rendimiento y experiencia de usuario en cada línea de código.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              Estudié Ingeniería de Software en la UPC y desde entonces he trabajado
              en proyectos para sectores como odontología y plataformas web complejas,
              desarrollando soluciones con impacto real.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((t, i) => (
                <div
                  key={t.label}
                  className="flex items-center gap-3 px-4 py-3 rounded transition-all duration-300"
                  style={{
                    background: "rgba(0,255,148,0.04)",
                    border: "1px solid #1E2530",
                    transitionDelay: `${i * 0.1}s`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,148,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1E2530";
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{t.icon}</span>
                  <span className="text-sm" style={{ color: "#8892A4" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual element */}
          <div
            className="transition-all duration-700 delay-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
            }}
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-lg p-8"
                style={{
                  background: "#0F1318",
                  border: "1px solid #1E2530",
                }}
              >
                {/* Code snippet visual */}
                <div className="font-mono text-sm leading-8" style={{ color: "#4A5568" }}>
                  <div>
                    <span style={{ color: "#8892A4" }}>const </span>
                    <span style={{ color: "#00FF94" }}>developer</span>
                    <span style={{ color: "#8892A4" }}> = {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "#6B7280" }}>nombre: </span>
                    <span style={{ color: "#E8EAED" }}>'Fabricio'</span><span style={{ color: "#8892A4" }}>,</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "#6B7280" }}>enfoque: </span>
                    <span style={{ color: "#E8EAED" }}>'Frontend + UX'</span><span style={{ color: "#8892A4" }}>,</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "#6B7280" }}>pasión: </span>
                    <span style={{ color: "#E8EAED" }}>'interfaces funcionales'</span><span style={{ color: "#8892A4" }}>,</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "#6B7280" }}>café: </span>
                    <span style={{ color: "#F97316" }}>true</span>
                  </div>
                  <div>
                    <span style={{ color: "#8892A4" }}>{"}"}</span>
                  </div>

                  <div className="mt-4">
                    <span style={{ color: "#8892A4" }}>function </span>
                    <span style={{ color: "#00FF94" }}>build</span>
                    <span style={{ color: "#8892A4" }}>(idea) {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "#8892A4" }}>return </span>
                    <span style={{ color: "#E8EAED" }}>pixel</span>
                    <span style={{ color: "#8892A4" }}>.</span>
                    <span style={{ color: "#00FF94" }}>perfect</span>
                    <span style={{ color: "#8892A4" }}>(idea)</span>
                  </div>
                  <div>
                    <span style={{ color: "#8892A4" }}>{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded font-mono text-xs"
                style={{
                  background: "#00FF94",
                  color: "#080B0F",
                  fontWeight: "600",
                }}
              >
                Lima, PE 🇵🇪
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-4 h-px"
                style={{
                  background: "linear-gradient(90deg, #00FF94, transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
