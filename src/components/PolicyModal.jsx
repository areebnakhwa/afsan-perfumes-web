import React, { useState, useEffect } from "react";

const PolicyModal = ({ isOpen, onClose, initialTab = "terms", theme }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6 animate-fade-in-up">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden ${theme === "dark" ? "bg-[#0f0f0f] border border-white/10" : "bg-white border border-black/10"}`}
      >
        {/* Header & Tabs */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center p-6 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
        >
          <h2
            className={`text-2xl font-serif font-bold tracking-wider uppercase mb-4 md:mb-0 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Legal & Policies
          </h2>
          <div className="flex gap-2 bg-black/20 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === "terms" ? "bg-yellow-500 text-black shadow-md" : "text-gray-400 hover:text-white"}`}
            >
              Terms
            </button>
            <button
              onClick={() => setActiveTab("exchange")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === "exchange" ? "bg-yellow-500 text-black shadow-md" : "text-gray-400 hover:text-white"}`}
            >
              Exchange
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === "privacy" ? "bg-yellow-500 text-black shadow-md" : "text-gray-400 hover:text-white"}`}
            >
              Privacy
            </button>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-500/20 hover:bg-red-500 hover:text-white transition-colors text-gray-400"
          >
            ✕
          </button>
        </div>

        {/* Content Area (Scrollable) */}
        <div
          className={`flex-1 overflow-y-auto p-6 md:p-10 space-y-6 text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          {activeTab === "terms" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3
                  className={`text-3xl font-serif font-bold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  TERMS & CONDITIONS
                </h3>
                <p className="text-yellow-500 font-bold tracking-widest uppercase text-xs">
                  AFSAN Perfume • Effective Date: [DD/MM/YYYY]
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  1. About Us
                </h4>
                <p>
                  AFSAN Perfume is a fragrance business based in India offering
                  attar and perfume oil products. These Terms & Conditions
                  govern your use of our website, communication with us through
                  WhatsApp, and purchases made from AFSAN Perfume.
                </p>
                <ul className="mt-2 space-y-1 opacity-80 text-xs">
                  <li>
                    <strong>Business/Legal Name:</strong> [Insert Legal Business
                    Name]
                  </li>
                  <li>
                    <strong>Business Address:</strong> [Insert Full Business
                    Address]
                  </li>
                  <li>
                    <strong>Email:</strong> [Insert Business Email]
                  </li>
                  <li>
                    <strong>WhatsApp:</strong> [Insert Business Number]
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  2. Products and Descriptions
                </h4>
                <p>
                  We make reasonable efforts to ensure that product
                  descriptions, photographs, bottle sizes, packaging and prices
                  are accurate. Minor variations in the appearance of products
                  may occur due to lighting, photography or display settings.
                </p>
                <p className="mt-2">
                  Fragrance preferences are subjective, and the fragrance
                  experience may differ between individuals. Please review the
                  product description and quantity before ordering.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  3. Orders Through WhatsApp
                </h4>
                <p>
                  Customers may place orders by contacting us through our
                  official WhatsApp number. Before confirming an order, we will
                  communicate the selected products, quantities, total price,
                  shipping charges, payment method and delivery details.
                </p>
                <p className="mt-2">
                  An order is accepted when AFSAN Perfume confirms it. Orders
                  are subject to stock availability and applicable payment
                  requirements. Customers must provide accurate contact and
                  delivery information.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  4. Pricing and Payment
                </h4>
                <p>
                  All prices are stated in Indian Rupees (INR). Applicable taxes
                  and delivery charges will be communicated before order
                  confirmation. Payment instructions will be provided through
                  our official communication channels. Customers should verify
                  payment details before making a transfer.
                </p>
                <p className="mt-2 font-bold text-red-400">
                  We will not ask customers to disclose their banking passwords,
                  PINs or OTPs.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  5. Shipping and Delivery
                </h4>
                <p>
                  Orders will be processed and shipped according to our Shipping
                  Policy. Delivery estimates may vary depending on the
                  destination, courier service and circumstances beyond our
                  reasonable control.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  6. Returns and Refunds
                </h4>
                <p>
                  Returns, replacements and refunds are governed by our Return &
                  Refund Policy. Eligible unopened products and products that
                  arrive damaged, defective or incorrect may qualify under that
                  policy. Nothing in these Terms & Conditions removes any
                  consumer right available under applicable law.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  7. Safe Use
                </h4>
                <p>
                  Use products according to their labels and instructions. Avoid
                  contact with eyes and irritated or broken skin. Discontinue
                  use if irritation occurs. Keep products away from children and
                  from heat or open flames where applicable.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                  8. Intellectual Property
                </h4>
                <p>
                  The AFSAN Perfume name, logo, original photographs, packaging
                  artwork and website content may not be copied, reproduced or
                  commercially used without permission, except where permitted
                  by law.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                    9. Website and Comm.
                  </h4>
                  <p>
                    Customers must not use our website or communication channels
                    for fraudulent, unlawful or abusive activities. We may
                    restrict access where reasonably necessary and permitted by
                    law.
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                    10. Liability
                  </h4>
                  <p>
                    Nothing in these terms excludes liability that cannot
                    legally be excluded or limits consumer rights under Indian
                    law.
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                    11. Privacy
                  </h4>
                  <p>
                    Customer information will be handled in accordance with our
                    Privacy Policy and applicable data protection laws.
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                    12. Changes
                  </h4>
                  <p>
                    We may update these Terms & Conditions from time to time.
                    The latest version and its effective date will be published
                    on our website.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2"></h4>
              </div>

              <div
                className={`p-6 rounded-2xl border ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}
              >
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-4">
                  13. Contact and Complaints
                </h4>
                <p className="mb-2">
                  For order-related questions or complaints, contact:
                </p>
                <ul className="space-y-1 text-sm opacity-90 mb-4">
                  <li>
                    <strong>Email:</strong> [ afsan.perfume@gmail.com]
                  </li>
                  <li>
                    <strong>WhatsApp:</strong> [+91 83569 15340]
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-500/30">
                  <p>
                    <strong>Complaint Acknowledgement Target:</strong> Within 48
                    hours
                  </p>
                  <p>
                    <strong>Complaint Resolution Target:</strong> Within 30
                    days, subject to applicable legal requirements.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "exchange" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3
                  className={`text-3xl font-serif font-bold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  EXCHANGE & REFUND POLICY
                </h3>
                <p className="text-yellow-500 font-bold tracking-widest uppercase text-xs">
                  AFSAN Perfume
                </p>
              </div>
              <p>
                Because attars and perfumes are personal care items, we follow a
                strict hygiene policy. We currently do not accept returns on
                opened or used products based on subjective fragrance
                preferences.
              </p>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2 mt-6">
                Damaged or Incorrect Items
              </h4>
              <p>
                If you receive a damaged bottle, leaked oil, or an incorrect
                item, please notify us via WhatsApp within 48 hours of delivery.
                Share an unboxing video and photos of the damaged item. We will
                arrange a replacement or provide a refund for valid claims.
              </p>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2 mt-6">
                Order Cancellations
              </h4>
              <p>
                Orders can only be cancelled before they are dispatched. Once
                shipped, cancellations are not permitted.
              </p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3
                  className={`text-3xl font-serif font-bold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  PRIVACY POLICY
                </h3>
                <p className="text-yellow-500 font-bold tracking-widest uppercase text-xs">
                  AFSAN Perfume
                </p>
              </div>
              <p>
                Your privacy is important to us. When you place an order via
                WhatsApp or our website, we collect necessary information such
                as your name, delivery address, and contact number solely for
                the purpose of fulfilling your order.
              </p>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2 mt-6">
                Data Security
              </h4>
              <p>
                We do not share, sell, or rent your personal information to
                third parties. All conversations and order details shared on our
                official WhatsApp are kept confidential and secure.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
