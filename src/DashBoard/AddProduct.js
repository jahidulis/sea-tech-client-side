import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const image_storage_key = "b6e60af4b16e6d05a9237004a930e3b3";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${image_storage_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            price: parseInt(data.price),
            availableQuantity: parseInt(data.quantity),
            description: data.description,
            img: img,
          };

          //send data to database
          fetch("https://manufacture-narco.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added Successfully");
                reset();
              } else {
                toast.error("Failed to Add Product");
              }
            });
        }
        console.log(result);
      });
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center ">
      <h2 className="text-2xl pb-10">Add A New Product</h2>
      <form
        className="p-10 border rounded-lg shadow-current shadow-xl border-primary"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is required",
              },
            })}
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.name?.type === "required" && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.price?.type === "required" && (
              <span className="text-red-600">{errors.price.message}</span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity is required",
              },
            })}
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="text-red-600">{errors.quantity.message}</span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.description?.type === "required" && (
              <span className="text-red-600">{errors.description.message}</span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="file"
            className="bg-primary input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.image?.type === "required" && (
              <span className="text-red-600">{errors.image.message}</span>
            )}
          </label>
        </div>

        <input
          className="btn btn-outline  w-full max-w-xs"
          type="submit"
          value="Add"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
