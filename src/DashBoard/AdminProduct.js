import React from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";
import { toast } from "react-toastify";

const AdminProduct = ({ product, bool, setBool }) => {
  const { name, price, description, availableQuantity, img, _id } = product;
  const navigate = useNavigate();
  //   const submit = () => {
  //     confirmAlert({
  //       title: "Confirm to submit",
  //       message: "Are you sure to do this.",
  //       buttons: [
  //         {
  //           label: "Yes",
  //           onClick: () => alert("Click Yes"),
  //         },
  //         {
  //           label: "No",
  //           onClick: () => alert("Click No"),
  //         },
  //       ],
  //     });
  //   };
  const handleDelete = async () => {
    if (window.confirm("Are You Sure")) {
      const { data } = await axios.delete(
        `https://manufacture-narco.herokuapp.com/product?_id=${_id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (data.deletedCount) {
        toast.success("Product Deleted");
        setBool(!bool);
      }
    }
  };
  return (
    <div class="rounded-3xl lg:flex  font-bold bg-neutral-focus shadow-current shadow-xl mb-5">
      <figure class="flex items-center justify-center p-10">
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
          {description?.slice(0, 200)}...Read More
        </p>
        <div class="card-actions items-center">
          <button onClick={handleDelete} class="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
