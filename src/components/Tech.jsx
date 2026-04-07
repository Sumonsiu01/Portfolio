import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm font-mono tracking-[0.3em] uppercase">Technical Proficiency</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group w-32 h-32 md:w-40 md:h-40"
            >
              {/* Animated Ring Around the Icon */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500 scale-110 group-hover:animate-pulse" />
              
              {/* Glass Card */}
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                
                {/* 3D Ball Container */}
                <div className="w-20 h-20 md:w-24 md:h-24 cursor-grab active:cursor-grabbing">
                  <Suspense fallback={<div className="w-full h-full bg-white/5 rounded-full animate-spin-slow" />}>
                    <BallCanvas icon={tech.icon} />
                  </Suspense>
                </div>

                {/* Floating Tooltip Name */}
                <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-12 transition-all duration-300">
                  <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold whitespace-nowrap shadow-lg">
                    {tech.name}
                  </span>
                </div>
              </div>

              {/* Dynamic Glow Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-500 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");