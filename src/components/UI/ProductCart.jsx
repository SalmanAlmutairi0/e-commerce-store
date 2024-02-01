import React from "react";
import { convertNumberToArray } from "../../utility";

export default function ProductCart({ product, quantity, setQuantity }) {
  const rating = convertNumberToArray(Math.floor(product.rating?.rate));

  return (
    <div className="flex w-4/5 items-center gap-16 rounded-lg bg-white p-3">
      <img
        src={product.image}
        className="max-w-64 rounded-3xl"
        alt="product image"
      />

      <div className="flex w-full flex-col gap-7">
        <h1 className="text-2xl font-medium">{product.title}</h1>
        {/* description */}
        <p className="text-gray-500">{product.description}</p>
        {/* <p className="text-3xl font-medium">$100</p> */}

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {rating.map((_, index) => (
              <p key={index}>⭐</p>
            ))}
          </div>
          <p>{Math.floor(product.rating?.rate)}/5</p>
        </div>

        {/* price  */}
        <div className="flex justify-between  ">
          <p className="text-3xl font-medium">
            ${product.price} <span className="text-md"> x </span> {quantity}
          </p>

          <div className="flex items-center justify-between gap-7">
            <button
              className="text-3xl text-red-500 hover:text-red-700"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <p className="text-2xl">{quantity}</p>
            <button
              className="text-3xl text-green-500 hover:text-green-700"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
