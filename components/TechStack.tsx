import { stackGroups } from "@/data/portfolio";

export function TechStack() {
  return (
    <div className="stack-grid">
      {stackGroups.map((group) => (
        <article className="stack-panel" key={group.title}>
          <header>
            <span>{group.code}</span>
            <h3>{group.title}</h3>
          </header>
          <ul>
            {group.items.map((item) => (
              <li key={item}>
                <span aria-hidden="true">+</span> {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
