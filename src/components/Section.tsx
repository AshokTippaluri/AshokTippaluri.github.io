import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        {(title || subtitle) && (
          <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
