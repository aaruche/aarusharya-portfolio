type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  inverted?: boolean;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverted ? " is-inverted" : ""}`}>
      <p>
        {index} {"//"} {eyebrow}
      </p>
      <div>
        <h2>{title}</h2>
        <span aria-hidden="true" />
      </div>
      <p className="section-intro">{intro}</p>
    </div>
  );
}
