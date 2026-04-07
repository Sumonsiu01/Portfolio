import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaGithub } from "react-icons/fa";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* ================= PROJECT CARD ================= */

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  video_link,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          tiltMaxAngleX={10}      // Norachora komano hoyeche (Agey 45 chilo)
          tiltMaxAngleY={10}      // Norachora komano hoyeche
          perspective={1000}      // Depth thik rakha hoyeche
          scale={1.02}            // Halka zoom hobe
          transitionSpeed={1500}  // Movement onek smooth kora hoyeche
          glareEnable={true}      // Subtle glass effect
          glareMaxOpacity={0.1}   // Beshi brightness hobe na
          className="bg-tertiary p-5 rounded-3xl sm:w-[360px] w-full border border-white/5 h-full shadow-2xl transition-all duration-300 hover:border-[#915EFF]/40"
        >
          <div className="relative w-full h-[230px] group overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {/* GitHub */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-11 h-11 rounded-full bg-[#1a1a1a]/90 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:scale-110 transition-transform border border-white/10"
              >
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>

              {/* Video Play */}
              {video_link && (
                <div
                  onClick={() => setOpen(true)}
                  className="w-11 h-11 rounded-full bg-[#915EFF]/90 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:scale-110 transition-transform border border-white/10"
                >
                  <FaPlay className="text-white text-xs ml-0.5" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] tracking-tight">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </Tilt>
      </motion.div>

      {/* ================= VIDEO MODAL ================= */ }
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-[#1d1836] rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-5 text-white/60 hover:text-white text-2xl z-20 transition-colors"
              >
                ✕
              </button>

              <iframe
                width="100%"
                height="100%"
                src={video_link}
                title="Project Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ================= WORKS SECTION ================= */

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples. 
          Each project is a reflection of my journey in **Cybersecurity and Web Development**, 
          complete with source code and video demonstrations.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");