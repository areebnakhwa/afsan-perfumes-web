import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

// Saare 6 Sets ka data (Taki jab left me click ho to right me details change ho)
const allSetsData = [
  {
    id: 1,
    name: "Royal Signature Gift Set",
    setTitle: "Set 1: Royal Signature",
    tagline:
      "Jawahra, Greatness, White Musk | 3 x 6 ml Attar Bottles + 2 Free Samples",
    desc: "A versatile luxury collection for everyday wear and special occasions. 22 ml Total Fragrance.",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    frontImg: "/set1-box.jpg",
    amazonLink:
      "https://www.amazon.in/gp/product/B0HPNWCSGX/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_26e4a7e8-34d7-4079-8e89-1d0633af50a6",
    items: [
      {
        name: "Jawahra",
        detail: "Vibrant citrus, spicy accords, jasmine & florals.",
      },
      { name: "Greatness", detail: "Saffron, nutmeg, lavender, agarwood oud." },
      {
        name: "White Musk",
        detail: "Clean aldehydic accords, soft powdery floral.",
      },
    ],
  },
  {
    id: 2,
    name: "Oceanic Luxury Gift Set",
    setTitle: "Set 2: Oceanic Luxury",
    tagline:
      "Bahr, Jazeera, White Musk | 3 x 6 ml Attar Bottles + 2 Free Samples",
    desc: "For customers who love fresh, modern and attention-grabbing fragrances. 22 ml Total Fragrance.",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    frontImg: "/set2-box.jpg", // Update with actual image path
    amazonLink:
      "https://www.amazon.in/gp/product/B0HPQVF1TP/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_0f63b63c-022b-4019-969f-d8008dbffc6a",
    items: [
      {
        name: "Bahr",
        detail: "Bold aquatic character with fresh ocean breeze notes.",
      },
      {
        name: "Jazeera",
        detail: "Deep, distinctive fragrance with woody undertones.",
      },
      {
        name: "White Musk",
        detail: "Smooth, clean finish with soft powdery florals.",
      },
    ],
  },
  {
    id: 3,
    name: "Midnight Oud Gift Set",
    setTitle: "Set 3: Midnight Oud",
    tagline:
      "Greatness, Rose Noir, Jazeera | 3 x 6 ml Attar Bottles + 2 Free Samples",
    desc: "A rich, premium set for evening wear and intense fragrance lovers. 22 ml Total Fragrance.",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    frontImg: "/set3-box.jpg", // Update with actual image path
    amazonLink:
      "https://www.amazon.in/gp/product/B0HPWBY9CT/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_6e9c37a8-99c6-4882-80e6-9a3a409cc776",
    items: [
      {
        name: "Greatness",
        detail: "Powerful oud character with spicy luxury notes.",
      },
      {
        name: "Rose Noir",
        detail: "Intense fusion of dark roses and rich oud wood.",
      },
      {
        name: "Jazeera",
        detail: "Deep, bold character for a lasting impression.",
      },
    ],
  },
  {
    id: 4,
    name: "Bloom & Elegance Gift Set",
    setTitle: "Set 4: Bloom & Elegance",
    tagline:
      "Sabha Al Ward, Rose Noir, Jawahra | 3 x 6 ml Attar Bottles + 2 Free Samples",
    desc: "A beautiful mix of floral freshness and rich elegance. 22 ml Total Fragrance.",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    frontImg: "/set4-box.jpg", // Update with actual image path
    amazonLink:
      "https://www.amazon.in/gp/product/B0HQ5LG1JR/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_0b455cd4-ca17-4706-ae87-c41c19ef0781",
    items: [
      {
        name: "Sabha Al Ward",
        detail: "Sweet vanilla intermingled with fresh white florals.",
      },
      {
        name: "Rose Noir",
        detail: "Sophisticated blend of rose petals and deep oud.",
      },
      {
        name: "Jawahra",
        detail: "Fresh citrus opening settling into warm jasmine.",
      },
    ],
  },
  {
    id: 5,
    name: "Arabian Gold Gift Set",
    setTitle: "Set 5: Arabian Gold",
    tagline:
      "Jazeera, Greatness, Sabha Al Ward | 3 x 6 ml Attar Bottles + 2 Free Samples",
    desc: "Rich Arabian-inspired combination with bold oud character. 22 ml Total Fragrance.",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    frontImg: "/set5-box.jpg", // Update with actual image path
    amazonLink:
      "https://www.amazon.in/gp/product/B0HQ5JJK3L/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_1b462ace-e625-44e7-bb36-434937a94d03",
    items: [
      {
        name: "Jazeera",
        detail: "Deep, distinctive fragrance evoking Arabian nights.",
      },
      {
        name: "Greatness",
        detail: "Rich oud balanced with luxurious spicy accords.",
      },
      {
        name: "Sabha Al Ward",
        detail: "Sweet vanilla providing a creamy floral finish.",
      },
    ],
  },
  {
    id: 6,
    name: "Pure Elegance Gift Set",
    setTitle: "Set 6: Pure Elegance",
    tagline:
      "White Musk, Bahr, Rose Noir | 3 x 6 ml Attar Bottles + 2 Free Samples",
    desc: "A balanced combination of clean musk and aquatic freshness. 22 ml Total Fragrance.",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    frontImg: "/set6-box.jpg", // Update with actual image path
    amazonLink:
      "https://www.amazon.in/gp/product/B0HQ5F8NTT/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_41742125-2a3c-4483-9a95-4b967f7cb3fe",
    items: [
      { name: "White Musk", detail: "Pure, clean, and soft musky aroma." },
      { name: "Bahr", detail: "Bold aquatic character refreshing the senses." },
      {
        name: "Rose Noir",
        detail: "Oud & roses bringing sophisticated elegance.",
      },
    ],
  },
];

