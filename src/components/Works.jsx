import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

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
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* ICON SECTION */}
            <div className="absolute inset-0 flex justify-end gap-3 m-3 card-img_hover">
              
              {/* GitHub */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

              {/* Video Demo */}
              {video_link && (
                <div
                  onClick={() => setOpen(true)}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <FaPlay className="text-white text-sm" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] h-[60%] bg-black rounded-xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-white text-xl z-10"
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="100%"
              src={video_link}
              title="Project Demo"
              frameBorder="0"
              allowFullScreen
              className="rounded-xl"
            ></iframe>

          </div>
        </div>
      )}
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
          Following projects showcase my skills and experience
          through real-world examples of my work. Each project
          includes source code and video demo.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
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

/* ================= EXPORT ================= */

export default SectionWrapper(Works, "work");
