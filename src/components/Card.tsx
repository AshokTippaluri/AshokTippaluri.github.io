import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className = "", interactive = false }: CardProps) {
  const base = "card";
  const hover = interactive ? " card-interactive" : "";
  return <div className={`${base}${hover} ${className}`}>{children}</div>;
}

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`badge bg-brand-light text-cobalt ${className}`}>
      {children}
    </span>
  );
}
