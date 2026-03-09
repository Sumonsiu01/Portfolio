import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className="py-12 bg-[#0f172a]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-10">
          Technologies
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-center items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center bg-[#1e293b] p-4 rounded-xl shadow-lg relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 70 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.5)" }}
            >
              {/* Floating Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-20 animate-ping"></div>

              {/* Tech Ball */}
              <div className="w-24 sm:w-28 h-24 sm:h-28">
                <BallCanvas icon={tech.icon} />
              </div>

              {/* Tech Name */}
              <span className="mt-2 text-white font-semibold text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");