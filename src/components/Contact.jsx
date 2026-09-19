import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCopy, 
  FaCheck,
  FaTerminal
} from "react-icons/fa";

const contactDetails = [
  { 
    id: "NAME", 
    label: "OPERATOR", 
    value: "Sumon Ahmed", 
    icon: <FaUser className="text-cyan-400" /> 
  },
  { 
    id: "PHONE", 
    label: "SECURE_LINE", 
    value: "+44 7756 020640", 
    icon: <FaPhoneAlt className="text-emerald-400" />, 
    link: "tel:+447756020640",
    canCopy: true
  },
  { 
    id: "EMAIL", 
    label: "DISPATCH_MAIL", 
    value: "selimalsumon@gmail.com", 
    icon: <FaEnvelope className="text-rose-400" />, 
    link: "mailto:selimalsumon@gmail.com",
    canCopy: true
  },
  { 
    id: "LINKEDIN", 
    label: "NEURAL_NET", 
    value: "sumon-ahmed1999", 
    icon: <FaLinkedinIn className="text-sky-400" />, 
    link: "https://www.linkedin.com/in/sumon-ahmed1999" 
  },
  { 
    id: "GITHUB", 
    label: "CODE_REPOSITORY", 
    value: "Sumonsiu01", 
    icon: <FaGithub className="text-slate-300" />, 
    link: "https://github.com/Sumonsiu01" 
  },
];

const ContactList = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Background Matrix/Grid & Beam Glows */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Communication Protocol
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-mono">
            ESTABLISH_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500">UPLINK</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto mt-3 font-mono leading-relaxed">
            Open for software engineering opportunities, backend architecture collaborations, and technical consultations.
          </p>
        </motion.div>

        {/* Contact Matrix Shell */}
        <div className="relative rounded-3xl border border-cyan-500/30 bg-[#080d1a]/95 p-6 md:p-8 backdrop-blur-2xl shadow-2xl">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-cyan-400 ml-2">// SIGNAL_RECEIVER_READY</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
              <FaTerminal className="text-cyan-400" />
              <span>PORT: 443 [TLSv1.3]</span>
            </div>
          </div>

          {/* Contact Node Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactDetails.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative p-4 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-300 flex items-center justify-between gap-4 group"
              >
                {/* Left: Icon & Details */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 text-lg group-hover:border-cyan-400/40 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono font-medium text-slate-200 group-hover:text-cyan-300 transition-colors truncate block">
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Right: Actions (Copy / Launch) */}
                <div className="flex items-center gap-2 shrink-0">
                  {item.canCopy && (
                    <button
                      type="button"
                      aria-label={`Copy ${item.id}`}
                      onClick={() => handleCopy(item.id, item.value)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all text-xs"
                      title="Copy to clipboard"
                    >
                      {copiedId === item.id ? (
                        <FaCheck className="text-emerald-400 text-xs" />
                      ) : (
                        <FaCopy className="text-xs" />
                      )}
                    </button>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-mono border border-cyan-500/30 transition-all"
                    >
                      <span>Connect</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Footer Indicator */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-slate-500">
            <span>LOCATION: ENGLAND, UK</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              AVAILABLE_FOR_HIRE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactList;