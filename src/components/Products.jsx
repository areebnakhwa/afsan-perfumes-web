import React, { useState, useEffect } from "react";

import { createPortal } from "react-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";

import "swiper/css/effect-coverflow";

import "swiper/css/pagination";

import "swiper/css/navigation";

const perfumeSets = [
  {
    id: 1,

    name: "Royal Signature",

    tagline: "Fresh • Woody • Clean",

    frontImg: "/set1-box.jpg",

    backImg: "/set1-notes.jpg",

    openBoxImg: "/open-box.jpg",

    desc: "A versatile luxury collection for everyday wear and special occasions.",

    items: [
      { name: "Jawahra", detail: "Fresh citrus & woody" },

      { name: "Greatness", detail: "Rich oud & spicy luxury" },

      { name: "White Musk", detail: "Clean, soft musk" },
    ],
  },

  {
    id: 2,

    name: "Oceanic Luxury",

    tagline: "Aquatic • Fresh • Musky",

    frontImg: "/set2-box.jpg",

    backImg: "/set2-notes.jpg",

    openBoxImg: "/open-box.jpg",

    desc: "For customers who love fresh, modern and attention-grabbing fragrances.",

    items: [
      { name: "Bahr", detail: "Bold aquatic character" },

      { name: "Jazeera", detail: "Deep, distinctive fragrance" },

      { name: "White Musk", detail: "Smooth, clean finish" },
    ],
  },

  {
    id: 3,

    name: "Midnight Oud",

    tagline: "Dark • Floral • Intense",

    frontImg: "/set3-box.jpg",

    backImg: "/set3-notes.jpg",

    openBoxImg: "/open-box.jpg",

    desc: "A rich, premium set for evening wear and customers who prefer intense fragrances.",

    items: [
      { name: "Greatness", detail: "Powerful oud character" },

      { name: "Rose Noir", detail: "Oud & roses" },

      { name: "Jazeera", detail: "Deep, bold character" },
    ],
  },

  {
    id: 4,

    name: "Bloom & Elegance",

    tagline: "Floral • Sweet • Sophisticated",

    frontImg: "/set4-box.jpg",

    backImg: "/set4-notes.jpg",

    openBoxImg: "/open-box.jpg",

    desc: "A beautiful mix of floral freshness and rich elegance, ideal for customers who enjoy sophisticated scents.",

    items: [
      { name: "Sabha Al Ward", detail: "Sweet vanilla & white florals" },

      { name: "Rose Noir", detail: "Rose & oud richness" },

      { name: "Jawahra", detail: "Fresh citrus & jasmine" },
    ],
  },

  {
    id: 5,

    name: "Arabian Gold",

    tagline: "Warm • Rich • Royal",

    frontImg: "/set5-box.jpg",

    backImg: "/set5-notes.jpg",

    openBoxImg: "/open-box.jpg",

    desc: "A rich Arabian-inspired combination with bold oud character and floral elegance.",

    items: [
      { name: "Jazeera", detail: "Deep, distinctive fragrance" },

      { name: "Greatness", detail: "Rich oud & spicy luxury" },

      { name: "Sabha Al Ward", detail: "Sweet vanilla & white florals" },
    ],
  },

  {
    id: 6,

    name: "Pure Elegance",

    tagline: "Clean • Floral • Fresh",

    frontImg: "/set6-box.jpg",

    backImg: "/set6-notes.jpg",

    openBoxImg: "/open-box.jpg",

    desc: "A balanced combination of clean musk, aquatic freshness and rose-oud sophistication.",

    items: [
      { name: "White Musk", detail: "Clean, soft musk" },

      { name: "Bahr", detail: "Bold aquatic character" },

      { name: "Rose Noir", detail: "Oud & roses" },
    ],
  },
];

