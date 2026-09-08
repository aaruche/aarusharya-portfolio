import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card${project.featured ? " is-featured" : ""}`}>
      <div className="project-topline">
        <span>BUILD_{String(index + 1).padStart(2, "0")}</span>
        <span>{project.period}</span>
      </div>
      <h3>
        {project.repositoryUrl ? (
          <a
            className="project-title-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.name} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.description}</p>
      <dl className="project-metrics">
        {project.metrics.map((metric) => (
          <div key={`${metric.value}-${metric.label}`}>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
      <div className="tag-row tag-row-dark" aria-label="Project technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      {project.links?.length ? (
        <div className="project-actions" aria-label={`${project.name} resources`}>
          {project.links.map((link) => (
            <a className="nes-btn" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
      {project.media ? (
        <details className="project-media">
          <summary>{project.media.label}</summary>
          <div className="project-media-body">
            <Image
              src={project.media.src}
              alt={project.media.alt}
              width="1536"
              height="2048"
              loading="lazy"
            />
            <p>{project.media.caption}</p>
          </div>
        </details>
      ) : null}
    </article>
  );
}
