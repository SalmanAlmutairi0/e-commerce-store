import React, { useEffect, useState } from "react";

import LoadingScreen from "../components/UI/LoadingScreen";
import addToCartIcon from "../assets/icons/add-icon.png";
import { addToCart, convertNumberToArray } from "../utility";
// import { addToCart } from '../utility'
export default function Details({ setCart }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const productId = window.location.pathname.split("/").pop();

  useEffect(() => {
    const getProduct = async (productId) => {
      setLoading(true);
      const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    };

    getProduct(productId);
  }, [productId]);



  const rating = convertNumberToArray(Math.floor(product.rating?.rate));

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16">
      {loading && <LoadingScreen />}

      <div className="flex w-1/2 items-center justify-between gap-5 rounded-3xl bg-white p-6">
        <img src={product.image} alt="" className="max-w-64 rounded-3xl" />

        <div className="ml-5 flex flex-col gap-5">
          <h1 className="text-3xl font-medium">{product.title}</h1>

          {/* rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {rating.map((_, index) => (
                <p key={index}>⭐</p>
              ))}
            </div>
            <p>{Math.floor(product.rating?.rate)}/5</p>
          </div>

          {/* price */}
          <p className="text-3xl font-medium">${product.price}</p>
          {/* description */}
          <p className="text-gray-500">{product.description}</p>

          <div className="mx-6 flex justify-end">
            <button
              className="flex w-44 items-center justify-between rounded-lg bg-black p-2 px-5 text-white duration-300 ease-out hover:scale-105"
              onClick={() => addToCart(setCart, product.id)}
            >
              Add To Cart
              <img src={addToCartIcon} alt="add to cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
