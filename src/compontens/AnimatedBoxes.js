import { useState } from "react";
import TradingImg from "../assets/Trading.gif";
import RobotImg from "../assets/Robot.gif";
import GraphImg from "../assets/Graph.gif";

const AnimatedBoxes = () => {
  // State to track the active box
  const [activeBox, setActiveBox] = useState(1);

  // Function to handle box clicks
  const handleClick = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  return (
    <div className="min-h-[80vh] w-full flex flex-col md:flex-row justify-center items-end space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-8">
      {/* Box 1 */}
      <div
        onClick={() => handleClick(1)}
        className={`${
          activeBox === 1
            ? "w-full md:w-1/2 h-[70vh] md:h-[70vh] bg-orange-50"
            : "w-full md:w-1/4"
        } transition-height duration-200 bg-white border border-orange-400 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl cursor-pointer relative`}
      >
        <div className="pb-3">
          <span className="text-gray-600 bg-gray-200 px-1 py-0.5 rounded-md">
            Services
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Specially Curated Trading Environment
        </h2>
        <p className="text-gray-600 text-md md:text-lg mt-4">
          Experience a world-class trading environment curated just for you.
          We’ve partnered with internationally recognized brands and
          well-regulated institutions that offer state-of-the-art technology,
          ensuring you trade with confidence and security.
        </p>
        {activeBox === 1 && (
          <div className="w-full h-auto pt-5 md:pt-7 flex justify-center items-center">
            <img className="object-cover" src={TradingImg} alt="Trading" />
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="orange"
          className="bi bi-arrow-right absolute top-[50%] -right-[16px]"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </div>

      {/* Box 2 */}
      <div
        onClick={() => handleClick(2)}
        className={`${
          activeBox === 2
            ? "w-full md:w-1/2 h-[70vh] md:h-[70vh] bg-orange-50"
            : "w-full md:w-1/4"
        } transition-height duration-300 bg-white border border-orange-400 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl cursor-pointer relative`}
      >
        <div className="pb-3">
          <span className="text-gray-600 bg-gray-200 px-1 py-0.5 rounded-md">
            Services
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Automated Copy Trading with Global Experts
        </h2>
        <p className="text-gray-600 text-md md:text-lg mt-4">
          Gain access to over 500 expert traders from around the world. Review
          their strategies, performance history, and rankings before committing
          as little as $200 per trader. Diversify your investments across
          different asset classes, traders, and strategies.
        </p>
        {activeBox === 2 && (
          <div className="w-full h-auto pt-5 md:pt-7 flex justify-center items-center">
            <img className="object-cover " src={GraphImg} alt="Graph" />
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="orange"
          className="bi bi-arrow-right absolute top-[50%] -right-[16px]"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </div>

      {/* Box 3 */}
      <div
        onClick={() => handleClick(3)}
        className={`${
          activeBox === 3
            ? "w-full md:w-1/2 h-[70vh] md:h-[70vh] bg-orange-50"
            : "w-full md:w-1/4"
        } transition-height duration-200 bg-white border border-orange-400 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl cursor-pointer relative`}
      >
        <div className="pb-3">
          <span className="text-gray-600 bg-gray-200 px-1 py-0.5 rounded-md">
            Services
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Meet SumBot3.0 - AI-Enabled Financial Research
        </h2>
        <p className="text-gray-600 text-md md:text-lg mt-4">
          Unlock the power of AI with SumBot3.0, your personal financial
          research assistant. Trained on billions of data points, SumBot3.0
          delivers deep market insights and analysis to keep you ahead in the
          trading game.
        </p>
       
         {activeBox === 3 && (
          <div className="w-full h-auto pt-5 md:pt-7 flex justify-center items-center">
            <img className="object-cover " src={RobotImg} alt="Robot" />
          </div>
        )}
      
      </div>
    </div>
  );
};

export default AnimatedBoxes;
