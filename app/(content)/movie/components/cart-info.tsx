"use client";

import { usePersonStore } from "@/app/(state)/name";
import {
  useCountStore,
  useCountStore2,
  useStore,
  useUserStore,
} from "@/app/(state)/product";
import Button from "@/components/button";
import React, { useEffect } from "react";

const CartInfo = () => {
  
  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  const bears = useStore((state) => state.bears);

  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);

  const immerUser = useUserStore((state) => state.immerName);
  const setUser = useUserStore((state) => state.setName);

  const user = useUserStore((state) => state.info);

  const useCount = useCountStore((state) => state.count);
  const handleIncrement = useCountStore((state) => state.increment);
  const handleDecrement = useCountStore((state) => state.decrement);

  // destructure 사용법
  const { count, decrement, increment } = useCountStore2((state) => state);

  const useCount2 = useCountStore2((state) => state.count);
  const handleIncrement2 = useCountStore2((state) => state.increment);
  const handleDecrement2 = useCountStore2((state) => state.decrement);

  return (
    <div>
      <div>
        Name : {firstName} {lastName}
      </div>
      <div>Bears Count : {bears}</div>
      <div className="flex gap-x-2">
        <Button
          name="Immer User"
          onClick={() => immerUser(firstName, lastName)}
        />
        <Button name="Set User" onClick={() => setUser(firstName, lastName)} />
      </div>

      <div>User Info</div>
      <div>{user.age}</div>
      <div>{user.name.first}</div>
      <div>{user.name.last}</div>
      <div>{user.phone}</div>

      <div className="mt-5">Use Count</div>
      <div className="flex gap-x-2">
        <Button name="Use Count+1" onClick={() => handleIncrement(1)} />
        <Button name="Use Count-1" onClick={() => handleDecrement(1)} />
        <Button name="Use Count+2" onClick={() => handleIncrement2(2)} />
        <Button name="Use Count-2" onClick={() => handleDecrement2(2)} />
      </div>
      <div>count + 1 : {useCount}</div>
      <div>count + 2 : {useCount2}</div>
    </div>
  );
};

export default CartInfo;
