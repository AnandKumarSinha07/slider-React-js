import React from "react";
import Testimonials from "./Testimonials.jsx";
import reviews from "./data.js";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Our Testimonials</h1>
        <div className="w-20 h-4 mx-auto mt-[101px] bg-violet-400"></div> {/* Adjusted width */}
      </div>
      <Testimonials props={reviews} /> {/* Pass reviews as props */}
    </div>
  );
};

export default App;
