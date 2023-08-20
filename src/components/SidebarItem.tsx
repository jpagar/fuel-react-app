import { ReactElement, useContext } from "react";
import SidebarContext from "../context/SideBarContext.tsx";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  icon: ReactElement;
  text: string;
  active?: boolean;
  alert?: boolean;
  to: string;
};
export const SidebarItem = ({
  icon,
  text,
  active,
  alert,
  to,
}: SidebarItemProps) => {
  const { expand, setExpand } = useContext(SidebarContext);
  return (
    <Link to={to} onClick={() => setExpand(false)}>
      {
        <li
          className={`
        group relative my-1 flex cursor-pointer items-center 
        rounded-md px-2 py-2
        font-medium transition-colors
        ${
          active
            ? "bg-gray-100 text-gray-900"
            : "text-gray-700 hover:bg-gray-100"
        }
        `}
        >
          {icon}
          <span
            className={`
            overflow-hidden transition-all
            ${expand ? "ml-2 w-32" : "w-0"}
             `}
          >
            {text}
          </span>
          {alert && (
            <div className="absolute right-2 h-2 w-2 rounded bg-primary" />
          )}
          {!expand && (
            <div
              className={`invisible absolute left-full z-10 ml-4 -translate-x-3 rounded-md bg-primary px-2 py-1 text-sm text-white opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
            >
              {text}
            </div>
          )}
        </li>
      }
    </Link>
  );
};
