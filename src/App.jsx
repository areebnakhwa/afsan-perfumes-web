import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// NAYA IMPORT: Diwali Banner yahan add kiya hai
import DiwaliBanner from "./components/DiwaliBanner";
import FeaturedCategories from "./components/FeaturedCategories";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";
import PolicyModal from "./components/PolicyModal";

// --- LOGIN AUR FIREBASE IMPORTS ADD KIYE GAYE HAIN ---
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import LoginModal from "./components/LoginModal";
// -----------------------------------------------------

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

  // --- LOGIN AUR USER STATE ADD KI GAYI HAI ---
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  // ---------------------------------------------

  const showToast = (message, icon) => {
    setToast({ show: true, message, icon });
    setTimeout(() => setToast({ show: false, message: "", icon: "" }), 3000);
  };

  // FIXED GLOWING SCROLL EFFECT LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(scrollTop / scrollHeight);
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
      {/* Toast Notification */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] px-6 py-3 rounded-full backdrop-blur-xl shadow-2xl transition-all duration-500 flex items-center gap-3 ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${theme === "dark" ? "bg-white/10 border border-white/20 text-white" : "bg-black/80 border border-black/20 text-white"}`}
      >
        <span className="text-xl">{toast.icon}</span>
        <span className="text-sm font-medium tracking-wide">
          {toast.message}
        </span>
      </div>

      {/* DYNAMIC SCROLLING GLOWING ORB */}
      <div
        className="fixed left-1/2 w-[320px] md:w-[650px] h-[320px] md:h-[650px] rounded-full blur-[130px] pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          top: `${scrollProgress * 100}%`,
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.4})`,
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(234,179,8,0.18) 0%, rgba(0,0,0,0) 70%)"
              : "radial-gradient(circle, rgba(234,179,8,0.22) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* SCROLL PROGRESS TOP BAR */}
      <div
        className="fixed top-0 left-0 h-1 bg-yellow-500 z-50 shadow-[0_0_12px_#eab308]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* DIWALI PROMO BANNER (TOP BAR) */}
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
        // NAYA: Navbar ko user details aur modal kholne ka function pass kiya gaya hai
        user={user}
        openLogin={() => setIsLoginOpen(true)}
      />

      <div className="relative z-10">
        <Hero theme={theme} addToCart={addToCart} />

        {/* NAYA ADD KIYA HUA BANNER (Hero aur FeaturedCategories ke beech mein) */}
        <DiwaliBanner theme={theme} />

        <FeaturedCategories theme={theme} />
        <Products
          theme={theme}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
        />
        <About theme={theme} />
        <Footer theme={theme} openPolicy={openPolicy} />
      </div>

      {/* SLIDE DRAWERS & MODALS */}
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

      {/* NAYA ADD KIYA HUA: LOGIN MODAL */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        theme={theme}
        user={user}
      />
    </div>
  );
}

export default App;
