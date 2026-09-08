import { education } from "@/data/portfolio";

export function EducationPanel() {
  return (
    <div className="education-grid">
      {education.map((item) => (
        <article className="education-card" key={item.school}>
          <div className="education-pixel" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>{item.period}</p>
          <h3>{item.qualification}</h3>
          <h4>{item.school}</h4>
          <p className="education-detail">{item.details}</p>
        </article>
      ))}
    </div>
  );
}
