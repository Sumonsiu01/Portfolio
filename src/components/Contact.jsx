import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, fadeIn } from "../utils/motion";

const contactDetails = [
  {
    type: "Name",
    value: "Sumon Ahmed",
  },
  {
    type: "Phone",
    value: "+44 123 4567 890",
  },
  {
    type: "Email",
    value: "selimalsumon@gmail.com",
  },
  {
    type: "LinkedIn",
    value: "www.linkedin.com/in/sumon-ahmed1999",
  },
  {
    type: "GitHub",
    value: "https://github.com/Sumonsiu01",
  },
];

const ContactList = () => {
  return (
    <div className="xl:mt-12 flex flex-col gap-8 p-8 bg-black-100 rounded-2xl relative">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col gap-6"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-col gap-6 mt-4">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
              className="flex flex-col md:flex-row md:gap-4 bg-tertiary p-4 rounded-lg cursor-pointer"
            >
              <span className="font-bold text-white w-32">{item.type}:</span>
              {item.type === "LinkedIn" || item.type === "GitHub" ? (
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
      </motion.div>
    </div>
  );
};

export default ContactList;
