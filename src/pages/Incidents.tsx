import { Section } from "../components/Section";
import { Card, Badge } from "../components/Card";
import { incidents } from "../data/profile";

const severityStyles: Record<string, string> = {
  "SEV-1": "bg-red-50 text-red-600",
  "SEV-2": "bg-amber-50 text-amber-600",
  "SEV-3": "bg-brand-light text-cobalt",
};

export default function Incidents() {
  return (
    <Section
      title="Incident writeups"
      subtitle="Postmortems from production issues I've helped detect, diagnose, and resolve."
    >
      <div className="space-y-8">
        {incidents.map((incident) => (
          <Card key={incident.title} className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-serif text-xl font-bold text-ink-95">{incident.title}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  severityStyles[incident.severity] ?? "bg-brand-light text-cobalt"
                }`}
              >
                {incident.severity}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{incident.date}</p>
            <p className="mt-4 text-ink-80">{incident.summary}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Detection</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-65">{incident.detection}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Root cause</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-65">{incident.rootCause}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Resolution</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-65">{incident.resolution}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Lessons learned</h4>
                <ul className="mt-2 space-y-1.5">
                  {incident.lessons.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-65">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cobalt" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {incident.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
