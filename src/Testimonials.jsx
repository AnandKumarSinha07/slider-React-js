import React, { useState } from "react";
import Card from "./Card";
import reviews from "./data";
import { GrPrevious, GrNext } from "react-icons/gr";


const Testimonials = ({ props }) => {

    const [index,setindex]=useState(0);

    const leftShift=()=>{
        
        if(index-1<0){
            setindex(reviews.lenght-1)
        }
        else{
            setindex(index-1);
        }
  
    }

    const rightShift=()=>{
          
         if(index+1>=reviews.length){
            setindex(0)
         }
        else{
            setindex(index+1);
        }
    }

    const surpriseMe=()=>{
        const intRandom= Math.floor(Math.random()* reviews.length);
        setindex(intRandom);
    }




  console.log("inside testimonials", props);
  return (
    <div>
      <Card prop={reviews[index]} />

      <div className="mt-6 space-x-4 mx-44">

        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
          onClick={leftShift}>
          <GrPrevious />
        </button>

        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
        onClick={rightShift}>
          <GrNext />
        </button>

      </div>

      <div className="mt-6">
        <button className="px-3 mx-44 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={surpriseMe}>
          Surprise me
        </button>
      </div>

    </div>
  );
};

export default Testimonials;
