import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useBearStore = create(
  immer((set) => ({
    count: 1,
    increase: () => {
      set((state) => {
        state.count += 1;
      });
    },
  })),
);
