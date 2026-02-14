import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import MyProfile from "../assets/MyProfile.jpg"; // image path ঠিক রাখো

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Canvas as background */}
      <ComputersCanvas className="absolute inset-0 z-0" />

      {/* Hero content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center gap-10 z-20`}
      >
        {/* Hero text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sumon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let's Explore me <br className="sm:block hidden" />
          </p>
        </div>

        {/* Hero image */}
        {/* <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={MyProfile}
            alt="Sumon"
            className="w-64 sm:w-80 md:w-96 h-auto rounded-xl shadow-2xl object-cover"
          />
        </div> */}

        {/* Left vertical line + dot (desktop only) */}
        <div className="hidden lg:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
