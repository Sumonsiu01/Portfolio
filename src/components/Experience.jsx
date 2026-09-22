import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(7, 13, 26, 0.92)",
        color: "#fff",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "22px",
        backdropFilter: "blur(16px)",
        padding: "2rem",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(7, 13, 26, 0.92)" 
      }}
      date={
        <span className="font-mono text-xs sm:text-sm text-sky-400 font-semibold tracking-wider flex items-center gap-1.5 lg:inline-flex">
          <FaCalendarAlt className="text-xs opacity-75" />
          {experience.date}
        </span>
      }
      iconStyle={{ 
        background: experience.iconBg || "#070d1a",
        boxShadow: "0 0 0 4px rgba(56, 189, 248, 0.3), inset 0 2px 0 rgba(0,0,0,.2), 0 4px 15px rgba(0,0,0,.4)",
        border: "1px solid rgba(255, 255, 255, 0.15)"
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[58%] h-[58%] object-contain"
          />
        </div>
      }
    >
      <div className="space-y-1">
        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
          {experience.title}
        </h3>
        <p className="text-sky-400 font-medium text-sm sm:text-base !mt-0 font-mono">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 space-y-2.5 border-t border-white/5 pt-4">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 font-sans"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative w-full py-8 font-sans select-text">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-600/[0.07] rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-950/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-3">
          <FaAward className="text-sm" />
          <span>Milestones & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">Experience.</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Key achievements, industry involvement, and leadership roles across academic and community initiatives.
        </p>
      </motion.div>

      {/* Timeline with unified sleek line */}
      <div className="mt-12 flex flex-col relative z-10">
        <VerticalTimeline lineColor="rgba(56, 189, 248, 0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");