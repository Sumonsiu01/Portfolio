import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTerminal, 
  FaFileDownload, 
  FaEnvelope, 
  FaShieldAlt, 
  FaCode, 
  FaFingerprint, 
  FaCheck, 
  FaCopy, 
  FaServer,
  FaLock,
  FaLayerGroup
} from "react-icons/fa";
import { styles } from "../styles";
import MyProfile from "../assets/MyProfile.jpg";

const MATRIX_CHARS = "0101010101ABCDEF0123456789$#@%&*";

const Hero = () => {
  const [decryptedName, setDecryptedName] = useState("SUMON AHMED");
  const [activeTab, setActiveTab] = useState("AVATAR"); // AVATAR | SECURITY | STACK
  const [copiedCmd, setCopiedCmd] = useState(false);

  // Controlled, subtle decryption reveal on load
  useEffect(() => {
    const originalText = "SUMON AHMED";
    let iteration = 0;
    const interval = setInterval(() => {
      setDecryptedName(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return originalText[index];
            if (letter === " ") return " ";
            return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("npx sumon-ahmed-portfolio");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-[#040812] font-mono flex items-center justify-center pt-24 pb-16 select-text">
      
      {/* Precision Engineering Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, #000 65%, transparent 100%)",
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-cyan-600/[0.08] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[560px] h-[560px] bg-indigo-600/[0.09] rounded-full blur-[190px] pointer-events-none" />

      {/* Main Command Hub */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center`}>
        
        {/* ================= LEFT: IDENTITY & VALUE PROPOSITION (7 Columns) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-cyan-300 text-xs tracking-wider uppercase backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>SYSTEM ACTIVE // UK NODE</span>
          </div>

          {/* Core Name & Title Hierarchy */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm text-slate-400 font-semibold tracking-[0.22em] uppercase block">
              SOFTWARE ENGINEER • BACKEND • CYBERSECURITY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                {decryptedName}
              </span>
            </h1>
          </div>

          {/* Technical Scope Card */}
          <div className="p-5 rounded-2xl bg-[#070d1a]/85 border border-cyan-500/20 max-w-xl mx-auto lg:mx-0 text-left backdrop-blur-xl shadow-2xl relative">
            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2.5 border-b border-white/5 mb-3 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <FaTerminal className="text-[10px]" />
                SYS_EXEC: role_profile.sh
              </span>
              <span className="text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                VERIFIED
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Software Engineer specializing in robust backend architectures, distributed async tasks, 
              and defensive systems using <strong className="text-cyan-300 font-mono">Python, Django, React, Redis, Celery & MySQL</strong>. Focused on hardened REST APIs and scalable microservices.
            </p>

            {/* CLI Quick Action Box */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 font-mono text-[11px]">
              <span className="text-slate-400 truncate">
                <span className="text-cyan-400">$</span> npx sumon-ahmed-portfolio
              </span>
              <button
                type="button"
                onClick={handleCopyCommand}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 transition-colors shrink-0"
                title="Copy CLI command"
              >
                {copiedCmd ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>
          </div>

          {/* Action Uplinks */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              <FaFileDownload /> Retrieve CV [PDF]
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/60 font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              <FaEnvelope /> Establish Uplink
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT: INTERACTIVE COCKPIT WORKSTATION (5 Columns) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="w-full max-w-sm rounded-3xl border border-cyan-500/25 bg-[#060b17]/90 backdrop-blur-2xl p-5 shadow-[0_0_40px_rgba(6,182,212,0.12)]">
            
            {/* Cockpit Window Header & Mode Switcher */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Mode Tabs */}
              <div className="flex gap-1 p-1 rounded-lg bg-black/40 border border-white/5 text-[10px]">
                {["AVATAR", "SECURITY", "STACK"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-1 rounded font-bold transition-all ${
                      activeTab === tab
                        ? "bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Screen */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center p-2">
              <AnimatePresence mode="wait">
                
                {/* 1. Profile Hologram View */}
                {activeTab === "AVATAR" && (
                  <motion.div
                    key="avatar"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full rounded-xl overflow-hidden"
                  >
                    <img
                      src={MyProfile}
                      alt="Sumon Ahmed"
                      className="w-full h-full object-cover filter contrast-[1.05] grayscale-[15%]"
                    />
                    
                    {/* Controlled, Subtle Laser Scan */}
                    <motion.div
                      initial={{ top: "0%" }}
                      animate={{ top: "100%" }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_8px_#22d3ee] pointer-events-none"
                    />

                    {/* Bottom Status Layer */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-[#040812]/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px]">
                      <span className="text-cyan-300 flex items-center gap-1.5">
                        <FaFingerprint /> BIOMETRIC_ID
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        SYNCHRONIZED
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* 2. Security Engineering Dashboard */}
                {activeTab === "SECURITY" && (
                  <motion.div
                    key="security"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex flex-col justify-between p-3 text-[11px] font-mono space-y-2 select-text"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 border-b border-white/10 pb-2">
                      <FaShieldAlt className="text-sm" />
                      <span className="font-bold tracking-wider">DEFENSIVE PROTOCOLS</span>
                    </div>

                    <div className="space-y-2 text-slate-300">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex justify-between items-center">
                        <span className="text-slate-400">ACCESS_CONTROL:</span>
                        <span className="text-emerald-400 font-semibold">JWT / RBAC / Sessions</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex justify-between items-center">
                        <span className="text-slate-400">INPUT_SANITIZATION:</span>
                        <span className="text-cyan-300">SQLi & XSS Mitigation</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex justify-between items-center">
                        <span className="text-slate-400">API_PROTECTION:</span>
                        <span className="text-indigo-300">Rate Limiting & CORS</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-center text-[10px] text-cyan-300 font-semibold">
                      SECURITY FOCUS: WEB DEFENSE & AUDITING
                    </div>
                  </motion.div>
                )}

                {/* 3. Tech Stack Architecture View */}
                {activeTab === "STACK" && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex flex-col justify-between p-3 text-[11px] font-mono select-text"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 border-b border-white/10 pb-2">
                      <FaCode className="text-sm" />
                      <span className="font-bold tracking-wider">CORE TECH STACK</span>
                    </div>

                    <div className="space-y-2 text-slate-300">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                          <span className="flex items-center gap-1.5 text-slate-200">
                            <FaServer className="text-cyan-400" /> Backend
                          </span>
                          <span className="text-cyan-300 font-semibold">Core Specialization</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Python, Django, Django REST Framework
                        </div>
                      </div>

                      <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                          <span className="flex items-center gap-1.5 text-slate-200">
                            <FaLayerGroup className="text-teal-400" /> Frontend & Async
                          </span>
                          <span className="text-teal-300 font-semibold">Pipelines & State</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          React, Redis, Celery Tasks
                        </div>
                      </div>

                      <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                        <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                          <span className="flex items-center gap-1.5 text-slate-200">
                            <FaLock className="text-indigo-400" /> Database & Cloud
                          </span>
                          <span className="text-indigo-300 font-semibold">Infra Layer</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          MySQL, Docker, AWS EC2/S3
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-500 text-center">
                      INFRASTRUCTURE: CONTAINERIZED & CLOUD-READY
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Cockpit Base Live Feed */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR ROLES
              </span>
              <span className="text-cyan-400 font-bold uppercase tracking-wider">
                UNITED KINGDOM
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;