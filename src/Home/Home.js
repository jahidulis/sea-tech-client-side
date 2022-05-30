import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import HomeTools from "./HomeTools";
import Journey from "./Journey";
import ReviewHome from "./ReviewHome";
import Success from "./Success";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeTools></HomeTools>
      <BusinessSummery></BusinessSummery>
      <ReviewHome></ReviewHome>
      <Journey></Journey>
      <Success></Success>
    </div>
  );
};

export default Home;
