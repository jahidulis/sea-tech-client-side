import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllOrderCard = ({
  order,
  setBool,
  bool,
  // availableQuantity,
  // setAvailableQuantity,
}) => {
  const {
    productName,
    orderAmount,
    status,
    transactionId,
    paymentAmount,
    product_id,
    _id,
  } = order;
  const [availableQuantity, setAvailableQuantity] = useState([]);

  useEffect(() => {
    fetch(`https://manufacture-narco.herokuapp.com/available?product_id=${product_id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAvailableQuantity(data[0].availableQuantity));
  }, [bool]);
  //   console.log(availableQuantity);

  const handleDeliver = () => {
    fetch(
      `https://manufacture-narco.herokuapp.com/update?product_id=${product_id}&&_id=${_id}&&orderAmount=${orderAmount}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Delivered Successfully");

          setBool(!bool);
        }
      });
  };

  return (
    <div>
      <div class="card bg-neutral-focus mb-5 shadow-xl font-serif">
        <div class="card-body">
          <h2 class="card-title">
            <span className="text-primary">Product Name: </span>
            {productName}
          </h2>
          <p>
            <span className="text-primary">Order Amount: </span>
            {orderAmount}
          </p>
          <p>
            <span className="text-primary">Available Quantity: </span>
            {availableQuantity}
          </p>
          <p>
            <span className="text-primary">Payment Amount: </span>${" "}
            {paymentAmount}
          </p>

          {transactionId && (
            <p>
              <span className="text-primary">Transaction ID: </span>{" "}
              {transactionId}
            </p>
          )}
          <p>
            <span className="text-primary">Status: </span>
            <span className="btn btn-xs btn-warning">{status}</span>
          </p>
          <p>
            {/* <span className="text-primary">Status: </span> */}
            {status === "pending" && (
              <button
                onClick={() => handleDeliver()}
                className="btn btn-xs btn-error"
              >
                Deliver
              </button>
            )}
            {status === "delivered" ? (
              <button className="btn btn-xs btn-success ">Shipped</button>
            ) : (
              ""
            )}
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AllOrderCard;
