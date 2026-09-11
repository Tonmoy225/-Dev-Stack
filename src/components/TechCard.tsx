import { BADGE_COLORS } from "../theme";
import type { Technology } from "../types";
import { Star, TechIcon } from "./ui";

export default function TechCard({
  tech,
  added,
  onAdd,
}: {
  tech: Technology;
  added: boolean;
  onAdd: (tech: Technology) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="flex items-start justify-between mb-4">
        <TechIcon tech={tech} />
        <span className={`text-[11px] font-medium rounded-full px-2.5 py-1 ${BADGE_COLORS[tech.badge] || "bg-slate-100 text-slate-600"}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="text-[16px] font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500 flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center gap-2 flex-wrap text-[12px] text-slate-500">
        <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto font-medium text-slate-700">
          <Star /> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className={`mt-4 w-full text-[13px] font-semibold rounded-xl py-2.5 transition-colors ${
          added ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
