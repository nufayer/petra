import React from "react";

const PetInfoSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          Everything About Pets
        </h2>
        <p className="text-gray-500 mt-2">
          Learn, adopt, and take better care of your future companion 🐾
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Why Adopt Pets */}
        <div className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Why Adopt Pets ❤️
          </h3>
          <p className="text-gray-600">
            Adopting a pet saves lives and gives animals a second chance.
            You gain a loyal friend while helping reduce stray populations.
          </p>
        </div>

        {/* Success Stories */}
        <div className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Success Stories 🌟
          </h3>
          <p className="text-gray-600">
            Thousands of pets have found loving homes through adoption.
            Read inspiring stories of families and their rescued companions.
          </p>
        </div>

        {/* Pet Care Tips */}
        <div className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Pet Care Tips 🐶
          </h3>
          <p className="text-gray-600">
            Learn how to properly care for your pets with nutrition,
            training, and health tips to keep them happy and active.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PetInfoSection;