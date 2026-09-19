import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTerminal, FaShieldAlt, FaMicrochip } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0] || null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!projects || projects.length === 0) return null;

  const handleSelect = (project) => {
    setSelectedProject(project);
    setIsPlayingVideo(false);
  };

  return (
    <div className="relative w-full -mt-10 sm:-mt-16 pt-0 pb-16 font-mono select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-cyan-400 text-xs tracking-[0.25em] uppercase">
          // COMMAND_OS // ARCHIVE_V2
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
          SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500">DEPLOYMENTS</span>
        </h2>
      </div>

      {/* Main Command Console (Split-Screen) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto relative z-10">
        
        {/* Left: Scrollable Mission Manifest (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[540px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="text-[11px] text-slate-500 pb-2 border-b border-white/10 flex items-center justify-between">
            <span>INDEXED_REGISTRY ({projects.length})</span>
            <span className="text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              HOT_SWAP_ACTIVE
            </span>
          </div>

          {projects.map((project, index) => {
            const isSelected = selectedProject?.name === project.name;
            return (
              <div
                key={project.name || index}
                onClick={() => handleSelect(project)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 relative group flex items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-cyan-950/70 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                    : "bg-[#070c18]/60 border-white/5 hover:border-white/20 hover:bg-[#0c1322]"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-slate-500 font-bold">
                      0{index + 1} //
                    </span>
                    <h3 className={`text-sm font-bold truncate transition-colors ${
                      isSelected ? "text-cyan-300" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {project.name}
                    </h3>
                  </div>

                  {/* Micro Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags?.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" : "bg-slate-700"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Active Hologram Cockpit (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-cyan-500/30 bg-[#070c18]/95 p-6 backdrop-blur-2xl shadow-2xl flex flex-col justify-between min-h-[540px]">
            
            {/* Cockpit Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-cyan-400 ml-2">// TELEMETRY_VIEW</span>
              </div>
              
              <div className="flex items-center gap-2">
                {selectedProject?.source_code_link && (
                  <a
                    href={selectedProject.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
                  >
                    <FaGithub className="text-xs" /> Code
                  </a>
                )}
                {selectedProject?.live_link && (
                  <a
                    href={selectedProject.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-xs text-cyan-300 border border-cyan-500/30 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live
                  </a>
                )}
              </div>
            </div>

            {/* Dynamic Viewport */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject?.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col justify-between gap-4"
              >
                {/* Media Screen */}
                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-black/60 border border-white/10 group">
                  {isPlayingVideo ? (
                    <iframe
                      src={`${selectedProject.video_link}?autoplay=1`}
                      title={selectedProject.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-full object-cover"
                      />
                      {selectedProject.video_link && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => setIsPlayingVideo(true)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                          >
                            <FaPlay className="text-[10px]" /> Run Simulation
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Info Block */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {selectedProject.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 font-sans leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Telemetry Matrix Specs */}
                <div className="grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-white/5">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block">PIPELINE</span>
                    <span className="text-slate-200 font-semibold">PostgreSQL / REST APIs</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block">SECURITY_LAYER</span>
                    <span className="text-emerald-400 font-semibold">RBAC & Token Validation</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Terminal Footer Indicator */}
            <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <FaShieldAlt className="text-cyan-400" /> INTEGRITY_CHECK: PASSED
              </span>
              <span className="text-cyan-400 font-mono">STATUS: PRODUCTION_READY</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");