const ProductCard = ({
  set,

  theme,

  openQuickView,

  addToCart,

  toggleWishlist,

  wishlistItems,
}) => {
  const [showNotes, setShowNotes] = useState(false);

  const isWishlisted = wishlistItems.some((item) => item.id === set.id);

  const waMessage = encodeURIComponent(
    `Hello AFSAN, I would like to order the ${set.name} Gift Set for ₹599.`,
  );

  return (
    <div
      className={`relative rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border group flex flex-col h-full ${theme === "dark" ? "bg-[#121212] border-white/10 hover:border-yellow-500/50" : "bg-white border-black/10 hover:border-yellow-600/50"}`}
    >
      <div
        className="w-full h-[22rem] sm:h-[24rem] relative overflow-hidden bg-black cursor-pointer flex items-center justify-center"
        onClick={() => setShowNotes(!showNotes)}
      >
        <img
          src={set.frontImg}
          alt={set.name}
          className={`absolute inset-0 w-full h-full object-contain p-1 transition-all duration-700 ease-in-out transform ${showNotes ? "scale-110 opacity-0" : "group-hover:scale-110 group-hover:opacity-0"}`}
        />

        <img
          src={set.backImg}
          alt={`${set.name} Details`}
          className={`absolute inset-0 w-full h-full object-contain p-1 transition-all duration-700 ease-in-out transform bg-white ${showNotes ? "scale-100 opacity-100" : "scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`}
        />

        {!showNotes && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/60 text-white/90 text-[10px] px-3 py-1 rounded-full backdrop-blur-md md:hidden pointer-events-none tracking-widest border border-white/20">
            TAP TO VIEW NOTES
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();

            toggleWishlist(set);
          }}
          className={`absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-110 ${theme === "dark" ? "bg-black/50 text-white" : "bg-white/80 text-black"}`}
        >
          {isWishlisted ? (
            <span className="text-red-500 text-lg">♥</span>
          ) : (
            <span className="text-lg">♡</span>
          )}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();

            openQuickView(set);
          }}
          className={`absolute top-16 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-110 group/eye ${theme === "dark" ? "bg-black/50 text-white hover:text-yellow-500" : "bg-white/80 text-black hover:text-yellow-600"}`}
        >
          👁️
        </button>
      </div>

      <div className="p-6 text-center flex-grow flex flex-col justify-between relative z-30">
        <div>
          <h3
            className={`text-2xl font-serif font-bold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            {set.name}
          </h3>

          <p
            className={`text-xs font-bold uppercase tracking-widest mb-4 ${theme === "dark" ? "text-yellow-500" : "text-yellow-600"}`}
          >
            {set.tagline}
          </p>

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-gray-400 line-through text-sm">₹799</span>

            <span
              className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              ₹599
            </span>

            <span className="bg-green-500/20 text-green-500 font-bold text-[10px] px-2 py-1 rounded-full tracking-widest">
              25% OFF
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => addToCart(set)}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10`}
          >
            <span>Add to cart</span> 🛍️
          </button>

          <div className="text-[10px] md:text-xs text-[#25D366] font-bold uppercase tracking-wider animate-pulse pt-1">
            ✨ Buy via WhatsApp & Get Extra Discount
          </div>

          <div className="flex gap-2">
            <a
              href={`https://wa.me/918356915340?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-wide border transition-all ${theme === "dark" ? "bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white" : "border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"}`}
            >
              Buy on Whatsapp 💬
            </a>

            <a
              href="https://www.amazon.in/gp/product/B0HPNWCSGX/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_26e4a7e8-34d7-4079-8e89-1d0633af50a6"
              target="_blank"
              rel="noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-wide border transition-all ${theme === "dark" ? "bg-[#FF9900]/10 border-[#FF9900]/30 text-[#FF9900] hover:bg-[#FF9900] hover:text-white" : "border-[#FF9900] text-[#FF9900] hover:bg-[#FF9900] hover:text-white"}`}
            >
              Amazon 🛒
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = ({ theme, addToCart, toggleWishlist, wishlistItems }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const [modalImgMode, setModalImgMode] = useState("front");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openQuickView = (set) => {
    setQuickViewProduct(set);

    setModalImgMode("front");
  };

  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <div
      id="products"
      className={`py-24 overflow-hidden relative ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-50"}`}
    >
      <style>
        {`

          .product-slider .swiper-pagination-bullet { background: ${theme === "dark" ? "#fff" : "#000"}; opacity: 0.3; }

          .product-slider .swiper-pagination-bullet-active { background: #EAB308 !important; opacity: 1; }

          .modal-scroll::-webkit-scrollbar { display: none; }

          .modal-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2
          className={`text-3xl md:text-5xl font-serif tracking-wide mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Signature Collections
        </h2>

        <p
          className={`text-sm md:text-base max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          Hover or tap on any perfume to reveal its notes. Swipe to explore all
          6 luxury sets.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 product-slider relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 15,

            stretch: 0,

            depth: 200,

            modifier: 1,

            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full py-10"
        >
          {perfumeSets.map((set) => (
            <SwiperSlide
              key={set.id}
              className="max-w-[340px] md:max-w-[400px] w-full h-auto"
            >
              <ProductCard
                set={set}
                theme={theme}
                openQuickView={openQuickView}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlistItems={wishlistItems}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {mounted &&
        createPortal(
          <>
            {quickViewProduct && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-8 pt-16 md:pt-8">
                <div
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={closeQuickView}
                ></div>

                <div
                  className={`relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl modal-scroll overflow-y-auto md:rounded-3xl shadow-2xl flex flex-col md:flex-row transform transition-all duration-300 ${theme === "dark" ? "bg-[#0f0f0f] border-gray-800 md:border" : "bg-white border-black/10 md:border"}`}
                >
                  <button
                    onClick={closeQuickView}
                    className="absolute top-4 right-4 z-[10000] p-2 bg-black/60 text-white hover:bg-red-500 hover:text-white rounded-full transition-colors backdrop-blur-md border border-white/20 shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>

                  <div className="w-full md:w-1/2 h-[45vh] md:h-auto md:min-h-[500px] bg-black relative shrink-0">
                    <img
                      src={
                        modalImgMode === "front"
                          ? quickViewProduct.frontImg
                          : modalImgMode === "notes"
                            ? quickViewProduct.backImg
                            : quickViewProduct.openBoxImg
                      }
                      alt={quickViewProduct.name}
                      className="absolute inset-0 w-full h-full object-contain p-2 md:p-6 transition-opacity duration-300"
                    />

                    <div className="absolute top-4 left-4 flex gap-2 md:gap-3 z-10 flex-wrap max-w-[80%]">
                      <button
                        onClick={() => setModalImgMode("front")}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 shadow-lg transition-all ${modalImgMode === "front" ? "border-yellow-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
                      >
                        <img
                          src={quickViewProduct.frontImg}
                          className="w-full h-full object-cover bg-white"
                          alt="Box View"
                        />
                      </button>

                      <button
                        onClick={() => setModalImgMode("notes")}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 shadow-lg transition-all ${modalImgMode === "notes" ? "border-yellow-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
                      >
                        <img
                          src={quickViewProduct.backImg}
                          className="w-full h-full object-cover bg-white"
                          alt="Notes View"
                        />
                      </button>

                      <button
                        onClick={() => setModalImgMode("openbox")}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 shadow-lg transition-all ${modalImgMode === "openbox" ? "border-yellow-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
                      >
                        <img
                          src={quickViewProduct.openBoxImg}
                          className="w-full h-full object-cover bg-white"
                          alt="Open Box View"
                        />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center ${theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"}`}
                  >
                    <h2
                      className={`text-3xl font-serif font-bold tracking-wide mb-2 md:hidden ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      {quickViewProduct.name}
                    </h2>

                    <div className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                      {quickViewProduct.tagline}
                    </div>

                    <div className="space-y-4 mb-6">
                      {quickViewProduct.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <span className="w-8 h-8 shrink-0 rounded-full bg-[#1e1e1e] flex items-center justify-center text-sm mt-0.5 font-bold text-yellow-500 border border-yellow-500/20">
                            {index + 1}
                          </span>

                          <span
                            className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                          >
                            <strong
                              className={
                                theme === "dark" ? "text-white" : "text-black"
                              }
                            >
                              {item.name}:
                            </strong>{" "}
                            {item.detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p
                      className={`mb-6 text-sm leading-relaxed italic border-l-2 border-yellow-500 pl-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {quickViewProduct.desc}
                    </p>

                    <div className="flex items-center gap-4 mb-4 pt-4 border-t border-gray-800">
                      <span className="text-gray-500 line-through text-lg">
                        ₹799
                      </span>

                      <span
                        className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
                      >
                        ₹599
                      </span>

                      <span className="bg-green-500/20 text-green-500 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        25% OFF
                      </span>
                    </div>

                    <div className="flex flex-col gap-3 pb-8 md:pb-0">
                      <button
                        onClick={() => {
                          addToCart(quickViewProduct);

                          closeQuickView();
                        }}
                        className="w-full py-3.5 rounded-xl font-bold tracking-widest uppercase bg-[#EAB308] text-black transition-colors hover:bg-yellow-400"
                      >
                        Add to Cart 🛍️
                      </button>

                      <div className="text-center text-xs text-[#25D366] font-bold uppercase tracking-wider animate-pulse my-1">
                        ✨ Buy via WhatsApp & Get Extra Discount
                      </div>

                      <a
                        href={`https://wa.me/918356915340?text=Hello AFSAN, I am interested in the ${quickViewProduct.name} Gift Set.`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 rounded-xl font-bold tracking-widest uppercase border border-gray-700 text-[#25D366] text-center transition-all hover:border-[#25D366] hover:bg-[#25D366]/10"
                      >
                        Buy on WhatsApp 💬
                      </a>

                      <a
                        href="https://www.amazon.in/gp/product/B0HPNWCSGX/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_26e4a7e8-34d7-4079-8e89-1d0633af50a6"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 rounded-xl font-bold tracking-widest uppercase border border-gray-700 text-[#FF9900] text-center transition-all hover:border-[#FF9900] hover:bg-[#FF9900]/10"
                      >
                        Amazon 🛒
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>,

          document.body,
        )}
    </div>
  );
};

export default Products;
