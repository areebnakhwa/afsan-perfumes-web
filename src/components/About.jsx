import React from "react";

const About = ({ theme }) => {
  const features = [
    {
      id: 1,
      title: "100% Alcohol-Free",
      desc: "Pure concentrated oils that are gentle on your skin and deeply resonant, staying true to traditional attar purity.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "24+ Hours Aura",
      desc: "Formulated for extraordinary longevity. A single drop leaves a captivating trail that lingers from dawn to dusk.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Masterfully Crafted",
      desc: "Hand-blended by master perfumers using rare ingredients, ensuring every bottle is a masterpiece of luxury.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4T7.88 2.05L7.05 3m6.9 0l-.83-.95T15 2l1.95 5.85m-4.5 9.15v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5a2 2 0 012-2h4a2 2 0 012 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden ${theme === "dark" ? "bg-[#050505]" : "bg-white"}`}
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-[10px] font-bold uppercase tracking-[0.3em] mb-4 px-4 py-1.5 rounded-full border ${theme === "dark" ? "border-yellow-500/30 text-yellow-500 bg-yellow-500/5" : "border-yellow-600/30 text-yellow-600 bg-yellow-500/5"}`}
          >
            The Heritage
          </span>
          <h2
            className={`text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            The Essence of{" "}
            <span
              className={
                theme === "dark" ? "text-yellow-500" : "text-yellow-600"
              }
            >
              AFSAN
            </span>
          </h2>
          <p
            className={`text-sm md:text-lg font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            Born from a passion for authentic perfumery, AFSAN redefines luxury
            with 100% alcohol-free concentrated attars. We source the rarest
            ingredients globally to craft signature blends that speak of
            timeless elegance and royalty.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className={`group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:border-yellow-500/30 hover:bg-white/10"
                  : "bg-black/5 border-black/5 hover:border-yellow-600/30 hover:bg-black/10"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  theme === "dark"
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-yellow-600/10 text-yellow-600"
                }`}
              >
                {item.icon}
              </div>
              <h3
                className={`text-xl font-serif font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
