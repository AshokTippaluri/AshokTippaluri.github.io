import { Section } from "../components/Section";
import { Card, Badge } from "../components/Card";
import { Icon } from "../components/Icon";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <Section title="Projects" subtitle="A selection of things I've built and explored.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} interactive className="flex flex-col overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-page">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-lg font-bold text-ink-95">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge bg-brand-light text-cobalt">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
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
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt transition hover:underline"
                  >
                    <Icon name="external" size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
