import { Contact } from "@/components/Contact";
import { EducationPanel } from "@/components/EducationPanel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TechStack } from "@/components/TechStack";
import { experiences, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="content-section" id="experience">
        <div className="page-shell">
          <SectionHeading
            index="01"
            eyebrow="Experience"
            title="Where I have shipped"
            intro="Hands-on work across microelectronics, robotics, firmware, PCB design, and engineering software."
          />
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="page-shell">
          <SectionHeading
            index="02"
            eyebrow="Selected builds"
            title="Technical quests"
            intro="Measured engineering work across FPGA acceleration, bare-metal DSP, processor design, and on-device TinyML."
            inverted
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
          <a
            className="nes-btn project-github"
            href="https://github.com/aaruche"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub
          </a>
        </div>
      </section>

      <section className="content-section stack-section" id="stack">
        <div className="page-shell">
          <SectionHeading
            index="03"
            eyebrow="Hardware & tooling"
            title="My loadout"
            intro="A practical toolkit spanning bare-metal code, digital logic, system modelling, board design, and developer tooling."
          />
          <TechStack />
        </div>
      </section>

      <section className="content-section education-section" id="education">
        <div className="page-shell">
          <SectionHeading
            index="04"
            eyebrow="Education"
            title="Academia"
            intro="Research-led degree work spanning on-device intelligence and database performance."
          />
          <EducationPanel />
          <aside className="side-quest nes-container is-dark with-title">
            <p className="title">SIDE QUESTS</p>
            <div>
              <p>
                <strong>Vice President, EUIS</strong>
                <span>University of Edinburgh // 2023-2024</span>
              </p>
              <p>
                <strong>ARM Cortex-M3/M4 Certification</strong>
                <span>Embedded Systems Programming // Dec 2025</span>
              </p>
              <p>
                <strong>National Swimming Championship</strong>
                <span>CBSE U17 representative // 2018-2019</span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Contact />

      <footer className="site-footer">
        <div className="page-shell">
          <p>© 2026 AARUSH ARYA</p>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
