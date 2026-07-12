import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { education } from "../data/profile";

export default function Education() {
  return (
    <Section title="Education" subtitle="My academic background.">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu) => (
          <Card key={edu.institution} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-ink-95">{edu.institution}</h3>
                <p className="text-ink-65">{edu.degree}</p>
              </div>
              <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-cobalt">
                {edu.period}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>{edu.location}</span>
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span className="font-semibold text-cobalt">{edu.score}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
