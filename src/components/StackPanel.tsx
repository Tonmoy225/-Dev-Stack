import type { Technology } from "../types";
import { TechIcon } from "./ui";

export default function StackPanel({
  stack,
  onRemove,
  onRemoveAll,
}: {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24 h-fit">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[15px] font-bold text-slate-900">Your Stack</h3>
        {stack.length > 0 && (
          <button onClick={onRemoveAll} className="text-[12px] text-slate-400 hover:text-rose-500 transition-colors">
            Remove All
          </button>
        )}
      </div>
      <p className="text-[12px] text-slate-400 mb-4">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technolog${stack.length > 1 ? "ies" : "y"} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 py-10 px-4 text-center">
          <p className="text-[13px] text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-2.5">
              <TechIcon tech={tech} size="h-8 w-8" />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-slate-900 truncate">{tech.name}</p>
                <p className="text-[11px] text-slate-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-slate-300 hover:text-rose-500 transition-colors px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
