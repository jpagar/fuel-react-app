import { ChevronFirst, ChevronLast } from "lucide-react";
import { ReactNode, useContext } from "react";
import { DummyLogo } from "../icons/DummyLogo.tsx";
import SidebarContext from "../context/SideBarContext.tsx";
import { Link } from "react-router-dom";

type SidebarProps = {
  children: ReactNode;
};
export const Sidebar = ({ children }: SidebarProps) => {
  const { expand, setExpand } = useContext(SidebarContext);

  return (
    <div className="">
      <aside className="relative z-10 flex h-screen">
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <span
              className={`overflow-hidden transition-all ${
                expand
                  ? "xxxs:w-[17rem] xxs:w-[21.5rem] xs:w-[22.5rem] sm:w-32"
                  : "w-0"
              }`}
            >
              <Link to="/">
                {/*TODO: Modify this later to display actual brand logo*/}
                <DummyLogo />
              </Link>
            </span>
            <button onClick={() => setExpand((prevState) => !prevState)}>
              <span className="">
                {expand ? (
                  <ChevronFirst size={20} />
                ) : (
                  <ChevronLast size={20} />
                )}
              </span>
            </button>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
        </nav>
      </aside>
    </div>
  );
};
