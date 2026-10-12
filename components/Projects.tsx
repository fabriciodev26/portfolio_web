"use client";

import { useEffect, useRef, useState } from "react";

type SiteLink = { country: string; flag: string; domain: string; href: string };
type Project = {
  name: string;
  description: string;
  href: string;
  tags: string[];
  color: string;
  links?: SiteLink[];
};

const projects: Project[] = [
  {
    name: "Click & Play",
    description:
      "Agencia creativa 360° para campañas de marketing digital, gestión de redes y diseño web.",
    href: "https://cpmarketing-nine.vercel.app/",
    tags: ["Next.js", "Landing Page", "Marketing"],
    color: "#F97316",
  },
  {
    name: "InSalud Multidominio",
    description:
      "Plataforma médica multidominio de medicina regenerativa con terapia de ondas de choque: un solo proyecto sirve insalud.sv, .ec, .pa y .cr con contenido por país. +125,000 tratamientos realizados.",
    href: "https://www.insalud.sv/",
    tags: ["Next.js", "Sanity", "Multidominio", "SEO"],
    color: "#00FF94",
    links: [
      { country: "El Salvador", flag: "🇸🇻", domain: "insalud.sv", href: "https://www.insalud.sv/" },
      { country: "Ecuador", flag: "🇪🇨", domain: "insalud.ec", href: "https://www.insalud.ec/" },
      { country: "Panamá", flag: "🇵🇦", domain: "insalud.pa", href: "https://www.insalud.pa/" },
      { country: "Costa Rica", flag: "🇨🇷", domain: "insalud.cr", href: "https://www.insalud.cr/" },
    ],
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

function CountryPicker({ project, onClose }: { project: Project; onClose: () => void }) {
  const firstRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    firstRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-6 animate-fade-in"
      style={{ background: "rgba(8,11,15,0.8)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="picker-title"
        className="w-full max-w-md rounded-lg p-6"
        style={{ background: "#0F1318", border: `1px solid ${project.color}40` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 id="picker-title" className="font-mono text-base font-medium" style={{ color: "#E8EAED" }}>
            {project.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="font-mono text-lg leading-none transition-colors hover:text-white"
            style={{ color: "#7A8599" }}
          >
            ×
          </button>
        </div>
        <p className="text-sm mb-5" style={{ color: "#A0AABA" }}>
          Elige el país que quieres ver:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.links?.map((l, i) => (
            <a
              key={l.domain}
              ref={i === 0 ? firstRef : undefined}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center gap-3 rounded px-4 py-3 transition-colors duration-200"
              style={{ background: "#161B22", border: "1px solid #1E2530" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${project.color}80`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E2530"; }}
              onFocus={(e) => { e.currentTarget.style.borderColor = `${project.color}80`; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#1E2530"; }}
            >
              <span className="text-2xl" aria-hidden="true">{l.flag}</span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm" style={{ color: "#E8EAED" }}>{l.country}</span>
                <span className="block font-mono text-xs" style={{ color: "#7A8599" }}>{l.domain}</span>
              </span>
              <span
                className="font-mono text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "#7A8599" }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [picker, setPicker] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const closePicker = () => {
    setPicker(null);
    triggerRef.current?.focus();
  };

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
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#7A8599" }}>
              Proyectos
            </span>
          </div>
          <h2 data-parallax="0.05" className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
            PROYECTOS
            <br />
            <span style={{ color: "#00FF94" }}>REALIZADOS</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const common = {
              className: "group rounded-lg p-6 card-hover transition-all duration-700 flex flex-col text-left w-full",
              style: {
                background: "#0F1318",
                border: "1px solid #1E2530",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.1}s`,
              } as React.CSSProperties,
              onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.borderColor = `${p.color}66`;
              },
              onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.borderColor = "#1E2530";
              },
            };

            const inner = (
              <>
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
                    style={{ color: "#7A8599" }}
                  >
                    {p.links ? `${p.links.length} países ▾` : "↗"}
                  </span>
                </div>

                <h3 className="font-mono text-base font-medium mb-2" style={{ color: "#E8EAED" }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#A0AABA" }}>
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
                        color: "#8E98A9",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            );

            return p.links ? (
              <button
                key={p.name}
                type="button"
                aria-haspopup="dialog"
                {...common}
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setPicker(p);
                }}
              >
                {inner}
              </button>
            ) : (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" {...common}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>

      {picker && <CountryPicker project={picker} onClose={closePicker} />}
    </section>
  );
}
