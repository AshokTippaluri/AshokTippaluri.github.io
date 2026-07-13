import { Section } from "../components/Section";
import { Card, Badge } from "../components/Card";
import { Icon } from "../components/Icon";
import { infraProjects } from "../data/profile";

export default function InfraProjects() {
  return (
    <Section
      title="Infra & cloud deep-dives"
      subtitle="Infrastructure-as-code, CI/CD, and observability projects, with design decisions and outcomes."
    >
      <div className="space-y-8">
        {infraProjects.map((project) => (
          <Card key={project.title} className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-serif text-xl font-bold text-ink-95">{project.title}</h3>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-65 transition hover:text-cobalt"
                >
                  <Icon name="github" size={16} /> Code
                </a>
              )}
            </div>
            <p className="mt-2 text-ink-80">{project.description}</p>
            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-65">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cobalt" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
