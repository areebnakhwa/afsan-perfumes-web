import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ImageModal = ({ isOpen, onClose, imageSrc, title }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
        >
          <button
            onClick={onClose}
            className="absolute top-0 right-0 md:-right-12 z-[10000] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md border border-white/20 pointer-events-auto"
          >
            ✕
          </button>

          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
          />
          <h3 className="text-white text-2xl font-serif mt-6 tracking-widest uppercase font-bold text-center drop-shadow-lg">
            {title}
          </h3>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body,
  );
};

const CategoryCard = ({ category, theme, index, onZoom }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center group w-full max-w-[260px] md:max-w-[300px]"
    >
      <div
        onClick={() => onZoom(category)}
        className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-yellow-700 via-yellow-400 to-yellow-700 mb-5 transition-transform duration-500 shadow-2xl cursor-zoom-in hover:scale-105"
      >
        <div
          className={`w-full h-full rounded-full overflow-hidden border-4 flex items-center justify-center bg-black ${theme === "dark" ? "border-[#050505]" : "border-gray-50"}`}
        >
          <img
            src={category.img}
            alt={category.title}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>

        <div className="absolute bottom-2 right-2 bg-black/70 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          🔍
        </div>
      </div>

      <h3
        className={`text-lg md:text-2xl font-serif font-bold tracking-widest uppercase mb-1 text-center ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {category.title}
      </h3>
      <p
        className={`text-[10px] md:text-xs tracking-widest text-center px-4 uppercase font-bold ${theme === "dark" ? "text-yellow-500" : "text-yellow-600"}`}
      >
        {category.desc}
      </p>
    </motion.div>
  );
};

const FeaturedCategories = ({ theme }) => {
  const [zoomedItem, setZoomedItem] = useState(null);

  const categories = [
    {
      id: 1,
      title: "JAWAHRA",
      desc: "Notes: Fresh Citrus & Jasmine",
      img: "/jawahra.png",
    },
    {
      id: 2,
      title: "WHITE MUSK",
      desc: "Notes: Clean, Soft Musk",
      img: "/white-musk.png",
    },
    {
      id: 3,
      title: "GREATNESS",
      desc: "Notes: Rich Oud & Spicy Luxury",
      img: "/greatness.png",
    },
    {
      id: 4,
      title: "SABAH AL WARD",
      desc: "Notes: Sweet Vanilla & Florals",
      img: "/sabah-al-ward.png",
    },
    {
      id: 5,
      title: "BAHR",
      desc: "Notes: Bold Aquatic Character",
      img: "/bahr.png",
    },
    {
      id: 6,
      title: "JAZEERA",
      desc: "Notes: Deep, Bold Character",
      img: "/jazeera.png",
    },
    {
      id: 7,
      title: "ROSE NOIR",
      desc: "Notes: Rose & Oud Richness",
      img: "/rose-noir.png",
    },
  ];

  return (
    <section
      id="featured"
      className={`py-16 md:py-24 transition-colors duration-500 relative z-10 ${theme === "dark" ? "bg-[#050505]" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wide ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Featured Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            Explore our signature fragrance families crafted with rare,
            non-alcoholic concentrated oils.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-12 sm:gap-y-16 gap-x-6 sm:gap-x-8 lg:gap-x-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              theme={theme}
              index={index}
              onZoom={setZoomedItem}
            />
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!zoomedItem}
        onClose={() => setZoomedItem(null)}
        imageSrc={zoomedItem?.img}
        title={zoomedItem?.title}
      />
    </section>
  );
};

export default FeaturedCategories;
