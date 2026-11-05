import React, { useState } from "react";

const Navbar = ({
  theme,
  setTheme,
  cartCount,
  openCart,
  wishlistCount,
  openWishlist,
  // NAYE PROPS AAYE HAIN LOGIN KE LIYE
  user,
  openLogin,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🚀 SMOOTH SCROLL FUNCTION LOGIC
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Mobile menu band karega
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smoothly wahan jayega
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 backdrop-blur-md border-b ${theme === "dark" ? "bg-black/80 border-white/10 text-white" : "bg-white/80 border-black/10 text-black"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={(e) => scrollToSection(e, "home")}
          >
            <img
              src="/logo.png"
              alt="AFSAN"
              className={`h-10 ${theme === "dark" ? "invert" : ""}`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-sm font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, "products")}
              className="text-sm font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors"
            >
              Collection
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors"
            >
              About
            </a>
          </div>

          {/* Icons (Desktop & Mobile) */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Theme Toggle (Desktop Only) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex p-2 rounded-full hover:bg-gray-500/20 transition-colors"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* NAYA ADD KIYA HUA: USER / LOGIN ICON (Desktop & Mobile) */}
            <button
              onClick={openLogin}
              className="relative p-2 hover:text-yellow-500 transition-colors"
            >
              {user ? (
                <span className="w-7 h-7 flex items-center justify-center bg-yellow-500 text-black rounded-full font-bold text-xs uppercase">
                  {user.email.charAt(0)}
                </span>
              ) : (
                <span className="text-xl">👤</span>
              )}
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={openWishlist}
              className="relative p-2 hover:text-yellow-500 transition-colors"
            >
              <span className="text-xl">❤️</span>
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-yellow-500 text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="relative p-2 hover:text-yellow-500 transition-colors"
            >
              <span className="text-xl">🛍️</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-yellow-500 text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-2xl hover:text-yellow-500 transition-colors"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-0 w-full border-b shadow-2xl flex flex-col p-6 space-y-6 ${theme === "dark" ? "bg-[#0a0a0a] border-white/10 text-white" : "bg-white border-black/10 text-black"}`}
        >
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="text-lg font-bold uppercase tracking-widest hover:text-yellow-500"
          >
            Home
          </a>
          <a
            href="#products"
            onClick={(e) => scrollToSection(e, "products")}
            className="text-lg font-bold uppercase tracking-widest hover:text-yellow-500"
          >
            Collection
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-lg font-bold uppercase tracking-widest hover:text-yellow-500"
          >
            About
          </a>

          {/* THEME TOGGLE FOR MOBILE */}
          <div className="pt-4 border-t border-gray-500/30 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-widest">
              Theme:
            </span>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-xl bg-gray-500/20 text-sm font-bold uppercase tracking-wider"
            >
              {theme === "dark" ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
