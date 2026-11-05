import React from "react";
import { motion } from "framer-motion";

const DiwaliBanner = ({ theme }) => {
  return (
    <section
      className={`px-4 py-8 md:py-12 ${theme === "dark" ? "bg-[#050505]" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          // Glowing border effect
          className="relative overflow-hidden rounded-[2rem] p-[2px] bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
        >
          {/* Inner content box */}
          <div
            className={`relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10 md:px-12 md:py-12 rounded-[30px] ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"} backdrop-blur-sm overflow-hidden`}
          >
            {/* Background Glow Animation */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 pointer-events-none"
            />

            {/* Left Side: Text Content */}
            <div className="text-center md:text-left z-20">
              <motion.div
                animate={{
                  textShadow: [
                    "0px 0px 5px rgba(234,179,8,0.4)",
                    "0px 0px 15px rgba(234,179,8,0.8)",
                    "0px 0px 5px rgba(234,179,8,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-yellow-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4"
              >
                <span>🪔</span> Shubh Diwali <span>🪔</span>
              </motion.div>

              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                Celebrate this Diwali with <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  AFSAN Perfumes
                </span>
              </h2>

              <p
                className={`text-sm sm:text-base max-w-lg mx-auto md:mx-0 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                Light up your festive season with our luxury attar gift sets.
                The perfect gift for your loved ones. Get up to 40% Off today!
              </p>
            </div>

            {/* Right Side: CTA Button */}
            <div className="shrink-0 z-20">
              <a href="#products" className="relative inline-flex group">
                {/* Button Glow Effect */}
                <div className="absolute transition-all duration-700 opacity-60 inset-0 bg-yellow-500 rounded-2xl blur-lg group-hover:opacity-100 group-hover:blur-xl"></div>
                <button className="relative inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold text-black uppercase tracking-widest transition-all duration-200 bg-yellow-500 rounded-2xl hover:bg-yellow-400 shadow-xl">
                  Shop Diwali Offers ✨
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiwaliBanner;
