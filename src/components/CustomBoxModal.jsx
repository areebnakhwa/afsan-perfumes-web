import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const attarsData = [
  { id: 1, name: "Jawahra", img: "/jawahra.png" },
  { id: 2, name: "White Musk", img: "/white-musk.png" },
  { id: 3, name: "Greatness", img: "/greatness.png" },
  { id: 4, name: "Sabah Al Ward", img: "/sabah-al-ward.png" },
  { id: 5, name: "Bahr", img: "/bahr.png" },
  { id: 6, name: "Jazeera", img: "/jazeera.png" },
  { id: 7, name: "Rose Noir", img: "/rose-noir.png" },
];

const CustomBoxModal = ({ isOpen, onClose, theme }) => {
  const [selectedAttars, setSelectedAttars] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleSelection = (attar) => {
    if (selectedAttars.find((item) => item.id === attar.id)) {
      setSelectedAttars(selectedAttars.filter((item) => item.id !== attar.id));
    } else {
      if (selectedAttars.length < 3) {
        setSelectedAttars([...selectedAttars, attar]);
      }
    }
  };

  const handleWhatsAppCheckout = () => {
    if (selectedAttars.length !== 3) return;
    const attarNames = selectedAttars
      .map((a, i) => `${i + 1}. ${a.name}`)
      .join("%0A");
    const message = `Hello AFSAN, I want to order a Custom Diwali Box! 🎁%0A    %0A*My 3 Selected Attars:*%0A${attarNames}%0A%0A✨ *Includes 2 Surprise Samples*%0A%0A*Total Price: ₹599*`;
    window.open(`https://wa.me/918356915340?text=${message}`, "_blank");
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-4xl h-[90vh] max-h-[850px] flex flex-col rounded-xl md:rounded-3xl shadow-2xl overflow-hidden border ${
              theme === "dark"
                ? "bg-[#0a0a0a] border-yellow-500/30"
                : "bg-white border-yellow-600/30"
            }`}
          >
            {/* Header: Fully Responsive Hero Image without Squishing */}
            <div className="relative shrink-0 w-full pt-[60%] sm:pt-[45%] md:pt-[35%] bg-black">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-900/80 text-white hover:bg-red-500 rounded-full transition-all border border-white/20 z-20 shadow-md backdrop-blur-md"
              >
                ✕
              </button>

              <img
                src="/group-attars.jpg"
                alt="Afsan 7 Attars"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end items-center pb-2 md:pb-4">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-wider drop-shadow-lg text-center px-4">
                  Build Your Signature Box
                </h2>
              </div>
            </div>

            {/* Selection Status Bar */}
            <div
              className={`shrink-0 text-center py-2.5 md:py-4 px-4 border-b ${theme === "dark" ? "border-gray-800 bg-[#0d0d0d]" : "border-gray-200 bg-gray-50"}`}
            >
              <p className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1.5 md:mb-2">
                Select Any 3 Attars (6ml) and get 2 free surprise samples (3ml)
              </p>
              <div className="flex items-center justify-center">
                <span
                  className={`px-4 py-1 md:py-1.5 rounded-full text-xs font-bold border transition-colors ${selectedAttars.length === 3 ? "bg-green-500/20 text-green-400 border-green-500/40 shadow-[0_0_10px_rgba(37,211,102,0.2)]" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"}`}
                >
                  {selectedAttars.length} / 3 Selected
                </span>
              </div>
            </div>

            {/* Scrollable Grid Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 modal-scroll min-h-0">
              <style>{`.modal-scroll::-webkit-scrollbar { width: 5px; } .modal-scroll::-webkit-scrollbar-thumb { background: #4b5563; border-radius: 10px; }`}</style>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-4">
                {attarsData.map((attar) => {
                  const isSelected = selectedAttars.find(
                    (item) => item.id === attar.id,
                  );
                  return (
                    <div
                      key={attar.id}
                      onClick={() => toggleSelection(attar)}
                      className={`cursor-pointer rounded-xl flex flex-col overflow-hidden border-2 transition-all duration-300 group ${
                        isSelected
                          ? "border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] scale-[1.02] bg-[#1a1a1a]"
                          : theme === "dark"
                            ? "border-gray-800 hover:border-gray-600 bg-black"
                            : "border-gray-200 hover:border-gray-400 bg-white"
                      }`}
                    >
                      <div className="relative w-full aspect-square bg-black/5 shrink-0 overflow-hidden">
                        <img
                          src={attar.img}
                          alt={attar.name}
                          className="absolute inset-0 w-full h-full object-contain p-2 md:p-3 transition-transform duration-500 group-hover:scale-110"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl md:text-2xl font-bold shadow-lg scale-in-center">
                              ✓
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        className={`p-2.5 md:p-3 text-center flex-1 flex items-center justify-center ${isSelected ? "bg-yellow-500 text-black" : theme === "dark" ? "text-gray-200" : "text-gray-900"}`}
                      >
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider leading-tight">
                          {attar.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Surprise Box Note */}
              <div
                className={`mt-2 mb-2 p-3 md:p-5 rounded-xl border flex flex-col items-center justify-center text-center shadow-inner ${theme === "dark" ? "bg-yellow-500/5 border-yellow-500/20" : "bg-yellow-50 border-yellow-200"}`}
              >
                <span className="text-xl md:text-2xl mb-1">🎁</span>
                <p
                  className={`text-[9px] md:text-[11px] font-bold tracking-widest uppercase ${theme === "dark" ? "text-yellow-500" : "text-yellow-700"}`}
                >
                  + Includes 2 Complimentary Surprise Samples
                </p>
              </div>
            </div>

            {/* Footer Pricing & Button */}
            <div
              className={`shrink-0 p-3 md:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${theme === "dark" ? "border-gray-800 bg-[#0d0d0d]" : "border-gray-200 bg-gray-50"}`}
            >
              <div className="text-center sm:text-left flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0">
                <span className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider font-bold mb-0.5">
                  Total Price
                </span>
                <span className="text-yellow-500 font-bold text-xl md:text-3xl">
                  ₹599
                </span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                disabled={selectedAttars.length !== 3}
                className={`w-full sm:w-auto px-5 py-3 md:px-6 md:py-3.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${
                  selectedAttars.length === 3
                    ? "bg-[#25D366] hover:bg-[#20b858] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)] cursor-pointer"
                    : "bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed"
                }`}
              >
                {selectedAttars.length === 3
                  ? "Order on WhatsApp 💬"
                  : "Select 3 Attars"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default CustomBoxModal;
