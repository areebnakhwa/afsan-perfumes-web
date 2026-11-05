import React, { useState } from "react";

import { motion } from "framer-motion";

import CollectionModal from "./CollectionModal";

const Hero = ({ theme, addToCart }) => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <div
      id="home"
      className={`relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden ${theme === "dark" ? "bg-transparent text-white" : "bg-transparent text-gray-900"}`}
    >
      {theme === "dark" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0"></div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/40 text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] bg-[#1a1705] shadow-[0_0_15px_rgba(234,179,8,0.1)]"
        >
          Pure Non-Alcoholic Attar Sets
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-tight py-2 text-center">
          <motion.span
            className="inline-block mr-2 md:mr-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
          >
            Experience
          </motion.span>

          <motion.span
            className="inline-block mr-2 md:mr-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,

              delay: 0.1,

              type: "spring",

              bounce: 0.4,
            }}
          >
            True
          </motion.span>

          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,

              delay: 0.2,

              type: "spring",

              bounce: 0.4,
            }}
          >
            Luxury
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`max-w-xl mx-auto text-sm sm:text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
        >
          Discover AFSAN's premium collection of alcohol-free concentrated
          perfumes, masterfully crafted for timeless elegance and lasting
          presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="pt-4"
        >
          <button
            onClick={() => setIsCollectionOpen(true)}
            className={`group inline-flex items-center gap-4 px-8 py-4 rounded-2xl border font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-2xl ${
              theme === "dark"
                ? "bg-[#181612] border-white/10 hover:border-yellow-500/50 text-white"
                : "bg-white border-black/10 hover:border-yellow-600/50 text-black"
            }`}
          >
            <span>View AFSAN Collection</span>

            <span className="text-yellow-500 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>

      <CollectionModal
        isOpen={isCollectionOpen}
        onClose={() => setIsCollectionOpen(false)}
        addToCart={addToCart}
        theme={theme}
      />
    </div>
  );
};

export default Hero;
