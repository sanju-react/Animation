import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(-50px)" },
    delay: 200,
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[90vh] px-4 md:px-8 lg:px-16">
        <h1
          style={{ color: "#424242" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl  text-white text-center mb-10"
        >
          BEST THINGS COME IN <span className="font-bold">3</span>
        </h1>
        <h2
          style={{ color: "#FF823C" }}
          className=" text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold  text-white text-center"
        >
          YOU, US &{" "}
          <span className="border-r-2 bg-gradient-to-r from-transparent to-orange-100  border-orange-500">
            MARKETS
          </span>
        </h2>

       
        <div className="w-full pt-14 max-w-screen-xl flex justify-center items-center">
          <button className="text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-[30px] sm:rounded-[40px] md:rounded-[50px] cursor-pointer border py-2 sm:py-2 md:py-3 lg:py-3 px-4 sm:px-5 md:px-6 lg:px-8 border-orange-400 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36">
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
