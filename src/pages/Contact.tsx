import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { personal } from "../data/profile";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: "mail" as const,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ashoktippaluri",
      href: personal.linkedin,
      icon: "linkedin" as const,
    },
    {
      label: "GitHub",
      value: "github.com/ashoktippaluri",
      href: personal.github,
      icon: "github" as const,
    },
    {
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
      icon: "phone" as const,
    },
  ];

  return (
    <Section title="Contact" subtitle="Let's connect and build something great together.">
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-6 md:p-8">
          <h3 className="font-serif text-xl font-bold text-ink-95">Reach out directly</h3>
          <p className="mt-2 text-muted">
            I'm open to full-time roles, consulting opportunities, and interesting conversations about SRE, DevOps, and cloud infrastructure.
          </p>
          <div className="mt-6 space-y-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-black/5 bg-page p-4 transition hover:border-cobalt/20 hover:bg-white"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-light text-cobalt">
                  <Icon name={contact.icon} size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">{contact.label}</p>
                  <p className="font-medium text-ink-95">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <h3 className="font-serif text-xl font-bold text-ink-95">Send a message</h3>
          <p className="mt-2 text-muted">
            Prefer a quick note? Use the form below and I'll get back to you as soon as possible.
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a static template. Connect via email or LinkedIn to send a message.");
            }}
          >
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input id="name" type="text" className="input" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input id="email" type="email" className="input" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="input w-full resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send message
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
