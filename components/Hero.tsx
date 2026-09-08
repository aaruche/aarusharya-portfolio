import Image from "next/image";

const navigation = [
  { label: "Work", href: "#experience" },
  { label: "Quests", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="page-shell nav-bar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Aarush Arya, back to top">
          <span aria-hidden="true">AA</span>
          <span>AARUSH.ROM</span>
        </a>
        <div className="nav-links">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Available for engineering opportunities
          </p>
          <p className="hero-kicker">HELLO, WORLD! I&apos;M</p>
          <h1>Aarush Arya</h1>
          <p className="hero-role">Microelectronic systems engineer</p>
          <p className="hero-summary">
            I build fast, dependable systems where software meets silicon, from
            RISC-V firmware and FPGA datapaths to custom DSP pipelines and VLSI.
          </p>
          <div className="hero-actions">
            <a className="nes-btn is-primary" href="#projects">
              View builds
            </a>
            <a
              className="nes-btn hero-secondary"
              href="/aarush-arya-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="avatar-stage">
          <button
            className="avatar-frame"
            type="button"
            aria-label="Pixel portrait of Aarush Arya. Hover or focus to reveal a playful alternate pose."
          >
            <Image
              src="/aarush-pixel-avatar.png"
              alt="8-bit portrait of Aarush Arya wearing round glasses"
              width="1254"
              height="1254"
              className="avatar-image avatar-image-default"
              priority
            />
            <Image
              src="/aarush-pixel-avatar-hover.png"
              alt=""
              width="1254"
              height="1254"
              className="avatar-image avatar-image-hover"
              aria-hidden="true"
            />
          </button>
          <div className="avatar-caption">
            <span>PLAYER: AARUSH</span>
            <strong>LVL: MSc</strong>
          </div>
          <p className="avatar-hint">HOVER / FOCUS FOR ALT POSE</p>
        </div>
      </div>

      <div className="page-shell boot-line" aria-label="Current focus">
        <span>SYS.READY</span>
        <p>RISC-V // FPGA // EMBEDDED C // DSP // VLSI</p>
      </div>
    </header>
  );
}
