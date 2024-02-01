import React, { useEffect, useState } from "react";
import { convertNumberToArray } from "../utility";
import LoadingScreen from "../components/UI/LoadingScreen";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import ProductCart from "../components/UI/ProductCart";

export default function Cart({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      const filteredProducts = res.filter((product) =>
        cart.includes(product.id),
      );

      setProducts(filteredProducts.reverse());
      setLoading(false);
    };

    getAllProducts();
  }, [cart]);

  // Function to update quantity for a specific product
  

  return (
    <div className="my-5 flex w-full flex-col items-center gap-16">
      <h1 className="text text-3xl font-medium ">Check your Bag items</h1>
      {loading && <LoadingScreen />}

      <div className="flex w-full  ">
        {/* products container  */}
        <div className="flex w-4/5 flex-col items-center gap-10">
          {/* if cart is empty */}
          {products.length === 0 && (
            <>
              <p>Your Cart is Empty (:</p>

              <Link to="/">
                <button className="rounded-lg bg-black p-2 text-white hover:bg-slate-800">
                  Start Shopping 🛍️
                </button>
              </Link>
            </>
          )}

          {/* render added products */}
          {products.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          ))}
        </div>

        {/* total price and checkout button */}
        {products.length > 0 && (
          <OrderSummary products={products} quantity={quantity} />
        )}
      </div>
    </div>
  );
}
