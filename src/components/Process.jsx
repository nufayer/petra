import React from "react";

const steps = [
  {
    step: "1",
    title: "Browse Pets",
    desc: "Explore available pets that need a loving home.",
  },
  {
    step: "2",
    title: "Submit Application",
    desc: "Fill out a simple adoption form.",
  },
  {
    step: "3",
    title: "Meet & Connect",
    desc: "Interact with the pet before adoption.",
  },
  {
    step: "4",
    title: "Bring Them Home",
    desc: "Complete adoption and welcome your new friend.",
  },
];

const AdoptionProcess = () => {
  return (
    <section className="w-full bg-[#0b1220] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple Adoption Process 🐾
        </h2>
        <p className="text-gray-400 mt-3">
          Just a few easy steps to find your perfect companion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#111c33] border border-white/10 rounded-2xl p-6 text-center hover:translate-y-[-5px] transition"
          >
            <div className="text-4xl font-bold text-blue-400">
              {item.step}
            </div>
            <h3 className="text-lg font-semibold mt-3">
              {item.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              {item.desc}
            </p>

            {idx !== steps.length - 1 && (
              <div className="hidden md:block absolute right-[-18px] top-1/2 text-gray-600">
                ➝
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdoptionProcess;