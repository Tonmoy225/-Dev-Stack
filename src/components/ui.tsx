import { useState, type ReactNode } from "react";
import { GRADIENT } from "../theme";
import type { Technology } from "../types";

export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{ backgroundImage: GRADIENT, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
    >
      {children}
    </span>
  );
}

export function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="#F5B400" className="inline -mt-0.5">
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5z" />
    </svg>
  );
}

export function TechIcon({ tech, size = "h-9 w-9" }: { tech: Technology; size?: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        className={`${size} shrink-0 rounded-lg flex items-center justify-center text-[11px] font-semibold text-white`}
        style={{ backgroundImage: GRADIENT }}
      >
        {tech.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <div className={`${size} shrink-0 flex items-center justify-center`}>
      <img src={tech.icon} alt={tech.name} className="h-full w-full object-contain" onError={() => setErrored(true)} />
    </div>
  );
}
