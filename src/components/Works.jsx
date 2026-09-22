import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPlay, 
  FaCode, 
  FaServer, 
  FaUndo, 
  FaTerminal,
  FaFolderOpen
} from "react-icons/fa";
import { 
  SiPython, 
  SiDjango, 
  SiReact, 
  SiPostgresql, 
  SiMysql, 
  SiDocker, 
  SiRedis, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiAmazonwebservices,
  SiFastapi,
  SiHtml5,
  SiCss3,
  SiGit,
  SiLinux
} from "react-icons/si";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// টেকনোলজির নামের সাথে মিলিয়ে আসল কালারফুল অফিসিয়াল লোগো রিটার্ন করে
const getTechIcon = (name = "") => {
  const normalized = name.toLowerCase().replace(/[\s\-_.]/g, "");
  
  if (normalized.includes("python")) return <SiPython className="text-[#3776AB]" />;
  if (normalized.includes("django")) return <SiDjango className="text-[#092E20] bg-white/10 rounded-sm p-[1px]" />;
  if (normalized.includes("react")) return <SiReact className="text-[#61DAFB]" />;
  if (normalized.includes("postgres")) return <SiPostgresql className="text-[#4169E1]" />;
  if (normalized.includes("mysql")) return <SiMysql className="text-[#4479A1]" />;
  if (normalized.includes("docker")) return <SiDocker className="text-[#2496ED]" />;
  if (normalized.includes("redis")) return <SiRedis className="text-[#DC382D]" />;
  if (normalized.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4]" />;
  if (normalized.includes("javascript") || normalized === "js") return <SiJavascript className="text-[#F7DF1E]" />;
  if (normalized.includes("typescript") || normalized === "ts") return <SiTypescript className="text-[#3178C6]" />;
  if (normalized.includes("aws")) return <SiAmazonwebservices className="text-[#FF9900]" />;
  if (normalized.includes("fastapi")) return <SiFastapi className="text-[#05998B]" />;
  if (normalized.includes("html")) return <SiHtml5 className="text-[#E34F26]" />;
  if (normalized.includes("css")) return <SiCss3 className="text-[#1572B6]" />;
  if (normalized.includes("git")) return <SiGit className="text-[#F05032]" />;
  if (normalized.includes("linux")) return <SiLinux className="text-[#FCC624]" />;
  
  return <FaTerminal className="text-sky-400" />;
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0] || null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!projects || projects.length === 0) return null;

  const handleSelect = (project) => {
    setSelectedProject(project);
    setIsPlayingVideo(false);
  };

  return (
    <div className="relative w-full py-12 font-sans select-text">
      {/* Background Ambient Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-600/10 via-teal-500/5 to-indigo-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-950/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-3">
          <FaCode className="text-sm" />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">Projects.</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Production-grade applications and systems demonstrating full-stack engineering, secure APIs, and responsive design.
        </p>
      </div>

      {/* Main Split-Screen Architecture Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto relative z-10 items-start">
        
        {/* ================= LEFT: PROJECT MANIFEST (5 Columns) ================= */}
        <div className="lg:col-span-5 flex flex-col gap-3 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="text-xs font-mono text-slate-400 pb-2.5 border-b border-white/10 flex items-center justify-between">
            <span className="font-semibold text-slate-300">EXPLORE MANIFEST ({projects.length})</span>
            <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE ARCHITECTURE
            </span>
          </div>

          {projects.map((project, index) => {
            const isSelected = selectedProject?.name === project.name;
            return (
              <div
                key={project.name || index}
                onClick={() => handleSelect(project)}
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative group flex items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-[#0c1427] border-sky-500/50 shadow-[0_0_25px_rgba(14,165,233,0.18)] translate-x-1"
                    : "bg-[#070d1a]/80 border-white/5 hover:border-white/20 hover:bg-[#091124]"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {/* Project Logo/Icon (যদি থাকে) অথবা ইন্ডেক্স নম্বর */}
                    {project.logo || project.icon ? (
                      typeof (project.logo || project.icon) === "string" ? (
                        <img 
                          src={project.logo || project.icon} 
                          alt="" 
                          className="w-5 h-5 rounded object-contain shrink-0" 
                        />
                      ) : (
                        <span className="text-sky-400 text-sm shrink-0">
                          {project.logo || project.icon}
                        </span>
                      )
                    ) : (
                      <span className="text-[11px] font-mono font-bold text-slate-500 shrink-0">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    )}

                    <h3 className={`text-sm sm:text-base font-bold truncate transition-colors ${
                      isSelected ? "text-sky-300" : "text-slate-200 group-hover:text-white"
                    }`}>
                      {project.name}
                    </h3>
                  </div>

                  {/* Tech Stack Chips with Brand Logos */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags?.slice(0, 4).map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border flex items-center gap-1.5 ${
                          isSelected 
                            ? "bg-sky-500/10 border-sky-500/25 text-slate-200" 
                            : "bg-white/[0.03] border-white/5 text-slate-300"
                        }`}
                      >
                        <span className="text-xs">{getTechIcon(tag.name)}</span>
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="shrink-0 flex items-center">
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? "bg-sky-400 shadow-[0_0_8px_#38bdf8]" : "bg-slate-700 group-hover:bg-slate-500"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT: ACTIVE INSPECTOR VIEW (7 Columns) ================= */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-[#070d1a]/95 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between min-h-[580px]">
            
            {/* Inspector Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">Project Inspector</span>
              </div>
              
              {/* Quick Action Links */}
              <div className="flex items-center gap-2.5">
                {selectedProject?.source_code_link && (
                  <a
                    href={selectedProject.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 hover:border-white/30 transition-all font-mono"
                  >
                    <FaGithub className="text-xs" /> Code Repository
                  </a>
                )}
                {selectedProject?.live_link && (
                  <a
                    href={selectedProject.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-xs text-sky-300 border border-sky-500/30 hover:border-sky-400 transition-all font-mono font-semibold shadow-sm"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live Preview
                  </a>
                )}
              </div>
            </div>

            {/* Dynamic Viewport */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject?.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex-1 flex flex-col justify-between gap-5"
              >
                {/* Media Screen (Image / Video Player) */}
                <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group shadow-inner">
                  {isPlayingVideo ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`${selectedProject.video_link}?autoplay=1`}
                        title={selectedProject.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                      <button
                        type="button"
                        onClick={() => setIsPlayingVideo(false)}
                        className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 hover:bg-black text-white text-xs border border-white/20 backdrop-blur-md transition-all flex items-center gap-1 font-mono"
                        title="Back to Preview"
                      >
                        <FaUndo className="text-[10px]" /> Exit Video
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-full object-cover filter contrast-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent pointer-events-none" />

                      {selectedProject.video_link && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => setIsPlayingVideo(true)}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(56,189,248,0.5)] active:scale-95"
                          >
                            <FaPlay className="text-[10px]" /> Watch Demo
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Project Details with Optional Project Logo */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    {selectedProject.logo || selectedProject.icon ? (
                      typeof (selectedProject.logo || selectedProject.icon) === "string" ? (
                        <img 
                          src={selectedProject.logo || selectedProject.icon} 
                          alt="" 
                          className="w-7 h-7 rounded-lg object-contain bg-white/5 p-1 border border-white/10" 
                        />
                      ) : (
                        <span className="text-xl text-sky-400">
                          {selectedProject.logo || selectedProject.icon}
                        </span>
                      )
                    ) : (
                      <FaFolderOpen className="text-sky-400 text-lg" />
                    )}

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {selectedProject.name}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Dynamic Core Architecture Stack with Colorful Logos */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1.5 font-semibold">
                    <FaServer className="text-sky-400 text-xs" /> Core Architecture:
                  </span>
                  {selectedProject.tags?.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-mono flex items-center gap-2 shadow-sm"
                    >
                      <span className="text-sm">{getTechIcon(tag.name)}</span>
                      <span>{tag.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Inspector Footer Status */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Production Deployment
              </span>
              <span className="text-sky-400">Verified System</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");