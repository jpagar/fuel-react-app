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
  {
    id: 5,
    name: "Carribean Breeze Stiiizy Gummies",
    price: "35",
    image:
        "https://weedmaps.com/images/photos/products/000/363/079/2078675_UNI_CARIBBEAN_BREEZE_BLAST_100MG_GUMMIES_3.png?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "edible",
    description: "Cookie Platter",
  },
  {
    id: 6,
    name: "Midnight Cherry",
    price: "25",
    image:
        "https://weedmaps.com/images/photos/products/000/298/259/2054732_HH_RCS_Lights_Out_Midnight_Cherry_Gummy_Bag_and_Stack-1200x1200-28e5ebb.png?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "edible",
    description: "Midnight Cherry 25mg",
  },
  {
    id: 7,
    name: "Rove Drink 100mg Shot",
    price: "30",
    image:
        "https://weedmaps.com/images/photos/products/000/349/147/1290627_DL_Bottle-menu-Kushberry.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540",
    categoryType: "edible",
    description: "Rove Drink 100mg Shot",
  },
];

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
export const useShoppingCartStore = create<AppState & AppActions>()(
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
          return get().cart.reduce(
            (total, item) =>
              total + (item.quantity || 0) * parseFloat(item.price),
            0,
          );
        },
        getSpecificItemQuantity: (id) => {
          const item = get().cart.find((i) => i.id === id);
          return item?.quantity || 0;
        },
      }),
      {
        name: "shopping-cart-storage",
      },
    ),
  ),
);



