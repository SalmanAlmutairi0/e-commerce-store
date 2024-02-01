import React, { useEffect, useState } from "react";

export default function Category({ setSelected, selectedCategory }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const data = await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategory(data))
        .catch((err) => console.log(err));
    };

    getCategory();
  }, []);

  return (
    <div className="flex items-center gap-6  ">
      {category.map((item, index) => (
        <div
          key={index}
          className={
            selectedCategory === item
              ? "cursor-pointer rounded-md bg-zinc-400  px-4 py-2 font-medium text-white shadow-lg hover:bg-slate-200 hover:text-gray-950"
              : "cursor-pointer rounded-md bg-white px-4 py-2 font-medium text-gray-950 shadow-lg hover:bg-slate-200 "
          }
          onClick={() => setSelected((prev) => (prev === item ? "/" : item))}
        >
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
}
