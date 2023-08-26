import { Categories } from "../../components/Categories.tsx";
import { MenuTile } from "../../components/MenuTile.tsx";
import { useCategoryStore } from "../../stores/useCategoryStore.ts";

export const CategoryMenus = () => {
  const {setCategory } = useCategoryStore();

  return (
    <Categories pageTitle="Shop by Category">
      <MenuTile
        text="Flower"
        to="flower"
        onClick={() => setCategory("flower")}
      />
      <MenuTile
        text="Edibles"
        to="edibles"
        onClick={() => setCategory("edible")}
      />
      <MenuTile
        text="Vape Pens"
        to="vape-pens"
        onClick={() => setCategory("vape")}
      />
      <MenuTile
        text="Concentrates"
        to="concentrates"
        onClick={() => setCategory("concentrate")}
      />
    </Categories>
  );
};
