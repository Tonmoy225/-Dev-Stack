import { GRADIENT } from "../theme";
import { GradientText } from "./ui";

import myImage from "../assets/banner-stack.png";

function HeroArt() {
  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full h-auto max-w-[260px] sm:max-w-[340px] md:max-w-[420px] mx-auto"
      style={{ filter: "drop-shadow(0 20px 40px rgba(124,58,237,.18))" }}
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="55%" stopColor="#FF3D81" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      <g opacity="0.95">
        <polygon points="210,300 380,235 210,170 40,235" fill="url(#g2)" opacity="0.18" />
        <polygon points="210,290 360,232 210,178 60,232" fill="none" stroke="url(#g1)" strokeWidth="2.5" />
      </g>
      <g>
        <polygon points="210,215 350,160 210,105 70,160" fill="none" stroke="url(#g1)" strokeWidth="2.5" />
        <circle cx="140" cy="163" r="10" fill="#EDE9FE" stroke="url(#g1)" strokeWidth="2" />
        <rect x="255" y="145" width="34" height="22" rx="6" fill="#F5F3FF" stroke="url(#g1)" strokeWidth="2" />
      </g>
      <g>
        <polygon points="210,140 320,92 210,44 100,92" fill="#FBFAFF" stroke="url(#g1)" strokeWidth="2.5" />
        <rect x="178" y="66" width="64" height="46" rx="10" fill="url(#g1)" opacity="0.12" />
        <text x="210" y="96" textAnchor="middle" fontSize="22" fontWeight="700" fill="#7C3AED">Aa</text>
      </g>
      <line x1="210" y1="140" x2="210" y2="105" stroke="url(#g1)" strokeWidth="2" opacity="0.5" />
      <line x1="210" y1="215" x2="210" y2="178" stroke="url(#g1)" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-10 sm:pt-16 md:pt-20 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-[28px] sm:text-[34px] md:text-[42px] leading-[1.15] font-extrabold tracking-tight text-slate-900">
          Build Your Ideal<br /><GradientText>Development Stack</GradientText>
        </h1>
        <p className="mt-4 md:mt-5 text-slate-500 text-[14px] sm:text-[15px] leading-relaxed max-w-md mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>
        <div className="mt-6 md:mt-8 flex gap-3 justify-center md:justify-start">
          <a href="#technologies" className="flex-1 sm:flex-none text-center text-[13px] sm:text-[14px] font-semibold text-white px-5 sm:px-6 py-3 rounded-full" style={{ backgroundImage: GRADIENT }}>
            Explore Technologies
          </a>
          <a href="#about" className="flex-1 sm:flex-none text-center text-[13px] sm:text-[14px] font-semibold text-slate-700 px-5 sm:px-6 py-3 rounded-full border border-slate-200 hover:border-slate-300 transition-colors">
            Learn More
          </a>
        </div>
      </div>
      <HeroArt />
    </section>
  );
}
