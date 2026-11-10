import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiwaliBanner from "./components/DiwaliBanner";
import FeaturedCategories from "./components/FeaturedCategories";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";
import PolicyModal from "./components/PolicyModal";
import DiwaliOfferModal from "./components/DiwaliOfferModal";
import CustomBoxModal from "./components/CustomBoxModal";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import LoginModal from "./components/LoginModal";

function App() {
  const [theme, setTheme] = useState("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  const [policyData, setPolicyData] = useState({ isOpen: false, tab: "terms" });
  const openPolicy = (tab) => setPolicyData({ isOpen: true, tab });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [toast, setToast] = useState({ show: false, message: "", icon: "" });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [isDiwaliModalOpen, setIsDiwaliModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const showToast = (message, icon) => {
    setToast({ show: true, message, icon });
    setTimeout(() => setToast({ show: false, message: "", icon: "" }), 3000);
  };

  // 🔥 SUPER OPTIMIZED SCROLL LOGIC FOR 60FPS SMOOTHNESS 🔥
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight > 0) {
            setScrollProgress(scrollTop / scrollHeight);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing)
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to Cart`, "🛍️");
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        showToast(`${product.name} removed from Wishlist`, "💔");
        return prev.filter((item) => item.id !== product.id);
      }
      showToast(`${product.name} saved to Wishlist`, "❤️");
      return [...prev, product];
    });
  };

  const moveToCart = (product) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    addToCart(product);
  };

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] px-6 py-3 rounded-full backdrop-blur-xl shadow-2xl transition-all duration-500 flex items-center gap-3 ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${theme === "dark" ? "bg-white/10 border border-white/20 text-white" : "bg-black/80 border border-black/20 text-white"}`}
      >
        <span className="text-xl">{toast.icon}</span>
        <span className="text-sm font-medium tracking-wide">
          {toast.message}
        </span>
      </div>

      {/* 🔥 GPU ACCELERATED BACKGROUND ORB (No lag now) 🔥 */}
      <div
        className="fixed top-0 left-1/2 w-[320px] md:w-[650px] h-[320px] md:h-[650px] rounded-full blur-[90px] md:blur-[120px] pointer-events-none transition-transform duration-75 ease-linear z-0 will-change-transform"
        style={{
          transform: `translate3d(-50%, calc(${scrollProgress * 100}vh - 50%), 0) scale(${1 + scrollProgress * 0.4})`,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(0,0,0,0) 70%)"
              : "radial-gradient(circle, rgba(234,179,8,0.18) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* 🔥 OPTIMIZED PROGRESS BAR 🔥 */}
      <div
        className="fixed top-0 left-0 h-1 bg-yellow-500 z-50 shadow-[0_0_12px_#eab308] will-change-transform origin-left transition-transform duration-75 ease-linear"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="relative z-40 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black text-[10px] md:text-sm font-bold text-center py-2 px-4 tracking-wide shadow-md">
        ✨ Celebrate Diwali with AFSAN - The Perfect Luxury Gift Set ✨
      </div>

      <Navbar
        theme={theme}
        setTheme={setTheme}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        wishlistCount={wishlistItems.length}
        openWishlist={() => setIsWishlistOpen(true)}
        user={user}
        openLogin={() => setIsLoginOpen(true)}
      />

      <div className="relative z-10">
        <Hero theme={theme} addToCart={addToCart} />

        <DiwaliBanner
          theme={theme}
          onOpenOfferModal={() => setIsDiwaliModalOpen(true)}
          onOpenCustomModal={() => setIsCustomModalOpen(true)}
        />

        <Products
          theme={theme}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
        />

        <FeaturedCategories theme={theme} />

        <About theme={theme} />
        <Footer theme={theme} openPolicy={openPolicy} />
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        theme={theme}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        removeFromWishlist={(id) =>
          setWishlistItems((prev) => prev.filter((i) => i.id !== id))
        }
        moveToCart={moveToCart}
        theme={theme}
      />

      <PolicyModal
        isOpen={policyData.isOpen}
        initialTab={policyData.tab}
        onClose={() => setPolicyData({ ...policyData, isOpen: false })}
        theme={theme}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        theme={theme}
        user={user}
      />

      <DiwaliOfferModal
        isOpen={isDiwaliModalOpen}
        onClose={() => setIsDiwaliModalOpen(false)}
        theme={theme}
      />

      <CustomBoxModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}

export default App;
