import React, { useState } from "react";
import FormSearch from "../components/FormSearch";
import ProductLists from "../components/ProductLists";
import Category from "../components/Category";

export default function Home({ setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("/");

  return (
    <div className="my-5 flex w-full flex-col  items-center gap-16">
      <FormSearch />
      <Category
        setSelected={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ProductLists selectedCategory={selectedCategory} setCart={setCart} />
    </div>
  );
}
