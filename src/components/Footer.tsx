import logoText from "../assets/logo-text.png";

const GROUPS: Record<string, string[]> = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 grid gap-8 md:gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr] text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
                    <img src={logoText} alt="Dev Stack" className="h-7 w-auto mb-3" />
          <p className="text-[13px] text-slate-500 max-w-xs leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex items-center gap-2.5 mt-5 text-[13px] text-slate-500">
            {["GitHub", "Twitter", "LinkedIn"].map((s, i) => (
              <span key={s} className="flex items-center gap-2.5">
                {i > 0 && <span className="text-slate-300">•</span>}
                <span className="hover:text-slate-900 transition-colors cursor-pointer">{s}</span>
              </span>
            ))}
          </div>
        </div>
        {Object.entries(GROUPS).map(([title, items]) => (
          <div key={title} className="hidden md:block">
            <p className="text-[11px] font-bold tracking-wide text-slate-800 mb-3">{title.toUpperCase()}</p>
            <ul className="flex flex-col gap-2.5">
              {items.map((it) => (
                <li key={it}>
                  <a href="#" className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between gap-3 text-[11px] sm:text-[12px] text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-5">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
