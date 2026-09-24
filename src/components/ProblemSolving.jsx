import React from "react";
import { motion } from "framer-motion";
import { 
  FaExternalLinkAlt, 
  FaBrain, 
  FaCheckDouble, 
  FaChartLine,
  FaTerminal 
} from "react-icons/fa";
import { 
  SiLeetcode, 
  SiCodeforces, 
  SiHackerrank, 
  SiCodechef 
} from "react-icons/si";
import { SectionWrapper } from "../hoc";
import { competitiveProfiles } from "../constants";

// প্ল্যাটফর্ম অনুযায়ী অফিসিয়াল আইকন রিটার্ন করার ফাংশন
const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "leetcode":
      return <SiLeetcode className="text-[#FFA116]" />;
    case "codeforces":
      return <SiCodeforces className="text-[#1890FF]" />;
    case "hackerrank":
      return <SiHackerrank className="text-[#00EA64]" />;
    case "codechef":
      return <SiCodechef className="text-[#A0522D]" />;
    default:
      return <FaBrain className="text-sky-400" />;
  }
};

const ProblemSolving = () => {
  return (
    <div className="relative w-full py-12 font-sans select-text" id="coding">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-600/10 via-teal-500/5 to-indigo-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-950/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-3">
          <FaBrain className="text-sm" />
          <span>Algorithmic Thinking</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">Programming.</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Demonstrated proficiency in data structures, mathematical logic, and algorithm design across major competitive programming platforms.
        </p>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
        {competitiveProfiles.map((item, index) => {
          return (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-full rounded-[23px] bg-[#070d1a]/95 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                
                {/* Subtle Hover Backlight */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-2xl group-hover:scale-105 transition-transform duration-300">
                      {getPlatformIcon(item.platform)}
                    </div>

                    <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-[11px] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.status}
                    </span>
                  </div>

                  {/* Platform & Username */}
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors">
                    {item.platform}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    @{item.username}
                  </p>

                  {/* Primary Metric Card */}
                  <div className="mt-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">
                      {item.metricLabel}
                    </span>
                    <div className="text-lg font-extrabold text-white font-mono flex items-center gap-2">
                      <FaChartLine className="text-sky-400 text-sm" />
                      <span>{item.metricValue}</span>
                    </div>
                  </div>

                  {/* Highlight/Topics */}
                  <p className="mt-4 text-xs text-slate-300/90 leading-relaxed font-sans flex items-start gap-2">
                    <FaCheckDouble className="text-teal-400 text-xs shrink-0 mt-0.5" />
                    <span>{item.highlight}</span>
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {item.badge}
                  </span>

                  <a
                    href={item.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Inspect</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(ProblemSolving, "coding");