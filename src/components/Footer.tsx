import { personal } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 bg-white py-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        <p className="text-sm text-muted">
          © {year} {personal.name}. Built with React, Vite & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-65 transition hover:text-cobalt"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-65 transition hover:text-cobalt"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
