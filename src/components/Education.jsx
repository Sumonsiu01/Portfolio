import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, fadeIn } from "../utils/motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
    {
    degree: "Cyber Security Management",
    institution: "Aston Univerisity London",
    year: "2025-2026",
  },
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "North East University Bangladesh (NEUB)",
    year: "2020 - 2025",
  },
  
];

const EducationCard = ({ education, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.8)}
    whileHover={{ scale: 1.05 }}
    className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl shadow-xl border-l-4 border-blue-500 mb-8 cursor-pointer"
  >
    {/* Timeline icon */}
    <div className="absolute -left-6 top-6 bg-blue-500 p-3 rounded-full text-white shadow-md">
      <FaGraduationCap />
    </div>

    <h3 className="text-white text-xl font-bold">{education.degree}</h3>
    <p className="text-gray-400 italic mt-1">{education.institution}</p>
    <span className="text-blue-400 font-semibold">{education.year}</span>
  </motion.div>
);

const Education = () => {
  return (
    <div className="p-8 xl:mt-12 relative">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <p className={styles.sectionSubText}>My Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      {/* Timeline vertical line */}
      <div className="absolute left-10 top-20 h-full w-1 bg-blue-500 opacity-30 rounded" />

      <div className="mt-12 flex flex-col ml-10">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;
