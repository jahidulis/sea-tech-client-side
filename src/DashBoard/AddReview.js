import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";

const AddReview = () => {
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      username: event.target.name.value,
      productname: event.target.productname.value,
      review: event.target.description.value,
      rating: event.target.rating.value,
    };
    console.log(review);
    fetch("https://manufacture-narco.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success(" Review added successful");
          // navigate("/");
        }
      });
  };
  const Rating = () => {
    const value = document.getElementById("rating").value;
    if (value < 1) {
      setError("can't Be Less Than 1");
    } else if (value > 5) {
      setError("Can't Be More Than 5");
    } else {
      setRating(parseFloat(value));
      setError(null);
    }
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center ">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl  text-center">Add Review</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-5  grid grid-cols-1 gap-3 justify-items-center border rounded-lg p-4"
        >
          <input
            type="text"
            name="name"
            value={user.displayName}
            disabled
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="Product Name"
            required
            name="productname"
            className="input input-bordered w-full max-w-xs"
          />
          <label>Rating Between[1-5]</label>
          <input
            required
            onChange={Rating}
            type="tel"
            id="rating"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full max-w-xs"
          />
          {error && <p className="text-error font-bold">{error}</p>}
          <input
            required
            type="text"
            id="education"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="submit"
            value="Add"
            className=" btn btn-bordered btn-secondary  max-w-xs"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddReview;
