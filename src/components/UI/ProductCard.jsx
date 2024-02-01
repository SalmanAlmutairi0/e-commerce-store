import React from "react";
import addToCartIcon from "../../assets/icons/add-icon.png";
import { Link } from "react-router-dom";
import { addToCart } from "../../utility";
export default function ProductCard({
  productImg,
  prodectName,
  productprice,
  setCart,
  prodectId,
}) {
  return (
    <div className="flex w-64 cursor-pointer flex-col gap-6 rounded-lg bg-white p-2 shadow-md duration-200 ease-in hover:scale-105 ">
      <Link to={`/details/${prodectId}`}>
        <img src={productImg} alt="img" className=" mx-auto h-52 object-fill" />
      </Link>

      <div className=" flex h-36 flex-col justify-between">
        <h3 className="text-gray-500">{prodectName}</h3>

        <div className="mt-4 flex items-center justify-between ">
          <p className="text-lg font-semibold">${productprice}</p>
          {/* add to cart icon */}
          <button
            className="rounded-lg p-1 hover:bg-slate-300"
            onClick={() => addToCart(setCart, prodectId)}
          >
            <img
              src={addToCartIcon}
              alt="add to cart"
              className="w-8 cursor-pointer "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
