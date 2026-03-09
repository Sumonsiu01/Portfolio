import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const contactDetails = [
  { type: "Name", value: "Sumon Ahmed" },
  { type: "Phone", value: "+44 7756 020640" },
  { type: "Email", value: "selimalsumon@gmail.com" },
  { type: "LinkedIn", value: "https://www.linkedin.com/in/sumon-ahmed1999" },
  { type: "GitHub", value: "https://github.com/Sumonsiu01" },
];

const ContactList = () => {
  return (
    <section id="contact" className="relative py-12 bg-[#0f172a] overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 70, damping: 15 }}
              whileHover={{ scale: 1.02, y: -3, boxShadow: "0 8px 25px rgba(0,0,0,0.5)" }}
              className="flex flex-col md:flex-row md:items-center md:gap-4 bg-tertiary p-4 rounded-lg cursor-pointer"
            >
              <span className="font-bold text-white w-32">{item.type}:</span>

              {item.type === "Email" ? (
                <a
                  href={`mailto:${item.value}`}
                  className="text-blue-400 underline hover:text-blue-300 break-all"
                >
                  {item.value}
                </a>
              ) : item.type === "LinkedIn" || item.type === "GitHub" ? (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline break-all"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-white">{item.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactList;