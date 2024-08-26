"use client";

import { useStore } from "@/app/(state)/product";
import CartInfo from "@/app/(content)/movie/components/cart-info";
import React from "react";
import { create } from "zustand";
import Link from "next/link";

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
      <div>
        <Link href="/cart/1" className="pt-10 border-2 p-10">
          카트1
        </Link>
      </div>
    </div>
  );
};

export default Cart;
