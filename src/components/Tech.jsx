import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const CATEGORIES = ["ALL", "BACKEND", "FRONTEND", "DATABASE", "TOOLS"];

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredTech = useMemo(() => {
    if (!technologies) return [];
    if (activeCategory === "ALL") return technologies;
    return technologies.filter(
      (t) => t.category?.toUpperCase() === activeCategory
    );
  }, [activeCategory]);

  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="relative w-full py-8 font-mono select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-cyan-400 text-xs tracking-[0.2em] uppercase">
          // TECH_ECOSYSTEM
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
          CORE <span className="text-cyan-400">STACK</span>
        </h2>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-cyan-950/70 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                : "bg-[#070c18]/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Minimal Tech Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 relative z-10 max-w-5xl mx-auto"
      >
        {filteredTech.map((tech) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            key={tech.name}
            className="group relative p-4 rounded-xl border border-white/5 bg-[#070c18]/70 hover:border-cyan-500/40 hover:bg-cyan-950/20 backdrop-blur-md transition-all duration-200 flex flex-col items-center justify-center gap-3"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  loading="lazy"
                />
              )}
            </div>

            {/* Name */}
            <span className="text-xs font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors tracking-wide truncate max-w-full">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");