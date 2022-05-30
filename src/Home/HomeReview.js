import React from "react";
import { DynamicStar } from "react-dynamic-star";

const HomeReview = ({ singleReview }) => {
  // console.log(singleReview);
  const { username, review, rating, productname } = singleReview;
  return (
    <div class="card  bg-neutral-focus shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-serif font-bold">{productname}</h2>
        <h2 className="flex items-center">
          <span className="mr-3 font-serif font-bold">Rating:</span>
          <DynamicStar
            outlined
            width={parseFloat(20)}
            height={parseFloat(20)}
            // width={"20px"}
            rating={rating}
          ></DynamicStar>
        </h2>
        <p className="font-serif text-sm">{review}</p>

        <p>
          By <span className="ml-3 font-serif font-bold">{username}</span>
        </p>
      </div>
    </div>
  );
};

export default HomeReview;
