import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal } from "react-icons/fa";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0]?.title || "");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const checkActiveSection = () => {
      // যদি ক্লিক করে স্ক্রোল হয় তবে মাঝের ক্যালকুলেশন সাময়িক স্কিপ করবে
      if (isClickingRef.current) return;

      // স্ক্রোল ডিটেকশন (উইন্ডো বা ডকুমেন্ট বডি যেটাই স্ক্রোল হোক)
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(currentScrollY > 20);

      // পেজের একেবারে নিচে পৌঁছালে শেষ মেনু (Contact) একটিভ হবে
      const totalHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = window.innerHeight;
      if (currentScrollY + clientHeight >= totalHeight - 50) {
        if (navLinks.length > 0) {
          setActive(navLinks[navLinks.length - 1].title);
        }
        return;
      }

      // স্ক্রিনের ৩০% থেকে ৬০% উচ্চতাকে টার্গেট ফোকাস জোন হিসেবে ধরা হয়েছে
      const focusZone = clientHeight * 0.35;

      let found = false;

      // রিভার্স লুপ যাতে নিচের সেকশনগুলো আগে প্রায়োরিটি পায়
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const nav = navLinks[i];
        
        // আইডি খোঁজা (সরাসরি এলিমেন্ট অথবা hash-span এর প্যারেন্ট)
        const el = document.getElementById(nav.id);
        if (!el) continue;

        const target = el.tagName.toLowerCase() === "span" ? (el.parentElement || el) : el;
        const rect = target.getBoundingClientRect();

        // যদি সেকশনটির টপ স্ক্রিনের ফোকাস জোনের উপরে চলে আসে এবং নিচের অংশ এখনো স্ক্রিনে থাকে
        if (rect.top <= focusZone && rect.bottom > focusZone) {
          setActive(nav.title);
          found = true;
          break;
        }
      }

      // যদি একদম উপরে থাকে তবে প্রথম আইটেম সিলেক্টেড থাকবে
      if (!found && currentScrollY < 150 && navLinks.length > 0) {
        setActive(navLinks[0].title);
      }
    };

    const handleScrollEvent = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // উইন্ডো ও ডকুমেন্ট উভয় জায়গাতেই লিসেনার এটাচ করা
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    document.addEventListener("scroll", handleScrollEvent, { passive: true });

    // ইনিশিয়াল রান
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleNavClick = (e, nav) => {
    e.preventDefault();
    setActive(nav.title);
    setToggle(false);

    isClickingRef.current = true;

    const el = document.getElementById(nav.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (nav.id === "about" || nav.id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // স্মুথ স্ক্রোল শেষ হওয়া পর্যন্ত স্পাই লুপ অফ রাখবে (৭০০ms)
    setTimeout(() => {
      isClickingRef.current = false;
    }, 700);
  };

  return (
    <nav className="fixed top-3 w-full z-50 flex justify-center px-4 font-mono select-none pointer-events-none transition-all duration-500">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`pointer-events-auto flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-[#030712]/25 backdrop-blur-md border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)] w-full max-w-2xl"
            : "bg-[#070c18]/85 backdrop-blur-xl border-white/10 shadow-lg w-full max-w-3xl"
        }`}
      >
        {/* Brand / Uplink */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, navLinks[0] || { id: "about", title: "About" })}
          className="flex items-center gap-2 text-xs text-white font-bold tracking-wider uppercase group"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">SYS_UPLINK</span>
        </a>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-3">
          {navLinks.map((nav) => {
            const isActive = active.toLowerCase() === nav.title.toLowerCase();
            return (
              <li key={nav.id} className="relative">
                <a
                  href={`#${nav.id}`}
                  onClick={(e) => handleNavClick(e, nav)}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 py-1.5 px-3 rounded-lg block ${
                    isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {nav.title}
                </a>

                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-400/40 rounded-lg -z-10 shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Terminal Port Info */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-slate-400 border-l border-white/10 pl-4">
          <FaTerminal className="text-cyan-400 text-xs" />
          <span>PORT: 443</span>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="sm:hidden flex items-center">
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setToggle(!toggle)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/40 transition-colors"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain filter invert"
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 p-5 bg-[#070c18]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl z-50 shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          >
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((nav, index) => {
                const isActive = active.toLowerCase() === nav.title.toLowerCase();
                return (
                  <li
                    key={nav.id}
                    onClick={(e) => handleNavClick(e, nav)}
                    className={`p-3 rounded-xl border transition-all text-xs font-bold tracking-widest uppercase flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        : "bg-white/[0.02] border-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span>{nav.title}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;