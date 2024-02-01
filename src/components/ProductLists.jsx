import React, { useEffect, useState } from "react";
import ProductCard from "./UI/ProductCard";
import LoadingScreen from "./UI/LoadingScreen";
import { Link } from "react-router-dom";

export default function ProductLists({ selectedCategory, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      let data = "";

      try {
        setLoading(true);
        if (selectedCategory !== "/") {
          data = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`,
          );
        } else {
          data = await fetch("https://fakestoreapi.com/products");
        }

        const res = await data.json();
        setProducts(res);
      } catch (error) {
        console.log(`Error: ${error}`);
      }

      setLoading(false);
    };
    getProducts();
  }, [selectedCategory]);
  return (
    <div className="grid grid-cols-4 gap-5 ">
      {loading && <LoadingScreen />}
      {products.map((item) => (
        <ProductCard
          key={item.id}
          productImg={item.image}
          prodectName={item.title}
          productprice={item.price}
          setCart={setCart}
          prodectId={item.id}
        />
      ))}
    </div>
  );
}
