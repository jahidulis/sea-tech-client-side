import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { async } from "@firebase/util";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAdmin from "../Authentication/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const CheckoutForm = ({ order }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  console.log(order);

  const { paymentAmount, name, email } = order;
  console.log(paymentAmount);
  console.log(order);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    fetch("https://manufacture-narco.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ paymentAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [paymentAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    //confirm payment

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setCardError("");
      console.log(paymentIntent);
      order.transactionId = paymentIntent.id;
      fetch("https://manufacture-narco.herokuapp.com/orderUpdate", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Your Payment Completed!!");
            toast.success(`Transaction Id: ${paymentIntent.id}`);
            if (admin) {
              navigate("/dashBoard/manageAllOrder");
            } else {
              navigate("/dashBoard/myOrder");
            }
          }
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-4 btn-sm btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 font-serif">{cardError}</p>}
      {success && (
        <div className="text-green-500 font-serif">
          <p>{success}</p>
          <p>
            Your Transaction Id:{" "}
            <span className="text-purple-500">{transactionId}</span>
          </p>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CheckoutForm;
