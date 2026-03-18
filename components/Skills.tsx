"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◈",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Astro", level: 70 },
    ],
  },
  {
    title: "Backend & DB",
    icon: "◇",
    skills: [
      { name: "NestJS", level: 72 },
      { name: "Laravel / PHP", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Herramientas",
    icon: "◉",
    skills: [
      { name: "Git", level: 88 },
      { name: "Vite", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Inertia.js", level: 75 },
      { name: "Office / Excel", level: 80 },
    ],
  },
];

const techLogos = [
  "React", "Next.js", "Angular", "TypeScript", "Astro",
  "NestJS", "Laravel", "PostgreSQL", "MySQL", "MongoDB",
  "Git", "Vite", "PHP", "JavaScript", "Tailwind",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const sync = () => setReduceMotion(mq.matches);
    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs" style={{ color: "#00FF94" }}>03</span>
            <div className="h-px w-8" style={{ background: "#00FF94" }} />
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#4A5568" }}>
              Habilidades
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#E8EAED", letterSpacing: "0.02em" }}>
            MI STACK
            <br />
            <span style={{ color: "#00FF94" }}>TÉCNICO</span>
          </h2>
        </div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className="rounded-lg p-6 card-hover transition-all duration-700"
              style={{
                background: "#0F1318",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${ci * 0.15}s`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span style={{ color: "#00FF94", fontSize: "20px" }}>{cat.icon}</span>
                <h3 className="font-mono text-sm font-medium" style={{ color: "#E8EAED" }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-mono text-xs" style={{ color: "#8892A4" }}>
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs" style={{ color: "#4A5568" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "#1E2530" }}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          background: "linear-gradient(90deg, #00FF94, #00C97A)",
                          width: visible ? `${skill.level}%` : "0%",
                          transitionDuration: "1s",
                          transitionDelay: `${ci * 0.15 + si * 0.08 + 0.3}s`,
                          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling tech strip */}
        <div
          className="overflow-hidden transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: "0.5s",
            borderTop: "1px solid #1E2530",
            borderBottom: "1px solid #1E2530",
            padding: "16px 0",
          }}
        >
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{
              animation: reduceMotion ? "none" : "marquee 20s linear infinite",
            }}
          >
            {[...techLogos, ...techLogos].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="font-mono text-sm flex-shrink-0 flex items-center gap-2"
                style={{ color: "#4A5568" }}
              >
                <span style={{ color: "#1E2530" }}>◆</span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        {/* Certification */}
        <div
          className="mt-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "0.6s" }}
        >
          <div
            className="rounded-lg p-6 flex items-center gap-6"
            style={{
              background: "rgba(0,255,148,0.04)",
              border: "1px solid rgba(0,255,148,0.15)",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl"
              style={{ background: "rgba(0,255,148,0.1)", border: "1px solid rgba(0,255,148,0.2)" }}
            >
              🏆
            </div>
            <div>
              <div className="font-mono text-sm mb-0.5" style={{ color: "#00FF94" }}>
                Certificación oficial
              </div>
              <div className="font-body text-base" style={{ color: "#E8EAED" }}>
                Introduction to MongoDB — MongoDB University
              </div>
              <div className="font-mono text-xs mt-1" style={{ color: "#4A5568" }}>
                Marzo 2021 – Mayo 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
