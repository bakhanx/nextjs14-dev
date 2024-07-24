import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type BearState = {
  bears: number;
};

type BearAction = {
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

type CountState = {
  count: number;
};

type CountAction = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

type UserState = {
  id: number;
  info: {
    name: {
      first: string;
      last: string;
    };
    phone: string;
    age: number;
  };
};

type UserAction = {
  immerName: (first: string, last: string) => void;
  setName: (first: string, last: string) => void;
};

export const useUserStore = create<UserState & UserAction>((set) => ({
  id: 0,
  info: {
    age: 3,
    name: { first: "", last: "" },
    phone: "",
  },
  immerName: (first, last) =>
    set(
      produce((state: UserState) => {
        state.info.name.first = first;
        state.info.name.last = last;
      })
    ),
  setName: (first, last) =>
    set((state: UserState) => ({
      info: {
        name: { first: first, last: last },
        age: state.info.age + 1,
        phone: "010",
      },
    })),
}));

export const useCountStore = create<CountState & CountAction>((set) => ({
  count: 0,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}));

export const useCountStore2 = create<CountState & CountAction>()(
  immer((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty;
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty;
      }),
  }))
);

// Persist
export const useStore = create<BearState & BearAction>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: "bear-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ bears: state.bears }),
      skipHydration:true
    }
  )
);
