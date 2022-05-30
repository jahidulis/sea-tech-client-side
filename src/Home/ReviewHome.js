import axios from "axios";
import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import Loading from "../Shared/Loading";
import HomeReview from "./HomeReview";

const ReviewHome = () => {
  const [reviews, setReviews] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const run = async () => {
      const { data } = await axios.get(
        "https://manufacture-narco.herokuapp.com/homeReview"
      );
      setReviews(data);
      setFlag(false);
    };
    run();
  }, []);
  // console.log(reviews);
  if (flag) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-20 px-10  container mx-auto max-w-7xl">
      <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content pb-20">
        <Wave text="Reviews"></Wave>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {reviews?.map((singleReview, index) => (
          <HomeReview key={index} singleReview={singleReview}></HomeReview>
        ))}
      </div>
    </div>
  );
};

export default ReviewHome;
