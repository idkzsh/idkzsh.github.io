import { create } from "zustand";

type CountState = {
  count: number;
  setCount: (val: number) => void;
};

// Create a store with the defined state type
export const useCountStore = create<CountState>((set) => ({
  count: 0,
  setCount: (val) => set({ count: val }),
}));
