import React from "react";

export default function OrderSummary({products, quantity}) {
    console.log(products)

    const itemsPrice = products.reduce((acc, item) => acc + (item.price * quantity), 0) ;
    const shippingPrice = 6.99;
    const taxPrice = itemsPrice * 0.15;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;
return (
        <div className="flex h-fit w-1/6 flex-col items-center gap-6 rounded-xl bg-white p-5">
        <p className="text-2xl font-medium">Order Summary</p>

        <ul className="flex w-full flex-col gap-2">
            <li className="flex justify-between font-medium text-gray-500">
                Items : <span>${itemsPrice.toFixed(2)}</span>
            </li>
            <li className="flex justify-between font-medium text-gray-500">
                Shipping : <span>${shippingPrice}</span>
            </li>
            <li className="flex justify-between font-medium text-gray-500">
                Tax (15%) : <span>${taxPrice.toFixed(2)}</span>
            </li>
            <li className="flex justify-between font-medium text-gray-500">
                discount : <span>$0</span>
            </li>
            <div className="h-[1px] w-full bg-gray-300"></div>
            <li className="flex justify-between text-xl font-medium">
                {/* get the total price with the cents  */}
                Total : <span>${totalPrice.toFixed(2)}</span>
            </li>
            <div className="h-[1px] w-full bg-gray-300"></div>
        </ul>

        <button className="w-full rounded-lg bg-black p-2 text-white hover:bg-slate-800">
            Checkout
        </button>
        </div>
);
}
