import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrderCard = ({ order }) => {
  const navigate = useNavigate();
  const {
    productName,
    orderAmount,
    status,
    transactionId,
    paymentAmount,
    address,
    phone,
  } = order;

  const handlePay = () => {
    const orderJson = JSON.stringify(order);
    navigate(`/dashboard/payment/${orderJson}`);
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
            <span className="text-primary">Payment Amount: </span>${" "}
            {paymentAmount}
          </p>
          <p>
            <span className="text-primary">Contact No: </span>
            {phone}
          </p>
          <p>
            <span className="text-primary">Address: </span>
            {address}
          </p>
          {transactionId && (
            <p>
              <span className="text-primary">Transaction ID: </span>{" "}
              {transactionId}
            </p>
          )}
          <p>
            <span className="text-primary">Status: </span>
            {status !== "delivered" && (
              <>
                <span className="btn btn-xs btn-warning">{status}</span>
              </>
            )}

            {status === "delivered" && (
              <span className="btn btn-xs btn-success">{status}</span>
            )}
          </p>
          {!transactionId && (
            <>
              <button
                onClick={handlePay}
                className="btn btn-sm btn-success min-w-max mx-auto"
              >
                Pay
              </button>

              <button className="btn btn-sm btn-error min-w-max mx-auto">
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
