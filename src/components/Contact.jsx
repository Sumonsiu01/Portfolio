import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaUser, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const contactDetails = [
  { type: "Name", value: "Sumon Ahmed", icon: <FaUser className="text-purple-500" /> },
  { type: "Phone", value: "+44 7756 020640", icon: <FaPhone className="text-blue-500" />, link: "tel:+447756020640" },
  { type: "Email", value: "selimalsumon@gmail.com", icon: <FaEnvelope className="text-red-500" />, link: "mailto:selimalsumon@gmail.com" },
  { type: "LinkedIn", value: "LinkedIn Profile", displayValue: "sumon-ahmed1999", icon: <FaLinkedin className="text-blue-600" />, link: "https://www.linkedin.com/in/sumon-ahmed1999" },
  { type: "GitHub", value: "GitHub Profile", displayValue: "Sumonsiu01", icon: <FaGithub className="text-gray-400" />, link: "https://github.com/Sumonsiu01" },
];

const ContactList = () => {
  return (
    <section id="contact" className="relative py-12 bg-[#0f172a] overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 mb-10 text-center sm:text-left"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 70, damping: 15 }}
              whileHover={{ scale: 1.01, x: 5 }}
              className="flex flex-col md:flex-row md:items-center gap-4 bg-[#1d1836]/50 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xl transition-all group"
            >
              <div className="flex items-center w-32 shrink-0 font-bold text-white text-[15px]">
                <span className="text-xl mr-3 opacity-80 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span>{item.type}:</span>
              </div>

              <div className="flex-1">
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.type.includes("GitHub") || item.type.includes("LinkedIn") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#915EFF]/20 border border-white/10 hover:border-[#915EFF]/50 rounded-full text-blue-400 hover:text-white transition-all duration-300 text-[14px] md:text-[16px] font-medium tracking-wide group"
                  >
                    {item.displayValue || item.value}
                    <FaExternalLinkAlt className="text-[10px] opacity-50 group-hover:opacity-100" />
                  </a>
                ) : (
                  <span className="text-white font-medium ml-2">{item.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactList;