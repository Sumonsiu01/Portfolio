import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTerminal, FaShieldAlt } from "react-icons/fa";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] pt-12 pb-8 border-t border-cyan-500/20 overflow-hidden font-mono">
      {/* Top Cyber Line Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />

      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 right-1/4 w-72 h-36 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-36 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center gap-8 relative z-10`}>
        
        {/* Logo & Operational Status */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-[11px] uppercase tracking-widest mb-1">
            <FaTerminal className="text-[9px]" />
            SYS_TERMINATION // OK
          </div>

          <h3 className="text-white text-2xl md:text-3xl font-black tracking-wider">
            SUMON<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">.AHMED</span>
          </h3>

          <p className="text-slate-400 text-xs md:text-sm tracking-wide flex items-center justify-center gap-2">
            <FaShieldAlt className="text-cyan-400 text-xs" />
            <span>Cybersecurity Specialist & Full Stack Engineer</span>
          </p>
        </motion.div>

        {/* Social Uplink Nodes */}
        <div className="flex items-center gap-3">
          {[
            { id: "github", icon: <FaGithub />, link: "https://github.com/Sumonsiu01", label: "GitHub" },
            { id: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/sumon-ahmed1999", label: "LinkedIn" },
            { id: "email", icon: <FaEnvelope />, link: "mailto:selimalsumon@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              target={social.id === "email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#080d1a] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all text-base"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Grid Separator */}
        <div className="w-full h-[1px] bg-white/5" />

        {/* Telemetry Footer Meta */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-500 uppercase tracking-widest">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            © {currentYear} ALL_RIGHTS_RESERVED
          </p>

          <p className="text-slate-400">
            ENGINEERED WITH <span className="text-cyan-400">REACT</span> & <span className="text-cyan-400">DJANGO</span>
          </p>

          <div className="flex gap-4 text-slate-400">
            <span className="hover:text-cyan-300 cursor-pointer transition-colors">SECURITY_AUDIT</span>
            <span className="hover:text-cyan-300 cursor-pointer transition-colors">SYS_STATUS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;