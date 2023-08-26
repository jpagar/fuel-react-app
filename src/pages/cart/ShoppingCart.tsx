import { CartItem } from "./CartItem.tsx";
import { CartTotal } from "./CartTotal.tsx";
import {useShoppingCartStore} from "../../stores/useShoppingCartStore.ts";
import {EmptyCart} from "./EmptyCart.tsx";

export const ShoppingCart = () => {
  const {cart,removeItem, getShoppingCartQuantity, getShoppingCartTotal} = useShoppingCartStore()

  return (
    <div className="container flex flex-col items-center">
      <div className="my-2 rounded-lg border border-solid border-gray-200">
        <h1 className="text-center text-3xl">Shopping Cart</h1>

        {getShoppingCartQuantity() > 0 ? (
          <ul className="">
            <div className="max-h-[40rem] overflow-y-scroll">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  quantity={item.quantity}
                  price={item.price}
                  onClick={() => removeItem(item.id)}
                />
              ))}
            </div>
            <CartTotal total={`${getShoppingCartTotal()}`} />
          </ul>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};
