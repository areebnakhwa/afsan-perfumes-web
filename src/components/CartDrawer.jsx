import React from "react";

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeItem,
  theme,
}) => {
  // Total calculate karne ka logic (₹599 per item)
  const totalPrice = cartItems.reduce(
    (total, item) => total + 599 * item.quantity,
    0,
  );

  // Original total price calculate karne ke liye (₹799 per item)
  const totalOriginalPrice = cartItems.reduce(
    (total, item) => total + 799 * item.quantity,
    0,
  );

  // WhatsApp Message format karna (Saare items ki list aur total price + discount note)
  const formatWhatsAppOrder = () => {
    let message =
      "Hello AFSAN! I would like to place an order with WhatsApp Discount:%0A%0A";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹599 each (Original ₹799)%0A`;
    });
    message += `%0A*Total Amount: ₹${totalPrice}* (Saved ₹${totalOriginalPrice - totalPrice}!)`;
    return `https://wa.me/918356915340?text=${message}`;
  };

  return (
    <>
      {/* Background Overlay (Dark Blur) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      {/* Right Side Drawer */}
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full z-[200] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${theme === "dark" ? "bg-[#0f0f0f] border-l border-white/10" : "bg-white border-l border-black/10"}`}
      >
        {/* Drawer Header */}
        <div
          className={`flex justify-between items-center p-6 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
        >
          <h2
            className={`text-2xl font-serif font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Your Cart 🛍️
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

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
              <span className="text-6xl">🛒</span>
              <p className="font-medium tracking-wide">Your cart is empty.</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 border border-yellow-500 text-yellow-500 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 hover:text-black transition-all"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-black/5 p-3 rounded-2xl border border-gray-500/10"
              >
                <img
                  src={item.frontImg}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border border-gray-700 bg-black"
                />
                <div className="flex-1">
                  <h3
                    className={`font-bold text-sm md:text-base mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}
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

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-7 rounded-full bg-gray-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors font-bold"
                    >
                      -
                    </button>
                    <span
                      className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-7 rounded-full bg-gray-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 p-2 hover:bg-red-500/10 rounded-full transition-colors"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Checkout */}
        {cartItems.length > 0 && (
          <div
            className={`p-6 border-t ${theme === "dark" ? "border-gray-800 bg-[#0a0a0a]" : "border-gray-200 bg-gray-50"}`}
          >
            <div className="flex justify-between items-center mb-2">
              <span
                className={`text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                Total Amount
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ₹{totalOriginalPrice}
                </span>
                <span
                  className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            {/* WHATSAPP DISCOUNT OFFER TEXT IN FOOTER */}
            <div className="text-center text-[10px] text-[#25D366] font-bold uppercase tracking-wider mb-4 animate-pulse">
              ✨ Buy via WhatsApp & Get Extra Discount
            </div>

            <a
              href={formatWhatsAppOrder()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 flex items-center justify-center gap-2 rounded-xl font-bold tracking-widest uppercase bg-[#25D366] text-black hover:bg-[#25D366]/90 transition-colors shadow-lg shadow-[#25D366]/20 text-sm"
            >
              Checkout on WhatsApp 💬
            </a>
            <p className="text-center text-xs text-gray-500 mt-4">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
