import { GRADIENT } from "../theme";
import { GradientText } from "./ui";
import myImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-10 sm:pt-16 md:pt-20 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center"
    >
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-[28px] sm:text-[34px] md:text-[42px] leading-[1.15] font-extrabold tracking-tight text-slate-900">
          Build Your Ideal
          <br />
          <GradientText>Development Stack</GradientText>
        </h1>

        <p className="mt-4 md:mt-5 text-slate-500 text-[14px] sm:text-[15px] leading-relaxed max-w-md mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-6 md:mt-8 flex gap-3 justify-center md:justify-start">
          <a
            href="#technologies"
            className="flex-1 sm:flex-none text-center text-[13px] sm:text-[14px] font-semibold text-white px-5 sm:px-6 py-3 rounded-full"
            style={{ backgroundImage: GRADIENT }}
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="flex-1 sm:flex-none text-center text-[13px] sm:text-[14px] font-semibold text-slate-700 px-5 sm:px-6 py-3 rounded-full border border-slate-200 hover:border-slate-300 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex items-center justify-center">
        {/* Background Glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-30"
          style={{ backgroundImage: GRADIENT }}
          aria-hidden="true"
        />

        {/* Banner Image */}
        <img
          src={myImage}
          alt="Isometric illustration of a layered technology stack"
          className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] h-auto"
        />
      </div>
    </section>
  );
}