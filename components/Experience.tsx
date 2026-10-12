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
      "Construí una plataforma interna de producción de contenido audiovisual con NestJS, Prisma y PostgreSQL (JWT, roles, Swagger, tests) y un frontend en React + Vite, integrada con la Meta Graph API para publicar y medir anuncios; desplegada en AWS con S3 y Sentry.",
      "Desarrollé una tienda online en Next.js con NextAuth, Prisma y Sanity, con pagos Culqi (tarjeta y Yape), reembolsos y webhooks, además de un portal de pacientes en React con TanStack Query y Zustand.",
      "Implementé un sitio multidominio por país en Next.js con Sanity como CMS headless, y landings de campañas con API Routes que guardan leads en Google Sheets, GTM y Metricool.",
      "Automaticé procesos con n8n: generación de blog con IA (Gemini/OpenAI) hacia borradores en Sanity, y un agente que analiza sentimiento y calidad de atención con Woztell, Supabase y GPT, con alertas por WhatsApp y correo.",
      "Optimicé SEO técnico y Core Web Vitals, y migré proyectos de Vite a Next.js App Router para mejorar indexación y tiempos de carga.",
    ],
    tech: ["Next.js", "NestJS", "React", "TypeScript", "Prisma", "PostgreSQL", "Sanity", "n8n", "Supabase", "AWS", "Docker", "Meta Graph API", "Culqi", "Tailwind CSS", "GTM", "SEO"],
  },
  {
    company: "Maxillaris",
    role: "Desarrollador Frontend",
    period: "Feb 2025 – Nov 2025",
    location: "Lima, Perú",
    type: "Tiempo completo",
    color: "#00FF94",
    highlights: [
      "Desarrollé las interfaces de las plataformas de un centro odontológico especializado, usadas por personal clínico y pacientes, trabajando con React + Vite, Next.js y Angular según el módulo.",
      "Diseñé un frontend modular con componentes reutilizables, formularios tipados con validación y manejo centralizado de estado, reduciendo código duplicado y acelerando la entrega de nuevas funcionalidades.",
      "Integré APIs REST de una arquitectura de microservicios en NestJS: autenticación con tokens, manejo de estados de carga y error, y definición de contratos de datos junto al equipo backend.",
      "Optimicé consultas SQL en PostgreSQL con índices, joins y paginación, acelerando la visualización de historiales y datos clínicos con grandes volúmenes de registros.",
      "Implementé vistas responsivas para móvil, tablet y escritorio, y flujos de gestión de pacientes y citas, cuidando rendimiento y accesibilidad.",
      "Trabajé en equipo con Git (ramas, pull requests y code review), aplicando buenas prácticas de calidad y consistencia de código.",
    ],
    tech: ["React", "Vite", "Next.js", "Angular", "TypeScript", "NestJS", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    company: "EvoxLab",
    role: "Desarrollador Web",
    period: "Sep 2024 – Ene 2025",
    location: "Lima, Perú",
    type: "Tiempo completo",
    color: "#F97316",
    highlights: [
      "Desarrollé plataformas web a medida para distintos clientes, desde sitios informativos hasta sistemas de gestión con lógica de negocio compleja, sobre Laravel y PHP con arquitectura MVC.",
      "Modelé bases de datos relacionales con migraciones, seeders y Eloquent ORM (relaciones, scopes y eager loading para evitar consultas N+1), y construí CRUDs completos con filtros, búsqueda y paginación.",
      "Implementé autenticación y autorización por roles con middlewares y policies, y paneles administrativos para que cada cliente gestionara su propio contenido.",
      "Integré React mediante Inertia.js para lograr navegación tipo SPA sin separar el backend, compartiendo props y errores de validación del servidor con el cliente.",
      "Construí formularios con validación en servidor mediante Form Requests, subida y gestión de archivos, y envío de correos transaccionales.",
      "Maquetación responsiva con HTML, CSS y JavaScript, y despliegue de proyectos completos en servidores de producción, de los requerimientos a la entrega.",
    ],
    tech: ["Laravel", "PHP", "Inertia.js", "React", "MySQL", "Eloquent", "JavaScript", "CSS"],
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
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#7A8599" }}>
              Experiencia
            </span>
          </div>
          <h2 data-parallax="0.05" className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
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
                    style={{ color: active === i ? "#E8EAED" : "#A0AABA" }}
                  >
                    {e.company}
                  </div>
                  <div className="font-body text-xs" style={{ color: "#7A8599" }}>
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
                    <span className="font-mono text-xs" style={{ color: "#7A8599" }}>
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
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#A0AABA" }}>
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
                      color: "#A0AABA",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,255,148,0.4)";
                      e.currentTarget.style.color = "#00FF94";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1E2530";
                      e.currentTarget.style.color = "#A0AABA";
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
