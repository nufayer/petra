import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.JPG')] text-white  flex justify-between flex-col items-center  gap-5 h-185 w-full">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          Adopt Your <br /> Next Pet
        </h1>

        <p className="text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-blue-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Pets
          </button>
        </div>
      </div>

      <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
        
      </div>
    </div>
  );
};

export default Banner;