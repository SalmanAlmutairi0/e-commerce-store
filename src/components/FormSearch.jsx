import React from "react";

export default function FormSearch() {
  return (
    <form className="flex flex-col items-start gap-2">
      <h4 className="text-xs font-medium text-gray-500">Search item</h4>
      <input
        type="text"
        placeholder="Search..."
        className="w-96 rounded-xl border p-2 shadow-xl outline-none"
      />
    </form>
  );
}
