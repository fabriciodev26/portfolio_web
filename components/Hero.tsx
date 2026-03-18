"use client";

import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Full-Stack Developer",
  "Frontend Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const sync = () => setReduceMotion(mq.matches);
    sync();
    // Soporta tanto addEventListener como addListener (Safari más viejo).
    // eslint-disable-next-line deprecation/deprecation
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);

    return () => {
      // eslint-disable-next-line deprecation/deprecation
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      // En "menos movimiento", evitamos el loop del tecleado.
      setDisplayed(roles[0] ?? "");
      return;
    }

    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx, reduceMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-1/4 right-10 w-px h-40 opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #00FF94, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 left-10 w-px h-40 opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #00FF94, transparent)" }}
      />

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 opacity-20">
        <div className="w-8 h-8" style={{ border: "1px solid #00FF94", borderRight: "none", borderBottom: "none" }} />
      </div>
      <div className="absolute top-24 right-8 opacity-20">
        <div className="w-8 h-8" style={{ border: "1px solid #00FF94", borderLeft: "none", borderBottom: "none" }} />
      </div>
      <div className="absolute bottom-8 left-8 opacity-20">
        <div className="w-8 h-8" style={{ border: "1px solid #00FF94", borderRight: "none", borderTop: "none" }} />
      </div>
      <div className="absolute bottom-8 right-8 opacity-20">
        <div className="w-8 h-8" style={{ border: "1px solid #00FF94", borderLeft: "none", borderTop: "none" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 font-mono text-xs transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                background: "rgba(0,255,148,0.08)",
                border: "1px solid rgba(0,255,148,0.25)",
                color: "#00FF94",
                transitionDelay: "0.1s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              Disponible para nuevos proyectos
            </div>

            {/* Main title */}
            <div
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h1
                className="font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-2"
                style={{ color: "#E8EAED", letterSpacing: "0.02em" }}
                data-text="FABRICIO"
              >
                <span className="glitch-text" data-text="FABRICIO">FABRICIO</span>
              </h1>
              <h1
                className="font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
                style={{ color: "#00FF94", letterSpacing: "0.02em" }}
              >
                IPARRAGUIRRE
              </h1>
            </div>

            {/* Typing role */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.35s" }}
            >
              <span
                className="font-mono text-base md:text-lg"
                style={{ color: "#4A5568" }}
              >
                &gt;_
              </span>
              <span
                className="font-mono text-base md:text-lg"
                style={{ color: "#8892A4" }}
              >
                {displayed}
                <span className="terminal-cursor">|</span>
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-base leading-relaxed mb-10 max-w-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "#6B7280", transitionDelay: "0.45s" }}
            >
              Diseño e implemento interfaces modernas, rápidas y orientadas a la
              experiencia del usuario. Con más de 1 año de experiencia en React,
              Next.js, Angular y ecosistemas fullstack.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.55s" }}
            >
              <a
                href="#experience"
                className="px-6 py-3 rounded font-mono text-sm transition-all duration-300 font-medium"
                style={{
                  background: "#00FF94",
                  color: "#080B0F",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,148,0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                Ver mi trayectoria →
              </a>
              <a
                href="mailto:fabriciodev26@gmail.com"
                className="px-6 py-3 rounded font-mono text-sm transition-all duration-300"
                style={{
                  border: "1px solid #1E2530",
                  color: "#8892A4",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,255,148,0.4)";
                  e.currentTarget.style.color = "#E8EAED";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1E2530";
                  e.currentTarget.style.color = "#8892A4";
                }}
              >
                Contáctame
              </a>
            </div>
          </div>

          {/* Right — Terminal card */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div
              className="rounded-lg overflow-hidden animate-float"
              style={{
                background: "#0F1318",
                border: "1px solid #1E2530",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,255,148,0.05)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid #1E2530", background: "#161B22" }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
                <span className="ml-3 font-mono text-xs" style={{ color: "#4A5568" }}>
                  fabricio@portfolio ~ profile.json
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-relaxed" style={{ color: "#8892A4" }}>
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {`{
  `}<span style={{ color: "#00FF94" }}>"name"</span>{`: `}<span style={{ color: "#E8EAED" }}>"Fabricio Iparraguirre"</span>{`,
  `}<span style={{ color: "#00FF94" }}>"role"</span>{`: `}<span style={{ color: "#E8EAED" }}>"Frontend Developer"</span>{`,
  `}<span style={{ color: "#00FF94" }}>"location"</span>{`: `}<span style={{ color: "#E8EAED" }}>"Lima, Perú 🇵🇪"</span>{`,
  `}<span style={{ color: "#00FF94" }}>"experience"</span>{`: `}<span style={{ color: "#F97316" }}>"+1 año"</span>{`,
  `}<span style={{ color: "#00FF94" }}>"stack"</span>{`: [
    `}<span style={{ color: "#E8EAED" }}>"React"</span>{`, `}<span style={{ color: "#E8EAED" }}>"Next.js"</span>{`,
    `}<span style={{ color: "#E8EAED" }}>"Angular"</span>{`, `}<span style={{ color: "#E8EAED" }}>"TypeScript"</span>{`
  ],
  `}<span style={{ color: "#00FF94" }}>"backend"</span>{`: [
    `}<span style={{ color: "#E8EAED" }}>"NestJS"</span>{`, `}<span style={{ color: "#E8EAED" }}>"Laravel"</span>{`,
    `}<span style={{ color: "#E8EAED" }}>"PostgreSQL"</span>{`
  ],
  `}<span style={{ color: "#00FF94" }}>"status"</span>{`: `}<span style={{ color: "#00FF94" }}>"available"</span>{`
}`}
                </pre>
              </div>
            </div>

            {/* Stats below card */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { num: "+2", label: "Año exp." },
                { num: "5+", label: "Proyectos Internos" },
                { num: "3", label: "Empresas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-3 rounded"
                  style={{
                    background: "rgba(0,255,148,0.04)",
                    border: "1px solid #1E2530",
                  }}
                >
                  <div className="font-display text-2xl" style={{ color: "#00FF94" }}>
                    {stat.num}
                  </div>
                  <div className="font-mono text-xs mt-0.5" style={{ color: "#4A5568" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#2D3748" }}
        >
          <span className="font-mono text-xs">scroll</span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, #2D3748, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
