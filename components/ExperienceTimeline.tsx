import type { Experience } from "@/data/portfolio";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className="experience-list">
      {items.map((item, index) => (
        <article className="experience-item" key={`${item.company}-${item.role}`}>
          <div className="timeline-marker" aria-hidden="true">
            {String(items.length - index).padStart(2, "0")}
          </div>
          <div className="nes-container with-title experience-card">
            <p className="title">{item.period}</p>
            <div className="experience-header">
              <div>
                {item.status ? <span className="quest-label">{item.status}</span> : null}
                <h3>{item.role}</h3>
                <p>
                  {item.company} <span>{"// "}{item.location}</span>
                </p>
              </div>
            </div>
            <ul className="pixel-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="tag-row" aria-label="Technologies used">
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
