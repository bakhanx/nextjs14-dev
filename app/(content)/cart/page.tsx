"use client";

import { useStore } from "@/app/(state)/product";
import CartInfo from "@/app/product/components/cart-info";
import React from "react";
import { create } from "zustand";

const Cart = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);

  return (
    <div>
      <div>cart page</div>
      <div>{bears}</div>
      <button
        onClick={increasePopulation}
        className="bg-gray-500 text-white p-2 rounded-md"
      >
        Increase
      </button>
      <div className="pt-5">
        Info---- <CartInfo />
      </div>
    </div>
  );
};

export default Cart;
