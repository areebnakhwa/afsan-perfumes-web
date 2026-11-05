import React from "react";

const WishlistDrawer = ({
  isOpen,
  onClose,
  wishlistItems,
  removeFromWishlist,
  moveToCart,
  theme,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full z-[200] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${theme === "dark" ? "bg-[#0f0f0f] border-l border-white/10" : "bg-white border-l border-black/10"}`}
      >
        <div
          className={`flex justify-between items-center p-6 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
        >
          <h2
            className={`text-2xl font-serif font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            My Wishlist ❤️
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-gray-500/20 hover:bg-gray-500/40 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5"
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
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
              <span className="text-6xl">❤️</span>
              <p className="font-medium tracking-wide">
                Your wishlist is empty.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 border border-yellow-500 text-yellow-500 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 hover:text-black transition-all"
              >
                Discover Perfumes
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => {
              const waMessage = encodeURIComponent(
                `Hello AFSAN, I would like to order the ${item.name} Gift Set for ₹599 from my Wishlist.`,
              );

              return (
                <div
                  key={item.id}
                  className="flex gap-4 items-start bg-black/5 p-4 rounded-2xl border border-gray-500/10 relative"
                >
                  <img
                    src={item.frontImg}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-gray-700 bg-black shrink-0"
                  />
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-sm mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      {item.name}
                    </h3>

                    {/* PRICING UPDATE: 799 (cut), 599, and 25% OFF */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-400 line-through text-xs">
                        ₹799
                      </span>
                      <span
                        className={`font-bold text-sm ${theme === "dark" ? "text-white" : "text-black"}`}
                      >
                        ₹599
                      </span>
                      <span className="bg-green-500/20 text-green-500 font-bold text-[9px] px-1.5 py-0.5 rounded-full tracking-wider">
                        25% OFF
                      </span>
                    </div>

                    {/* WHATSAPP DISCOUNT OFFER TEXT */}
                    <div className="text-[9px] text-[#25D366] font-bold uppercase tracking-wider mb-2.5">
                      ✨ Buy via WhatsApp & Get Extra Discount
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => moveToCart(item)}
                        className="px-3 py-1.5 bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-colors"
                      >
                        Move to Cart 🛍️
                      </button>

                      <a
                        href={`https://wa.me/918356915340?text=${waMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 border border-[#25D366] text-[#25D366] text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-[#25D366] hover:text-white transition-all"
                      >
                        Buy WA 💬
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM5 10a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zM7 14a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistDrawer;
