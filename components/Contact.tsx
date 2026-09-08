const contactLinks = [
  {
    label: "Email",
    value: "aarusharya88@gmail.com",
    href: "mailto:aarusharya88@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/aaruche",
    href: "https://github.com/aaruche",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/aarush-arya-30423b233/",
  },
];

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-shell contact-grid">
        <div>
          <p className="contact-kicker">READY PLAYER TWO?</p>
          <h2>Let&apos;s build something close to the metal.</h2>
          <p>
            I&apos;m open to microelectronic systems, FPGA, digital design, and
            low-level software opportunities.
          </p>
          <a className="nes-btn is-primary" href="mailto:aarusharya88@gmail.com">
            Start a conversation
          </a>
        </div>
        <div className="contact-terminal" aria-label="Contact links">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <p>contact.sh</p>
          </div>
          <div className="terminal-body">
            <p className="terminal-command">$ ./find-aarush --online</p>
            {contactLinks.map((link) => (
              <a href={link.href} key={link.label} target={link.label === "Email" ? undefined : "_blank"} rel={link.label === "Email" ? undefined : "noreferrer"}>
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
            <p className="terminal-cursor">_</p>
          </div>
        </div>
      </div>
    </section>
  );
}
