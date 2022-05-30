import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import MyOrderCard from "./MyOrderCard";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    fetch(`https://manufacture-narco.herokuapp.com/myOrder?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setFlag(false);
      });
  }, []);
  if (flag) {
    return <Loading></Loading>;
  }

  return (
    <div
      id="products"
      className="min-h-screen mx-auto container flex flex-col max-w-7xl py-5"
    >
      <h1 className="text-2xl md:text-4xl font-serif text-center text-neutral-content pb-20">
        <Wave text="My Orders"></Wave>
      </h1>
      {console.log(myOrder)}
      <div className=" px-5">
        {myOrder?.map((order, index) => (
          <MyOrderCard key={index} order={order}></MyOrderCard>
        ))}
        {myOrder.length < 1 && (
          <h1 className="text-2xl md:text-7xl font-serif text-center text-neutral-content pt-20">
            <Wave text="Nothing In Order"></Wave>
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
