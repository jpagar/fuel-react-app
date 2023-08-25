import { ScrollableContent } from "../../components/ScrollableContent.tsx";
import { Card } from "../../components/Card.tsx";
import { products, useStore } from "../../store.ts";
import { useEffect } from "react";

export const Flower = () => {
  const { addToCart, cart } = useStore();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <ScrollableContent className="">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            img={product.image}
            alt={product.name}
            description={
              "Some description would be added here. Maybe a short description of the product."
            }
            onClick={() => addToCart(product)}
          />
        ))}
      </ScrollableContent>
    </>
  );
};
