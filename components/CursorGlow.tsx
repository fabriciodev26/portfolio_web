"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;

    // Si el usuario pidió menos movimiento o está en un dispositivo táctil,
    // desactivamos la lógica del cursor para evitar trabajo extra.
    if (reducedMotion || coarsePointer) return;

    let rafId = 0;
    let lastX = -1000;
    let lastY = -1000;

    const applyPosition = () => {
      rafId = 0;
      el.style.setProperty("--x", `${lastX}px`);
      el.style.setProperty("--y", `${lastY}px`);
    };

    const onMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (rafId) return;
      rafId = window.requestAnimationFrame(applyPosition);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-glow hidden md:block" aria-hidden="true" />;
}

