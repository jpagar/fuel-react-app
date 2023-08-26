import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CategoryState {
  categorySelection: string;
}

interface CategoryActions {
  setCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState & CategoryActions>()(
  devtools(
    persist(
      (set) => ({
        categorySelection: "",
        setCategory: (category) => set({categorySelection: category}),
      }),
      {
        name: "category-storage",
      },
    ),
  ),
);
