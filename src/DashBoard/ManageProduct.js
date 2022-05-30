import axios from "axios";
import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import AdminProduct from "./AdminProduct";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    const run = async () => {
      const { data } = await axios.get(
        "https://manufacture-narco.herokuapp.com/adminProducts",
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setProducts(data);
    };
    run();
    console.log(products);
  }, [bool]);
  console.log(products);
  return (
    <div
      id="products"
      className="min-h-screen mx-auto container max-w-7xl py-20"
    >
      <h1 className="text-2xl md:text-4xl font-serif text-center text-neutral-content pb-20">
        <Wave text="OUR PRODUCTS"></Wave>
      </h1>
      <div className="   p-3">
        {products?.map((product, index) => (
          <AdminProduct
            key={index}
            product={product}
            bool={bool}
            setBool={setBool}
          ></AdminProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
