import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//Mock type
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  quantity?: number;
  categoryType: "flower" | "edible" | "concentrate" | "vape";
}

//Shape app state for an ecommerce store
interface AppState {
  cart: Product[];
}

interface AppActions {
  addToCart: (item: Product) => void;
  removeItem: (id: number) => void;
  getSpecificItemQuantity: (id: number) => number;
  getShoppingCartQuantity: () => number;
  getShoppingCartTotal: () => number;
  checkout: () => void;
}

//Create a store
export const useStore = create<AppState & AppActions>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (item) =>
          set((state) => {
            if (item.id) {
              const itemInCart = state.cart.find((i) => i.id === item.id);
              if (itemInCart) {
                return {
                  cart: state.cart.map((i) =>
                    i.id === item.id
                      ? { ...i, quantity: (i.quantity || 0) + 1 }
                      : i,
                  ),
                };
              }
            }
            return {
              cart: [...state.cart, { ...item, quantity: 1 }],
            };
          }),
        removeItem: (id) =>
          set((state) => {
            return {
              cart: state.cart.filter((item) => item.id !== id),
            };
          }),
        checkout: () => {
          set({ cart: [] });
        },
        getShoppingCartQuantity: () => {
          return get().cart.reduce(
            (total, item) => total + (item.quantity || 0),
            0,
          );
        },
        getShoppingCartTotal: () => {
            return get().cart.reduce((total, item) => total + (item.quantity || 0) * parseFloat(item.price) ,0)
        },
          getSpecificItemQuantity: (id) => {
              const item = get().cart.find((i) => i.id === id);
              return item?.quantity || 0;
          }
      }),
      {
        name: "shopping-cart-storage",
      },
    ),
  ),
);

//Mock Product List
export const products: Product[] = [
  {
    id: 1,
    name: "Runtz",
    price: "50",
    image:
      "https://weedmaps.com/images/photos/products/000/239/061/710648_TerryT-Gelato-Square2.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "flower",
    description: "Designer Runtz",
  },
  {
    id: 2,
    name: "Marathon OG",
    price: "50",
    image:
      "https://weedmaps.com/images/photos/products/000/070/686/344188_MarathonOG-thecurecompany-weedmaps-box-nug.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "flower",
    description: "Marathon OG",
  },
  {
    id: 3,
    name: "Ghost Face Mintz",
    price: "50",
    image:
      "https://weedmaps.com/images/photos/products/000/335/015/343492_WM_3000X3000_GHOST_FACE_MINTZ__H_.png?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "flower",
    description: "Ghost Face Mintz",
  },
  {
    id: 4,
    name: "Cookie Platter",
    price: "50",
    image:
      "https://weedmaps.com/images/products/000/095/327/avatar/1671844083-curejoint_3_pack_cookie_platter.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "flower",
    description: "Cookie Platter",
  },
];
