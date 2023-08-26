import { Link } from "react-router-dom";
import React, {FC} from "react";

interface MenuTileProps extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
  to: string;
}

export const MenuTile: FC<MenuTileProps> = ({ text, to, ...props}) => {
  return (
    <Link to={to} {...props}>
      {
        <div className="d-btn d-btn-outline w-full cursor-pointer rounded px-6 py-3 shadow-lg">
          {text}
        </div>
      }
    </Link>
  );
};
