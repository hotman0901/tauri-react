import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";
import { mutative } from "zustand-mutative";

// export const useBearStore = create(
//   immer((set) => ({
//     count: 1,
//     increase: () => {
//       set((state) => {
//         state.count += 1;
//       });
//     },
//   })),
// );

export const useBearStore = create(
  mutative((set) => ({
    count: 0,
    increase: (qty) =>
      set((state) => {
        state.count += qty || 1;
      }),
    decrement: (qty) =>
      set((state) => {
        state.count -= qty;
      }),
  })),
);
