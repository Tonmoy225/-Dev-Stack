import { GRADIENT } from "../theme";
import { GradientText } from "./ui";
import myImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center"
    >
      
      <div className="text-left">
        <h1 className="text-[34px] sm:text-[38px] md:text-[42px] leading-[1.08] font-extrabold tracking-tight text-slate-900">
          Build Your Ideal
          <br />
          <GradientText>Development Stack</GradientText>
        </h1>

        <p className="mt-4 text-slate-500 text-[13px] sm:text-[14px] leading-[1.65] max-w-[430px]">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        
        <div className="mt-7 flex items-center gap-2">
          <a
            href="#technologies"
            className="text-center text-[11px] sm:text-[12px] font-semibold text-white px-3.5 sm:px-4 py-2.5 rounded-md transition-opacity hover:opacity-90"
            style={{ backgroundImage: GRADIENT }}
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="text-center text-[11px] sm:text-[12px] font-medium text-slate-600 px-5 sm:px-6 py-2.5 rounded-md border border-slate-200 hover:border-slate-300 hover:text-slate-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      
      <div className="relative flex items-center justify-center md:justify-end">
        
        <div
          className="absolute w-[220px] h-[220px] rounded-full blur-3xl opacity-20"
          style={{ backgroundImage: GRADIENT }}
          aria-hidden="true"
        />

        
        <img
          src={myImage}
          alt="Isometric illustration of a layered technology stack"
          className="relative w-auto h-auto max-w-[220px] sm:max-w-[230px] md:max-w-[240px]"
        />
      </div>
    </section>
  );
}