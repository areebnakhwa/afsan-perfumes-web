import React from "react";
import { motion } from "framer-motion";

const DiwaliBanner = ({ theme, onOpenOfferModal, onOpenCustomModal }) => {
  return (
    <section
      className={`relative py-12 md:py-16 overflow-hidden ${theme === "dark" ? "bg-[#050505]" : "bg-gray-50"}`}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-600/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`border border-yellow-500/30 rounded-3xl p-6 md:p-10 shadow-[0_0_30px_rgba(234,179,8,0.15)] ${theme === "dark" ? "bg-[#111]/80 backdrop-blur-md" : "bg-white/80 backdrop-blur-md"}`}
        >
          <h2
            className={`text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wide uppercase ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Diwali Exclusive Offers ✨
          </h2>
          <p
            className={`text-sm md:text-lg mb-8 tracking-widest uppercase font-bold ${theme === "dark" ? "text-yellow-500" : "text-yellow-600"}`}
          >
            Luxury Gifting • Limited Time Only
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Button 1: Buy 2 Get 1 Free */}
            <button
              onClick={onOpenOfferModal}
              className="w-full md:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)] flex flex-col items-center"
            >
              <span>Get Diwali Special Offers</span>
              <span className="text-[10px] opacity-80 mt-1">
                Buy 2 Get 1 Free 🎁
              </span>
            </button>

            {/* Button 2: Customize Your Set (NAYA BUTTON) */}
            <button
              onClick={onOpenCustomModal}
              className={`w-full md:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 border-2 flex flex-col items-center hover:scale-105 ${
                theme === "dark"
                  ? "border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                  : "border-yellow-600 text-yellow-600 hover:bg-yellow-600/10"
              }`}
            >
              <span>Customize Your Box</span>
              <span className="text-[10px] opacity-80 mt-1">
                Pick 3 Attars + Samples ✨
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiwaliBanner;
