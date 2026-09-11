import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";
import { GradientText } from "./components/ui";
import { CATEGORIES, GRADIENT } from "./theme";
import type { Technology } from "./types";

function App() {
  const [techs, setTechs] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stackIds, setStackIds] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("All");

  // Load the technology data from the local JSON file — not hardcoded here.
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechs(data))
      .catch(() => toast.error("Couldn't load technology data."))
      .finally(() => setLoading(false));
  }, []);

  function addToStack(tech: Technology) {
    if (stackIds.includes(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStackIds((ids) => [...ids, tech.id]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function removeFromStack(id: string) {
    const tech = techs.find((t) => t.id === id);
    setStackIds((ids) => ids.filter((x) => x !== id));
    toast.info(`${tech ? tech.name : "Item"} removed from your stack.`);
  }

  function removeAll() {
    setStackIds([]);
    toast.info("Stack cleared.");
  }

  const stack = stackIds.map((id) => techs.find((t) => t.id === id)).filter(Boolean) as Technology[];
  const filtered = category === "All" ? techs : techs.filter((t) => t.category === category);

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-16 md:pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 text-center sm:text-left">
          <div>
            <h2 className="text-[21px] sm:text-[24px] font-extrabold tracking-tight">
              Explore the <GradientText>Technologies</GradientText>
            </h2>
            <p className="text-[13px] text-slate-500 mt-1">Pick the technologies you need to build your ideal stack.</p>
          </div>
   
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-6 md:gap-8 items-start">
          {loading ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-56 rounded-2xl border border-slate-200 bg-slate-50 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((tech) => (
                <TechCard key={tech.id} tech={tech} added={stackIds.includes(tech.id)} onAdd={addToStack} />
              ))}
            </div>
          )}

          <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      </section>

      {/* <section id="about" className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 text-center">
          <h2 className="text-[22px] font-extrabold text-slate-900">Built for developers comparing their options</h2>
          <p className="text-[14px] text-slate-500 max-w-xl mx-auto mt-3 leading-relaxed">
            Dev Stack started as a way to stop losing tab after tab of framework docs.
            Now it's a single, quick place to compare tools and keep a running shortlist.
          </p>
        </div>
      </section> */}

      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar theme="light" />
    </div>
  );
}

export default App;
