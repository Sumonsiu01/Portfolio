import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050816] py-10 border-t border-white/5">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center gap-6`}>
        
        {/* Logo / Name Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-white text-[24px] font-bold tracking-wider">
            SUMON<span className="text-[#915EFF]">.AHMED</span>
          </h3>
          <p className="text-secondary text-[14px] mt-2 italic">
            Cybersecurity Enthusiast | Full Stack Developer
          </p>
        </motion.div>

        {/* Social Links - Glass Pill Style */}
        <div className="flex items-center gap-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/Sumonsiu01", color: "hover:text-white" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sumon-ahmed1999", color: "hover:text-blue-500" },
            { icon: <FaEnvelope />, link: "mailto:selimalsumon@gmail.com", color: "hover:text-red-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary text-xl transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20 shadow-lg`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/5 mt-4" />

        {/* Copyright Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-[12px] uppercase tracking-widest font-medium">
          <p>© {currentYear} All Rights Reserved.</p>
          <p>
            Designed & Built with <span className="text-red-500">❤️</span> by 
            <span className="text-white ml-1">Sumon Ahmed</span>
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600 opacity-10 blur-[80px] -z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600 opacity-10 blur-[80px] -z-10" />
    </footer>
  );
};

export default Footer;