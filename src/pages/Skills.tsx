import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { skills } from "../data/profile";

export default function Skills() {
  return (
    <Section title="Skills" subtitle="Tools and technologies I use to build and operate systems.">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.category} className="p-6">
            <h3 className="mb-5 font-serif text-xl font-bold text-ink-95">{group.category}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-black/5 bg-page p-3 transition hover:border-cobalt/20 hover:bg-white hover:shadow-card"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-center text-xs font-semibold text-ink-65">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
