import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTerminal, FaCode, FaServer, FaBug, FaLock } from "react-icons/fa";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// মাউস-ট্র্যাকিং স্পটলাইট রোল কার্ড
const CyberRoleCard = ({ title, icon, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl border border-white/10 bg-[#060a14]/90 p-5 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 group select-none flex flex-col justify-between min-h-[160px]"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.18), transparent 70%)`,
        }}
      />

      {/* Card Header & Status */}
      <div className="flex items-center justify-between text-[10px] text-slate-500 z-10 border-b border-white/5 pb-2">
        <span className="text-cyan-400/80 font-mono tracking-wider">
          MODULE // 0{index + 1}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
      </div>

      {/* Icon & Title */}
      <div className="flex items-center gap-4 my-2 z-10">
        <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 p-2.5 flex items-center justify-center shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
          <img src={icon} alt={title} className="w-full h-full object-contain filter group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h4 className="text-white text-sm font-bold font-mono group-hover:text-cyan-300 transition-colors tracking-wide">
            {title}
          </h4>
          <span className="text-[11px] text-slate-400 font-mono">Verified Operational</span>
        </div>
      </div>

      {/* Cyber Indicator Foot */}
      <div className="w-full flex justify-between items-center text-[9px] text-slate-600 font-mono pt-2 border-t border-white/5 z-10">
        <span>PRIORITY: HIGH</span>
        <span className="text-cyan-400/60 font-semibold group-hover:text-cyan-400">READY</span>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative w-full pt-2 pb-12 font-mono">
      {/* Background Matrix/Grid Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <motion.div variants={textVariant()} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs uppercase tracking-[0.25em] mb-3">
          <FaTerminal className="text-[10px]" />
          Personnel Dossier // Decrypted
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-mono">
          OPERATOR_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500">PROFILE</span>
        </h2>
      </motion.div>

      {/* Main Command Console (Split Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        
        {/* Left: Tactical Bio Console (5 Columns) */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="lg:col-span-5 rounded-3xl border border-cyan-500/30 bg-[#070b14]/95 backdrop-blur-2xl p-6 md:p-7 shadow-2xl flex flex-col justify-between"
        >
          <div>
            {/* Terminal Window Controls */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-cyan-400 ml-2">// IDENTITY_SPEC</span>
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CLEARANCE_LVL_4
              </span>
            </div>

            {/* Operator Bio */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 font-mono">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider mb-1">DESIGNATION</span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Full Stack Engineer & Cybersecurity Specialist
                </h3>
              </div>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-normal">
                Focused on designing robust backend infrastructures and secure multi-vendor web architectures. 
                Proficient in leveraging <strong>Python, Django, React, and PostgreSQL</strong> to build reliable systems 
                resistant to vulnerabilities, latency spikes, and scale constraints.
              </p>
            </div>
          </div>

          {/* Quick Telemetry Indicators */}
          <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-[11px] font-mono">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block">SPECIALTY</span>
              <span className="text-cyan-300 font-semibold">Secure MTV / REST</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block">PIPELINE</span>
              <span className="text-emerald-400 font-semibold">Async & Modular</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Functional Roles Matrix (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {services.map((service, index) => (
              <CyberRoleCard key={service.title} index={index} {...service} />
            ))}
          </div>

          {/* Bottom Live System Telemetry Strip */}
          <div className="p-4 rounded-2xl border border-white/10 bg-[#070b14]/70 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-cyan-400" />
              <span>DEFENSE_PROTOCOLS: ENFORCED</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-500 font-mono">UPTIME: 99.98%</span>
              <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYSTEM_OPTIMAL
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");