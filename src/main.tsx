import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { CategoryMenus } from "./pages/shop/CategoryMenus.tsx";
import { Concentrates, Flower, Edibles, VapePens } from "./pages/categories";
import { ShoppingCart } from "./pages/cart";
import { OrderHistory } from "./pages/orders";
import { ErrorPage } from "./pages/ErrorPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route>
        <Route path="shop" element={<CategoryMenus />} />
        <Route path="shop/flower" element={<Flower />} />
        <Route path="shop/edibles" element={<Edibles />} />
        <Route path="shop/vape-pens" element={<VapePens />} />
        <Route path="shop/concentrates" element={<Concentrates />} />
      </Route>
      <Route>
        <Route path="cart" element={<ShoppingCart />}></Route>
      </Route>
      <Route>
        <Route path="orders" element={<OrderHistory />}></Route>
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
