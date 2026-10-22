interface SectionHeadingProps {
  title: string;
  intro?: string;
  id?: string;
}

export function SectionHeading({ title, intro, id }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
