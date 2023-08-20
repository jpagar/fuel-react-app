import { Link } from "react-router-dom";

type MenuTileProps = {
  text: string;
  to: string;
};

export const MenuTile = ({ text, to }: MenuTileProps) => {
  return (
    <Link to={to}>
      {
        <div className="d-btn d-btn-outline w-full cursor-pointer rounded px-6 py-3 shadow-lg">
          {text}
        </div>
      }
    </Link>
  );
};
