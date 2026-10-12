"use client";

import { useEffect, useRef, useState } from "react";

type Tok = [string, string];

const C = {
  kw: "#A0AABA",
  key: "#8E98A9",
  str: "#E8EAED",
  acc: "#00FF94",
  num: "#F97316",
  typ: "#4DA3FF",
  cm: "#3F4A5A",
};

const codeLines: { indent: number; tokens: Tok[] }[] = [
  { indent: 0, tokens: [["fabricio", C.acc], ["@lima ", C.kw], ["~ ", C.typ], ["$ ", C.kw], ["git log --oneline --career", C.str]] },
  { indent: 0, tokens: [["a1f9c2e ", C.num], ["(HEAD) ", C.typ], ["Insalud", C.acc], [" · Feb 2026 → hoy", C.kw]] },
  { indent: 0, tokens: [["        plataformas, e-commerce, automatización y SEO", C.key]] },
  { indent: 0, tokens: [["7b3d4e1 ", C.num], ["Maxillaris", C.acc], [" · Feb → Nov 2025", C.kw]] },
  { indent: 0, tokens: [["        interfaces React/Angular y microservicios NestJS", C.key]] },
  { indent: 0, tokens: [["c04e8a9 ", C.num], ["EvoxLab", C.acc], [" · Sep 2024 → Ene 2025", C.kw]] },
  { indent: 0, tokens: [["        apps Laravel + React con Inertia.js", C.key]] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [["fabricio", C.acc], ["@lima ", C.kw], ["~ ", C.typ], ["$ ", C.kw], ["whoami", C.str]] },
  { indent: 0, tokens: [["Ingeniería de Software · UPC", C.key]] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [["fabricio", C.acc], ["@lima ", C.kw], ["~ ", C.typ], ["$ ", C.kw], ["stack --now", C.str]] },
  { indent: 0, tokens: [["Next.js · NestJS · Prisma · PostgreSQL · n8n", C.key]] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [["fabricio", C.acc], ["@lima ", C.kw], ["~ ", C.typ], ["$ ", C.kw]] },
];

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
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#7A8599" }}>
                Sobre mí
              </span>
            </div>

            <h2
              data-parallax="0.05"
              className="font-display text-5xl md:text-6xl mb-6"
              style={{ color: "#E8EAED", letterSpacing: "0.02em" }}
            >
              CRAFTING
              <br />
              <span style={{ color: "#00FF94" }}>EXPERIENCES</span>
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: "#8E98A9" }}>
              Soy desarrollador frontend con mentalidad full-stack: construyo interfaces
              que no solo se ven bien, sino que <em style={{ color: "#A0AABA", fontStyle: "normal" }}>funcionan excepcionalmente</em>,
              y el backend, las integraciones y las automatizaciones que las sostienen.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#8E98A9" }}>
              Estudié Ingeniería de Software en la UPC. Hoy, en Insalud, desarrollo
              plataformas web, e-commerce y herramientas internas, automatizo procesos
              con n8n e IA y optimizo SEO y Core Web Vitals. Antes pasé por Maxillaris
              y EvoxLab, siempre con foco en soluciones de impacto real.
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
                  <span className="text-sm" style={{ color: "#A0AABA" }}>{t.label}</span>
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
            <div className="relative" data-parallax="-0.06">
              {/* Main card — editor */}
              <style>{`
                @keyframes caret-blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
                .caret-blink { animation: caret-blink 1.1s steps(1) infinite; }
                @media (prefers-reduced-motion: reduce) { .caret-blink { animation: none; } }
              `}</style>
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  background: "#0F1318",
                  border: "1px solid #1E2530",
                  boxShadow: "0 24px 60px -20px rgba(0,255,148,0.12)",
                }}
              >
                {/* Window bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ background: "#0B0F14", borderBottom: "1px solid #1E2530" }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                  <span className="ml-3 font-mono text-xs" style={{ color: "#7A8599" }}>
                    fabricio — zsh
                  </span>
                </div>

                {/* Code */}
                <div className="px-5 py-6 font-mono text-[13px] md:text-sm leading-7 overflow-x-auto" aria-hidden="true">
                  {codeLines.map((line, i) => (
                    <div
                      key={i}
                      className="flex whitespace-pre"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(6px)",
                        transition: "opacity 0.4s ease, transform 0.4s ease",
                        transitionDelay: `${0.4 + i * 0.06}s`,
                      }}
                    >
                      <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                        {line.tokens.length === 0
                          ? " "
                          : line.tokens.map(([text, color], j) => (
                              <span key={j} style={{ color }}>{text}</span>
                            ))}
                        {i === codeLines.length - 1 && (
                          <span
                            className="caret-blink inline-block align-middle ml-1"
                            style={{ width: "8px", height: "16px", background: C.acc }}
                          />
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-4 py-2 font-mono text-[11px]"
                  style={{ background: "#0B0F14", borderTop: "1px solid #1E2530", color: "#7A8599" }}
                >
                  <span style={{ color: C.acc }}>● online</span>
                  <span>UTF-8 · Lima, PE</span>
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
