import { CartItem } from "./CartItem.tsx";
import { CartTotal } from "./CartTotal.tsx";

export const ShoppingCart = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="my-2 rounded-lg border border-solid border-gray-200">
        <h1 className="text-center text-3xl">Shopping Cart</h1>

        {/* Cart Items */}
        <ul className="">
          <CartItem
            name="Gelato"
            image="https://weedmaps.com/images/photos/products/000/239/061/710648_TerryT-Gelato-Square2.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540"
            description="3.5g"
            price="55"
          />
          <CartItem
            name="Ghost Face Mintz"
            image="https://weedmaps.com/images/photos/products/000/335/015/343492_WM_3000X3000_GHOST_FACE_MINTZ__H_.png?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540"
            description="14g"
            price="190"
          />
          <CartItem
            name="Cookie Platter"
            image="https://weedmaps.com/images/products/000/095/327/avatar/1671844083-curejoint_3_pack_cookie_platter.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540"
            description="3 handed rolled joins"
            price="45"
          />
          <CartItem
            name="Marathon OG"
            image="https://weedmaps.com/images/photos/products/000/070/686/344188_MarathonOG-thecurecompany-weedmaps-box-nug.jpg?auto=format&fit=fill&fill=solid&fill-color=fff&w=540&h=540"
            description="3.5g"
            price="75"
          />
          {/* Cart Total */}
          <CartTotal total="360" />
        </ul>
      </div>
    </div>
  );
};
