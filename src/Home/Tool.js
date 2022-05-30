import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../Authentication/useAdmin";
import auth from "../firebase.init";

const Tool = ({ product }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { name, price, description, availableQuantity, img, _id } = product;
  const navigate = useNavigate();
  const handlePurchase = () => {
    if (admin) {
      toast.error("Admin Can't Purchase");
    } else {
      navigate(`/purchase/${_id}`);
    }
  };
  return (
    // <div class="card lg:card-side bg-neutral-focus shadow-xl shadow-current">
    //   <figure>
    //     <img src={img} alt="Album" />
    //   </figure>
    //   <div class="card-body">
    //     <h2 class="card-title">New album is released!</h2>
    //     <p>Click the button to listen on Spotiwhy app.</p>
    //     <div class="card-actions justify-end">
    //       <button class="btn btn-primary">Listen</button>
    //     </div>
    //   </div>
    // </div>
    <div class="card font-bold bg-neutral-focus shadow-current shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body  ">
        <h2 class="card-title font-serif">{name}</h2>
        <p>
          <span className="text-warning text-xl font-serif">Price: </span>${" "}
          {price}
        </p>
        <p>
          <span className="font-serif text-warning text-xl">Available: </span>
          {availableQuantity} PCS
        </p>

        <p>
          <span className="font-serif text-warning text-xl">Description: </span>{" "}
          {description.slice(0, 200)}...Read More
        </p>
        <div class="card-actions items-center">
          <p className="text-sm border py-1 text-center  rounded">
            <span className="font-serif">Minimum Order Quantity</span>:{" "}
            <span className="text-md text-primary">100</span>
          </p>
          <button
            onClick={() => {
              handlePurchase(product);
            }}
            class="btn btn-primary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
