import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div
  className="w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh]
  bg-[url('/assets/banner.JPG')] bg-cover bg-center bg-no-repeat
  text-white flex flex-col justify-center items-center gap-5 px-4"
>
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          Find Your <br /> Perfect Companion
        </h1>

        <p className="text-2xl">
          Browse loving pets ready for adoption and start your journey together.
        </p>

        <div className="flex gap-5">
          
        </div>
      </div>

      <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
        
      </div>
    </div>
  );
};

export default Banner;