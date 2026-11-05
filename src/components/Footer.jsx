import React from "react";

const Footer = ({ theme, openPolicy }) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className={`relative py-14 px-4 border-t transition-colors duration-500 z-20 ${theme === "dark" ? "bg-[#050505] border-white/10 text-gray-400" : "bg-gray-50 border-black/10 text-gray-600"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.png"
            alt="AFSAN"
            className={`h-12 mb-4 ${theme === "dark" ? "invert" : ""}`}
          />
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Crafting 100% alcohol-free concentrated attars. Masterfully blended
            for timeless elegance and lasting presence.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="https://www.instagram.com/afsan.perfume/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl border border-yellow-500/40 bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-black transition-all shadow-sm"
            >
              INSTAGRAM 📸
            </a>
            <a
              href="https://www.amazon.in/gp/product/B0HPNWCSGX/ref=cx_skuctr_share_ls_srb?smid=A6TD6AL2B4H4R&tag=ShopReferral_26e4a7e8-34d7-4079-8e89-1d0633af50a6"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-all shadow-sm"
            >
              AMAZON 🛒
            </a>
            <a
              href="https://wa.me/918356915340"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl border border-green-500/40 bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider hover:bg-green-500 hover:text-white transition-all shadow-sm"
            >
              WHATSAPP 🟢💬
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start lg:pl-8">
          <h4
            className={`text-base font-serif font-bold mb-5 tracking-widest uppercase ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            SHOP COLLECTION
          </h4>
          <ul className="space-y-3 text-xs font-semibold tracking-wider">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="hover:text-yellow-500 transition-colors uppercase"
              >
                VIEW AFSAN COLLECTION & GIFT SET
              </a>
            </li>
            <li>
              <a
                href="#featured"
                onClick={(e) => handleScroll(e, "featured")}
                className="hover:text-yellow-500 transition-colors uppercase"
              >
                ALL ATTARS
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "products")}
                className="hover:text-yellow-500 transition-colors uppercase"
              >
                SIGNATURE SERIES
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start lg:pl-4">
          <h4
            className={`text-base font-serif font-bold mb-5 tracking-widest uppercase ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Policies
          </h4>
          <ul className="space-y-3 text-xs font-semibold tracking-wider">
            <li>
              <button
                onClick={() => openPolicy("terms")}
                className="hover:text-yellow-500 transition-colors uppercase"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => openPolicy("exchange")}
                className="hover:text-yellow-500 transition-colors uppercase"
              >
                Exchange & Refund
              </button>
            </li>
            <li>
              <button
                onClick={() => openPolicy("privacy")}
                className="hover:text-yellow-500 transition-colors uppercase"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4
            className={`text-base font-serif font-bold mb-5 tracking-widest uppercase ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Get in Touch
          </h4>

          <div className="w-full max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-bold uppercase min-w-[75px] text-left ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                EMAIL:
              </span>
              <div
                className={`flex-1 px-4 py-2.5 rounded-2xl border text-xs font-medium tracking-wide transition-all shadow-md ${
                  theme === "dark"
                    ? "bg-[#121212] border-white/20 text-gray-200 hover:border-yellow-500/60 shadow-yellow-500/5"
                    : "bg-white border-black/20 text-gray-800 hover:border-yellow-600/60 shadow-black/5"
                }`}
              >
                afsan.perfume@gmail.com
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-bold uppercase min-w-[75px] text-left ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                WHATSAPP:
              </span>
              <div
                className={`flex-1 px-4 py-2.5 rounded-2xl border text-xs font-bold tracking-wide transition-all shadow-md ${
                  theme === "dark"
                    ? "bg-[#121212] border-white/20 text-gray-200 hover:border-green-500/60 shadow-green-500/5"
                    : "bg-white border-black/20 text-gray-800 hover:border-green-600/60 shadow-black/5"
                }`}
              >
                +91 83569 15340
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-500/20 text-center text-[11px] tracking-widest uppercase opacity-70">
        © {new Date().getFullYear()} AFSAN Perfumes. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
