import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L54VPLo6lB86vPDMVxMR6Qvqy0eTopfzJLXvsKNY5ijaR1OrPrFO1InU18KEq4YUldKCKLpzihxtNXJTkzi3y7i00HLYog8Y7"
);

const Payment = ({}) => {
  const param = useParams();
  const id = param.json;
  const order = JSON.parse(id);
  console.log(order);

  return (
    <div className="w-full p-20">
      <div class="mx-auto card w-96 bg-primary shadow-xl ">
        <div class="card-body font-serif">
          <p>Product Name:{order.productName}</p>
          <p>Amount: ${order.paymentAmount}</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