const CollectionModal = ({ isOpen, onClose, addToCart, theme }) => {
  // State for selected set (Default is Set 1)
  const [activeSetId, setActiveSetId] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentSet = allSetsData.find((set) => set.id === activeSetId);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-5xl max-h-[90vh] sm:max-h-[94vh] overflow-y-auto rounded-[1.5rem] md:rounded-[2rem] shadow-2xl flex flex-col md:flex-row ${
              theme === "dark"
                ? "bg-[#0f0f0f] border border-white/10 text-white"
                : "bg-white border border-black/10 text-black"
            }`}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[600] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/60 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md border border-white/20 shadow-lg text-xs sm:text-base"
            >
              ✕
            </button>

            {/* LEFT SIDE: IMAGE & SET LIST */}
            <div className="w-full md:w-1/2 bg-black/50 relative flex flex-col justify-start p-3 sm:p-4 md:p-6 mt-10 sm:mt-0 border-r border-white/5">
              {/* Image Preview */}
              <div
                className="relative h-48 sm:h-64 md:h-[340px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/80 border border-white/10 cursor-zoom-in flex items-center justify-center shrink-0"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img
                  src={currentSet.frontImg}
                  alt={currentSet.setTitle}
                  className={`w-full h-full object-contain md:object-cover transition-transform duration-700 ease-out ${isZoomed ? "scale-110 md:scale-125" : "scale-100"}`}
                />

                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/70 backdrop-blur-md text-white text-[9px] sm:text-[10px] px-2 py-1 sm:px-3 sm:py-1 rounded-full uppercase tracking-widest border border-white/20 pointer-events-none">
                  Box Presentation
                </div>
              </div>

              {/* VERTICAL LIST OF SETS (1 to 6) */}
              <div
                className="mt-4 sm:mt-5 flex-1 overflow-y-auto pr-1"
                style={{ maxHeight: "250px" }}
              >
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-yellow-500 mb-2.5 px-1">
                  Select a Set:
                </h4>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {allSetsData.map((set) => (
                    <button
                      key={set.id}
                      onClick={() => setActiveSetId(set.id)}
                      className={`flex items-center justify-between w-full py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border transition-all text-left ${
                        activeSetId === set.id
                          ? "border-yellow-500 bg-yellow-500/10 text-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.2)]"
                          : "border-gray-700 text-gray-400 hover:border-gray-500 bg-black/40 hover:bg-black/60"
                      }`}
                    >
                      <span>{set.setTitle}</span>

                      {/* Arrow Icon */}
                      <span
                        className={`transform transition-transform ${activeSetId === set.id ? "rotate-90 text-yellow-500" : "text-gray-500"}`}
                      >
                        ▶
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: DETAILS */}
            <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-yellow-500 font-bold uppercase tracking-widest text-[9px] sm:text-[11px]">
                    Brand: Generic (AFSAN Perfumes)
                  </span>

                  <div className="flex items-center gap-1 text-[9px] sm:text-xs font-bold bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 sm:px-2 rounded-lg">
                    ★ 4.9 (128)
                  </div>
                </div>

                <h2 className="text-base sm:text-xl md:text-2xl font-serif font-bold mb-1.5 sm:mb-2 leading-snug">
                  {currentSet.name}
                </h2>

                <p
                  className={`text-[10px] sm:text-xs mb-3 sm:mb-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                >
                  {currentSet.tagline}. {currentSet.desc}
                </p>

                {/* PRICE */}
                <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-yellow-500/5 border border-yellow-500/20">
                  <span className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-500">
                    ₹{currentSet.price}
                  </span>

                  <span className="text-gray-400 line-through text-xs sm:text-base">
                    ₹{currentSet.originalPrice}
                  </span>

                  <span className="ml-auto bg-green-500/20 text-green-500 font-bold text-[9px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                    {currentSet.discount}
                  </span>
                </div>

                {/* DYNAMIC NOTES FOR SELECTED SET (Fixed Text Visibility for Light Mode) */}
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 text-[9px] sm:text-xs">
                  {currentSet.items.map((item, index) => (
                    <div key={index} className="flex gap-1.5 sm:gap-2">
                      <strong className="text-yellow-500 min-w-[70px] sm:min-w-[85px]">
                        {item.name}:
                      </strong>

                      <span
                        className={
                          theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700 font-medium"
                        }
                      >
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-gray-800 pb-2 sm:pb-0">
                <button
                  onClick={() => {
                    addToCart(currentSet);
                    onClose();
                  }}
                  className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold tracking-widest uppercase bg-[#EAB308] text-black hover:bg-yellow-400 transition-colors shadow-lg text-[10px] sm:text-xs"
                >
                  Add to Cart 🛍️
                </button>

                <div className="text-center text-[9px] sm:text-[10px] text-[#25D366] font-bold uppercase tracking-wider animate-pulse my-1">
                  ✨ Buy via WhatsApp & Get Extra Discount
                </div>

                <a
                  href={`https://wa.me/918356915340?text=Hello%20AFSAN,%20I%20would%20like%20to%20order%20the%20${currentSet.name.replace(/\s+/g, "%20")}%20for%20₹599.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold tracking-widest uppercase border border-green-500/50 text-[#25D366] hover:bg-green-500/10 text-center transition-all text-[10px] sm:text-xs"
                >
                  Buy on WhatsApp 💬
                </a>

                <a
                  href={currentSet.amazonLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold tracking-widest uppercase border border-gray-700 text-[#FF9900] hover:border-[#FF9900] hover:bg-[#FF9900]/10 text-center transition-all text-[10px] sm:text-xs"
                >
                  Amazon 🛒
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default CollectionModal;
