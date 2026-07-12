import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import { personal } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 shadow-header backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-3 md:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "linear-gradient(135deg,#0053c0,#4294ff)" }}>
            <span className="text-sm font-bold text-white">AT</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[15px] font-bold text-ink-95">{personal.name}</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">{personal.title}</div>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className="nav-link">
              {link.label}
            </NavLink>
          ))}
          <a href={personal.resume} target="_blank" rel="noreferrer" className="btn-primary text-sm">
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-80 transition hover:bg-black/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-black/10 bg-white px-6 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-brand-light text-cobalt" : "text-ink-65 hover:bg-black/5 hover:text-cobalt"}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a href={personal.resume} target="_blank" rel="noreferrer" className="btn-primary text-sm">
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
