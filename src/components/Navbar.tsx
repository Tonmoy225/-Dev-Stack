import { useState } from "react";
import { GRADIENT } from "../theme";
import logoText from "../assets/logo-text.png";

const LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      
      {/* Mobile Navbar */}
      <div className="md:hidden grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 h-[60px]">
        
        {/* Hamburger */}
        <button
          className="justify-self-start text-slate-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Mobile Logo */}
        <a
          href="#top"
          className="justify-self-center"
          onClick={() => setActive("Home")}
        >
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-7 w-auto"
          />
        </a>

        {/* Mobile Auth Buttons */}
        <div className="justify-self-end flex items-center gap-2.5">
          <button className="text-[12px] text-slate-600 whitespace-nowrap">
            Sign In
          </button>

          <button
            className="text-[11px] font-semibold text-white px-3.5 py-2 rounded-full whitespace-nowrap"
            style={{ backgroundImage: GRADIENT }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-7xl mx-auto px-8 h-[68px] items-center justify-between">
        
        {/* Desktop Logo */}
        <a
          href="#top"
          className="flex items-center mr-10"
          onClick={() => setActive("Home")}
        >
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-9 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-[14px] flex-1 justify-center">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l)}
              className={
                active === l
                  ? "font-medium"
                  : "text-slate-500 hover:text-slate-800 transition-colors"
              }
              style={
                active === l
                  ? {
                      backgroundImage: GRADIENT,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }
                  : {}
              }
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors">
            Sign In
          </button>

          <button
            className="text-[13px] font-semibold text-white px-5 py-2.5 rounded-full"
            style={{ backgroundImage: GRADIENT }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 px-5 py-3 flex flex-col gap-3 text-[14px] text-slate-600 bg-white">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => {
                setActive(l);
                setOpen(false);
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}