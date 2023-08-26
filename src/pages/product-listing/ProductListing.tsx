import { ScrollableContent } from "../../components/ScrollableContent.tsx";
import { Card } from "../../components/Card.tsx";
import { products, useShoppingCartStore } from "../../stores/useShoppingCartStore.ts";
import {useCategoryStore} from "../../stores/useCategoryStore.ts";

export const ProductListing = () => {
    //Store to manage adding products to cart
    const { addToCart } = useShoppingCartStore();

    //Store to help retrieve products based on category
    const { categorySelection } = useCategoryStore();

    //Filter products based on category selected
    const filteredProducts = products.filter((product) => product.categoryType === categorySelection)

    return (
        <>
            <ScrollableContent className="">
                {filteredProducts.map((product) => (
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
