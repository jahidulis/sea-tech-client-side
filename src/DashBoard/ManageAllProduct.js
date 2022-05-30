import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import AllOrderCard from "./AllOrderCard";

const ManageAllProduct = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [bool, setBool] = useState(true);
  const [user] = useAuthState(auth);
  // const [flag, setFlag] = useState(true);
  // console.log(bool);
  // const [availableQuantity, setAvailableQuantity] = useState([]);

  useEffect(() => {
    fetch(`https://manufacture-narco.herokuapp.com/allOrder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllOrder(data);
        setBool(false);
      });
  }, [bool]);
  // console.log(allOrder);
  if (bool) {
    return <Loading></Loading>;
  }
  return (
    <div
      id="products"
      className="min-h-screen mx-auto container flex flex-col max-w-7xl py-5"
    >
      <h1 className="text-2xl md:text-4xl font-serif text-center text-neutral-content pb-20">
        <Wave text="Manage All Orders"></Wave>
      </h1>

      <div className=" px-5">
        {allOrder?.map((order, index) => (
          <AllOrderCard
            // availableQuantity={availableQuantity}
            // setAvailableQuantity={setAvailableQuantity}
            bool={bool}
            setBool={setBool}
            key={index}
            order={order}
          ></AllOrderCard>
        ))}
      </div>
    </div>
  );
};

export default ManageAllProduct;
