import React from "react";

import Hero from "./compontens/Hero";
import Slider from "./compontens/Slider";
import AnimatedBoxes from "./compontens/AnimatedBoxes";

const App = () => {
  return (
    <>
      <div className="app">
        <Hero />
        <Slider/>
        <AnimatedBoxes />
      </div>
    </>
  );
};

export default App;
