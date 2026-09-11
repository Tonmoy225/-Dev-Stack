// Single source of truth for the brand gradient — change this one value
// and the brand name, hero highlight, and primary buttons all re-theme.
export const GRADIENT = "linear-gradient(90deg, #FF7A45 0%, #FF3D81 55%, #7C3AED 100%)";

export const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "Styling",
  "DevOps",
  "Tools",
] as const;

export const BADGE_COLORS: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-slate-100 text-slate-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-orange-50 text-orange-600",
  Modern: "bg-emerald-50 text-emerald-600",
  Containers: "bg-sky-50 text-sky-600",
  Flexible: "bg-emerald-50 text-emerald-600",
};
