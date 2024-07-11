import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = ({ prop }) => {
  console.log("inside card", prop);
  return (
    <div className="flex flex-col items-center relative md:flex md:flex-col md:items-center">
    
    
      <div className="absolute top-[-7rem] z-10">
        <img
          src={prop.image}
          alt=""
          className="rounded-full w-40 h-40 md:w-56 md:h-56 border-4 border-white shadow-lg"
        />
      </div>

    
      <div className="mt-3 text-lg font-bold">{prop.job}</div>

      <div className="text-xl font-semibold">{prop.name}</div>


      <div className="mt-4 text-3xl text-gray-500"><FaQuoteLeft /></div>

      
      <div className="max-w-md text-center mt-4">{prop.text}</div>

     
      <div className="mt-4 text-2xl text-gray-900"><FaQuoteRight /></div>

    
      

    </div>
  );
};

export default Card;
