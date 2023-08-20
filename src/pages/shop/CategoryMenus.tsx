import { Categories } from "../../components/Categories.tsx";
import { MenuTile } from "../../components/MenuTile.tsx";

export const CategoryMenus = () => {
  return (
    <Categories pageTitle="Shop by Category">
      <MenuTile text="Flower" to="flower" />
      <MenuTile text="Edibles" to="edibles" />
      <MenuTile text="Vape Pens" to="vape-pens" />
      <MenuTile text="Concentrates" to="concentrates" />
    </Categories>
  );
};
