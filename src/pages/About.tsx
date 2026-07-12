import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { personal, skills } from "../data/profile";

export default function About() {
  const focusAreas = [
    "Cloud Infrastructure (AWS, Azure, GCP)",
    "Container Orchestration (Kubernetes, Docker)",
    "CI/CD Automation (Jenkins, Git, Terraform)",
    "Monitoring & Observability (Grafana, CloudWatch, Zabbix, Nagios)",
    "Scripting & Automation (Python, Go, Bash)",
    "Databases (MySQL, PostgreSQL, MongoDB)",
  ];

  return (
    <>
      <Section title="About me" subtitle="A little more about my background and what I enjoy working on.">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {personal.about.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-80">
                {paragraph}
              </p>
            ))}
            <p className="text-lg leading-relaxed text-ink-80">
              I am motivated by the opportunity to enhance system performance, streamline processes, and ensure robust, reliable infrastructure. My commitment to continuous improvement and enthusiasm for tackling intricate technical challenges make me an asset to any team.
            </p>
          </div>
          <Card className="h-fit p-6">
            <h3 className="font-serif text-xl font-bold text-ink-95">Focus areas</h3>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((area, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-65">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cobalt" />
                  {area}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="bg-white" title="At a glance" subtitle="Core technologies I work with regularly.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 3).map((group) => (
            <Card key={group.category} className="p-6">
              <h3 className="font-serif text-lg font-bold text-ink-95">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item.name} className="badge bg-brand-light text-cobalt">
                    {item.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
