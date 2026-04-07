import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // top-2 use kora hoyeche jate ekdom mathay thake
    <nav className="fixed top-2 w-full z-50 flex justify-center px-6 transition-all duration-300">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // py-2.5 use kora hoyeche height ektu komanor jonno
        className={`flex items-center justify-between gap-10 px-8 py-2.5 rounded-full border border-white/10 transition-all duration-500 ${
          scrolled 
            ? "bg-[#050816]/70 backdrop-blur-xl shadow-2xl w-full max-w-xl" 
            : "bg-transparent w-full max-w-4xl"
        }`}
      >
        {/* Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row items-center justify-center w-full gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className="relative group">
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } text-[13px] font-semibold tracking-[2px] uppercase hover:text-white transition-all duration-300`}
              >
                {nav.title}
              </a>
              
              {/* Thinner Glow Indicator */}
              {active === nav.title && (
                <motion.div 
                  layoutId="activeGlow"
                  className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_#3b82f6]"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer transition-transform"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-16 left-6 right-6 p-8 bg-[#050816]/95 backdrop-blur-3xl border border-white/10 rounded-[24px] z-40 shadow-2xl"
          >
            <ul className="list-none flex flex-col items-center gap-6">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[18px] font-bold tracking-widest uppercase ${
                    active === nav.title ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;