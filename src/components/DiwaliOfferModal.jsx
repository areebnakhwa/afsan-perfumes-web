import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

// 6 Sets ka Data
const allSetsData = [
  { id: 1, name: "Royal Signature", img: "/set1-box.jpg" },
  { id: 2, name: "Oceanic Luxury", img: "/set2-box.jpg" },
  { id: 3, name: "Midnight Oud", img: "/set3-box.jpg" },
  { id: 4, name: "Bloom & Elegance", img: "/set4-box.jpg" },
  { id: 5, name: "Arabian Gold", img: "/set5-box.jpg" },
  { id: 6, name: "Pure Elegance", img: "/set6-box.jpg" },
];

const DiwaliOfferModal = ({ isOpen, onClose, theme }) => {
  const [selectedSets, setSelectedSets] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Set select/deselect logic
  const toggleSelection = (set) => {
    if (selectedSets.find((item) => item.id === set.id)) {
      setSelectedSets(selectedSets.filter((item) => item.id !== set.id));
    } else {
      if (selectedSets.length < 3) {
        setSelectedSets([...selectedSets, set]);
      }
    }
  };

  // WhatsApp Message Logic
  const handleWhatsAppCheckout = () => {
    if (selectedSets.length !== 3) return;
    const setNames = selectedSets
      .map((s, index) => `${index + 1}. ${s.name}`)
      .join("%0A");
    const message = `Hello AFSAN, I want to claim the Diwali Special *BUY 2 GET 1 FREE* offer!%0A%0AHere are my 3 selected sets:%0A${setNames}%0A%0A*Total Price: ₹1,198*`;
    window.open(`https://wa.me/918356915340?text=${message}`, "_blank");
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5">
          {/* Dark Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border ${
              theme === "dark"
                ? "bg-[#0a0a0a] border-yellow-500/30"
                : "bg-white border-yellow-600/30"
            }`}
          >
            {/* 1. HEADER (Fixed at Top) */}
            <div
              className={`shrink-0 relative p-4 pt-5 md:p-6 text-center border-b ${theme === "dark" ? "border-gray-800 bg-[#0d0d0d]" : "border-gray-200 bg-gray-50"}`}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:text-white hover:bg-red-500 rounded-full transition-all border border-white/10 z-20 shadow-md"
              >
                ✕
              </button>

              <h2
                className={`text-xl md:text-3xl font-serif font-bold px-6 ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                Customize Your Diwali Gift 🎁
              </h2>
              <p className="text-yellow-500 font-bold uppercase tracking-wider text-[10px] md:text-xs mt-1.5">
                Select Any 3 Sets (Buy 2 Get 1 Free)
              </p>

              <div className="mt-3 flex items-center justify-center">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${selectedSets.length === 3 ? "bg-green-500/20 text-green-400 border-green-500/40 shadow-[0_0_10px_rgba(37,211,102,0.2)]" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"}`}
                >
                  {selectedSets.length} / 3 Selected
                </span>
              </div>
            </div>

            {/* 2. SCROLLABLE GRID BODY (Images + Text will NOT cut off here) */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 modal-scroll">
              <style>{`.modal-scroll::-webkit-scrollbar { width: 6px; } .modal-scroll::-webkit-scrollbar-thumb { background: #4b5563; border-radius: 10px; }`}</style>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
                {allSetsData.map((set) => {
                  const isSelected = selectedSets.find(
                    (item) => item.id === set.id,
                  );
                  return (
                    <div
                      key={set.id}
                      onClick={() => toggleSelection(set)}
                      className={`cursor-pointer rounded-xl flex flex-col overflow-hidden border-2 transition-all ${
                        isSelected
                          ? "border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] scale-[1.02]"
                          : theme === "dark"
                            ? "border-gray-800 hover:border-gray-600"
                            : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {/* Image Box - Perfect 1:1 Square Hack */}
                      <div
                        className={`relative w-full pt-[100%] ${theme === "dark" ? "bg-black" : "bg-gray-100"}`}
                      >
                        <img
                          src={set.img}
                          alt={set.name}
                          className="absolute inset-0 w-full h-full object-contain p-2 md:p-3"
                        />
                        {/* Selected Tick Overlay */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl md:text-2xl font-bold shadow-lg">
                              ✓
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Text Label - Never Overlaps or Disappears */}
                      <div
                        className={`p-2.5 md:p-3 text-center flex-1 flex items-center justify-center ${
                          isSelected
                            ? "bg-yellow-500"
                            : theme === "dark"
                              ? "bg-[#161616]"
                              : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`text-[10.5px] md:text-sm font-bold uppercase tracking-wider leading-tight ${
                            isSelected
                              ? "text-black"
                              : theme === "dark"
                                ? "text-gray-100"
                                : "text-gray-900"
                          }`}
                        >
                          {set.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. FOOTER (Fixed at Bottom) */}
            <div
              className={`shrink-0 p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${theme === "dark" ? "border-gray-800 bg-[#0d0d0d]" : "border-gray-200 bg-gray-50"}`}
            >
              <div className="text-center sm:text-left flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0">
                <span className="text-gray-400 line-through text-sm">
                  Total: ₹1,797
                </span>
                <span className="text-yellow-500 font-bold text-xl md:text-2xl">
                  Offer: ₹1,198
                </span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                disabled={selectedSets.length !== 3}
                className={`w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${
                  selectedSets.length === 3
                    ? "bg-[#25D366] hover:bg-[#20b858] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)] cursor-pointer"
                    : "bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed"
                }`}
              >
                {selectedSets.length === 3
                  ? "Buy via WhatsApp 💬"
                  : "Select 3 Sets to Buy"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default DiwaliOfferModal;
