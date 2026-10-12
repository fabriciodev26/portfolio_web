"use client";

import { useEffect, useRef } from "react";

/**
 * Capa de scroll animado, sin dependencias:
 *  - Barra de progreso de lectura (arriba).
 *  - Parallax en elementos con `data-parallax="<velocidad>"`.
 *  - Desvanecido/ascenso del Hero al bajar (`data-hero-scroll`).
 *
 * Usa la propiedad CSS `translate` (independiente de `transform`) para no
 * pisar las animaciones de entrada que ya tienen los componentes.
 * Se desactiva con "reducir movimiento" y el parallax no corre en móvil.
 */
export default function ScrollEffects() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const heroEl = document.querySelector<HTMLElement>("[data-hero-scroll]");
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - vh;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }

      if (heroEl) {
        // El Hero se ve completo hasta ~25% de pantalla; luego se desvanece.
        const p = Math.min(Math.max((y - vh * 0.25) / (vh * 0.65), 0), 1);
        heroEl.style.opacity = String(1 - p * 0.85);
        heroEl.style.translate = `0 ${p * -60}px`;
      }

      if (window.innerWidth < 768) return;

      for (const el of parallaxEls) {
        const speed = parseFloat(el.dataset.parallax || "0");
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - vh / 2;
        // Fuera de pantalla: no calculamos.
        if (Math.abs(center) > vh * 1.2) continue;
        el.style.translate = `0 ${(-center * speed).toFixed(1)}px`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          background: "linear-gradient(90deg, #00FF94, #007bff)",
          transform: "scaleX(0)",
          boxShadow: "0 0 10px rgba(0,255,148,0.6)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
