import React from "react";
import { Wave } from "react-animated-text";
import sales from "../img/about-2.gif";

const Success = () => {
  return (
    <div className="py-20 ">
      <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content pb-20 ">
        <Wave text="Time To Take Right Step"></Wave>
      </h1>
      <div class="hero  max-w-7xl container mx-auto ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={sales} class=" rounded-lg px-10 " />
          <div className="">
            <h1 class="text-3xl sm:text-5xl font-bold font-serif text-primary">
              Big Things Have Small Beginning
            </h1>
            <p class="py-6 text-lg font-serif">
              Time To Take A Journey With Us. We Assure Our Customers
              Satisfaction And Trust To Be The First Priority.It's The Little
              Details That Are Vital .Little Things Make Big Thins Happen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
