import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { LearningBanner } from "../components/LearningBanner";
import { personal, skills, experiences } from "../data/profile";

export default function Home() {
  const latestRole = experiences[0];

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
      <div className="bg-page pt-6">
        <LearningBanner />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cobalt/10 to-azure/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-azure/10 to-cobalt/5 blur-3xl animate-pulse-glow animation-delay-300" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-10 px-6 md:flex-row md:items-center md:gap-16 md:px-8">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-card">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-ink-65">Available for opportunities</span>
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink-95 md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-cobalt">{personal.name}</span>
            </h1>
            <p className="mt-4 text-xl text-ink-65 md:text-2xl">
              {personal.title}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0">
              {personal.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link to="/contact" className="btn-primary">
                Get in touch
              </Link>
              <Link to="/projects" className="btn-ghost">
                View projects
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-ink-65 shadow-card transition hover:border-cobalt/30 hover:text-cobalt"
                aria-label="GitHub"
              >
                <Icon name="github" size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-ink-65 shadow-card transition hover:border-cobalt/30 hover:text-cobalt"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-ink-65 shadow-card transition hover:border-cobalt/30 hover:text-cobalt"
                aria-label="Email"
              >
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cobalt to-azure opacity-20 blur-2xl" />
            <img
              src={personal.avatar}
              alt={personal.name}
              className="relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-elevated md:h-64 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <Section className="bg-page">
        <div className="grid gap-6 md:grid-cols-3">
          <Card interactive className="p-6">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-cobalt">
              <Icon name="briefcase" size={22} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ink-95">Experience</h3>
            <p className="mt-2 text-muted">
              {latestRole.role} at {latestRole.company} since {latestRole.period.split(" - ")[0]}.
            </p>
            <Link to="/experience" className="mt-4 inline-flex items-center text-sm font-semibold text-cobalt hover:underline">
              See my journey <Icon name="chevron" size={16} className="rotate-[-90deg]" />
            </Link>
          </Card>
          <Card interactive className="p-6">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-cobalt">
              <Icon name="grid" size={22} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ink-95">Skills</h3>
            <p className="mt-2 text-muted">
              Cloud, containers, CI/CD, monitoring, and automation across {skills.length} categories.
            </p>
            <Link to="/skills" className="mt-4 inline-flex items-center text-sm font-semibold text-cobalt hover:underline">
              Explore skills <Icon name="chevron" size={16} className="rotate-[-90deg]" />
            </Link>
          </Card>
          <Card interactive className="p-6">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-cobalt">
              <Icon name="layers" size={22} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ink-95">Projects</h3>
            <p className="mt-2 text-muted">
              Full-stack apps, machine learning experiments, and cloud-native tooling.
            </p>
            <Link to="/projects" className="mt-4 inline-flex items-center text-sm font-semibold text-cobalt hover:underline">
              View projects <Icon name="chevron" size={16} className="rotate-[-90deg]" />
            </Link>
          </Card>
        </div>
      </Section>

      {/* About */}
      <Section className="bg-white" title="About me" subtitle="A little more about my background and what I enjoy working on.">
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

      {/* At a glance */}
      <Section className="bg-page" title="At a glance" subtitle="Core technologies I work with regularly.">
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
