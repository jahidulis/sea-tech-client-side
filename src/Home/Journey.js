import React from "react";
import { Wave } from "react-animated-text";
import progress from "../img/Progress Chart.gif";

const Journey = () => {
  return (
    <div className=" ">
      <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content pb-20">
        <Wave text="Let's Take A Speed Tour"></Wave>
      </h1>
      <div class="hero  max-w-7xl container mx-auto">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={progress} class=" rounded-lg  shadow-2xl" />
          <div>
            <h1 class="text-3xl sm:text-5xl font-bold font-serif text-primary">
              Boost Your Speed UpTo 78 %
            </h1>
            <p class="py-6 text-lg font-serif">
              Build Your Dream SetUp With Us To Become The Evidence of Speed .
              We Promise To Maximize Your Performance With Less Energy
              Consumption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
