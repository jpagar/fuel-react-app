import IconShoppingCart from "../icons/IconShoppingCart.tsx";

export const Navbar = () => {
  return (
    <>
      <nav className="mt-1">
        <div className="flex justify-center">
          <div className="ml-auto font-bold">ADD BRAND LOGO HERE</div>
          <div className="ml-auto cursor-pointer">
            <div className="flex gap-1">
              <IconShoppingCart height="1.5em" width="1.5em" />
              <span className="d-badge d-badge-secondary">2</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
