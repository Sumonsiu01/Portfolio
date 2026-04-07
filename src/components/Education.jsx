import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGraduationCap, FaShieldAlt, FaCode } from "react-icons/fa";

const educationData = [
  {
    degree: "Cyber Security Management",
    institution: "Aston University London",
    year: "2025 - 2026",
    desc: "Specializing in GRM, ISO 27001, and Cyber Readiness Posture Plans.",
    icon: <FaShieldAlt className="text-blue-400" />,
    color: "from-blue-500/20 to-purple-600/20",
  },
  {
    degree: "B.Sc in Computer Science",
    institution: "NEUB",
    year: "2020 - 2025",
    desc: "Foundation of Software Engineering, Algorithms, and Web Security.",
    icon: <FaCode className="text-purple-400" />,
    color: "from-purple-500/20 to-pink-600/20",
  },
];

const Education = () => {
  return (
    <section className="relative w-full py-24 bg-[#050816] overflow-hidden" id="education">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className={`${styles.sectionSubText} !text-left`}>Academic Background</p>
          <h2 className={`${styles.sectionHeadText} !text-left`}>Education.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative group p-[1px] rounded-[30px] bg-gradient-to-br ${edu.color} border border-white/10`}
            >
              <div className="bg-[#0a0a1a] rounded-[29px] p-8 h-full flex flex-col justify-between overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaGraduationCap size={120} />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-2xl">
                      {edu.icon}
                    </div>
                    <div>
                      <span className="text-sm font-mono text-secondary tracking-widest">{edu.year}</span>
                      <h3 className="text-white text-xl font-bold group-hover:text-[#915EFF] transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-blue-400 font-medium mb-4">{edu.institution}</p>
                  <p className="text-secondary text-[16px] leading-relaxed">
                    {edu.desc}
                  </p>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-8 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#915EFF] to-transparent transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;