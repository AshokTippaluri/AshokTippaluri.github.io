import { Section } from "../components/Section";
import { Card, Badge } from "../components/Card";
import { experiences } from "../data/profile";

export default function Experience() {
  return (
    <Section title="Experience" subtitle="My professional journey so far.">
      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-black/10 md:left-8 lg:left-1/2 lg:-ml-px md:block" />
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div
              key={job.company}
              className={`relative flex flex-col gap-4 md:gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 hidden h-4 w-4 rounded-full border-2 border-white bg-cobalt shadow md:left-8 lg:left-1/2 lg:-ml-2 md:block" />

              {/* Date label */}
              <div className="flex-1 lg:text-right">
                <span className="inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-cobalt shadow-card">
                  {job.period}
                </span>
                <p className="mt-2 text-sm text-muted">{job.location}</p>
              </div>

              {/* Card */}
              <Card className="flex-1 p-6 md:ml-16 lg:ml-0">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-2 shadow-card">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink-95">
                      <a href={job.website} target="_blank" rel="noreferrer" className="hover:text-cobalt hover:underline">
                        {job.company}
                      </a>
                    </h3>
                    <p className="text-ink-65">{job.role}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cobalt" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
