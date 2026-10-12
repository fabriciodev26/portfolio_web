export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid #1E2530" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs" style={{ color: "#7A8599" }}>
          © 2026 Fabricio Iparraguirre — Lima, Perú
        </div>
        <div className="font-mono text-xs flex items-center gap-2" style={{ color: "#7A8599" }}>
          Hecho con
          <span style={{ color: "#00FF94" }}>Next.js</span>
          &
          <span style={{ color: "#00FF94" }}>❤</span>
        </div>
        <a
          href="https://linkedin.com/in/fabricio-iparraguirre-quintero"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[#7A8599] transition-colors duration-200 hover:text-electric"
        >
          LinkedIn →
        </a>
      </div>
    </footer>
  );
}
