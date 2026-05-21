import React from "react";

const features = [
  {
    icon: "🛡️",
    title: "Verified Pets",
    desc: "All pets are health-checked and verified.",
  },
  {
    icon: "💙",
    title: "Safe Adoption Process",
    desc: "Secure and transparent adoption system.",
  },
  {
    icon: "⏱️",
    title: "Quick Response",
    desc: "Fast approval and communication.",
  },
  {
    icon: "🤝",
    title: "Community Support",
    desc: "We support adopters even after adoption.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Us 🐾
        </h2>
        <p className="text-gray-400 mt-3">
          We make pet adoption safe, simple, and meaningful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#111c33] border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition"
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;