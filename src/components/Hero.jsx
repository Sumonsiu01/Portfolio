import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaTerminal, 
  FaFileDownload, 
  FaEnvelope, 
  FaShieldAlt, 
  FaCode, 
  FaServer, 
  FaMicrochip 
} from "react-icons/fa";
import { styles } from "../styles";
import MyProfile from "../assets/MyProfile.jpg";

const ROLES = [
  "FULL_STACK_ENGINEER",
  "CYBERSECURITY_SPECIALIST",
  "BACKEND_ARCHITECT",
  "DJANGO_REACT_DEVELOPER"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // লাইভ টার্মিনাল টাইপিং এফেক্ট লজিক
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-[#030712] font-mono flex flex-col justify-between pt-24 pb-12 select-none">
      {/* Background Cyber Mesh & Dynamic Beam Glows */}
      <div 
        className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Cockpit Display */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full my-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}>
        
        {/* Left Column: Command & Identity Terminal (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPERATIONAL // LEVEL_4 CLEARANCE</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base text-slate-400 font-bold tracking-widest uppercase">
              // INITIALIZING INTERACTION WITH
            </h2>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
              SUMON <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500">AHMED</span>
            </h1>
          </div>

          {/* Real-Time Typing Cyber Terminal Prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080d1a] border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm shadow-inner max-w-full">
            <FaTerminal className="text-cyan-400 shrink-0" />
            <span className="text-slate-500">&gt;</span>
            <span className="font-bold tracking-wider">{displayText}</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse shrink-0" />
          </div>

          {/* Bio Specs Box */}
          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
            Architecting high-throughput backend pipelines with <strong className="text-cyan-300 font-mono">Python & Django</strong>, 
            designing reactive client layers with <strong className="text-cyan-300 font-mono">React</strong>, 
            and hardening microservice communication with modern security protocols.
          </p>

          {/* Action Uplinks */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 active:scale-95 transition-all shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              <FaFileDownload /> Retrieve Dossier (CV)
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <FaEnvelope /> Open Uplink
            </a>
          </div>
        </motion.div>

        {/* Right Column: Holographic Tactical HUD Profile Frame (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-white/5 to-transparent border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] group">
            
            {/* Tactical Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-20" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-20" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400 z-20" />

            {/* Inner Container */}
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#070c18]">
              <img
                src={MyProfile}
                alt="Sumon Ahmed"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />

              {/* Ambient Scanner Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
              
              {/* Scanline Beam Animation */}
              <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee] pointer-events-none opacity-70"
              />

              {/* In-Frame HUD Meta (Bottom) */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#080d1a]/85 border border-white/10 backdrop-blur-md flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-cyan-400" />
                  <span className="text-white font-bold tracking-wider">BIOMETRIC: OK</span>
                </div>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SYNCHRONIZED
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Live System Telemetry Strip */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full relative z-10 pt-8`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-white/10 pt-6">
          
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 text-sm">
              <FaCode />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">PRIMARY_STACK</span>
              <span className="text-xs font-bold text-slate-200">React / Django</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 text-sm">
              <FaServer />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">DATABASE_ENGINE</span>
              <span className="text-xs font-bold text-slate-200">PostgreSQL / Redis</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/40 text-emerald-400 text-sm">
              <FaShieldAlt />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">SECURITY_LAYER</span>
              <span className="text-xs font-bold text-emerald-400">OWASP Hardened</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 text-sm">
              <FaMicrochip />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">SYSTEM_LATENCY</span>
              <span className="text-xs font-bold text-cyan-300">0.24ms [Optimal]</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;