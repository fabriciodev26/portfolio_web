"use client";

import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    label: "Email",
    value: "fabriciodev26@gmail.com",
    href: "mailto:fabriciodev26@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "fabricio-iparraguirre-quintero",
    href: "https://linkedin.com/in/fabricio-iparraguirre-quintero",
    icon: "◈",
  },
  {
    label: "WhatsApp",
    value: "+51 945 813 309",
    href: "https://wa.me/51945813309",
    icon: "◉",
  },
  {
    label: "Llamada",
    value: "+51 942 981 513",
    href: "tel:+51942981513",
    icon: "◇",
  },
];

export default function Contact() {
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

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
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
              Contacto
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
            HABLEMOS
            <br />
            <span style={{ color: "#00FF94" }}>JUNTOS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — CTA */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: "0.2s",
            }}
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              ¿Tienes un proyecto en mente? Estoy disponible para roles fulltime,
              freelance o colaboraciones. Me encanta trabajar en productos que importen.
            </p>

            <a
              href="mailto:fabriciodev26@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded font-mono text-base font-semibold transition-all duration-300"
              style={{
                background: "#00FF94",
                color: "#080B0F",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,255,148,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              <span>✉</span>
              Envíame un mensaje
            </a>

            {/* Big decorative text */}
            <div
              className="mt-12 font-display text-8xl md:text-9xl leading-none select-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #1E2530",
                letterSpacing: "0.02em",
              }}
            >
              HIRE
              <br />
              ME
            </div>
          </div>

          {/* Right — Contact cards */}
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded transition-all duration-300 group"
                style={{
                  background: "#0F1318",
                  border: "1px solid #1E2530",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(20px)",
                  transitionDelay: `${0.3 + i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,255,148,0.4)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1E2530";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 font-mono text-lg"
                  style={{
                    background: "rgba(0,255,148,0.06)",
                    border: "1px solid rgba(0,255,148,0.15)",
                    color: "#00FF94",
                  }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs mb-0.5" style={{ color: "#4A5568" }}>
                    {c.label}
                  </div>
                  <div className="font-body text-sm truncate" style={{ color: "#8892A4" }}>
                    {c.value}
                  </div>
                </div>
                <span
                  className="font-mono text-sm transition-transform duration-300"
                  style={{ color: "#2D3748" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
