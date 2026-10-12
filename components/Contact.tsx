"use client";

import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    label: "Email",
    value: "fabriciodev26@gmail.com",
    href: "mailto:fabriciodev26@gmail.com",
    icon: "mail" as const,
  },
  {
    label: "LinkedIn",
    value: "fabricio-iparraguirre-quintero",
    href: "https://linkedin.com/in/fabricio-iparraguirre-quintero",
    icon: "linkedin" as const,
  },
  {
    label: "WhatsApp",
    value: "+51 942 981 513",
    href: "https://wa.me/51942981513",
    icon: "whatsapp" as const,
  },
  {
    label: "Llamada",
    value: "+51 942 981 513",
    href: "tel:+51942981513",
    icon: "phone" as const,
  },
];

type IconName = "mail" | "linkedin" | "whatsapp" | "phone";

const LINKEDIN =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const WHATSAPP =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function ContactIcon({ name }: { name: IconName }) {
  const common = { width: 20, height: 20, "aria-hidden": true, focusable: false } as const;

  if (name === "linkedin" || name === "whatsapp") {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d={name === "linkedin" ? LINKEDIN : WHATSAPP} />
      </svg>
    );
  }

  return (
    <svg
      {...common}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "mail" ? (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </>
      ) : (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      )}
    </svg>
  );
}

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
            <span className="font-mono text-xs" style={{ color: "#00FF94" }}>05</span>
            <div className="h-px w-8" style={{ background: "#00FF94" }} />
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#7A8599" }}>
              Contacto
            </span>
          </div>
          <h2 data-parallax="0.05" className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
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
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8E98A9" }}>
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
              className="mt-12 font-display text-6xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-9xl leading-none select-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #1E2530",
                letterSpacing: "0.02em",
              }}
            >
              ESCRÍBEME
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
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded transition-all duration-300 group"
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
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,255,148,0.06)",
                    border: "1px solid rgba(0,255,148,0.15)",
                    color: "#00FF94",
                  }}
                >
                  <ContactIcon name={c.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs mb-0.5" style={{ color: "#7A8599" }}>
                    {c.label}
                  </div>
                  <div className="font-body text-[13px] sm:text-sm break-words" style={{ color: "#A0AABA" }}>
                    {c.value}
                  </div>
                </div>
                <span
                  className="font-mono text-sm transition-transform duration-300"
                  style={{ color: "#7A8599" }}
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
