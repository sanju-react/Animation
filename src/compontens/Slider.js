import React, { useEffect, useState, useRef } from "react";

const Slider = () => {
  const [boxSize, setBoxSize] = useState({ width: 500, height: 50 }); // Initial size for width and height
  const containerRef = useRef(null); // Reference to the parent container

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        const parentHeight = containerRef.current.offsetHeight;

        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Calculate new dimensions based on scroll (increasing width and height, but constrained by the parent's size)
        const newWidth = Math.min(
          Math.max(500, scrollPosition + 500),
          parentWidth
        );
        const newHeight = Math.min(
          Math.max(50, scrollPosition + 50),
          parentHeight
        );

        // Set new width and height ensuring it doesn't overflow the container
        setBoxSize({ width: newWidth, height: newHeight });
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen p-[30px] relative flex justify-center items-center">
      {/* Caret SVG Icons */}
      <div className="absolute -top-10 flex flex-col justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="lightgray"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="darkgray"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="gray"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>

      {/* Resizable Box */}
      <div
        className="w-full h-full flex justify-center items-center"
        ref={containerRef}
      >
        <div
          className="bg-zinc-700 rounded-3xl transition-width duration-500 ease-linear"
          style={{
            width: `${boxSize.width}px`,
            height: `${boxSize.height}px`,
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
