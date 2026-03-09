import { motion } from "framer-motion";
import { styles } from "../styles";
import MyProfile from "../assets/MyProfile.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[#0f172a]">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-30 blur-[120px]" />

      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between h-screen`}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sumon</span>
          </h1>

          <p className={`${styles.heroSubText} mt-6 text-gray-300 max-w-xl`}>
            Software Engineer & AI Enthusiast
            <br />I build scalable web applications using
            <span className="text-[#915EFF]"> React, Django & AI</span>.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-5 justify-center lg:justify-start">
            <a
              href="/cv.pdf"
              target="_blank" // new tab খুলবে
              rel="noopener noreferrer"
              download
              className="px-7 py-3 bg-[#915EFF] text-white rounded-xl font-medium hover:scale-105 transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-[#915EFF] text-white rounded-xl hover:bg-[#915EFF] transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mt-10 lg:mt-0"
        >
          <div className="relative">
            <img
              src={MyProfile}
              alt="Sumon"
              className="w-72 h-72 object-cover rounded-full border-4 border-[#915EFF] shadow-2xl"
            />

            {/* glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-ping opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
